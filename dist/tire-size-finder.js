var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, k as itemIdFromLabel, g as getRadioValue, t, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .tsf-shell {
    width: 100%;
    display: grid;
    gap: 1rem;
  }

  .tsf-card {
    padding: 1.25rem 1.15rem 1.35rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1.05rem;
  }

  .tsf-code {
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background:
      linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #0f172a) 0%,
        #111827 100%
      );
    color: #fff;
    text-align: center;
  }

  .tsf-code__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.75;
  }

  .tsf-code__value {
    margin: 0;
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
  }

  .tsf-field {
    display: grid;
    gap: 0.5rem;
  }

  .tsf-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tsf-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
    gap: 0.55rem;
  }

  .tsf-type {
    display: grid;
    gap: 0.2rem;
    text-align: start;
    padding: 0.85rem 0.8rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .tsf-type[aria-pressed='true'] {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .tsf-type__name {
    font-size: 0.88rem;
    font-weight: 800;
  }

  .tsf-type__desc {
    font-size: 0.74rem;
    color: var(--muted-color, #64748b);
    line-height: 1.4;
  }

  .tsf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tsf-chip {
    min-width: 3.4rem;
    min-height: 40px;
    padding: 0.4rem 0.65rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
  }

  .tsf-chip.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tsf-hint {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    text-align: center;
  }
`, DEFAULT_TYPES_META = [
  {
    id: "all-season",
    ar: "طوال السنة",
    en: "All-season",
    dar: "استخدام يومي متوازن",
    den: "Balanced daily use"
  },
  {
    id: "summer",
    ar: "صيفي",
    en: "Summer",
    dar: "ثبات أعلى في الحر",
    den: "Better grip in heat"
  },
  {
    id: "winter",
    ar: "شتوي",
    en: "Winter",
    dar: "للأمطار والبرودة",
    den: "For rain and cold"
  },
  {
    id: "offroad",
    ar: "طرق وعرة",
    en: "Off-road",
    dar: "للبر والطرق الوعرة",
    den: "Desert & rough roads"
  }
];
function defaultTireTypes() {
  return DEFAULT_TYPES_META.map((x) => ({
    id: x.id,
    name: t(x.ar, x.en),
    desc: t(x.dar, x.den)
  }));
}
__name(defaultTireTypes, "defaultTireTypes");
const DEFAULT_WIDTHS = ["185", "195", "205", "215", "225", "235", "245", "255", "265"], DEFAULT_ASPECTS = ["35", "40", "45", "50", "55", "60", "65", "70"], DEFAULT_RIMS = ["15", "16", "17", "18", "19", "20", "21", "22"];
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
function parseTireTypes(raw) {
  const rows = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name) || localizedString(row.title);
    return name ? {
      id: itemIdFromLabel(name, "") || `type-${i + 1}`,
      name,
      desc: localizedString(row.desc) || localizedString(row.description)
    } : null;
  }).filter((x) => !!x);
  return rows.length ? rows : defaultTireTypes();
}
__name(parseTireTypes, "parseTireTypes");
function parseSizeList(raw, fallback) {
  const text = localizedString(raw, "") || String(raw ?? "").trim();
  if (!text) return fallback;
  const parts = text.split(/[,،|\s]+/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? [...new Set(parts)] : fallback;
}
__name(parseSizeList, "parseSizeList");
function resolveWidths(config) {
  return parseSizeList(config.tsf_widths, DEFAULT_WIDTHS);
}
__name(resolveWidths, "resolveWidths");
function resolveAspects(config) {
  return parseSizeList(config.tsf_aspects, DEFAULT_ASPECTS);
}
__name(resolveAspects, "resolveAspects");
function resolveRims(config) {
  return parseSizeList(config.tsf_rims, DEFAULT_RIMS);
}
__name(resolveRims, "resolveRims");
function parseTireSizes(raw) {
  return normalizeCollection(raw).map((row, i) => {
    const width = String(row.width ?? "").trim(), aspect = String(row.aspect ?? row.profile ?? "").trim(), rim = String(row.rim ?? row.diameter ?? "").trim();
    if (!width || !aspect || !rim) return null;
    const typeId = getRadioValue(row.type, "") || itemIdFromLabel(localizedString(row.type_name), "") || "", labelText = `${width}/${aspect} R${rim}`;
    return {
      id: itemIdFromLabel(labelText, "") || `size-${i + 1}`,
      width,
      aspect,
      rim,
      typeId,
      label: labelText
    };
  }).filter((x) => !!x);
}
__name(parseTireSizes, "parseTireSizes");
function formatTireCode(width, aspect, rim) {
  return !width || !aspect || !rim ? "" : `${width}/${aspect} R${rim}`;
}
__name(formatTireCode, "formatTireCode");
function findMatchingSize(rows, width, aspect, rim, typeId) {
  return rows.find(
    (r) => r.width === width && r.aspect === aspect && r.rim === rim && (!typeId || !r.typeId || r.typeId === typeId)
  ) || null;
}
__name(findMatchingSize, "findMatchingSize");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _TireSizeFinder = class _TireSizeFinder extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.typeId = "", this.width = "", this.aspect = "", this.rim = "", this.boundLangHandler = () => this.requestUpdate();
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
      const types = parseTireTypes((_a = this.config) == null ? void 0 : _a.tsf_types);
      this.typeId = ((_b = types[0]) == null ? void 0 : _b.id) || "", this.width = "", this.aspect = "", this.rim = "";
    }
  }
  get types() {
    var _a;
    return parseTireTypes((_a = this.config) == null ? void 0 : _a.tsf_types);
  }
  get activeType() {
    return this.types.find((x) => x.id === this.typeId) ?? null;
  }
  get sizeRows() {
    var _a;
    return parseTireSizes((_a = this.config) == null ? void 0 : _a.tsf_sizes);
  }
  get matchingSize() {
    return findMatchingSize(this.sizeRows, this.width, this.aspect, this.rim, this.typeId);
  }
  get code() {
    return formatTireCode(this.width, this.aspect, this.rim);
  }
  get ready() {
    return !!(this.typeId && this.width && this.aspect && this.rim);
  }
  renderChips(values, selected, onPick, aria) {
    return html`
      <div class="tsf-chips" role="group" aria-label=${aria}>
        ${values.map(
      (v) => html`<button
            type="button"
            class=${classMap({ "tsf-chip": !0, "is-active": selected === v })}
            aria-pressed=${selected === v ? "true" : "false"}
            @click=${() => onPick(v)}
          >
            ${v}
          </button>`
    )}
      </div>
    `;
  }
  renderProducts() {
    return renderCommerceOutcome(this.config || {}, "tsf_", {
      ready: this.ready
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "tsf_"), title = localizedString(c.tsf_title) || t("محدد مقاس الإطار", "Tire size finder"), desc = localizedString(c.tsf_desc) || t(
      "اختر نوع الإطار ثم العرض والنسبة والجنط لعرض المقاس المناسب للسيارة.",
      "Choose tire type, then width, aspect ratio, and rim to see the matching size."
    ), widths = resolveWidths(c), aspects = resolveAspects(c), rims = resolveRims(c);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="tsf-shell">
            <div class="tsf-card">
              <div class="tsf-code" aria-live="polite">
                <p class="tsf-code__label">${t("المقاس المختار", "Selected size")}</p>
                <p class="tsf-code__value">${this.code || "— / — R—"}</p>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, "tsf_type_label", "نوع الإطار", "Tire type")}</span>
                <div class="tsf-types" role="group">
                  ${this.types.map(
      (type) => html`<button
                      type="button"
                      class="tsf-type"
                      aria-pressed=${this.typeId === type.id ? "true" : "false"}
                      @click=${() => {
        this.typeId = type.id;
      }}
                    >
                      <span class="tsf-type__name">${type.name}</span>
                      ${type.desc ? html`<span class="tsf-type__desc">${type.desc}</span>` : nothing}
                    </button>`
    )}
                </div>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, "tsf_width_label", "العرض", "Width")}</span>
                ${this.renderChips(widths, this.width, (v) => {
      this.width = v;
    }, label(c, "tsf_width_label", "العرض", "Width"))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, "tsf_aspect_label", "نسبة الارتفاع", "Aspect ratio")}</span>
                ${this.renderChips(aspects, this.aspect, (v) => {
      this.aspect = v;
    }, label(c, "tsf_aspect_label", "نسبة الارتفاع", "Aspect ratio"))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, "tsf_rim_label", "قطر الجنط", "Rim diameter")}</span>
                ${this.renderChips(rims, this.rim, (v) => {
      this.rim = v;
    }, label(c, "tsf_rim_label", "قطر الجنط", "Rim diameter"))}
              </div>

              ${this.ready ? nothing : html`<p class="tsf-hint">
                    ${t("أكمل اختيار النوع والمقاس لعرض النتيجة المناسبة.", "Complete type and size to see the right match.")}
                  </p>`}
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_TireSizeFinder, "TireSizeFinder"), _TireSizeFinder.styles = [sharedSectionCss, componentStyles];
let TireSizeFinder = _TireSizeFinder;
__decorateClass([
  property({ type: Object })
], TireSizeFinder.prototype, "config");
__decorateClass([
  state()
], TireSizeFinder.prototype, "typeId");
__decorateClass([
  state()
], TireSizeFinder.prototype, "width");
__decorateClass([
  state()
], TireSizeFinder.prototype, "aspect");
__decorateClass([
  state()
], TireSizeFinder.prototype, "rim");
bindSallaRegistration(
  TireSizeFinder
);
typeof TireSizeFinder < "u" && TireSizeFinder.registerSallaComponent("salla-tire-size-finder");
export {
  TireSizeFinder as default
};
