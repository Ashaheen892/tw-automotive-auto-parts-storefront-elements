var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { g as getRadioValue, n as normalizeCollection, l as localizedString, t, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .tbsg-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .tbsg-tab {
    min-height: 44px;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 700;
    font-size: 0.86rem;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .tbsg-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 24%, transparent);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tbsg-select-wrap {
    display: grid;
    gap: 0.35rem;
    max-width: 280px;
    margin: 0 auto 1rem;
  }

  .tbsg-select-wrap label {
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-select {
    min-height: 44px;
    padding: 0.55rem 0.75rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 12px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
  }

  .tbsg-panel {
    padding: 1.1rem 1rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 10px 28px rgba(30, 41, 59, 0.07);
  }

  .tbsg-panel + .tbsg-panel {
    margin-top: 1rem;
  }

  .tbsg-panel__title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-example {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.45rem 0.75rem;
    margin-bottom: 0.85rem;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 800;
    font-size: 1rem;
    color: var(--accent-color, var(--fs-store-primary));
    letter-spacing: 0.04em;
  }

  .tbsg-grid {
    display: grid;
    gap: 0.65rem;
  }

  @media (min-width: 640px) {
    .tbsg-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .tbsg-item {
    padding: 0.75rem 0.8rem;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, transparent);
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 12%, var(--card-bg, #fff));
  }

  .tbsg-item__label {
    margin: 0 0 0.25rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-item__value {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-item__note {
    margin: 0.35rem 0 0;
    font-size: 0.82rem;
    line-height: 1.55;
    color: var(--muted-color, #64748b);
  }

  .tbsg-notes {
    margin: 0.85rem 0 0;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (prefers-reduced-motion: reduce) {
    .tbsg-tab {
      transition: none !important;
    }
  }
`;
function resolveMode(value) {
  const raw = getRadioValue(value, "both").toLowerCase();
  return raw === "tires" || raw === "batteries" ? raw : "both";
}
__name(resolveMode, "resolveMode");
function parseTireCode(raw) {
  const match = raw.trim().match(/^(\d{3})\/(\d{2})\s*([A-Z])\s*(\d{2})$/i);
  return match ? {
    width: match[1],
    aspect: match[2],
    construction: match[3].toUpperCase(),
    rim: match[4],
    raw: raw.trim()
  } : null;
}
__name(parseTireCode, "parseTireCode");
function parseTireParts(raw, example) {
  const fromConfig = normalizeCollection(raw).map((row, i) => ({
    key: String(row.key ?? row.part ?? `part-${i + 1}`).trim(),
    label: localizedString(row.label) || localizedString(row.name),
    value: localizedString(row.value),
    note: localizedString(row.note) || localizedString(row.desc)
  })).filter((part) => part.label);
  return fromConfig.length ? fromConfig : example ? [
    {
      key: "width",
      label: t("العرض (مم)", "Width (mm)"),
      value: example.width,
      note: t("عرض نقطة التلامس مع الطريق", "Tread contact width in millimeters")
    },
    {
      key: "aspect",
      label: t("نسبة الارتفاع", "Aspect ratio"),
      value: `${example.aspect}%`,
      note: t("ارتفاع الجانب كنسبة من العرض", "Sidewall height as % of width")
    },
    {
      key: "construction",
      label: t("نوع الهيكل", "Construction"),
      value: example.construction,
      note: t("R = radial — الأكثر شيوعًا", "R = radial — most common")
    },
    {
      key: "rim",
      label: t("قطر الجنط (inch)", "Rim diameter"),
      value: `${example.rim}"`,
      note: t("يجب مطابقته مع جنط سيارتك", "Must match your wheel size")
    }
  ] : [
    {
      key: "width",
      label: t("العرض (مم)", "Width (mm)"),
      value: "225",
      note: t("عرض نقطة التلامس مع الطريق", "Tread contact width in millimeters")
    },
    {
      key: "aspect",
      label: t("نسبة الارتفاع", "Aspect ratio"),
      value: "45%",
      note: t("ارتفاع الجانب كنسبة من العرض", "Sidewall height as % of width")
    },
    {
      key: "construction",
      label: t("نوع الهيكل", "Construction"),
      value: "R",
      note: t("R = radial — الأكثر شيوعًا", "R = radial — most common")
    },
    {
      key: "rim",
      label: t("قطر الجنط (inch)", "Rim diameter"),
      value: '18"',
      note: t("يجب مطابقته مع جنط سيارتك", "Must match your wheel size")
    }
  ];
}
__name(parseTireParts, "parseTireParts");
function parseBatterySpecs(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => ({
    id: String(row.id ?? "").trim() || `spec-${i + 1}`,
    label: localizedString(row.label) || localizedString(row.name),
    value: localizedString(row.value),
    note: localizedString(row.note) || localizedString(row.desc)
  })).filter((spec) => spec.label);
  return parsed.length ? parsed : defaultBatterySpecs();
}
__name(parseBatterySpecs, "parseBatterySpecs");
function defaultBatterySpecs() {
  return [
    {
      id: "capacity",
      label: t("السعة (Ah)", "Capacity (Ah)"),
      value: t("60–70 Ah", "60–70 Ah"),
      note: t("تناسب مع معظم السيارات المتوسطة", "Fits most mid-size cars")
    },
    {
      id: "cca",
      label: t("أمبير التشغيل (CCA)", "Cold cranking amps"),
      value: t("500–650 CCA", "500–650 CCA"),
      note: t("مهم في الأجواء الباردة", "Important in cold climates")
    },
    {
      id: "size",
      label: t("المقاس", "Size group"),
      value: t("مثل DIN 74 / L2", "e.g. DIN 74 / L2"),
      note: t("يجب أن يدخل في حامل البطارية", "Must fit battery tray")
    },
    {
      id: "terminal",
      label: t("اتجاه الأقطاب", "Terminal layout"),
      value: t("يمين / يسار", "Right / left"),
      note: t("تحقق من كابل السيارة", "Check cable reach")
    },
    {
      id: "usage",
      label: t("نوع الاستخدام", "Usage type"),
      value: t("SLI — تشغيل عادي", "SLI — standard starting"),
      note: t("للسيارات بدون start-stop", "For non start-stop vehicles")
    },
    {
      id: "climate",
      label: t("المناخ", "Climate"),
      value: t("حرارة عالية / منخفضة", "Hot / cold"),
      note: t("اختر بطارية مناسبة لمنطقتك", "Pick battery rated for your region")
    }
  ];
}
__name(defaultBatterySpecs, "defaultBatterySpecs");
function parseTireNotes(raw) {
  return localizedString(raw) || t(
    "راجع دليل السيارة أو الملصق على باب السائق قبل الشراء. المقاس الصحيح يضمن الأمان والاقتصاد في الوقود.",
    "Check owner manual or driver door sticker before buying. Correct size ensures safety and fuel economy."
  );
}
__name(parseTireNotes, "parseTireNotes");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _TireBatterySelectionGuide = class _TireBatterySelectionGuide extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeTab = "tires", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a;
    changed.has("config") && (resolveMode((_a = this.config) == null ? void 0 : _a.tbsg_mode) === "batteries" ? this.activeTab = "batteries" : this.activeTab = "tires");
  }
  get mode() {
    var _a;
    return resolveMode((_a = this.config) == null ? void 0 : _a.tbsg_mode);
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  renderSpecItem(label, value, note) {
    return html`
      <div class="tbsg-item">
        <p class="tbsg-item__label">${label}</p>
        <p class="tbsg-item__value">${value || "—"}</p>
        ${note ? html`<p class="tbsg-item__note">${note}</p>` : nothing}
      </div>
    `;
  }
  renderTiresPanel() {
    const c = this.config || {}, exampleRaw = localizedString(c.tbsg_tire_example) || "225/45 R18", parsed = parseTireCode(exampleRaw), parts = parseTireParts(c.tbsg_tire_parts, parsed), notes = parseTireNotes(c.tbsg_tire_notes), tireTitle = localizedString(c.tbsg_tire_title) || t("فهم مقاس الإطار", "Understanding tire size");
    return html`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${tireTitle}</h3>
        <div class="tbsg-example" aria-label=${t("مثال مقاس", "Example size")}>${exampleRaw}</div>
        ${parsed ? nothing : html`<p class="tbsg-notes">${t("صيغة المثال: 225/45 R18", "Example format: 225/45 R18")}</p>`}
        <div class="tbsg-grid">
          ${parts.map((part) => this.renderSpecItem(part.label, part.value, part.note))}
        </div>
        ${notes ? html`<p class="tbsg-notes">${notes}</p>` : nothing}
      </div>
    `;
  }
  renderBatteriesPanel() {
    const c = this.config || {}, specs = parseBatterySpecs(c.tbsg_battery_specs), batteryTitle = localizedString(c.tbsg_battery_title) || t("مواصفات البطارية", "Battery specifications");
    return html`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${batteryTitle}</h3>
        <div class="tbsg-grid">
          ${specs.map((spec) => this.renderSpecItem(spec.label, spec.value, spec.note))}
        </div>
      </div>
    `;
  }
  renderTabs(mode) {
    var _a, _b;
    if (mode !== "both") return nothing;
    const tabs = [
      { id: "tires", label: localizedString((_a = this.config) == null ? void 0 : _a.tbsg_tire_title) || t("الإطارات", "Tires") },
      {
        id: "batteries",
        label: localizedString((_b = this.config) == null ? void 0 : _b.tbsg_battery_title) || t("البطاريات", "Batteries")
      }
    ];
    return html`
      <div class="tbsg-toolbar" role="tablist">
        ${tabs.map(
      (tab) => html`
            <button
              type="button"
              class=${classMap({ "tbsg-tab": !0, "is-active": this.activeTab === tab.id })}
              role="tab"
              aria-selected=${this.activeTab === tab.id ? "true" : "false"}
              @click=${() => this.setTab(tab.id)}
            >
              ${tab.label}
            </button>
          `
    )}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "tbsg_"), mode = this.mode, title = localizedString(c.tbsg_title), desc = localizedString(c.tbsg_desc), showTires = mode === "tires" || mode === "both", showBatteries = mode === "batteries" || mode === "both", tiresVisible = mode === "tires" || mode === "both" && this.activeTab === "tires", batteriesVisible = mode === "batteries" || mode === "both" && this.activeTab === "batteries";
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("دليل اختيار الإطارات والبطاريات", "Tire & battery selection guide")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          ${mode === "both" ? this.renderTabs(mode) : nothing}

          ${showTires && tiresVisible ? this.renderTiresPanel() : nothing}
          ${showBatteries && batteriesVisible ? this.renderBatteriesPanel() : nothing}
          ${renderCommerceOutcome(c, "tbsg_", { ready: !!this.activeTab })}
        </div>
      </section>
    `;
  }
};
__name(_TireBatterySelectionGuide, "TireBatterySelectionGuide"), _TireBatterySelectionGuide.styles = [sharedSectionCss, componentStyles];
let TireBatterySelectionGuide = _TireBatterySelectionGuide;
__decorateClass([
  property({ type: Object })
], TireBatterySelectionGuide.prototype, "config");
__decorateClass([
  state()
], TireBatterySelectionGuide.prototype, "activeTab");
bindSallaRegistration(TireBatterySelectionGuide);
typeof TireBatterySelectionGuide < "u" && TireBatterySelectionGuide.registerSallaComponent("salla-tire-battery-selection-guide");
export {
  TireBatterySelectionGuide as default
};
