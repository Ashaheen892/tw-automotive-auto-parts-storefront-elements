var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, d as isTruthy, t, g as getRadioValue, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, CRITERIA_KEYS = [
  "quality",
  "lifespan",
  "warranty",
  "performance",
  "price",
  "usage"
], DEFAULT_LABELS = {
  quality: { ar: "الجودة", en: "Quality" },
  lifespan: { ar: "العمر الافتراضي", en: "Lifespan" },
  warranty: { ar: "الضمان", en: "Warranty" },
  performance: { ar: "الأداء", en: "Performance" },
  price: { ar: "السعر", en: "Price" },
  usage: { ar: "الاستخدام المناسب", en: "Best usage" }
};
function resolveLayout(value) {
  return getRadioValue(value, "table").toLowerCase() === "cards" ? "cards" : "table";
}
__name(resolveLayout, "resolveLayout");
function parseTypes(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name);
    return {
      id: String(row.id ?? "").trim() || `type-${i + 1}`,
      name,
      badge: localizedString(row.badge),
      quality: localizedString(row.quality),
      lifespan: localizedString(row.lifespan),
      warranty: localizedString(row.warranty),
      performance: localizedString(row.performance),
      price: localizedString(row.price),
      usage: localizedString(row.usage),
      highlight: isTruthy(row.highlight, !1),
      color: String(row.color ?? "").trim()
    };
  }).filter((item) => item.name);
  return parsed.length ? parsed : defaultTypes();
}
__name(parseTypes, "parseTypes");
function defaultTypes() {
  return [
    {
      id: "oem",
      name: t("أصلي", "OEM / Original"),
      badge: t("موصى به", "Recommended"),
      quality: t("عالية جدًا", "Very high"),
      lifespan: t("طويل", "Long"),
      warranty: t("12–24 شهر", "12–24 months"),
      performance: t("مطابق للمصنع", "Factory match"),
      price: t("$$$", "$$$"),
      usage: t("سيارات جديدة والصيانة الدورية", "New cars & scheduled service"),
      highlight: !0,
      color: "#ea580c"
    },
    {
      id: "premium-alt",
      name: t("بديل عالي الجودة", "Premium aftermarket"),
      badge: t("قيمة ممتازة", "Great value"),
      quality: t("عالية", "High"),
      lifespan: t("طويل", "Long"),
      warranty: t("12 شهر", "12 months"),
      performance: t("قريب من الأصلي", "Near OEM"),
      price: t("$$", "$$"),
      usage: t("استبدال يومي بجودة موثوقة", "Daily replacement with trusted quality"),
      highlight: !1,
      color: "#2563eb"
    },
    {
      id: "commercial",
      name: t("تجاري", "Commercial"),
      badge: t("اقتصادي", "Budget"),
      quality: t("متوسطة", "Medium"),
      lifespan: t("متوسط", "Medium"),
      warranty: t("3–6 أشهر", "3–6 months"),
      performance: t("كافٍ للاستخدام العادي", "Adequate for normal use"),
      price: t("$", "$"),
      usage: t("سيارات قديمة أو استخدام محدود", "Older cars or limited use"),
      highlight: !1,
      color: "#64748b"
    },
    {
      id: "refurb",
      name: t("مجدد", "Refurbished"),
      badge: t("إعادة تأهيل", "Refurb"),
      quality: t("متغيرة", "Varies"),
      lifespan: t("قصير–متوسط", "Short–medium"),
      warranty: t("3–12 شهر", "3–12 months"),
      performance: t("يعتمد على حالة القطعة", "Depends on unit condition"),
      price: t("$–$$", "$–$$"),
      usage: t("عند توفر ميزانية محدودة", "When budget is tight"),
      highlight: !1,
      color: "#7c3aed"
    }
  ];
}
__name(defaultTypes, "defaultTypes");
function parseCriteriaRows(raw) {
  const overrides = normalizeCollection(raw).map((row) => {
    const key = String(row.key ?? row.criteria ?? "").trim(), label = localizedString(row.label) || localizedString(row.name);
    return { key, label };
  }).filter((row) => CRITERIA_KEYS.includes(row.key) && !!row.label);
  if (overrides.length) {
    const map = new Map(overrides.map((r) => [r.key, r.label]));
    return CRITERIA_KEYS.map((key) => ({
      key,
      label: map.get(key) || t(DEFAULT_LABELS[key].ar, DEFAULT_LABELS[key].en)
    }));
  }
  return CRITERIA_KEYS.map((key) => ({
    key,
    label: t(DEFAULT_LABELS[key].ar, DEFAULT_LABELS[key].en)
  }));
}
__name(parseCriteriaRows, "parseCriteriaRows");
function getCellValue(type, key) {
  return type[key] || "—";
}
__name(getCellValue, "getCellValue");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _PartsComparisonTable = class _PartsComparisonTable extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  renderColumnHead(type) {
    const colorStyle = type.color ? { "--col-color": type.color } : {};
    return html`
      <div
        class=${classMap({ "pct-col-head": !0, "is-highlight": type.highlight })}
        style=${styleMap(colorStyle)}
      >
        <span class="pct-col-head__name">${type.name}</span>
        ${type.badge ? html`<span class="pct-badge">${type.badge}</span>` : nothing}
      </div>
    `;
  }
  renderTable(types, criteria) {
    return html`
      <div class="pct-table-wrap" role="region" aria-label=${t("جدول المقارنة", "Comparison table")}>
        <table class="pct-table">
          <thead>
            <tr>
              <th scope="col">${t("المعيار", "Criteria")}</th>
              ${types.map(
      (type) => html`
                  <th scope="col" style=${styleMap(type.color ? { "--col-color": type.color } : {})}>
                    ${this.renderColumnHead(type)}
                  </th>
                `
    )}
            </tr>
          </thead>
          <tbody>
            ${criteria.map(
      (row) => html`
                <tr>
                  <th scope="row">${row.label}</th>
                  ${types.map(
        (type) => html`
                      <td
                        class=${classMap({ "pct-cell": !0, "is-highlight": type.highlight })}
                        style=${styleMap(type.color ? { "--col-color": type.color } : {})}
                      >
                        ${getCellValue(type, row.key)}
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
  renderCard(type, criteria) {
    const colorStyle = type.color ? { "--col-color": type.color } : {};
    return html`
      <article
        class=${classMap({ "pct-card": !0, "is-highlight": type.highlight })}
        style=${styleMap(colorStyle)}
        aria-label=${type.name}
      >
        <div class="pct-card__head">
          <h3 class="pct-card__name">${type.name}</h3>
          ${type.badge ? html`<span class="pct-badge">${type.badge}</span>` : nothing}
        </div>
        <dl class="pct-card__rows">
          ${criteria.map(
      (row) => html`
              <div class="pct-card__row">
                <dt>${row.label}</dt>
                <dd>${getCellValue(type, row.key)}</dd>
              </div>
            `
    )}
        </dl>
      </article>
    `;
  }
  renderCards(types, criteria, layout) {
    return html`
      <div class=${classMap({ "pct-cards": !0, ["pct-cards--stack"]: !0 })} role="list">
        ${types.map((type) => this.renderCard(type, criteria))}
      </div>
      <div class="pct-scroll" role="list" aria-label=${t("تمرير أفقي للمقارنة", "Horizontal comparison scroll")}>
        ${types.map((type) => this.renderCard(type, criteria))}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "pct_"), types = parseTypes(c.pct_types), criteria = parseCriteriaRows(c.pct_rows), layout = resolveLayout(c.pct_layout), title = localizedString(c.pct_title), desc = localizedString(c.pct_desc);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مقارنة أنواع القطع", "Parts type comparison")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class=${classMap({ "pct-shell": !0, "pct-shell--table": layout === "table", "pct-shell--cards": layout === "cards" })}>
            ${layout === "table" ? this.renderTable(types, criteria) : nothing}
            ${this.renderCards(types, criteria, layout)}
          </div>
          ${renderCommerceOutcome(c, "pct_", { ready: types.length > 0 })}
        </div>
      </section>
    `;
  }
};
__name(_PartsComparisonTable, "PartsComparisonTable"), _PartsComparisonTable.styles = [sharedSectionCss, componentStyles];
let PartsComparisonTable = _PartsComparisonTable;
__decorateClass([
  property({ type: Object })
], PartsComparisonTable.prototype, "config");
bindSallaRegistration(PartsComparisonTable);
typeof PartsComparisonTable < "u" && PartsComparisonTable.registerSallaComponent("salla-parts-comparison-table");
export {
  PartsComparisonTable as default
};
