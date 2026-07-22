var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, e as extractLink, c as extractImageUrl, g as getRadioValue, t, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .wac-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.45rem;
    margin-bottom: 1rem;
  }

  .wac-tab {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 44px;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  }

  .wac-tab:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
  }

  .wac-tab:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .wac-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .wac-tab__icon {
    font-size: 1rem;
    line-height: 1;
  }

  .wac-panel {
    display: grid;
    gap: 0.85rem;
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .wac-panel__head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .wac-panel__icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1.15rem;
    flex: 0 0 auto;
  }

  .wac-panel__title {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .wac-panel__media {
    margin: 0;
    border-radius: calc(var(--section-radius, 20px) * 0.6);
    overflow: hidden;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
  }

  .wac-panel__media img {
    display: block;
    width: 100%;
    max-height: 320px;
    object-fit: cover;
  }

  .wac-panel__body {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.7;
    color: var(--text-color, #111827);
    white-space: pre-wrap;
  }

  .wac-panel__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    width: fit-content;
    min-height: 40px;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .wac-panel__link:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
  }

  .wac-accordion {
    display: grid;
    gap: 0.55rem;
  }

  .wac-acc {
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    background: var(--card-bg, #fff);
    overflow: hidden;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .wac-acc.is-open {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  }

  .wac-acc__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 52px;
    padding: 0.8rem 0.95rem;
    border: 0;
    background: transparent;
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 800;
    text-align: start;
    cursor: pointer;
  }

  .wac-acc__trigger:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: -3px;
  }

  .wac-acc__icon {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1rem;
    flex: 0 0 auto;
  }

  .wac-acc__title {
    flex: 1 1 auto;
    min-width: 0;
  }

  .wac-acc__chevron {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    flex: 0 0 auto;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .wac-acc.is-open .wac-acc__chevron {
    transform: rotate(180deg);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .wac-acc__content {
    display: grid;
    gap: 0.75rem;
    padding: 0 0.95rem 1rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .wac-cards {
    display: grid;
    gap: 0.85rem;
  }

  @media (min-width: 640px) {
    .wac-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .wac-cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .wac-card {
    display: grid;
    gap: 0.7rem;
    align-content: start;
    padding: 1.05rem 1rem 1.15rem;
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .wac-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.09);
  }

  .wac-card .wac-panel__title {
    font-size: 0.95rem;
  }

  .wac-card .wac-panel__body {
    font-size: 0.86rem;
  }

  .wac-card .wac-panel__media img {
    max-height: 180px;
  }

  @media (prefers-reduced-motion: reduce) {
    .wac-tab,
    .wac-acc,
    .wac-acc__chevron,
    .wac-card {
      transition: none !important;
    }

    .wac-card:hover {
      transform: none;
    }
  }
`;
function resolveLayout(value) {
  const raw = getRadioValue(value, "tabs").toLowerCase();
  return raw === "accordion" || raw === "cards" ? raw : "tabs";
}
__name(resolveLayout, "resolveLayout");
function parseItems(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title);
    return {
      id: String(row.id ?? "").trim() || `item-${i + 1}`,
      title,
      icon: String(row.icon ?? "").trim(),
      body: localizedString(row.body) || localizedString(row.desc),
      image: extractImageUrl(row.image),
      link: extractLink(row.link),
      linkLabel: localizedString(row.link_label)
    };
  }).filter((item) => item.title);
  return parsed.length ? parsed : defaultItems();
}
__name(parseItems, "parseItems");
function defaultItems() {
  return [
    {
      id: "duration",
      title: t("مدة الضمان", "Warranty duration"),
      icon: "📅",
      body: t("تختلف حسب نوع القطعة — الأصلي غالبًا 12–24 شهرًا.", "Varies by part type — OEM often 12–24 months."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "coverage",
      title: t("ما يشمله الضمان", "What is covered"),
      icon: "✅",
      body: t("عيوب التصنيع والأداء تحت الاستخدام العادي.", "Manufacturing defects under normal use."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "replacement",
      title: t("شروط الاستبدال", "Replacement terms"),
      icon: "🔄",
      body: t("فاتورة الشراء + فحص الورشة المعتمدة.", "Purchase invoice + certified workshop inspection."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "source",
      title: t("مصدر القطعة", "Part source"),
      icon: "🏭",
      body: t("نوضح مصدر كل فئة: أصلي، بديل معتمد، أو مجدد.", "We disclose source for each category: OEM, certified aftermarket, or refurbished."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "certs",
      title: t("شهادات الاعتماد", "Certifications"),
      icon: "📜",
      body: t("قطعنا المختارة تتوافق مع معايير الجودة المعترف بها.", "Selected parts meet recognized quality standards."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "care",
      title: t("إرشادات الحفاظ على الضمان", "Keeping warranty valid"),
      icon: "🛡️",
      body: t("التركيب في ورشة معتمدة والاحتفاظ بالفاتورة.", "Professional installation and keeping your invoice."),
      image: "",
      link: "",
      linkLabel: ""
    }
  ];
}
__name(defaultItems, "defaultItems");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _WarrantyAuthenticityCenter = class _WarrantyAuthenticityCenter extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.openAccordion = /* @__PURE__ */ new Set(), this.boundLangHandler = () => this.requestUpdate();
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
      const items = parseItems((_a = this.config) == null ? void 0 : _a.wac_items);
      items.some((item) => item.id === this.activeId) || (this.activeId = ((_b = items[0]) == null ? void 0 : _b.id) ?? ""), !this.openAccordion.size && items.length && (this.openAccordion = /* @__PURE__ */ new Set([items[0].id]));
    }
  }
  get items() {
    var _a;
    return parseItems((_a = this.config) == null ? void 0 : _a.wac_items);
  }
  get active() {
    return this.items.find((item) => item.id === this.activeId) ?? this.items[0] ?? null;
  }
  renderItemLink(item) {
    if (!item.link) return nothing;
    const label = item.linkLabel || t("المزيد", "Learn more");
    return html`
      <a
        class="wac-panel__link"
        href=${item.link}
        target="_blank"
        rel=${isExternalUrl(item.link) ? "noopener noreferrer" : nothing}
      >
        ${label}
      </a>
    `;
  }
  renderItemImage(item) {
    return item.image ? html`
      <figure class="wac-panel__media">
        <img src=${item.image} alt=${item.title} loading="lazy" />
      </figure>
    ` : nothing;
  }
  renderItemBody(item) {
    return html`
      ${this.renderItemImage(item)}
      ${item.body ? html`<p class="wac-panel__body">${item.body}</p>` : nothing}
      ${this.renderItemLink(item)}
    `;
  }
  renderItemHead(item) {
    return html`
      <div class="wac-panel__head">
        ${item.icon ? html`<span class="wac-panel__icon ${item.icon.startsWith("sicon-") ? item.icon : ""}" aria-hidden="true">
              ${item.icon.startsWith("sicon-") ? "" : item.icon}
            </span>` : nothing}
        <h3 class="wac-panel__title">${item.title}</h3>
      </div>
    `;
  }
  onTabsKeydown(e) {
    const items = this.items;
    if (items.length < 2) return;
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (items.findIndex((item) => {
      var _a;
      return item.id === ((_a = this.active) == null ? void 0 : _a.id);
    }) + delta + items.length) % items.length;
    this.activeId = items[next].id, this.updateComplete.then(() => {
      var _a;
      (_a = this.renderRoot.querySelector(".wac-tab.is-active")) == null || _a.focus();
    });
  }
  renderTabs(items) {
    const active = this.active;
    return html`
      <div class="wac-tabs" role="tablist" @keydown=${(e) => this.onTabsKeydown(e)}>
        ${items.map(
      (item) => html`
            <button
              type="button"
              class=${classMap({ "wac-tab": !0, "is-active": item.id === (active == null ? void 0 : active.id) })}
              role="tab"
              aria-selected=${item.id === (active == null ? void 0 : active.id) ? "true" : "false"}
              tabindex=${item.id === (active == null ? void 0 : active.id) ? "0" : "-1"}
              @click=${() => this.activeId = item.id}
            >
              ${item.icon && !item.icon.startsWith("sicon-") ? html`<span class="wac-tab__icon" aria-hidden="true">${item.icon}</span>` : nothing}
              <span>${item.title}</span>
            </button>
          `
    )}
      </div>
      ${active ? html`<div class="wac-panel" role="tabpanel">
            ${this.renderItemHead(active)}
            ${this.renderItemBody(active)}
          </div>` : nothing}
    `;
  }
  toggleAccordion(id) {
    const next = new Set(this.openAccordion);
    next.has(id) ? next.delete(id) : next.add(id), this.openAccordion = next;
  }
  renderAccordion(items) {
    return html`
      <div class="wac-accordion">
        ${items.map((item) => {
      const open = this.openAccordion.has(item.id);
      return html`
            <div class=${classMap({ "wac-acc": !0, "is-open": open })}>
              <button
                type="button"
                class="wac-acc__trigger"
                aria-expanded=${open ? "true" : "false"}
                @click=${() => this.toggleAccordion(item.id)}
              >
                ${item.icon && !item.icon.startsWith("sicon-") ? html`<span class="wac-acc__icon" aria-hidden="true">${item.icon}</span>` : nothing}
                <span class="wac-acc__title">${item.title}</span>
                <span class="wac-acc__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              ${open ? html`<div class="wac-acc__content">${this.renderItemBody(item)}</div>` : nothing}
            </div>
          `;
    })}
      </div>
    `;
  }
  renderCards(items) {
    return html`
      <div class="wac-cards">
        ${items.map(
      (item) => html`
            <article class="wac-card">
              ${this.renderItemHead(item)}
              ${this.renderItemBody(item)}
            </article>
          `
    )}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "wac_"), items = this.items, layout = resolveLayout(c.wac_layout), title = localizedString(c.wac_title), desc = localizedString(c.wac_desc);
    return items.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مركز الضمان والأصالة", "Warranty & authenticity center")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                <p class="fs-eyebrow">${t("اشترِ بثقة", "Buy with confidence")}</p>
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          ${layout === "tabs" ? this.renderTabs(items) : nothing}
          ${layout === "accordion" ? this.renderAccordion(items) : nothing}
          ${layout === "cards" ? this.renderCards(items) : nothing}

          ${renderCommerceOutcome(c, "wac_", { ready: items.length > 0 })}
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف عناصر مركز الثقة من الإعدادات", "Add trust center items in settings")}
      </div>`;
  }
};
__name(_WarrantyAuthenticityCenter, "WarrantyAuthenticityCenter"), _WarrantyAuthenticityCenter.styles = [sharedSectionCss, componentStyles];
let WarrantyAuthenticityCenter = _WarrantyAuthenticityCenter;
__decorateClass([
  property({ type: Object })
], WarrantyAuthenticityCenter.prototype, "config");
__decorateClass([
  state()
], WarrantyAuthenticityCenter.prototype, "activeId");
__decorateClass([
  state()
], WarrantyAuthenticityCenter.prototype, "openAccordion");
bindSallaRegistration(WarrantyAuthenticityCenter);
typeof WarrantyAuthenticityCenter < "u" && WarrantyAuthenticityCenter.registerSallaComponent("salla-warranty-authenticity-center");
export {
  WarrantyAuthenticityCenter as default
};
