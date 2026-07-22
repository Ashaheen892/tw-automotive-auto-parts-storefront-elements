import { css as x, LitElement as k, nothing as t, html as n } from "lit";
import { property as y, state as $ } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { styleMap as w } from "lit/directives/style-map.js";
import { n as C, l as o, e as S, c as z, g as T, t as e, s as B, i as L, r as A, a as P, b as I } from "./registerSalla-Dct4KN_E.js";
import { r as E } from "./commerceOutcome-B3T0_-WJ.js";
const H = x`
  .dcg-shell {
    display: grid;
    gap: 1.25rem;
  }

  /* —— Tabs —— */
  .dcg-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .dcg-tab {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 42px;
    padding: 0.45rem 0.95rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;
  }

  .dcg-tab__icon {
    font-size: 1rem;
    line-height: 1;
  }

  .dcg-tab:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .dcg-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    box-shadow: 0 8px 20px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
  }

  /* —— Condition cards —— */
  .dcg-cards {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  }

  .dcg-card {
    display: grid;
    gap: 0.45rem;
    align-content: start;
    min-height: 118px;
    padding: 1rem 0.95rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    background:
      linear-gradient(
        165deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 5%, #fff),
        var(--card-bg, #fff) 42%
      );
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.15s ease;
  }

  .dcg-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
  }

  .dcg-card.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow:
      0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent),
      0 12px 28px rgba(30, 41, 59, 0.1);
  }

  .dcg-card__icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    font-size: 1.15rem;
    line-height: 1;
  }

  .dcg-card.is-active .dcg-card__icon {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .dcg-card__name {
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .dcg-card__hint {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--muted-color, #64748b);
  }

  /* —— Detail panel: image left · text right —— */
  .dcg-panel {
    display: grid;
    border-radius: var(--section-radius, 22px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 16px 40px rgba(30, 41, 59, 0.09);
    overflow: hidden;
  }

  .dcg-panel--split {
    direction: ltr;
  }

  @media (min-width: 900px) {
    .dcg-panel--split {
      grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
      align-items: stretch;
    }
  }

  .dcg-panel__visual {
    position: relative;
    min-height: 220px;
    background:
      radial-gradient(
        120% 90% at 10% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent),
        transparent 55%
      ),
      linear-gradient(160deg, #1e293b, #0f172a);
  }

  .dcg-panel__visual img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    max-height: 100%;
    object-fit: cover;
  }

  .dcg-panel__visual-fallback {
    min-height: 220px;
    height: 100%;
    display: grid;
    place-items: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 3rem;
  }

  .dcg-panel__overlay {
    position: absolute;
    inset-inline-start: 1rem;
    bottom: 1rem;
  }

  .dcg-panel__count {
    display: inline-flex;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.72);
    color: #fff;
    font-size: 0.74rem;
    font-weight: 800;
    backdrop-filter: blur(6px);
  }

  .dcg-panel__copy {
    display: grid;
    align-content: start;
    gap: 0.9rem;
    padding: 1.3rem 1.35rem 1.45rem;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .dcg-panel__copy,
  :host-context([lang='en']) .dcg-panel__copy {
    direction: ltr;
  }

  .dcg-panel__head {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .dcg-panel__icon {
    flex: 0 0 auto;
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    font-size: 1.25rem;
  }


  .dcg-panel__title {
    margin: 0;
    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .dcg-panel__desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: color-mix(in srgb, var(--text-color, #111827) 82%, var(--muted-color, #64748b));
  }

  .dcg-panel__grid {
    display: grid;
    gap: 0.7rem;
  }

  @media (min-width: 640px) {
    .dcg-panel__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .dcg-advice {
    display: grid;
    gap: 0.45rem;
    padding: 0.85rem 0.9rem;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 90%, transparent);
    background: #f8fafc;
  }

  .dcg-advice--checks {
    background: color-mix(in srgb, #0ea5e9 7%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #0ea5e9 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--parts {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, #fff);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--maint {
    background: color-mix(in srgb, #10b981 7%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #10b981 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--prep {
    background: color-mix(in srgb, #f59e0b 8%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #f59e0b 20%, var(--border-color, #d9e2ec));
  }

  .dcg-advice__label {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .dcg-advice__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.3rem;
  }

  .dcg-advice__list li {
    position: relative;
    padding-inline-start: 1rem;
    font-size: 0.84rem;
    line-height: 1.5;
    color: color-mix(in srgb, var(--text-color, #111827) 90%, var(--muted-color, #64748b));
  }

  .dcg-advice__list li::before {
    content: '';
    position: absolute;
    inset-inline-start: 0;
    top: 0.55em;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .dcg-advice--checks .dcg-advice__list li::before {
    background: #0284c7;
  }

  .dcg-advice--maint .dcg-advice__list li::before {
    background: #059669;
  }

  .dcg-advice--prep .dcg-advice__list li::before {
    background: #d97706;
  }

  .dcg-panel__cta {
    justify-self: start;
    margin-top: 0.15rem;
  }

  @media (max-width: 899px) {
    .dcg-panel__visual img,
    .dcg-panel__visual-fallback {
      max-height: 220px;
      min-height: 180px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dcg-card,
    .dcg-tab {
      transition: none !important;
    }
  }
`;
function v(d) {
  const r = o(d, "");
  return r ? r.split(/\r?\n/).map((a) => a.trim()).filter(Boolean) : [];
}
function D(d) {
  return T(d, "cards").toLowerCase() === "tabs" ? "tabs" : "cards";
}
function h(d) {
  const r = C(d).map((a, i) => {
    const c = o(a.name);
    return {
      id: String(a.id ?? "").trim() || `cond-${i + 1}`,
      name: c,
      icon: String(a.icon ?? "").trim(),
      image: z(a.image),
      desc: o(a.desc) || o(a.description),
      checks: v(a.checks),
      parts: v(a.parts),
      maintenance: v(a.maintenance),
      prep: v(a.prep),
      link: S(a.link)
    };
  }).filter((a) => a.name);
  return r.length ? r : M();
}
function M() {
  return [
    {
      id: "heat",
      name: e("أجواء شديدة الحرارة", "Extreme heat"),
      icon: "☀",
      image: "",
      desc: e("حرارة عالية تؤثر على التبريد والبطارية والإطارات.", "High heat affects cooling, battery, and tires."),
      checks: [e("درجة حرارة المحرك", "Engine temperature"), e("ضغط الإطارات", "Tire pressure"), e("سائل التبريد", "Coolant level")],
      parts: [e("مبرد", "Radiator"), e("ثرموستات", "Thermostat"), e("بطارية", "Battery")],
      maintenance: [e("فحص سائل التبريد", "Check coolant"), e("تنظيف المكثف", "Clean condenser")],
      prep: [e("ظل للسيارة", "Park in shade"), e("فحص قبل السفر", "Pre-trip check")],
      link: ""
    },
    {
      id: "desert",
      name: e("طرق صحراوية", "Desert roads"),
      icon: "🏜",
      image: "",
      desc: e("غبار رملي واهتزازات على طرق غير معبدة.", "Dust and vibration on unpaved roads."),
      checks: [e("فلتر الهواء", "Air filter"), e("نظام التعليق", "Suspension"), e("درع المحرك", "Skid plate")],
      parts: [e("فلتر هواء", "Air filter"), e("مساعدات", "Shocks")],
      maintenance: [e("تنظيف الفلاتر", "Clean filters"), e("فحص البراغي", "Check fasteners")],
      prep: [e("ضغط إطارات مناسب", "Proper tire pressure"), e("ماء وطوارئ", "Water & emergency kit")],
      link: ""
    },
    {
      id: "long-trip",
      name: e("سفر لمسافات طويلة", "Long-distance travel"),
      icon: "🛣",
      image: "",
      desc: e("قيادة مستمرة لساعات — زيت، فرامل، وإطارات.", "Hours of driving — oil, brakes, tires."),
      checks: [e("زيت المحرك", "Engine oil"), e("الفرامل", "Brakes"), e("الإطارات", "Tires")],
      parts: [e("زيت وفلاتر", "Oil & filters"), e("مساحات", "Wipers")],
      maintenance: [e("تغيير زيت قبل الرحلة", "Pre-trip oil change"), e("فحص شامل", "Full inspection")],
      prep: [e("ضغط إطارات", "Tire pressure"), e("طقم إسعافات", "Emergency kit")],
      link: ""
    },
    {
      id: "city",
      name: e("قيادة داخل المدن", "City driving"),
      icon: "🏙",
      image: "",
      desc: e("توقف وانطلاق متكرر — فرامل وبطارية.", "Stop-and-go — brakes and battery."),
      checks: [e("فرامل", "Brakes"), e("بطارية", "Battery"), e("تكييف", "AC")],
      parts: [e("فحمات فرامل", "Brake pads"), e("بطارية", "Battery")],
      maintenance: [e("فحص الفرامل", "Brake check"), e("تنظيف حساسات", "Clean sensors")],
      prep: [e("فحص دوري", "Routine check")],
      link: ""
    },
    {
      id: "rain",
      name: e("طرق ممطرة", "Rainy roads"),
      icon: "🌧",
      image: "",
      desc: e("انزلاق وتآكل — إطارات ومساحات وإضاءة.", "Slip and wear — tires, wipers, lights."),
      checks: [e("عمق مداس الإطار", "Tread depth"), e("مساحات", "Wipers"), e("أضواء", "Lights")],
      parts: [e("إطارات", "Tires"), e("مساحات", "Wipers")],
      maintenance: [e("فحص الإطارات", "Tire inspection"), e("تنظيف مصابيح", "Clean lamps")],
      prep: [e("قيادة هادئة", "Drive gently"), e("مسافة أمان", "Safe distance")],
      link: ""
    },
    {
      id: "daily",
      name: e("استخدام يومي مكثف", "Heavy daily use"),
      icon: "🚗",
      image: "",
      desc: e("استخدام يومي مرتفع — صيانة أسرع.", "High daily mileage — faster wear."),
      checks: [e("زيت", "Oil"), e("إطارات", "Tires"), e("فرامل", "Brakes")],
      parts: [e("زيت وفلاتر", "Oil & filters"), e("إطارات", "Tires")],
      maintenance: [e("جدول صيانة مختصر", "Shortened service interval"), e("فحص أسبوعي", "Weekly check")],
      prep: [e("سجل صيانة", "Maintenance log")],
      link: ""
    }
  ];
}
var O = Object.defineProperty, u = (d, r, a, i) => {
  for (var c = void 0, s = d.length - 1, l; s >= 0; s--)
    (l = d[s]) && (c = l(r, a, c) || c);
  return c && O(r, a, c), c;
};
const b = class b extends k {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(r) {
    var a, i;
    if (r.has("config")) {
      const c = h((a = this.config) == null ? void 0 : a.dcg_conditions);
      c.some((s) => s.id === this.activeId) || (this.activeId = ((i = c[0]) == null ? void 0 : i.id) ?? "");
    }
  }
  get conditions() {
    var r;
    return h((r = this.config) == null ? void 0 : r.dcg_conditions);
  }
  get active() {
    return this.conditions.find((r) => r.id === this.activeId) ?? this.conditions[0] ?? null;
  }
  select(r) {
    this.activeId = r;
  }
  renderAdviceCard(r, a, i) {
    return i.length ? n`
      <div class=${f({ "dcg-advice": !0, [`dcg-advice--${r}`]: !0 })}>
        <p class="dcg-advice__label">${a}</p>
        <ul class="dcg-advice__list">
          ${i.map((c) => n`<li>${c}</li>`)}
        </ul>
      </div>
    ` : t;
  }
  renderPanel(r, a, i) {
    var s, l, g, m;
    const c = !!r.image;
    return n`
      <article
        class=${f({
      "dcg-panel": !0,
      "dcg-panel--split": c
    })}
        role="region"
        aria-live="polite"
      >
        <div class="dcg-panel__visual">
          ${r.image ? n`<img src=${r.image} alt="" loading="lazy" decoding="async" />` : n`<div class="dcg-panel__visual-fallback" aria-hidden="true">
                <span>${r.icon || "🚗"}</span>
              </div>`}
          <div class="dcg-panel__overlay">
            <span class="dcg-panel__count"
              >${e("الظرف", "Condition")} ${a + 1}/${i}</span
            >
          </div>
        </div>

        <div class="dcg-panel__copy">
          <div class="dcg-panel__head">
            ${r.icon ? n`<span class="dcg-panel__icon" aria-hidden="true">${r.icon}</span>` : t}
            <div>
              <p class="fs-eyebrow">${e("توصيات القيادة", "Driving advice")}</p>
              <h3 class="dcg-panel__title">${r.name}</h3>
            </div>
          </div>

          ${r.desc ? n`<p class="dcg-panel__desc">${r.desc}</p>` : t}

          <div class="dcg-panel__grid">
            ${this.renderAdviceCard(
      "checks",
      o((s = this.config) == null ? void 0 : s.dcg_checks_label) || e("الفحص المطلوب", "Required checks"),
      r.checks
    )}
            ${this.renderAdviceCard(
      "parts",
      o((l = this.config) == null ? void 0 : l.dcg_parts_label) || e("قطع تحتاج اهتمامًا", "Parts to watch"),
      r.parts
    )}
            ${this.renderAdviceCard(
      "maint",
      o((g = this.config) == null ? void 0 : g.dcg_maint_label) || e("صيانة وقائية", "Preventive maintenance"),
      r.maintenance
    )}
            ${this.renderAdviceCard(
      "prep",
      o((m = this.config) == null ? void 0 : m.dcg_prep_label) || e("تجهيز قبل الرحلة", "Trip prep"),
      r.prep
    )}
          </div>

          ${r.link ? n`<a
                class="fs-btn fs-tap dcg-panel__cta"
                href=${r.link}
                target="_blank"
                rel=${L(r.link) ? "noopener noreferrer" : t}
              >
                ${e("تصفّح القطع المناسبة", "Browse matching parts")}
              </a>` : t}
        </div>
      </article>
    `;
  }
  renderTabs(r) {
    const a = this.active;
    return n`
      <div class="dcg-tabs" role="tablist" aria-label=${e("ظروف القيادة", "Driving conditions")}>
        ${r.map((i) => {
      const c = i.id === (a == null ? void 0 : a.id);
      return n`
            <button
              type="button"
              class=${f({ "dcg-tab": !0, "is-active": c })}
              role="tab"
              aria-selected=${c ? "true" : "false"}
              @click=${() => this.select(i.id)}
            >
              ${i.icon ? n`<span class="dcg-tab__icon" aria-hidden="true">${i.icon}</span>` : t}
              <span>${i.name}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  renderCards(r) {
    const a = this.active;
    return n`
      <div class="dcg-cards" role="listbox" aria-label=${e("ظروف القيادة", "Driving conditions")}>
        ${r.map((i) => {
      const c = i.id === (a == null ? void 0 : a.id);
      return n`
            <button
              type="button"
              class=${f({ "dcg-card": !0, "is-active": c })}
              role="option"
              aria-selected=${c ? "true" : "false"}
              @click=${() => this.select(i.id)}
            >
              <span class="dcg-card__icon" aria-hidden="true">${i.icon || "◎"}</span>
              <span class="dcg-card__name">${i.name}</span>
              ${i.desc ? n`<span class="dcg-card__hint">${i.desc}</span>` : t}
            </button>
          `;
    })}
      </div>
    `;
  }
  render() {
    const r = this.config || {}, a = A(r, "dcg_"), i = this.conditions, c = this.active, s = Math.max(
      0,
      i.findIndex((_) => _.id === (c == null ? void 0 : c.id))
    ), l = D(r.dcg_layout), g = o(r.dcg_title), m = o(r.dcg_desc);
    return n`
      <section
        class="fs-section"
        style=${w(P(a))}
        aria-label=${g || e("دليل ظروف القيادة", "Driving conditions guide")}
      >
        <div class="fs-container">
          ${g || m ? n`<div class="fs-hero">
                ${g ? n`<h2 class="fs-title">${g}</h2>` : t}
                ${m ? n`<p class="fs-desc">${m}</p>` : t}
              </div>` : t}

          <div class="dcg-shell">
            ${l === "tabs" ? this.renderTabs(i) : this.renderCards(i)}
            ${c ? this.renderPanel(c, s, i.length) : t}
          </div>

          ${E(r, "dcg_", { ready: !!c })}
        </div>
      </section>
    `;
  }
};
b.styles = [B, H];
let p = b;
u([
  y({ type: Object })
], p.prototype, "config");
u([
  $()
], p.prototype, "activeId");
I(
  p
);
typeof p < "u" && p.registerSallaComponent("salla-driving-conditions-guide");
export {
  p as default
};
