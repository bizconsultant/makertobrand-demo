# MakerToBrand

A clickable front-end demo of **MakerToBrand**, an India-focused B2B fashion apparel marketplace where brand owners and garment manufacturers connect.

This is a static prototype with sample data, built to show clients how the product would feel. It is not a live marketplace. No accounts are created on a server, no passwords are stored, and no real payments are taken.

## Open the demo

If this repository is served on GitHub Pages, use:

[https://bizconsultant.github.io/makertobrand-demo/](https://bizconsultant.github.io/makertobrand-demo/)

To run it locally, open the folder with any static server, for example:

```bash
npx serve .
```

## What you can click through

- Marketing home with manufacturer search, how-it-works, and a single monthly membership for brands, manufacturers and wholesalers (the figure lives in `js/settings.js`)
- Open sign-up and sign-in (demo only — choose Brand, Manufacturer, or Admin)
- Manufacturer directory and profile pages (a mini website for factories that often have none)
- Ready-made wholesale catalogue, product pages with price breaks and a minimum order (set in `js/settings.js`), cart, and a mock checkout
- Custom production briefs, quote comparison, accept-and-pay-a-deposit
- Payments described as held until delivery (intended partner: Razorpay). Checkout uses a **Demo payment** button and never collects card details
- About the owners (Nizam Uddin and Dipankar Bose, details in `js/data.js`) and a Quality Control service page
- Garment Design & Tech-Sheet Support for brands (sample prices, added to a custom brief)
- Brand dashboard (brand membership only — no seller commission), manufacturer dashboard (membership plus a commission taken from payout), in-app messaging, and an admin view with commissions, membership revenue, “Block account”, and **Edit rates & content**

A small **Demo – sample data** label sits at the top of every page, with a “View as” switcher for presenting the three roles.

Photographs are royalty-free images from Unsplash and Pexels, stored in `/images`. Manufacturer and brand names are fictional.

## Stack

HTML, CSS and JavaScript only. No build step. Cart, session and a few demo actions use `localStorage` on the viewer’s device.

## Changing prices, minimums and pictures

All rates, minimum orders and key pictures live in [`js/settings.js`](js/settings.js). Edit that file on GitHub in your browser, or try a change in the Admin **Edit rates & content** screen (that trial stays in your browser only). A plain-words guide is in [HOW-TO-EDIT.md](HOW-TO-EDIT.md).
