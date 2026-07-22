import { css as S, LitElement as z, nothing as n, html as o } from "lit";
import { property as L, state as k } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { styleMap as U } from "lit/directives/style-map.js";
import { n as C, l as v, f as _, e as $, c as I, k as E, h as F, d as R, t as i, g as j, s as N, i as P, r as B, a as M, b as O } from "./registerSalla-Dct4KN_E.js";
import { r as T } from "./commerceOutcome-B3T0_-WJ.js";
const q = S`
  .vvh-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .vvh-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.55rem;
  }

  .vvh-stat {
    padding: 0.85rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    display: grid;
    gap: 0.2rem;
    min-width: 0;
  }

  .vvh-stat__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-stat__value {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .vvh-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .vvh-filter {
    min-height: 36px;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
  }

  .vvh-filter.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-layout {
    display: grid;
    gap: 1.1rem;
    align-items: start;
  }

  @media (min-width: 900px) {
    .vvh-layout--vertical {
      grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    }
  }

  .vvh-card {
    padding: 1rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .vvh-track {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .vvh-layout--horizontal .vvh-track {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.65rem;
    padding-bottom: 0.2rem;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .vvh-layout--horizontal .vvh-track::-webkit-scrollbar {
    display: none;
  }

  .vvh-item {
    position: relative;
  }

  .vvh-layout--horizontal .vvh-item {
    flex: 0 0 auto;
    width: min(220px, 72vw);
    scroll-snap-align: start;
  }

  .vvh-trigger {
    width: 100%;
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 0.75rem;
    align-items: center;
    padding: 0.85rem 0.9rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .vvh-layout--horizontal .vvh-trigger {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    min-height: 148px;
    align-content: center;
  }

  .vvh-trigger.is-active,
  .vvh-trigger:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  .vvh-trigger__index {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .vvh-trigger__body {
    display: grid;
    gap: 0.22rem;
    min-width: 0;
  }

  .vvh-layout--horizontal .vvh-trigger__body {
    justify-items: center;
  }

  .vvh-trigger__date {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .vvh-trigger__title {
    font-size: 0.92rem;
    font-weight: 900;
    line-height: 1.35;
  }

  .vvh-trigger__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    align-items: center;
  }

  .vvh-layout--horizontal .vvh-trigger__meta {
    justify-content: center;
  }

  .vvh-chip {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-chip--accent {
    color: var(--accent-color, var(--fs-store-primary));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
  }

  .vvh-detail {
    display: grid;
    gap: 0.85rem;
    padding: 1.15rem 1.15rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    align-content: start;
  }

  .vvh-detail__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .vvh-detail__kicker {
    margin: 0 0 0.2rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__title {
    margin: 0;
    font-size: 1.12rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .vvh-detail__nav {
    display: inline-flex;
    gap: 0.35rem;
    flex: 0 0 auto;
  }

  .vvh-nav-btn {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .vvh-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__meta {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
  }

  .vvh-detail__note {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .vvh-detail__media img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .vvh-next {
    display: grid;
    gap: 0.2rem;
    padding: 0.75rem 0.85rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .vvh-next__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-next__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .vvh-empty {
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: var(--muted-color, #64748b);
    font-size: 0.9rem;
  }

  @media (max-width: 899px) {
    .vvh-shell {
      gap: 0.85rem;
    }

    .vvh-stats {
      grid-template-columns: 1fr;
    }

    .vvh-filters {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.15rem;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .vvh-filters::-webkit-scrollbar {
      display: none;
    }

    .vvh-filter {
      flex: 0 0 auto;
      min-height: 40px;
    }

    .vvh-card {
      padding: 0.75rem;
    }

    .vvh-trigger {
      min-height: 64px;
      padding: 0.75rem 0.8rem;
    }

    .vvh-detail {
      padding: 1rem 0.95rem 1.1rem;
    }

    .vvh-detail__head {
      flex-wrap: wrap;
    }

    .vvh-nav-btn {
      width: 40px;
      height: 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vvh-trigger,
    .vvh-nav-btn {
      transition: none !important;
    }
  }
`;
function A(s) {
  return j(s, "vertical").toLowerCase() === "horizontal" ? "horizontal" : "vertical";
}
function D(s) {
  return R(s.vvh_show_stats, !0);
}
function H(s) {
  const e = C(s).map((t, a) => {
    const l = v(t.title);
    if (!l) return null;
    const c = v(t.tag) || v(t.type) || v(t.service_type);
    return {
      id: String(t.id ?? "").trim() || E(l, "") || `event-${a + 1}`,
      date: v(t.date) || String(t.date ?? "").trim(),
      km: _(t.km, 0),
      title: l,
      category: c,
      image: I(t.image),
      note: v(t.note),
      documentUrl: $(t.document_url) || $(t.document),
      nextService: v(t.next_service),
      order: _(t.order, a + 1)
    };
  }).filter((t) => !!t), r = F(e, "order");
  return r.length ? r : J();
}
function J() {
  return [
    {
      id: "oil",
      title: i("تغيير الزيت", "Oil change"),
      date: i("مارس 2025", "Mar 2025"),
      km: 45e3,
      category: i("محرك", "Engine"),
      image: "",
      note: i("زيت تخليقي 5W-30 مع فلتر جديد.", "Synthetic 5W-30 oil with a new filter."),
      documentUrl: "",
      nextService: i("50,000 كم", "50,000 km"),
      order: 1
    },
    {
      id: "battery",
      title: i("تبديل البطارية", "Battery replacement"),
      date: i("يناير 2025", "Jan 2025"),
      km: 42e3,
      category: i("كهرباء", "Electrical"),
      image: "",
      note: i("بطارية 70 أمبير مع ضمان سنتين.", "70Ah battery with 2-year warranty."),
      documentUrl: "",
      nextService: "",
      order: 2
    },
    {
      id: "brakes",
      title: i("فحص الفرامل", "Brake inspection"),
      date: i("نوفمبر 2024", "Nov 2024"),
      km: 38e3,
      category: i("فرامل", "Brakes"),
      image: "",
      note: i("فحمات عند 60% — لا حاجة للاستبدال الآن.", "Pads at 60% — no replacement needed yet."),
      documentUrl: "",
      nextService: i("45,000 كم", "45,000 km"),
      order: 3
    },
    {
      id: "tires",
      title: i("تغيير الإطارات", "Tire change"),
      date: i("سبتمبر 2024", "Sep 2024"),
      km: 35e3,
      category: i("إطارات", "Tires"),
      image: "",
      note: i("أربعة إطارات صيفية جديدة.", "Four new summer tires."),
      documentUrl: "",
      nextService: i("تدوير عند 40,000 كم", "Rotate at 40,000 km"),
      order: 4
    },
    {
      id: "service",
      title: i("الصيانة الدورية", "Routine service"),
      date: i("يونيو 2024", "Jun 2024"),
      km: 3e4,
      category: i("دورية", "Routine"),
      image: "",
      note: i("فحص شامل مع استبدال الفلاتر.", "Full inspection with filter replacement."),
      documentUrl: "",
      nextService: i("35,000 كم", "35,000 km"),
      order: 5
    }
  ];
}
function u(s, e) {
  if (!s) return "";
  const r = s.toLocaleString();
  return e ? `${r} ${e}` : r;
}
function m(s, e, r, t) {
  return v(s[e]) || i(r, t);
}
function W(s) {
  return s[0] ?? null;
}
function K(s) {
  for (const e of s)
    if (e.nextService.trim()) return e.nextService.trim();
  return "";
}
function G(s) {
  const e = /* @__PURE__ */ new Set(), r = [];
  for (const t of s) {
    const a = t.category.trim();
    !a || e.has(a) || (e.add(a), r.push(a));
  }
  return r;
}
var Q = Object.defineProperty, b = (s, e, r, t) => {
  for (var a = void 0, l = s.length - 1, c; l >= 0; l--)
    (c = s[l]) && (a = c(e, r, a) || a);
  return a && Q(e, r, a), a;
};
const x = class x extends z {
  constructor() {
    super(...arguments), this.config = {}, this.selectedId = "", this.filter = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var r;
    if (e.has("config")) {
      const t = this.events;
      this.filter = "", this.selectedId = ((r = t[0]) == null ? void 0 : r.id) ?? "";
    }
  }
  get events() {
    var e;
    return H((e = this.config) == null ? void 0 : e.vvh_events);
  }
  get filtered() {
    return this.filter ? this.events.filter((e) => e.category === this.filter) : this.events;
  }
  get selected() {
    const e = this.filtered;
    return e.find((r) => r.id === this.selectedId) ?? e[0] ?? null;
  }
  select(e) {
    this.selectedId = e, this.updateComplete.then(() => {
      var t;
      const r = (t = this.renderRoot) == null ? void 0 : t.querySelector(".vvh-trigger.is-active");
      r == null || r.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }
  setFilter(e) {
    var t;
    this.filter = e;
    const r = e ? this.events.filter((a) => a.category === e) : this.events;
    this.selectedId = ((t = r[0]) == null ? void 0 : t.id) ?? "";
  }
  shift(e) {
    const r = this.filtered;
    if (!r.length) return;
    const a = (Math.max(0, r.findIndex((l) => {
      var c;
      return l.id === ((c = this.selected) == null ? void 0 : c.id);
    })) + e + r.length) % r.length;
    this.select(r[a].id);
  }
  renderStats(e) {
    if (!D(this.config || {}) || !e.length) return n;
    const r = m(this.config || {}, "vvh_unit_label", "كم", "km"), t = W(e), a = K(e);
    return o`
      <div class="vvh-stats" role="group" aria-label=${i("ملخص السجل", "Log summary")}>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${i("عدد السجلات", "Records")}</p>
          <p class="vvh-stat__value">${e.length}</p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${i("آخر خدمة", "Latest service")}</p>
          <p class="vvh-stat__value">
            ${(t == null ? void 0 : t.title) || "—"}
            ${t != null && t.km ? o` · ${u(t.km, r)}` : n}
          </p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${m(this.config || {}, "vvh_next_label", "الصيانة القادمة", "Next service")}</p>
          <p class="vvh-stat__value">${a || i("غير محددة", "Not set")}</p>
        </div>
      </div>
    `;
  }
  renderFilters(e) {
    const r = G(e);
    return r.length < 2 ? n : o`
      <div class="vvh-filters" role="toolbar" aria-label=${i("تصفية حسب النوع", "Filter by type")}>
        <button
          type="button"
          class=${f({ "vvh-filter": !0, "is-active": !this.filter })}
          @click=${() => this.setFilter("")}
        >
          ${i("الكل", "All")}
        </button>
        ${r.map(
      (t) => o`<button
            type="button"
            class=${f({ "vvh-filter": !0, "is-active": this.filter === t })}
            @click=${() => this.setFilter(t)}
          >
            ${t}
          </button>`
    )}
      </div>
    `;
  }
  renderDetail(e, r) {
    if (!e)
      return o`<div class="vvh-detail">
        <p class="vvh-empty">${i("اختر سجلًا من الخط الزمني لعرض التفاصيل.", "Pick a log entry to see details.")}</p>
      </div>`;
    const t = this.config || {}, a = m(t, "vvh_unit_label", "كم", "km"), l = m(t, "vvh_next_label", "الصيانة القادمة", "Next service"), c = r.findIndex((g) => g.id === e.id);
    return o`
      <div class="vvh-detail" role="region" aria-live="polite">
        <div class="vvh-detail__head">
          <div>
            <p class="vvh-detail__kicker">
              ${i("تفاصيل السجل", "Log details")}
              ${c >= 0 ? ` · ${c + 1}/${r.length}` : ""}
            </p>
            <h3 class="vvh-detail__title">${e.title}</h3>
          </div>
          ${r.length > 1 ? o`<div class="vvh-detail__nav" dir="ltr">
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${i("السابق", "Previous")}
                  @click=${() => this.shift(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${i("التالي", "Next")}
                  @click=${() => this.shift(1)}
                >
                  ›
                </button>
              </div>` : n}
        </div>

        <p class="vvh-detail__meta">
          ${e.date || n}
          ${e.date && e.km ? " · " : n}
          ${e.km ? u(e.km, a) : n}
          ${e.category ? o` · <span class="vvh-chip vvh-chip--accent">${e.category}</span>` : n}
        </p>

        ${e.image ? o`<div class="vvh-detail__media">
              <img src=${e.image} alt="" loading="lazy" decoding="async" />
            </div>` : n}

        ${e.note ? o`<p class="vvh-detail__note">${e.note}</p>` : n}

        ${e.nextService ? o`<div class="vvh-next" role="note">
              <span class="vvh-next__label">${l}</span>
              <p class="vvh-next__text">${e.nextService}</p>
            </div>` : n}

        ${e.documentUrl ? o`<a
              class="fs-btn fs-btn--ghost fs-tap"
              href=${e.documentUrl}
              target="_blank"
              rel=${P(e.documentUrl) ? "noopener noreferrer" : n}
            >
              ${i("عرض المستند", "View document")}
            </a>` : n}
      </div>
    `;
  }
  renderProducts(e) {
    return T(this.config || {}, "vvh_", {
      ready: !!e
    });
  }
  render() {
    const e = this.config || {}, r = B(e, "vvh_"), t = this.events, a = this.filtered, l = A(e.vvh_layout), c = m(e, "vvh_unit_label", "كم", "km"), g = v(e.vvh_title) || i("سجل صيانة السيارة", "Vehicle maintenance log"), y = v(e.vvh_desc) || i(
      "راجع خدمات سيارتك السابقة، وتصفّح القطع المناسبة لكل سجل صيانة.",
      "Review past vehicle services and browse matching parts for each log entry."
    ), h = this.selected;
    return o`
      <section
        class="fs-section"
        style=${U(M(r))}
        aria-label=${g}
      >
        <div class="fs-container">
          <div class="vvh-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${i("دفتر الصيانة", "Service logbook")}</p>
              ${g ? o`<h2 class="fs-title">${g}</h2>` : n}
              ${y ? o`<p class="fs-desc">${y}</p>` : n}
            </div>

            ${this.renderStats(t)}
            ${this.renderFilters(t)}

            <div
              class=${f({
      "vvh-layout": !0,
      "vvh-layout--vertical": l === "vertical",
      "vvh-layout--horizontal": l === "horizontal"
    })}
            >
              <div class="vvh-card">
                <div class="vvh-track" role="list">
                  ${a.length ? a.map(
      (d, w) => o`
                          <div class="vvh-item" role="listitem">
                            <button
                              type="button"
                              class=${f({
        "vvh-trigger": !0,
        "is-active": d.id === (h == null ? void 0 : h.id)
      })}
                              aria-pressed=${d.id === (h == null ? void 0 : h.id) ? "true" : "false"}
                              @click=${() => this.select(d.id)}
                            >
                              <span class="vvh-trigger__index">${String(w + 1).padStart(2, "0")}</span>
                              <span class="vvh-trigger__body">
                                ${d.date ? o`<span class="vvh-trigger__date">${d.date}</span>` : n}
                                <span class="vvh-trigger__title">${d.title}</span>
                                <span class="vvh-trigger__meta">
                                  ${d.category ? o`<span class="vvh-chip">${d.category}</span>` : n}
                                  ${d.km ? o`<span class="vvh-chip vvh-chip--accent"
                                        >${u(d.km, c)}</span
                                      >` : n}
                                </span>
                              </span>
                            </button>
                          </div>
                        `
    ) : o`<p class="vvh-empty">${i("لا توجد سجلات في هذا التصنيف.", "No records in this filter.")}</p>`}
                </div>
              </div>

              ${this.renderDetail(h, a)}
            </div>

            ${this.renderProducts(h)}
          </div>
        </div>
      </section>
    `;
  }
};
x.styles = [N, q];
let p = x;
b([
  L({ type: Object })
], p.prototype, "config");
b([
  k()
], p.prototype, "selectedId");
b([
  k()
], p.prototype, "filter");
O(
  p
);
typeof p < "u" && p.registerSallaComponent("salla-visual-vehicle-history");
export {
  p as default
};
