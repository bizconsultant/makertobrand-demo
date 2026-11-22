/* MakerToBrand — sample marketplace data (demo only) */
window.MTB_DATA = {
  commissionDefault: 0.045,
  plans: [
    {
      id: "free",
      name: "Free",
      priceMonth: 0,
      priceYear: 0,
      blurb: "Start listing and trading today.",
      commission: "5%",
      features: [
        "Open account for brands or manufacturers",
        "Manufacturer profile page (your mini website)",
        "Up to 8 ready-made listings",
        "Standard search placement",
        "In-app messaging",
        "Escrow payments on every order",
        "5% platform commission"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      priceMonth: 4999,
      priceYear: 49990,
      blurb: "Get found faster, and look verified.",
      popular: true,
      commission: "4%",
      features: [
        "Everything in Free",
        "Verified badge on your profile",
        "Up to 40 ready-made listings",
        "Priority in category search",
        "Instant alerts on new production briefs",
        "Quote templates for custom work",
        "4% platform commission"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      priceMonth: 12999,
      priceYear: 119999,
      blurb: "Top of search, unlimited listings, a lighter cut.",
      commission: "3%",
      features: [
        "Everything in Pro",
        "Featured badge and homepage placement",
        "Unlimited listings",
        "Top search placement in your categories",
        "Dedicated success manager",
        "Early access to new production briefs",
        "3% platform commission"
      ]
    }
  ],
  hubs: [
    { city: "Tiruppur", state: "Tamil Nadu", focus: "Knits, tees, kidswear" },
    { city: "Ludhiana", state: "Punjab", focus: "Woollens, hoodies, winter" },
    { city: "Surat", state: "Gujarat", focus: "Synthetics, festive wear" },
    { city: "Jaipur", state: "Rajasthan", focus: "Block print, cotton, craft" },
    { city: "Mumbai", state: "Maharashtra", focus: "Contemporary, design-led" },
    { city: "Delhi NCR", state: "NCR", focus: "Shirting, suiting, uniforms" },
    { city: "Bengaluru", state: "Karnataka", focus: "Sustainable wovens, linen" }
  ],
  manufacturers: [
    {
      id: "loom-lattice",
      name: "Loom & Lattice",
      city: "Tiruppur",
      state: "Tamil Nadu",
      tagline: "Knits, tees and activewear, made at scale.",
      categories: ["Knits", "T-shirts", "Activewear"],
      moq: 300,
      capacity: "1,20,000 pcs / month",
      leadTime: "18–25 days",
      established: 2009,
      team: "220–250",
      certifications: ["GOTS", "OEKO-TEX 100", "SA8000"],
      rating: 4.8,
      reviewCount: 36,
      verified: true,
      plan: "Premium",
      export: true,
      cover: "images/hanging-tees.jpg",
      portrait: "images/folded-tees.jpg",
      gallery: ["images/hanging-tees.jpg", "images/folded-tees.jpg", "images/black-tee.jpg", "images/sweatshirt.jpg", "images/factory-sew.jpg", "images/workshop-wide.jpg"],
      materials: ["Organic combed cotton", "Cotton slub", "CVC", "Polyester dry-fit"],
      sizes: "Ages 1–12 and XS–5XL, with in-house grading",
      about: "A knit specialist in Tiruppur with its own dyeing, cutting and finishing floors. Loom & Lattice works with emerging labels and established brands that need reliable monthly programmes in tees, sweats and active sets. Sampling sits in-house, so colour and fabric approvals move quickly.",
      reviews: [
        { by: "Coast & Cotton", rating: 5, text: "Clean finishing, honest dates, and the organic programme is consistent from lot to lot." },
        { by: "Nila Atelier", rating: 5, text: "We used them for a compact tee drop. Communication was plain and timely." },
        { by: "Aarohi Label", rating: 4, text: "Strong on basics. Ask early if you need unusual colourways." }
      ]
    },
    {
      id: "desert-weave",
      name: "Desert Weave Atelier",
      city: "Jaipur",
      state: "Rajasthan",
      tagline: "Hand block print, cotton kurtas and slow production.",
      categories: ["Block print", "Kurtas", "Dresses", "Craft"],
      moq: 150,
      capacity: "18,000 pcs / month",
      leadTime: "30–45 days",
      established: 2004,
      team: "80–90 plus artisan partners",
      certifications: ["Handloom Mark", "GOTS"],
      rating: 4.9,
      reviewCount: 28,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/color-fabric.jpg",
      portrait: "images/indian-textile.jpg",
      gallery: ["images/color-fabric.jpg", "images/indian-textile.jpg", "images/festive.jpg", "images/clothes-hanging.jpg", "images/dress-floral.jpg", "images/fabric-drape.jpg"],
      materials: ["Cotton cambric", "Mulmul", "Hand-block pigments", "Azo-free dyes"],
      sizes: "XS–XXL, custom grading on request",
      about: "A Jaipur atelier that still prints by hand in Bagru and Sanganer techniques, then stitches in a small factory on the edge of the city. Best for brands that want craft with repeatable quality, not one-off souvenirs. Designers can send a motif, or work from the house archive.",
      reviews: [
        { by: "Nila Atelier", rating: 5, text: "The print registration is careful, and they flag dye-lot variation before it becomes a problem." },
        { by: "Aarohi Label", rating: 5, text: "Our first kurta programme landed looking like the approved sample. Rare, and appreciated." }
      ]
    },
    {
      id: "sutra-knitworks",
      name: "Sutra Knitworks",
      city: "Ludhiana",
      state: "Punjab",
      tagline: "Winter knits, hoodies and merino blends.",
      categories: ["Woollens", "Hoodies", "Sweaters"],
      moq: 250,
      capacity: "40,000 pcs / month",
      leadTime: "25–35 days",
      established: 1998,
      team: "160–180",
      certifications: ["OEKO-TEX 100", "ISO 9001"],
      rating: 4.7,
      reviewCount: 22,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/wool-knit.jpg",
      portrait: "images/yarn-threads.jpg",
      gallery: ["images/wool-knit.jpg", "images/knit-sweater.jpg", "images/yarn-threads.jpg", "images/sweatshirt.jpg", "images/sewing-studio.jpg"],
      materials: ["Merino blend", "Acrylic-wool", "Cotton fleece", "Cashmere mix (on request)"],
      sizes: "XS–3XL, plus kids 2–12",
      about: "A Ludhiana knit house built around mid-weight winter programmes. Sutra runs its own knitting and linking, which keeps hoodie and sweater quality steady when brands reorder a colour the following season.",
      reviews: [
        { by: "Vanta Menswear", rating: 5, text: "Hoodie hand-feel was as sampled. They held the date even in peak winter bookings." },
        { by: "Coast & Cotton", rating: 4, text: "Good mid-weight knits. Share your tech pack early — they are precise." }
      ]
    },
    {
      id: "riverbend",
      name: "Riverbend Apparel",
      city: "Surat",
      state: "Gujarat",
      tagline: "Festive sets, georgette and embellished evening wear.",
      categories: ["Festive", "Synthetics", "Occasion wear"],
      moq: 80,
      capacity: "25,000 pcs / month",
      leadTime: "20–30 days",
      established: 2012,
      team: "140–160",
      certifications: ["ISO 9001"],
      rating: 4.6,
      reviewCount: 19,
      verified: false,
      plan: "Free",
      export: true,
      cover: "images/festive.jpg",
      portrait: "images/fabric-bolts.jpg",
      gallery: ["images/festive.jpg", "images/indian-textile.jpg", "images/fabric-bolts.jpg", "images/womenswear.jpg", "images/white-dress.jpg"],
      materials: ["Georgette", "Chinon", "Satin", "Sequins and thread work"],
      sizes: "XS–5XL, plus custom lehenga measurements",
      about: "A Surat unit that specialises in festive and occasion wear for labels that need embellishment without losing delivery discipline. Lower minimums than most mills, so it suits capsule drops as well as season programmes.",
      reviews: [
        { by: "Nila Atelier", rating: 4, text: "Embroidery was neat. We would brief trims in writing next time to avoid a shade mismatch." }
      ]
    },
    {
      id: "khadi-atelier",
      name: "Khadi Atelier Co.",
      city: "Mumbai",
      state: "Maharashtra",
      tagline: "Contemporary Indian, organic cotton and handloom.",
      categories: ["Contemporary", "Handloom", "Organic"],
      moq: 100,
      capacity: "8,000 pcs / month",
      leadTime: "28–40 days",
      established: 2016,
      team: "35–45",
      certifications: ["GOTS", "Fair Trade"],
      rating: 4.9,
      reviewCount: 17,
      verified: true,
      plan: "Premium",
      export: true,
      cover: "images/hero-editorial.jpg",
      portrait: "images/sewing-hands.jpg",
      gallery: ["images/hero-editorial.jpg", "images/sewing-hands.jpg", "images/casual-stack.jpg", "images/womenswear.jpg", "images/fabric-drape.jpg", "images/workshop-wide.jpg"],
      materials: ["Handloom khadi", "Organic cotton", "Linen-khadi mix", "Natural dyes"],
      sizes: "XS–XL, made-to-measure on Premium programmes",
      about: "A Mumbai design-led workshop that partners with handloom clusters and a small certified stitch floor. Made for brands that want contemporary silhouettes with a clear fibre story, not costume.",
      reviews: [
        { by: "Aarohi Label", rating: 5, text: "Clothes that feel designed, not merely stitched. Sampling is thoughtful." }
      ]
    },
    {
      id: "northline",
      name: "Northline Stitch",
      city: "Gurugram",
      state: "Delhi NCR",
      tagline: "Formal shirts, suiting and corporate programmes.",
      categories: ["Shirting", "Suiting", "Uniforms"],
      moq: 400,
      capacity: "60,000 pcs / month",
      leadTime: "22–30 days",
      established: 2001,
      team: "300+",
      certifications: ["ISO 9001", "BSCI"],
      rating: 4.7,
      reviewCount: 31,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/garments-rail.jpg",
      portrait: "images/tailor-hands.jpg",
      gallery: ["images/garments-rail.jpg", "images/tailor-hands.jpg", "images/linen-shirt.jpg", "images/formal-shirt.jpg", "images/menswear.jpg", "images/shirt-rack.jpg"],
      materials: ["2-ply oxford", "Poplin", "Tropical wool", "Stretch cotton"],
      sizes: "34–50 formal, with corporate size sets",
      about: "A Gurugram shirt and suiting factory built for repeat corporate and menswear programmes. Pattern accuracy and collar finishing are the house strengths. Large enough for national roll-outs, still willing to hold a seasonal capsule.",
      reviews: [
        { by: "Vanta Menswear", rating: 5, text: "Collar stands and plackets were consistent across 2,000 shirts. That is why we came back." },
        { by: "Coast & Cotton", rating: 4, text: "Professional floor. MOQ is real — plan your quantities." }
      ]
    },
    {
      id: "canopy-mills",
      name: "Canopy Mills",
      city: "Bengaluru",
      state: "Karnataka",
      tagline: "Sustainable wovens, linen and everyday shirts.",
      categories: ["Wovens", "Shirts", "Trousers", "Linen"],
      moq: 200,
      capacity: "22,000 pcs / month",
      leadTime: "24–32 days",
      established: 2014,
      team: "90–110",
      certifications: ["GOTS", "BCI", "OEKO-TEX 100"],
      rating: 4.8,
      reviewCount: 24,
      verified: true,
      plan: "Premium",
      export: true,
      cover: "images/shirts-hanging.jpg",
      portrait: "images/folded-shirts.jpg",
      gallery: ["images/shirts-hanging.jpg", "images/folded-shirts.jpg", "images/factory-sew.jpg", "images/mens-shirts.jpg", "images/threads-macro.jpg"],
      materials: ["Organic poplin", "Linen blend", "BCI cotton twill", "Deadstock weaves (limited)"],
      sizes: "XS–XXL, trouser 28–40",
      about: "A Bengaluru woven house that treats fibre traceability as part of the product, not a footnote. Suited to brands building a cleaner basics line — shirts, trousers and light outer layers — with documentation ready for retail partners.",
      reviews: [
        { by: "Coast & Cotton", rating: 5, text: "Certificates arrived with the shipment, and the linen blend washed the way the sample promised." }
      ]
    },
    {
      id: "coral-thread",
      name: "Coral Thread House",
      city: "Tiruppur",
      state: "Tamil Nadu",
      tagline: "Organic kidswear, soft jerseys and thoughtful finishes.",
      categories: ["Kidswear", "Organic", "Knits"],
      moq: 500,
      capacity: "70,000 pcs / month",
      leadTime: "20–28 days",
      established: 2011,
      team: "150–170",
      certifications: ["GOTS", "OEKO-TEX 100"],
      rating: 4.8,
      reviewCount: 21,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/kids-clothes.jpg",
      portrait: "images/folded-tees.jpg",
      gallery: ["images/kids-clothes.jpg", "images/folded-tees.jpg", "images/hanging-tees.jpg", "images/sweatshirt.jpg", "images/workshop-wide.jpg"],
      materials: ["Organic jersey", "French terry", "Interlock", "Nickel-free trims"],
      sizes: "0–3 months through 12 years",
      about: "A Tiruppur unit that only cuts children's programmes. Soft hand, secure trims and documented dyes are the non-negotiables. Brands come here when a kids line has to be as careful as it is commercial.",
      reviews: [
        { by: "Nila Atelier", rating: 5, text: "Our kids jersey set felt expensive in the hand, which is exactly what we needed at this price." }
      ]
    }
  ],
  products: [
    {
      id: "organic-crew",
      name: "Organic cotton crew neck tee",
      makerId: "loom-lattice",
      category: "T-shirts",
      fabric: "180 GSM organic combed cotton",
      moq: 300,
      colors: ["Ecru", "Ink", "Madder", "Sage", "Black"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 300, max: 999, price: 185 },
        { min: 1000, max: 2999, price: 165 },
        { min: 3000, max: null, price: 148 }
      ],
      images: ["images/folded-tees.jpg", "images/hanging-tees.jpg", "images/black-tee.jpg"],
      leadTime: "12–16 days",
      description: "A mid-weight crew designed as a brand basic. Side-seamed, with a taped neck and a clean hem that holds after wash. Available undyed in ecru, or yarn-dyed in four house colours. Custom labels and neck print can be added on the same line."
    },
    {
      id: "dryfit-tee",
      name: "Moisture-wick active tee",
      makerId: "loom-lattice",
      category: "Activewear",
      fabric: "160 GSM polyester dry-fit",
      moq: 400,
      colors: ["Black", "Ink", "White", "Oxide"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 400, max: 1199, price: 210 },
        { min: 1200, max: 2999, price: 190 },
        { min: 3000, max: null, price: 172 }
      ],
      images: ["images/black-tee.jpg", "images/sweatshirt.jpg", "images/hanging-tees.jpg"],
      leadTime: "14–18 days",
      description: "A lightweight training tee with quick-dry yarn and a slightly longer back hem. Built for clubs and performance labels that need consistent colour across large size runs."
    },
    {
      id: "block-kurta",
      name: "Hand block-print cotton kurta",
      makerId: "desert-weave",
      category: "Kurtas",
      fabric: "Cotton cambric, azo-free bagru print",
      moq: 150,
      colors: ["Indigo", "Madder", "Sand", "Olive"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 150, max: 499, price: 620 },
        { min: 500, max: 1499, price: 575 },
        { min: 1500, max: null, price: 530 }
      ],
      images: ["images/color-fabric.jpg", "images/indian-textile.jpg", "images/clothes-hanging.jpg"],
      leadTime: "30–40 days",
      description: "A straight-cut cotton kurta printed by hand in Jaipur. Motifs can come from the house archive or from your artwork. Each dye lot is photographed and shared before bulk is cut."
    },
    {
      id: "sanganer-dress",
      name: "Sanganer print midi dress",
      makerId: "desert-weave",
      category: "Dresses",
      fabric: "Mulmul cotton, Sanganer print",
      moq: 120,
      colors: ["Ivory indigo", "Rose sand", "Black gold"],
      sizes: ["XS", "S", "M", "L", "XL"],
      tiers: [
        { min: 120, max: 399, price: 890 },
        { min: 400, max: 899, price: 840 },
        { min: 900, max: null, price: 790 }
      ],
      images: ["images/dress-floral.jpg", "images/color-fabric.jpg", "images/womenswear.jpg"],
      leadTime: "32–42 days",
      description: "A gathered midi in fine mulmul, printed in Sanganer. Light enough for a summer line, finished with covered buttons and a modest lining option."
    },
    {
      id: "merino-hoodie",
      name: "Merino-blend pullover hoodie",
      makerId: "sutra-knitworks",
      category: "Hoodies",
      fabric: "320 GSM merino-cotton blend fleece",
      moq: 250,
      colors: ["Charcoal", "Oat", "Forest", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 250, max: 699, price: 780 },
        { min: 700, max: 1499, price: 720 },
        { min: 1500, max: null, price: 665 }
      ],
      images: ["images/sweatshirt.jpg", "images/wool-knit.jpg", "images/yarn-threads.jpg"],
      leadTime: "25–32 days",
      description: "A mid-weight hoodie with a merino-cotton face, kangaroo pocket and a lined hood. Designed to be embroidered or left clean. Colour continuity is held across seasons for reorders."
    },
    {
      id: "crew-sweater",
      name: "Cable knit crew sweater",
      makerId: "sutra-knitworks",
      category: "Sweaters",
      fabric: "Wool-acrylic cable knit",
      moq: 200,
      colors: ["Cream", "Camel", "Ink", "Rust"],
      sizes: ["S", "M", "L", "XL"],
      tiers: [
        { min: 200, max: 599, price: 920 },
        { min: 600, max: 1199, price: 860 },
        { min: 1200, max: null, price: 810 }
      ],
      images: ["images/knit-sweater.jpg", "images/wool-knit.jpg", "images/yarn-threads.jpg"],
      leadTime: "28–35 days",
      description: "A classic cable crew, linked in-house in Ludhiana. Soft hand without a heavy itch, and a rib that keeps its shape. Custom cables can be developed from a swatch."
    },
    {
      id: "festive-set",
      name: "Georgette festive co-ord set",
      makerId: "riverbend",
      category: "Festive",
      fabric: "Georgette with thread and sequin work",
      moq: 80,
      colors: ["Ruby", "Emerald", "Ivory gold", "Midnight"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 80, max: 199, price: 1450 },
        { min: 200, max: 499, price: 1320 },
        { min: 500, max: null, price: 1180 }
      ],
      images: ["images/festive.jpg", "images/fabric-bolts.jpg", "images/indian-textile.jpg"],
      leadTime: "22–30 days",
      description: "A two-piece festive set with measured embellishment — enough light for a retail window, restrained enough for a contemporary label. Lining and dupatta options are quoted separately."
    },
    {
      id: "khadi-overshirt",
      name: "Handloom khadi overshirt",
      makerId: "khadi-atelier",
      category: "Contemporary",
      fabric: "Handloom khadi, natural dyed",
      moq: 100,
      colors: ["Raw", "Indigo", "Terracotta", "Olive"],
      sizes: ["XS", "S", "M", "L", "XL"],
      tiers: [
        { min: 100, max: 249, price: 1100 },
        { min: 250, max: 599, price: 1020 },
        { min: 600, max: null, price: 940 }
      ],
      images: ["images/sewing-hands.jpg", "images/casual-stack.jpg", "images/hero-editorial.jpg"],
      leadTime: "28–38 days",
      description: "A boxy overshirt in handloom khadi, with horn-look buttons and a single patch pocket. Fibre and weaver documentation can travel with the shipment for your product page."
    },
    {
      id: "oxford-shirt",
      name: "Premium oxford formal shirt",
      makerId: "northline",
      category: "Shirting",
      fabric: "2-ply cotton oxford, 140 GSM",
      moq: 400,
      colors: ["White", "Sky", "Pale pink", "Navy check"],
      sizes: ["38", "40", "42", "44", "46", "48"],
      tiers: [
        { min: 400, max: 999, price: 425 },
        { min: 1000, max: 2499, price: 395 },
        { min: 2500, max: null, price: 365 }
      ],
      images: ["images/folded-shirts.jpg", "images/linen-shirt.jpg", "images/formal-shirt.jpg"],
      leadTime: "18–24 days",
      description: "A formal oxford with a fused collar, single-needle armhole and durable buttons. Built as a corporate or menswear basic. Logo embroidery at the chest is available from 400 pieces."
    },
    {
      id: "navy-suit",
      name: "Half-canvas navy suit",
      makerId: "northline",
      category: "Suiting",
      fabric: "Tropical wool blend, half-canvas",
      moq: 50,
      colors: ["Navy", "Charcoal", "Mid grey"],
      sizes: ["36", "38", "40", "42", "44", "46"],
      tiers: [
        { min: 50, max: 99, price: 4200 },
        { min: 100, max: 249, price: 3900 },
        { min: 250, max: null, price: 3600 }
      ],
      images: ["images/garments-rail.jpg", "images/tailor-hands.jpg", "images/menswear.jpg"],
      leadTime: "30–40 days",
      description: "A half-canvas two-piece in a breathable wool blend. Cut for a contemporary Indian fit, with options for a working cuff and a personalised lining on larger programmes."
    },
    {
      id: "linen-trousers",
      name: "Linen-blend everyday trousers",
      makerId: "canopy-mills",
      category: "Trousers",
      fabric: "Linen-cotton twill, 200 GSM",
      moq: 200,
      colors: ["Sand", "Olive", "Ivory", "Charcoal"],
      sizes: ["28", "30", "32", "34", "36", "38", "40"],
      tiers: [
        { min: 200, max: 499, price: 640 },
        { min: 500, max: 999, price: 595 },
        { min: 1000, max: null, price: 550 }
      ],
      images: ["images/shirts-hanging.jpg", "images/casual-stack.jpg", "images/factory-sew.jpg"],
      leadTime: "22–28 days",
      description: "A soft-tailored trouser in linen-cotton, with a clean front and a comfort waist. Designed as a warm-weather basic that still photographs well."
    },
    {
      id: "poplin-shirt",
      name: "Organic poplin everyday shirt",
      makerId: "canopy-mills",
      category: "Shirts",
      fabric: "GOTS organic poplin, 120 GSM",
      moq: 200,
      colors: ["White", "Sky", "Sage", "Stripe"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      tiers: [
        { min: 200, max: 599, price: 480 },
        { min: 600, max: 1499, price: 445 },
        { min: 1500, max: null, price: 410 }
      ],
      images: ["images/shirt-rack.jpg", "images/folded-shirts.jpg", "images/shirts-hanging.jpg"],
      leadTime: "20–26 days",
      description: "A light organic poplin shirt with a soft collar and a slightly relaxed body. Certificates travel with the lot. A quiet staple for labels that talk about fibre and want the paperwork to match."
    },
    {
      id: "kids-jersey",
      name: "Organic kids jersey set",
      makerId: "coral-thread",
      category: "Kidswear",
      fabric: "200 GSM organic jersey, nickel-free trims",
      moq: 500,
      colors: ["Butter", "Sky", "Berry", "Grey", "Navy"],
      sizes: ["6–12 M", "1–2 Y", "3–4 Y", "5–6 Y", "7–8 Y"],
      tiers: [
        { min: 500, max: 1199, price: 310 },
        { min: 1200, max: 2999, price: 285 },
        { min: 3000, max: null, price: 260 }
      ],
      images: ["images/kids-clothes.jpg", "images/folded-tees.jpg", "images/hanging-tees.jpg"],
      leadTime: "20–26 days",
      description: "A two-piece jersey set for children, with a soft hand, enclosed seams and documented dyes. Built for brands that need a kids line to be as careful as it is commercial."
    },
    {
      id: "leather-look",
      name: "Soft-touch utility overjacket",
      makerId: "khadi-atelier",
      category: "Contemporary",
      fabric: "Cotton-twill with a soft-touch finish",
      moq: 120,
      colors: ["Black", "Tan", "Forest"],
      sizes: ["S", "M", "L", "XL"],
      tiers: [
        { min: 120, max: 299, price: 1680 },
        { min: 300, max: 699, price: 1540 },
        { min: 700, max: null, price: 1420 }
      ],
      images: ["images/leather-jacket.jpg", "images/textile-close.jpg", "images/womenswear.jpg"],
      leadTime: "26–34 days",
      description: "A clean utility overjacket with a soft-touch twill face, welt pockets and a simple cuff. A statement piece that still belongs in a wholesale programme."
    }
  ],
  rfqs: [
    {
      id: "rfq-kurta-5000",
      title: "5,000 cotton kurtas, Jaipur print",
      brand: "Nila Atelier",
      brandCity: "Mumbai",
      category: "Kurtas",
      qty: 5000,
      fabric: "100% cotton cambric, 80×80, azo-free dyes",
      deadline: "15 March 2027",
      posted: "4 Nov 2026",
      status: "quotes-in",
      budget: "₹520–580 / pc",
      sizes: "XS–XXL, standard Indian women's curve",
      notes: "Need a house motif developed from our mood board, or a close match from a Jaipur archive. Mid-calf length, side slits, mother-of-pearl look buttons. Sampling in two colourways before bulk.",
      quotes: [
        { id: "q1", makerId: "desert-weave", price: 545, lead: "42 days", moqOk: true, deposit: 40, daysAgo: 2, note: "We recommend Bagru madder and indigo for the first colourways. Sample in 10 days. Includes packing in individual poly and a master carton." },
        { id: "q2", makerId: "khadi-atelier", price: 610, lead: "48 days", moqOk: true, deposit: 35, daysAgo: 1, note: "We would print with a partner cluster in Jaipur and stitch in Mumbai. Higher unit cost, tighter design control and full fibre documentation." },
        { id: "q3", makerId: "riverbend", price: 499, lead: "30 days", moqOk: true, deposit: 50, daysAgo: 3, note: "Faster turnaround using a hybrid screen-and-block method. Best if date is the priority. Share the art as a vector file." }
      ]
    },
    {
      id: "rfq-tee-2000",
      title: "2,000 organic tees with neck embroidery",
      brand: "Coast & Cotton",
      brandCity: "Bengaluru",
      category: "T-shirts",
      qty: 2000,
      fabric: "180–200 GSM GOTS organic cotton",
      deadline: "20 January 2027",
      posted: "12 Nov 2026",
      status: "quotes-in",
      budget: "₹220–260 / pc",
      sizes: "S–XXL, unisex",
      notes: "Small tonal logo at the back neck, woven label, compostable packing. Three colours: ecru, ink, sage.",
      quotes: [
        { id: "q4", makerId: "loom-lattice", price: 238, lead: "22 days", moqOk: true, deposit: 30, daysAgo: 1, note: "Embroidery and GOTS documentation included. We already run this GSM for another organic programme." },
        { id: "q5", makerId: "canopy-mills", price: 255, lead: "26 days", moqOk: true, deposit: 30, daysAgo: 2, note: "We would knit through a certified partner and stitch in Bengaluru. Happy to hold a small overage for reorders." }
      ]
    },
    {
      id: "rfq-hoodie-800",
      title: "800 winter hoodies, custom colourway",
      brand: "Vanta Menswear",
      brandCity: "Delhi",
      category: "Hoodies",
      qty: 800,
      fabric: "320 GSM fleece, merino-cotton if possible",
      deadline: "28 February 2027",
      posted: "16 Nov 2026",
      status: "open",
      budget: "₹700–800 / pc",
      sizes: "S–XXL",
      notes: "Pantone to be confirmed after lab dips. Clean of graphics, with our woven label only.",
      quotes: [
        { id: "q6", makerId: "sutra-knitworks", price: 745, lead: "30 days", moqOk: true, deposit: 40, daysAgo: 0, note: "We can match a custom colour from mid-December yarn. Lab dips in 6 days once the Pantone is locked." }
      ]
    },
    {
      id: "rfq-linen-1200",
      title: "1,200 linen shirts, tonal embroidery",
      brand: "Aarohi Label",
      brandCity: "Jaipur",
      category: "Shirts",
      qty: 1200,
      fabric: "Linen-cotton, mid weight",
      deadline: "10 February 2027",
      posted: "28 Oct 2026",
      status: "accepted",
      budget: "₹540–620 / pc",
      sizes: "XS–XL",
      acceptedQuoteId: "q7",
      notes: "Tonal sprig embroidery at the placket. Natural buttons. Want the shipment to include wash-care and fibre notes for our site.",
      quotes: [
        { id: "q7", makerId: "canopy-mills", price: 575, lead: "28 days", moqOk: true, deposit: 35, daysAgo: 8, note: "Accepted. Deposit received. Fabric is in cutting. Embroidery sample signed off on 12 Nov." },
        { id: "q8", makerId: "khadi-atelier", price: 640, lead: "36 days", moqOk: true, deposit: 35, daysAgo: 9, note: "We had proposed a fuller handloom linen. Left on the table if you open a later drop." }
      ]
    }
  ],
  orders: [
    {
      id: "MTB-1842",
      type: "stock",
      productId: "organic-crew",
      makerId: "loom-lattice",
      brand: "Coast & Cotton",
      qty: 1000,
      unit: 165,
      total: 165000,
      commission: 4950,
      status: "held",
      statusLabel: "Payment held · in production",
      placed: "8 Nov 2026",
      eta: "24 Nov 2026"
    },
    {
      id: "MTB-1760",
      type: "stock",
      productId: "oxford-shirt",
      makerId: "northline",
      brand: "Vanta Menswear",
      qty: 600,
      unit: 425,
      total: 255000,
      commission: 10200,
      status: "released",
      statusLabel: "Delivered · payment released",
      placed: "14 Oct 2026",
      eta: "5 Nov 2026"
    },
    {
      id: "MTB-1810",
      type: "custom",
      rfqId: "rfq-linen-1200",
      makerId: "canopy-mills",
      brand: "Aarohi Label",
      qty: 1200,
      unit: 575,
      total: 690000,
      deposit: 241500,
      balance: 448500,
      commission: 20700,
      status: "deposit",
      statusLabel: "Deposit held · balance on delivery",
      placed: "12 Nov 2026",
      eta: "10 Feb 2027"
    },
    {
      id: "MTB-1794",
      type: "stock",
      productId: "kids-jersey",
      makerId: "coral-thread",
      brand: "Nila Atelier",
      qty: 800,
      unit: 310,
      total: 248000,
      commission: 9920,
      status: "inspection",
      statusLabel: "Packed · inspection pending",
      placed: "2 Nov 2026",
      eta: "26 Nov 2026"
    }
  ],
  users: [
    { id: "u1", name: "Nila Atelier", type: "Brand", city: "Mumbai", plan: "Pro", status: "active", joined: "18 Aug 2026" },
    { id: "u2", name: "Coast & Cotton", type: "Brand", city: "Bengaluru", plan: "Premium", status: "active", joined: "2 Jun 2026" },
    { id: "u3", name: "Vanta Menswear", type: "Brand", city: "Delhi", plan: "Pro", status: "active", joined: "11 Jul 2026" },
    { id: "u4", name: "Aarohi Label", type: "Brand", city: "Jaipur", plan: "Free", status: "active", joined: "9 Sep 2026" },
    { id: "u5", name: "Loom & Lattice", type: "Manufacturer", city: "Tiruppur", plan: "Premium", status: "active", joined: "4 May 2026" },
    { id: "u6", name: "Desert Weave Atelier", type: "Manufacturer", city: "Jaipur", plan: "Pro", status: "active", joined: "21 May 2026" },
    { id: "u7", name: "Sutra Knitworks", type: "Manufacturer", city: "Ludhiana", plan: "Pro", status: "active", joined: "30 May 2026" },
    { id: "u8", name: "Riverbend Apparel", type: "Manufacturer", city: "Surat", plan: "Free", status: "active", joined: "16 Aug 2026" },
    { id: "u9", name: "Northline Stitch", type: "Manufacturer", city: "Gurugram", plan: "Pro", status: "active", joined: "8 Jun 2026" },
    { id: "u10", name: "Canopy Mills", type: "Manufacturer", city: "Bengaluru", plan: "Premium", status: "active", joined: "19 Jun 2026" },
    { id: "u11", name: "Coral Thread House", type: "Manufacturer", city: "Tiruppur", plan: "Pro", status: "active", joined: "3 Jul 2026" },
    { id: "u12", name: "Khadi Atelier Co.", type: "Manufacturer", city: "Mumbai", plan: "Premium", status: "active", joined: "27 May 2026" },
    { id: "u13", name: "QuickLot Garments", type: "Manufacturer", city: "Surat", plan: "Free", status: "blocked", joined: "1 Nov 2026" },
    { id: "u14", name: "Silverloom Exports", type: "Manufacturer", city: "Surat", plan: "Pro", status: "active", joined: "9 Oct 2026" }
  ],
  threads: [
    {
      id: "t1",
      with: "Desert Weave Atelier",
      withId: "desert-weave",
      role: "manufacturer",
      preview: "We can send a print strike-off by Friday.",
      updated: "Yesterday",
      messages: [
        { from: "brand", name: "Nila Atelier", time: "4 Nov, 11:20", text: "Hello — we have posted a brief for 5,000 cotton kurtas. Could you look at the motif board we uploaded?" },
        { from: "maker", name: "Desert Weave Atelier", time: "4 Nov, 16:05", text: "We have it. The sprig works well in Bagru madder. We would simplify the border so it registers cleanly on cambric." },
        { from: "brand", name: "Nila Atelier", time: "5 Nov, 09:40", text: "That sounds right. Please quote with sampling in two colourways, and tell us how you handle dye lots." },
        { from: "maker", name: "Desert Weave Atelier", time: "5 Nov, 14:18", text: "Quote is on the brief. We photograph every dye lot and hold it until you approve. We can send a print strike-off by Friday." }
      ]
    },
    {
      id: "t2",
      with: "Loom & Lattice",
      withId: "loom-lattice",
      role: "manufacturer",
      preview: "Organic programme is on the line from 8 Dec.",
      updated: "2 days ago",
      messages: [
        { from: "brand", name: "Coast & Cotton", time: "12 Nov, 10:02", text: "We need 2,000 organic tees with a small back-neck embroidery. Do you have 180 GSM in ecru, ink and sage?" },
        { from: "maker", name: "Loom & Lattice", time: "12 Nov, 13:44", text: "Yes — those three are running this month. Embroidery and GOTS papers are included in the quote we just sent. Organic programme is on the line from 8 Dec." }
      ]
    },
    {
      id: "t3",
      with: "Canopy Mills",
      withId: "canopy-mills",
      role: "manufacturer",
      preview: "Cutting started this morning.",
      updated: "Today",
      messages: [
        { from: "brand", name: "Aarohi Label", time: "12 Nov, 11:10", text: "Deposit is in. Please share the embroidery sign-off and a cutting date." },
        { from: "maker", name: "Canopy Mills", time: "12 Nov, 17:22", text: "Sign-off is attached on the order. Cutting started this morning. We will send a mid-line photograph next week." }
      ]
    }
  ],
  personas: {
    brand: { role: "brand", name: "Nila Atelier", city: "Mumbai", plan: "Pro" },
    manufacturer: { role: "manufacturer", name: "Loom & Lattice", city: "Tiruppur", plan: "Premium", makerId: "loom-lattice" },
    admin: { role: "admin", name: "MakerToBrand Admin", city: "Mumbai", plan: "—" }
  }
};
