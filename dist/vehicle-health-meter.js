var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, j as clamp, f as toNumber, e as extractLink, t, g as getRadioValue, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, p as prefersReducedMotion, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .vhm-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    justify-content: center;
    margin-bottom: 1.25rem;
    font-size: 0.78rem;
    color: var(--muted-color, #64748b);
  }

  .vhm-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .vhm-legend i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .vhm-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .vhm-grid--bars {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .vhm-meter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
    padding: 1rem 0.75rem;
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    text-align: center;
  }

  .vhm-meter--bar {
    align-items: stretch;
    text-align: start;
  }

  .vhm-circle {
    position: relative;
    width: 96px;
    height: 96px;
  }

  .vhm-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .vhm-circle__track {
    fill: none;
    stroke: color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    stroke-width: 8;
  }

  .vhm-circle__fill {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.8s ease;
  }

  .vhm-circle__value {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-name {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-status {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .vhm-note {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--muted-color, #64748b);
  }

  .vhm-bar-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.45rem;
  }

  .vhm-bar-track {
    height: 10px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 55%, transparent);
    overflow: hidden;
  }

  .vhm-bar-fill {
    height: 100%;
    border-radius: inherit;
    transition: width 0.8s ease;
  }

  .vhm-link {
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .vhm-link:hover {
    text-decoration: underline;
  }

  .vhm-circle__fill,
  .vhm-bar-fill {
    transition-duration: 1s;
  }

  @media (prefers-reduced-motion: reduce) {
    .vhm-circle__fill,
    .vhm-bar-fill {
      transition: none !important;
    }
  }
`;
function resolveDisplay(value) {
  return getRadioValue(value, "circles").toLowerCase() === "bars" ? "bars" : "circles";
}
__name(resolveDisplay, "resolveDisplay");
function resolveStatus(raw, value) {
  const fromConfig = getRadioValue(raw, "").toLowerCase();
  return fromConfig === "excellent" || fromConfig === "good" || fromConfig === "check" || fromConfig === "service" ? fromConfig : value >= 85 ? "excellent" : value >= 70 ? "good" : value >= 45 ? "check" : "service";
}
__name(resolveStatus, "resolveStatus");
function statusLabel(status) {
  const map = {
    excellent: ["ممتاز", "Excellent"],
    good: ["جيد", "Good"],
    check: ["يحتاج فحص", "Needs check"],
    service: ["صيانة مطلوبة", "Service needed"]
  }, [ar, en] = map[status];
  return t(ar, en);
}
__name(statusLabel, "statusLabel");
function statusColor(status) {
  return {
    excellent: "#16a34a",
    good: "#2563eb",
    check: "#ea580c",
    service: "#dc2626"
  }[status];
}
__name(statusColor, "statusColor");
function parseMeters(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name) || localizedString(row.title), value = clamp(toNumber(row.value, 0), 0, 100);
    return {
      id: String(row.id ?? "").trim() || `meter-${i + 1}`,
      name,
      value,
      status: resolveStatus(row.status, value),
      icon: String(row.icon ?? "").trim(),
      note: localizedString(row.note),
      link: extractLink(row.link)
    };
  }).filter((m) => m.name);
  return parsed.length ? parsed : defaultMeters();
}
__name(parseMeters, "parseMeters");
function defaultMeters() {
  return [
    { id: "battery", name: t("البطارية", "Battery"), value: 78, status: "good", icon: "🔋", note: t("فحص دوري كل 6 أشهر.", "Check every 6 months."), link: "" },
    { id: "tires", name: t("الإطارات", "Tires"), value: 62, status: "check", icon: "🛞", note: t("تآكل متوسط — راجع الضغط.", "Moderate wear — check pressure."), link: "" },
    { id: "maintenance", name: t("الصيانة", "Maintenance"), value: 55, status: "check", icon: "🔧", note: t("اقترب موعد تغيير الزيت.", "Oil change due soon."), link: "" },
    { id: "brakes", name: t("الفرامل", "Brakes"), value: 88, status: "excellent", icon: "🛑", note: t("أداء جيد.", "Good performance."), link: "" },
    { id: "trip", name: t("جاهزية السفر", "Trip readiness"), value: 72, status: "good", icon: "🚗", note: t("جاهزة لرحلة قصيرة.", "Ready for a short trip."), link: "" }
  ];
}
__name(defaultMeters, "defaultMeters");
function circleDashOffset(value, radius = 42) {
  const circumference = 2 * Math.PI * radius;
  return circumference - value / 100 * circumference;
}
__name(circleDashOffset, "circleDashOffset");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const CIRCLE_RADIUS = 42, _VehicleHealthMeter = class _VehicleHealthMeter extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  get meters() {
    var _a;
    return parseMeters((_a = this.config) == null ? void 0 : _a.vhm_meters);
  }
  renderLegend() {
    return html`
      <div class="vhm-legend" aria-hidden="true">
        ${["excellent", "good", "check", "service"].map(
      (s) => html`<span><i style=${styleMap({ background: statusColor(s) })}></i>${statusLabel(s)}</span>`
    )}
      </div>
    `;
  }
  renderCircle(meter, animate) {
    const color = statusColor(meter.status), offset = circleDashOffset(animate ? meter.value : 0, CIRCLE_RADIUS), circumference = 2 * Math.PI * CIRCLE_RADIUS;
    return html`
      <div class="vhm-circle" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="presentation">
          <circle class="vhm-circle__track" cx="50" cy="50" r=${CIRCLE_RADIUS} />
          <circle
            class="vhm-circle__fill"
            cx="50"
            cy="50"
            r=${CIRCLE_RADIUS}
            stroke=${color}
            stroke-dasharray=${circumference}
            stroke-dashoffset=${offset}
          />
        </svg>
        <span class="vhm-circle__value">${meter.value}%</span>
      </div>
    `;
  }
  renderBar(meter) {
    const color = statusColor(meter.status);
    return html`
      <div class="vhm-bar-head">
        <p class="vhm-name">${meter.icon ? html`${meter.icon} ` : nothing}${meter.name}</p>
        <span class="vhm-status" style=${styleMap({ color })}>${statusLabel(meter.status)}</span>
      </div>
      <div class="vhm-bar-track" role="progressbar" aria-valuenow=${meter.value} aria-valuemin="0" aria-valuemax="100">
        <div class="vhm-bar-fill" style=${styleMap({ width: `${meter.value}%`, background: color })}></div>
      </div>
      ${meter.note ? html`<p class="vhm-note">${meter.note}</p>` : nothing}
      ${meter.link ? html`<a
            class="vhm-link"
            href=${meter.link}
            target="_blank"
            rel=${isExternalUrl(meter.link) ? "noopener noreferrer" : nothing}
          >
            ${t("المزيد", "Learn more")}
          </a>` : nothing}
    `;
  }
  renderMeterCard(meter, display, animate) {
    const color = statusColor(meter.status);
    return display === "bars" ? html`<article class="vhm-meter vhm-meter--bar">${this.renderBar(meter)}</article>` : html`
      <article class="vhm-meter">
        ${this.renderCircle(meter, animate)}
        <p class="vhm-name">${meter.icon ? html`${meter.icon} ` : nothing}${meter.name}</p>
        <p class="vhm-status" style=${styleMap({ color })}>${statusLabel(meter.status)}</p>
        ${meter.note ? html`<p class="vhm-note">${meter.note}</p>` : nothing}
        ${meter.link ? html`<a
              class="vhm-link"
              href=${meter.link}
              target="_blank"
              rel=${isExternalUrl(meter.link) ? "noopener noreferrer" : nothing}
            >
              ${t("المزيد", "Learn more")}
            </a>` : nothing}
      </article>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "vhm_"), animate = !prefersReducedMotion(), meters = this.meters, display = resolveDisplay(c.vhm_display), title = localizedString(c.vhm_title), desc = localizedString(c.vhm_desc);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مؤشر صحة السيارة", "Vehicle health meter")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          ${this.renderLegend()}

          <div class=${classMap({ "vhm-grid": !0, "vhm-grid--bars": display === "bars" })}>
            ${meters.map((meter) => this.renderMeterCard(meter, display, animate))}
          </div>
          ${renderCommerceOutcome(c, "vhm_", { ready: meters.length > 0 })}
        </div>
      </section>
    `;
  }
};
__name(_VehicleHealthMeter, "VehicleHealthMeter"), _VehicleHealthMeter.styles = [sharedSectionCss, componentStyles];
let VehicleHealthMeter = _VehicleHealthMeter;
__decorateClass([
  property({ type: Object })
], VehicleHealthMeter.prototype, "config");
bindSallaRegistration(VehicleHealthMeter);
typeof VehicleHealthMeter < "u" && VehicleHealthMeter.registerSallaComponent("salla-vehicle-health-meter");
export {
  VehicleHealthMeter as default
};
