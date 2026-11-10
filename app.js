/* =========================================================
   Lain 兔子洞冰山图 — 交互
   ========================================================= */
(() => {
  "use strict";

  const D = window.LAIN_DATA;
  const META = D.meta;
  const CATS = D.categories;
  const TIERS = D.tiers;
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const tierByN = Object.fromEntries(TIERS.map(t => [t.n, t]));
  const SOURCES = ["官方", "半官方", "社区", "无来源"];
  const SRC_COLOR = { "官方": "#a5ecff", "半官方": "#ffd479", "社区": "#7ff0c4", "无来源": "#ff8fb1" };

  /* 给每条词条分配稳定 id */
  const entries = D.entries.map((e, i) => ({ ...e, id: `e${e.tier}-${i}` }));

  /* 深层颜色过暗 → 计算一个足够亮的强调色，保证文字可读 */
  function toRgb(hex) {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function relLum([r, g, b]) {
    const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  }
  function accent(hex, target = 0.42) {
    let rgb = toRgb(hex);
    const mixTo = toRgb("#bfeaff");
    let k = 0;
    while (relLum(rgb) < target && k < 1) {
      k += 0.06;
      rgb = rgb.map((c, i) => c + (mixTo[i] - c) * 0.16);
    }
    return "#" + rgb.map(c => Math.round(c).toString(16).padStart(2, "0")).join("");
  }
  TIERS.forEach(t => { t.acc = accent(t.color); });

  const $ = sel => document.querySelector(sel);
  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ============ 状态 ============ */
  const state = { q: "", cats: new Set(), srcs: new Set(), current: null, list: [] };

  /* ============ HERO ============ */
  $("#metaNote").textContent = META.note;
  const count = entries.length;
  const deep = Math.max(...entries.map(e => e.tier));
  $("#stats").innerHTML = [
    [count, "词条"],
    [deep, "层级"],
    [CATS.length, "分类"],
    [SOURCES.length, "来源标记"]
  ].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");

  /* ============ 冰山 SVG ============ */
  (function drawIceberg() {
    const NS = "http://www.w3.org/2000/svg";
    const svg = $("#iceberg");
    const CX = 250, TOP = 46, WATER = 176, BOT = 632;
    const mk = (tag, attrs) => {
      const n = document.createElementNS(NS, tag);
      for (const k in attrs) n.setAttribute(k, attrs[k]);
      return n;
    };
    const rnd = (seed) => { const x = Math.sin(seed * 127.1) * 43758.5453; return x - Math.floor(x); };

    /* 半宽轮廓：水面以上收成尖顶，水面以下缓慢收窄 */
    const halfW = y => {
      if (y <= WATER) {
        const t = (WATER - y) / (WATER - TOP);          // 0 水面 → 1 顶尖
        return 10 + 108 * Math.pow(1 - t, 1.7);
      }
      const t = (y - WATER) / (BOT - WATER);
      return (10 + 108 * Math.pow(1 - t, 1.05)) * (1 + 0.05 * Math.sin(t * Math.PI * 2.4));
    };
    const edge = (y, side, seed) => {
      const hw = halfW(y);
      return CX + side * (hw + (rnd(seed) - 0.5) * Math.min(8, hw * 0.1));
    };

    /* defs */
    const defs = mk("defs", {});

    const gBody = mk("linearGradient", { id: "iceBody", x1: 0, y1: 0, x2: 0, y2: 1 });
    [["0%", "#f2fbff", .92], ["14%", "#d6f2ff", .85], ["22%", "#9fdcff", .70],
     ["45%", "#4f96d8", .62], ["70%", "#1d3a6b", .72], ["100%", "#070d1c", .92]]
      .forEach(([o, c, a]) => gBody.appendChild(mk("stop", { offset: o, "stop-color": c, "stop-opacity": a })));
    defs.appendChild(gBody);

    const gGlow = mk("radialGradient", { id: "seaGlow", cx: "50%", cy: "0%", r: "88%" });
    gGlow.appendChild(mk("stop", { offset: "0%", "stop-color": "#7fd8ff", "stop-opacity": ".22" }));
    gGlow.appendChild(mk("stop", { offset: "55%", "stop-color": "#3a6ea8", "stop-opacity": ".08" }));
    gGlow.appendChild(mk("stop", { offset: "100%", "stop-color": "#000", "stop-opacity": "0" }));
    defs.appendChild(gGlow);

    const gTip = mk("radialGradient", { id: "tipGlow", cx: "50%", cy: "50%", r: "50%" });
    gTip.appendChild(mk("stop", { offset: "0%", "stop-color": "#dff6ff", "stop-opacity": ".55" }));
    gTip.appendChild(mk("stop", { offset: "100%", "stop-color": "#dff6ff", "stop-opacity": "0" }));
    defs.appendChild(gTip);

    const clip = mk("clipPath", { id: "iceClip" });
    const clipPts = [];
    for (let y = TOP; y <= BOT; y += 6) clipPts.push([edge(y, -1, y * 0.37), y]);
    for (let y = BOT; y >= TOP; y -= 6) clipPts.push([edge(y, 1, y * 0.37 + 9), y]);
    clip.appendChild(mk("path", { d: "M" + clipPts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" L") + " Z" }));
    defs.appendChild(clip);
    svg.appendChild(defs);

    /* 水面以下的背景 */
    svg.appendChild(mk("rect", { x: 0, y: WATER, width: 500, height: 640 - WATER, fill: "url(#seaGlow)" }));

    /* 冰体本体 */
    svg.appendChild(mk("path", {
      d: "M" + clipPts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" L") + " Z",
      fill: "url(#iceBody)", stroke: "#bfeaff", "stroke-opacity": .45, "stroke-width": 1.1
    }));

    /* 顶端光晕（视觉上把视线钉在顶部） */
    svg.appendChild(mk("circle", { cx: CX, cy: TOP + 26, r: 30, fill: "url(#tipGlow)" }));

    /* 14 层：只画分割线与标签，不做色块堆叠 */
    const N = TIERS.length;
    const gLayers = mk("g", { "clip-path": "url(#iceClip)" });
    svg.appendChild(gLayers);

    for (let i = 1; i < N; i++) {
      const y = WATER + (BOT - WATER) * (i / N);
      const t = i / N;
      gLayers.appendChild(mk("line", {
        x1: 0, x2: 500, y1: y, y2: y,
        stroke: TIERS[i].color, "stroke-opacity": .10 + t * .22, "stroke-width": .8
      }));
    }

    /* 层交互热区 + 编号 + 右侧深度刻度 */
    const bands = [];
    for (let i = 0; i < N; i++) {
      const y0 = WATER + (BOT - WATER) * (i / N);
      const y1 = WATER + (BOT - WATER) * ((i + 1) / N);
      bands.push([y0, y1]);
    }

    TIERS.forEach((tier, i) => {
      const [y0, y1] = bands[i];
      const mid = (y0 + y1) / 2;
      const g = mk("g", { class: "ice-tier", "data-tier": tier.n, tabindex: "0", role: "button", "aria-label": `Tier ${tier.n} ${tier.name}` });
      g.style.cursor = "pointer";

      /* 热区 */
      g.appendChild(mk("rect", { x: 0, y: y0, width: 500, height: y1 - y0, fill: "#fff", "fill-opacity": "0" }));

      /* 层编号（冰体内） */
      const num = mk("text", {
        x: CX, y: mid + 3.6, "text-anchor": "middle", "font-size": 10,
        "font-family": "monospace", fill: "#e6f7ff", "fill-opacity": .5,
        class: "ice-label", "pointer-events": "none"
      });
      num.textContent = String(tier.n).padStart(2, "0");
      g.appendChild(num);

      /* 右侧深度刻度 */
      const t = i / (N - 1);
      const deepest = tier.n >= 13;
      const lx = 492;
      const lab = mk("text", {
        x: lx, y: mid + 3, "text-anchor": "end", "font-size": 8.4,
        "font-family": "monospace", "letter-spacing": .6,
        fill: deepest ? "#c9c3e8" : "#a7cbe2",
        "fill-opacity": .55 + t * .35, "pointer-events": "none"
      });
      lab.textContent = tier.depth;
      g.appendChild(lab);

      g.appendChild(mk("line", {
        x1: CX + halfW(mid) + 4, y1: mid, x2: lx - 28, y2: mid,
        stroke: "#8fd0ee", "stroke-opacity": .10 + t * .18, "stroke-width": .7, "pointer-events": "none"
      }));

      g.appendChild(mk("title", {})).textContent = `Tier ${tier.n} · ${tier.name} · ${tier.sub}`;

      g.addEventListener("click", () => scrollToTier(tier.n));
      g.addEventListener("keydown", ev => {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); scrollToTier(tier.n); }
      });
      svg.appendChild(g);
    });

    /* 水面 */
    svg.appendChild(mk("path", {
      d: `M0,${WATER} C 70,${WATER - 4} 140,${WATER + 4} 210,${WATER} C 280,${WATER - 4} 350,${WATER + 4} 420,${WATER} L500,${WATER}`,
      fill: "none", stroke: "#9fe6ff", "stroke-opacity": .6, "stroke-width": 1.2
    }));

    const wlLabel = mk("text", { x: 6, y: WATER - 7, "font-size": 7, "font-family": "monospace", fill: "#79b2d2", "letter-spacing": 1.8 });
    wlLabel.textContent = "SEA LEVEL · 0 m";
    svg.appendChild(wlLabel);

    const cap = mk("text", { x: 6, y: 18, "font-size": 6.6, "font-family": "monospace", fill: "#5f86a6", "letter-spacing": 2.2 });
    cap.textContent = "SEL · ICEBERG MAP";
    svg.appendChild(cap);

    const cap2 = mk("text", { x: 6, y: 636, "font-size": 6.6, "font-family": "monospace", fill: "#5f86a6", "letter-spacing": 1.8 });
    cap2.textContent = "TIER 14 · EGO · ∞";
    svg.appendChild(cap2);
  })();

  /* ============ RAIL ============ */
  const rail = $("#rail");
  TIERS.forEach(t => {
    const a = el("a", "", `${String(t.n).padStart(2, "0")} ${t.name}`);
    a.href = `#tier-${t.n}`;
    a.dataset.tier = t.n;
    a.style.setProperty("--tierc", t.acc);
    a.addEventListener("click", e => { e.preventDefault(); scrollToTier(t.n); });
    rail.appendChild(a);
  });

  function scrollToTier(n) {
    const sec = document.getElementById(`tier-${n}`);
    if (!sec) return;
    if (sec.classList.contains("hidden")) { resetFilters(); }
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ============ FILTERS ============ */
  const catFilters = $("#catFilters");
  CATS.forEach(c => {
    const b = el("button", "chip");
    b.type = "button";
    b.style.setProperty("--chipc", c.color);
    b.innerHTML = `<span class="dot"></span>${esc(c.glyph)} ${esc(c.name)}`;
    b.dataset.cat = c.id;
    b.addEventListener("click", () => {
      state.cats.has(c.id) ? state.cats.delete(c.id) : state.cats.add(c.id);
      b.classList.toggle("on");
      apply();
    });
    catFilters.appendChild(b);
  });

  const srcFilters = $("#srcFilters");
  const SRC_HINT = {
    "官方": "官方设定、正片或官方出版物中出现",
    "半官方": "设定集、脚注、制作访谈、设定稿等官方外围材料",
    "社区": "粉丝社区/同人整理，无官方背书",
    "无来源": "没有任何可靠出处，请当作都市传说"
  };
  SOURCES.forEach(s => {
    const b = el("button", "chip", s);
    b.type = "button";
    b.title = SRC_HINT[s];
    b.style.setProperty("--chipc", SRC_COLOR[s]);
    b.dataset.src = s;
    b.addEventListener("click", () => {
      state.srcs.has(s) ? state.srcs.delete(s) : state.srcs.add(s);
      b.classList.toggle("on");
      apply();
    });
    srcFilters.appendChild(b);
  });

  function resetFilters() {
    state.q = "";
    state.cats.clear();
    state.srcs.clear();
    $("#search").value = "";
    $(".search").classList.remove("has-value");
    document.querySelectorAll(".chip.on").forEach(c => c.classList.remove("on"));
    apply();
  }
  $("#resetFilters").addEventListener("click", resetFilters);

  /* ============ BUILD CARDS ============ */
  const shaft = $("#shaft");
  const cardsByEntry = new Map();

  TIERS.forEach(tier => {
    const sec = el("section", "tier");
    sec.id = `tier-${tier.n}`;
    sec.dataset.tier = tier.n;
    sec.style.setProperty("--tierc", tier.acc);

    const head = el("div", "tier-head");
    head.innerHTML = `
      <div class="tier-num">${String(tier.n).padStart(2, "0")}</div>
      <div class="tier-title-wrap">
        <h2 class="tier-name">Tier ${tier.n} · ${esc(tier.name)}</h2>
        <p class="tier-sub">${esc(tier.sub)}</p>
      </div>
      <div class="tier-meta"><b data-count>0</b><span>条 · ${esc(tier.depth)}</span></div>`;
    sec.appendChild(head);

    const grid = el("div", "cards");
    sec.appendChild(grid);

    const items = entries.filter(e => e.tier === tier.n);
    items.forEach(e => grid.appendChild(makeCard(e)));
    sec.dataset.total = items.length;
    shaft.appendChild(sec);
  });

  function makeCard(e) {
    const cat = catById[e.c] || { name: e.c, glyph: "·", color: "#7fe3ff" };
    const card = el("div", "card");
    card.dataset.id = e.id;
    card.dataset.tier = e.tier;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${e.t}：${e.d.slice(0, 40)}`);
    card.style.setProperty("--catc", cat.color);
    card.innerHTML = `
      <div class="card-top">
        <span class="badge cat">${esc(cat.glyph)} ${esc(cat.name)}</span>
        <span class="badge src" data-s="${esc(e.s)}">${esc(e.s)}</span>
      </div>
      <h3 class="card-title">${esc(e.t)}</h3>
      <p class="card-desc">${esc(e.d)}</p>
      <div class="card-foot">
        <span>${e.e.length} LINK${e.e.length > 1 ? "S" : ""}</span>
        <span class="links">${e.e.map(() => "<i></i>").join("")}</span>
      </div>`;
    card.addEventListener("click", () => openEntry(e.id));
    card.addEventListener("keydown", ev => {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); openEntry(e.id); }
    });
    cardsByEntry.set(e.id, card);
    return card;
  }

  /* ============ APPLY FILTER ============ */
  function matches(e) {
    if (state.cats.size && !state.cats.has(e.c)) return false;
    if (state.srcs.size && !state.srcs.has(e.s)) return false;
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    const hay = [e.t, e.d, e.s, (catById[e.c] || {}).name, tierByN[e.tier].name, tierByN[e.tier].sub].join(" ").toLowerCase();
    return q.split(/\s+/).every(tok => hay.includes(tok));
  }

  function apply() {
    let visible = 0;
    const flat = [];
    TIERS.forEach(tier => {
      const sec = document.getElementById(`tier-${tier.n}`);
      const grid = sec.querySelector(".cards");
      const items = entries.filter(e => e.tier === tier.n);
      let shown = 0;
      items.forEach(e => {
        const ok = matches(e);
        const card = cardsByEntry.get(e.id);
        card.style.display = ok ? "" : "none";
        if (ok) { shown++; flat.push(e); }
        if (ok) highlight(card, e);
      });
      // 空态
      let empty = grid.querySelector(".card.empty");
      if (!shown) {
        if (!empty) { empty = el("div", "card empty", "NO ENTRY · 此层没有匹配词条"); grid.appendChild(empty); }
        empty.style.display = "";
      } else if (empty) empty.style.display = "none";

      const cnt = sec.querySelector("[data-count]");
      if (cnt) cnt.textContent = state.cats.size || state.srcs.size || state.q ? shown : items.length;
      sec.querySelector(".tier-meta span").textContent =
        (state.cats.size || state.srcs.size || state.q) ? `条（共 ${items.length}） · ${tier.depth}` : `条 · ${tier.depth}`;

      sec.classList.toggle("hidden", shown === 0);
      visible += shown;
    });
    state.list = flat;
    $("#statusText").innerHTML = state.q || state.cats.size || state.srcs.size
      ? `筛选出 <b>${visible}</b> / ${entries.length} 条词条`
      : `全部 <b>${entries.length}</b> 条词条 · 点击任意卡片查看解释与证据链接`;
  }

  function highlight(card, e) {
    const title = card.querySelector(".card-title");
    const q = state.q.trim();
    if (!q) { title.textContent = e.t; return; }
    const idx = e.t.toLowerCase().indexOf(q.toLowerCase());
    if (idx < 0) { title.textContent = e.t; return; }
    title.innerHTML = esc(e.t.slice(0, idx)) + "<mark>" + esc(e.t.slice(idx, idx + q.length)) + "</mark>" + esc(e.t.slice(idx + q.length));
  }

  /* ============ SEARCH ============ */
  const searchInput = $("#search");
  const searchWrap = $(".search");
  let tId;
  searchInput.addEventListener("input", () => {
    searchWrap.classList.toggle("has-value", !!searchInput.value);
    clearTimeout(tId);
    tId = setTimeout(() => { state.q = searchInput.value; apply(); }, 110);
  });
  $("#searchClear").addEventListener("click", () => {
    searchInput.value = ""; searchWrap.classList.remove("has-value");
    state.q = ""; apply(); searchInput.focus();
  });

  /* ============ DRAWER ============ */
  const drawer = $("#drawer");
  const backdrop = $("#backdrop");
  const dTitle = $("#drawerTitle");
  const dSub = $("#drawerSub");
  const dBadges = $("#drawerBadges");
  const dDesc = $("#drawerDesc");
  const dLinks = $("#drawerLinks");
  const dNote = $("#drawerSrcNote");
  const dFoot = $("#drawerFoot");

  const SRC_NOTE = {
    "官方": "官方设定 / 官方出版物中出现的内容，可信度最高。",
    "半官方": "出现在设定集、脚注、制作访谈或设定稿中，属于官方外围材料。",
    "社区": "来自粉丝社区、同人整理或旧网站，很可能准确，但没有官方背书。",
    "无来源": "没有任何可靠出处，多为社区流传的说法。请当作都市传说阅读，不要当作设定。"
  };

  function hostOf(url) {
    try { return new URL(url).host; } catch { return ""; }
  }

  function openEntry(id) {
    const e = entries.find(x => x.id === id);
    if (!e) return;
    state.current = id;
    const cat = catById[e.c] || { name: e.c, glyph: "·", color: "#7fe3ff" };
    const tier = tierByN[e.tier];

    dBadges.innerHTML = `
      <span class="badge cat" style="--catc:${cat.color}">${esc(cat.glyph)} ${esc(cat.name)}</span>
      <span class="badge src" data-s="${esc(e.s)}">${esc(e.s)}</span>
      <span class="badge" style="color:${tier.acc}">T${String(e.tier).padStart(2, "0")} ${esc(tier.name)}</span>`;
    dTitle.textContent = e.t;
    dSub.textContent = `${tier.sub} · 深度 ${tier.depth} · ${e.e.length} 条证据链接`;
    dDesc.textContent = e.d;

    dLinks.innerHTML = e.e.map(([label, url], i) => `
      <li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <span class="txt">${esc(label)}<span class="host">${esc(hostOf(url))}</span></span>
      </a></li>`).join("");

    dNote.textContent = SRC_NOTE[e.s] || "";
    dNote.className = "drawer-source-note" + (e.s === "无来源" ? " warn" : "");

    const list = state.list.length ? state.list : entries;
    const pos = list.findIndex(x => x.id === id);
    dFoot.innerHTML = `
      <div class="drawer-nav">
        <button type="button" id="prevEntry" ${pos <= 0 ? "disabled" : ""}>← 上一条</button>
        <button type="button" id="nextEntry" ${pos < 0 || pos >= list.length - 1 ? "disabled" : ""}>下一条 →</button>
      </div>
      <span>${pos >= 0 ? `${pos + 1} / ${list.length}` : ""}</span>`;
    $("#prevEntry")?.addEventListener("click", () => list[pos - 1] && openEntry(list[pos - 1].id));
    $("#nextEntry")?.addEventListener("click", () => list[pos + 1] && openEntry(list[pos + 1].id));

    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", `#${id}`);
    drawer.querySelector(".drawer-body").scrollTop = 0;
    $("#drawerClose").focus({ preventScroll: true });
  }

  function closeEntry() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    document.body.style.overflow = "";
    state.current = null;
    if (location.hash.startsWith("#e")) history.replaceState(null, "", location.pathname + location.search);
  }

  $("#drawerClose").addEventListener("click", closeEntry);
  backdrop.addEventListener("click", closeEntry);

  document.addEventListener("keydown", ev => {
    if (ev.key === "Escape") {
      if (drawer.classList.contains("open")) closeEntry();
      else if (document.activeElement === searchInput) { searchInput.blur(); }
    }
    if (ev.key === "/" && document.activeElement !== searchInput && !drawer.classList.contains("open")) {
      ev.preventDefault(); searchInput.focus(); searchInput.select();
    }
    if (drawer.classList.contains("open") && (ev.key === "ArrowRight" || ev.key === "ArrowLeft")) {
      const btn = ev.key === "ArrowRight" ? $("#nextEntry") : $("#prevEntry");
      if (btn && !btn.disabled) btn.click();
    }
  });

  /* ============ RANDOM ============ */
  $("#randomBtn").addEventListener("click", () => {
    const pool = state.list.length ? state.list : entries;
    // 越深权重越高：让它更容易把你拽到冷门区
    const weighted = [];
    pool.forEach(e => { const w = 1 + e.tier * 1.6; for (let i = 0; i < w; i++) weighted.push(e); });
    const pick = weighted[Math.floor(Math.random() * weighted.length)];
    openEntry(pick.id);
  });

  /* ============ ACTIVE TIER ============ */
  const railLinks = [...rail.querySelectorAll("a")];
  const io = new IntersectionObserver(es => {
    es.forEach(en => {
      if (en.isIntersecting) {
        const n = en.target.dataset.tier;
        railLinks.forEach(a => a.classList.toggle("active", a.dataset.tier === n));
      }
    });
  }, { rootMargin: "-120px 0px -62% 0px", threshold: 0 });
  TIERS.forEach(t => {
    const sec = document.getElementById(`tier-${t.n}`);
    if (sec) io.observe(sec);
  });

  /* ============ BOOT ============ */
  apply();

  /* 显示一条示例词条，让人一眼看到「词条 + 解释 + 证据链接」长什么样 */
  (function ctaPreview() {
    const link = document.createElement("button");
    link.type = "button";
    link.className = "ghost-link";
    link.textContent = "先看一条示例 →";
    link.addEventListener("click", () => openEntry("e1-0"));
    $(".hero-cta").appendChild(link);
  })();

  const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (hash.startsWith("e")) {
    openEntry(hash);
  } else if (hash.startsWith("tier-")) {
    setTimeout(() => scrollToTier(Number(hash.split("-")[1])), 240);
  }

  window.addEventListener("hashchange", () => {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (h.startsWith("e") && h !== state.current) openEntry(h);
  });
})();
