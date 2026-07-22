import { css as _, LitElement as w, html as i, nothing as p } from "lit";
import { property as y, state as h } from "lit/decorators.js";
import { styleMap as $ } from "lit/directives/style-map.js";
import { l as n, t as s, n as x, k as q, c as P, s as N, d as k, r as I, a as R, b as C } from "./registerSalla-Dct4KN_E.js";
import { r as z } from "./commerceOutcome-B3T0_-WJ.js";
import { o as S } from "./whatsapp-GI8N2VNC.js";
const A = _`
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
function B(l) {
  const e = [];
  return x(l).forEach((r, a) => {
    const t = n(r.brand) || n(r.brand_name) || n(r.company) || n(r.name) || n(r.title);
    if (!t) return;
    const o = q(t, "") || `brand-${a + 1}`;
    e.push({
      brandId: o,
      brandName: t,
      brandImage: P(r.brand_image ?? r.image ?? r.logo)
    });
  }), e;
}
function L(l) {
  return B(l.svf_vehicles ?? l.svf_custom_vehicles);
}
function W(l) {
  const e = /* @__PURE__ */ new Map();
  for (const r of l) {
    const a = e.get(r.brandId);
    a ? !a.image && r.brandImage && (a.image = r.brandImage) : e.set(r.brandId, {
      id: r.brandId,
      name: r.brandName,
      image: r.brandImage
    });
  }
  return [...e.values()];
}
function m(l, e, r, a) {
  return n(l[e]) || s(r, a);
}
var j = Object.defineProperty, f = (l, e, r, a) => {
  for (var t = void 0, o = l.length - 1, v; o >= 0; o--)
    (v = l[o]) && (t = v(e, r, t) || t);
  return t && j(e, r, t), t;
};
const b = class b extends w {
  constructor() {
    super(...arguments), this.config = {}, this.brandId = "", this.showRequest = !1, this.reqName = "", this.reqPhone = "", this.reqPart = "", this.reqNote = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    if (e.has("config") && (this.brandId = "", this.showRequest = !1, this.reqName = "", this.reqPhone = "", this.reqPart = "", this.reqNote = ""), !this.brandId) {
      const r = this.brands[0];
      r && (this.brandId = r.id);
    }
  }
  get rows() {
    return L(this.config || {});
  }
  get brands() {
    return W(this.rows);
  }
  get activeBrand() {
    return this.brands.find((e) => e.id === this.brandId) ?? this.brands[0] ?? null;
  }
  sendWhatsAppRequest() {
    const e = this.config || {}, r = n(e.svf_whatsapp_phone) || String(e.svf_whatsapp_phone ?? "").trim();
    if (!r) return;
    const a = [
      n(e.svf_whatsapp_prefix) || s("طلب قطعة غير متوفرة من محدد السيارة:", "Part request from vehicle finder:"),
      this.reqName ? `${s("الاسم", "Name")}: ${this.reqName}` : "",
      this.reqPhone ? `${s("جوال العميل", "Customer phone")}: ${this.reqPhone}` : "",
      this.activeBrand ? `${s("الشركة", "Company")}: ${this.activeBrand.name}` : "",
      this.reqPart ? `${s("القطعة المطلوبة", "Requested part")}: ${this.reqPart}` : "",
      this.reqNote ? `${s("ملاحظات", "Notes")}: ${this.reqNote}` : ""
    ].filter(Boolean);
    S(r, a.join(`
`));
  }
  renderBrandTabs(e) {
    return i`
      <div
        class="svf-tabs"
        role="tablist"
        aria-label=${m(this.config, "svf_brand_label", "الشركة", "Company")}
      >
        ${e.map((r) => {
      const a = this.brandId === r.id, t = r.name.charAt(0).toUpperCase();
      return i`
            <button
              type="button"
              class="svf-brand"
              role="tab"
              aria-selected=${a ? "true" : "false"}
              @click=${() => this.brandId = r.id}
            >
              ${r.image ? i`<img class="svf-brand__img" src=${r.image} alt="" loading="lazy" />` : i`<span class="svf-brand__icon" aria-hidden="true">${t}</span>`}
              <span class="svf-brand__name">${r.name}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  renderWhatsAppPanel(e) {
    if (!k(e.svf_show_whatsapp_request, !0)) return p;
    if (!(n(e.svf_whatsapp_phone) || String(e.svf_whatsapp_phone ?? "").trim())) return p;
    const a = m(e, "svf_whatsapp_open_label", "لم تجد طلبك؟ أرسله عبر واتساب", "Can't find it? Request on WhatsApp"), t = m(e, "svf_whatsapp_send_label", "إرسال عبر واتساب", "Send via WhatsApp"), o = n(e.svf_whatsapp_title) || s("طلب قطعة غير متوفرة", "Request a missing part"), v = n(e.svf_whatsapp_desc) || s(
      "املأ البيانات وسنفتح واتساب برسالة جاهزة للمتجر.",
      "Fill the form and we will open WhatsApp with a ready message."
    );
    if (!this.showRequest)
      return i`
        <div class="svf-actions" style="justify-content:center;margin-top:0.35rem">
          <button
            type="button"
            class="fs-btn fs-btn--ghost fs-tap"
            @click=${() => {
        this.showRequest = !0, this.requestUpdate(), requestAnimationFrame(() => {
          var c, u;
          (u = (c = this.renderRoot) == null ? void 0 : c.querySelector(".svf-wa")) == null || u.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }}
          >
            ${a}
          </button>
        </div>
      `;
    const g = !!(this.reqPart.trim() || this.reqNote.trim() || this.activeBrand);
    return i`
      <aside class="svf-wa" aria-label=${o}>
        <div class="svf-wa__head">
          <h3 class="svf-wa__title">${o}</h3>
          <p class="svf-wa__desc">${v}</p>
        </div>
        <div class="svf-wa__form">
          <div class="svf-wa__row">
            <div class="svf-field">
              <label class="svf-label" for="svf-req-name">${s("الاسم", "Name")}</label>
              <input
                id="svf-req-name"
                class="svf-input"
                .value=${this.reqName}
                @input=${(c) => {
      this.reqName = c.target.value;
    }}
              />
            </div>
            <div class="svf-field">
              <label class="svf-label" for="svf-req-phone">${s("رقم الجوال", "Phone")}</label>
              <input
                id="svf-req-phone"
                class="svf-input"
                type="tel"
                .value=${this.reqPhone}
                @input=${(c) => {
      this.reqPhone = c.target.value;
    }}
              />
            </div>
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-part">${s("القطعة المطلوبة", "Requested part")}</label>
            <input
              id="svf-req-part"
              class="svf-input"
              .value=${this.reqPart}
              placeholder=${s("مثال: فلتر زيت أصلي", "e.g. OEM oil filter")}
              @input=${(c) => {
      this.reqPart = c.target.value;
    }}
            />
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-note">${s("ملاحظات", "Notes")}</label>
            <textarea
              id="svf-req-note"
              class="svf-textarea"
              .value=${this.reqNote}
              @input=${(c) => {
      this.reqNote = c.target.value;
    }}
            ></textarea>
          </div>
          ${this.activeBrand ? i`<p class="svf-field-hint">${s("الشركة المختارة", "Selected company")}: ${this.activeBrand.name}</p>` : p}
          <div class="svf-actions">
            <button
              type="button"
              class="fs-btn fs-tap svf-btn-wa"
              ?disabled=${!g}
              @click=${() => this.sendWhatsAppRequest()}
            >
              ${t}
            </button>
            <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => {
      this.showRequest = !1;
    }}>
              ${s("إلغاء", "Cancel")}
            </button>
          </div>
        </div>
      </aside>
    `;
  }
  renderEmptyMerchant() {
    return i`
      <div class="svf-card">
        <p class="svf-hint">
          ${s(
      "أضف شركات السيارات من إعدادات العنصر (الشركة والصورة) ليظهر المحدد للعملاء.",
      "Add car companies in the component settings (company and image) so shoppers can use the finder."
    )}
        </p>
      </div>
    `;
  }
  renderProducts(e) {
    return z(e, "svf_", {
      ready: !!this.activeBrand
    });
  }
  render() {
    const e = this.config || {}, r = I(e, "svf_"), a = this.brands, t = n(e.svf_title), o = n(e.svf_desc);
    return i`
      <section
        class="fs-section"
        style=${$(R(r))}
        aria-label=${t || s("مُحدّد السيارة الذكي", "Smart vehicle finder")}
      >
        <div class="fs-container">
          <div class="svf-shell">
            ${t || o ? i`<div class="fs-hero">
                  <p class="fs-eyebrow">${s("تسوق حسب الشركة", "Shop by company")}</p>
                  ${t ? i`<h2 class="fs-title">${t}</h2>` : p}
                  ${o ? i`<p class="fs-desc">${o}</p>` : p}
                </div>` : p}

            ${a.length ? i`
                  ${this.renderBrandTabs(a)}
                  ${this.renderProducts(e)}
                  ${this.renderWhatsAppPanel(e)}
                ` : this.renderEmptyMerchant()}
          </div>
        </div>
      </section>
    `;
  }
};
b.styles = [N, A];
let d = b;
f([
  y({ type: Object })
], d.prototype, "config");
f([
  h()
], d.prototype, "brandId");
f([
  h()
], d.prototype, "showRequest");
f([
  h()
], d.prototype, "reqName");
f([
  h()
], d.prototype, "reqPhone");
f([
  h()
], d.prototype, "reqPart");
f([
  h()
], d.prototype, "reqNote");
C(
  d
);
typeof d < "u" && d.registerSallaComponent("salla-smart-vehicle-finder");
export {
  d as default
};
