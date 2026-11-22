/* MakerToBrand — shared demo behaviour (no real auth, no server) */
(function () {
  const KEY = {
    session: "mtb_session",
    cart: "mtb_cart",
    blocked: "mtb_blocked",
    rfqs: "mtb_extra_rfqs",
    accepted: "mtb_accepted",
    orders: "mtb_extra_orders"
  };

  const MTB = {
    page: "home"
  };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function inr(n) {
    const num = Math.round(Number(n) || 0);
    return "₹" + num.toLocaleString("en-IN");
  }

  function param(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function getSession() {
    try { return JSON.parse(localStorage.getItem(KEY.session) || "null"); }
    catch { return null; }
  }
  function setSession(s) {
    if (!s) localStorage.removeItem(KEY.session);
    else localStorage.setItem(KEY.session, JSON.stringify(s));
  }
  function getCart() {
    try { return JSON.parse(localStorage.getItem(KEY.cart) || "[]"); }
    catch { return []; }
  }
  function setCart(items) {
    localStorage.setItem(KEY.cart, JSON.stringify(items));
    renderCartCount();
  }

  function getBlocked() {
    try { return JSON.parse(localStorage.getItem(KEY.blocked) || "null") || defaultBlocked(); }
    catch { return defaultBlocked(); }
  }
  function defaultBlocked() {
    return (window.MTB_DATA.users || []).filter((u) => u.status === "blocked").map((u) => u.id);
  }
  function setBlocked(ids) {
    localStorage.setItem(KEY.blocked, JSON.stringify(ids));
  }

  function maker(id) { return MTB_DATA.manufacturers.find((m) => m.id === id); }
  function product(id) { return MTB_DATA.products.find((p) => p.id === id); }
  function rfq(id) {
    const extras = getExtraRfqs();
    return extras.concat(MTB_DATA.rfqs).find((r) => r.id === id);
  }
  function getExtraRfqs() {
    try { return JSON.parse(localStorage.getItem(KEY.rfqs) || "[]"); }
    catch { return []; }
  }
  function allRfqs() { return getExtraRfqs().concat(MTB_DATA.rfqs); }

  function allOrders() {
    let extras = [];
    try { extras = JSON.parse(localStorage.getItem(KEY.orders) || "[]"); } catch { extras = []; }
    return extras.concat(MTB_DATA.orders);
  }

  function tierPrice(prod, qty) {
    const q = Number(qty) || 0;
    const tiers = prod.tiers || [];
    for (const t of tiers) {
      if (q >= t.min && (t.max == null || q <= t.max)) return t.price;
    }
    return tiers.length ? tiers[tiers.length - 1].price : 0;
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  function logoSvg(color) {
    const c = color || "#161310";
    return `<svg class="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="none" stroke="${c}" stroke-width="1.4"/>
      <path d="M8 22 V10 L16 20 L24 10 V22" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 24 C12 18, 20 26, 26 20" fill="none" stroke="#9C3A2A" stroke-width="1.3" stroke-linecap="round"/>
    </svg>`;
  }

  function renderDemoBar() {
    const s = getSession();
    const role = s && s.role;
    const host = document.getElementById("demo-bar");
    if (!host) return;
    host.className = "demo-bar";
    host.innerHTML = `
      <div class="wrap-wide">
        <span class="demo-pill">Demo – sample data</span>
        <div class="demo-views">
          <span>View as</span>
          <button type="button" data-persona="brand" class="${role === "brand" ? "is-active" : ""}">Brand</button>
          <button type="button" data-persona="manufacturer" class="${role === "manufacturer" ? "is-active" : ""}">Manufacturer</button>
          <button type="button" data-persona="admin" class="${role === "admin" ? "is-active" : ""}">Admin</button>
          <button type="button" data-persona="out" class="${!role ? "is-active" : ""}">Signed out</button>
        </div>
      </div>`;
    host.querySelectorAll("[data-persona]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = btn.getAttribute("data-persona");
        if (p === "out") {
          setSession(null);
          toast("Signed out of the demo.");
          if (MTB.page.indexOf("dashboard") === 0 || MTB.page === "admin" || MTB.page === "messages") {
            location.href = "index.html";
            return;
          }
          renderHeader();
          renderDemoBar();
          return;
        }
        setSession(Object.assign({}, MTB_DATA.personas[p]));
        toast("Viewing as " + MTB_DATA.personas[p].name);
        if (p === "admin") location.href = "admin.html";
        else if (p === "manufacturer") location.href = "dashboard-maker.html";
        else location.href = "dashboard-brand.html";
      });
    });
  }

  function renderHeader() {
    const s = getSession();
    const host = document.getElementById("site-header");
    if (!host) return;
    const page = MTB.page;
    const nav = [
      { href: "manufacturers.html", id: "makers", label: "Find Manufacturers" },
      { href: "stock.html", id: "stock", label: "Ready-made" },
      { href: "custom.html", id: "custom", label: "Custom orders" },
      { href: "pricing.html", id: "pricing", label: "Memberships" },
      { href: "how-it-works.html", id: "how", label: "How it works" }
    ];
    let account;
    if (!s) {
      account = `<a class="btn btn-ghost btn-sm hide-sm" href="login.html">Sign in</a>
                 <a class="btn btn-primary btn-sm" href="signup.html">Join the marketplace</a>`;
    } else if (s.role === "admin") {
      account = `<a class="hide-sm" href="admin.html">${escapeHtml(s.name)}</a>
                 <a class="btn btn-dark btn-sm" href="admin.html">Admin</a>`;
    } else if (s.role === "manufacturer") {
      account = `<a class="hide-sm" href="dashboard-maker.html">${escapeHtml(s.name)}</a>
                 <a class="btn btn-dark btn-sm" href="dashboard-maker.html">Dashboard</a>`;
    } else {
      account = `<a class="hide-sm" href="dashboard-brand.html">${escapeHtml(s.name)}</a>
                 <a class="btn btn-dark btn-sm" href="dashboard-brand.html">Dashboard</a>`;
    }
    host.className = "site-header";
    host.innerHTML = `
      <div class="bar">
        <a class="logo" href="index.html" aria-label="MakerToBrand home">
          ${logoSvg("#161310")}
          <span class="logo-word">Maker<em>To</em>Brand</span>
        </a>
        <a class="find-makers-link" href="manufacturers.html">Find makers</a>
        <nav class="nav-main">
          ${nav.map((n) => `<a href="${n.href}" class="${page === n.id ? "is-active" : ""}">${n.label}</a>`).join("")}
        </nav>
        <div class="nav-end">
          <a class="cart-link" href="cart.html">Cart <span class="cart-count" id="cart-count">0</span></a>
          ${account}
          <button class="menu-toggle" type="button" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </div>`;
    const toggle = host.querySelector(".menu-toggle");
    if (toggle) toggle.addEventListener("click", () => host.classList.toggle("nav-open"));
    renderCartCount();
  }

  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML = `
      <div class="wrap-wide">
        <div class="foot-grid">
          <div class="foot-brand">
            <div class="logo">${logoSvg("#F3EEE5")}<span class="logo-word">Maker<em>To</em>Brand</span></div>
            <p style="margin-top:16px;max-width:28ch">India's marketplace for apparel brands and the manufacturers who make for them. Ready-made stock and custom production, with payments held until delivery.</p>
          </div>
          <div>
            <h4>Marketplace</h4>
            <a href="manufacturers.html">Find manufacturers</a>
            <a href="stock.html">Ready-made stock</a>
            <a href="custom.html">Custom production</a>
            <a href="pricing.html">Memberships</a>
          </div>
          <div>
            <h4>Platform</h4>
            <a href="how-it-works.html">How it works</a>
            <a href="how-it-works.html#payments">Payments &amp; escrow</a>
            <a href="how-it-works.html#safety">Trade safely</a>
            <a href="signup.html">Create an account</a>
            <a href="login.html">Sign in</a>
          </div>
          <div>
            <h4>For a pitch</h4>
            <a href="dashboard-brand.html">Brand dashboard</a>
            <a href="dashboard-maker.html">Manufacturer dashboard</a>
            <a href="admin.html">Admin view</a>
            <a href="messages.html">Messages</a>
          </div>
        </div>
        <div class="foot-meta">
          <span>Demo website with sample data. Not a live marketplace. Payments are simulated — nothing is charged.</span>
          <span>Intended payments partner: Razorpay · Prices in INR</span>
        </div>
      </div>`;
  }

  function renderCartCount() {
    const el = document.getElementById("cart-count");
    if (!el) return;
    const n = getCart().reduce((a, i) => a + Number(i.qty || 0), 0);
    el.textContent = n > 999 ? "999+" : String(n);
    el.style.display = n ? "inline-flex" : "none";
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function stars(n) {
    const r = Math.round(Number(n) || 0);
    return "★★★★★".slice(0, r) + "☆☆☆☆☆".slice(0, 5 - r);
  }

  function requireRole(role, fallback) {
    const s = getSession();
    if (s && s.role === role) return s;
    if (role === "admin") setSession(MTB_DATA.personas.admin);
    else if (role === "manufacturer") setSession(MTB_DATA.personas.manufacturer);
    else setSession(MTB_DATA.personas.brand);
    renderHeader();
    renderDemoBar();
    return getSession();
  }

  function addToCart(item) {
    const cart = getCart();
    const i = cart.findIndex((x) => x.id === item.id && x.color === item.color && x.size === item.size);
    if (i >= 0) cart[i].qty = Number(cart[i].qty) + Number(item.qty);
    else cart.push(item);
    setCart(cart);
    toast("Added to cart");
  }


  function partnerOrders(brandName, makerId) {
    if (!brandName || !makerId) return [];
    return allOrders().filter((o) => o.brand === brandName && o.makerId === makerId);
  }
  function hasPaidOrderWith(brandName, makerId) {
    return partnerOrders(brandName, makerId).length > 0;
  }
  function loyaltyRate() { return 0.03; }
  function pct(rate) { return Math.round(rate * 100) + "%"; }
  function sellerFeeRate(makerOrPlan) {
    const plan = typeof makerOrPlan === "string" ? makerOrPlan : (makerOrPlan && makerOrPlan.plan);
    return plan === "Premium" ? 0 : 0.03;
  }
  function feeFor(merchandise, makerOrPlan) {
    const amount = Math.round(Number(merchandise) || 0);
    const rate = sellerFeeRate(makerOrPlan);
    const fee = Math.round(amount * rate);
    return {
      rate,
      fee,
      feeWaived: rate === 0,
      brandPays: amount,
      makerPayout: amount - fee,
      label: rate === 0 ? "waived, Premium" : "3% platform fee"
    };
  }
  function cartMerchandise(cart) {
    return (cart || []).reduce((sum, item) => {
      const p = product(item.id);
      if (!p) return sum;
      const unit = tierPrice(p, item.qty);
      return sum + unit * Number(item.qty || 0);
    }, 0);
  }
  function cartFeeBreakdown(cart) {
    const groups = {};
    (cart || []).forEach((item) => {
      const p = product(item.id);
      if (!p) return;
      const m = maker(p.makerId);
      const line = tierPrice(p, item.qty) * Number(item.qty || 0);
      const key = p.makerId || "unknown";
      if (!groups[key]) groups[key] = { maker: m, merchandise: 0 };
      groups[key].merchandise += line;
    });
    let merchandise = 0, fee = 0, makerPayout = 0;
    const parts = Object.keys(groups).map((key) => {
      const g = groups[key];
      const br = feeFor(g.merchandise, g.maker);
      merchandise += br.brandPays;
      fee += br.fee;
      makerPayout += br.makerPayout;
      return Object.assign({ makerId: key }, br, { maker: g.maker });
    });
    return { merchandise, fee, makerPayout, brandPays: merchandise, parts };
  }
  const NCR_CITIES = ["Delhi NCR", "Delhi", "Gurugram", "Noida", "Gurgaon"];
  function inDelhiNcr(m) {
    return NCR_CITIES.indexOf(m.city) >= 0 || m.state === "Delhi NCR" || m.state === "NCR";
  }
  const CATEGORY_ALIASES = {
    "Knitwear": ["Knitwear", "Knits", "Woollens", "Sweaters", "Hoodies", "Activewear", "T-shirts"],
    "Denim": ["Denim", "Jeans"],
    "Ethnic wear": ["Ethnic wear", "Kurtas", "Festive", "Occasion wear", "Handloom", "Block print", "Craft"],
    "Shirts": ["Shirts", "Shirting", "Wovens", "Linen", "Suiting"],
    "Kidswear": ["Kidswear"],
    "Festive": ["Festive", "Occasion wear"]
  };
  function makerMatchesCategory(m, cat) {
    const aliases = CATEGORY_ALIASES[cat] || [cat];
    return (m.categories || []).some((c) => aliases.indexOf(c) >= 0 || c === cat);
  }
  function makerMatchesQuery(m, q) {
    if (!q) return true;
    const hay = [m.name, m.city, m.state, m.tagline, m.about, (m.categories || []).join(" "), (m.materials || []).join(" ")].join(" ").toLowerCase();
    return hay.indexOf(String(q).toLowerCase().trim()) >= 0;
  }
  function makerContacts(m) {
    const directory = {
      "loom-lattice": { phone: "+91 421 555 0140", email: "studio@loomlattice.example", wa: "+91 98765 11001" },
      "desert-weave": { phone: "+91 141 555 0288", email: "hello@desertweave.example", wa: "+91 98290 22014" },
      "sutra-knitworks": { phone: "+91 161 555 0331", email: "orders@sutraknit.example", wa: "+91 98140 33021" },
      "riverbend": { phone: "+91 261 555 0442", email: "sales@riverbend.example", wa: "+91 98250 44008" },
      "khadi-atelier": { phone: "+91 22 5555 0510", email: "studio@khadiatelier.example", wa: "+91 98200 55019" },
      "northline": { phone: "+91 124 555 0660", email: "programmes@northline.example", wa: "+91 98100 66012" },
      "canopy-mills": { phone: "+91 80 5555 0774", email: "hello@canopymills.example", wa: "+91 98860 77023" },
      "coral-thread": { phone: "+91 421 555 0885", email: "kids@coralthread.example", wa: "+91 98420 88031" }
    };
    return directory[m && m.id] || { phone: "+91 22 5555 0000", email: "hello@maker.example", wa: "+91 90000 00000" };
  }
  function maskContact(text) {
    let masked = false;
    let out = String(text || "");
    out = out.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, function () { masked = true; return "••••"; });
    out = out.replace(/(https?:\/\/\S+|wa\.me\/\S+|chat\.whatsapp\.com\/\S+)/gi, function () { masked = true; return "••••"; });
    out = out.replace(/(\+91[\s-]*)?[6-9]\d{9}\b/g, function () { masked = true; return "••••"; });
    out = out.replace(/(\+91[\s-]*)?\d{5}[\s-]?\d{5}\b/g, function () { masked = true; return "••••"; });
    out = out.replace(/\b\d{3}[\s.-]\d{3}[\s.-]\d{4}\b/g, function () { masked = true; return "••••"; });
    return { text: out, masked: masked };
  }
  function contactUnlocked(makerId) {
    const s = getSession();
    if (!s) return false;
    if (s.role === "admin") return true;
    if (s.role === "manufacturer" && (s.makerId === makerId || (s.name && maker(makerId) && s.name === maker(makerId).name))) return true;
    if (s.role === "brand") return hasPaidOrderWith(s.name, makerId);
    return false;
  }
  function protectBadge() {
    return `<span class="badge badge-held">Protected on MakerToBrand only</span>`;
  }

  function wrapChrome() {
    if (document.getElementById("chrome")) return;
    const bar = document.getElementById("demo-bar");
    const head = document.getElementById("site-header");
    if (!bar || !head) return;
    const wrap = document.createElement("div");
    wrap.id = "chrome";
    bar.parentNode.insertBefore(wrap, bar);
    wrap.appendChild(bar);
    wrap.appendChild(head);
  }

  function init(opts) {
    MTB.page = (opts && opts.page) || "home";
    wrapChrome();
    renderDemoBar();
    renderHeader();
    renderFooter();
    if (typeof opts === "object" && typeof opts.after === "function") opts.after();
  }



  function makerCard(m) {
    const verified = m.verified ? `<span class="badge badge-verified">Verified</span>` : "";
    const featured = m.plan === "Premium" ? `<span class="badge badge-featured">Featured</span>` : "";
    return `<a class="maker-card" href="manufacturer.html?id=${encodeURIComponent(m.id)}">
      <div class="media"><img src="${m.cover}" alt="${escapeHtml(m.name)}"></div>
      <div class="card-body">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${verified}${featured}</div>
        <h3>${escapeHtml(m.name)}</h3>
        <div class="card-meta">
          <span>${escapeHtml(m.city)}</span>
          <span class="stars" aria-label="${m.rating} stars">${stars(m.rating)} ${m.rating}</span>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:14px">${escapeHtml(m.tagline)}</p>
        <div class="card-meta" style="margin-top:10px">
          <span>MOQ ${m.moq}</span>
          <span>${escapeHtml(m.categories[0])}</span>
        </div>
      </div>
    </a>`;
  }

  function productCard(p) {
    const m = maker(p.makerId);
    const from = p.tiers[p.tiers.length - 1].price;
    return `<a class="product-card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="media"><img src="${p.images[0]}" alt="${escapeHtml(p.name)}"></div>
      <div class="card-body">
        <div class="card-meta">${escapeHtml(m ? m.name : "")} · ${escapeHtml(m ? m.city : "")}</div>
        <h3 style="font-size:22px;margin:6px 0">${escapeHtml(p.name)}</h3>
        <div class="price">${inr(from)} <small>per pc from · MOQ ${p.moq}</small></div>
      </div>
    </a>`;
  }

  window.MTB = {
    init, inr, param, getSession, setSession, getCart, setCart, addToCart,
    maker, product, rfq, allRfqs, allOrders, getExtraRfqs, getBlocked, setBlocked,
    tierPrice, toast, stars, escapeHtml, requireRole, makerCard, productCard, partnerOrders, hasPaidOrderWith, loyaltyRate, pct, sellerFeeRate, feeFor, cartMerchandise, cartFeeBreakdown, inDelhiNcr, makerMatchesCategory, makerMatchesQuery, KEY, $, $$
  };
})();
