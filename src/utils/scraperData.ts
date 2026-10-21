import { generateFullDataset } from './dataset';

export interface ScrapedRecord {
  zipcode: string;
  store_name: string;
  store_location: string;
  store_logo: string;
  store_brand: string;
  category: string;
  sub_category: string;
  product_title: string;
  weight: string;
  regular_price: string;
  sale_price: string;
  volume_deals_description: string;
  volume_deals_price: string;
  digital_deals_description: string;
  digital_deals_price: string;
  image_url: string;
  url: string;
  upc: string;
  gupc: string;
  ppm: string;
  unit_price: string;
  crawl_date: string;
}

export interface CategoryCount {
  rank: number;
  category: string;
  records: number;
}

export const SAMPLE_RECORDS: ScrapedRecord[] = [
  {
    zipcode: "75001",
    store_name: "Walmart Supercenter",
    store_location: "1234 Main St, Dallas, TX 75201",
    store_logo: "https://i5.walmartimages.com/.../logo.png",
    store_brand: "Walmart",
    category: "Beverages",
    sub_category: "Water",
    product_title: "Dasani Purified Water, 16.9 fl oz, 24 Pack",
    weight: "16.9 fl oz",
    regular_price: "$6.98",
    sale_price: "$5.98",
    volume_deals_description: "2 for $10",
    volume_deals_price: "$10.00",
    digital_deals_description: "Save $1 with Digital Coupon",
    digital_deals_price: "$0.38",
    image_url: "https://i5.walmartimages.com/.../product.jpg",
    url: "https://www.walmart.com/ip/...",
    upc: "078742118001",
    gupc: "",
    ppm: "$0.06/fl oz",
    unit_price: "",
    crawl_date: "2025-05-17"
  },
  {
    zipcode: "75001",
    store_name: "Walmart Supercenter",
    store_location: "1234 Main St, Dallas, TX 75201",
    store_logo: "https://i5.walmartimages.com/.../logo.png",
    store_brand: "Great Value",
    category: "Pantry",
    sub_category: "Pasta",
    product_title: "Great Value Spaghetti, 16 oz",
    weight: "16 oz",
    regular_price: "$0.88",
    sale_price: "$0.68",
    volume_deals_description: "Buy 4, Get 1 Free",
    volume_deals_price: "$0.68",
    digital_deals_description: "Clip Coupon: Save $0.50",
    digital_deals_price: "$0.38",
    image_url: "https://i5.walmartimages.com/.../product.jpg",
    url: "https://www.walmart.com/ip/...",
    upc: "78742100016",
    gupc: "",
    ppm: "$0.05/oz",
    unit_price: "",
    crawl_date: "2025-05-17"
  },
  {
    zipcode: "75001",
    store_name: "Walmart Supercenter",
    store_location: "1234 Main St, Dallas, TX 75201",
    store_logo: "https://i5.walmartimages.com/.../logo.png",
    store_brand: "Great Value",
    category: "Snacks",
    sub_category: "Chips",
    product_title: "Great Value Original Potato Chips, 8 oz",
    weight: "8 oz",
    regular_price: "$1.98",
    sale_price: "$1.68",
    volume_deals_description: "2 for $3",
    volume_deals_price: "$3.00",
    digital_deals_description: "",
    digital_deals_price: "",
    image_url: "https://i5.walmartimages.com/.../product.jpg",
    url: "https://www.walmart.com/ip/chips-8oz",
    upc: "078742129881",
    gupc: "",
    ppm: "$0.21/oz",
    unit_price: "",
    crawl_date: "2025-05-17"
  },
  {
    zipcode: "75001",
    store_name: "Walmart Supercenter",
    store_location: "1234 Main St, Dallas, TX 75201",
    store_logo: "https://i5.walmartimages.com/.../logo.png",
    store_brand: "Tide",
    category: "Household Essentials",
    sub_category: "Laundry",
    product_title: "Tide Liquid Laundry Detergent, Original, 92 fl oz",
    weight: "92 fl oz",
    regular_price: "$12.97",
    sale_price: "$11.97",
    volume_deals_description: "",
    volume_deals_price: "",
    digital_deals_description: "Clip Coupon: Save $3.00",
    digital_deals_price: "$8.97",
    image_url: "https://i5.walmartimages.com/.../product.jpg",
    url: "https://www.walmart.com/ip/tide-92oz",
    upc: "037000123456",
    gupc: "",
    ppm: "$0.13/fl oz",
    unit_price: "",
    crawl_date: "2025-05-17"
  },
  {
    zipcode: "75001",
    store_name: "Walmart Supercenter",
    store_location: "1234 Main St, Dallas, TX 75201",
    store_logo: "https://i5.walmartimages.com/.../logo.png",
    store_brand: "Great Value",
    category: "Dairy & Eggs",
    sub_category: "Milk",
    product_title: "Great Value Whole Vitamin D Milk, 1 Gallon",
    weight: "128 fl oz",
    regular_price: "$3.12",
    sale_price: "$2.98",
    volume_deals_description: "",
    volume_deals_price: "",
    digital_deals_description: "",
    digital_deals_price: "",
    image_url: "https://i5.walmartimages.com/.../product.jpg",
    url: "https://www.walmart.com/ip/gv-milk-1gal",
    upc: "078742352011",
    gupc: "",
    ppm: "$0.02/fl oz",
    unit_price: "",
    crawl_date: "2025-05-17"
  }
];

export const TOP_CATEGORIES: CategoryCount[] = [
  { rank: 1, category: "Beverages", records: 182 },
  { rank: 2, category: "Pantry", records: 154 },
  { rank: 3, category: "Snacks", records: 132 },
  { rank: 4, category: "Household Essentials", records: 121 },
  { rank: 5, category: "Dairy & Eggs", records: 98 },
  { rank: 6, category: "Frozen Foods", records: 87 },
  { rank: 7, category: "Fresh Produce", records: 76 },
  { rank: 8, category: "Personal Care", records: 64 },
  { rank: 9, category: "Health & Wellness", records: 52 },
  { rank: 10, category: "Baby Care", records: 42 }
];

export const FULL_DATASET: ScrapedRecord[] = generateFullDataset();

export function calculateOperatingCost(storesCount = 1, runsPerWeek = 2) {
  const scale = (storesCount * (runsPerWeek / 2));
  const minCompute = Math.round(60 * Math.max(1, Math.sqrt(scale)));
  const maxCompute = Math.round(100 * Math.max(1, Math.sqrt(scale)));
  const minProxy = Math.round(120 * scale);
  const maxProxy = Math.round(200 * scale);
  const minStorage = Math.round(10 * Math.max(1, scale * 0.5));
  const maxStorage = Math.round(20 * Math.max(1, scale * 0.5));

  return {
    compute: `$${minCompute} – $${maxCompute}`,
    proxy: `$${minProxy} – $${maxProxy}`,
    storage: `$${minStorage} – $${maxStorage}`,
    total: `$${minCompute + minProxy + minStorage} – $${maxCompute + maxProxy + maxStorage} / month`
  };
}

export function validateRecordIntegrity(record: ScrapedRecord): boolean {
  const requiredKeys: (keyof ScrapedRecord)[] = [
    'zipcode',
    'store_name',
    'store_location',
    'category',
    'product_title',
    'regular_price',
    'sale_price',
    'crawl_date'
  ];
  return requiredKeys.every(k => Boolean(record[k] && record[k].trim().length > 0));
}

export function checkDuplicateCount(records: ScrapedRecord[]): number {
  const seen = new Set<string>();
  let duplicates = 0;
  for (const r of records) {
    const key = `${r.upc || r.url}_${r.zipcode}`;
    if (seen.has(key)) {
      duplicates++;
    } else {
      seen.add(key);
    }
  }
  return duplicates;
}

export function searchAndFilterRecords(
  query: string = "",
  category: string = "All",
  dealType: 'all' | 'volume' | 'digital' | 'none' | 'ppm' = "all"
): ScrapedRecord[] {
  return FULL_DATASET.filter((record) => {
    if (category !== "All" && record.category !== category) {
      return false;
    }
    if (dealType === "volume" && (!record.volume_deals_description || record.volume_deals_description.length === 0)) {
      return false;
    }
    if (dealType === "digital" && (!record.digital_deals_description || record.digital_deals_description.length === 0)) {
      return false;
    }
    if (dealType === "ppm" && (!record.ppm || record.ppm.length === 0)) {
      return false;
    }
    if (dealType === "none" && (record.volume_deals_description || record.digital_deals_description)) {
      return false;
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      const match =
        record.product_title.toLowerCase().includes(q) ||
        record.upc.includes(q) ||
        record.sub_category.toLowerCase().includes(q) ||
        record.store_brand.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
}

export function exportRecordsToCSV(records: ScrapedRecord[]): string {
  const headers = [
    "zipcode",
    "store_name",
    "store_location",
    "store_logo",
    "store_brand",
    "category",
    "sub_category",
    "product_title",
    "weight",
    "regular_price",
    "sale_price",
    "volume_deals_description",
    "volume_deals_price",
    "digital_deals_description",
    "digital_deals_price",
    "image_url",
    "url",
    "upc",
    "gupc",
    "ppm",
    "unit_price",
    "crawl_date"
  ];

  const escapeCSV = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;

  const rows = records.map((r) =>
    headers.map((h) => escapeCSV((r as any)[h])).join(";")
  );

  return [headers.join(";"), ...rows].join("\n");
}
