/* MakerToBrand — sample marketplace data (demo only) */
window.MTB_DATA = {
  commissionDefault: 0.03,
  brandPlan: {
    id: "brand",
    name: "Brand",
    priceMonth: 2500,
    priceYear: 25000,
    blurb: "Full access to manufacturer search, quotes and secure payments. No commission, ever.",
    fee: "No commission — you pay only the product price",
    features: [
      "Search and message manufacturers across India",
      "Buy ready-made stock in bulk",
      "Post custom production briefs and compare quotes",
      "Payments held until delivery",
      "GST invoices, tracking and one-click re-orders",
      "QC service included for brand subscribers",
      "No commission or platform fee at checkout"
    ]
  },
  plans: [
    {
      id: "pro",
      name: "Pro",
      priceMonth: 1500,
      priceYear: 15000,
      blurb: "Get found faster, and look verified.",
      popular: true,
      fee: "3% commission, taken from your payout",
      features: [
        "Manufacturer profile page (your mini website)",
        "Verified badge on your profile",
        "Up to 40 ready-made listings",
        "Priority in category search",
        "In-app messaging and escrow payments",
        "Instant alerts on new production briefs",
        "3% commission on each sale, deducted from your payout"
      ]
    },
    {
      id: "business",
      name: "Business",
      priceMonth: 2500,
      priceYear: 25000,
      blurb: "A higher place in search, and more room to list.",
      fee: "3% commission, taken from your payout",
      features: [
        "Everything in Pro",
        "Featured badge on your profile",
        "Up to 80 ready-made listings",
        "Higher placement in category search",
        "Quote templates for custom work",
        "Early access to new production briefs",
        "3% commission on each sale, deducted from your payout"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      priceMonth: 5000,
      priceYear: 50000,
      blurb: "All the extras, and no commission on your sales.",
      fee: "No commission — 0% on every order",
      features: [
        "Everything in Business",
        "Unlimited listings",
        "Top search placement and homepage feature",
        "Dedicated success manager",
        "On-site extras on every order",
        "0% commission — you receive the full order value"
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
    { city: "Bengaluru", state: "Karnataka", focus: "Sustainable wovens, linen" },
    { city: "Kolkata", state: "West Bengal", focus: "Ethnic wear, tailoring, kids" }
  ],
  manufacturers: [
    {
      id: "loom-lattice",
      name: "Loom & Lattice",
      city: "Tiruppur",
      state: "Tamil Nadu",
      tagline: "Knits, tees and activewear, made at scale.",
      categories: ["Knitwear", "Knits", "T-shirts", "Activewear"],
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
      categories: ["Ethnic wear", "Block print", "Kurtas", "Dresses", "Craft"],
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
      categories: ["Knitwear", "Woollens", "Hoodies", "Sweaters"],
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
      categories: ["Festive", "Synthetics", "Occasion wear", "Ethnic wear"],
      moq: 80,
      capacity: "25,000 pcs / month",
      leadTime: "20–30 days",
      established: 2012,
      team: "140–160",
      certifications: ["ISO 9001"],
      rating: 4.6,
      reviewCount: 19,
      verified: false,
      plan: "Pro",
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
      categories: ["Shirts", "Shirting", "Suiting", "Uniforms"],
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
      categories: ["Shirts", "Wovens", "Trousers", "Linen"],
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
      categories: ["Kidswear", "Organic", "Knits", "Knitwear"],
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
    },
    {
      id: "blue-selvedge",
      name: "Blue Selvedge Co.",
      city: "Bengaluru",
      state: "Karnataka",
      tagline: "Denim jeans, jackets and everyday indigo.",
      categories: ["Denim", "Jeans", "Jackets"],
      moq: 200,
      capacity: "30,000 pcs / month",
      leadTime: "28–35 days",
      established: 2013,
      team: "90–110",
      certifications: ["GOTS", "OEKO-TEX 100"],
      rating: 4.7,
      reviewCount: 18,
      verified: true,
      plan: "Business",
      export: true,
      cover: "images/casual-stack.jpg",
      portrait: "images/leather-jacket.jpg",
      gallery: ["images/casual-stack.jpg", "images/leather-jacket.jpg", "images/textile-close.jpg", "images/factory-sew.jpg", "images/workshop-wide.jpg"],
      materials: ["Organic denim", "Selvedge", "Stretch denim", "Recycled cotton blend"],
      sizes: "26–40 waist, XS–XXL jackets",
      about: "A Bengaluru denim house built for contemporary jeans programmes — clean fits, honest fades and documentation ready for a retail floor. Sampling is in-house, so washes can be locked before bulk.",
      reviews: [
        { by: "Vanta Menswear", rating: 5, text: "Wash consistency across 1,200 pairs was unusually tight. We will be back." }
      ]
    },
    {
      id: "hooghly-weave",
      name: "Hooghly Weave House",
      city: "Kolkata",
      state: "West Bengal",
      tagline: "Tant cotton, kurtas and everyday ethnic wear.",
      categories: ["Ethnic wear", "Kurtas", "Craft", "Handloom"],
      moq: 120,
      capacity: "12,000 pcs / month",
      leadTime: "25–35 days",
      established: 2007,
      team: "60–70 plus weaver partners",
      certifications: ["Handloom Mark", "GOTS"],
      rating: 4.8,
      reviewCount: 16,
      verified: true,
      plan: "Business",
      export: true,
      cover: "images/indian-textile.jpg",
      portrait: "images/fabric-drape.jpg",
      gallery: ["images/indian-textile.jpg", "images/fabric-drape.jpg", "images/festive.jpg", "images/color-fabric.jpg", "images/workshop-wide.jpg"],
      materials: ["Tant cotton", "Mulmul", "Handloom cotton", "Azo-free dyes"],
      sizes: "XS–XXL, custom grading on request",
      about: "A Kolkata atelier that works with Hooghly and Phulia weavers, then stitches in a small certified unit. Best for brands that want everyday ethnic silhouettes with a clear fibre story, not costume.",
      reviews: [
        { by: "Aarohi Label", rating: 5, text: "The tant cotton felt light in the hand and the colour held after wash." }
      ]
    },
    {
      id: "east-bank",
      name: "East Bank Apparels",
      city: "Kolkata",
      state: "West Bengal",
      tagline: "Kidswear and school programmes, stitched with care.",
      categories: ["Kidswear", "Uniforms", "Knits"],
      moq: 400,
      capacity: "45,000 pcs / month",
      leadTime: "22–30 days",
      established: 2005,
      team: "140–160",
      certifications: ["OEKO-TEX 100", "ISO 9001"],
      rating: 4.6,
      reviewCount: 14,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/kids-clothes.jpg",
      portrait: "images/folded-tees.jpg",
      gallery: ["images/kids-clothes.jpg", "images/folded-tees.jpg", "images/hanging-tees.jpg", "images/workshop-wide.jpg"],
      materials: ["Cotton jersey", "Poly-cotton", "Nickel-free trims"],
      sizes: "2–16 years, plus school size sets",
      about: "A Howrah-side unit that specialises in children's and school programmes. Durable seams, safe trims and reliable monthly drop dates are the house strengths.",
      reviews: [
        { by: "Nila Atelier", rating: 4, text: "Solid kids basics. Share your size curve early and they hold it." }
      ]
    },
    {
      id: "saltmarsh-knits",
      name: "Saltmarsh Knits",
      city: "Tiruppur",
      state: "Tamil Nadu",
      tagline: "High-volume knitwear and active sets.",
      categories: ["Knitwear", "Activewear", "T-shirts"],
      moq: 500,
      capacity: "2,00,000 pcs / month",
      leadTime: "16–22 days",
      established: 2002,
      team: "350+",
      certifications: ["GOTS", "OEKO-TEX 100", "BSCI"],
      rating: 4.7,
      reviewCount: 29,
      verified: true,
      plan: "Business",
      export: true,
      cover: "images/hanging-tees.jpg",
      portrait: "images/sweatshirt.jpg",
      gallery: ["images/hanging-tees.jpg", "images/sweatshirt.jpg", "images/folded-tees.jpg", "images/black-tee.jpg", "images/factory-sew.jpg"],
      materials: ["Cotton jersey", "Dry-fit", "French terry", "CVC"],
      sizes: "XS–5XL and kids 1–12",
      about: "A large Tiruppur knit factory for brands that need volume without losing a clean finish. Colour continuity across monthly programmes is a particular strength.",
      reviews: [
        { by: "Coast & Cotton", rating: 5, text: "They absorbed a mid-season colour add without slipping the date." }
      ]
    },
    {
      id: "amber-yarn",
      name: "Amber Yarn Co.",
      city: "Ludhiana",
      state: "Punjab",
      tagline: "Sweaters, mid-weight knits and winter programmes.",
      categories: ["Knitwear", "Sweaters", "Woollens"],
      moq: 250,
      capacity: "28,000 pcs / month",
      leadTime: "26–34 days",
      established: 1995,
      team: "120–140",
      certifications: ["OEKO-TEX 100", "ISO 9001"],
      rating: 4.6,
      reviewCount: 15,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/wool-knit.jpg",
      portrait: "images/yarn-threads.jpg",
      gallery: ["images/wool-knit.jpg", "images/knit-sweater.jpg", "images/yarn-threads.jpg", "images/sewing-studio.jpg"],
      materials: ["Wool-acrylic", "Cotton-wool", "Merino blend"],
      sizes: "XS–3XL",
      about: "A Ludhiana knit house that still links in-house. Built for mid-weight winter programmes that need to be reordered in the same colour the following year.",
      reviews: [
        { by: "Vanta Menswear", rating: 4, text: "Good hand on the crew sweater. Lab dips arrived on the day they promised." }
      ]
    },
    {
      id: "ghatkopar-stitch",
      name: "Ghatkopar Stitchworks",
      city: "Mumbai",
      state: "Maharashtra",
      tagline: "Shirts and corporate uniforms, made in the city.",
      categories: ["Shirts", "Shirting", "Uniforms"],
      moq: 350,
      capacity: "25,000 pcs / month",
      leadTime: "20–28 days",
      established: 2008,
      team: "80–95",
      certifications: ["ISO 9001"],
      rating: 4.5,
      reviewCount: 12,
      verified: false,
      plan: "Pro",
      export: false,
      cover: "images/shirt-rack.jpg",
      portrait: "images/folded-shirts.jpg",
      gallery: ["images/shirt-rack.jpg", "images/folded-shirts.jpg", "images/linen-shirt.jpg", "images/formal-shirt.jpg"],
      materials: ["Poplin", "Oxford", "Poly-cotton"],
      sizes: "36–46, with corporate size sets",
      about: "A Mumbai shirt unit that serves labels and offices that want a local production partner. Collar finishing and button quality are the points of pride.",
      reviews: [
        { by: "Coast & Cotton", rating: 4, text: "Reliable on a mid-size shirt run. MOQ is real, so plan your quantities." }
      ]
    },
    {
      id: "noida-line",
      name: "Noida Line & Form",
      city: "Noida",
      state: "Delhi NCR",
      tagline: "Denim trousers, casual bottoms and workwear.",
      categories: ["Denim", "Trousers", "Jeans"],
      moq: 300,
      capacity: "40,000 pcs / month",
      leadTime: "24–32 days",
      established: 2010,
      team: "180–200",
      certifications: ["ISO 9001", "BSCI"],
      rating: 4.6,
      reviewCount: 17,
      verified: true,
      plan: "Business",
      export: true,
      cover: "images/factory-sew.jpg",
      portrait: "images/casual-stack.jpg",
      gallery: ["images/factory-sew.jpg", "images/casual-stack.jpg", "images/textile-close.jpg", "images/shirts-hanging.jpg"],
      materials: ["Denim", "Cotton twill", "Stretch cotton"],
      sizes: "28–40, plus women's 26–36",
      about: "A Noida bottoms factory for brands that need denim and chinos at a national scale. Pattern accuracy and consistent rise measurements keep reorders simple.",
      reviews: [
        { by: "Vanta Menswear", rating: 5, text: "Rises and hems were consistent across the size run. That is rare at this quantity." }
      ]
    },
    {
      id: "whitefield-wovens",
      name: "Whitefield Wovens",
      city: "Bengaluru",
      state: "Karnataka",
      tagline: "Linen and poplin shirts with fibre paperwork.",
      categories: ["Shirts", "Linen", "Wovens", "Organic"],
      moq: 180,
      capacity: "16,000 pcs / month",
      leadTime: "22–30 days",
      established: 2017,
      team: "55–65",
      certifications: ["GOTS", "BCI", "OEKO-TEX 100"],
      rating: 4.8,
      reviewCount: 13,
      verified: true,
      plan: "Premium",
      export: true,
      cover: "images/shirts-hanging.jpg",
      portrait: "images/linen-shirt.jpg",
      gallery: ["images/shirts-hanging.jpg", "images/linen-shirt.jpg", "images/folded-shirts.jpg", "images/threads-macro.jpg"],
      materials: ["Linen", "Organic poplin", "BCI cotton"],
      sizes: "XS–XXL",
      about: "A smaller Bengaluru woven house for labels that want linen and shirt programmes with certificates in the carton. Suited to considered basics rather than pure volume.",
      reviews: [
        { by: "Aarohi Label", rating: 5, text: "The linen shirt washed the way the sample promised, and the papers were with the shipment." }
      ]
    },
    {
      id: "silk-corridor",
      name: "Silk Corridor",
      city: "Surat",
      state: "Gujarat",
      tagline: "Occasion wear, lehengas and festive sets at a lower minimum.",
      categories: ["Ethnic wear", "Festive", "Occasion wear"],
      moq: 80,
      capacity: "14,000 pcs / month",
      leadTime: "22–30 days",
      established: 2015,
      team: "70–85",
      certifications: ["ISO 9001"],
      rating: 4.5,
      reviewCount: 11,
      verified: false,
      plan: "Pro",
      export: true,
      cover: "images/fabric-bolts.jpg",
      portrait: "images/festive.jpg",
      gallery: ["images/fabric-bolts.jpg", "images/festive.jpg", "images/indian-textile.jpg", "images/womenswear.jpg"],
      materials: ["Georgette", "Chinon", "Silk blend", "Thread and sequin work"],
      sizes: "XS–5XL, plus custom lehenga measurements",
      about: "A Surat occasion-wear unit with lower minimums than most mills, suited to capsule festive drops as well as a full season. Embroidery is done on the same campus.",
      reviews: [
        { by: "Nila Atelier", rating: 4, text: "Beautiful work on a small festive set. Brief trims in writing to lock the shade." }
      ]
    },
    {
      id: "sanganer-print",
      name: "Sanganer Print House",
      city: "Jaipur",
      state: "Rajasthan",
      tagline: "Sanganer and bagru prints for dresses and kurtas.",
      categories: ["Ethnic wear", "Block print", "Dresses", "Kurtas"],
      moq: 150,
      capacity: "15,000 pcs / month",
      leadTime: "30–40 days",
      established: 2001,
      team: "75–85 plus artisan partners",
      certifications: ["Handloom Mark", "GOTS"],
      rating: 4.8,
      reviewCount: 20,
      verified: true,
      plan: "Pro",
      export: true,
      cover: "images/color-fabric.jpg",
      portrait: "images/dress-floral.jpg",
      gallery: ["images/color-fabric.jpg", "images/dress-floral.jpg", "images/clothes-hanging.jpg", "images/fabric-drape.jpg", "images/indian-textile.jpg"],
      materials: ["Cotton cambric", "Mulmul", "Hand-block pigments"],
      sizes: "XS–XXL",
      about: "A Jaipur print house focused on Sanganer and Bagru techniques, with stitching on site. Designers can send a motif or work from a large archive of house blocks.",
      reviews: [
        { by: "Aarohi Label", rating: 5, text: "Print registration was careful, and they flagged a dye-lot shift before it became a problem." }
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
      platformFee: 0,
      feeWaived: true,
      brandPays: 165000,
      makerPayout: 165000,
      commission: 0,
      status: "held",
      statusLabel: "Payment held · in production",
      qc: true,
      qcStage: "inline",
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
      platformFee: 7650,
      feeWaived: false,
      brandPays: 255000,
      makerPayout: 247350,
      commission: 7650,
      status: "released",
      statusLabel: "Delivered · payment released",
      qc: true,
      qcStage: "complete",
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
      platformFee: 0,
      feeWaived: true,
      brandPays: 690000,
      makerPayout: 690000,
      commission: 0,
      status: "deposit",
      statusLabel: "Deposit held · balance on delivery",
      qc: true,
      qcStage: "fabric",
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
      platformFee: 7440,
      feeWaived: false,
      brandPays: 248000,
      makerPayout: 240560,
      commission: 7440,
      status: "inspection",
      statusLabel: "Packed · QC by MakerToBrand in progress",
      qc: true,
      qcStage: "final",
      placed: "2 Nov 2026",
      eta: "26 Nov 2026"
    }
  ],
  users: [
    { id: "u1", name: "Nila Atelier", type: "Brand", city: "Mumbai", plan: "Brand", status: "active", joined: "18 Aug 2026" },
    { id: "u2", name: "Coast & Cotton", type: "Brand", city: "Bengaluru", plan: "Brand", status: "active", joined: "2 Jun 2026" },
    { id: "u3", name: "Vanta Menswear", type: "Brand", city: "Delhi", plan: "Brand", status: "active", joined: "11 Jul 2026" },
    { id: "u4", name: "Aarohi Label", type: "Brand", city: "Jaipur", plan: "Brand", status: "active", joined: "9 Sep 2026" },
    { id: "u5", name: "Loom & Lattice", type: "Manufacturer", city: "Tiruppur", plan: "Premium", status: "active", joined: "4 May 2026" },
    { id: "u6", name: "Desert Weave Atelier", type: "Manufacturer", city: "Jaipur", plan: "Pro", status: "active", joined: "21 May 2026" },
    { id: "u7", name: "Sutra Knitworks", type: "Manufacturer", city: "Ludhiana", plan: "Pro", status: "active", joined: "30 May 2026" },
    { id: "u8", name: "Riverbend Apparel", type: "Manufacturer", city: "Surat", plan: "Pro", status: "active", joined: "16 Aug 2026" },
    { id: "u9", name: "Northline Stitch", type: "Manufacturer", city: "Gurugram", plan: "Pro", status: "active", joined: "8 Jun 2026" },
    { id: "u10", name: "Canopy Mills", type: "Manufacturer", city: "Bengaluru", plan: "Premium", status: "active", joined: "19 Jun 2026" },
    { id: "u11", name: "Coral Thread House", type: "Manufacturer", city: "Tiruppur", plan: "Pro", status: "active", joined: "3 Jul 2026" },
    { id: "u12", name: "Khadi Atelier Co.", type: "Manufacturer", city: "Mumbai", plan: "Premium", status: "active", joined: "27 May 2026" },
    { id: "u13", name: "QuickLot Garments", type: "Manufacturer", city: "Surat", plan: "Pro", status: "blocked", joined: "1 Nov 2026" },
    { id: "u14", name: "Silverloom Exports", type: "Manufacturer", city: "Surat", plan: "Pro", status: "active", joined: "9 Oct 2026" },
    { id: "u15", name: "Blue Selvedge Co.", type: "Manufacturer", city: "Bengaluru", plan: "Business", status: "active", joined: "14 Jul 2026" },
    { id: "u16", name: "Hooghly Weave House", type: "Manufacturer", city: "Kolkata", plan: "Business", status: "active", joined: "2 Aug 2026" },
    { id: "u17", name: "East Bank Apparels", type: "Manufacturer", city: "Kolkata", plan: "Pro", status: "active", joined: "19 Aug 2026" },
    { id: "u18", name: "Noida Line & Form", type: "Manufacturer", city: "Noida", plan: "Business", status: "active", joined: "7 Jun 2026" },
    { id: "u19", name: "Saltmarsh Knits", type: "Manufacturer", city: "Tiruppur", plan: "Business", status: "active", joined: "11 May 2026" },
    { id: "u20", name: "Amber Yarn Co.", type: "Manufacturer", city: "Ludhiana", plan: "Pro", status: "active", joined: "22 Jun 2026" },
    { id: "u21", name: "Ghatkopar Stitchworks", type: "Manufacturer", city: "Mumbai", plan: "Pro", status: "active", joined: "3 Sep 2026" },
    { id: "u22", name: "Whitefield Wovens", type: "Manufacturer", city: "Bengaluru", plan: "Premium", status: "active", joined: "28 Jul 2026" },
    { id: "u23", name: "Silk Corridor", type: "Manufacturer", city: "Surat", plan: "Pro", status: "active", joined: "15 Aug 2026" },
    { id: "u24", name: "Sanganer Print House", type: "Manufacturer", city: "Jaipur", plan: "Pro", status: "active", joined: "6 Jul 2026" }
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

  // =============================================================================
  // FOUNDERS / OWNERS + QC SERVICE.
  // Keep owner names, roles, short bios and photograph paths in `founders` below
  // so about.html and the homepage teaser stay in sync. QC copy for the service
  // page, homepage and sample reports also lives in this block.
  // =============================================================================
  founders: [
    {
      id: "nizam-uddin",
      name: "Nizam Uddin",
      role: "Co-founder, Manufacturing",
      photo: "images/nizam-uddin.webp",
      bio: "Nizam Uddin is a co-founder of MakerToBrand, with 20–25 years of experience in garment manufacturing. He brings that making-side view to the platform, so factories can present their work clearly and brands can source with a better sense of how a garment is actually made."
    },
    {
      id: "dipankar-bose",
      name: "Dipankar Bose",
      role: "Co-founder, Brand Building",
      photo: "images/dipankar-bose.webp",
      bio: "Dipankar Bose is a co-founder of MakerToBrand, with 20–25 years of experience in brand building. He brings that brand-side view to the platform, so labels can find the right manufacturers and follow an order through with more confidence — as a considered partnership, not a leap of faith."
    }
  ],
  aboutStory: {
    eyebrow: "The owners",
    headline: "A marketplace run by people who have sat on both sides of the table.",
    story: "MakerToBrand is owned and run by two co-founders: Nizam Uddin, with 20–25 years in garment manufacturing, and Dipankar Bose, with 20–25 years in brand building. The idea is simple: brands should be able to find a factory, place an order, and know that someone who understands both sides is watching the work on their behalf."
  },
  trustPoints: [
    { title: "Two owners, one standard.", text: "The platform is not an anonymous listing board. It is run by two owners who stay close to how a garment is briefed, made and checked." },
    { title: "A QC team that works for the brand.", text: "A QC Master and QC Merchandisers review fabric, patterns, measurements and finishing on the factory floor, and file a photo report on the order." },
    { title: "Money held until delivery.", text: "Payments are held on MakerToBrand and released when the goods arrive. That protection exists only for orders paid on the site." },
    { title: "Both sides of the table.", text: "One co-founder comes from garment manufacturing, the other from brand building. Together they set the standard for how a garment is briefed, made and checked." }
  ],
  qcService: {
    includedNote: "QC service included for brand subscribers",
    headline: "Your QC team on the factory floor.",
    standard: {
      eyebrow: "Service standard",
      title: "Our QC service standard",
      intro: "The platform's QC team — a QC Master and QC Merchandisers — takes care of these checks on behalf of the brand.",
      points: [
        { id: "quality", title: "Production quality", line: "Workmanship and finishing are inspected on the factory floor, for the brand." },
        { id: "pattern", title: "Pattern sheet checks", line: "The pattern sheet is reviewed and signed off before bulk cutting." },
        { id: "measure", title: "Correct measurements vs spec", line: "A size set is measured against the brand's specification sheet." },
        { id: "fabric", title: "The right fabric used", line: "Fabric is approved so the correct cloth, weight and shade go into production." }
      ]
    },
    lead: "MakerToBrand provides its own quality team — a QC Master and QC Merchandisers — who work on behalf of the brand. They check production quality, the pattern sheet, the measurements and that the right fabric is used, then leave a photo report on the order.",
    team: [
      { role: "QC Master", text: "Leads the programme. Signs off the approved fabric, the size set and the final inspection before a shipment is allowed to leave." },
      { role: "QC Merchandiser", text: "On the factory floor for inline checks: measurements against the spec sheet, stitching, finishing, and photographs that both sides can see on the order." }
    ],
    steps: [
      { num: "01", title: "Fabric approval", text: "Composition, GSM, hand and shade are checked against the approved swatch or brief before bulk cutting begins." },
      { num: "02", title: "Pattern and measurement check", text: "The pattern sheet and a size set are measured against the brand's spec. Tolerances are agreed in writing." },
      { num: "03", title: "Inline production inspection", text: "A merchandiser walks the line during production — seams, measurements, trims and workmanship — and flags issues early." },
      { num: "04", title: "Final inspection before dispatch", text: "A last AQL inspection is done on the packed goods before they leave the factory." },
      { num: "05", title: "QC report with photos", text: "A written report, with measurements and photographs, is attached to the order so the brand and the factory see the same record." }
    ],
    sampleReports: {
      fabric: {
        title: "Fabric approval — in progress",
        summary: "The QC Master has scheduled a fabric check against the approved swatch before cutting.",
        items: [
          { label: "Fabric GSM", result: "Pending", detail: "To be checked against the approved swatch and brief." },
          { label: "Measurements vs spec sheet", result: "Pending", detail: "Size set not yet on the table." },
          { label: "Stitching", result: "Not started", detail: "Inline inspection follows after cutting." },
          { label: "AQL result", result: "Not started", detail: "Final inspection is done before dispatch." },
          { label: "Photos", result: "Pending", detail: "Swatch and line photographs will appear here." }
        ]
      },
      inline: {
        title: "Inline production inspection — in progress",
        summary: "A QC Merchandiser is on the line. Fabric has been approved; measurements and stitching are being checked.",
        items: [
          { label: "Fabric GSM", result: "Pass", detail: "180 GSM organic combed cotton, matches the approved swatch." },
          { label: "Measurements vs spec sheet", result: "In check", detail: "Chest and length within tolerance on the sampled size set; remaining sizes in progress." },
          { label: "Stitching", result: "In check", detail: "Shoulder and side seams reviewed on the first 50 pieces." },
          { label: "AQL result", result: "Pending", detail: "Final inspection is scheduled before dispatch." },
          { label: "Photos", result: "Attached", detail: "Line photographs are on this report." }
        ]
      },
      final: {
        title: "Final inspection — in review",
        summary: "Goods are packed. The QC Master is completing the final inspection before dispatch, on behalf of the brand.",
        items: [
          { label: "Fabric GSM", result: "Pass", detail: "180 GSM, shade and hand match the approved lot." },
          { label: "Measurements vs spec sheet", result: "Pass", detail: "Size set within the agreed tolerance on chest, length, sleeve and shoulder." },
          { label: "Stitching", result: "Pass", detail: "Seams, bartacks and neck finish meet the brief. Two minor loose threads trimmed on the line." },
          { label: "AQL result", result: "AQL 2.5 · accepted", detail: "Sampled cartons passed. Ready for dispatch pending the brand's view of this report." },
          { label: "Photos", result: "Attached", detail: "Measurement, stitching and packed-carton photographs are below." }
        ]
      },
      complete: {
        title: "QC report — complete",
        summary: "Final inspection was signed off by the QC Master before dispatch. The shipment left with this report on the order.",
        items: [
          { label: "Fabric GSM", result: "Pass", detail: "Matches the approved swatch and the brief." },
          { label: "Measurements vs spec sheet", result: "Pass", detail: "Graded measurements within tolerance across the size set." },
          { label: "Stitching", result: "Pass", detail: "Workmanship accepted. No critical defects in the sample." },
          { label: "AQL result", result: "AQL 2.5 · accepted", detail: "Signed off by the QC Master, MakerToBrand." },
          { label: "Photos", result: "Attached", detail: "The photo record from inspection is kept with this order." }
        ]
      }
    },
    reportPhotos: ["images/textile-close.jpg", "images/sewing-hands.jpg", "images/factory-sew.jpg", "images/workshop-wide.jpg"]
  },
  personas: {
    brand: { role: "brand", name: "Nila Atelier", city: "Mumbai", plan: "Brand" },
    manufacturer: { role: "manufacturer", name: "Loom & Lattice", city: "Tiruppur", plan: "Premium", makerId: "loom-lattice" },
    admin: { role: "admin", name: "MakerToBrand Admin", city: "Mumbai", plan: "—" }
  }
};
