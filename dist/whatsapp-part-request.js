import { css as $, LitElement as x, html as h, nothing as f } from "lit";
import { property as y, state as w } from "lit/decorators.js";
import { styleMap as _ } from "lit/directives/style-map.js";
import { l as c, t, s as L, r as S, d as v, a as N, b as k } from "./registerSalla-Dct4KN_E.js";
import { o as C } from "./whatsapp-GI8N2VNC.js";
const q = $`
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
function n(r, e, s, l) {
  return c(r[e]) || t(s, l);
}
function j(r) {
  return [
    r.prefix,
    r.name ? `${r.nameLabel}: ${r.name}` : "",
    r.phone ? `${r.phoneLabel}: ${r.phone}` : "",
    r.vehicle ? `${r.vehicleLabel}: ${r.vehicle}` : "",
    r.part ? `${r.partLabel}: ${r.part}` : "",
    r.note ? `${r.noteLabel}: ${r.note}` : ""
  ].filter(Boolean).join(`
`);
}
var z = Object.defineProperty, d = (r, e, s, l) => {
  for (var i = void 0, p = r.length - 1, m; p >= 0; p--)
    (m = r[p]) && (i = m(e, s, i) || i);
  return i && z(e, s, i), i;
};
const b = class b extends x {
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
    const e = this.config || {}, s = c(e.wpr_whatsapp_phone) || String(e.wpr_whatsapp_phone ?? "").trim();
    if (!s) return;
    const l = j({
      prefix: c(e.wpr_message_prefix) || t("طلب قطعة من المتجر:", "Store part request:"),
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
    C(s, l);
  }
  render() {
    const e = this.config || {}, s = S(e, "wpr_"), l = c(e.wpr_title) || t("اطلب قطعتك عبر واتساب", "Request your part on WhatsApp"), i = c(e.wpr_desc) || t(
      "اكتب بيانات السيارة والقطعة المطلوبة وسنرسل الطلب للمتجر مباشرة.",
      "Enter your vehicle and part details and we will send the request to the store."
    ), p = c(e.wpr_whatsapp_phone) || String(e.wpr_whatsapp_phone ?? "").trim(), m = v(e.wpr_show_vehicle, !0), u = v(e.wpr_show_note, !0), g = !!(p && (this.partName.trim() || this.note.trim() || this.vehicle.trim()));
    return h`
      <section
        class="fs-section"
        style=${_(N(s))}
        aria-label=${l}
      >
        <div class="fs-container">
          <div class="wpr-card">
            <p class="fs-eyebrow">${t("طلب سريع", "Quick request")}</p>
            <h2 class="fs-title">${l}</h2>
            <p class="fs-desc">${i}</p>

            ${p ? h`
                  <div class="wpr-form">
                    <div class="wpr-row">
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-name">${n(e, "wpr_name_label", "الاسم", "Name")}</label>
                        <input
                          id="wpr-name"
                          class="wpr-input"
                          .value=${this.name}
                          @input=${(o) => {
      this.name = o.target.value;
    }}
                        />
                      </div>
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-phone">${n(e, "wpr_phone_label", "جوالك", "Your phone")}</label>
                        <input
                          id="wpr-phone"
                          class="wpr-input"
                          type="tel"
                          .value=${this.phone}
                          @input=${(o) => {
      this.phone = o.target.value;
    }}
                        />
                      </div>
                    </div>

                    ${m ? h`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-vehicle"
                            >${n(e, "wpr_vehicle_label", "السيارة (ماركة / موديل / سنة)", "Vehicle (brand / model / year)")}</label
                          >
                          <input
                            id="wpr-vehicle"
                            class="wpr-input"
                            .value=${this.vehicle}
                            placeholder=${t("مثال: تويوتا كامري 2022", "e.g. Toyota Camry 2022")}
                            @input=${(o) => {
      this.vehicle = o.target.value;
    }}
                          />
                        </div>` : f}

                    <div class="wpr-field">
                      <label class="wpr-label" for="wpr-part">${n(e, "wpr_part_label", "القطعة المطلوبة", "Requested part")}</label>
                      <input
                        id="wpr-part"
                        class="wpr-input"
                        .value=${this.partName}
                        placeholder=${t("مثال: مراية يمين", "e.g. Right side mirror")}
                        @input=${(o) => {
      this.partName = o.target.value;
    }}
                      />
                    </div>

                    ${u ? h`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-note">${n(e, "wpr_note_label", "ملاحظات", "Notes")}</label>
                          <textarea
                            id="wpr-note"
                            class="wpr-textarea"
                            .value=${this.note}
                            @input=${(o) => {
      this.note = o.target.value;
    }}
                          ></textarea>
                        </div>` : f}

                    <div class="wpr-actions">
                      <button
                        type="button"
                        class="fs-btn fs-tap wpr-btn-wa"
                        ?disabled=${!g}
                        @click=${() => this.submit()}
                      >
                        ${n(e, "wpr_send_label", "إرسال عبر واتساب", "Send via WhatsApp")}
                      </button>
                    </div>
                  </div>
                ` : h`<p class="wpr-hint">
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
b.styles = [L, q];
let a = b;
d([
  y({ type: Object })
], a.prototype, "config");
d([
  w()
], a.prototype, "name");
d([
  w()
], a.prototype, "phone");
d([
  w()
], a.prototype, "vehicle");
d([
  w()
], a.prototype, "partName");
d([
  w()
], a.prototype, "note");
k(
  a
);
typeof a < "u" && a.registerSallaComponent("salla-whatsapp-part-request");
export {
  a as default
};
