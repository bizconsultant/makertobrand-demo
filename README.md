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

- Marketing home with manufacturer search, how-it-works, and memberships: Brand plan at ₹2,500/month (no commission), and seller plans Pro ₹1,500, Business ₹2,500 and Premium ₹5,000 (0% commission)
- Open sign-up and sign-in (demo only — choose Brand, Manufacturer, or Admin)
- Manufacturer directory and profile pages (a mini website for factories that often have none)
- Ready-made wholesale catalogue, product pages with price breaks and MOQ, cart, and a mock checkout
- Custom production briefs, quote comparison, accept-and-pay-a-deposit
- Payments described as held until delivery (intended partner: Razorpay). Checkout uses a **Demo payment** button and never collects card details
- Brand dashboard, manufacturer dashboard (gross, 3% fee or waived on Premium, net payout), in-app messaging, and an admin view with commissions, membership revenue and “Block account”

A small **Demo – sample data** label sits at the top of every page, with a “View as” switcher for presenting the three roles.

Photographs are royalty-free images from Unsplash and Pexels, stored in `/images`. Manufacturer and brand names are fictional.

## Stack

HTML, CSS and JavaScript only. No build step. Cart, session and a few demo actions use `localStorage` on the viewer’s device.
