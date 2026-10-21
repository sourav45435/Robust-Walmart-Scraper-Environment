"""
config.py
Externalized configuration for Microsoft Azure deployment:
- Credentials, proxies, and secrets loaded from environment or Azure Key Vault
- Multi-location registry
- Pacing, concurrency, retries, and canary thresholds
"""

import os
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class StoreConfig:
    store_number: str
    zipcode: str
    name: str
    address: str
    logo_url: str = "https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"

# Pre-configured multi-location registry (expandable without altering scraper code)
DEFAULT_STORES: List[StoreConfig] = [
    StoreConfig(
        store_number="4012",
        zipcode="75001",
        name="Walmart Supercenter",
        address="1234 Main St, Dallas, TX 75201"
    ),
    StoreConfig(
        store_number="1129",
        zipcode="78701",
        name="Walmart Supercenter",
        address="2525 E Anderson Ln, Austin, TX 78752"
    ),
    StoreConfig(
        store_number="3782",
        zipcode="32801",
        name="Walmart Supercenter",
        address="5991 S Goldenrod Rd, Orlando, FL 32822"
    )
]

@dataclass
class ScraperSettings:
    # Azure Environment & Storage
    azure_storage_connection_string: str = field(
        default_factory=lambda: os.getenv("AZURE_STORAGE_CONNECTION_STRING", "")
    )
    azure_container_name: str = field(
        default_factory=lambda: os.getenv("AZURE_CONTAINER_NAME", "walmart-scraper-data")
    )
    azure_key_vault_url: str = field(
        default_factory=lambda: os.getenv("AZURE_KEY_VAULT_URL", "")
    )

    # Residential / Datacenter Proxies
    proxy_server: str = field(default_factory=lambda: os.getenv("PROXY_SERVER", ""))
    proxy_username: str = field(default_factory=lambda: os.getenv("PROXY_USERNAME", ""))
    proxy_password: str = field(default_factory=lambda: os.getenv("PROXY_PASSWORD", ""))

    # Scraping Pacing & Reliability Safeguards
    headless: bool = True
    page_load_timeout_ms: int = 30000
    action_timeout_ms: int = 15000
    delay_between_requests_sec: float = 1.5
    max_retries_per_page: int = 3
    backoff_multiplier: float = 2.0
    min_expected_records_per_run: int = 500

    # Paths
    categories_csv_path: str = field(
        default_factory=lambda: os.getenv("CATEGORIES_CSV_PATH", "Walmart_Category_URLs.csv")
    )
    output_directory: str = "output"

def get_settings() -> ScraperSettings:
    return ScraperSettings()
