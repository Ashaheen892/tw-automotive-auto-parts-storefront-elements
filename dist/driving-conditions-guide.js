var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, e as extractLink, c as extractImageUrl, g as getRadioValue, t, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
function splitLines(raw) {
  const text = localizedString(raw, "");
  return text ? text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean) : [];
}
__name(splitLines, "splitLines");
function resolveLayout(value) {
  return getRadioValue(value, "cards").toLowerCase() === "tabs" ? "tabs" : "cards";
}
__name(resolveLayout, "resolveLayout");
function parseConditions(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name);
    return {
      id: String(row.id ?? "").trim() || `cond-${i + 1}`,
      name,
      icon: String(row.icon ?? "").trim(),
      image: extractImageUrl(row.image),
      desc: localizedString(row.desc) || localizedString(row.description),
      checks: splitLines(row.checks),
      parts: splitLines(row.parts),
      maintenance: splitLines(row.maintenance),
      prep: splitLines(row.prep),
      link: extractLink(row.link)
    };
  }).filter((c) => c.name);
  return parsed.length ? parsed : defaultConditions();
}
__name(parseConditions, "parseConditions");
function defaultConditions() {
  return [
    {
      id: "heat",
      name: t("أجواء شديدة الحرارة", "Extreme heat"),
      icon: "☀",
      image: "",
      desc: t("حرارة عالية تؤثر على التبريد والبطارية والإطارات.", "High heat affects cooling, battery, and tires."),
      checks: [t("درجة حرارة المحرك", "Engine temperature"), t("ضغط الإطارات", "Tire pressure"), t("سائل التبريد", "Coolant level")],
      parts: [t("مبرد", "Radiator"), t("ثرموستات", "Thermostat"), t("بطارية", "Battery")],
      maintenance: [t("فحص سائل التبريد", "Check coolant"), t("تنظيف المكثف", "Clean condenser")],
      prep: [t("ظل للسيارة", "Park in shade"), t("فحص قبل السفر", "Pre-trip check")],
      link: ""
    },
    {
      id: "desert",
      name: t("طرق صحراوية", "Desert roads"),
      icon: "🏜",
      image: "",
      desc: t("غبار رملي واهتزازات على طرق غير معبدة.", "Dust and vibration on unpaved roads."),
      checks: [t("فلتر الهواء", "Air filter"), t("نظام التعليق", "Suspension"), t("درع المحرك", "Skid plate")],
      parts: [t("فلتر هواء", "Air filter"), t("مساعدات", "Shocks")],
      maintenance: [t("تنظيف الفلاتر", "Clean filters"), t("فحص البراغي", "Check fasteners")],
      prep: [t("ضغط إطارات مناسب", "Proper tire pressure"), t("ماء وطوارئ", "Water & emergency kit")],
      link: ""
    },
    {
      id: "long-trip",
      name: t("سفر لمسافات طويلة", "Long-distance travel"),
      icon: "🛣",
      image: "",
      desc: t("قيادة مستمرة لساعات — زيت، فرامل، وإطارات.", "Hours of driving — oil, brakes, tires."),
      checks: [t("زيت المحرك", "Engine oil"), t("الفرامل", "Brakes"), t("الإطارات", "Tires")],
      parts: [t("زيت وفلاتر", "Oil & filters"), t("مساحات", "Wipers")],
      maintenance: [t("تغيير زيت قبل الرحلة", "Pre-trip oil change"), t("فحص شامل", "Full inspection")],
      prep: [t("ضغط إطارات", "Tire pressure"), t("طقم إسعافات", "Emergency kit")],
      link: ""
    },
    {
      id: "city",
      name: t("قيادة داخل المدن", "City driving"),
      icon: "🏙",
      image: "",
      desc: t("توقف وانطلاق متكرر — فرامل وبطارية.", "Stop-and-go — brakes and battery."),
      checks: [t("فرامل", "Brakes"), t("بطارية", "Battery"), t("تكييف", "AC")],
      parts: [t("فحمات فرامل", "Brake pads"), t("بطارية", "Battery")],
      maintenance: [t("فحص الفرامل", "Brake check"), t("تنظيف حساسات", "Clean sensors")],
      prep: [t("فحص دوري", "Routine check")],
      link: ""
    },
    {
      id: "rain",
      name: t("طرق ممطرة", "Rainy roads"),
      icon: "🌧",
      image: "",
      desc: t("انزلاق وتآكل — إطارات ومساحات وإضاءة.", "Slip and wear — tires, wipers, lights."),
      checks: [t("عمق مداس الإطار", "Tread depth"), t("مساحات", "Wipers"), t("أضواء", "Lights")],
      parts: [t("إطارات", "Tires"), t("مساحات", "Wipers")],
      maintenance: [t("فحص الإطارات", "Tire inspection"), t("تنظيف مصابيح", "Clean lamps")],
      prep: [t("قيادة هادئة", "Drive gently"), t("مسافة أمان", "Safe distance")],
      link: ""
    },
    {
      id: "daily",
      name: t("استخدام يومي مكثف", "Heavy daily use"),
      icon: "🚗",
      image: "",
      desc: t("استخدام يومي مرتفع — صيانة أسرع.", "High daily mileage — faster wear."),
      checks: [t("زيت", "Oil"), t("إطارات", "Tires"), t("فرامل", "Brakes")],
      parts: [t("زيت وفلاتر", "Oil & filters"), t("إطارات", "Tires")],
      maintenance: [t("جدول صيانة مختصر", "Shortened service interval"), t("فحص أسبوعي", "Weekly check")],
      prep: [t("سجل صيانة", "Maintenance log")],
      link: ""
    }
  ];
}
__name(defaultConditions, "defaultConditions");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _DrivingConditionsGuide = class _DrivingConditionsGuide extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a, _b;
    if (changed.has("config")) {
      const items = parseConditions((_a = this.config) == null ? void 0 : _a.dcg_conditions);
      items.some((item) => item.id === this.activeId) || (this.activeId = ((_b = items[0]) == null ? void 0 : _b.id) ?? "");
    }
  }
  get conditions() {
    var _a;
    return parseConditions((_a = this.config) == null ? void 0 : _a.dcg_conditions);
  }
  get active() {
    return this.conditions.find((c) => c.id === this.activeId) ?? this.conditions[0] ?? null;
  }
  select(id) {
    this.activeId = id;
  }
  renderAdviceCard(tone, label, items) {
    return items.length ? html`
      <div class=${classMap({ "dcg-advice": !0, [`dcg-advice--${tone}`]: !0 })}>
        <p class="dcg-advice__label">${label}</p>
        <ul class="dcg-advice__list">
          ${items.map((item) => html`<li>${item}</li>`)}
        </ul>
      </div>
    ` : nothing;
  }
  renderPanel(item, index, total) {
    var _a, _b, _c, _d;
    const hasMedia = !!item.image;
    return html`
      <article
        class=${classMap({
      "dcg-panel": !0,
      "dcg-panel--split": hasMedia
    })}
        role="region"
        aria-live="polite"
      >
        <div class="dcg-panel__visual">
          ${item.image ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />` : html`<div class="dcg-panel__visual-fallback" aria-hidden="true">
                <span>${item.icon || "🚗"}</span>
              </div>`}
          <div class="dcg-panel__overlay">
            <span class="dcg-panel__count"
              >${t("الظرف", "Condition")} ${index + 1}/${total}</span
            >
          </div>
        </div>

        <div class="dcg-panel__copy">
          <div class="dcg-panel__head">
            ${item.icon ? html`<span class="dcg-panel__icon" aria-hidden="true">${item.icon}</span>` : nothing}
            <div>
              <p class="fs-eyebrow">${t("توصيات القيادة", "Driving advice")}</p>
              <h3 class="dcg-panel__title">${item.name}</h3>
            </div>
          </div>

          ${item.desc ? html`<p class="dcg-panel__desc">${item.desc}</p>` : nothing}

          <div class="dcg-panel__grid">
            ${this.renderAdviceCard(
      "checks",
      localizedString((_a = this.config) == null ? void 0 : _a.dcg_checks_label) || t("الفحص المطلوب", "Required checks"),
      item.checks
    )}
            ${this.renderAdviceCard(
      "parts",
      localizedString((_b = this.config) == null ? void 0 : _b.dcg_parts_label) || t("قطع تحتاج اهتمامًا", "Parts to watch"),
      item.parts
    )}
            ${this.renderAdviceCard(
      "maint",
      localizedString((_c = this.config) == null ? void 0 : _c.dcg_maint_label) || t("صيانة وقائية", "Preventive maintenance"),
      item.maintenance
    )}
            ${this.renderAdviceCard(
      "prep",
      localizedString((_d = this.config) == null ? void 0 : _d.dcg_prep_label) || t("تجهيز قبل الرحلة", "Trip prep"),
      item.prep
    )}
          </div>

          ${item.link ? html`<a
                class="fs-btn fs-tap dcg-panel__cta"
                href=${item.link}
                target="_blank"
                rel=${isExternalUrl(item.link) ? "noopener noreferrer" : nothing}
              >
                ${t("تصفّح القطع المناسبة", "Browse matching parts")}
              </a>` : nothing}
        </div>
      </article>
    `;
  }
  renderTabs(items) {
    const active = this.active;
    return html`
      <div class="dcg-tabs" role="tablist" aria-label=${t("ظروف القيادة", "Driving conditions")}>
        ${items.map((item) => {
      const isActive = item.id === (active == null ? void 0 : active.id);
      return html`
            <button
              type="button"
              class=${classMap({ "dcg-tab": !0, "is-active": isActive })}
              role="tab"
              aria-selected=${isActive ? "true" : "false"}
              @click=${() => this.select(item.id)}
            >
              ${item.icon ? html`<span class="dcg-tab__icon" aria-hidden="true">${item.icon}</span>` : nothing}
              <span>${item.name}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  renderCards(items) {
    const active = this.active;
    return html`
      <div class="dcg-cards" role="listbox" aria-label=${t("ظروف القيادة", "Driving conditions")}>
        ${items.map((item) => {
      const isActive = item.id === (active == null ? void 0 : active.id);
      return html`
            <button
              type="button"
              class=${classMap({ "dcg-card": !0, "is-active": isActive })}
              role="option"
              aria-selected=${isActive ? "true" : "false"}
              @click=${() => this.select(item.id)}
            >
              <span class="dcg-card__icon" aria-hidden="true">${item.icon || "◎"}</span>
              <span class="dcg-card__name">${item.name}</span>
              ${item.desc ? html`<span class="dcg-card__hint">${item.desc}</span>` : nothing}
            </button>
          `;
    })}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "dcg_"), items = this.conditions, active = this.active, activeIndex = Math.max(
      0,
      items.findIndex((item) => item.id === (active == null ? void 0 : active.id))
    ), layout = resolveLayout(c.dcg_layout), title = localizedString(c.dcg_title), desc = localizedString(c.dcg_desc);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("دليل ظروف القيادة", "Driving conditions guide")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="dcg-shell">
            ${layout === "tabs" ? this.renderTabs(items) : this.renderCards(items)}
            ${active ? this.renderPanel(active, activeIndex, items.length) : nothing}
          </div>

          ${renderCommerceOutcome(c, "dcg_", { ready: !!active })}
        </div>
      </section>
    `;
  }
};
__name(_DrivingConditionsGuide, "DrivingConditionsGuide"), _DrivingConditionsGuide.styles = [sharedSectionCss, componentStyles];
let DrivingConditionsGuide = _DrivingConditionsGuide;
__decorateClass([
  property({ type: Object })
], DrivingConditionsGuide.prototype, "config");
__decorateClass([
  state()
], DrivingConditionsGuide.prototype, "activeId");
bindSallaRegistration(
  DrivingConditionsGuide
);
typeof DrivingConditionsGuide < "u" && DrivingConditionsGuide.registerSallaComponent("salla-driving-conditions-guide");
export {
  DrivingConditionsGuide as default
};
