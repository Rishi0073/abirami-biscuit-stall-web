# Abirami Biscuit Stall - Wholesale Website

A professional, production-ready digital storefront for **Abirami Biscuit Stall**, a wholesale shop in Dharavi, Mumbai, Maharashtra, India, serving kirana stores, small retailers, and bulk buyers.

The website is designed specifically as a **digital storefront to drive physical footfall** to the Dharavi wholesale shop—highlighting **Farsan & Namkeen** as the hero category, alongside major fast-moving FMCG brands and everyday kirana essentials.

---

## 🌟 Key Features

- **Farsan as Hero:** High-impact hero section and dedicated spotlight showcasing assorted farsan, namkeen, sev, gathiya, chivda, boondi, and bulk savoury snacks sold by weight (per kilogram).
- **Major FMCG Brands:** Clean, typographic brand showcase featuring Balaji, Haldiram's, Diamond, Lay's, Parle, Britannia, and Perfetti Van Melle without infringing trademarks or claiming false distributorships.
- **6 Wholesale Kirana Categories:**
  1. Farsan & Namkeen (Hero Category)
  2. Chips & Packaged Snacks (Balaji, Lay's, Diamond, Haldiram's)
  3. Biscuits & Cakes (Parle, Britannia, ₹5 pocket cakes)
  4. Toast & Bakery Goods (Britannia toast, wholesale jars/barni)
  5. Dry Goods & Bulk Legumes (Peanuts, spiced sing, chana by kg)
  6. Everyday Kirana Essentials (Surf Excel, soaps, stationery items)
- **Zero Fabricated Claims:** Strictly adheres to truthful representations—no invented shop history, no fabricated phone numbers or fake street addresses, no fake discounts or "cheapest in Mumbai" claims.
- **Centralized Business Configuration:** Edit all business information, address, phone numbers, Google Maps URLs, and brand lists in a single file (`src/config/businessConfig.ts`).
- **Local SEO & Discovery:** Pre-configured with meta tags, Open Graph tags, robots.txt, sitemap.xml, and Schema.org LocalBusiness structured data.
- **Mobile First & High Performance:** Fast loading, accessible keyboard navigation, high-contrast text, touch-friendly buttons, and responsive down to 320px screen widths.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm (v9.0 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The application will launch at: `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```
This compiles TypeScript and builds an optimized, production-ready static site into the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Update Business Information

All business details, contact information, hours, and brand lists are configured in:
📁 `src/config/businessConfig.ts`

### 1. Updating the Physical Shop Address
Open `src/config/businessConfig.ts` and locate `contact`:
```typescript
contact: {
  addressLine1: "Shop No. 12, Dharavi Wholesale Market", // Replace with real address
  addressDetails: "Near Dharavi 90 Feet Road",
  landmarkPlaceholder: "Opposite Market Gate 2, Mumbai - 400017",
  isAddressConfirmed: true, // Change to true once confirmed!
  ...
}
```

### 2. Adding the Confirmed Google Maps Link
To enable the "Find Us on Maps" button to open your genuine shop location in Google Maps:
```typescript
contact: {
  googleMapsUrl: "https://maps.app.goo.gl/YourExactShopPinLink",
  isMapsConfirmed: true, // Change to true!
}
```

### 3. Updating Phone & WhatsApp Contact
```typescript
contact: {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  isPhoneConfirmed: true,
}
```

### 4. Updating Shop Timings
```typescript
contact: {
  openingHours: "Monday – Saturday: 8:00 AM – 9:00 PM | Sunday: 9:00 AM – 3:00 PM",
  isHoursConfirmed: true,
}
```

### 5. Modifying Brands or Wholesale Categories
In `src/config/businessConfig.ts`, adjust the `brands.list` array or `categories` array as stock changes over time.

---

## 📋 Checklist for the Shop Owner Before Launch

Before deploying the website publicly, the business owner should provide:
- [ ] **Exact Shop Address:** Shop number, building/market name, street/lane name, pin code.
- [ ] **Confirmed Google Maps Pin:** The exact location URL generated from Google Business Profile / Google Maps.
- [ ] **Contact Number:** Primary wholesale inquiry mobile/landline number and WhatsApp number.
- [ ] **Operating Timings:** Daily opening and closing hours for kirana retailers.
- [ ] **Optional Genuine Store Photos:** High-resolution photos of the actual storefront, bulk farsan jars, and wholesale counters (replace the placeholder URLs in `businessConfig.ts`).

---

## 🌐 Deploying to Static Hosting

The site outputs a zero-dependency static bundle in `dist/`. You can deploy it instantly on any of the following platforms:

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Output directory: `dist`

### Deploying to Netlify
1. Drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop), or
2. Run: `npx netlify-cli deploy --prod --dir=dist`

### Deploying to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"deploy": "gh-pages -d dist"` to `package.json`
3. Run: `npm run build && npm run deploy`

### Deploying to Firebase Hosting
1. Install Firebase tools: `npm install -g firebase-tools`
2. Run `firebase init hosting` and set public directory to `dist`
3. Run `firebase deploy --only hosting`

---

## 📐 Project Structure

```
├── public/
│   ├── favicon.svg          # Stylized brand favicon
│   ├── robots.txt           # Search engine crawler instructions
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── config/
│   │   └── businessConfig.ts# Centralized business, brand, & contact config
│   ├── components/
│   │   ├── Header.tsx       # Navigation bar & mobile menu
│   │   ├── HeroSection.tsx  # Farsan hero spotlight with primary CTAs
│   │   ├── FarsanSpotlight.tsx # Editorial farsan & namkeen showcase
│   │   ├── BrandShowcase.tsx   # Typographic brand display
│   │   ├── CategoryGrid.tsx    # 6 wholesale categories
│   │   ├── WhyVisitUs.tsx      # Practical wholesale advantages
│   │   ├── AboutSection.tsx    # Grounded, honest business story
│   │   ├── VisitShop.tsx       # Location, hours, and Google Maps CTA
│   │   ├── Footer.tsx          # Dynamic copyright, links, and navigation
│   │   ├── ImageWithFallback.tsx # Resilient image loader with fallback UI
│   │   └── DevPlaceholderNotice.tsx # Discreet on-page config notice
│   ├── App.tsx              # Main layout combining all sections
│   ├── index.css            # Tailwind directives and custom tokens
│   └── main.tsx             # React DOM entry point
├── index.html               # Semantic HTML, Google Fonts, JSON-LD Schema
├── tailwind.config.js       # Color tokens (cream, forest, saffron)
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```
