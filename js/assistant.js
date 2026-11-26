/* MakerToBrand — pre-signup helper (no real AI, no server) */
(function () {
  const QUESTIONS_KEY = "mtb_presignup_questions";
  const SKIP_PAGES = { admin: true, dashboard: true, cart: true, messages: true };

  function faqData() {
    return window.MTB_ASSISTANT_FAQ || { brand: [], manufacturer: [], greetings: {} };
  }

  function fillTokens(text) {
    if (!text) return "";
    const month = (window.MTB && MTB.inr(MTB.membershipMonth())) || "";
    const year = (window.MTB && MTB.inr(MTB.membershipYear())) || "";
    const pct = (window.MTB && MTB.commissionLabel()) || "";
    const moq = String((window.MTB && MTB.defaultMoq()) || "");
    const S = (window.MTB && MTB.settings && MTB.settings()) || {};
    const sample = S.designSampleNote || "";
    function money(v) { return window.MTB ? MTB.inr(v) : String(v || ""); }
    return String(text)
      .replace(/\{membershipMonth\}/g, month)
      .replace(/\{membershipYear\}/g, year)
      .replace(/\{commissionPercent\}/g, pct)
      .replace(/\{defaultMoq\}/g, moq)
      .replace(/\{designPriceDesignOnly\}/g, money(S.designPriceDesignOnly))
      .replace(/\{designPriceTechSheetOnly\}/g, money(S.designPriceTechSheetOnly))
      .replace(/\{designPriceDesignAndTechSheet\}/g, money(S.designPriceDesignAndTechSheet))
      .replace(/\{designSampleNote\}/g, sample);
  }

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[₹%,]/g, " ")
      .replace(/[^a-z0-9\s]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokens(s) {
    return normalize(s).split(" ").filter(function (t) {
      const stop = ["the","and","for","how","can","you","your","are","is","do","to","of","in","on","a","an","my","me","we","i","it","or","if","be","at","as","by","so","not","but","with","from","this","that","these","those","what","when","why","who","which","will","would","should","could","please","just","any","all","also","here","there","about","into","than","then","them","they","our","us","get","got","has","have","had","does","did","was","were","been","being","more","most","some","only","before","after","their"];
      return t.length >= 2 && stop.indexOf(t) < 0;
    });
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const row = [];
    for (let i = 0; i <= b.length; i++) row[i] = i;
    for (let i = 1; i <= a.length; i++) {
      let prev = i;
      for (let j = 1; j <= b.length; j++) {
        const val = a[i - 1] === b[j - 1] ? row[j - 1] : Math.min(row[j - 1], prev, row[j]) + 1;
        row[j - 1] = prev;
        prev = val;
      }
      row[b.length] = prev;
    }
    return row[b.length];
  }

  const GENERIC_KW = { about:1, company:1, help:1, info:1, information:1, please:1, thanks:1, hello:1, hi:1, question:1, questions:1, details:1 };

  function scoreEntry(query, entry) {
    const qn = normalize(query);
    if (!qn) return 0;
    const qnWords = tokens(query);
    const question = normalize(entry.question);
    if (qn === question) return 200;
    if (question.indexOf(qn) >= 0 || (qn.length >= 12 && qn.indexOf(question) >= 0)) return 120;
    let score = 0;
    (entry.keywords || []).forEach(function (kw) {
      const k = normalize(kw);
      if (!k) return;
      const generic = GENERIC_KW[k] || (k.indexOf(" ") < 0 && k.length < 4 && k !== "moq" && k !== "qc");
      if (qn.indexOf(k) >= 0) score += generic ? 6 : (18 + Math.min(k.length, 10));
      else if (k.indexOf(qn) >= 0 && qn.length >= 5 && !generic) score += 12;
    });
    const hay = tokens((entry.question || "") + " " + (entry.keywords || []).join(" "));
    let unmatched = 0;
    qnWords.forEach(function (w) {
      if (hay.indexOf(w) >= 0) score += 8;
      else {
        let fuzzy = false;
        for (let i = 0; i < hay.length; i++) {
          if (hay[i].length >= 4 && w.length >= 4 && levenshtein(w, hay[i]) <= 1) {
            score += 5;
            fuzzy = true;
            break;
          }
        }
        if (!fuzzy && w.length >= 5) unmatched += 1;
      }
    });
    if (unmatched >= 2) score -= unmatched * 10;
    return score;
  }

  function matchFaq(role, query) {
    const list = faqData()[role] || [];
    let best = null, bestScore = 0;
    list.forEach(function (entry) {
      const s = scoreEntry(query, entry);
      if (s > bestScore) { bestScore = s; best = entry; }
    });
    if (!best || bestScore < 14) return null;
    return best;
  }

  function listQuestions() {
    try { return JSON.parse(localStorage.getItem(QUESTIONS_KEY) || "[]"); }
    catch (e) { return []; }
  }

  function saveQuestion(rec) {
    const all = listQuestions();
    all.unshift(rec);
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(all.slice(0, 100)));
  }

  function clearQuestions() {
    localStorage.removeItem(QUESTIONS_KEY);
  }

  function iconBubble() {
    return '<svg class="ask-icon" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M6 7.5h20a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 26 23.5H16l-6 5v-5H6A2.5 2.5 0 0 1 3.5 21V10A2.5 2.5 0 0 1 6 7.5Zm3.2 6.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm6.8 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm6.8 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"/></svg>';
  }

  function signupHref(role) {
    return role === "manufacturer" ? "signup.html?role=manufacturer" : "signup.html?role=brand";
  }

  function joinLabel(role) {
    return role === "manufacturer" ? "Join as a manufacturer" : "Join as a brand";
  }

  function escapeHtml(str) {
    if (window.MTB && MTB.escapeHtml) return MTB.escapeHtml(str);
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderAssistant() {
    if (!window.MTB) return;
    if (SKIP_PAGES[window.MTB.page]) return;
    if (document.getElementById("ask-mtb")) return;

    const root = document.createElement("div");
    root.id = "ask-mtb";
    root.innerHTML = `
      <button type="button" class="ask-launch" id="ask-launch" aria-expanded="false" aria-controls="ask-panel">
        ${iconBubble()}
        <span class="ask-launch-label">Ask MakerToBrand</span>
      </button>
      <section class="ask-panel" id="ask-panel" role="dialog" aria-modal="true" aria-labelledby="ask-title" hidden>
        <header class="ask-head">
          <div>
            <p class="ask-kicker">Pre-signup helper</p>
            <h2 id="ask-title">Ask MakerToBrand</h2>
          </div>
          <button type="button" class="ask-close" id="ask-close" aria-label="Close">×</button>
        </header>
        <div class="ask-body" id="ask-body"></div>
      </section>`;
    document.body.appendChild(root);

    const launch = document.getElementById("ask-launch");
    const panel = document.getElementById("ask-panel");
    const body = document.getElementById("ask-body");
    const closeBtn = document.getElementById("ask-close");
    let role = null;
    let lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      panel.hidden = false;
      root.classList.add("is-open");
      launch.setAttribute("aria-expanded", "true");
      launch.setAttribute("aria-hidden", "true");
      draw();
      closeBtn.focus();
    }
    function close() {
      panel.hidden = true;
      root.classList.remove("is-open");
      launch.setAttribute("aria-expanded", "false");
      launch.removeAttribute("aria-hidden");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function roleChooser() {
      return `
        <p class="ask-lead">Tell us who you are, so we can answer in the right way. Nothing is sent to a server.</p>
        <div class="ask-roles">
          <button type="button" class="ask-role" data-pick="brand">
            <strong>I'm a Brand</strong>
            <span>I want to find factories or buy stock.</span>
          </button>
          <button type="button" class="ask-role" data-pick="manufacturer">
            <strong>I'm a Manufacturer or Wholesaler</strong>
            <span>I want to be found and take orders.</span>
          </button>
        </div>`;
    }

    function suggested(roleKey) {
      return (faqData()[roleKey] || []).filter(function (e) { return e.suggested; });
    }

    function chipsHtml(roleKey) {
      return suggested(roleKey).map(function (e) {
        return `<button type="button" class="ask-chip" data-qid="${escapeHtml(e.id)}">${escapeHtml(e.question)}</button>`;
      }).join("");
    }

    function composer(placeholder) {
      return `
        <form class="ask-compose" id="ask-compose">
          <label class="visually-hidden" for="ask-input">Your question</label>
          <input id="ask-input" type="text" name="q" autocomplete="off" placeholder="${escapeHtml(placeholder)}">
          <button class="btn btn-dark btn-sm" type="submit">Ask</button>
        </form>`;
    }

    function actionsHtml(entry, roleKey) {
      const join = `<a class="btn btn-primary btn-sm" href="${signupHref(roleKey)}">${escapeHtml(joinLabel(roleKey))}</a>`;
      if (!entry) return `<div class="ask-actions">${join}</div>`;
      const href = entry.link || signupHref(roleKey);
      const label = entry.linkLabel || "Learn more";
      return `<div class="ask-actions">
        <a class="btn btn-ghost btn-sm" href="${escapeHtml(href)}">${escapeHtml(label)}</a>
        ${join}
      </div>`;
    }

    function fallbackForm(query) {
      return `
        <div class="ask-fallback">
          <p>I don't have a ready answer for that. Leave your question and our team will reply. This is a demo — the note is saved only on this device, and nothing is emailed.</p>
          <form id="ask-lead" class="ask-lead-form">
            <label class="field"><span>Your name</span><input name="name" required placeholder="e.g. Nila Atelier"></label>
            <label class="field"><span>Phone or email</span><input name="contact" required placeholder="A number or an email"></label>
            <label class="field"><span>Your question</span><textarea name="question" required rows="3">${escapeHtml(query || "")}</textarea></label>
            <button class="btn btn-dark btn-sm" type="submit">Leave this question</button>
          </form>
        </div>
        ${actionsHtml(null, role)}`;
    }

    function appendBubble(who, html) {
      const el = document.createElement("div");
      el.className = "ask-msg ask-msg-" + who;
      el.innerHTML = html;
      const thread = body.querySelector(".ask-thread");
      if (thread) {
        thread.appendChild(el);
        el.scrollIntoView({ block: "nearest", inline: "nearest" });
        if (el.offsetTop < thread.scrollTop) thread.scrollTop = Math.max(0, el.offsetTop - 8);
      }
    }

    function bindCompose() {
      const form = document.getElementById("ask-compose");
      if (!form) return;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.getElementById("ask-input");
        const q = (input && input.value || "").trim();
        if (!q) return;
        input.value = "";
        ask(q);
      });
      body.querySelectorAll(".ask-chip").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const id = btn.getAttribute("data-qid");
          const entry = (faqData()[role] || []).find(function (e) { return e.id === id; });
          if (entry) ask(entry.question, entry);
        });
      });
    }

    function bindLeadForm(originalQuery) {
      const form = document.getElementById("ask-lead");
      if (!form) return;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const fd = new FormData(form);
        saveQuestion({
          id: "q-" + Date.now(),
          at: new Date().toISOString(),
          name: String(fd.get("name") || "").trim(),
          contact: String(fd.get("contact") || "").trim(),
          question: String(fd.get("question") || originalQuery || "").trim(),
          role: role,
          page: (location.pathname.split("/").pop() || "index.html")
        });
        form.outerHTML = `<p class="ask-thanks">Thank you. Your question has been saved in this demo. In a live product our team would reply. You can still join now, or ask something else.</p>`;
        if (window.MTB && MTB.toast) MTB.toast("Question saved in this demo.");
      });
    }

    function ask(query, preset) {
      appendBubble("user", "<p>" + escapeHtml(query) + "</p>");
      const entry = preset || matchFaq(role, query);
      if (entry) {
        appendBubble("bot", "<p>" + escapeHtml(fillTokens(entry.answer)) + "</p>" + actionsHtml(entry, role));
      } else {
        const wrap = document.createElement("div");
        wrap.className = "ask-msg ask-msg-bot";
        wrap.innerHTML = fallbackForm(query);
        const thread = body.querySelector(".ask-thread");
        thread.appendChild(wrap);
        wrap.scrollIntoView({ block: "nearest", inline: "nearest" });
        if (wrap.offsetTop < thread.scrollTop) thread.scrollTop = Math.max(0, wrap.offsetTop - 8);
        bindLeadForm(query);
      }
    }

    function draw() {
      if (!role) {
        body.innerHTML = roleChooser();
        body.querySelectorAll("[data-pick]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            role = btn.getAttribute("data-pick");
            draw();
          });
        });
        return;
      }
      const greet = fillTokens((faqData().greetings || {})[role] || "How can we help?");
      const switcher = role === "brand" ? "I'm a manufacturer" : "I'm a brand";
      const other = role === "brand" ? "manufacturer" : "brand";
      body.innerHTML = `
        <div class="ask-toolbar">
          <span class="ask-role-tag">${role === "brand" ? "For brands" : "For manufacturers &amp; wholesalers"}</span>
          <button type="button" class="ask-switch" data-switch="${other}">${switcher}</button>
        </div>
        <div class="ask-thread">
          <div class="ask-msg ask-msg-bot"><p>${escapeHtml(greet)}</p></div>
        </div>
        <div class="ask-suggest">
          <p class="ask-suggest-label">Try one of these</p>
          <div class="ask-chips">${chipsHtml(role)}</div>
        </div>
        ${composer("Type a question…")}`;
      body.querySelector("[data-switch]").addEventListener("click", function () {
        role = other;
        draw();
      });
      bindCompose();
      const input = document.getElementById("ask-input");
      if (input) input.focus();
    }

    launch.addEventListener("click", function () {
      if (panel.hidden) open();
      else close();
    });
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) {
        e.preventDefault();
        close();
      }
    });
  }

  window.MTB_ASSISTANT = {
    fillTokens: fillTokens,
    matchFaq: matchFaq,
    listQuestions: listQuestions,
    saveQuestion: saveQuestion,
    clearQuestions: clearQuestions,
    QUESTIONS_KEY: QUESTIONS_KEY
  };

  if (window.MTB) {
    MTB.renderAssistant = renderAssistant;
    MTB.listPresignupQuestions = listQuestions;
    MTB.clearPresignupQuestions = clearQuestions;
  }
})();
