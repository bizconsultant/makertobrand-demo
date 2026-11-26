/* ============================================================
   MakerToBrand — ASK-ME QUESTIONS AND ANSWERS
   ============================================================
   This is the file to edit when a pre-signup question or answer
   needs to change. You can edit it on GitHub in your browser,
   the same way as js/settings.js:

   1. Open this file and click the pencil icon (Edit this file).
      Direct link:
      https://github.com/bizconsultant/makertobrand-demo/edit/main/js/assistant-faq.js
   2. Change the question, the keywords, or the answer text
      inside the quotes. Leave the commas in place.
   3. Scroll down, click “Commit changes”, and wait about a minute.

   IMPORTANT — figures such as the membership, the commission,
   the minimum order and the design prices must use the tokens
   below. Do not type the rupees or the percent yourself, or
   they will go stale when settings.js changes.

     {membershipMonth}              monthly membership, with ₹
     {membershipYear}               yearly membership, with ₹
     {commissionPercent}            seller commission, e.g. 3%
     {defaultMoq}                   default minimum order, in pieces
     {designPriceDesignOnly}        design-only price, with ₹
     {designPriceTechSheetOnly}     tech-sheet-only price, with ₹
     {designPriceDesignAndTechSheet} design + tech sheet price, with ₹
     {designSampleNote}             the sample-price label

   Each side has its own list:
     brand          — shown after someone taps “I’m a Brand”
     manufacturer   — shown after “I’m a Manufacturer or Wholesaler”

   Brands must never be told about the seller commission.
   The shared monthly membership may appear for both sides.

   suggested: true  means the question appears as a tappable chip.
   keywords         help the helper match a typed question.
   link / linkLabel is the extra button under the answer.
   “Join now” is added automatically and is not listed here.
   ============================================================ */

window.MTB_ASSISTANT_FAQ = {
  greetings: {
    brand: "Hello. Ask anything you’d like to know before you join as a brand.",
    manufacturer: "Hello. Ask anything you’d like to know before you list your factory or wholesale stock."
  },

  brand: [
    {
      id: "what-is",
      question: "What is MakerToBrand?",
      suggested: true,
      keywords: ["what is", "makertobrand", "marketplace", "about this", "what do you do", "explain", "platform"],
      answer: "MakerToBrand is an India-focused marketplace where apparel brands find garment manufacturers and ready-made wholesalers. You can search factories by city and craft, buy stock in bulk, or post a custom brief and compare quotes. Payments are held until the goods arrive, so both sides can start with more confidence.",
      link: "how-it-works.html",
      linkLabel: "See how it works"
    },
    {
      id: "find-makers",
      question: "How do I find a manufacturer?",
      suggested: true,
      keywords: ["find", "search", "factory", "manufacturer", "directory", "hub", "city", "source", "supplier"],
      answer: "Use Find Manufacturers to search by product, city and minimum order. Open a factory’s page to see their work, capacity, certifications and reviews from orders paid on the site. You can message them on the platform, or invite a quote on a custom brief.",
      link: "manufacturers.html",
      linkLabel: "Find manufacturers"
    },
    {
      id: "brand-fees",
      question: "What does it cost for a brand?",
      suggested: true,
      keywords: ["cost", "price", "fee", "membership", "subscription", "charges", "how much", "payment plan", "expensive"],
      answer: "Brands pay a membership of {membershipMonth} a month, or {membershipYear} a year. You never pay a commission. At checkout you pay only the product or quoted price, and that amount is held until delivery.",
      link: "pricing.html",
      linkLabel: "View memberships"
    },
    {
      id: "moq",
      question: "What is the minimum order?",
      suggested: true,
      keywords: ["moq", "minimum", "min order", "smallest", "quantity", "how many pieces", "qty"],
      answer: "The marketplace minimum is {defaultMoq} pieces. Each factory and each ready-made product may set a higher minimum, which you will see on their page. You cannot place an order below the figure shown.",
      link: "stock.html",
      linkLabel: "Browse ready-made stock"
    },
    {
      id: "custom",
      question: "How does custom production work?",
      suggested: true,
      keywords: ["custom", "brief", "quote", "rfq", "deposit", "balance", "production", "made to order", "tech pack"],
      answer: "You post a brief with your design, quantity, fabric and date. Factories send quotes with a unit price and a lead time. When you accept one, you pay a deposit through the site to start production, and the balance is due on delivery. Both amounts are held until the goods arrive.",
      link: "custom.html",
      linkLabel: "Post a brief"
    },
    {
      id: "stock",
      question: "Can I buy ready-made stock?",
      suggested: false,
      keywords: ["ready-made", "readymade", "stock", "wholesale", "catalogue", "bulk buy", "in stock"],
      answer: "Yes. The ready-made catalogue has wholesale garments you can order from a listed minimum quantity. Price breaks apply as the quantity rises. You pay at checkout, the amount is held, and the factory is paid when you confirm delivery.",
      link: "stock.html",
      linkLabel: "Open the catalogue"
    },
    {
      id: "qc",
      question: "How does quality control work?",
      suggested: true,
      keywords: ["qc", "quality", "inspection", "measurement", "fabric", "pattern", "merchandiser", "master", "aql", "check"],
      answer: "Every brand membership includes MakerToBrand’s own QC team, who work on your behalf, not the factory’s. A QC Master and QC Merchandisers check production quality, the pattern sheet, measurements against the spec, and the fabric. They leave a photo report on the order.",
      link: "qc.html",
      linkLabel: "Read about QC"
    },
    {
      id: "payments",
      question: "How are payments kept safe?",
      suggested: true,
      keywords: ["payment", "safe", "escrow", "held", "razorpay", "money", "secure", "trust", "deposit"],
      answer: "You pay on the site. The intended payments partner is Razorpay. The amount is held until the goods arrive, and the factory is paid only when you confirm receipt. That protection exists only for orders paid on MakerToBrand. This demo never takes a card number.",
      link: "how-it-works.html#steps",
      linkLabel: "See the steps"
    },
    {
      id: "disputes",
      question: "What if there is a problem with an order?",
      suggested: false,
      keywords: ["dispute", "return", "refund", "problem", "wrong", "damaged", "late", "complaint", "issue", "reject"],
      answer: "Because payment is held until delivery, you can raise a problem while the money is still protected. The QC report on the order — fabric, measurements and finishing — gives both sides a clear record. If something is wrong, our team can help you and the factory resolve it before the payout is released.",
      link: "how-it-works.html#safety",
      linkLabel: "How trade stays safe"
    },
    {
      id: "design",
      question: "Can you design a garment or write a tech sheet?",
      suggested: false,
      keywords: ["design", "tech sheet", "tech-sheet", "tech pack", "pattern", "style", "designer", "support"],
      answer: "Yes. Garment Design & Tech-Sheet Support is an optional paid add-on for brands. Design only is {designPriceDesignOnly} per style, a tech sheet only is {designPriceTechSheetOnly}, and both together are {designPriceDesignAndTechSheet}. A tech sheet covers measurements and spec, pattern details, fabric, trims and construction notes. {designSampleNote} You can add it when you post a custom brief.",
      link: "design.html",
      linkLabel: "View design support"
    },
    {
      id: "founders",
      question: "Who runs MakerToBrand?",
      suggested: false,
      keywords: ["who runs", "owner", "founder", "nizam", "dipankar", "about the owners", "about the founders", "who are you"],
      answer: "MakerToBrand is run by two co-founders: Nizam Uddin, with 20–25 years in garment manufacturing, and Dipankar Bose, with 20–25 years in brand building. They stay close to how a garment is briefed, made and checked.",
      link: "about.html",
      linkLabel: "Meet the owners"
    },
    {
      id: "verified",
      question: "How do I know a factory is genuine?",
      suggested: false,
      keywords: ["verified", "genuine", "trust", "review", "badge", "real", "fake", "reliable"],
      answer: "Look for the verified badge on a factory’s page. Reviews can be left only after an order paid on MakerToBrand, and they are labelled “Verified order on MakerToBrand.” That way you are reading about work that actually happened on the site.",
      link: "manufacturers.html",
      linkLabel: "Browse verified factories"
    },
    {
      id: "privacy",
      question: "Will the factory see my phone number?",
      suggested: false,
      keywords: ["phone", "privacy", "contact", "whatsapp", "email", "number", "details", "hidden", "lock"],
      answer: "Not at first. Phone, email and WhatsApp on a profile stay locked until the first paid order between you and that factory. Messages also mask numbers, email addresses and links shared too early. After that first order, both sides can reach each other directly.",
      link: "how-it-works.html#safety",
      linkLabel: "Read about privacy"
    },
    {
      id: "signup",
      question: "How do I sign up?",
      suggested: true,
      keywords: ["sign up", "signup", "join", "register", "create account", "enrol", "enroll", "get started"],
      answer: "Sign-up is open — there is no approval wait. Choose Brand owner, enter your studio name and city, agree to keep deals on the platform, and start the {membershipMonth} membership. In this demo the payment is only a simulation and nothing is charged.",
      link: "signup.html?role=brand",
      linkLabel: "Create a brand account"
    },
    {
      id: "hubs",
      question: "Which cities and crafts can I source from?",
      suggested: false,
      keywords: ["city", "cities", "hub", "tiruppur", "surat", "jaipur", "ludhiana", "india", "craft", "knitwear", "denim"],
      answer: "This demo includes sample factories across eight hubs: Tiruppur, Ludhiana, Surat, Jaipur, Mumbai, Delhi NCR, Bengaluru and Kolkata. You can filter by knitwear, denim, ethnic wear, shirts, kidswear, festive and more.",
      link: "manufacturers.html",
      linkLabel: "Search by city or craft"
    },
    {
      id: "message",
      question: "Can I talk to a factory before I order?",
      suggested: false,
      keywords: ["message", "chat", "talk", "ask factory", "conversation", "contact before"],
      answer: "Yes. You can message a factory on the platform before you order. Phone numbers and WhatsApp stay hidden until your first paid order with them, so the conversation starts safely on MakerToBrand.",
      link: "messages.html",
      linkLabel: "See how messages work"
    },
    {
      id: "invoice",
      question: "Do I get a GST invoice and tracking?",
      suggested: false,
      keywords: ["gst", "invoice", "tracking", "shipping", "bill", "tax", "dispatch"],
      answer: "Yes, for orders paid on the site. You get a GST invoice, order tracking, QC by MakerToBrand, and a one-click re-order. A private deal off the site would not receive these extras.",
      link: "how-it-works.html#safety",
      linkLabel: "See what stays on the site"
    },
    {
      id: "lead-time",
      question: "How long does an order take?",
      suggested: false,
      keywords: ["how long", "lead time", "duration", "days", "when will", "timeline", "delivery time"],
      answer: "Lead time depends on the factory and the work. Each manufacturer lists a typical range on their page, and a custom quote includes a lead time you can compare before you accept. Ready-made stock is usually quicker than a new programme.",
      link: "manufacturers.html",
      linkLabel: "Compare factories"
    },
    {
      id: "approval",
      question: "Is there an approval wait to join?",
      suggested: false,
      keywords: ["approval", "waiting", "vetting", "open", "anyone", "instant", "how soon"],
      answer: "No. Sign-up is open so a brand can start straight away. Payments are held until delivery, and an admin can block an account if something is wrong. You agree at sign-up to keep deals on MakerToBrand.",
      link: "signup.html?role=brand",
      linkLabel: "Join as a brand"
    },
    {
      id: "several",
      question: "Can I work with more than one factory?",
      suggested: false,
      keywords: ["more than one", "several", "multiple", "many factories", "two manufacturers"],
      answer: "Yes. You can browse and order from as many factories as you need — one for knits, another for prints, for example. Each relationship unlocks contacts after the first paid order with that factory.",
      link: "manufacturers.html",
      linkLabel: "Find more than one maker"
    }
  ],

  manufacturer: [
    {
      id: "what-is",
      question: "What is MakerToBrand for manufacturers?",
      suggested: true,
      keywords: ["what is", "makertobrand", "marketplace", "about this", "platform", "explain"],
      answer: "MakerToBrand is where apparel brands come to find factories and wholesalers in India. You get a public profile — a mini website you can send to any buyer — plus ready-made listings, quotes on custom briefs, and payments held until delivery. Brands, manufacturers and wholesalers all pay the same {membershipMonth} monthly membership.",
      link: "how-it-works.html",
      linkLabel: "See how it works"
    },
    {
      id: "seller-fees",
      question: "What does it cost to sell here?",
      suggested: true,
      keywords: ["cost", "price", "fee", "membership", "commission", "charges", "how much", "percent", "percentage"],
      answer: "Manufacturers and ready-made wholesalers pay {membershipMonth} a month, plus a {commissionPercent} commission of the total bill. That {commissionPercent} is taken from your payout when a payment is released. Brands never see this fee — they pay only the product price.",
      link: "pricing.html",
      linkLabel: "View memberships"
    },
    {
      id: "moq",
      question: "What is the minimum order?",
      suggested: false,
      keywords: ["moq", "minimum", "min order", "quantity", "smallest", "how many"],
      answer: "The marketplace floor is {defaultMoq} pieces. You can set a higher minimum on your profile and on each ready-made listing, so brands see the quantity you are willing to run.",
      link: "signup.html?role=manufacturer",
      linkLabel: "Create your profile"
    },
    {
      id: "get-orders",
      question: "How do I get orders?",
      suggested: true,
      keywords: ["get orders", "receive order", "work", "enquiries", "leads", "pipeline", "customers", "brands find me"],
      answer: "Brands find you in search, open your profile, and either buy your ready-made stock or invite a quote on a custom brief. New briefs also appear in your dashboard so you can send a price. A verified badge and clear photographs help you get found first.",
      link: "manufacturers.html",
      linkLabel: "See a sample profile"
    },
    {
      id: "payouts",
      question: "When do I get paid?",
      suggested: true,
      keywords: ["payout", "paid", "payment", "when do i get", "release", "money", "settlement", "earnings"],
      answer: "The brand pays on the site and the amount is held until delivery. You can see that the funds are secured, but they are released to you only when the brand confirms receipt. A {commissionPercent} commission of the total bill is taken from that payout. The intended payments partner is Razorpay.",
      link: "how-it-works.html#steps",
      linkLabel: "See the payment steps"
    },
    {
      id: "listings",
      question: "How do I list ready-made products?",
      suggested: true,
      keywords: ["list", "listing", "product", "stock", "catalogue", "upload", "wholesale", "ready-made"],
      answer: "Once you have a seller account, you add ready-made styles to your shop with photographs, a fabric note, a minimum quantity and price breaks. Brands then order through the cart, and you see those orders on your dashboard.",
      link: "stock.html",
      linkLabel: "See sample listings"
    },
    {
      id: "quotes",
      question: "How do custom briefs and quotes work?",
      suggested: false,
      keywords: ["brief", "quote", "custom", "rfq", "tender", "deposit"],
      answer: "Brands post a production brief. You review it, send a unit price, a lead time and a deposit percentage, and a note. If the brand accepts, they pay the deposit on the site and you start work. The balance is collected on delivery, and both amounts are held until then.",
      link: "custom.html",
      linkLabel: "See a sample brief"
    },
    {
      id: "qc",
      question: "What is the QC process for my factory?",
      suggested: false,
      keywords: ["qc", "quality", "inspection", "merchandiser", "master", "fabric", "measurement"],
      answer: "MakerToBrand’s QC Master and QC Merchandisers work on behalf of the brand. They check production quality, the pattern sheet, measurements against the spec, and the fabric, then leave a photo report on the order. It is included for brand subscribers and helps both sides agree on the standard before dispatch.",
      link: "qc.html",
      linkLabel: "Read about QC"
    },
    {
      id: "held",
      question: "How are payments held?",
      suggested: false,
      keywords: ["held", "escrow", "razorpay", "secure", "safe payment", "guarantee"],
      answer: "On ready-made orders the brand pays the full wholesale amount at checkout. On custom work, a deposit starts production and the balance is due on delivery. In a live product, Razorpay would hold those funds until the order is delivered. You are guaranteed that payout only for orders paid on MakerToBrand.",
      link: "how-it-works.html#steps",
      linkLabel: "See how payments work"
    },
    {
      id: "disputes",
      question: "What if there is a dispute?",
      suggested: false,
      keywords: ["dispute", "problem", "return", "complaint", "issue", "reject", "quality issue"],
      answer: "If a brand raises a problem before confirming delivery, the payout stays held while it is reviewed. The QC report on the order gives a clear, shared record. Our team can help you both reach a fair outcome. Keeping the deal on the site is what makes this possible.",
      link: "how-it-works.html#safety",
      linkLabel: "Read the fair-use rule"
    },
    {
      id: "website",
      question: "Do I need my own website?",
      suggested: false,
      keywords: ["website", "site", "page", "profile", "mini website", "online presence"],
      answer: "No. Most factories on MakerToBrand do not have a website of their own. Your profile is a mini website — photographs, capacity, minimums, certifications and reviews — that you can send to any buyer.",
      link: "manufacturer.html?id=loom-lattice",
      linkLabel: "See a sample profile"
    },
    {
      id: "founders",
      question: "Who runs the platform?",
      suggested: false,
      keywords: ["who runs", "owner", "founder", "nizam", "dipankar", "about the owners", "about the founders"],
      answer: "MakerToBrand is run by two co-founders: Nizam Uddin, with 20–25 years in garment manufacturing, and Dipankar Bose, with 20–25 years in brand building. Someone who understands the factory floor is on the ownership team.",
      link: "about.html",
      linkLabel: "Meet the owners"
    },
    {
      id: "verified",
      question: "How do verified badges and reviews work?",
      suggested: false,
      keywords: ["verified", "badge", "review", "rating", "trust"],
      answer: "A verified badge sits on your profile. Brands can leave a review only after an order paid on the site, and it is labelled “Verified order on MakerToBrand.” That is more useful than an unverified comment, and it helps the next brand choose you with confidence.",
      link: "manufacturer.html?id=loom-lattice",
      linkLabel: "See a sample review"
    },
    {
      id: "privacy",
      question: "When are my contact details shared?",
      suggested: false,
      keywords: ["phone", "privacy", "contact", "whatsapp", "email", "number", "details", "hidden"],
      answer: "Your phone, email and WhatsApp stay locked until the first paid order between you and that brand. Chat also masks numbers and links shared too early. After that first order, both sides can speak directly.",
      link: "how-it-works.html#safety",
      linkLabel: "Read about privacy"
    },
    {
      id: "signup",
      question: "How do I sign up?",
      suggested: true,
      keywords: ["sign up", "signup", "join", "register", "create account", "enrol", "enroll"],
      answer: "Sign-up is open, with no approval wait. Choose Manufacturer or wholesaler, enter your unit name and city, agree to keep deals on the platform, and start the {membershipMonth} membership. The {commissionPercent} commission of each bill is explained at that step and later on your earnings page. In this demo the payment is only a simulation.",
      link: "signup.html?role=manufacturer",
      linkLabel: "Create a seller account"
    },
    {
      id: "brands",
      question: "Which brands will I meet?",
      suggested: false,
      keywords: ["which brands", "who buys", "customers", "labels", "studio", "buyers"],
      answer: "The brands on MakerToBrand are apparel labels looking for factories and wholesale stock — emerging studios as well as established names. They come first to find manufacturers, then to place orders on the site.",
      link: "index.html",
      linkLabel: "See the marketplace"
    },
    {
      id: "commission-detail",
      question: "How is the commission taken?",
      suggested: false,
      keywords: ["commission taken", "deduct", "payout fee", "3", "percent", "percentage", "cut"],
      answer: "A {commissionPercent} commission of the total bill is deducted from your payout when the payment is released, not added on top of the brand’s price. Brands pay only the product or quoted amount. You will see the gross, the commission and your net payout on your earnings page.",
      link: "signup.html?role=manufacturer",
      linkLabel: "Join and see earnings later"
    },
    {
      id: "hubs",
      question: "Can I stay in my own city?",
      suggested: false,
      keywords: ["city", "hub", "location", "tiruppur", "surat", "jaipur", "where"],
      answer: "Yes. You list the city where you produce. This demo already includes sample units in Tiruppur, Ludhiana, Surat, Jaipur, Mumbai, Delhi NCR, Bengaluru and Kolkata. Brands filter by hub when they search.",
      link: "manufacturers.html",
      linkLabel: "See the hubs"
    },
    {
      id: "fair-use",
      question: "Must deals stay on the platform?",
      suggested: false,
      keywords: ["fair use", "off site", "private deal", "bypass", "outside", "whatsapp deal"],
      answer: "Yes. At sign-up you agree to keep deals on MakerToBrand. That is how payment protection, verified reviews and extras stay available. Moving a deal off the site can lead to a warning, a lost verified badge, or a blocked account.",
      link: "how-it-works.html#safety",
      linkLabel: "Read the fair-use rule"
    },
    {
      id: "design",
      question: "What is design and tech-sheet support?",
      suggested: false,
      keywords: ["design", "tech sheet", "tech pack", "pattern", "brief pack"],
      answer: "Brands can ask MakerToBrand to design a garment and prepare a tech sheet before they brief you. The pack covers measurements, pattern details, fabric, trims and construction notes, so the brief you receive is clearer. It is a paid add-on for the brand, not an extra charge on your payout.",
      link: "design.html",
      linkLabel: "See the design service"
    }
  ]
};
