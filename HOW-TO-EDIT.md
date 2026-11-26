# How to change prices, minimum orders and pictures

You do not need a developer for this. All of the important figures live in **one file**: `js/settings.js`.

There are two ways to change them.

---

## 1. Change the live demo for everyone (the usual way)

This updates the website that your clients open.

1. On your computer, open this file on GitHub:  
   [js/settings.js](https://github.com/bizconsultant/makertobrand-demo/blob/main/js/settings.js)
2. Near the top right of the file, click the **pencil** icon. GitHub calls this “Edit this file.”  
   Direct link: [edit settings.js](https://github.com/bizconsultant/makertobrand-demo/edit/main/js/settings.js)
3. Find the line you want. For example:

       membershipPriceMonth: 2500,

   Change only the number. If you are changing words, change only the text inside the quotes.
4. Do not delete the comma at the end of the line. Do not delete the quotes around a piece of text.
5. Scroll to the bottom of the page. You will see a green button that says **Commit changes**. You can leave the message as it is.
6. Click **Commit changes**.
7. Wait about **one minute**, then refresh the demo website:  
   https://bizconsultant.github.io/makertobrand-demo/

### What each setting means

- **membershipPriceMonth** and **membershipPriceYear** — the plan everyone pays, in Indian rupees, with no ₹ sign and no commas.
- **sellerCommissionPercent** — the percentage taken from a manufacturer’s or wholesaler’s payout. Write `3` for 3%. Brands never see this.
- **designPriceDesignOnly**, **designPriceTechSheetOnly**, **designPriceDesignAndTechSheet** — design support prices, per style, in rupees.
- **designSampleNote** — the label next to those prices (for example, that they are sample rates).
- **defaultMoq** — the smallest order the marketplace allows, in pieces.
- **manufacturerMoqs** and **productMoqs** — the minimum order for each factory and each ready-made product.
- **images** — the file path for key banners and the two founder portraits.

### How to change a picture

- **Same name:** open the [images folder](https://github.com/bizconsultant/makertobrand-demo/tree/main/images), click **Add file → Upload files**, and upload your new photo with the *exact same file name* as the one you are replacing. Commit, then wait about a minute.
- **New name:** upload the new file, then in `js/settings.js` change the path, for example `homeHero: "images/my-new-banner.jpg",`.

A short note about this also sits in `images/README.md`.

---

## 2. Try a change only on your own computer (the Admin screen)

On the demo, use **View as → Admin**, then open **Edit rates & content**. You can change a number, pick a new picture, and save.

Those changes show **only in that browser**. They are for trying an idea before you edit the settings file on GitHub. A note on the screen says this:

> Changes here show only in this browser in the demo; the real site will save for everyone.

Use **Reset to site defaults** to undo a trial.

The Admin screen is at:  
https://bizconsultant.github.io/makertobrand-demo/admin.html?tab=edit


---

## 3. Change the Ask MakerToBrand answers

The helper on the site is not a live chat and does not use artificial intelligence. Every question and answer sits in one file: `js/assistant-faq.js`.

1. Open the file on GitHub:  
   [js/assistant-faq.js](https://github.com/bizconsultant/makertobrand-demo/blob/main/js/assistant-faq.js)
2. Click the **pencil** icon, or use this direct link:  
   [edit assistant-faq.js](https://github.com/bizconsultant/makertobrand-demo/edit/main/js/assistant-faq.js)
3. There are two lists: **brand** (answers for brand owners) and **manufacturer** (answers for manufacturers and wholesalers). Change only the text inside the quotes.
4. Do not delete the commas or the curly brackets. Leave words like `{membershipMonth}` and `{defaultMoq}` as they are — the site fills in the latest figures from `js/settings.js`.
5. Click **Commit changes**, wait about one minute, then refresh the demo.

A few rules so each side only sees its own deal:

- In the **brand** list, do not mention the seller commission or the 3%. You may mention the shared ₹2,500 monthly membership (use `{membershipMonth}`).
- In the **manufacturer** list, you may mention both the membership and `{commissionPercent}` taken from the payout.
- If you add a new question, copy an existing block and change `id`, `question`, `keywords`, `answer`, `link` and `linkLabel`. Set `suggested: true` if you want it to appear as a chip people can tap.

Unanswered questions that visitors leave in the helper appear in Admin under **Pre-signup questions**. Those notes stay in that browser only, because this is a demo.
