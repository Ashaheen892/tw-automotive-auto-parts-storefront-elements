import { css as w, LitElement as v, nothing as n, html as t } from "lit";
import { property as x, state as u } from "lit/decorators.js";
import { classMap as b } from "lit/directives/class-map.js";
import { styleMap as y } from "lit/directives/style-map.js";
import { n as _, l as p, e as k, c as $, g as I, t as i, s as L, i as z, r as A, a as S, b as C } from "./registerSalla-Dct4KN_E.js";
import { r as B } from "./commerceOutcome-B3T0_-WJ.js";
const E = w`
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
function H(l) {
  const e = I(l, "tabs").toLowerCase();
  return e === "accordion" || e === "cards" ? e : "tabs";
}
function h(l) {
  const e = _(l).map((r, a) => {
    const o = p(r.title);
    return {
      id: String(r.id ?? "").trim() || `item-${a + 1}`,
      title: o,
      icon: String(r.icon ?? "").trim(),
      body: p(r.body) || p(r.desc),
      image: $(r.image),
      link: k(r.link),
      linkLabel: p(r.link_label)
    };
  }).filter((r) => r.title);
  return e.length ? e : M();
}
function M() {
  return [
    {
      id: "duration",
      title: i("مدة الضمان", "Warranty duration"),
      icon: "📅",
      body: i("تختلف حسب نوع القطعة — الأصلي غالبًا 12–24 شهرًا.", "Varies by part type — OEM often 12–24 months."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "coverage",
      title: i("ما يشمله الضمان", "What is covered"),
      icon: "✅",
      body: i("عيوب التصنيع والأداء تحت الاستخدام العادي.", "Manufacturing defects under normal use."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "replacement",
      title: i("شروط الاستبدال", "Replacement terms"),
      icon: "🔄",
      body: i("فاتورة الشراء + فحص الورشة المعتمدة.", "Purchase invoice + certified workshop inspection."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "source",
      title: i("مصدر القطعة", "Part source"),
      icon: "🏭",
      body: i("نوضح مصدر كل فئة: أصلي، بديل معتمد، أو مجدد.", "We disclose source for each category: OEM, certified aftermarket, or refurbished."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "certs",
      title: i("شهادات الاعتماد", "Certifications"),
      icon: "📜",
      body: i("قطعنا المختارة تتوافق مع معايير الجودة المعترف بها.", "Selected parts meet recognized quality standards."),
      image: "",
      link: "",
      linkLabel: ""
    },
    {
      id: "care",
      title: i("إرشادات الحفاظ على الضمان", "Keeping warranty valid"),
      icon: "🛡️",
      body: i("التركيب في ورشة معتمدة والاحتفاظ بالفاتورة.", "Professional installation and keeping your invoice."),
      image: "",
      link: "",
      linkLabel: ""
    }
  ];
}
var W = Object.defineProperty, m = (l, e, r, a) => {
  for (var o = void 0, c = l.length - 1, s; c >= 0; c--)
    (s = l[c]) && (o = s(e, r, o) || o);
  return o && W(e, r, o), o;
};
const g = class g extends v {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.openAccordion = /* @__PURE__ */ new Set(), this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var r, a;
    if (e.has("config")) {
      const o = h((r = this.config) == null ? void 0 : r.wac_items);
      o.some((c) => c.id === this.activeId) || (this.activeId = ((a = o[0]) == null ? void 0 : a.id) ?? ""), !this.openAccordion.size && o.length && (this.openAccordion = /* @__PURE__ */ new Set([o[0].id]));
    }
  }
  get items() {
    var e;
    return h((e = this.config) == null ? void 0 : e.wac_items);
  }
  get active() {
    return this.items.find((e) => e.id === this.activeId) ?? this.items[0] ?? null;
  }
  renderItemLink(e) {
    if (!e.link) return n;
    const r = e.linkLabel || i("المزيد", "Learn more");
    return t`
      <a
        class="wac-panel__link"
        href=${e.link}
        target="_blank"
        rel=${z(e.link) ? "noopener noreferrer" : n}
      >
        ${r}
      </a>
    `;
  }
  renderItemImage(e) {
    return e.image ? t`
      <figure class="wac-panel__media">
        <img src=${e.image} alt=${e.title} loading="lazy" />
      </figure>
    ` : n;
  }
  renderItemBody(e) {
    return t`
      ${this.renderItemImage(e)}
      ${e.body ? t`<p class="wac-panel__body">${e.body}</p>` : n}
      ${this.renderItemLink(e)}
    `;
  }
  renderItemHead(e) {
    return t`
      <div class="wac-panel__head">
        ${e.icon ? t`<span class="wac-panel__icon ${e.icon.startsWith("sicon-") ? e.icon : ""}" aria-hidden="true">
              ${e.icon.startsWith("sicon-") ? "" : e.icon}
            </span>` : n}
        <h3 class="wac-panel__title">${e.title}</h3>
      </div>
    `;
  }
  onTabsKeydown(e) {
    const r = this.items;
    if (r.length < 2) return;
    const a = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!a) return;
    e.preventDefault();
    const c = (r.findIndex((s) => {
      var f;
      return s.id === ((f = this.active) == null ? void 0 : f.id);
    }) + a + r.length) % r.length;
    this.activeId = r[c].id, this.updateComplete.then(() => {
      var s;
      (s = this.renderRoot.querySelector(".wac-tab.is-active")) == null || s.focus();
    });
  }
  renderTabs(e) {
    const r = this.active;
    return t`
      <div class="wac-tabs" role="tablist" @keydown=${(a) => this.onTabsKeydown(a)}>
        ${e.map(
      (a) => t`
            <button
              type="button"
              class=${b({ "wac-tab": !0, "is-active": a.id === (r == null ? void 0 : r.id) })}
              role="tab"
              aria-selected=${a.id === (r == null ? void 0 : r.id) ? "true" : "false"}
              tabindex=${a.id === (r == null ? void 0 : r.id) ? "0" : "-1"}
              @click=${() => this.activeId = a.id}
            >
              ${a.icon && !a.icon.startsWith("sicon-") ? t`<span class="wac-tab__icon" aria-hidden="true">${a.icon}</span>` : n}
              <span>${a.title}</span>
            </button>
          `
    )}
      </div>
      ${r ? t`<div class="wac-panel" role="tabpanel">
            ${this.renderItemHead(r)}
            ${this.renderItemBody(r)}
          </div>` : n}
    `;
  }
  toggleAccordion(e) {
    const r = new Set(this.openAccordion);
    r.has(e) ? r.delete(e) : r.add(e), this.openAccordion = r;
  }
  renderAccordion(e) {
    return t`
      <div class="wac-accordion">
        ${e.map((r) => {
      const a = this.openAccordion.has(r.id);
      return t`
            <div class=${b({ "wac-acc": !0, "is-open": a })}>
              <button
                type="button"
                class="wac-acc__trigger"
                aria-expanded=${a ? "true" : "false"}
                @click=${() => this.toggleAccordion(r.id)}
              >
                ${r.icon && !r.icon.startsWith("sicon-") ? t`<span class="wac-acc__icon" aria-hidden="true">${r.icon}</span>` : n}
                <span class="wac-acc__title">${r.title}</span>
                <span class="wac-acc__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              ${a ? t`<div class="wac-acc__content">${this.renderItemBody(r)}</div>` : n}
            </div>
          `;
    })}
      </div>
    `;
  }
  renderCards(e) {
    return t`
      <div class="wac-cards">
        ${e.map(
      (r) => t`
            <article class="wac-card">
              ${this.renderItemHead(r)}
              ${this.renderItemBody(r)}
            </article>
          `
    )}
      </div>
    `;
  }
  render() {
    const e = this.config || {}, r = A(e, "wac_"), a = this.items, o = H(e.wac_layout), c = p(e.wac_title), s = p(e.wac_desc);
    return a.length ? t`
      <section
        class="fs-section"
        style=${y(S(r))}
        aria-label=${c || i("مركز الضمان والأصالة", "Warranty & authenticity center")}
      >
        <div class="fs-container">
          ${c || s ? t`<div class="fs-hero">
                <p class="fs-eyebrow">${i("اشترِ بثقة", "Buy with confidence")}</p>
                ${c ? t`<h2 class="fs-title">${c}</h2>` : n}
                ${s ? t`<p class="fs-desc">${s}</p>` : n}
              </div>` : n}

          ${o === "tabs" ? this.renderTabs(a) : n}
          ${o === "accordion" ? this.renderAccordion(a) : n}
          ${o === "cards" ? this.renderCards(a) : n}

          ${B(e, "wac_", { ready: a.length > 0 })}
        </div>
      </section>
    ` : t`<div class="fs-empty" role="status">
        ${i("أضف عناصر مركز الثقة من الإعدادات", "Add trust center items in settings")}
      </div>`;
  }
};
g.styles = [L, E];
let d = g;
m([
  x({ type: Object })
], d.prototype, "config");
m([
  u()
], d.prototype, "activeId");
m([
  u()
], d.prototype, "openAccordion");
C(d);
typeof d < "u" && d.registerSallaComponent("salla-warranty-authenticity-center");
export {
  d as default
};
