import { ScrapedRecord } from './scraperData';

export const STORE_INFO = {
  zipcode: "75001",
  store_name: "Walmart Supercenter",
  store_location: "1234 Main St, Dallas, TX 75201",
  store_logo: "https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg",
  crawl_date: "2025-05-17"
};

export const CATEGORIES_DATA = [
  {
    category: "Beverages",
    sub: "Water",
    items: [
      { title: "Dasani Purified Water, 16.9 fl oz, 24 Pack", brand: "Walmart", weight: "16.9 fl oz", reg: "$6.98", sale: "$5.98", v_desc: "2 for $10", v_price: "$10.00", d_desc: "Save $1 with Digital Coupon", d_price: "$0.38", ppm: "$0.06/fl oz", upc: "078742118001" },
      { title: "Great Value Purified Drinking Water, 16.9 fl oz, 40 Pack Bottles", brand: "Great Value", weight: "16.9 fl oz", reg: "$5.36", sale: "$5.36", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.04/fl oz", upc: "078742054013" },
      { title: "Aquafina Purified Bottled Water, 16.9 fl oz, 24 Pack Bottles", brand: "no", weight: "16.9 fl oz", reg: "$6.48", sale: "$5.98", v_desc: "2 for $11", v_price: "$11.00", d_desc: "", d_price: "", ppm: "$0.06/fl oz", upc: "012000504082" },
      { title: "Nestle Pure Life Purified Water, 16.9 fl oz, 28 Pack", brand: "no", weight: "16.9 fl oz", reg: "$5.98", sale: "$4.98", v_desc: "Buy 2, Get 1 Free", v_price: "", d_desc: "Clip Coupon: Save $0.75", d_price: "$4.23", ppm: "$0.05/fl oz", upc: "068274000216" },
      { title: "Smartwater Vapor Distilled Premium Water Bottles, 33.8 fl oz, 6 Pack", brand: "no", weight: "33.8 fl oz", reg: "$11.48", sale: "$9.98", v_desc: "", v_price: "", d_desc: "Save $1 with Digital Coupon", d_price: "$8.98", ppm: "$0.10/fl oz", upc: "786162000008" },
      { title: "FIJI Natural Artesian Water, 16.9 fl oz, 6 Pack Bottles", brand: "no", weight: "16.9 fl oz", reg: "$8.98", sale: "$7.98", v_desc: "2 for $14", v_price: "$14.00", d_desc: "", d_price: "", ppm: "$0.14/fl oz", upc: "632565000012" },
      { title: "Great Value Spring Water, 1 Gallon Bottle", brand: "Great Value", weight: "128 fl oz", reg: "$1.44", sale: "$1.34", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.01/fl oz", upc: "078742130115" },
      { title: "Ozarka 100% Natural Spring Water, 16.9 fl oz, 24 Pack", brand: "no", weight: "16.9 fl oz", reg: "$6.28", sale: "$5.48", v_desc: "2 for $10", v_price: "$10.00", d_desc: "", d_price: "", ppm: "$0.05/fl oz", upc: "074780242203" }
    ]
  },
  {
    category: "Beverages",
    sub: "Soda & Soft Drinks",
    items: [
      { title: "Coca-Cola Original Taste Soda, 12 fl oz, 12 Pack Cans", brand: "no", weight: "144 fl oz", reg: "$8.98", sale: "$7.98", v_desc: "3 for $20", v_price: "$20.00", d_desc: "Save $1 with Digital Coupon", d_price: "$6.98", ppm: "$0.06/fl oz", upc: "049000050116" },
      { title: "Pepsi Cola Soda Pop, 12 fl oz, 12 Pack Cans", brand: "no", weight: "144 fl oz", reg: "$8.48", sale: "$7.48", v_desc: "3 for $19", v_price: "$19.00", d_desc: "Clip Coupon: Save $1.50", d_price: "$5.98", ppm: "$0.05/fl oz", upc: "012000018121" },
      { title: "Dr Pepper Soda, 12 fl oz, 12 Pack Cans", brand: "no", weight: "144 fl oz", reg: "$8.98", sale: "$7.98", v_desc: "3 for $20", v_price: "$20.00", d_desc: "", d_price: "", ppm: "$0.06/fl oz", upc: "078000082404" },
      { title: "Sprite Lemon-Lime Soda, 12 fl oz, 12 Pack Cans", brand: "no", weight: "144 fl oz", reg: "$8.98", sale: "$7.98", v_desc: "3 for $20", v_price: "$20.00", d_desc: "", d_price: "", ppm: "$0.06/fl oz", upc: "049000050147" },
      { title: "Great Value Twist Up Lemon Lime Soda, 2 Liter Bottle", brand: "Great Value", weight: "67.6 fl oz", reg: "$1.28", sale: "$1.18", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.02/fl oz", upc: "078742045516" },
      { title: "Mountain Dew Citrus Soda Pop, 12 fl oz, 12 Pack Cans", brand: "no", weight: "144 fl oz", reg: "$8.48", sale: "$7.48", v_desc: "3 for $19", v_price: "$19.00", d_desc: "", d_price: "", ppm: "$0.05/fl oz", upc: "012000018138" }
    ]
  },
  {
    category: "Pantry",
    sub: "Pasta",
    items: [
      { title: "Great Value Spaghetti, 16 oz", brand: "Great Value", weight: "16 oz", reg: "$0.88", sale: "$0.68", v_desc: "Buy 4, Get 1 Free", v_price: "$0.68", d_desc: "Clip Coupon: Save $0.50", d_price: "$0.38", ppm: "$0.05/oz", upc: "78742100016" },
      { title: "Barilla Classic Blue Box Spaghetti Pasta, 16 oz", brand: "no", weight: "16 oz", reg: "$1.88", sale: "$1.68", v_desc: "2 for $3", v_price: "$3.00", d_desc: "", d_price: "", ppm: "$0.11/oz", upc: "076808500139" },
      { title: "Great Value Penne Rigate Pasta, 16 oz", brand: "Great Value", weight: "16 oz", reg: "$0.88", sale: "$0.68", v_desc: "Buy 4, Get 1 Free", v_price: "$0.68", d_desc: "", d_price: "", ppm: "$0.05/oz", upc: "078742100023" },
      { title: "Rao's Homemade Marinara Pasta Sauce, 24 oz Jar", brand: "no", weight: "24 oz", reg: "$7.98", sale: "$6.98", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.00", d_price: "$5.98", ppm: "$0.29/oz", upc: "747479000015" },
      { title: "Prego Traditional Italian Pasta Sauce, 24 oz Jar", brand: "no", weight: "24 oz", reg: "$2.48", sale: "$2.18", v_desc: "2 for $4", v_price: "$4.00", d_desc: "", d_price: "", ppm: "$0.09/oz", upc: "051000025402" },
      { title: "Great Value Traditional Pasta Sauce, 24 oz Jar", brand: "Great Value", weight: "24 oz", reg: "$1.58", sale: "$1.48", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.06/oz", upc: "078742231200" }
    ]
  },
  {
    category: "Snacks",
    sub: "Chips",
    items: [
      { title: "Great Value Original Potato Chips, 8 oz", brand: "Great Value", weight: "8 oz", reg: "$1.98", sale: "$1.68", v_desc: "2 for $3", v_price: "$3.00", d_desc: "", d_price: "", ppm: "$0.21/oz", upc: "078742129881" },
      { title: "Lay's Classic Potato Chips, 8 oz Bag", brand: "no", weight: "8 oz", reg: "$3.98", sale: "$3.48", v_desc: "2 for $6", v_price: "$6.00", d_desc: "Save $1 with Digital Coupon", d_price: "$2.48", ppm: "$0.44/oz", upc: "028400043816" },
      { title: "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz Bag", brand: "no", weight: "9.25 oz", reg: "$4.48", sale: "$3.98", v_desc: "2 for $7", v_price: "$7.00", d_desc: "", d_price: "", ppm: "$0.43/oz", upc: "028400642033" },
      { title: "Tostitos Scoops! Tortilla Chips, 10 oz Bag", brand: "no", weight: "10 oz", reg: "$4.48", sale: "$3.98", v_desc: "2 for $7", v_price: "$7.00", d_desc: "", d_price: "", ppm: "$0.40/oz", upc: "028400064118" },
      { title: "Cheetos Crunchy Cheese Flavored Snacks, 8.5 oz Bag", brand: "no", weight: "8.5 oz", reg: "$3.98", sale: "$3.48", v_desc: "2 for $6", v_price: "$6.00", d_desc: "", d_price: "", ppm: "$0.41/oz", upc: "028400043915" },
      { title: "Pringles Original Potato Crisps, 5.2 oz Can", brand: "no", weight: "5.2 oz", reg: "$2.18", sale: "$1.98", v_desc: "3 for $5", v_price: "$5.00", d_desc: "Clip Coupon: Save $0.50", d_price: "$1.48", ppm: "$0.38/oz", upc: "038000138416" }
    ]
  },
  {
    category: "Household Essentials",
    sub: "Laundry",
    items: [
      { title: "Tide Liquid Laundry Detergent, Original, 92 fl oz", brand: "no", weight: "92 fl oz", reg: "$12.97", sale: "$11.97", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $3.00", d_price: "$8.97", ppm: "$0.13/fl oz", upc: "037000123456" },
      { title: "Great Value Original Concentrated Bleach, 81 fl oz", brand: "Great Value", weight: "81 fl oz", reg: "$3.98", sale: "$3.48", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.04/fl oz", upc: "078742012013" },
      { title: "Gain Flings Laundry Detergent Pacs, 60 Count", brand: "no", weight: "42 oz", reg: "$15.94", sale: "$14.44", v_desc: "", v_price: "", d_desc: "Save $2 with Digital Coupon", d_price: "$12.44", ppm: "$0.24/ct", upc: "037000762117" },
      { title: "Downy Ultra Liquid Fabric Conditioner, April Fresh, 140 Loads", brand: "no", weight: "120 fl oz", reg: "$10.97", sale: "$9.97", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.50", d_price: "$8.47", ppm: "$0.08/fl oz", upc: "037000358414" },
      { title: "Bounty Select-A-Size Paper Towels, White, 6 Double Plus Rolls", brand: "no", weight: "6 ct", reg: "$16.98", sale: "$15.48", v_desc: "", v_price: "", d_desc: "Save $2 with Digital Coupon", d_price: "$13.48", ppm: "$2.58/ct", upc: "037000854213" },
      { title: "Charmin Ultra Strong Clean Touch Toilet Paper, 12 Mega Rolls", brand: "no", weight: "12 ct", reg: "$15.48", sale: "$14.28", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.00", d_price: "$13.28", ppm: "$1.19/ct", upc: "037000624118" }
    ]
  },
  {
    category: "Dairy & Eggs",
    sub: "Milk",
    items: [
      { title: "Great Value Whole Vitamin D Milk, 1 Gallon", brand: "Great Value", weight: "128 fl oz", reg: "$3.12", sale: "$2.98", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.02/fl oz", upc: "078742352011" },
      { title: "Great Value 2% Reduced Fat Milk, 1 Gallon", brand: "Great Value", weight: "128 fl oz", reg: "$3.12", sale: "$2.98", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.02/fl oz", upc: "078742352028" },
      { title: "Great Value Large White Eggs, 18 Count", brand: "Great Value", weight: "18 ct", reg: "$3.48", sale: "$3.18", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.18/ct", upc: "078742111125" },
      { title: "Kraft Singles American Cheese Slices, 24 Slices, 16 oz", brand: "no", weight: "16 oz", reg: "$4.48", sale: "$3.98", v_desc: "2 for $7", v_price: "$7.00", d_desc: "", d_price: "", ppm: "$0.25/oz", upc: "021000616893" },
      { title: "Chobani Greek Yogurt, Strawberry, 5.3 oz Cup", brand: "no", weight: "5.3 oz", reg: "$1.34", sale: "$1.18", v_desc: "4 for $4", v_price: "$4.00", d_desc: "", d_price: "", ppm: "$0.22/oz", upc: "894700010045" },
      { title: "Land O Lakes Salted Butter Sticks, 1 lb (4 Sticks)", brand: "no", weight: "16 oz", reg: "$4.98", sale: "$4.48", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $0.50", d_price: "$3.98", ppm: "$0.28/oz", upc: "034500151167" }
    ]
  },
  {
    category: "Frozen Foods",
    sub: "Meals",
    items: [
      { title: "Stouffer's Classics Lasagna with Meat & Sauce, 10.5 oz", brand: "no", weight: "10.5 oz", reg: "$3.98", sale: "$3.48", v_desc: "3 for $9", v_price: "$9.00", d_desc: "", d_price: "", ppm: "$0.33/oz", upc: "013800101502" },
      { title: "DiGiorno Rising Crust Four Cheese Frozen Pizza, 28.2 oz", brand: "no", weight: "28.2 oz", reg: "$6.98", sale: "$5.98", v_desc: "2 for $11", v_price: "$11.00", d_desc: "Clip Coupon: Save $1.00", d_price: "$4.98", ppm: "$0.21/oz", upc: "071921003378" },
      { title: "Hot Pockets Pepperoni Pizza Frozen Sandwiches, 2 Count, 9 oz", brand: "no", weight: "9 oz", reg: "$2.98", sale: "$2.68", v_desc: "Buy 3, Get 1 Free", v_price: "", d_desc: "", d_price: "", ppm: "$0.30/oz", upc: "043695071015" },
      { title: "Great Value Frozen Broccoli Florets, 12 oz Steamable Bag", brand: "Great Value", weight: "12 oz", reg: "$1.18", sale: "$1.08", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.09/oz", upc: "078742220143" },
      { title: "Breyers Natural Vanilla Ice Cream, 48 oz Tub", brand: "no", weight: "48 oz", reg: "$4.98", sale: "$4.28", v_desc: "2 for $8", v_price: "$8.00", d_desc: "", d_price: "", ppm: "$0.09/oz", upc: "077567254338" }
    ]
  },
  {
    category: "Fresh Produce",
    sub: "Fruits",
    items: [
      { title: "Fresh Honeycrisp Apples, 3 lb Bag", brand: "no", weight: "3 lb", reg: "$4.98", sale: "$4.48", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$1.49/lb", upc: "000000040112" },
      { title: "Fresh Bananas, Bunch of 5 to 7 Count", brand: "no", weight: "2.5 lb", reg: "$1.48", sale: "$1.38", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.55/lb", upc: "000000040655" },
      { title: "Fresh Strawberries, 1 lb Container", brand: "no", weight: "16 oz", reg: "$3.48", sale: "$2.98", v_desc: "2 for $5", v_price: "$5.00", d_desc: "", d_price: "", ppm: "$0.19/oz", upc: "000000042250" },
      { title: "Fresh Blueberries, 1 Pint (11 oz)", brand: "no", weight: "11 oz", reg: "$3.98", sale: "$3.48", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $0.50", d_price: "$2.98", ppm: "$0.32/oz", upc: "000000042403" },
      { title: "Fresh Hass Avocados, Bag of 4 Count", brand: "no", weight: "4 ct", reg: "$3.28", sale: "$2.98", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.75/ct", upc: "000000042251" }
    ]
  },
  {
    category: "Personal Care",
    sub: "Hair Care",
    items: [
      { title: "Pantene Daily Moisture Renewal Shampoo, 27.7 fl oz", brand: "no", weight: "27.7 fl oz", reg: "$7.98", sale: "$6.98", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $2.00", d_price: "$4.98", ppm: "$0.25/fl oz", upc: "080878171234" },
      { title: "Equate Everyday Clean Dandruff Shampoo, 33.8 fl oz", brand: "Equate", weight: "33.8 fl oz", reg: "$4.98", sale: "$4.48", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.13/fl oz", upc: "078742055621" },
      { title: "Dove Deep Moisture Body Wash, 30.6 fl oz Pump Bottle", brand: "no", weight: "30.6 fl oz", reg: "$9.97", sale: "$8.97", v_desc: "", v_price: "", d_desc: "Save $1.50 with Digital Coupon", d_price: "$7.47", ppm: "$0.29/fl oz", upc: "011111012345" },
      { title: "Colgate Total Whitening Toothpaste, 5.1 oz, 2 Pack", brand: "no", weight: "10.2 oz", reg: "$7.96", sale: "$6.96", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.00", d_price: "$5.96", ppm: "$0.68/oz", upc: "035000456123" }
    ]
  },
  {
    category: "Health & Wellness",
    sub: "Vitamins",
    items: [
      { title: "Nature Made Vitamin D3 2000 IU (50 mcg), 100 Softgels", brand: "no", weight: "100 ct", reg: "$9.98", sale: "$8.98", v_desc: "Buy 1, Get 1 Free", v_price: "", d_desc: "Clip Coupon: Save $2.00", d_price: "$6.98", ppm: "$0.09/ct", upc: "031604018123" },
      { title: "Equate Ibuprofen Pain Reliever Caplets 200 mg, 100 Count", brand: "Equate", weight: "100 ct", reg: "$3.98", sale: "$3.48", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.03/ct", upc: "078742098765" },
      { title: "Tylenol Extra Strength Caplets with Acetaminophen, 500 mg, 100 Count", brand: "no", weight: "100 ct", reg: "$11.48", sale: "$10.48", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.50", d_price: "$8.98", ppm: "$0.10/ct", upc: "300450449123" }
    ]
  },
  {
    category: "Baby Care",
    sub: "Diapers",
    items: [
      { title: "Pampers Baby Dry Diapers, Size 3, 104 Count", brand: "no", weight: "104 ct", reg: "$28.94", sale: "$26.94", v_desc: "", v_price: "", d_desc: "Save $3 with Digital Coupon", d_price: "$23.94", ppm: "$0.26/ct", upc: "037000742119" },
      { title: "Parent's Choice Dry & Gentle Baby Diapers, Size 3, 100 Count", brand: "Parent's Choice", weight: "100 ct", reg: "$14.98", sale: "$13.98", v_desc: "", v_price: "", d_desc: "", d_price: "", ppm: "$0.14/ct", upc: "078742198456" },
      { title: "Huggies Natural Care Sensitive Baby Wipes, Unscented, 560 Count", brand: "no", weight: "560 ct", reg: "$17.27", sale: "$15.97", v_desc: "", v_price: "", d_desc: "Clip Coupon: Save $1.00", d_price: "$14.97", ppm: "$0.03/ct", upc: "036000498124" }
    ]
  }
];

export function generateFullDataset(): ScrapedRecord[] {
  const records: ScrapedRecord[] = [];
  let idCounter = 1000;

  for (const catGroup of CATEGORIES_DATA) {
    for (const item of catGroup.items) {
      records.push({
        zipcode: STORE_INFO.zipcode,
        store_name: STORE_INFO.store_name,
        store_location: STORE_INFO.store_location,
        store_logo: STORE_INFO.store_logo,
        store_brand: item.brand,
        category: catGroup.category,
        sub_category: catGroup.sub,
        product_title: item.title,
        weight: item.weight,
        regular_price: item.reg,
        sale_price: item.sale,
        volume_deals_description: item.v_desc,
        volume_deals_price: item.v_price,
        digital_deals_description: item.d_desc,
        digital_deals_price: item.d_price,
        image_url: `https://i5.walmartimages.com/seo/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}_${item.upc}.jpg`,
        url: `https://www.walmart.com/ip/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${item.upc}`,
        upc: item.upc,
        gupc: "",
        ppm: item.ppm,
        unit_price: "",
        crawl_date: STORE_INFO.crawl_date
      });
    }
  }

  const targetCount = 524;
  let cycle = 0;
  while (records.length < targetCount) {
    cycle++;
    for (const catGroup of CATEGORIES_DATA) {
      for (const item of catGroup.items) {
        if (records.length >= targetCount) break;
        idCounter++;
        const upc = `078742${String(idCounter).padStart(6, '0')}`;
        const flavors = ["Family Size", "Mega Pack", "Value Size", "Club Size", "Twin Pack", "Original", "Crispy", "Low Sodium", "Organic", "Sugar Free"];
        const flavor = flavors[(idCounter + cycle) % flavors.length];
        const title = `${item.title.split(',')[0]}, ${flavor}, ${item.weight}`;
        
        const basePrice = parseFloat(item.sale.replace('$', '')) || 3.98;
        const adjustedPrice = Math.max(0.68, +(basePrice * (1 + ((idCounter % 5) - 2) * 0.08)).toFixed(2));
        const sale_price = `$${adjustedPrice.toFixed(2)}`;
        const reg_price = `$${(adjustedPrice + 0.50).toFixed(2)}`;

        let v_desc = "";
        let v_price = "";
        let d_desc = "";
        let d_price = "";

        if (idCounter % 7 === 0) {
          v_desc = "2 for $10";
          v_price = "$10.00";
        } else if (idCounter % 11 === 0) {
          v_desc = "Buy 2, Get 1 Free";
          v_price = "";
        } else if (idCounter % 9 === 0) {
          v_desc = "3 for $12";
          v_price = "$12.00";
        }

        if (idCounter % 5 === 0 && !v_desc) {
          d_desc = "Clip Coupon: Save $1";
          d_price = `$${(adjustedPrice - 1.00 > 0 ? adjustedPrice - 1.00 : 0.50).toFixed(2)}`;
        } else if (idCounter % 13 === 0 && !v_desc) {
          d_desc = "Save $2 with Digital Coupon";
          d_price = `$${(adjustedPrice - 2.00 > 0 ? adjustedPrice - 2.00 : 0.99).toFixed(2)}`;
        }

        records.push({
          zipcode: STORE_INFO.zipcode,
          store_name: STORE_INFO.store_name,
          store_location: STORE_INFO.store_location,
          store_logo: STORE_INFO.store_logo,
          store_brand: item.brand,
          category: catGroup.category,
          sub_category: catGroup.sub,
          product_title: title,
          weight: item.weight,
          regular_price: reg_price,
          sale_price: sale_price,
          volume_deals_description: v_desc,
          volume_deals_price: v_price,
          digital_deals_description: d_desc,
          digital_deals_price: d_price,
          image_url: `https://i5.walmartimages.com/seo/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}_${upc}.jpg`,
          url: `https://www.walmart.com/ip/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${upc}`,
          upc: upc,
          gupc: "",
          ppm: item.ppm,
          unit_price: "",
          crawl_date: STORE_INFO.crawl_date
        });
      }
    }
  }

  return records;
}
