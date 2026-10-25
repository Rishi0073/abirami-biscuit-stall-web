/**
 * Abirami Biscuit Stall - Business Configuration
 * 
 * Centralized configuration file for all editable business information,
 * brand lists, wholesale categories, location data, and contact placeholders.
 * 
 * IMPORTANT:
 * Exact street address, phone numbers, and operating hours have not been supplied.
 * They are deliberately kept as configurable placeholders below so the owner
 * can fill them in without modifying component code.
 */

export interface ProductHighlight {
  name: string;
  description: string;
  looseByKg?: boolean;
}

export interface FarsanVarietyItem {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  categoryTag: string;
}

export interface WholesaleCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isHero?: boolean;
  examples: string[];
  image: string;
  imageAlt: string;
}

export interface BrandItem {
  name: string;
  category: string;
  note?: string;
}

export interface BusinessConfig {
  name: string;
  type: string;
  tagline: string;
  locationArea: string;
  city: string;
  state: string;
  country: string;
  
  // Contact & Location placeholders (Edit when confirmed)
  contact: {
    addressLine1: string; // Placeholder until provided
    addressDetails: string;
    landmarkPlaceholder: string;
    phone: string; // Placeholder until provided
    whatsapp: string; // Placeholder until provided
    openingHours: string; // Placeholder until provided
    googleMapsUrl: string; // Enter genuine Google Maps URL here (leave empty or '#' if unconfirmed)
    isAddressConfirmed: boolean;
    isPhoneConfirmed: boolean;
    isHoursConfirmed: boolean;
    isMapsConfirmed: boolean;
  };

  hero: {
    subheading: string;
    headline: string;
    supportingText: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    farsanImage: string;
    farsanImageAlt: string;
  };

  farsanSpotlight: {
    headline: string;
    description: string;
    wholesaleNotice: string;
    highlights: ProductHighlight[];
    image: string;
    imageAlt: string;
  };

  farsanVarieties: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    retailerNote: string;
    items: FarsanVarietyItem[];
  };

  brands: {
    supportingSentence: string;
    disclaimer: string;
    list: BrandItem[];
  };

  categories: WholesaleCategory[];

  whyVisit: {
    headline: string;
    supportingCopy: string;
    points: {
      title: string;
      description: string;
      icon: string;
    }[];
  };

  about: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
    coreValues: {
      title: string;
      description: string;
    }[];
  };

  visitShop: {
    headline: string;
    description: string;
    noteForRetailers: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "Abirami Biscuit Stall",
  type: "Wholesale Kirana & Snack Supplier",
  tagline: "Wholesale Destination for Farsan, Snacks & Kirana Essentials",
  locationArea: "Dharavi",
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",

  contact: {
    // These fields are placeholders until official details are supplied by the owner
    addressLine1: "Dharavi Wholesale Market Area",
    addressDetails: "Exact shop number and street to be updated upon confirmation",
    landmarkPlaceholder: "Near Dharavi Main Market, Mumbai - 400017",
    phone: "Contact number to be provided by owner",
    whatsapp: "WhatsApp contact to be updated",
    openingHours: "Timings to be confirmed (Retailer wholesale hours)",
    googleMapsUrl: "", // Paste confirmed Google Maps pin link here
    isAddressConfirmed: false,
    isPhoneConfirmed: false,
    isHoursConfirmed: false,
    isMapsConfirmed: false,
  },

  hero: {
    subheading: "ABIRAMI BISCUIT STALL · DHARAVI, MUMBAI",
    headline: "Your Wholesale Destination for Farsan, Snacks & Kirana Essentials.",
    supportingText: "From farsan and namkeen to popular snack and biscuit brands, discover a wide range of everyday essentials for your retail business at Abirami Biscuit Stall.",
    primaryCtaText: "Visit Our Shop",
    secondaryCtaText: "Explore What We Offer",
    farsanImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    farsanImageAlt: "Fresh Indian farsan, namkeen, sev, and savoury snacks arranged for wholesale showcase",
  },

  farsanSpotlight: {
    headline: "Farsan & Namkeen for Your Retail Business.",
    description: "Explore the savoury side of Abirami Biscuit Stall, with farsan and namkeen among the key highlights of our wholesale range.",
    wholesaleNotice: "Relevant loose farsan products and savoury mixtures are available by weight (kilogram) for retail stores and bulk requirements.",
    highlights: [
      {
        name: "Sev & Gathiya Varieties",
        description: "Popular crispy favourites including nylon sev, tikha sev, and soft gathiya.",
        looseByKg: true,
      },
      {
        name: "Chivda & Mixtures",
        description: "Traditional spicy, sweet-sour, and roasted snack mixtures ideal for kirana retail counters.",
        looseByKg: true,
      },
      {
        name: "Boondi & Bhavnagari",
        description: "Khara boondi and special farsan items packed for convenient wholesale replenishment.",
        looseByKg: true,
      },
      {
        name: "Chana & Peanuts",
        description: "Roasted salted peanuts, spiced sing, and roasted chana sold in bulk by kilogram.",
        looseByKg: true,
      },
    ],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Assorted Indian namkeen varieties and crispy savoury snacks",
  },

  farsanVarieties: {
    sectionTitle: "Our Farsan & Snack Varieties",
    sectionSubtitle: "Authentic Savoury Packets & Loose Wholesale Stock",
    description: "Explore our dedicated line-up of traditional farsan, crunchy gathiya, spiced dals, mixtures, and chakli varieties available for wholesale purchase in Dharavi.",
    retailerNote: "All 19 signature varieties are available for in-person wholesale purchasing. Loose goods can also be ordered by the kilogram for retail counter replenishment.",
    items: [
      {
        id: "mix-gathiya",
        name: "Mix Gathiya",
        image: "/images/farsan/products/mix-gathiya.png",
        imageAlt: "Mix Gathiya authentic wholesale pack",
        categoryTag: "Gathiya",
      },
      {
        id: "mixture",
        name: "Mixture",
        image: "/images/farsan/products/mixture.png",
        imageAlt: "Mixture authentic wholesale pack",
        categoryTag: "Mixture",
      },
      {
        id: "tikha-gathiya",
        name: "Tikha Gathiya",
        image: "/images/farsan/products/tikha-gathiya.png",
        imageAlt: "Tikha Gathiya authentic wholesale pack",
        categoryTag: "Gathiya",
      },
      {
        id: "moong-dal",
        name: "Moong Dal",
        image: "/images/farsan/products/moong-dal.png",
        imageAlt: "Moong Dal authentic wholesale pack",
        categoryTag: "Savoury Dal",
      },
      {
        id: "sada-boondi",
        name: "Sada Boondi",
        image: "/images/farsan/products/sada-boondi.png",
        imageAlt: "Sada Boondi authentic wholesale pack",
        categoryTag: "Boondi",
      },
      {
        id: "schezwan-thukda-chakli",
        name: "Schezwan Thukda Chakli",
        image: "/images/farsan/products/schezwan-thukda-chakli.png",
        imageAlt: "Schezwan Thukda Chakli authentic wholesale pack",
        categoryTag: "Chakli",
      },
      {
        id: "masoor-dal",
        name: "Masoor Dal",
        image: "/images/farsan/products/masoor-dal.png",
        imageAlt: "Masoor Dal authentic wholesale pack",
        categoryTag: "Savoury Dal",
      },
      {
        id: "lasun-chuda",
        name: "Lasun Chuda",
        image: "/images/farsan/products/lasun-chuda.png",
        imageAlt: "Lasun Chuda authentic wholesale pack",
        categoryTag: "Chuda",
      },
      {
        id: "tikha-masoor-dal",
        name: "Tikha Masoor Dal",
        image: "/images/farsan/products/tikha-masoor-dal.png",
        imageAlt: "Tikha Masoor Dal authentic wholesale pack",
        categoryTag: "Savoury Dal",
      },
      {
        id: "thukda-chakli",
        name: "Thukda Chakli",
        image: "/images/farsan/products/thukda-chakli.png",
        imageAlt: "Thukda Chakli authentic wholesale pack",
        categoryTag: "Chakli",
      },
      {
        id: "bhavnagari-gathiya",
        name: "Bhavnagari Gathiya",
        image: "/images/farsan/products/bhavnagari-gathiya.png",
        imageAlt: "Bhavnagari Gathiya authentic wholesale pack",
        categoryTag: "Gathiya",
      },
      {
        id: "chana-dal",
        name: "Chana Dal",
        image: "/images/farsan/products/chana-dal.png",
        imageAlt: "Chana Dal authentic wholesale pack",
        categoryTag: "Savoury Dal",
      },
      {
        id: "dil-biscuit",
        name: "Dil Biscuit",
        image: "/images/farsan/products/dil-biscuit.png",
        imageAlt: "Dil Biscuit authentic wholesale pack",
        categoryTag: "Bakery Biscuit",
      },
      {
        id: "mitha-lasun",
        name: "Mitha Lasun",
        image: "/images/farsan/products/mitha-lasun.png",
        imageAlt: "Mitha Lasun authentic wholesale pack",
        categoryTag: "Lasun Savoury",
      },
      {
        id: "laliya",
        name: "Laliya",
        image: "/images/farsan/products/laliya.png",
        imageAlt: "Laliya authentic wholesale pack",
        categoryTag: "Specialty Savoury",
      },
      {
        id: "madras-mixture",
        name: "Madras Mixture",
        image: "/images/farsan/products/madras-mixture.png",
        imageAlt: "Madras Mixture authentic wholesale pack",
        categoryTag: "Mixture",
      },
      {
        id: "masala-sing",
        name: "Masala Sing",
        image: "/images/farsan/products/masala-sing.png",
        imageAlt: "Masala Sing authentic wholesale pack",
        categoryTag: "Spiced Peanuts",
      },
      {
        id: "lasun",
        name: "Lasun",
        image: "/images/farsan/products/lasun.png",
        imageAlt: "Lasun authentic wholesale pack",
        categoryTag: "Lasun Sev",
      },
      {
        id: "mitha-chuda",
        name: "Mitha Chuda",
        image: "/images/farsan/products/mitha-chuda.png",
        imageAlt: "Mitha Chuda authentic wholesale pack",
        categoryTag: "Chuda",
      },
    ],
  },

  brands: {
    supportingSentence: "Explore a variety of popular snack and biscuit brands at Abirami Biscuit Stall.",
    disclaimer: "Brand names are shown for wholesale product identification only. Product availability is subject to physical shop inventory.",
    list: [
      { name: "Balaji", category: "Wafers & Namkeen" },
      { name: "Haldiram's", category: "Packaged Snacks & Sweets" },
      { name: "Diamond", category: "Snacks & Namkeen" },
      { name: "Lay's", category: "Potato Chips" },
      { name: "Parle", category: "Biscuits & Confectionery" },
      { name: "Britannia", category: "Biscuits, Cakes & Toast" },
      { name: "Perfetti Van Melle", category: "Confectionery", note: "Subject to stock confirmation" },
    ],
  },

  categories: [
    {
      id: "farsan-namkeen",
      title: "Farsan & Namkeen",
      subtitle: "The Hero of Our Wholesale Range",
      description: "Our signature savoury wholesale offering, featuring crisp sev, flavorful chivda, gathiya, boondi, and assorted namkeen. Available both in packaged formats and loose by the kilogram for bulk buyers.",
      isHero: true,
      examples: ["Nylon Sev", "Spicy Gathiya", "Poha Chivda", "Khara Boondi", "Farsan by Kilogram"],
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Display of assorted golden Indian farsan and savory namkeen",
    },
    {
      id: "chips-snacks",
      title: "Chips & Packaged Snacks",
      subtitle: "Fast-Moving Kirana Staples",
      description: "Keep your store shelves stocked with top snack favorites that drive daily customer footfall, including Balaji wafers, Lay's chips, Diamond snacks, and Haldiram's savoury packets.",
      examples: ["Balaji Wafers", "Lay's Classic & Spiced", "Diamond Namkeen", "Haldiram's Packets"],
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Packaged savory potato chips and crispy snacks",
    },
    {
      id: "biscuits-cakes",
      title: "Biscuits & Cakes",
      subtitle: "Everyday Tea-Time Favourites",
      description: "Wholesale selections of household biscuit staples from Parle and Britannia, alongside small packaged cakes, popular ₹5 pocket cakes, and sweet treats in demand at neighbourhood stores.",
      examples: ["Parle-G & Marie", "Britannia Good Day", "₹5 Packaged Cakes", "Cream Biscuits"],
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Assortment of fresh baked biscuits and tea-time cookies",
    },
    {
      id: "toast-bakery",
      title: "Toast & Bakery Goods",
      subtitle: "Rusk & Jar Packaged Goods",
      description: "Crispy Britannia toast, traditional rusk, and bakery goods packed in sturdy wholesale jars (barni) suited for kirana counters and tea stalls seeking durable bulk stock.",
      examples: ["Britannia Toast", "Rusk in Wholesale Barni (Jars)", "Tea Bakery Items"],
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Golden baked toast, rusk, and bakery goods",
    },
    {
      id: "dry-goods",
      title: "Dry Goods & Bulk Legumes",
      subtitle: "Sold by the Kilogram",
      description: "Wholesale dry essentials including raw and roasted peanuts, spiced sing, and roasted chana sold by weight to meet neighbourhood demand for savoury loose staples.",
      examples: ["Roasted Peanuts by kg", "Salted Sing", "Roasted Chana", "Bulk Dry Staples"],
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Raw and roasted peanuts and chana in bulk wholesale containers",
    },
    {
      id: "kirana-essentials",
      title: "Everyday Kirana Essentials",
      subtitle: "Cleaning & Small Stationery",
      description: "A practical assortment of non-food household staples that complete a kirana store's inventory, including laundry detergents like Surf Excel, bath soaps, and basic stationery items like pencils and erasers.",
      examples: ["Surf Excel & Detergent", "Bathing Soaps", "Pencils & Erasers", "Household Goods"],
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Everyday household kirana cleaning and daily essentials",
    },
  ],

  whyVisit: {
    headline: "A Convenient Wholesale Stop for Your Shop.",
    supportingCopy: "Whether you run a kirana shop or another small retail business, visit Abirami Biscuit Stall to explore our range of farsan, snacks, biscuits, and everyday essentials.",
    points: [
      {
        title: "Broad Kirana Range Under One Roof",
        description: "Stock up on farsan, packaged snacks, biscuits, bakery goods, and household staples all from one single wholesale stop.",
        icon: "Store",
      },
      {
        title: "Farsan & Namkeen Speciality",
        description: "Benefit from our dedicated savoury wholesale focus, featuring loose farsan sold by the kilogram as well as packaged favourites.",
        icon: "Utensils",
      },
      {
        title: "Recognized Everyday Brands",
        description: "Access high-velocity brands such as Balaji, Haldiram's, Diamond, Lay's, Parle, and Britannia that customers ask for daily.",
        icon: "Award",
      },
      {
        title: "Inspect Goods In Person",
        description: "Visit our physical shop in Dharavi to check stock quality, review varieties, and buy precisely what your retail customers demand.",
        icon: "Eye",
      },
      {
        title: "Convenient Physical Location",
        description: "Centrally positioned in Dharavi, Mumbai, making routine wholesale replenishment easy and direct for neighbourhood retailers.",
        icon: "MapPin",
      },
    ],
  },

  about: {
    headline: "Serving Local Kirana Stores & Bulk Retailers in Dharavi",
    subheadline: "A dedicated physical wholesale supplier focused on fast-moving everyday goods.",
    paragraphs: [
      "Abirami Biscuit Stall operates as a physical wholesale shop in Dharavi, Mumbai, providing neighbourhood kirana stores, small grocery retailers, and bulk buyers with essential everyday goods.",
      "Rather than dealing with multiple separate vendors for savoury snacks, biscuits, and dry essentials, retailers can visit our shop to source assorted farsan, branded packaged chips, tea-time bakery items, and household goods from one location.",
      "We carry an assortment of approximately 500 everyday products, with a special emphasis on farsan and namkeen. Customers visit our shop in person to inspect stock, make their purchases, and take goods directly back to their retail shelves.",
    ],
    coreValues: [
      {
        title: "Physical In-Person Buying",
        description: "A genuine brick-and-mortar storefront where you can see the stock before purchasing.",
      },
      {
        title: "Retailer-Focused Assortment",
        description: "Carefully selected items that rotate quickly on neighbourhood kirana shelves.",
      },
      {
        title: "Bulk & Weight Options",
        description: "Flexibility with loose farsan and dry staples available by kilogram.",
      },
    ],
  },

  visitShop: {
    headline: "Looking for Wholesale Goods? Visit Us in Dharavi.",
    description: "Explore our range of farsan, namkeen, biscuits, snacks, and everyday kirana essentials in person.",
    noteForRetailers: "Please note: We are a physical wholesale shop. Goods are purchased and collected in person at our Dharavi storefront.",
  },
};
