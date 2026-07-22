var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { t, n as normalizeCollection, e as extractLink, l as localizedString, c as extractImageUrl, g as getRadioValue, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .dwg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
    gap: 0.65rem;
    width: 100%;
  }

  .dwg-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    min-height: 96px;
    padding: 0.75rem 0.5rem;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  }

  .dwg-item:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
  }

  .dwg-item.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 25%, transparent);
  }

  .dwg-item__icon {
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--dwg-color, var(--accent-color, var(--fs-store-primary))) 14%, var(--card-bg, #fff));
    color: var(--dwg-color, var(--accent-color, var(--fs-store-primary)));
    font-size: 1rem;
    font-weight: 800;
    overflow: hidden;
  }

  .dwg-item__icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .dwg-item__name {
    font-size: 0.74rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.35;
  }

  .dwg-detail {
    width: 100%;
    margin: 1.25rem 0 0;
    padding: 1.15rem 1.2rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 30px rgba(30, 41, 59, 0.08);
  }

  .dwg-detail__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.65rem;
  }

  .dwg-detail__title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .dwg-detail__block {
    margin-bottom: 0.85rem;
  }

  .dwg-detail__label {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .dwg-detail__text {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .dwg-detail__action {
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (max-width: 639px) {
    .dwg-grid {
      grid-template-columns: repeat(auto-fill, minmax(4.8rem, 1fr));
    }
  }
`, SEVERITIES = ["low", "medium", "high", "critical"];
function parseSeverity(raw) {
  const value = getRadioValue(raw, "medium").toLowerCase().trim();
  return SEVERITIES.includes(value) ? value : "medium";
}
__name(parseSeverity, "parseSeverity");
const DEFAULT_WARNINGS = [
  { name: t("زيت المحرك", "Engine oil"), iconText: "🛢", image: "", meaning: t("ضغط الزيت منخفض أو مستشعر الزيت.", "Low oil pressure or oil sensor alert."), severity: "high", action: t("أوقف السيارة وافحص مستوى الزيت.", "Stop and check oil level."), link: "", color: "#ea580c" },
  { name: t("البطارية", "Battery"), iconText: "🔋", image: "", meaning: t("مشكلة في شحن البطارية أو الدينامو.", "Charging system or battery issue."), severity: "medium", action: t("افحص البطارية والأسلاك.", "Inspect battery and cables."), link: "", color: "#eab308" },
  { name: t("ABS", "ABS"), iconText: "ABS", image: "", meaning: t("عطل في نظام الفرامل المانعة للانغلاق.", "Anti-lock brake system fault."), severity: "high", action: t("قد بحرص وافحص الفرامل.", "Drive carefully and inspect brakes."), link: "", color: "#dc2626" },
  { name: t("درجة الحرارة", "Temperature"), iconText: "🌡", image: "", meaning: t("ارتفاع حرارة المحرك.", "Engine overheating."), severity: "critical", action: t("أوقف السيارة فورًا واتركها تبرد.", "Stop immediately and let it cool."), link: "", color: "#dc2626" },
  { name: t("ضغط الإطارات", "Tire pressure"), iconText: "⛽", image: "", meaning: t("ضغط إطار أو أكثر غير مناسب.", "One or more tires under/over pressure."), severity: "medium", action: t("اضبط ضغط الإطارات.", "Adjust tire pressure."), link: "", color: "#ea580c" },
  { name: t("فحص المحرك", "Check engine"), iconText: "⚠", image: "", meaning: t("خلل في نظام المحرك أو الانبعاثات.", "Engine or emissions system fault."), severity: "high", action: t("افحص السيارة في أقرب ورشة.", "Have the vehicle diagnosed soon."), link: "", color: "#f97316" }
];
function parseWarnings(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => ({
    id: String(row.id ?? "").trim() || `warn-${i + 1}`,
    name: localizedString(row.name),
    iconText: String(row.icon_text ?? "").trim(),
    image: extractImageUrl(row.image),
    meaning: localizedString(row.meaning),
    severity: parseSeverity(row.severity),
    action: localizedString(row.action),
    link: extractLink(row.link),
    color: String(row.color ?? "").trim()
  })).filter((w) => w.name);
  return parsed.length ? parsed : DEFAULT_WARNINGS.map((w, i) => ({ id: `default-${i + 1}`, ...w }));
}
__name(parseWarnings, "parseWarnings");
function severityValueLabel(severity) {
  return {
    low: t("منخفض", "Low"),
    medium: t("متوسط", "Medium"),
    high: t("مرتفع", "High"),
    critical: t("حرج", "Critical")
  }[severity];
}
__name(severityValueLabel, "severityValueLabel");
function severityFieldLabel(config) {
  return localizedString(config.dwg_severity_label) || t("الخطورة", "Severity");
}
__name(severityFieldLabel, "severityFieldLabel");
function severityClass(severity) {
  return severity === "critical" || severity === "high" ? "fs-pill--danger" : severity === "medium" ? "fs-pill--caution" : "fs-pill--success";
}
__name(severityClass, "severityClass");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _DashboardWarningGuide = class _DashboardWarningGuide extends LitElement {
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
    changed.has("config") && (this.activeId = "");
  }
  get warnings() {
    var _a;
    return parseWarnings((_a = this.config) == null ? void 0 : _a.dwg_warnings);
  }
  get active() {
    return this.warnings.find((w) => w.id === this.activeId) ?? null;
  }
  renderDetail(warning) {
    if (!warning) return nothing;
    const c = this.config || {};
    return html`
      <div class="dwg-detail" role="region" aria-live="polite">
        <div class="dwg-detail__head">
          <h3 class="dwg-detail__title">${warning.name}</h3>
          <span class=${classMap({ "fs-pill": !0, [severityClass(warning.severity)]: !0 })}>
            ${severityFieldLabel(c)}: ${severityValueLabel(warning.severity)}
          </span>
        </div>

        ${warning.meaning ? html`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${t("المعنى", "Meaning")}</p>
              <p class="dwg-detail__text">${warning.meaning}</p>
            </div>` : nothing}

        ${warning.action ? html`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${t("الإجراء المقترح", "Suggested action")}</p>
              <div class="dwg-detail__action">${warning.action}</div>
            </div>` : nothing}

        ${warning.link ? html`<a class="fs-btn fs-tap" href=${warning.link} target="_blank" rel="noopener noreferrer">
              ${t("تصفّح القطع ذات الصلة", "Browse related parts")}
            </a>` : nothing}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "dwg_"), warnings = this.warnings, title = localizedString(c.dwg_title), desc = localizedString(c.dwg_desc);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("دليل أضواء التحذير", "Dashboard warning guide")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="dwg-grid" role="list">
            ${warnings.map((w) => {
      const active = this.activeId === w.id;
      return html`
                <button
                  type="button"
                  class=${classMap({ "dwg-item": !0, "is-active": active })}
                  role="listitem"
                  aria-pressed=${active ? "true" : "false"}
                  style=${styleMap(w.color ? { "--dwg-color": w.color } : {})}
                  @click=${() => this.activeId = w.id}
                >
                  <span class="dwg-item__icon">
                    ${w.image ? html`<img src=${w.image} alt="" loading="lazy" />` : w.iconText || "⚠"}
                  </span>
                  <span class="dwg-item__name">${w.name}</span>
                </button>
              `;
    })}
          </div>

          ${this.renderDetail(this.active)}
          ${renderCommerceOutcome(c, "dwg_", { ready: !!this.active })}
        </div>
      </section>
    `;
  }
};
__name(_DashboardWarningGuide, "DashboardWarningGuide"), _DashboardWarningGuide.styles = [sharedSectionCss, componentStyles];
let DashboardWarningGuide = _DashboardWarningGuide;
__decorateClass([
  property({ type: Object })
], DashboardWarningGuide.prototype, "config");
__decorateClass([
  state()
], DashboardWarningGuide.prototype, "activeId");
bindSallaRegistration(DashboardWarningGuide);
typeof DashboardWarningGuide < "u" && DashboardWarningGuide.registerSallaComponent("salla-dashboard-warning-guide");
export {
  DashboardWarningGuide as default
};
