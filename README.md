# RRR-Galaxy.pk: setup guide

A complete static online store (HTML, CSS, vanilla JavaScript). No backend, no build step, free on GitHub Pages.

## 1. What each file does

| File | What it contains |
|---|---|
| `index.html` | All page content, SEO tags, structured data, FAQ, contact, policies |
| `style.css` | All design. Brand colours are at the top (`:root`) |
| `script.js` | **Settings at the top**, your products list, cart, checkout, search, filters |
| `robots.txt` | Lets Google crawl the site and points to the sitemap |
| `sitemap.xml` | Tells Google which page to index |
| `assets/images/` | Put your product photos here (`og-image.png` is the link-preview image) |
| `assets/icons/` | Favicon and app icons |

Keep the folder structure exactly as it is. All paths are relative, so it works on any GitHub Pages address.

## 2. Upload to GitHub

1. Create a free account at github.com.
2. Press **+** (top right) > **New repository**. Name it, for example, `rrr-galaxy`. Choose **Public**. Press **Create repository**.
3. Press **uploading an existing file**.
4. Drag in **everything inside the `rrr-galaxy` folder**: `index.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml` and the whole `assets` folder. (`index.html` must be at the top level of the repository, not inside another folder.)
5. Press **Commit changes**.

## 3. Turn on GitHub Pages (free URL)

1. In the repository open **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**. Press **Save**.
4. Wait 1 to 3 minutes and refresh. The page shows your address:
   `https://YOUR-USERNAME.github.io/rrr-galaxy/`
   (If the repository is named `YOUR-USERNAME.github.io`, the address is just `https://YOUR-USERNAME.github.io/`.)

### Use your GitHub address first
Until the domain is connected, do a Find & Replace of `https://rrr-galaxy.pk/` with your GitHub address (keep the slash at the end) in `index.html`, `robots.txt`, `sitemap.xml` and the `SITE_URL` line in `script.js`.

## 4. Connect your domain rrr-galaxy.pk

1. Buy/own the domain from a Pakistani registrar.
2. In the repository **Settings > Pages > Custom domain**, type `rrr-galaxy.pk` and press **Save**. GitHub creates a `CNAME` file for you.
3. At your domain registrar, open **DNS settings** and add:
   - four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - one **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`
4. Wait for DNS to update (a few minutes up to 24 hours), then tick **Enforce HTTPS** in Settings > Pages.
5. Change the addresses in the files back to `https://rrr-galaxy.pk/`.

(GitHub may update these IP addresses. Check docs.github.com > "Managing a custom domain for your GitHub Pages site" before you set them.)

## 5. Google Search Console and sitemap

1. Go to search.google.com/search-console and sign in with Google.
2. Press **Add property**. Choose **URL prefix** and enter your exact address (GitHub address, or `https://rrr-galaxy.pk/`).
3. Verify ownership. Easiest way: choose the **HTML tag** method, copy the `<meta name="google-site-verification" ...>` line, paste it inside `<head>` of `index.html`, commit, then press **Verify**.
4. Open **Sitemaps** in the left menu, type `sitemap.xml`, press **Submit**.
5. Open **URL Inspection**, paste your address and press **Request indexing**.

Note: Google can take days to weeks to show a new site. Posting products on Facebook, Instagram and TikTok with your link helps people find you sooner.

## 6. What you must replace

| What | Where |
|---|---|
| **WhatsApp number** | `script.js`, `WHATSAPP_NUMBER`. Format `923001234567` (no +, spaces or leading 0) |
| **Email** | `script.js`, `STORE_EMAIL`. Also the `email` in the Organization schema in `index.html` |
| **Social links** | `index.html`: footer "Follow us" and the `sameAs` list in the first JSON-LD block (search for `REPLACE`) |
| **Product names, prices, stock** | `script.js`, the `PRODUCTS` list (all are marked as demo) |
| **Product images** | Upload photos to `assets/images/`, then set `image: "assets/images/your-photo.jpg"` for that product. Use about 800x800 px, under 150 KB |
| **Business address and hours** | `index.html`, Contact section (search `REPLACE WITH YOUR REAL INFORMATION`) |
| **Delivery information, return, privacy, terms** | `index.html`, section `id="policies"` |
| **Delivery charge** | `script.js`, `DELIVERY_FEE` (0 means "confirmed when we contact you") |
| **Customer reviews** | `index.html`, section `id="reviews"` holds sample text. Replace with real feedback or delete the section |
| **Link preview image** | Replace `assets/images/og-image.png` with your own 1200x630 image if you wish |

## 7. Important things to know

- **Orders are not saved on a server.** A static site cannot store orders. After checkout, the customer gets an order summary and sends it to you by WhatsApp (or email). Always check your WhatsApp.
- **No fake payments.** Only Cash on Delivery is offered. No card details, no passwords.
- **Ratings are demo values** and are deliberately left out of Google's structured data. Add real ratings only when they come from real customers.
- **Taglines** (the first is used): "Smart Products. Easier Life." / "Shop Smart. Live Easy." / "Everyday Made Simple." / "Little Devices. Big Convenience."
- Share a single product with a link like `https://YOUR-ADDRESS/#p/rechargeable-neck-fan` (the part after `#p/` is the product's `slug`).

## 8. Checks done before delivery

- JSON-LD is valid JSON and the FAQ schema matches the visible FAQ.
- No duplicate IDs, no broken in-page links, all referenced files exist.
- JavaScript passes a syntax check and a logic test of search, filters, sorting, cart, localStorage, order text and phone validation.
- Not tested: in a real browser on real phones. After upload, open the site on your Android phone and test add to cart, checkout and the WhatsApp button.
