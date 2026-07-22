var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, t, s as sharedSectionCss, r as readSectionTheme, d as isTruthy, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { o as openWhatsApp } from "./whatsapp-C3glLfzz.js";
const componentStyles = css`
  .wpr-card {
    width: 100%;
    display: grid;
    gap: 1rem;
    justify-items: center;
    text-align: center;
    padding: 1.35rem 1.2rem 1.4rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .wpr-card .wpr-form,
  .wpr-card .wpr-hint,
  .wpr-card .fs-btn {
    width: 100%;
    text-align: start;
    justify-self: stretch;
  }




  .wpr-form {
    display: grid;
    gap: 0.75rem;
  }

  .wpr-row {
    display: grid;
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .wpr-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .wpr-field {
    display: grid;
    gap: 0.4rem;
  }

  .wpr-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .wpr-input,
  .wpr-textarea {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    box-sizing: border-box;
  }

  .wpr-textarea {
    min-height: 110px;
    resize: vertical;
  }

  .wpr-input:focus,
  .wpr-textarea:focus {
    outline: none;
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
  }

  .wpr-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.25rem;
  }

  .wpr-btn-wa {
    background: #25d366 !important;
    color: #fff !important;
    border-color: #1ebe57 !important;
  }

  .wpr-hint {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted-color, #64748b);
  }
`;
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
function buildRequestMessage(input) {
  return [
    input.prefix,
    input.name ? `${input.nameLabel}: ${input.name}` : "",
    input.phone ? `${input.phoneLabel}: ${input.phone}` : "",
    input.vehicle ? `${input.vehicleLabel}: ${input.vehicle}` : "",
    input.part ? `${input.partLabel}: ${input.part}` : "",
    input.note ? `${input.noteLabel}: ${input.note}` : ""
  ].filter(Boolean).join(`
`);
}
__name(buildRequestMessage, "buildRequestMessage");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _WhatsappPartRequest = class _WhatsappPartRequest extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.name = "", this.phone = "", this.vehicle = "", this.partName = "", this.note = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  submit() {
    const c = this.config || {}, storePhone = localizedString(c.wpr_whatsapp_phone) || String(c.wpr_whatsapp_phone ?? "").trim();
    if (!storePhone) return;
    const message = buildRequestMessage({
      prefix: localizedString(c.wpr_message_prefix) || t("طلب قطعة من المتجر:", "Store part request:"),
      name: this.name,
      phone: this.phone,
      vehicle: this.vehicle,
      part: this.partName,
      note: this.note,
      nameLabel: t("الاسم", "Name"),
      phoneLabel: t("جوال العميل", "Customer phone"),
      vehicleLabel: t("السيارة", "Vehicle"),
      partLabel: t("القطعة", "Part"),
      noteLabel: t("ملاحظات", "Notes")
    });
    openWhatsApp(storePhone, message);
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "wpr_"), title = localizedString(c.wpr_title) || t("اطلب قطعتك عبر واتساب", "Request your part on WhatsApp"), desc = localizedString(c.wpr_desc) || t(
      "اكتب بيانات السيارة والقطعة المطلوبة وسنرسل الطلب للمتجر مباشرة.",
      "Enter your vehicle and part details and we will send the request to the store."
    ), storePhone = localizedString(c.wpr_whatsapp_phone) || String(c.wpr_whatsapp_phone ?? "").trim(), showVehicle = isTruthy(c.wpr_show_vehicle, !0), showNote = isTruthy(c.wpr_show_note, !0), canSend = !!(storePhone && (this.partName.trim() || this.note.trim() || this.vehicle.trim()));
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="wpr-card">
            <p class="fs-eyebrow">${t("طلب سريع", "Quick request")}</p>
            <h2 class="fs-title">${title}</h2>
            <p class="fs-desc">${desc}</p>

            ${storePhone ? html`
                  <div class="wpr-form">
                    <div class="wpr-row">
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-name">${label(c, "wpr_name_label", "الاسم", "Name")}</label>
                        <input
                          id="wpr-name"
                          class="wpr-input"
                          .value=${this.name}
                          @input=${(e) => {
      this.name = e.target.value;
    }}
                        />
                      </div>
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-phone">${label(c, "wpr_phone_label", "جوالك", "Your phone")}</label>
                        <input
                          id="wpr-phone"
                          class="wpr-input"
                          type="tel"
                          .value=${this.phone}
                          @input=${(e) => {
      this.phone = e.target.value;
    }}
                        />
                      </div>
                    </div>

                    ${showVehicle ? html`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-vehicle"
                            >${label(c, "wpr_vehicle_label", "السيارة (ماركة / موديل / سنة)", "Vehicle (brand / model / year)")}</label
                          >
                          <input
                            id="wpr-vehicle"
                            class="wpr-input"
                            .value=${this.vehicle}
                            placeholder=${t("مثال: تويوتا كامري 2022", "e.g. Toyota Camry 2022")}
                            @input=${(e) => {
      this.vehicle = e.target.value;
    }}
                          />
                        </div>` : nothing}

                    <div class="wpr-field">
                      <label class="wpr-label" for="wpr-part">${label(c, "wpr_part_label", "القطعة المطلوبة", "Requested part")}</label>
                      <input
                        id="wpr-part"
                        class="wpr-input"
                        .value=${this.partName}
                        placeholder=${t("مثال: مراية يمين", "e.g. Right side mirror")}
                        @input=${(e) => {
      this.partName = e.target.value;
    }}
                      />
                    </div>

                    ${showNote ? html`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-note">${label(c, "wpr_note_label", "ملاحظات", "Notes")}</label>
                          <textarea
                            id="wpr-note"
                            class="wpr-textarea"
                            .value=${this.note}
                            @input=${(e) => {
      this.note = e.target.value;
    }}
                          ></textarea>
                        </div>` : nothing}

                    <div class="wpr-actions">
                      <button
                        type="button"
                        class="fs-btn fs-tap wpr-btn-wa"
                        ?disabled=${!canSend}
                        @click=${() => this.submit()}
                      >
                        ${label(c, "wpr_send_label", "إرسال عبر واتساب", "Send via WhatsApp")}
                      </button>
                    </div>
                  </div>
                ` : html`<p class="wpr-hint">
                  ${t(
      "أضف رقم واتساب المتجر من إعدادات العنصر.",
      "Add the store WhatsApp number in the component settings."
    )}
                </p>`}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_WhatsappPartRequest, "WhatsappPartRequest"), _WhatsappPartRequest.styles = [sharedSectionCss, componentStyles];
let WhatsappPartRequest = _WhatsappPartRequest;
__decorateClass([
  property({ type: Object })
], WhatsappPartRequest.prototype, "config");
__decorateClass([
  state()
], WhatsappPartRequest.prototype, "name");
__decorateClass([
  state()
], WhatsappPartRequest.prototype, "phone");
__decorateClass([
  state()
], WhatsappPartRequest.prototype, "vehicle");
__decorateClass([
  state()
], WhatsappPartRequest.prototype, "partName");
__decorateClass([
  state()
], WhatsappPartRequest.prototype, "note");
bindSallaRegistration(
  WhatsappPartRequest
);
typeof WhatsappPartRequest < "u" && WhatsappPartRequest.registerSallaComponent("salla-whatsapp-part-request");
export {
  WhatsappPartRequest as default
};
