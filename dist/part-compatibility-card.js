var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { d as isTruthy, n as normalizeCollection, l as localizedString, k as itemIdFromLabel, t, e as extractLink, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
import { o as openWhatsApp } from "./whatsapp-C3glLfzz.js";
const componentStyles = css`
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
function parseCustomFields(raw) {
  return normalizeCollection(raw).map((row, i) => {
    const labelText = localizedString(row.label);
    return labelText ? {
      id: String(row.id ?? "").trim() || itemIdFromLabel(labelText, "") || `field-${i + 1}`,
      label: labelText,
      placeholder: localizedString(row.placeholder),
      required: isTruthy(row.required, !1)
    } : null;
  }).filter((f) => !!f);
}
__name(parseCustomFields, "parseCustomFields");
function parseTips(raw) {
  if (typeof raw == "string" || raw && typeof raw == "object" && !Array.isArray(raw)) {
    const text = localizedString(raw, "");
    return text ? text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean) : [];
  }
  return normalizeCollection(raw).map((row) => localizedString(row.tip) || localizedString(row.text)).filter(Boolean);
}
__name(parseTips, "parseTips");
function defaultTips() {
  return [
    t("طابق رقم القطعة مع كتالوج الشركة.", "Match the part number to the OEM catalog."),
    t("تأكد من سنة الصنع بدقة.", "Confirm the exact model year."),
    t("عند الشك تواصل مع الدعم.", "Contact support if unsure.")
  ];
}
__name(defaultTips, "defaultTips");
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
function resolveCtaUrl(config) {
  return extractLink(config.pcc_cta_url);
}
__name(resolveCtaUrl, "resolveCtaUrl");
function whatsappPhone(config) {
  return String(config.pcc_whatsapp_phone ?? "").trim();
}
__name(whatsappPhone, "whatsappPhone");
function buildWhatsAppMessage(config, chips) {
  const prefix = localizedString(config.pcc_whatsapp_prefix) || t(
    "أرغب في التحقق من توافق هذه القطعة مع سيارتي:",
    "I would like to verify this part fits my vehicle:"
  ), lines = chips.map((chip) => `• ${chip.label}: ${chip.value}`), pageUrl = typeof window < "u" ? window.location.href : "";
  return [prefix, ...lines, pageUrl ? `${t("الصفحة", "Page")}: ${pageUrl}` : ""].filter(Boolean).join(`
`);
}
__name(buildWhatsAppMessage, "buildWhatsAppMessage");
function showField(config, key, fallback = !0) {
  return isTruthy(config[key], fallback);
}
__name(showField, "showField");
function buildSummaryChips(config, values, customFields) {
  const chips = [], push = /* @__PURE__ */ __name((showKey, labelKey, ar, en, value) => {
    !showField(config, showKey, !0) || !value.trim() || chips.push({ label: label(config, labelKey, ar, en), value: value.trim() });
  }, "push");
  return push("pcc_show_brand", "pcc_brand_label", "الماركة", "Brand", values.brand), push("pcc_show_model", "pcc_model_label", "الموديل", "Model", values.model), push("pcc_show_year", "pcc_year_label", "سنة الصنع", "Year", values.year), push("pcc_show_engine", "pcc_engine_label", "المحرك", "Engine", values.engine), push("pcc_show_vin", "pcc_vin_label", "رقم الهيكل VIN", "VIN", values.vin), push(
    "pcc_show_part_number",
    "pcc_part_number_label",
    "رقم القطعة",
    "Part number",
    values.partNumber
  ), showField(config, "pcc_show_custom_fields", !1) && customFields.forEach((f) => {
    const value = (values.custom[f.id] ?? "").trim();
    value && chips.push({ label: f.label, value });
  }), chips;
}
__name(buildSummaryChips, "buildSummaryChips");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _PartCompatibilityCard = class _PartCompatibilityCard extends LitElement {
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
  willUpdate(changed) {
    changed.has("config") && (this.values = {
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
    var _a;
    return showField(this.config || {}, "pcc_show_custom_fields", !1) ? parseCustomFields((_a = this.config) == null ? void 0 : _a.pcc_fields) : [];
  }
  get tips() {
    var _a;
    if (!showField(this.config || {}, "pcc_show_tips", !0)) return [];
    const parsed = parseTips((_a = this.config) == null ? void 0 : _a.pcc_tips);
    return parsed.length ? parsed : defaultTips();
  }
  setValue(key, val) {
    this.values = { ...this.values, [key]: val }, this.verified = !1;
  }
  setCustom(id, val) {
    this.values = { ...this.values, custom: { ...this.values.custom, [id]: val } }, this.verified = !1;
  }
  requiredFields() {
    const c = this.config || {}, fields = [];
    return showField(c, "pcc_show_brand", !0) && fields.push({
      key: "brand",
      value: this.values.brand,
      label: label(c, "pcc_brand_label", "الماركة", "Brand")
    }), showField(c, "pcc_show_model", !0) && fields.push({
      key: "model",
      value: this.values.model,
      label: label(c, "pcc_model_label", "الموديل", "Model")
    }), showField(c, "pcc_show_year", !0) && fields.push({
      key: "year",
      value: this.values.year,
      label: label(c, "pcc_year_label", "سنة الصنع", "Year")
    }), showField(c, "pcc_show_part_number", !0) && fields.push({
      key: "partNumber",
      value: this.values.partNumber,
      label: label(c, "pcc_part_number_label", "رقم القطعة", "Part number")
    }), this.customFields.forEach((f) => {
      f.required && fields.push({ key: f.id, value: this.values.custom[f.id] ?? "", label: f.label });
    }), fields;
  }
  isValid() {
    return this.requiredFields().every((f) => f.value.trim().length > 0);
  }
  vehicleFilled() {
    const c = this.config || {}, checks = [];
    return showField(c, "pcc_show_brand", !0) && checks.push(this.values.brand), showField(c, "pcc_show_model", !0) && checks.push(this.values.model), showField(c, "pcc_show_year", !0) && checks.push(this.values.year), checks.length ? checks.every((v) => v.trim().length > 0) : !0;
  }
  partFilled() {
    const c = this.config || {};
    return showField(c, "pcc_show_part_number", !0) ? this.values.partNumber.trim().length > 0 : !0;
  }
  verify() {
    this.touched = !0, this.isValid() && (this.verified = !0);
  }
  sendToWhatsApp() {
    const c = this.config || {}, phone = whatsappPhone(c);
    if (!phone) return;
    const chips = buildSummaryChips(c, this.values, this.customFields);
    openWhatsApp(phone, buildWhatsAppMessage(c, chips));
  }
  renderInput(id, fieldLabel, value, placeholder, required, onInput) {
    const invalid = this.touched && required && !value.trim();
    return html`
      <div class="pcc-field">
        <label class="pcc-label" for=${id}>
          ${fieldLabel}${required ? html` <span aria-hidden="true">*</span>` : nothing}
        </label>
        <input
          id=${id}
          class=${classMap({ "pcc-input": !0, "is-invalid": invalid })}
          type="text"
          .value=${value}
          placeholder=${placeholder}
          ?required=${required}
          @input=${(e) => onInput(e.target.value)}
        />
      </div>
    `;
  }
  renderSteps() {
    const vehicleDone = this.vehicleFilled(), partDone = this.partFilled();
    return html`
      <div class="pcc-steps" aria-hidden="true">
        <div
          class=${classMap({
      "pcc-step": !0,
      "is-active": !this.verified,
      "is-done": vehicleDone
    })}
        >
          <span class="pcc-step__num">1</span>
          <span>${t("بيانات السيارة", "Vehicle")}</span>
        </div>
        <div class="pcc-step-line"></div>
        <div
          class=${classMap({
      "pcc-step": !0,
      "is-active": vehicleDone && !this.verified,
      "is-done": this.verified || vehicleDone && partDone
    })}
        >
          <span class="pcc-step__num">2</span>
          <span>${t("القطعة والنتيجة", "Part & result")}</span>
        </div>
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "pcc_"), title = localizedString(c.pcc_title) || t("تحقق من توافق القطعة", "Check part compatibility"), desc = localizedString(c.pcc_desc) || t(
      "أدخل بيانات سيارتك ورقم القطعة للتأكد قبل إتمام الطلب.",
      "Enter your vehicle details and part number to confirm before ordering."
    ), notice = localizedString(c.pcc_notice) || t(
      "التوافق النهائي يعتمد على مطابقة الماركة والموديل والسنة ورقم القطعة.",
      "Final fitment depends on matching brand, model, year, and part number."
    ), ctaLabel = label(c, "pcc_cta", "تحقق من التوافق", "Verify compatibility"), ctaUrl = showField(c, "pcc_show_continue_link", !1) ? resolveCtaUrl(c) : "", customFields = this.customFields, tips = this.tips, chips = this.verified ? buildSummaryChips(c, this.values, customFields) : [], successTitle = localizedString(c.pcc_success_title) || t("بيانات التوافق جاهزة", "Compatibility details ready"), successDesc = localizedString(c.pcc_success_desc) || t(
      "راجع الملخص أدناه ثم أكمل الطلب أو تصفّح القطع المقترحة.",
      "Review the summary below, then continue or browse suggested parts."
    ), waEnabled = showField(c, "pcc_show_whatsapp", !0) && !!whatsappPhone(c), waText = localizedString(c.pcc_whatsapp_text) || t(
      "أرسل بياناتك لفريق المتجر وسنؤكد لك التوافق قبل إتمام الطلب.",
      "Send your details to the store team and we will confirm fitment before you order."
    ), waLabel = label(c, "pcc_whatsapp_label", "تحقق عبر واتساب", "Verify on WhatsApp");
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pcc-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("قبل إتمام الطلب", "Before checkout")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div class="pcc-layout">
              <div class="pcc-card">
                ${this.renderSteps()}

                ${showField(c, "pcc_show_notice", !0) ? html`<div class="pcc-notice" role="note">
                      <span class="pcc-notice__label">${t("ملاحظة", "Note")}</span>
                      <p class="pcc-notice__text">${notice}</p>
                    </div>` : nothing}

                <form class="pcc-block" @submit=${(e) => e.preventDefault()}>
                  <div class="pcc-block">
                    <p class="pcc-block__title">${t("1) بيانات السيارة", "1) Vehicle details")}</p>
                    <div class="pcc-grid">
                      ${showField(c, "pcc_show_brand", !0) ? this.renderInput(
      "pcc-brand",
      label(c, "pcc_brand_label", "الماركة", "Brand"),
      this.values.brand,
      t("مثال: تويوتا", "e.g. Toyota"),
      !0,
      (v) => this.setValue("brand", v)
    ) : nothing}
                      ${showField(c, "pcc_show_model", !0) ? this.renderInput(
      "pcc-model",
      label(c, "pcc_model_label", "الموديل", "Model"),
      this.values.model,
      t("مثال: كامري", "e.g. Camry"),
      !0,
      (v) => this.setValue("model", v)
    ) : nothing}
                      ${showField(c, "pcc_show_year", !0) ? this.renderInput(
      "pcc-year",
      label(c, "pcc_year_label", "سنة الصنع", "Year"),
      this.values.year,
      t("مثال: 2022", "e.g. 2022"),
      !0,
      (v) => this.setValue("year", v)
    ) : nothing}
                      ${showField(c, "pcc_show_engine", !0) ? this.renderInput(
      "pcc-engine",
      label(c, "pcc_engine_label", "المحرك", "Engine"),
      this.values.engine,
      t("مثال: 2.5L", "e.g. 2.5L"),
      !1,
      (v) => this.setValue("engine", v)
    ) : nothing}
                      ${showField(c, "pcc_show_vin", !0) ? this.renderInput(
      "pcc-vin",
      label(c, "pcc_vin_label", "رقم الهيكل VIN", "VIN"),
      this.values.vin,
      t("17 حرفًا", "17 characters"),
      !1,
      (v) => this.setValue("vin", v)
    ) : nothing}
                    </div>
                  </div>

                  <div class="pcc-block">
                    <p class="pcc-block__title">${t("2) بيانات القطعة", "2) Part details")}</p>
                    <div class="pcc-grid">
                      ${showField(c, "pcc_show_part_number", !0) ? this.renderInput(
      "pcc-part",
      label(c, "pcc_part_number_label", "رقم القطعة", "Part number"),
      this.values.partNumber,
      t("رقم OEM أو SKU", "OEM or SKU number"),
      !0,
      (v) => this.setValue("partNumber", v)
    ) : nothing}
                      ${customFields.map(
      (f) => this.renderInput(
        `pcc-custom-${f.id}`,
        f.label,
        this.values.custom[f.id] ?? "",
        f.placeholder,
        f.required,
        (v) => this.setCustom(f.id, v)
      )
    )}
                    </div>
                  </div>

                  <div class="pcc-actions">
                    <button type="button" class="fs-btn fs-tap" @click=${() => this.verify()}>
                      ${ctaLabel}
                    </button>
                    ${ctaUrl && this.verified ? html`<a
                          class="fs-btn fs-btn--ghost fs-tap"
                          href=${ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${t("متابعة الطلب", "Continue order")}
                        </a>` : nothing}
                  </div>

                  ${this.touched && !this.isValid() ? html`<p class="pcc-alert" role="alert">
                        ${t("يرجى تعبئة جميع الحقول المطلوبة.", "Please fill all required fields.")}
                      </p>` : nothing}

                  ${this.verified ? html`<div class="pcc-result" role="status">
                        <h3 class="pcc-result__title">${successTitle}</h3>
                        <p class="pcc-result__desc">${successDesc}</p>
                        ${chips.length ? html`<div class="pcc-chips">
                              ${chips.map(
      (chip) => html`<span class="pcc-chip">
                                  <span class="pcc-chip__k">${chip.label}:</span>
                                  <span>${chip.value}</span>
                                </span>`
    )}
                            </div>` : nothing}
                        ${waEnabled ? html`<div class="pcc-wa">
                              <span class="pcc-wa__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                  <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.11c-1.48 0-2.94-.4-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.32a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.25-8.23 8.25Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/>
                                </svg>
                              </span>
                              <p class="pcc-wa__text">${waText}</p>
                              <button
                                type="button"
                                class="fs-btn fs-tap pcc-wa__btn"
                                @click=${() => this.sendToWhatsApp()}
                              >
                                ${waLabel}
                              </button>
                            </div>` : nothing}
                      </div>` : nothing}
                </form>
              </div>

              ${tips.length ? html`<aside class="pcc-side">
                    <div class="pcc-tips">
                      <div class="pcc-tips__head">
                        <span class="pcc-tips__badge" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <p class="pcc-tips__title">${t("نصائح التحقق", "Verification tips")}</p>
                      </div>
                      <ul>
                        ${tips.map(
      (tip, i) => html`<li>
                            <span class="pcc-tips__num" aria-hidden="true">${i + 1}</span>
                            <span class="pcc-tips__text">${tip}</span>
                          </li>`
    )}
                      </ul>
                    </div>
                  </aside>` : nothing}
            </div>

            ${renderCommerceOutcome(c, "pcc_", { ready: this.verified })}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_PartCompatibilityCard, "PartCompatibilityCard"), _PartCompatibilityCard.styles = [sharedSectionCss, componentStyles];
let PartCompatibilityCard = _PartCompatibilityCard;
__decorateClass([
  property({ type: Object })
], PartCompatibilityCard.prototype, "config");
__decorateClass([
  state()
], PartCompatibilityCard.prototype, "values");
__decorateClass([
  state()
], PartCompatibilityCard.prototype, "touched");
__decorateClass([
  state()
], PartCompatibilityCard.prototype, "verified");
bindSallaRegistration(
  PartCompatibilityCard
);
typeof PartCompatibilityCard < "u" && PartCompatibilityCard.registerSallaComponent("salla-part-compatibility-card");
export {
  PartCompatibilityCard as default
};
