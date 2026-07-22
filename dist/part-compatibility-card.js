import { css as E, LitElement as T, nothing as n, html as p } from "lit";
import { property as B, state as y } from "lit/decorators.js";
import { classMap as x } from "lit/directives/class-map.js";
import { styleMap as A } from "lit/directives/style-map.js";
import { d as z, n as F, l as u, k as P, t as c, e as q, s as U, r as O, a as j, b as W } from "./registerSalla-Dct4KN_E.js";
import { r as D } from "./commerceOutcome-B3T0_-WJ.js";
import { o as H } from "./whatsapp-GI8N2VNC.js";
const Y = E`
  .pcc-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .pcc-layout {
    display: grid;
    gap: 1.1rem;
  }

  @media (min-width: 880px) {
    .pcc-layout {
      grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.75fr);
      align-items: start;
    }
  }

  .pcc-card {
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1rem;
  }

  .pcc-notice {
    display: grid;
    gap: 0.2rem;
    padding: 0.8rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .pcc-notice__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-notice__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .pcc-steps {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0.45rem;
    align-items: center;
  }

  .pcc-step {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 40px;
    padding: 0.45rem 0.65rem;
    border-radius: calc(var(--section-radius, 20px) * 0.5);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .pcc-step.is-active,
  .pcc-step.is-done {
    color: var(--text-color, #111827);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
  }

  .pcc-step.is-done {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .pcc-step__num {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.68rem;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .pcc-step-line {
    height: 2px;
    background: var(--border-color, #d9e2ec);
  }

  .pcc-block {
    display: grid;
    gap: 0.75rem;
  }

  .pcc-block__title {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pcc-grid {
    display: grid;
    gap: 0.75rem;
  }

  @media (min-width: 560px) {
    .pcc-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .pcc-field {
    display: grid;
    gap: 0.4rem;
  }

  .pcc-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pcc-label span {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-input {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.92rem;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .pcc-input:focus {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
    outline: none;
  }

  .pcc-input.is-invalid {
    border-color: var(--fs-danger, #cf4b4b);
  }

  .pcc-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .pcc-alert {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--fs-danger, #cf4b4b);
  }

  .pcc-result {
    display: grid;
    gap: 0.75rem;
    padding: 0.95rem 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid color-mix(in srgb, var(--fs-success, #2f9e63) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--fs-success, #2f9e63) 8%, var(--card-bg, #fff));
  }

  .pcc-result__title {
    margin: 0;
    font-size: 1rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .pcc-result__desc {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--muted-color, #64748b);
  }

  .pcc-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .pcc-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    min-height: 32px;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    font-size: 0.76rem;
    font-weight: 700;
    color: var(--text-color, #111827);
  }

  .pcc-chip__k {
    color: var(--muted-color, #64748b);
    font-weight: 700;
  }

  .pcc-wa {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.55rem 0.7rem;
    padding: 0.85rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid color-mix(in srgb, #25d366 40%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, #25d366 7%, var(--card-bg, #fff));
  }

  .pcc-wa__icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: #25d366;
    color: #fff;
    flex: 0 0 auto;
  }

  .pcc-wa__text {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .pcc-wa__btn {
    grid-column: 1 / -1;
    background: #25d366 !important;
    border-color: #1ebe57 !important;
    color: #fff !important;
  }

  @media (min-width: 560px) {
    .pcc-wa {
      grid-template-columns: auto 1fr auto;
    }

    .pcc-wa__btn {
      grid-column: auto;
    }
  }

  .pcc-side {
    display: grid;
    gap: 0.85rem;
  }

  .pcc-tips {
    padding: 1.05rem 1.05rem 1.15rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.05);
    display: grid;
    gap: 0.85rem;
  }

  .pcc-tips__head {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .pcc-tips__badge {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .pcc-tips__title {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .pcc-tips ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.55rem;
  }

  .pcc-tips li {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: start;
    gap: 0.55rem;
    padding: 0.55rem 0.6rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
  }

  .pcc-tips__num {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-tips__text {
    font-size: 0.84rem;
    line-height: 1.6;
    font-weight: 600;
    color: var(--text-color, #111827);
  }

  @media (max-width: 879px) {
    .pcc-side {
      order: 2;
    }
  }
`;
function Z(i) {
  return F(i).map((e, r) => {
    const t = u(e.label);
    return t ? {
      id: String(e.id ?? "").trim() || P(t, "") || `field-${r + 1}`,
      label: t,
      placeholder: u(e.placeholder),
      required: z(e.required, !1)
    } : null;
  }).filter((e) => !!e);
}
function K(i) {
  if (typeof i == "string" || i && typeof i == "object" && !Array.isArray(i)) {
    const e = u(i, "");
    return e ? e.split(/\r?\n/).map((r) => r.trim()).filter(Boolean) : [];
  }
  return F(i).map((e) => u(e.tip) || u(e.text)).filter(Boolean);
}
function R() {
  return [
    c("طابق رقم القطعة مع كتالوج الشركة.", "Match the part number to the OEM catalog."),
    c("تأكد من سنة الصنع بدقة.", "Confirm the exact model year."),
    c("عند الشك تواصل مع الدعم.", "Contact support if unsure.")
  ];
}
function d(i, e, r, t) {
  return u(i[e]) || c(r, t);
}
function G(i) {
  return q(i.pcc_cta_url);
}
function C(i) {
  return String(i.pcc_whatsapp_phone ?? "").trim();
}
function J(i, e) {
  const r = u(i.pcc_whatsapp_prefix) || c(
    "أرغب في التحقق من توافق هذه القطعة مع سيارتي:",
    "I would like to verify this part fits my vehicle:"
  ), t = e.map((l) => `• ${l.label}: ${l.value}`), a = typeof window < "u" ? window.location.href : "";
  return [r, ...t, a ? `${c("الصفحة", "Page")}: ${a}` : ""].filter(Boolean).join(`
`);
}
function o(i, e, r = !0) {
  return z(i[e], r);
}
function V(i, e, r) {
  const t = [], a = (l, h, g, f, b) => {
    !o(i, l, !0) || !b.trim() || t.push({ label: d(i, h, g, f), value: b.trim() });
  };
  return a("pcc_show_brand", "pcc_brand_label", "الماركة", "Brand", e.brand), a("pcc_show_model", "pcc_model_label", "الموديل", "Model", e.model), a("pcc_show_year", "pcc_year_label", "سنة الصنع", "Year", e.year), a("pcc_show_engine", "pcc_engine_label", "المحرك", "Engine", e.engine), a("pcc_show_vin", "pcc_vin_label", "رقم الهيكل VIN", "VIN", e.vin), a(
    "pcc_show_part_number",
    "pcc_part_number_label",
    "رقم القطعة",
    "Part number",
    e.partNumber
  ), o(i, "pcc_show_custom_fields", !1) && r.forEach((l) => {
    const h = (e.custom[l.id] ?? "").trim();
    h && t.push({ label: l.label, value: h });
  }), t;
}
var Q = Object.defineProperty, v = (i, e, r, t) => {
  for (var a = void 0, l = i.length - 1, h; l >= 0; l--)
    (h = i[l]) && (a = h(e, r, a) || a);
  return a && Q(e, r, a), a;
};
const w = class w extends T {
  constructor() {
    super(...arguments), this.config = {}, this.values = {
      brand: "",
      model: "",
      year: "",
      engine: "",
      vin: "",
      partNumber: "",
      custom: {}
    }, this.touched = !1, this.verified = !1, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    e.has("config") && (this.values = {
      brand: "",
      model: "",
      year: "",
      engine: "",
      vin: "",
      partNumber: "",
      custom: {}
    }, this.touched = !1, this.verified = !1);
  }
  get customFields() {
    var e;
    return o(this.config || {}, "pcc_show_custom_fields", !1) ? Z((e = this.config) == null ? void 0 : e.pcc_fields) : [];
  }
  get tips() {
    var r;
    if (!o(this.config || {}, "pcc_show_tips", !0)) return [];
    const e = K((r = this.config) == null ? void 0 : r.pcc_tips);
    return e.length ? e : R();
  }
  setValue(e, r) {
    this.values = { ...this.values, [e]: r }, this.verified = !1;
  }
  setCustom(e, r) {
    this.values = { ...this.values, custom: { ...this.values.custom, [e]: r } }, this.verified = !1;
  }
  requiredFields() {
    const e = this.config || {}, r = [];
    return o(e, "pcc_show_brand", !0) && r.push({
      key: "brand",
      value: this.values.brand,
      label: d(e, "pcc_brand_label", "الماركة", "Brand")
    }), o(e, "pcc_show_model", !0) && r.push({
      key: "model",
      value: this.values.model,
      label: d(e, "pcc_model_label", "الموديل", "Model")
    }), o(e, "pcc_show_year", !0) && r.push({
      key: "year",
      value: this.values.year,
      label: d(e, "pcc_year_label", "سنة الصنع", "Year")
    }), o(e, "pcc_show_part_number", !0) && r.push({
      key: "partNumber",
      value: this.values.partNumber,
      label: d(e, "pcc_part_number_label", "رقم القطعة", "Part number")
    }), this.customFields.forEach((t) => {
      t.required && r.push({ key: t.id, value: this.values.custom[t.id] ?? "", label: t.label });
    }), r;
  }
  isValid() {
    return this.requiredFields().every((e) => e.value.trim().length > 0);
  }
  vehicleFilled() {
    const e = this.config || {}, r = [];
    return o(e, "pcc_show_brand", !0) && r.push(this.values.brand), o(e, "pcc_show_model", !0) && r.push(this.values.model), o(e, "pcc_show_year", !0) && r.push(this.values.year), r.length ? r.every((t) => t.trim().length > 0) : !0;
  }
  partFilled() {
    const e = this.config || {};
    return o(e, "pcc_show_part_number", !0) ? this.values.partNumber.trim().length > 0 : !0;
  }
  verify() {
    this.touched = !0, this.isValid() && (this.verified = !0);
  }
  sendToWhatsApp() {
    const e = this.config || {}, r = C(e);
    if (!r) return;
    const t = V(e, this.values, this.customFields);
    H(r, J(e, t));
  }
  renderInput(e, r, t, a, l, h) {
    const g = this.touched && l && !t.trim();
    return p`
      <div class="pcc-field">
        <label class="pcc-label" for=${e}>
          ${r}${l ? p` <span aria-hidden="true">*</span>` : n}
        </label>
        <input
          id=${e}
          class=${x({ "pcc-input": !0, "is-invalid": g })}
          type="text"
          .value=${t}
          placeholder=${a}
          ?required=${l}
          @input=${(f) => h(f.target.value)}
        />
      </div>
    `;
  }
  renderSteps() {
    const e = this.vehicleFilled(), r = this.partFilled();
    return p`
      <div class="pcc-steps" aria-hidden="true">
        <div
          class=${x({
      "pcc-step": !0,
      "is-active": !this.verified,
      "is-done": e
    })}
        >
          <span class="pcc-step__num">1</span>
          <span>${c("بيانات السيارة", "Vehicle")}</span>
        </div>
        <div class="pcc-step-line"></div>
        <div
          class=${x({
      "pcc-step": !0,
      "is-active": e && !this.verified,
      "is-done": this.verified || e && r
    })}
        >
          <span class="pcc-step__num">2</span>
          <span>${c("القطعة والنتيجة", "Part & result")}</span>
        </div>
      </div>
    `;
  }
  render() {
    const e = this.config || {}, r = O(e, "pcc_"), t = u(e.pcc_title) || c("تحقق من توافق القطعة", "Check part compatibility"), a = u(e.pcc_desc) || c(
      "أدخل بيانات سيارتك ورقم القطعة للتأكد قبل إتمام الطلب.",
      "Enter your vehicle details and part number to confirm before ordering."
    ), l = u(e.pcc_notice) || c(
      "التوافق النهائي يعتمد على مطابقة الماركة والموديل والسنة ورقم القطعة.",
      "Final fitment depends on matching brand, model, year, and part number."
    ), h = d(e, "pcc_cta", "تحقق من التوافق", "Verify compatibility"), f = o(e, "pcc_show_continue_link", !1) ? G(e) : "", b = this.customFields, $ = this.tips, k = this.verified ? V(e, this.values, b) : [], S = u(e.pcc_success_title) || c("بيانات التوافق جاهزة", "Compatibility details ready"), I = u(e.pcc_success_desc) || c(
      "راجع الملخص أدناه ثم أكمل الطلب أو تصفّح القطع المقترحة.",
      "Review the summary below, then continue or browse suggested parts."
    ), L = o(e, "pcc_show_whatsapp", !0) && !!C(e), M = u(e.pcc_whatsapp_text) || c(
      "أرسل بياناتك لفريق المتجر وسنؤكد لك التوافق قبل إتمام الطلب.",
      "Send your details to the store team and we will confirm fitment before you order."
    ), N = d(e, "pcc_whatsapp_label", "تحقق عبر واتساب", "Verify on WhatsApp");
    return p`
      <section
        class="fs-section"
        style=${A(j(r))}
        aria-label=${t}
      >
        <div class="fs-container">
          <div class="pcc-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${c("قبل إتمام الطلب", "Before checkout")}</p>
              ${t ? p`<h2 class="fs-title">${t}</h2>` : n}
              ${a ? p`<p class="fs-desc">${a}</p>` : n}
            </div>

            <div class="pcc-layout">
              <div class="pcc-card">
                ${this.renderSteps()}

                ${o(e, "pcc_show_notice", !0) ? p`<div class="pcc-notice" role="note">
                      <span class="pcc-notice__label">${c("ملاحظة", "Note")}</span>
                      <p class="pcc-notice__text">${l}</p>
                    </div>` : n}

                <form class="pcc-block" @submit=${(s) => s.preventDefault()}>
                  <div class="pcc-block">
                    <p class="pcc-block__title">${c("1) بيانات السيارة", "1) Vehicle details")}</p>
                    <div class="pcc-grid">
                      ${o(e, "pcc_show_brand", !0) ? this.renderInput(
      "pcc-brand",
      d(e, "pcc_brand_label", "الماركة", "Brand"),
      this.values.brand,
      c("مثال: تويوتا", "e.g. Toyota"),
      !0,
      (s) => this.setValue("brand", s)
    ) : n}
                      ${o(e, "pcc_show_model", !0) ? this.renderInput(
      "pcc-model",
      d(e, "pcc_model_label", "الموديل", "Model"),
      this.values.model,
      c("مثال: كامري", "e.g. Camry"),
      !0,
      (s) => this.setValue("model", s)
    ) : n}
                      ${o(e, "pcc_show_year", !0) ? this.renderInput(
      "pcc-year",
      d(e, "pcc_year_label", "سنة الصنع", "Year"),
      this.values.year,
      c("مثال: 2022", "e.g. 2022"),
      !0,
      (s) => this.setValue("year", s)
    ) : n}
                      ${o(e, "pcc_show_engine", !0) ? this.renderInput(
      "pcc-engine",
      d(e, "pcc_engine_label", "المحرك", "Engine"),
      this.values.engine,
      c("مثال: 2.5L", "e.g. 2.5L"),
      !1,
      (s) => this.setValue("engine", s)
    ) : n}
                      ${o(e, "pcc_show_vin", !0) ? this.renderInput(
      "pcc-vin",
      d(e, "pcc_vin_label", "رقم الهيكل VIN", "VIN"),
      this.values.vin,
      c("17 حرفًا", "17 characters"),
      !1,
      (s) => this.setValue("vin", s)
    ) : n}
                    </div>
                  </div>

                  <div class="pcc-block">
                    <p class="pcc-block__title">${c("2) بيانات القطعة", "2) Part details")}</p>
                    <div class="pcc-grid">
                      ${o(e, "pcc_show_part_number", !0) ? this.renderInput(
      "pcc-part",
      d(e, "pcc_part_number_label", "رقم القطعة", "Part number"),
      this.values.partNumber,
      c("رقم OEM أو SKU", "OEM or SKU number"),
      !0,
      (s) => this.setValue("partNumber", s)
    ) : n}
                      ${b.map(
      (s) => this.renderInput(
        `pcc-custom-${s.id}`,
        s.label,
        this.values.custom[s.id] ?? "",
        s.placeholder,
        s.required,
        (_) => this.setCustom(s.id, _)
      )
    )}
                    </div>
                  </div>

                  <div class="pcc-actions">
                    <button type="button" class="fs-btn fs-tap" @click=${() => this.verify()}>
                      ${h}
                    </button>
                    ${f && this.verified ? p`<a
                          class="fs-btn fs-btn--ghost fs-tap"
                          href=${f}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${c("متابعة الطلب", "Continue order")}
                        </a>` : n}
                  </div>

                  ${this.touched && !this.isValid() ? p`<p class="pcc-alert" role="alert">
                        ${c("يرجى تعبئة جميع الحقول المطلوبة.", "Please fill all required fields.")}
                      </p>` : n}

                  ${this.verified ? p`<div class="pcc-result" role="status">
                        <h3 class="pcc-result__title">${S}</h3>
                        <p class="pcc-result__desc">${I}</p>
                        ${k.length ? p`<div class="pcc-chips">
                              ${k.map(
      (s) => p`<span class="pcc-chip">
                                  <span class="pcc-chip__k">${s.label}:</span>
                                  <span>${s.value}</span>
                                </span>`
    )}
                            </div>` : n}
                        ${L ? p`<div class="pcc-wa">
                              <span class="pcc-wa__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                  <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.11c-1.48 0-2.94-.4-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.32a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.25-8.23 8.25Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/>
                                </svg>
                              </span>
                              <p class="pcc-wa__text">${M}</p>
                              <button
                                type="button"
                                class="fs-btn fs-tap pcc-wa__btn"
                                @click=${() => this.sendToWhatsApp()}
                              >
                                ${N}
                              </button>
                            </div>` : n}
                      </div>` : n}
                </form>
              </div>

              ${$.length ? p`<aside class="pcc-side">
                    <div class="pcc-tips">
                      <div class="pcc-tips__head">
                        <span class="pcc-tips__badge" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <p class="pcc-tips__title">${c("نصائح التحقق", "Verification tips")}</p>
                      </div>
                      <ul>
                        ${$.map(
      (s, _) => p`<li>
                            <span class="pcc-tips__num" aria-hidden="true">${_ + 1}</span>
                            <span class="pcc-tips__text">${s}</span>
                          </li>`
    )}
                      </ul>
                    </div>
                  </aside>` : n}
            </div>

            ${D(e, "pcc_", { ready: this.verified })}
          </div>
        </div>
      </section>
    `;
  }
};
w.styles = [U, Y];
let m = w;
v([
  B({ type: Object })
], m.prototype, "config");
v([
  y()
], m.prototype, "values");
v([
  y()
], m.prototype, "touched");
v([
  y()
], m.prototype, "verified");
W(
  m
);
typeof m < "u" && m.registerSallaComponent("salla-part-compatibility-card");
export {
  m as default
};
