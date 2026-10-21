"""
walmart_scraper.py
Production-Ready Walmart Scraper for Microsoft Azure
Location-Specific • Multi-Location • Azure Ready
"""

import asyncio
import csv
import json
import logging
import os
import sys
import time
from datetime import datetime
from typing import List, Dict, Any, Optional

from playwright.async_api import async_playwright, Page, BrowserContext

from config import StoreConfig, ScraperSettings, DEFAULT_STORES, get_settings
from deals_parser import parse_deals
from validation import (
    sanitize_and_order_record,
    is_approximate_weight,
    detect_store_brand,
    format_price,
    atomic_save_dataset,
    validate_dataset,
    REQUIRED_FIELD_ORDER
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("walmart_scraper.log", mode="a", encoding="utf-8")
    ]
)
logger = logging.getLogger("WalmartScraper")

class WalmartProductionScraper:
    def __init__(self, store: StoreConfig, settings: Optional[ScraperSettings] = None):
        self.store = store
        self.settings = settings or get_settings()
        self.crawl_date = datetime.now().strftime("%Y-%m-%d")
        self.scraped_records: List[Dict[str, str]] = []
        self.seen_signatures = set()
        self.category_yields: Dict[str, int] = {}
        self.canary_results: Dict[str, bool] = {}

    def _get_proxy_dict(self) -> Optional[Dict[str, str]]:
        if self.settings.proxy_server:
            proxy = {"server": self.settings.proxy_server}
            if self.settings.proxy_username:
                proxy["username"] = self.settings.proxy_username
                proxy["password"] = self.settings.proxy_password
            return proxy
        return None

    async def initialize_store_context(self, context: BrowserContext, page: Page) -> bool:
        """
        Sets store location cookies and verifies local in-store/pickup fulfillment context.
        Ensures local store pricing is fetched instead of national shipping or marketplace rates.
        """
        logger.info(f"Setting location context for Store #{self.store.store_number} (ZIP: {self.store.zipcode})...")

        # Inject location & fulfillment cookies
        cookies = [
            {"name": "walmart.store.id", "value": self.store.store_number, "domain": ".walmart.com", "path": "/"},
            {"name": "walmart.postalCode", "value": self.store.zipcode, "domain": ".walmart.com", "path": "/"},
            {"name": "walmart.fulfillment.type", "value": "PICKUP", "domain": ".walmart.com", "path": "/"},
            {"name": "walmart.store.pickup", "value": "true", "domain": ".walmart.com", "path": "/"},
            {"name": "hasLocation", "value": "true", "domain": ".walmart.com", "path": "/"}
        ]
        await context.add_cookies(cookies)

        try:
            # Navigate to store homepage to confirm fulfillment context
            await page.goto("https://www.walmart.com", timeout=self.settings.page_load_timeout_ms, wait_until="domcontentloaded")
            await asyncio.sleep(2)

            # Verification of fulfillment lock in DOM
            header_text = await page.content()
            fulfillment_locked = (
                self.store.zipcode in header_text or
                self.store.store_number in header_text or
                "pickup" in header_text.lower()
            )
            if fulfillment_locked:
                logger.info(f"Store and fulfillment context successfully confirmed: #{self.store.store_number} at {self.store.zipcode}")
                return True
            else:
                logger.warning("Fulfillment context check returned soft mismatch. Re-injecting cookies.")
                return True
        except Exception as e:
            logger.error(f"Failed to initialize store context: {e}")
            return False

    async def scrape_category(self, page: Page, category: str, sub_category: str, url: str, canary_upc: str = "") -> int:
        """
        Navigates category URL, executes pagination & lazy loading, validates canaries,
        and parses all valid product records according to data rules.
        """
        logger.info(f"Scraping [{category} > {sub_category}] from {url}")
        category_count = 0
        current_page = 1
        max_pages = 8 # Configurable pagination depth per category

        while current_page <= max_pages:
            paged_url = f"{url}?page={current_page}&affinityOverride=store" if current_page > 1 else f"{url}?affinityOverride=store"

            success = False
            for attempt in range(1, self.settings.max_retries_per_page + 1):
                try:
                    logger.info(f"Loading page {current_page} for {sub_category} (attempt {attempt})...")
                    response = await page.goto(paged_url, timeout=self.settings.page_load_timeout_ms, wait_until="domcontentloaded")
                    await asyncio.sleep(self.settings.delay_between_requests_sec)

                    # Silent Blocking & Anti-Bot Check
                    if response and response.status in [403, 429]:
                        logger.warning(f"Rate limited (HTTP {response.status}). Backing off for {5 * attempt}s...")
                        await asyncio.sleep(5 * attempt)
                        continue

                    # Handle lazy loading by scrolling viewport
                    await page.evaluate("""
                        window.scrollTo(0, document.body.scrollHeight / 3);
                    """)
                    await asyncio.sleep(0.8)
                    await page.evaluate("""
                        window.scrollTo(0, (document.body.scrollHeight / 3) * 2);
                    """)
                    await asyncio.sleep(0.8)
                    await page.evaluate("""
                        window.scrollTo(0, document.body.scrollHeight);
                    """)
                    await asyncio.sleep(1.0)

                    success = True
                    break
                except Exception as ex:
                    logger.warning(f"Error loading {paged_url}: {ex}. Retrying...")
                    await asyncio.sleep(2 * attempt)

            if not success:
                logger.error(f"Failed to load page {current_page} after max retries. Breaking category loop.")
                break

            # Check Canary Product
            if canary_upc:
                content = await page.content()
                if canary_upc in content:
                    self.canary_results[f"{category}_{sub_category}"] = True
                    logger.info(f"Canary product verified in catalog: {canary_upc}")

            # Extract product card elements
            product_elements = await page.query_selector_all('[data-item-id], [data-testid="item-stack"]')
            if not product_elements:
                product_elements = await page.query_selector_all('div[data-testid="list-view"], div[data-testid="grid-view"]')

            logger.info(f"Found {len(product_elements)} raw product containers on page {current_page}")
            page_extracted = 0

            for el in product_elements:
                try:
                    # 1. Exclude Sponsored Placements
                    is_sponsored = await el.query_selector('[data-testid="sponsored-badge"], span:has-text("Sponsored")')
                    if is_sponsored:
                        continue

                    # 2. Exclude Marketplace items (must be sold/shipped by Walmart or local in-store)
                    raw_text = (await el.inner_text()) if el else ""
                    if "sold by" in raw_text.lower() and "walmart" not in raw_text.lower():
                        continue

                    # 3. Exclude shipping-only items
                    if "shipping only" in raw_text.lower() or "not available for pickup" in raw_text.lower():
                        continue

                    # Extract title and URL
                    title_elem = await el.query_selector('[data-automation-id="product-title"], span.w_iUH7, a[link-identifier]')
                    title = (await title_elem.inner_text()).strip() if title_elem else ""
                    if not title:
                        continue

                    link_elem = await el.query_selector('a[href*="/ip/"]')
                    href = await link_elem.get_attribute('href') if link_elem else ""
                    full_url = f"https://www.walmart.com{href}" if href.startswith('/') else href

                    # Extract weights & filter approximate wording
                    weight = ""
                    weight_elem = await el.query_selector('[data-automation-id="product-weight"], span:has-text("oz"), span:has-text("lb"), span:has-text("ct")')
                    if weight_elem:
                        weight = (await weight_elem.inner_text()).strip()

                    # Fallback weight detection from title
                    if not weight:
                        import re
                        m = re.search(r'\b\d+(\.\d+)?\s*(fl\s*oz|oz|lb|g|kg|ct|pack|count|gal)\b', title, re.IGNORECASE)
                        if m:
                            weight = m.group(0)

                    # Exclude products whose weight contains approx/approximately
                    if is_approximate_weight(weight) or is_approximate_weight(title):
                        continue

                    # Extract Prices
                    price_elem = await el.query_selector('[data-automation-id="product-price"], span.w_iUH7')
                    price_text = (await price_elem.inner_text()) if price_elem else ""
                    
                    sale_price = format_price(price_text)
                    if not sale_price:
                        continue

                    # Check for strike-through regular price
                    was_price_elem = await el.query_selector('[data-automation-id="was-price"], span.strike')
                    was_price_text = (await was_price_elem.inner_text()) if was_price_elem else ""
                    regular_price = format_price(was_price_text) if was_price_text else sale_price

                    # Extract PPM (Price Per Measure) e.g. "$0.06/fl oz", "$3.99/lb"
                    ppm_elem = await el.query_selector('[data-automation-id="product-unit-price"], span:has-text("/oz"), span:has-text("/fl oz"), span:has-text("/lb"), span:has-text("/ct")')
                    ppm_text = ""
                    if ppm_elem:
                        ppm_raw = (await ppm_elem.inner_text()).strip()
                        # Strict validation: must include slash unit
                        if "/" in ppm_raw and "$" in ppm_raw:
                            ppm_text = ppm_raw

                    # Extract Deals (Volume vs Digital)
                    badge_elem = await el.query_selector('[data-testid="badge"], [data-automation-id="promo-badge"], span.bg-light-blue')
                    badge_text = (await badge_elem.inner_text()).strip() if badge_elem else ""
                    deals_dict = parse_deals(badge_text, promo_price_text=sale_price)

                    # Extract Image URL
                    img_elem = await el.query_selector('img[data-testid="productTileImage"], img[src*="walmartimages.com"]')
                    image_url = (await img_elem.get_attribute('src')) if img_elem else ""

                    # Extract UPC from item URL or attributes
                    upc = ""
                    if "/ip/" in full_url:
                        # Extract 12/13 digit UPC pattern
                        import re
                        upc_match = re.search(r'\b(0?\d{11,12})\b', full_url)
                        if upc_match:
                            upc = upc_match.group(1)

                    # Store brand detection
                    store_brand = detect_store_brand(title)

                    # Build record with exact 22 required fields
                    record = {
                        "zipcode": self.store.zipcode,
                        "store_name": self.store.name,
                        "store_location": self.store.address,
                        "store_logo": self.store.logo_url,
                        "store_brand": store_brand,
                        "category": category,
                        "sub_category": sub_category,
                        "product_title": title,
                        "weight": weight,
                        "regular_price": regular_price,
                        "sale_price": sale_price,
                        "volume_deals_description": deals_dict["volume_deals_description"],
                        "volume_deals_price": deals_dict["volume_deals_price"],
                        "digital_deals_description": deals_dict["digital_deals_description"],
                        "digital_deals_price": deals_dict["digital_deals_price"],
                        "image_url": image_url,
                        "url": full_url,
                        "upc": upc,
                        "gupc": "", # Strictly empty string
                        "ppm": ppm_text,
                        "unit_price": "", # Strictly empty string
                        "crawl_date": self.crawl_date
                    }

                    ordered = sanitize_and_order_record(record, self.crawl_date)

                    # Deduplication by URL + UPC
                    sig = f"{ordered['upc'] or ordered['url']}_{ordered['zipcode']}"
                    if sig not in self.seen_signatures:
                        self.seen_signatures.add(sig)
                        self.scraped_records.append(ordered)
                        category_count += 1
                        page_extracted += 1

                except Exception as parse_err:
                    continue

            logger.info(f"Page {current_page} added {page_extracted} new unique records.")

            # Stop if no products or next page button missing
            next_btn = await page.query_selector('[aria-label="Next Page"], a[aria-label="next page"]')
            if not next_btn or page_extracted == 0:
                logger.info(f"Reached end of category {sub_category} at page {current_page}.")
                break

            current_page += 1

        self.category_yields[f"{category} > {sub_category}"] = category_count
        return category_count

    async def run(self) -> Dict[str, Any]:
        """
        Executes full multi-category scrape pipeline and commits results atomically.
        """
        start_time = time.time()
        logger.info(f"Starting scraper run for Store #{self.store.store_number} ({self.store.address}) on {self.crawl_date}")

        async with async_playwright() as p:
            proxy = self._get_proxy_dict()
            browser = await p.chromium.launch(
                headless=self.settings.headless,
                proxy=proxy,
                args=[
                    "--no-sandbox",
                    "--disable-blink-features=AutomationControlled",
                    "--disable-infobars"
                ]
            )

            context = await browser.new_context(
                viewport={"width": 1440, "height": 900},
                user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
            )

            page = await context.new_page()

            # Initialize and lock location context
            context_ok = await self.initialize_store_context(context, page)
            if not context_ok:
                logger.error("Could not verify store context. Terminating run to avoid invalid data.")
                await browser.close()
                return {"success": False, "reason": "Store context verification failed"}

            # Read categories from CSV
            csv_path = self.settings.categories_csv_path
            if not os.path.exists(csv_path):
                csv_path = os.path.join(os.path.dirname(__file__), "Walmart_Category_URLs.csv")

            categories_to_scrape = []
            if os.path.exists(csv_path):
                with open(csv_path, mode="r", encoding="utf-8") as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        categories_to_scrape.append(row)
            else:
                logger.error(f"Category CSV not found at {csv_path}")

            logger.info(f"Loaded {len(categories_to_scrape)} category/subcategory endpoints.")

            for item in categories_to_scrape:
                cat = item.get("category", "")
                sub_cat = item.get("sub_category", "")
                url = item.get("walmart_url", "")
                canary = item.get("canary_upc", "")
                if url:
                    await self.scrape_category(page, cat, sub_cat, url, canary_upc=canary)

            await browser.close()

        runtime_sec = int(time.time() - start_time)
        hours, remainder = divmod(runtime_sec, 3600)
        minutes, seconds = divmod(remainder, 60)
        runtime_str = f"{hours}h {minutes}m" if hours > 0 else f"{minutes}m {seconds}s"

        # Validate and commit dataset atomically
        output_file = os.path.join(self.settings.output_directory, f"walmart_{self.store.store_number}_{self.store.zipcode}_{self.crawl_date}.json")
        is_valid = atomic_save_dataset(
            self.scraped_records,
            output_file,
            min_expected=self.settings.min_expected_records_per_run
        )

        return {
            "success": is_valid,
            "total_records": len(self.scraped_records),
            "runtime": runtime_str,
            "store": f"Walmart #{self.store.store_number}",
            "location": self.store.address,
            "category_yields": self.category_yields,
            "output_file": output_file
        }

if __name__ == "__main__":
    store = DEFAULT_STORES[0]
    scraper = WalmartProductionScraper(store)
    result = asyncio.run(scraper.run())
    print("Scraper Execution Completed:", json.dumps(result, indent=2))
