/* ============================================================
   MakerToBrand — SITE SETTINGS
   ============================================================
   This is the one file to edit when a price, a minimum order,
   or a picture needs to change.

   How to edit this file on GitHub, in your browser:
   1. Open this file and click the pencil icon (Edit this file).
   2. Change only the number, or the text inside the quotes.
   3. Do not delete the comma at the end of a line.
   4. Scroll down, click “Commit changes”, and wait about a minute.
   5. Refresh the demo website to see the update.

   A longer, step-by-step guide is in the file HOW-TO-EDIT.md
   in this project.

   Pictures: to replace a photo, upload a new file into the
   images/ folder with the SAME name, or change the path below
   to a new file you have uploaded. See images/README.md.
   ============================================================ */

window.MTB_SETTINGS = {

  /* --- Membership (everyone on the marketplace pays this) --- */
  /* Monthly price in Indian rupees. Write the number only — no ₹ and no commas. */
  membershipPriceMonth: 2500,

  /* Yearly price in Indian rupees. The demo treats this as two months free (ten months). */
  membershipPriceYear: 25000,

  /* --- Seller commission --- */
  /* Percent of the total bill taken from a manufacturer’s or wholesaler’s payout.
     Brands never see this. Write 3 for three percent. */
  sellerCommissionPercent: 3,

  /* --- Garment Design & Tech-Sheet Support --- */
  /* Prices are per style, in Indian rupees. Write the number only — no ₹ and no commas. */
  designPriceDesignOnly: 12000,
  designPriceTechSheetOnly: 8000,
  designPriceDesignAndTechSheet: 18000,

  /* Label shown next to those prices until real vendor rates arrive. */
  designSampleNote: "Sample prices – final rates coming soon.",

  /* --- Minimum order quantity (MOQ), in pieces --- */
  /* The smallest order the marketplace allows. No listing or brief can go below this. */
  defaultMoq: 10,

  /* Minimum order for each manufacturer, in pieces.
     If a figure here is below the default above, the default is used. */
  manufacturerMoqs: {
    "loom-lattice": 300,
    "desert-weave": 150,
    "sutra-knitworks": 250,
    "riverbend": 100,
    "khadi-atelier": 100,
    "northline": 400,
    "canopy-mills": 200,
    "coral-thread": 500,
    "blue-selvedge": 200,
    "hooghly-weave": 120,
    "east-bank": 400,
    "saltmarsh-knits": 500,
    "amber-yarn": 250,
    "ghatkopar-stitch": 350,
    "noida-line": 300,
    "whitefield-wovens": 180,
    "silk-corridor": 100,
    "sanganer-print": 150
  },

  /* Minimum order for each ready-made product, in pieces.
     If a figure here is below the default above, the default is used. */
  productMoqs: {
    "organic-crew": 300,
    "dryfit-tee": 400,
    "block-kurta": 150,
    "sanganer-dress": 120,
    "merino-hoodie": 250,
    "crew-sweater": 200,
    "festive-set": 100,
    "khadi-overshirt": 100,
    "oxford-shirt": 400,
    "navy-suit": 100,
    "linen-trousers": 200,
    "poplin-shirt": 200,
    "kids-jersey": 500,
    "leather-look": 120
  },

  /* --- Pictures used on key pages --- */
  /* Each path must match a file in the images/ folder, for example images/color-fabric.jpg
     To swap a picture: upload a new file with the SAME name, or change the path to a new file. */
  images: {
    /* Home page banner */
    homeHero: "images/color-fabric.jpg",
    /* Design & tech-sheet support page */
    designHero: "images/color-fabric.jpg",
    /* Founder portraits on the About page */
    founderNizam: "images/nizam-uddin.webp",
    founderDipankar: "images/dipankar-bose.webp",
    /* How It Works page */
    howItWorksBrand: "images/fashion-browse.jpg",
    howItWorksMaker: "images/tailor-hands.jpg",
    /* Quality control page */
    qcHero: "images/workshop-wide.jpg",
    /* Sign-up and sign-in side pictures */
    signupVisual: "images/indian-textile.jpg",
    loginVisual: "images/factory-sew.jpg"
  }
};
