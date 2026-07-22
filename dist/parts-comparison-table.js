import { css as $, LitElement as x, nothing as d, html as l } from "lit";
import { property as w } from "lit/decorators.js";
import { classMap as m } from "lit/directives/class-map.js";
import { styleMap as g } from "lit/directives/style-map.js";
import { n as y, l as s, d as _, t as a, g as k, s as C, r as S, a as L, b as q } from "./registerSalla-Dct4KN_E.js";
import { r as E } from "./commerceOutcome-B3T0_-WJ.js";
const z = $`
  .pct-shell {
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(30, 41, 59, 0.08);
  }

  .pct-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .pct-table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    font-size: 0.88rem;
  }

  .pct-table th,
  .pct-table td {
    padding: 0.85rem 0.75rem;
    border-bottom: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 80%, transparent);
    text-align: start;
    vertical-align: top;
  }

  .pct-table thead th {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, var(--card-bg, #fff));
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-table tbody th {
    width: 28%;
    font-weight: 700;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 25%, var(--card-bg, #fff));
  }

  .pct-col-head {
    display: grid;
    gap: 0.35rem;
    justify-items: start;
  }

  .pct-col-head__name {
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-col-head.is-highlight {
    position: relative;
  }

  .pct-col-head.is-highlight::before {
    content: '';
    position: absolute;
    inset: -0.85rem -0.75rem auto;
    height: 3px;
    background: var(--col-color, var(--accent-color, var(--fs-store-primary)));
    border-radius: 0 0 4px 4px;
  }

  .pct-badge {
    display: inline-flex;
    align-items: center;
    min-height: 1.5rem;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 14%, #fff);
    color: var(--col-color, var(--accent-color, var(--fs-store-primary)));
  }

  .pct-cell.is-highlight {
    background: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 6%, var(--card-bg, #fff));
    font-weight: 650;
  }

  .pct-cards {
    display: grid;
    gap: 0.85rem;
    padding: 1rem;
  }

  .pct-card {
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    padding: 1rem;
    background: var(--card-bg, #fff);
  }

  .pct-card.is-highlight {
    border-color: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 22%, transparent);
  }

  .pct-card__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.75rem;
  }

  .pct-card__name {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-card__rows {
    display: grid;
    gap: 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pct-card__row {
    display: grid;
    grid-template-columns: minmax(7rem, 38%) 1fr;
    gap: 0.5rem;
    font-size: 0.86rem;
    line-height: 1.5;
  }

  .pct-card__row dt {
    margin: 0;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .pct-card__row dd {
    margin: 0;
    color: var(--text-color, #111827);
  }

  .pct-scroll {
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding: 1rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .pct-scroll .pct-card {
    flex: 0 0 min(88vw, 320px);
    scroll-snap-align: start;
  }

  .pct-shell--table .pct-cards--stack {
    display: none;
  }

  .pct-shell--cards .pct-table-wrap {
    display: none;
  }

  @media (max-width: 639px) {
    .pct-shell--table .pct-table-wrap {
      display: none;
    }

    .pct-shell--table .pct-cards--stack {
      display: none;
    }

    .pct-shell--table .pct-scroll,
    .pct-shell--cards .pct-scroll {
      display: flex;
    }

    .pct-shell--cards .pct-cards--stack {
      display: none;
    }
  }

  @media (min-width: 640px) {
    .pct-scroll {
      display: none;
    }

    .pct-shell--cards .pct-cards--stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pct-table,
    .pct-card {
      transition: none !important;
    }
  }
`, b = [
  "quality",
  "lifespan",
  "warranty",
  "performance",
  "price",
  "usage"
], h = {
  quality: { ar: "الجودة", en: "Quality" },
  lifespan: { ar: "العمر الافتراضي", en: "Lifespan" },
  warranty: { ar: "الضمان", en: "Warranty" },
  performance: { ar: "الأداء", en: "Performance" },
  price: { ar: "السعر", en: "Price" },
  usage: { ar: "الاستخدام المناسب", en: "Best usage" }
};
function M(i) {
  return k(i, "table").toLowerCase() === "cards" ? "cards" : "table";
}
function R(i) {
  const r = y(i).map((e, t) => {
    const c = s(e.name);
    return {
      id: String(e.id ?? "").trim() || `type-${t + 1}`,
      name: c,
      badge: s(e.badge),
      quality: s(e.quality),
      lifespan: s(e.lifespan),
      warranty: s(e.warranty),
      performance: s(e.performance),
      price: s(e.price),
      usage: s(e.usage),
      highlight: _(e.highlight, !1),
      color: String(e.color ?? "").trim()
    };
  }).filter((e) => e.name);
  return r.length ? r : H();
}
function H() {
  return [
    {
      id: "oem",
      name: a("أصلي", "OEM / Original"),
      badge: a("موصى به", "Recommended"),
      quality: a("عالية جدًا", "Very high"),
      lifespan: a("طويل", "Long"),
      warranty: a("12–24 شهر", "12–24 months"),
      performance: a("مطابق للمصنع", "Factory match"),
      price: a("$$$", "$$$"),
      usage: a("سيارات جديدة والصيانة الدورية", "New cars & scheduled service"),
      highlight: !0,
      color: "#ea580c"
    },
    {
      id: "premium-alt",
      name: a("بديل عالي الجودة", "Premium aftermarket"),
      badge: a("قيمة ممتازة", "Great value"),
      quality: a("عالية", "High"),
      lifespan: a("طويل", "Long"),
      warranty: a("12 شهر", "12 months"),
      performance: a("قريب من الأصلي", "Near OEM"),
      price: a("$$", "$$"),
      usage: a("استبدال يومي بجودة موثوقة", "Daily replacement with trusted quality"),
      highlight: !1,
      color: "#2563eb"
    },
    {
      id: "commercial",
      name: a("تجاري", "Commercial"),
      badge: a("اقتصادي", "Budget"),
      quality: a("متوسطة", "Medium"),
      lifespan: a("متوسط", "Medium"),
      warranty: a("3–6 أشهر", "3–6 months"),
      performance: a("كافٍ للاستخدام العادي", "Adequate for normal use"),
      price: a("$", "$"),
      usage: a("سيارات قديمة أو استخدام محدود", "Older cars or limited use"),
      highlight: !1,
      color: "#64748b"
    },
    {
      id: "refurb",
      name: a("مجدد", "Refurbished"),
      badge: a("إعادة تأهيل", "Refurb"),
      quality: a("متغيرة", "Varies"),
      lifespan: a("قصير–متوسط", "Short–medium"),
      warranty: a("3–12 شهر", "3–12 months"),
      performance: a("يعتمد على حالة القطعة", "Depends on unit condition"),
      price: a("$–$$", "$–$$"),
      usage: a("عند توفر ميزانية محدودة", "When budget is tight"),
      highlight: !1,
      color: "#7c3aed"
    }
  ];
}
function O(i) {
  const r = y(i).map((e) => {
    const t = String(e.key ?? e.criteria ?? "").trim(), c = s(e.label) || s(e.name);
    return { key: t, label: c };
  }).filter((e) => b.includes(e.key) && !!e.label);
  if (r.length) {
    const e = new Map(r.map((t) => [t.key, t.label]));
    return b.map((t) => ({
      key: t,
      label: e.get(t) || a(h[t].ar, h[t].en)
    }));
  }
  return b.map((e) => ({
    key: e,
    label: a(h[e].ar, h[e].en)
  }));
}
function v(i, r) {
  return i[r] || "—";
}
var T = Object.defineProperty, A = (i, r, e, t) => {
  for (var c = void 0, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (c = n(r, e, c) || c);
  return c && T(r, e, c), c;
};
const f = class f extends x {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  renderColumnHead(r) {
    const e = r.color ? { "--col-color": r.color } : {};
    return l`
      <div
        class=${m({ "pct-col-head": !0, "is-highlight": r.highlight })}
        style=${g(e)}
      >
        <span class="pct-col-head__name">${r.name}</span>
        ${r.badge ? l`<span class="pct-badge">${r.badge}</span>` : d}
      </div>
    `;
  }
  renderTable(r, e) {
    return l`
      <div class="pct-table-wrap" role="region" aria-label=${a("جدول المقارنة", "Comparison table")}>
        <table class="pct-table">
          <thead>
            <tr>
              <th scope="col">${a("المعيار", "Criteria")}</th>
              ${r.map(
      (t) => l`
                  <th scope="col" style=${g(t.color ? { "--col-color": t.color } : {})}>
                    ${this.renderColumnHead(t)}
                  </th>
                `
    )}
            </tr>
          </thead>
          <tbody>
            ${e.map(
      (t) => l`
                <tr>
                  <th scope="row">${t.label}</th>
                  ${r.map(
        (c) => l`
                      <td
                        class=${m({ "pct-cell": !0, "is-highlight": c.highlight })}
                        style=${g(c.color ? { "--col-color": c.color } : {})}
                      >
                        ${v(c, t.key)}
                      </td>
                    `
      )}
                </tr>
              `
    )}
          </tbody>
        </table>
      </div>
    `;
  }
  renderCard(r, e) {
    const t = r.color ? { "--col-color": r.color } : {};
    return l`
      <article
        class=${m({ "pct-card": !0, "is-highlight": r.highlight })}
        style=${g(t)}
        aria-label=${r.name}
      >
        <div class="pct-card__head">
          <h3 class="pct-card__name">${r.name}</h3>
          ${r.badge ? l`<span class="pct-badge">${r.badge}</span>` : d}
        </div>
        <dl class="pct-card__rows">
          ${e.map(
      (c) => l`
              <div class="pct-card__row">
                <dt>${c.label}</dt>
                <dd>${v(r, c.key)}</dd>
              </div>
            `
    )}
        </dl>
      </article>
    `;
  }
  renderCards(r, e, t) {
    return l`
      <div class=${m({ "pct-cards": !0, ["pct-cards--stack"]: !0 })} role="list">
        ${r.map((o) => this.renderCard(o, e))}
      </div>
      <div class="pct-scroll" role="list" aria-label=${a("تمرير أفقي للمقارنة", "Horizontal comparison scroll")}>
        ${r.map((o) => this.renderCard(o, e))}
      </div>
    `;
  }
  render() {
    const r = this.config || {}, e = S(r, "pct_"), t = R(r.pct_types), c = O(r.pct_rows), o = M(r.pct_layout), n = s(r.pct_title), u = s(r.pct_desc);
    return l`
      <section
        class="fs-section"
        style=${g(L(e))}
        aria-label=${n || a("مقارنة أنواع القطع", "Parts type comparison")}
      >
        <div class="fs-container">
          ${n || u ? l`<div class="fs-hero">
                ${n ? l`<h2 class="fs-title">${n}</h2>` : d}
                ${u ? l`<p class="fs-desc">${u}</p>` : d}
              </div>` : d}

          <div class=${m({ "pct-shell": !0, "pct-shell--table": o === "table", "pct-shell--cards": o === "cards" })}>
            ${o === "table" ? this.renderTable(t, c) : d}
            ${this.renderCards(t, c, o)}
          </div>
          ${E(r, "pct_", { ready: t.length > 0 })}
        </div>
      </section>
    `;
  }
};
f.styles = [C, z];
let p = f;
A([
  w({ type: Object })
], p.prototype, "config");
q(p);
typeof p < "u" && p.registerSallaComponent("salla-parts-comparison-table");
export {
  p as default
};
