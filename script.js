/* =====================================================================
   RRR-Galaxy.pk  |  script.js
   Plain JavaScript. No libraries. Works on GitHub Pages.

   WHAT YOU EDIT (all at the top of this file):
   1. SITE SETTINGS  (website address, WhatsApp number, email)
   2. PRODUCTS       (names, prices, images, stock)
   Everything below those two parts normally does not need to change.
===================================================================== */
"use strict";

/* =====================================================================
   1. SITE SETTINGS
===================================================================== */

// Your website address. Keep the slash at the end.
// Use your GitHub Pages address first, then https://rrr-galaxy.pk/ after you connect the domain.
const SITE_URL = "https://rrr-galaxy.pk/";

// >>> REPLACE WITH YOUR REAL WHATSAPP NUMBER <<<
// Use the international format with NO plus sign, NO spaces and NO leading zero.
// Example: if your number is 0300 1234567, write "923001234567".
const WHATSAPP_NUMBER = "923XXXXXXXXX";

// >>> REPLACE WITH YOUR REAL EMAIL <<<
const STORE_EMAIL = "info@rrr-galaxy.pk";

// Delivery charges in Rs. Leave at 0 if you confirm delivery charges with the customer.
// If you charge a flat fee, write it here, for example: const DELIVERY_FEE = 250;
const DELIVERY_FEE = 0;

// OPTIONAL: a free form service address (for example from formspree.io) to receive newsletter emails.
// Leave empty "" and the Subscribe button will open the visitor's email app instead.
const NEWSLETTER_ENDPOINT = "";

const CURRENCY = "Rs. ";
const CART_KEY = "rrrGalaxyCart.v1";

const CATEGORIES = {
  beauty: "Beauty & Personal Care",
  electronics: "Smart Electronics",
  home: "Home & Lifestyle",
  assist: "Smart Assistance Devices"
};

/* =====================================================================
   2. PRODUCTS
   ---------------------------------------------------------------------
   !!! ALL PRODUCTS BELOW ARE DEMO EXAMPLES. REPLACE THEM WITH YOUR REAL PRODUCTS. !!!

   How to edit a product:
   - name / short / desc / features : your own text
   - price  : original price in Rs.      sale : the price customers pay in Rs.
              (the discount % is worked out automatically)
   - category : "beauty", "electronics", "home" or "assist"
   - rating : demo number from 1 to 5. Only show real ratings from real customers.
   - stock  : "in" (in stock), "low" (few left) or "out" (out of stock)
   - pop    : popularity score, higher = shown first in "Popular"
   - added  : date the product was added (YYYY-MM-DD), used for "Newest"
   - best / isNew / deal : true or false, controls Best sellers, New arrivals and Special offers
   - image  : PRODUCT IMAGE. Keep null to show the built-in drawing, or put your own photo:
              image: "assets/images/my-product.jpg"
              (upload the photo into the assets/images folder. Use .jpg or .webp,
               about 800 x 800 px and under 150 KB so the site stays fast.)
   - icon / hue : only used for the built-in drawing (ignored once you add an image)

   To ADD a product: copy one whole { ... }, block, paste it below, change the values and
   give it a new unique id and slug (slug = lowercase words joined by hyphens).
   To DELETE a product: remove its whole { ... }, block.
===================================================================== */
const PRODUCTS = [
  /* ---------- DEMO PRODUCT 1 ---------- */
  {
    id: 1, slug: "rechargeable-facial-cleansing-brush",
    name: "Rechargeable Facial Cleansing Brush",
    category: "beauty", sub: "Beauty tools",
    short: "Gentle daily face cleansing with a USB-rechargeable brush.",
    desc: "A rechargeable beauty device for your daily skincare routine. The soft bristles help clean the face more thoroughly than hands alone. Easy to charge and easy to carry. A useful beauty tool for anyone who wants a simple at-home skincare habit.",
    features: ["USB rechargeable", "Soft bristle head", "Compact and easy to hold", "Suitable for daily use"],
    price: 3499, sale: 2499, rating: 4.6, stock: "in", pop: 98, added: "2026-08-12",
    best: true, isNew: false, deal: true, image: null, icon: "brush", hue: 338,
    keywords: ["face wash", "skincare", "beauty gadget", "cleansing"]
  },
  /* ---------- DEMO PRODUCT 2 ---------- */
  {
    id: 2, slug: "face-ice-roller-massager",
    name: "Face Ice Roller Massager",
    category: "beauty", sub: "Skincare accessories",
    short: "Cooling roller for a fresh, refreshed feeling in the morning.",
    desc: "A simple skincare accessory with a cooling roller head. Keep it in the fridge and use it as part of your morning routine for a fresh feeling. Lightweight, easy to clean and comfortable to hold.",
    features: ["Cooling roller head", "Easy to clean", "Lightweight handle", "Great for a morning routine"],
    price: 1999, sale: 1299, rating: 4.4, stock: "in", pop: 86, added: "2026-09-18",
    best: false, isNew: true, deal: true, image: null, icon: "roller", hue: 350,
    keywords: ["face roller", "skin care", "massager", "beauty tools online"]
  },
  /* ---------- DEMO PRODUCT 3 ---------- */
  {
    id: 3, slug: "usb-mini-hair-straightener",
    name: "USB Mini Hair Straightener",
    category: "beauty", sub: "Hair-care tools",
    short: "Small, travel-friendly styling tool that charges by USB.",
    desc: "A compact hair-care tool that is easy to carry in a bag. Ideal for quick touch-ups at home or while travelling. Heats up fast and the slim design makes it simple to use on short or medium hair.",
    features: ["USB rechargeable", "Compact travel size", "Quick heat-up", "Slim plates for touch-ups"],
    price: 2999, sale: 2199, rating: 4.3, stock: "low", pop: 74, added: "2026-09-02",
    best: false, isNew: true, deal: false, image: null, icon: "straightener", hue: 322,
    keywords: ["hair styling", "hair straightener", "travel", "hair care tools"]
  },
  /* ---------- DEMO PRODUCT 4 ---------- */
  {
    id: 4, slug: "cordless-grooming-trimmer",
    name: "Cordless Grooming Trimmer",
    category: "beauty", sub: "Personal grooming products",
    short: "Rechargeable trimmer for neat grooming at home.",
    desc: "A cordless personal grooming product for a neat look without a trip to the salon. Light in the hand, simple to clean and quick to charge. A practical choice for everyday grooming.",
    features: ["Cordless and rechargeable", "Easy to clean", "Light in the hand", "Everyday grooming"],
    price: 3299, sale: 2399, rating: 4.5, stock: "in", pop: 91, added: "2026-07-25",
    best: true, isNew: false, deal: false, image: null, icon: "trimmer", hue: 352,
    keywords: ["trimmer", "shaver", "grooming", "personal grooming products"]
  },
  /* ---------- DEMO PRODUCT 5 ---------- */
  {
    id: 5, slug: "mini-wireless-earbuds-with-charging-case",
    name: "Mini Wireless Earbuds with Charging Case",
    category: "electronics", sub: "Smart accessories",
    short: "Pocket-size earbuds with a charging case for calls and music.",
    desc: "Small wireless earbuds that connect to your phone by Bluetooth. They come with a charging case, so you can top them up on the go. A handy smart accessory for calls, music and videos.",
    features: ["Bluetooth connection", "Charging case included", "Lightweight fit", "Works with Android and iPhone"],
    price: 4499, sale: 2999, rating: 4.2, stock: "in", pop: 95, added: "2026-08-30",
    best: true, isNew: false, deal: true, image: null, icon: "earbuds", hue: 246,
    keywords: ["earphones", "bluetooth", "wireless", "smart accessories", "gadgets"]
  },
  /* ---------- DEMO PRODUCT 6 ---------- */
  {
    id: 6, slug: "rechargeable-neck-fan",
    name: "Rechargeable Portable Neck Fan",
    category: "electronics", sub: "Rechargeable devices",
    short: "Hands-free cooling you can wear around your neck.",
    desc: "A portable rechargeable fan you wear around your neck, so your hands stay free. Useful at home, in the office, outdoors and in traffic on a hot day. Charges by USB.",
    features: ["Hands-free design", "USB rechargeable", "Several speed settings", "Portable and lightweight"],
    price: 2499, sale: 1699, rating: 4.5, stock: "in", pop: 89, added: "2026-09-10",
    best: true, isNew: true, deal: true, image: null, icon: "fan", hue: 232,
    keywords: ["fan", "summer", "cooling", "portable gadgets", "rechargeable"]
  },
  /* ---------- DEMO PRODUCT 7 ---------- */
  {
    id: 7, slug: "slim-power-bank-10000mah",
    name: "Slim Power Bank 10000mAh",
    category: "electronics", sub: "Portable gadgets",
    short: "Keep your phone charged during long days and trips.",
    desc: "A slim portable charger that fits in a pocket or bag. Helps keep your phone running through long days, travel and load-shedding hours. Check the capacity and ports on the product before ordering.",
    features: ["10000mAh capacity", "Slim pocket-friendly body", "Charges phones and small devices", "Useful during travel"],
    price: 3999, sale: 2999, rating: 4.4, stock: "in", pop: 83, added: "2026-06-20",
    best: false, isNew: false, deal: false, image: null, icon: "powerbank", hue: 258,
    keywords: ["power bank", "charger", "portable", "mobile accessories", "electronic gadgets"]
  },
  /* ---------- DEMO PRODUCT 8 ---------- */
  {
    id: 8, slug: "usb-electric-vegetable-chopper",
    name: "USB Electric Vegetable Chopper",
    category: "home", sub: "Kitchen helpers",
    short: "Chop onions, garlic and herbs in seconds, no tears.",
    desc: "One of the most useful kitchen gadgets for busy homes. This rechargeable chopper cuts onions, garlic, chillies and herbs quickly, so cooking prep takes less time and effort. Easy to rinse and store.",
    features: ["USB rechargeable", "Chops onions, garlic and herbs", "Easy to rinse", "Saves prep time"],
    price: 2799, sale: 1899, rating: 4.6, stock: "in", pop: 97, added: "2026-07-30",
    best: true, isNew: false, deal: true, image: null, icon: "chopper", hue: 158,
    keywords: ["kitchen gadgets", "chopper", "cooking", "kitchen helpers", "home gadgets"]
  },
  /* ---------- DEMO PRODUCT 9 ---------- */
  {
    id: 9, slug: "foldable-storage-organizer-set",
    name: "Foldable Storage Organizer Set",
    category: "home", sub: "Organization products",
    short: "Tidy wardrobes, drawers and shelves in minutes.",
    desc: "A set of foldable organizers for clothes, accessories and small items. Fold them flat when you are not using them. A simple way to keep your home neat without buying new furniture.",
    features: ["Folds flat for storage", "Set of multiple pieces", "Works in drawers and wardrobes", "Lightweight"],
    price: 1799, sale: 1199, rating: 4.3, stock: "in", pop: 70, added: "2026-09-25",
    best: false, isNew: true, deal: false, image: null, icon: "organizer", hue: 170,
    keywords: ["organizer", "storage", "wardrobe", "home organization", "lifestyle"]
  },
  /* ---------- DEMO PRODUCT 10 ---------- */
  {
    id: 10, slug: "rechargeable-electric-spin-scrubber",
    name: "Rechargeable Electric Spin Scrubber",
    category: "home", sub: "Cleaning helpers",
    short: "Scrub bathrooms, tiles and kitchens with less effort.",
    desc: "A rechargeable cleaning helper that does the hard scrubbing for you. Comes with different brush heads for tiles, sinks and tough spots. Reduces effort and saves time on weekly cleaning.",
    features: ["USB rechargeable", "Multiple brush heads", "Reduces scrubbing effort", "Cordless and easy to use"],
    price: 3499, sale: 2399, rating: 4.5, stock: "low", pop: 88, added: "2026-08-15",
    best: true, isNew: false, deal: true, image: null, icon: "scrubber", hue: 148,
    keywords: ["cleaning brush", "scrubber", "bathroom cleaning", "home use products"]
  },
  /* ---------- DEMO PRODUCT 11 ---------- */
  {
    id: 11, slug: "touchless-automatic-soap-dispenser",
    name: "Touchless Automatic Soap Dispenser",
    category: "assist", sub: "Everyday convenience gadgets",
    short: "Wave your hand and get soap, with no touching and less mess.",
    desc: "A smart everyday gadget for the kitchen or bathroom. The built-in sensor gives a measured amount of soap when your hand is near, which helps reduce waste and mess. Simple to refill.",
    features: ["Sensor operated", "Measured amount of soap", "Easy to refill", "Neat look for kitchen or bathroom"],
    price: 1999, sale: 1399, rating: 4.4, stock: "in", pop: 80, added: "2026-09-28",
    best: false, isNew: true, deal: false, image: null, icon: "dispenser", hue: 32,
    keywords: ["soap dispenser", "touchless", "smart devices", "bathroom", "convenience products"]
  },
  /* ---------- DEMO PRODUCT 12 ---------- */
  {
    id: 12, slug: "handheld-mini-vacuum-cleaner",
    name: "Handheld Mini Vacuum Cleaner",
    category: "assist", sub: "Products that save time",
    short: "Quick cleanup for keyboards, car seats, sofas and corners.",
    desc: "A small rechargeable vacuum for the places a big cleaner cannot reach. Good for car interiors, sofas, desks and corners. A time-saving problem-solver for everyday cleaning.",
    features: ["Rechargeable and cordless", "Small and light", "Reaches tight corners", "Good for car and home"],
    price: 3499, sale: 2599, rating: 4.1, stock: "out", pop: 66, added: "2026-06-05",
    best: false, isNew: false, deal: false, image: null, icon: "vacuum", hue: 24,
    keywords: ["vacuum", "car cleaner", "cleaning", "daily life gadgets", "innovative products"]
  }
];

/* =====================================================================
   3. HELPERS
===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = (n) => CURRENCY + Number(n).toLocaleString("en-PK");
const discountPct = (p) => Math.floor(((p.price - p.sale) / p.price) * 100);
const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));
const bySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
const absUrl = (path) => (/^https?:/.test(path) ? path : SITE_URL.replace(/\/?$/, "/") + path.replace(/^\//, ""));

const STOCK_TEXT = { in: "In stock", low: "Only a few left", out: "Out of stock" };

function stars(rating) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return '<span class="stars" style="--r:' + pct + '%" role="img" aria-label="Rated ' + rating + ' out of 5">★★★★★</span>';
}

/* ---------- Placeholder product drawings (SVG, no files needed) ---------- */
const ICONS = {
  brush: (a) => '<circle cx="100" cy="80" r="42" fill="#fff"/><circle cx="100" cy="80" r="28" fill="none" stroke="' + a + '" stroke-width="5" stroke-dasharray="3 9" stroke-linecap="round"/><rect x="86" y="118" width="28" height="62" rx="14" fill="#fff" fill-opacity=".92"/><circle cx="100" cy="80" r="8" fill="' + a + '"/>',
  roller: (a) => '<rect x="92" y="96" width="16" height="84" rx="8" fill="#fff" fill-opacity=".92"/><rect x="56" y="44" width="88" height="52" rx="26" fill="#fff"/><path d="M80 56v28M100 56v28M120 56v28" stroke="' + a + '" stroke-width="5" stroke-linecap="round"/>',
  straightener: (a) => '<g transform="rotate(-18 100 100)"><rect x="52" y="66" width="96" height="28" rx="14" fill="#fff"/><rect x="52" y="104" width="96" height="28" rx="14" fill="#fff" fill-opacity=".9"/><circle cx="64" cy="100" r="9" fill="' + a + '"/></g>',
  trimmer: (a) => '<rect x="78" y="70" width="44" height="112" rx="18" fill="#fff"/><rect x="68" y="42" width="64" height="30" rx="6" fill="#fff" fill-opacity=".88"/><path d="M78 50v14M88 50v14M98 50v14M108 50v14M118 50v14" stroke="' + a + '" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="112" r="8" fill="' + a + '"/>',
  earbuds: (a) => '<rect x="48" y="106" width="104" height="62" rx="28" fill="#fff"/><path d="M48 130h104" stroke="' + a + '" stroke-width="4"/><circle cx="76" cy="70" r="17" fill="#fff"/><rect x="70" y="80" width="12" height="30" rx="6" fill="#fff" fill-opacity=".9"/><circle cx="124" cy="70" r="17" fill="#fff"/><rect x="118" y="80" width="12" height="30" rx="6" fill="#fff" fill-opacity=".9"/>',
  fan: (a) => '<circle cx="100" cy="100" r="66" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="6"/><g fill="#fff"><ellipse cx="100" cy="62" rx="17" ry="34"/><ellipse cx="100" cy="62" rx="17" ry="34" transform="rotate(120 100 100)"/><ellipse cx="100" cy="62" rx="17" ry="34" transform="rotate(240 100 100)"/></g><circle cx="100" cy="100" r="11" fill="' + a + '"/>',
  powerbank: (a) => '<rect x="62" y="40" width="76" height="132" rx="16" fill="#fff"/><rect x="82" y="58" width="36" height="8" rx="4" fill="' + a + '"/><rect x="80" y="92" width="40" height="12" rx="3" fill="' + a + '"/><rect x="80" y="112" width="40" height="12" rx="3" fill="' + a + '" fill-opacity=".6"/><rect x="80" y="132" width="40" height="12" rx="3" fill="' + a + '" fill-opacity=".3"/>',
  chopper: (a) => '<path d="M46 102H154A54 54 0 0 1 46 102Z" fill="#fff"/><rect x="60" y="74" width="80" height="28" rx="8" fill="#fff" fill-opacity=".9"/><circle cx="100" cy="62" r="11" fill="#fff"/><path d="M82 128h36" stroke="' + a + '" stroke-width="5" stroke-linecap="round"/>',
  organizer: (a) => '<rect x="42" y="60" width="116" height="100" rx="12" fill="#fff"/><path d="M100 60v100M42 110h116" stroke="' + a + '" stroke-width="5"/><rect x="52" y="70" width="38" height="30" rx="5" fill="' + a + '" fill-opacity=".25"/><rect x="110" y="120" width="38" height="30" rx="5" fill="' + a + '" fill-opacity=".25"/>',
  scrubber: (a) => '<circle cx="100" cy="78" r="44" fill="#fff"/><circle cx="100" cy="78" r="28" fill="none" stroke="' + a + '" stroke-width="5" stroke-dasharray="2 8" stroke-linecap="round"/><rect x="90" y="118" width="20" height="62" rx="10" fill="#fff" fill-opacity=".92"/><circle cx="100" cy="78" r="7" fill="' + a + '"/>',
  dispenser: (a) => '<rect x="68" y="84" width="64" height="94" rx="16" fill="#fff"/><rect x="94" y="58" width="12" height="28" rx="5" fill="#fff" fill-opacity=".92"/><rect x="94" y="50" width="50" height="12" rx="6" fill="#fff"/><circle cx="100" cy="132" r="11" fill="' + a + '"/><path d="M146 66v14" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
  vacuum: (a) => '<rect x="56" y="70" width="68" height="68" rx="22" fill="#fff"/><rect x="118" y="88" width="48" height="24" rx="11" fill="#fff" fill-opacity=".92"/><rect x="74" y="130" width="30" height="48" rx="13" fill="#fff" fill-opacity=".92"/><circle cx="90" cy="104" r="9" fill="' + a + '"/>'
};

function placeholderImage(p) {
  const h = p.hue;
  const accent = "hsl(" + h + " 55% 34%)";
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="hsl(' + h + ' 58% 44%)"/><stop offset="1" stop-color="hsl(' + ((h + 28) % 360) + ' 60% 26%)"/>' +
    "</linearGradient></defs>" +
    '<rect width="200" height="200" fill="url(#g)"/>' +
    '<circle cx="170" cy="30" r="46" fill="#fff" fill-opacity=".08"/><circle cx="24" cy="178" r="56" fill="#fff" fill-opacity=".07"/>' +
    (ICONS[p.icon] || ICONS.brush)(accent) +
    "</svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const productImage = (p) => p.image || placeholderImage(p);
const productAlt = (p) => p.name + " - " + p.sub.toLowerCase() + " available online in Pakistan";

/* =====================================================================
   4. SHOP: SEARCH, FILTERS, SORT
===================================================================== */
const state = { q: "", cat: "all", price: "all", rating: "all", sort: "popular" };

function matches(p) {
  if (state.cat !== "all" && p.category !== state.cat) return false;

  if (state.price === "u1500" && !(p.sale < 1500)) return false;
  if (state.price === "1500-2500" && !(p.sale >= 1500 && p.sale <= 2500)) return false;
  if (state.price === "o2500" && !(p.sale > 2500)) return false;

  if (state.rating !== "all" && p.rating < Number(state.rating)) return false;

  const q = state.q.trim().toLowerCase();
  if (q) {
    const haystack = [p.name, CATEGORIES[p.category], p.sub, p.short, p.keywords.join(" ")].join(" ").toLowerCase();
    return q.split(/\s+/).every((word) => haystack.indexOf(word) !== -1);
  }
  return true;
}

function sortList(list) {
  const arr = list.slice();
  if (state.sort === "price-asc") arr.sort((a, b) => a.sale - b.sale);
  else if (state.sort === "price-desc") arr.sort((a, b) => b.sale - a.sale);
  else if (state.sort === "newest") arr.sort((a, b) => (a.added < b.added ? 1 : -1));
  else arr.sort((a, b) => b.pop - a.pop);
  return arr;
}

function productCard(p) {
  const out = p.stock === "out";
  const badges =
    '<span class="badge badge-off">' + discountPct(p) + "% OFF</span>" +
    (p.stock !== "in" ? '<span class="badge badge-stock badge-' + p.stock + '">' + STOCK_TEXT[p.stock] + "</span>" : "");

  return (
    '<article class="card">' +
    '<button type="button" class="card-media" data-action="view" data-id="' + p.id + '" aria-label="View details of ' + esc(p.name) + '">' +
    '<img src="' + productImage(p) + '" alt="' + esc(productAlt(p)) + '" width="400" height="400" loading="lazy" decoding="async">' +
    badges +
    "</button>" +
    '<div class="card-body">' +
    '<p class="card-cat">' + esc(CATEGORIES[p.category]) + "</p>" +
    '<h3 class="card-title"><button type="button" data-action="view" data-id="' + p.id + '">' + esc(p.name) + "</button></h3>" +
    '<p class="card-short">' + esc(p.short) + "</p>" +
    '<p class="rating">' + stars(p.rating) + ' <span>' + p.rating.toFixed(1) + "</span></p>" +
    '<p class="price"><span class="now"><span class="sr-only">Price: </span>' + money(p.sale) + "</span> " +
    '<s class="was"><span class="sr-only">Original price: </span>' + money(p.price) + "</s></p>" +
    '<p class="stock stock-' + p.stock + '">' + STOCK_TEXT[p.stock] + "</p>" +
    '<div class="card-actions">' +
    '<button type="button" class="btn btn-primary" data-action="add" data-id="' + p.id + '"' + (out ? " disabled" : "") + ">Add to Cart</button>" +
    '<button type="button" class="btn btn-dark" data-action="buy" data-id="' + p.id + '"' + (out ? " disabled" : "") + ">Buy Now</button>" +
    '<button type="button" class="btn btn-link" data-action="view" data-id="' + p.id + '">View Details</button>' +
    "</div></div></article>"
  );
}

function renderShop() {
  const list = sortList(PRODUCTS.filter(matches));
  const grid = $("#productGrid");
  grid.innerHTML = list.map(productCard).join("");
  $("#emptyState").hidden = list.length > 0;
  grid.hidden = list.length === 0;
  $("#resultCount").textContent =
    list.length === 0 ? "No products found" : "Showing " + list.length + (list.length === 1 ? " product" : " products");
}

function renderRows() {
  const fill = (id, list) => { $(id).innerHTML = list.map(productCard).join(""); };
  fill("#bestRow", PRODUCTS.filter((p) => p.best).sort((a, b) => b.pop - a.pop));
  fill("#newRow", PRODUCTS.filter((p) => p.isNew).sort((a, b) => (a.added < b.added ? 1 : -1)));
  fill("#dealsRow", PRODUCTS.filter((p) => p.deal).sort((a, b) => discountPct(b) - discountPct(a)));
}

function syncControls() {
  $("#hq").value = state.q;
  $("#sq").value = state.q;
  $("#fCat").value = state.cat;
  $("#fPrice").value = state.price;
  $("#fRating").value = state.rating;
  $("#fSort").value = state.sort;
}

function resetFilters() {
  state.q = ""; state.cat = "all"; state.price = "all"; state.rating = "all"; state.sort = "popular";
  syncControls();
  renderShop();
}

function goToShop() {
  const shop = $("#shop");
  if (shop) shop.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* =====================================================================
   5. CART  (saved in localStorage so it survives page refresh)
===================================================================== */
let cart = loadCart();

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(raw)
      ? raw.filter((i) => byId(i.id) && byId(i.id).stock !== "out").map((i) => ({ id: Number(i.id), qty: Math.max(1, Math.min(99, Number(i.qty) || 1)) }))
      : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* private mode: cart just won't persist */ }
}

const cartCount = () => cart.reduce((n, i) => n + i.qty, 0);
const cartSubtotal = () => cart.reduce((sum, i) => sum + byId(i.id).sale * i.qty, 0);
const cartTotal = () => cartSubtotal() + DELIVERY_FEE;

function addToCart(id, qty) {
  const p = byId(id);
  if (!p || p.stock === "out") return;
  const line = cart.find((i) => i.id === p.id);
  if (line) line.qty = Math.min(99, line.qty + qty);
  else cart.push({ id: p.id, qty: Math.min(99, qty) });
  saveCart();
  updateCartUI();
}

function setQty(id, qty) {
  const line = cart.find((i) => i.id === Number(id));
  if (!line) return;
  if (qty <= 0) cart = cart.filter((i) => i !== line);
  else line.qty = Math.min(99, qty);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const n = cartCount();
  $("#cartCount").textContent = n;
  $("#cartCount").hidden = n === 0;
  $("#cartCountBottom").textContent = n;
  renderCart();
}

function renderCart() {
  const body = $("#cartBody");
  const foot = $("#cartFoot");

  if (cart.length === 0) {
    body.innerHTML =
      '<div class="cart-empty"><h3>Your cart is empty</h3><p>Add a product and it will show up here.</p></div>';
    foot.innerHTML = '<button type="button" class="btn btn-primary btn-block" data-action="continue">Continue shopping</button>';
    return;
  }

  body.innerHTML =
    '<ul class="cart-list">' +
    cart.map((i) => {
      const p = byId(i.id);
      return (
        '<li class="cart-item">' +
        '<img src="' + productImage(p) + '" alt="' + esc(productAlt(p)) + '" width="72" height="72" loading="lazy">' +
        '<div class="ci-main"><p class="ci-name">' + esc(p.name) + "</p>" +
        '<p class="ci-price">' + money(p.sale) + "</p>" +
        '<div class="qty" role="group" aria-label="Quantity for ' + esc(p.name) + '">' +
        '<button type="button" data-action="dec" data-id="' + p.id + '" aria-label="Decrease quantity">−</button>' +
        '<span aria-live="polite">' + i.qty + "</span>" +
        '<button type="button" data-action="inc" data-id="' + p.id + '" aria-label="Increase quantity">+</button>' +
        "</div></div>" +
        '<div class="ci-side"><p class="ci-line">' + money(p.sale * i.qty) + "</p>" +
        '<button type="button" class="btn-text" data-action="remove" data-id="' + p.id + '" aria-label="Remove ' + esc(p.name) + ' from cart">Remove</button></div>' +
        "</li>"
      );
    }).join("") +
    "</ul>";

  foot.innerHTML =
    '<dl class="totals">' +
    "<div><dt>Subtotal</dt><dd>" + money(cartSubtotal()) + "</dd></div>" +
    "<div><dt>Delivery</dt><dd>" + (DELIVERY_FEE > 0 ? money(DELIVERY_FEE) : "Confirmed when we contact you") + "</dd></div>" +
    '<div class="grand"><dt>Total</dt><dd>' + money(cartTotal()) + "</dd></div>" +
    "</dl>" +
    '<button type="button" class="btn btn-primary btn-block btn-lg" data-action="checkout">Checkout (Cash on Delivery)</button>' +
    '<button type="button" class="btn btn-wa btn-block" data-action="cart-wa">Order on WhatsApp</button>' +
    '<div class="foot-links">' +
    '<button type="button" class="btn-text" data-action="continue">Continue shopping</button>' +
    '<button type="button" class="btn-text danger" data-action="clear-cart">Clear cart</button>' +
    "</div>";
}

/* =====================================================================
   6. DIALOGS (cart drawer, product details, checkout)
===================================================================== */
function openDialog(d) {
  if (!d.open) d.showModal();
  document.body.classList.add("no-scroll");
}

function closeDialog(d) {
  if (d && d.open) d.close();
}

function onDialogClosed() {
  if (!$$("dialog[open]").length) document.body.classList.remove("no-scroll");
}

/* ---------- Product details ---------- */
let detailQty = 1;
const titleBackup = document.title; // restored when a product window is closed

function openProduct(id, fromHash) {
  const p = byId(id);
  if (!p) return;
  detailQty = 1;
  const out = p.stock === "out";

  $("#productDetail").innerHTML =
    '<div class="pd">' +
    '<div class="pd-media"><img src="' + productImage(p) + '" alt="' + esc(productAlt(p)) + '" width="600" height="600">' +
    '<span class="badge badge-off">' + discountPct(p) + "% OFF</span></div>" +
    '<div class="pd-info">' +
    '<p class="crumbs"><a href="#home" data-action="close-dialog">Home</a> / <a href="#shop" data-action="close-dialog">Shop</a> / ' + esc(CATEGORIES[p.category]) + "</p>" +
    '<h2 id="pdTitle">' + esc(p.name) + "</h2>" +
    '<p class="rating">' + stars(p.rating) + " <span>" + p.rating.toFixed(1) + " out of 5</span></p>" +
    '<p class="price price-lg"><span class="now">' + money(p.sale) + '</span> <s class="was">' + money(p.price) + '</s> <span class="save">You save ' + money(p.price - p.sale) + "</span></p>" +
    '<p class="stock stock-' + p.stock + '">' + STOCK_TEXT[p.stock] + "</p>" +
    "<p>" + esc(p.desc) + "</p>" +
    '<ul class="features">' + p.features.map((f) => "<li>" + esc(f) + "</li>").join("") + "</ul>" +
    '<div class="pd-buy">' +
    '<div class="qty qty-lg" role="group" aria-label="Quantity">' +
    '<button type="button" data-action="pd-dec" aria-label="Decrease quantity">−</button><span id="pdQty" aria-live="polite">1</span><button type="button" data-action="pd-inc" aria-label="Increase quantity">+</button></div>' +
    '<button type="button" class="btn btn-primary btn-lg" data-action="pd-add" data-id="' + p.id + '"' + (out ? " disabled" : "") + ">Add to Cart</button>" +
    '<button type="button" class="btn btn-dark btn-lg" data-action="pd-buy" data-id="' + p.id + '"' + (out ? " disabled" : "") + ">Buy Now</button>" +
    "</div>" +
    '<button type="button" class="btn btn-wa" data-action="ask-wa" data-id="' + p.id + '">Ask about this product on WhatsApp</button>' +
    '<p class="fine">Cash on Delivery. Delivery charges and time are confirmed when we contact you.</p>' +
    "</div></div>";

  document.title = p.name + " | RRR-Galaxy.pk";
  if (!fromHash) {
    try { history.replaceState(null, "", "#p/" + p.slug); } catch (e) { /* ignore */ }
  }
  openDialog($("#productDialog"));
}

function onProductClosed() {
  document.title = titleBackup;
  if (location.hash.indexOf("#p/") === 0) {
    try { history.replaceState(null, "", location.pathname + location.search + "#shop"); } catch (e) { /* ignore */ }
  }
}

/* ---------- Checkout ---------- */
const PROVINCES = ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu & Kashmir"];
let lastOrder = null;

function openCheckout() {
  if (cart.length === 0) { toast("Your cart is empty."); return; }
  closeDialog($("#cartDialog"));
  renderCheckoutForm();
  openDialog($("#checkoutDialog"));
}

function renderCheckoutForm() {
  const items = cart.map((i) => {
    const p = byId(i.id);
    return "<li><span>" + esc(p.name) + " × " + i.qty + "</span><span>" + money(p.sale * i.qty) + "</span></li>";
  }).join("");

  $("#checkoutBody").innerHTML =
    '<div class="co">' +
    '<h2 id="coTitle">Checkout</h2>' +
    '<ul class="co-items">' + items + "</ul>" +
    '<dl class="totals totals-sm"><div><dt>Subtotal</dt><dd>' + money(cartSubtotal()) + "</dd></div>" +
    "<div><dt>Delivery</dt><dd>" + (DELIVERY_FEE > 0 ? money(DELIVERY_FEE) : "Confirmed when we contact you") + "</dd></div>" +
    '<div class="grand"><dt>Total</dt><dd>' + money(cartTotal()) + "</dd></div></dl>" +

    '<form id="orderForm" novalidate>' +
    '<div class="form-grid">' +
    field("oName", "Full name", "text", "name", true) +
    field("oPhone", "Phone number", "tel", "tel", true, "03XX XXXXXXX") +
    field("oWa", "WhatsApp number", "tel", "off", false, "Same as phone if left empty") +
    field("oEmail", "Email (optional)", "email", "email", false) +
    '<div class="field field-full"><label for="oAddress">Complete address</label><textarea id="oAddress" rows="3" autocomplete="street-address" required></textarea></div>' +
    field("oCity", "City", "text", "address-level2", true) +
    '<div class="field"><label for="oProvince">Province</label><select id="oProvince" required><option value="">Select province</option>' +
    PROVINCES.map((v) => "<option>" + esc(v) + "</option>").join("") + "</select></div>" +
    field("oPostal", "Postal code (optional)", "text", "postal-code", false) +
    '<div class="field field-full"><label for="oNotes">Order notes (optional)</label><textarea id="oNotes" rows="2" placeholder="Example: call before delivery"></textarea></div>' +
    "</div>" +

    '<fieldset class="pay"><legend>Payment method</legend>' +
    '<label class="pay-opt"><input type="radio" name="pay" value="Cash on Delivery" checked> <span><strong>Cash on Delivery</strong><br><small>Pay in cash when your order arrives.</small></span></label>' +
    "</fieldset>" +

    '<p class="form-error" id="orderError" role="alert" hidden></p>' +
    '<button type="submit" class="btn btn-primary btn-block btn-lg">Place order (Cash on Delivery)</button>' +
    '<button type="button" class="btn btn-wa btn-block" data-action="checkout-wa">Order on WhatsApp</button>' +
    '<p class="fine">We do not ask for card numbers or passwords. After you place the order you get a summary to send to us on WhatsApp or email.</p>' +
    "</form></div>";
}

function field(id, label, type, autocomplete, required, placeholder) {
  return (
    '<div class="field"><label for="' + id + '">' + label + "</label>" +
    '<input id="' + id + '" type="' + type + '"' +
    (type === "tel" ? ' inputmode="tel"' : "") +
    ' autocomplete="' + autocomplete + '"' +
    (required ? " required" : "") +
    (placeholder ? ' placeholder="' + esc(placeholder) + '"' : "") + "></div>"
  );
}

/* Pakistani mobile numbers: 03XXXXXXXXX, 3XXXXXXXXX, 923XXXXXXXXX, +923XXXXXXXXX */
function validMobile(value) {
  const digits = String(value).replace(/[^\d]/g, "");
  return /^(92|0092|0)?3\d{9}$/.test(digits);
}

function readOrderForm() {
  const v = (id) => ($("#" + id).value || "").trim();
  const data = {
    name: v("oName"), phone: v("oPhone"), whatsapp: v("oWa"), email: v("oEmail"),
    address: v("oAddress"), city: v("oCity"), province: v("oProvince"), postal: v("oPostal"), notes: v("oNotes"),
    payment: ($('input[name="pay"]:checked') || {}).value || "Cash on Delivery"
  };
  let error = "";
  if (!data.name) error = "Please enter your full name.";
  else if (!validMobile(data.phone)) error = "Please enter a valid mobile number, for example 0300 1234567.";
  else if (data.whatsapp && !validMobile(data.whatsapp)) error = "Please check your WhatsApp number, for example 0300 1234567.";
  else if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) error = "Please enter a valid email address or leave it empty.";
  else if (data.address.length < 10) error = "Please enter your complete address (house, street, area).";
  else if (!data.city) error = "Please enter your city.";
  else if (!data.province) error = "Please select your province.";

  const box = $("#orderError");
  box.hidden = !error;
  box.textContent = error;
  return error ? null : data;
}

function newOrderId() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return "RRR-" + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" + Math.floor(1000 + Math.random() * 9000);
}

function buildOrderText(data, orderId) {
  const lines = cart.map((i, idx) => {
    const p = byId(i.id);
    return (idx + 1) + ". " + p.name + " x " + i.qty + " = " + money(p.sale * i.qty);
  });
  return [
    "NEW ORDER - RRR-Galaxy.pk",
    "Order ID: " + orderId,
    "",
    "Customer Name: " + data.name,
    "Phone Number: " + data.phone,
    data.whatsapp ? "WhatsApp: " + data.whatsapp : "",
    data.email ? "Email: " + data.email : "",
    "",
    "Products:",
    lines.join("\n"),
    "",
    "Subtotal: " + money(cartSubtotal()),
    "Delivery: " + (DELIVERY_FEE > 0 ? money(DELIVERY_FEE) : "To be confirmed"),
    "Total Price: " + money(cartTotal()),
    "Payment: " + data.payment,
    "",
    "Address: " + data.address,
    "City: " + data.city,
    "Province: " + data.province,
    data.postal ? "Postal Code: " + data.postal : "",
    data.notes ? "Notes: " + data.notes : ""
  ].filter((line, i, arr) => !(line === "" && (arr[i - 1] === "" || i === 0))).join("\n");
}

function placeOrder() {
  const data = readOrderForm();
  if (!data) return;
  const orderId = newOrderId();
  lastOrder = { data: data, id: orderId, text: buildOrderText(data, orderId) };

  $("#checkoutBody").innerHTML =
    '<div class="co">' +
    '<h2 id="coTitle">Your order summary</h2>' +
    '<p class="success">Almost done! Send this summary to us on WhatsApp so we can confirm your order. Your order ID is <strong>' + esc(orderId) + "</strong>.</p>" +
    '<pre class="summary" tabindex="0">' + esc(lastOrder.text) + "</pre>" +
    '<button type="button" class="btn btn-wa btn-block btn-lg" data-action="send-wa-order">Send order on WhatsApp</button>' +
    '<div class="btn-row">' +
    '<button type="button" class="btn btn-dark" data-action="send-mail-order">Send by email</button>' +
    '<button type="button" class="btn btn-ghost-dark" data-action="copy-order">Copy summary</button>' +
    "</div>" +
    '<button type="button" class="btn btn-primary btn-block" data-action="finish-order">Done, clear my cart</button>' +
    '<p class="fine">Your order is only received once you send this summary to us. Payment is Cash on Delivery.</p>' +
    "</div>";
  $("#checkoutDialog").scrollTop = 0;
}

/* =====================================================================
   7. WHATSAPP, EMAIL, COPY, TOAST
===================================================================== */
function whatsappReady() {
  if (/x/i.test(WHATSAPP_NUMBER) || !/^\d{11,15}$/.test(WHATSAPP_NUMBER)) {
    toast("Store owner: add your WhatsApp number to WHATSAPP_NUMBER in script.js.");
    return false;
  }
  return true;
}

function openWhatsApp(text) {
  if (!whatsappReady()) return;
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text || "");
  window.open(url, "_blank", "noopener");
}

function openEmail(subject, body) {
  window.location.href = "mailto:" + STORE_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => toast("Order summary copied."), () => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); toast("Order summary copied."); } catch (e) { toast("Please select and copy the summary manually."); }
  document.body.removeChild(ta);
}

let toastTimer;
function toast(message) {
  const t = $("#toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* =====================================================================
   8. CONTACT + NEWSLETTER
===================================================================== */
function readContact() {
  const name = $("#cName").value.trim();
  const phone = $("#cPhone").value.trim();
  const message = $("#cMsg").value.trim();
  let error = "";
  if (!name) error = "Please enter your name.";
  else if (!validMobile(phone)) error = "Please enter a valid mobile number, for example 0300 1234567.";
  else if (message.length < 5) error = "Please write your message.";
  const box = $("#contactError");
  box.hidden = !error;
  box.textContent = error;
  return error ? null : { name: name, phone: phone, message: message };
}

function contactText(d) {
  return "Assalam o Alaikum! I am " + d.name + ".\n" + d.message + "\n\nMy phone: " + d.phone;
}

function handleNewsletter(e) {
  e.preventDefault();
  const email = $("#nEmail").value.trim();
  const msg = $("#newsMsg");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    return;
  }
  if (NEWSLETTER_ENDPOINT) {
    fetch(NEWSLETTER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email })
    }).then((r) => {
      msg.textContent = r.ok ? "Thank you! You are on the list." : "Sorry, something went wrong. Please try again.";
      if (r.ok) $("#nEmail").value = "";
    }).catch(() => { msg.textContent = "Sorry, something went wrong. Please try again."; });
  } else {
    openEmail("Please add me to your updates", "Please add this email to your product updates list: " + email);
    msg.textContent = "Your email app should open. Press send to finish.";
  }
}

/* =====================================================================
   9. SEO: PRODUCT STRUCTURED DATA (generated from the PRODUCTS list)
   Prices are in PKR. Ratings are NOT included on purpose, because demo
   ratings must not be published as real review data.
===================================================================== */
function injectProductSchema() {
  const graph = PRODUCTS.map((p) => ({
    "@type": "Product",
    "@id": absUrl("#p/" + p.slug),
    name: p.name,
    description: p.desc,
    sku: "RRR-" + String(p.id).padStart(4, "0"), // REPLACE with your real SKU if you have one
    category: CATEGORIES[p.category],
    image: p.image ? [absUrl(p.image)] : [absUrl("assets/images/og-image.png")],
    brand: { "@type": "Brand", name: "RRR-Galaxy.pk" }, // REPLACE with the real brand of each product
    offers: {
      "@type": "Offer",
      url: absUrl("#p/" + p.slug),
      priceCurrency: "PKR",
      price: String(p.sale),
      availability: p.stock === "out" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "RRR-Galaxy.pk" }
    }
  }));
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  document.head.appendChild(el);
}

/* =====================================================================
   10. EVENTS
===================================================================== */
document.addEventListener("click", function (e) {
  /* WhatsApp links (data-wa) */
  const wa = e.target.closest("[data-wa]");
  if (wa) {
    e.preventDefault();
    openWhatsApp(wa.getAttribute("data-wa-msg") || "");
    return;
  }

  /* Dialog backdrop click closes it */
  if (e.target.tagName === "DIALOG") { closeDialog(e.target); return; }

  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.getAttribute("data-action");
  const id = el.getAttribute("data-id");

  switch (action) {
    case "add": {
      addToCart(id, 1);
      toast("Added to cart");
      break;
    }
    case "buy": {
      addToCart(id, 1);
      openCheckout();
      break;
    }
    case "view": openProduct(id); break;
    case "inc": { const l = cart.find((i) => i.id === Number(id)); if (l) setQty(id, l.qty + 1); break; }
    case "dec": { const l = cart.find((i) => i.id === Number(id)); if (l) setQty(id, l.qty - 1); break; }
    case "remove": setQty(id, 0); break;
    case "clear-cart": clearCart(); toast("Cart cleared"); break;
    case "open-cart": renderCart(); openDialog($("#cartDialog")); break;
    case "continue": closeDialog($("#cartDialog")); goToShop(); break;
    case "close-dialog": closeDialog(el.closest("dialog")); break;
    case "checkout": openCheckout(); break;

    case "pd-inc": detailQty = Math.min(99, detailQty + 1); $("#pdQty").textContent = detailQty; break;
    case "pd-dec": detailQty = Math.max(1, detailQty - 1); $("#pdQty").textContent = detailQty; break;
    case "pd-add": addToCart(id, detailQty); toast("Added to cart"); break;
    case "pd-buy": addToCart(id, detailQty); closeDialog($("#productDialog")); openCheckout(); break;
    case "ask-wa": { const p = byId(id); openWhatsApp("Assalam o Alaikum! I would like to know more about: " + p.name + " (" + money(p.sale) + ")"); break; }

    case "filter-cat":
      state.cat = el.getAttribute("data-cat");
      state.q = "";
      syncControls();
      renderShop();
      goToShop();
      break;
    case "reset-filters": resetFilters(); break;

    case "cart-wa": {
      if (cart.length === 0) break;
      const lines = cart.map((i, n) => (n + 1) + ". " + byId(i.id).name + " x " + i.qty + " = " + money(byId(i.id).sale * i.qty));
      openWhatsApp("Assalam o Alaikum! I would like to order:\n" + lines.join("\n") + "\nTotal: " + money(cartTotal()) + "\n\nI will send my name, address and phone number next.");
      break;
    }
    case "checkout-wa": {
      const data = readOrderForm();
      if (!data) break;
      const orderId = newOrderId();
      lastOrder = { data: data, id: orderId, text: buildOrderText(data, orderId) };
      openWhatsApp(lastOrder.text);
      break;
    }
    case "send-wa-order": if (lastOrder) openWhatsApp(lastOrder.text); break;
    case "send-mail-order": if (lastOrder) openEmail("New order " + lastOrder.id, lastOrder.text); break;
    case "copy-order": if (lastOrder) copyText(lastOrder.text); break;
    case "finish-order":
      clearCart();
      lastOrder = null;
      closeDialog($("#checkoutDialog"));
      toast("Thank you for your order!");
      break;

    case "contact-wa": { const d = readContact(); if (d) openWhatsApp(contactText(d)); break; }
    case "contact-mail": { const d = readContact(); if (d) openEmail("Message from " + d.name, contactText(d)); break; }
    default: break;
  }
});

/* Submit handlers */
document.addEventListener("submit", function (e) {
  if (e.target.id === "orderForm") { e.preventDefault(); placeOrder(); }
  else if (e.target.id === "headerSearch") {
    e.preventDefault();
    state.q = $("#hq").value;
    syncControls();
    renderShop();
    goToShop();
    $("#hq").blur();
  }
  else if (e.target.id === "newsForm") handleNewsletter(e);
  else if (e.target.id === "contactForm") e.preventDefault();
});

/* Live search + filters */
let searchTimer;
function liveSearch(value) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function () {
    state.q = value;
    syncControls();
    renderShop();
  }, 160);
}
$("#hq").addEventListener("input", (e) => liveSearch(e.target.value));
$("#sq").addEventListener("input", (e) => liveSearch(e.target.value));
$("#fCat").addEventListener("change", (e) => { state.cat = e.target.value; renderShop(); });
$("#fPrice").addEventListener("change", (e) => { state.price = e.target.value; renderShop(); });
$("#fRating").addEventListener("change", (e) => { state.rating = e.target.value; renderShop(); });
$("#fSort").addEventListener("change", (e) => { state.sort = e.target.value; renderShop(); });

/* Dialog close housekeeping */
$$("dialog").forEach((d) => d.addEventListener("close", onDialogClosed));
$("#productDialog").addEventListener("close", onProductClosed);

/* Mobile menu */
const menuBtn = $("#menuBtn");
const nav = $("#mainNav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* Highlight the current section in the menu */
if ("IntersectionObserver" in window) {
  const links = $$("#mainNav a");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "shop", "categories", "deals", "about", "contact", "faq"].forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* =====================================================================
   11. START
===================================================================== */
(function init() {
  $("#year").textContent = new Date().getFullYear();

  // Make real WhatsApp links work even without clicking (long-press, copy link)
  if (/^\d{11,15}$/.test(WHATSAPP_NUMBER)) {
    $$("[data-wa]").forEach((a) => {
      a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(a.getAttribute("data-wa-msg") || "");
    });
  }
  // Keep the visible email in sync with STORE_EMAIL
  const emailLink = $("#contactEmail");
  if (emailLink) { emailLink.textContent = STORE_EMAIL; emailLink.href = "mailto:" + STORE_EMAIL; }

  // Support ?q=search-term (used by Google's site search markup)
  const params = new URLSearchParams(location.search);
  if (params.get("q")) state.q = params.get("q").slice(0, 80);

  syncControls();
  renderShop();
  renderRows();
  updateCartUI();
  injectProductSchema();

  // Open a product directly from a link like  yoursite/#p/rechargeable-neck-fan
  if (location.hash.indexOf("#p/") === 0) {
    const p = bySlug(decodeURIComponent(location.hash.slice(3)));
    if (p) openProduct(p.id, true);
  } else if (state.q) {
    goToShop();
  }
})();
