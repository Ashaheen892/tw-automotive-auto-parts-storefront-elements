var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, t, n as normalizeCollection, k as itemIdFromLabel, c as extractImageUrl, s as sharedSectionCss, d as isTruthy, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
import { o as openWhatsApp } from "./whatsapp-C3glLfzz.js";
const componentStyles = css`
  .svf-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }

  .svf-card {
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .svf-field {
    display: grid;
    gap: 0.5rem;
  }

  .svf-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .svf-input,
  .svf-textarea {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.92rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
  }

  .svf-textarea {
    min-height: 96px;
    resize: vertical;
    line-height: 1.5;
  }

  .svf-input:focus,
  .svf-textarea:focus {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
    outline: none;
  }

  /* ── Company tabs ── */
  .svf-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
  }

  .svf-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    min-width: 6.2rem;
    min-height: 92px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
  }

  .svf-brand:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .svf-brand[aria-selected='true'] {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .svf-brand__img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    display: block;
  }

  .svf-brand__icon {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
    font-size: 1.1rem;
    font-weight: 800;
  }

  .svf-brand__name {
    font-size: 0.78rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
  }

  .svf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.15rem;
  }

  .svf-hint {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    line-height: 1.55;
    text-align: center;
  }

  .svf-field-hint {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted-color, #64748b);
    line-height: 1.45;
  }

  /* ── WhatsApp panel ── */
  .svf-wa {
    display: grid;
    gap: 0.85rem;
    padding: 1.1rem 1.05rem;
    border-radius: var(--section-radius, 20px);
    background: color-mix(in srgb, #25d366 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, #25d366 28%, var(--border-color, #d9e2ec));
  }

  .svf-wa__head {
    display: grid;
    gap: 0.25rem;
  }

  .svf-wa__title {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .svf-wa__desc {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    line-height: 1.5;
  }

  .svf-wa__form {
    display: grid;
    gap: 0.7rem;
  }

  .svf-wa__row {
    display: grid;
    gap: 0.7rem;
  }

  @media (min-width: 640px) {
    .svf-wa__row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .svf-btn-wa {
    background: #25d366 !important;
    color: #fff !important;
    border-color: #1ebe57 !important;
  }

  .svf-btn-wa:hover {
    filter: brightness(0.96);
  }

  @media (max-width: 639px) {
    .svf-tabs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(4.8rem, 1fr));
    }

    .svf-brand {
      min-width: 0;
      padding: 0.7rem 0.45rem;
    }
  }
`;
function parseVehicleRows(raw) {
  const rows = [];
  return normalizeCollection(raw).forEach((row, i) => {
    const brandName = localizedString(row.brand) || localizedString(row.brand_name) || localizedString(row.company) || localizedString(row.name) || localizedString(row.title);
    if (!brandName) return;
    const brandId = itemIdFromLabel(brandName, "") || `brand-${i + 1}`;
    rows.push({
      brandId,
      brandName,
      brandImage: extractImageUrl(row.brand_image ?? row.image ?? row.logo)
    });
  }), rows;
}
__name(parseVehicleRows, "parseVehicleRows");
function resolveVehicleRows(config) {
  return parseVehicleRows(config.svf_vehicles ?? config.svf_custom_vehicles);
}
__name(resolveVehicleRows, "resolveVehicleRows");
function brandsFromRows(rows) {
  const map = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const existing = map.get(row.brandId);
    existing ? !existing.image && row.brandImage && (existing.image = row.brandImage) : map.set(row.brandId, {
      id: row.brandId,
      name: row.brandName,
      image: row.brandImage
    });
  }
  return [...map.values()];
}
__name(brandsFromRows, "brandsFromRows");
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _SmartVehicleFinder = class _SmartVehicleFinder extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.brandId = "", this.showRequest = !1, this.reqName = "", this.reqPhone = "", this.reqPart = "", this.reqNote = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    if (changed.has("config") && (this.brandId = "", this.showRequest = !1, this.reqName = "", this.reqPhone = "", this.reqPart = "", this.reqNote = ""), !this.brandId) {
      const first = this.brands[0];
      first && (this.brandId = first.id);
    }
  }
  get rows() {
    return resolveVehicleRows(this.config || {});
  }
  get brands() {
    return brandsFromRows(this.rows);
  }
  get activeBrand() {
    return this.brands.find((b) => b.id === this.brandId) ?? this.brands[0] ?? null;
  }
  sendWhatsAppRequest() {
    const c = this.config || {}, phone = localizedString(c.svf_whatsapp_phone) || String(c.svf_whatsapp_phone ?? "").trim();
    if (!phone) return;
    const lines = [
      localizedString(c.svf_whatsapp_prefix) || t("طلب قطعة غير متوفرة من محدد السيارة:", "Part request from vehicle finder:"),
      this.reqName ? `${t("الاسم", "Name")}: ${this.reqName}` : "",
      this.reqPhone ? `${t("جوال العميل", "Customer phone")}: ${this.reqPhone}` : "",
      this.activeBrand ? `${t("الشركة", "Company")}: ${this.activeBrand.name}` : "",
      this.reqPart ? `${t("القطعة المطلوبة", "Requested part")}: ${this.reqPart}` : "",
      this.reqNote ? `${t("ملاحظات", "Notes")}: ${this.reqNote}` : ""
    ].filter(Boolean);
    openWhatsApp(phone, lines.join(`
`));
  }
  renderBrandTabs(brands) {
    return html`
      <div
        class="svf-tabs"
        role="tablist"
        aria-label=${label(this.config, "svf_brand_label", "الشركة", "Company")}
      >
        ${brands.map((brand) => {
      const active = this.brandId === brand.id, initial = brand.name.charAt(0).toUpperCase();
      return html`
            <button
              type="button"
              class="svf-brand"
              role="tab"
              aria-selected=${active ? "true" : "false"}
              @click=${() => this.brandId = brand.id}
            >
              ${brand.image ? html`<img class="svf-brand__img" src=${brand.image} alt="" loading="lazy" />` : html`<span class="svf-brand__icon" aria-hidden="true">${initial}</span>`}
              <span class="svf-brand__name">${brand.name}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  renderWhatsAppPanel(c) {
    if (!isTruthy(c.svf_show_whatsapp_request, !0)) return nothing;
    if (!(localizedString(c.svf_whatsapp_phone) || String(c.svf_whatsapp_phone ?? "").trim())) return nothing;
    const openLabel = label(c, "svf_whatsapp_open_label", "لم تجد طلبك؟ أرسله عبر واتساب", "Can't find it? Request on WhatsApp"), sendLabel = label(c, "svf_whatsapp_send_label", "إرسال عبر واتساب", "Send via WhatsApp"), title = localizedString(c.svf_whatsapp_title) || t("طلب قطعة غير متوفرة", "Request a missing part"), desc = localizedString(c.svf_whatsapp_desc) || t(
      "املأ البيانات وسنفتح واتساب برسالة جاهزة للمتجر.",
      "Fill the form and we will open WhatsApp with a ready message."
    );
    if (!this.showRequest)
      return html`
        <div class="svf-actions" style="justify-content:center;margin-top:0.35rem">
          <button
            type="button"
            class="fs-btn fs-btn--ghost fs-tap"
            @click=${() => {
        this.showRequest = !0, this.requestUpdate(), requestAnimationFrame(() => {
          var _a, _b;
          (_b = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".svf-wa")) == null || _b.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }}
          >
            ${openLabel}
          </button>
        </div>
      `;
    const canSend = !!(this.reqPart.trim() || this.reqNote.trim() || this.activeBrand);
    return html`
      <aside class="svf-wa" aria-label=${title}>
        <div class="svf-wa__head">
          <h3 class="svf-wa__title">${title}</h3>
          <p class="svf-wa__desc">${desc}</p>
        </div>
        <div class="svf-wa__form">
          <div class="svf-wa__row">
            <div class="svf-field">
              <label class="svf-label" for="svf-req-name">${t("الاسم", "Name")}</label>
              <input
                id="svf-req-name"
                class="svf-input"
                .value=${this.reqName}
                @input=${(e) => {
      this.reqName = e.target.value;
    }}
              />
            </div>
            <div class="svf-field">
              <label class="svf-label" for="svf-req-phone">${t("رقم الجوال", "Phone")}</label>
              <input
                id="svf-req-phone"
                class="svf-input"
                type="tel"
                .value=${this.reqPhone}
                @input=${(e) => {
      this.reqPhone = e.target.value;
    }}
              />
            </div>
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-part">${t("القطعة المطلوبة", "Requested part")}</label>
            <input
              id="svf-req-part"
              class="svf-input"
              .value=${this.reqPart}
              placeholder=${t("مثال: فلتر زيت أصلي", "e.g. OEM oil filter")}
              @input=${(e) => {
      this.reqPart = e.target.value;
    }}
            />
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-note">${t("ملاحظات", "Notes")}</label>
            <textarea
              id="svf-req-note"
              class="svf-textarea"
              .value=${this.reqNote}
              @input=${(e) => {
      this.reqNote = e.target.value;
    }}
            ></textarea>
          </div>
          ${this.activeBrand ? html`<p class="svf-field-hint">${t("الشركة المختارة", "Selected company")}: ${this.activeBrand.name}</p>` : nothing}
          <div class="svf-actions">
            <button
              type="button"
              class="fs-btn fs-tap svf-btn-wa"
              ?disabled=${!canSend}
              @click=${() => this.sendWhatsAppRequest()}
            >
              ${sendLabel}
            </button>
            <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => {
      this.showRequest = !1;
    }}>
              ${t("إلغاء", "Cancel")}
            </button>
          </div>
        </div>
      </aside>
    `;
  }
  renderEmptyMerchant() {
    return html`
      <div class="svf-card">
        <p class="svf-hint">
          ${t(
      "أضف شركات السيارات من إعدادات العنصر (الشركة والصورة) ليظهر المحدد للعملاء.",
      "Add car companies in the component settings (company and image) so shoppers can use the finder."
    )}
        </p>
      </div>
    `;
  }
  renderProducts(c) {
    return renderCommerceOutcome(c, "svf_", {
      ready: !!this.activeBrand
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "svf_"), brands = this.brands, title = localizedString(c.svf_title), desc = localizedString(c.svf_desc);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مُحدّد السيارة الذكي", "Smart vehicle finder")}
      >
        <div class="fs-container">
          <div class="svf-shell">
            ${title || desc ? html`<div class="fs-hero">
                  <p class="fs-eyebrow">${t("تسوق حسب الشركة", "Shop by company")}</p>
                  ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                  ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
                </div>` : nothing}

            ${brands.length ? html`
                  ${this.renderBrandTabs(brands)}
                  ${this.renderProducts(c)}
                  ${this.renderWhatsAppPanel(c)}
                ` : this.renderEmptyMerchant()}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_SmartVehicleFinder, "SmartVehicleFinder"), _SmartVehicleFinder.styles = [sharedSectionCss, componentStyles];
let SmartVehicleFinder = _SmartVehicleFinder;
__decorateClass([
  property({ type: Object })
], SmartVehicleFinder.prototype, "config");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "brandId");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "showRequest");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "reqName");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "reqPhone");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "reqPart");
__decorateClass([
  state()
], SmartVehicleFinder.prototype, "reqNote");
bindSallaRegistration(
  SmartVehicleFinder
);
typeof SmartVehicleFinder < "u" && SmartVehicleFinder.registerSallaComponent("salla-smart-vehicle-finder");
export {
  SmartVehicleFinder as default
};
