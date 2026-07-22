import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { openWhatsApp } from '../../utils/whatsapp.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import { buildRequestMessage, isTruthy, label } from './utils.js';

export default class WhatsappPartRequest extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private name = '';
  @state() private phone = '';
  @state() private vehicle = '';
  @state() private partName = '';
  @state() private note = '';

  private boundLangHandler = () => this.requestUpdate();
  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    super.disconnectedCallback();
  }

  private submit(): void {
    const c = this.config || {};
    const storePhone =
      localizedString(c.wpr_whatsapp_phone as string) || String(c.wpr_whatsapp_phone ?? '').trim();
    if (!storePhone) return;

    const message = buildRequestMessage({
      prefix:
        localizedString(c.wpr_message_prefix as string) ||
        t('طلب قطعة من المتجر:', 'Store part request:'),
      name: this.name,
      phone: this.phone,
      vehicle: this.vehicle,
      part: this.partName,
      note: this.note,
      nameLabel: t('الاسم', 'Name'),
      phoneLabel: t('جوال العميل', 'Customer phone'),
      vehicleLabel: t('السيارة', 'Vehicle'),
      partLabel: t('القطعة', 'Part'),
      noteLabel: t('ملاحظات', 'Notes'),
    });

    openWhatsApp(storePhone, message);
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'wpr_');
    const title =
      localizedString(c.wpr_title as string) || t('اطلب قطعتك عبر واتساب', 'Request your part on WhatsApp');
    const desc =
      localizedString(c.wpr_desc as string) ||
      t(
        'اكتب بيانات السيارة والقطعة المطلوبة وسنرسل الطلب للمتجر مباشرة.',
        'Enter your vehicle and part details and we will send the request to the store.'
      );
    const storePhone =
      localizedString(c.wpr_whatsapp_phone as string) || String(c.wpr_whatsapp_phone ?? '').trim();
    const showVehicle = isTruthy(c.wpr_show_vehicle, true);
    const showNote = isTruthy(c.wpr_show_note, true);
    const canSend = Boolean(storePhone && (this.partName.trim() || this.note.trim() || this.vehicle.trim()));

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="wpr-card">
            <p class="fs-eyebrow">${t('طلب سريع', 'Quick request')}</p>
            <h2 class="fs-title">${title}</h2>
            <p class="fs-desc">${desc}</p>

            ${!storePhone
              ? html`<p class="wpr-hint">
                  ${t(
                    'أضف رقم واتساب المتجر من إعدادات العنصر.',
                    'Add the store WhatsApp number in the component settings.'
                  )}
                </p>`
              : html`
                  <div class="wpr-form">
                    <div class="wpr-row">
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-name">${label(c, 'wpr_name_label', 'الاسم', 'Name')}</label>
                        <input
                          id="wpr-name"
                          class="wpr-input"
                          .value=${this.name}
                          @input=${(e: Event) => {
                            this.name = (e.target as HTMLInputElement).value;
                          }}
                        />
                      </div>
                      <div class="wpr-field">
                        <label class="wpr-label" for="wpr-phone">${label(c, 'wpr_phone_label', 'جوالك', 'Your phone')}</label>
                        <input
                          id="wpr-phone"
                          class="wpr-input"
                          type="tel"
                          .value=${this.phone}
                          @input=${(e: Event) => {
                            this.phone = (e.target as HTMLInputElement).value;
                          }}
                        />
                      </div>
                    </div>

                    ${showVehicle
                      ? html`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-vehicle"
                            >${label(c, 'wpr_vehicle_label', 'السيارة (ماركة / موديل / سنة)', 'Vehicle (brand / model / year)')}</label
                          >
                          <input
                            id="wpr-vehicle"
                            class="wpr-input"
                            .value=${this.vehicle}
                            placeholder=${t('مثال: تويوتا كامري 2022', 'e.g. Toyota Camry 2022')}
                            @input=${(e: Event) => {
                              this.vehicle = (e.target as HTMLInputElement).value;
                            }}
                          />
                        </div>`
                      : nothing}

                    <div class="wpr-field">
                      <label class="wpr-label" for="wpr-part">${label(c, 'wpr_part_label', 'القطعة المطلوبة', 'Requested part')}</label>
                      <input
                        id="wpr-part"
                        class="wpr-input"
                        .value=${this.partName}
                        placeholder=${t('مثال: مراية يمين', 'e.g. Right side mirror')}
                        @input=${(e: Event) => {
                          this.partName = (e.target as HTMLInputElement).value;
                        }}
                      />
                    </div>

                    ${showNote
                      ? html`<div class="wpr-field">
                          <label class="wpr-label" for="wpr-note">${label(c, 'wpr_note_label', 'ملاحظات', 'Notes')}</label>
                          <textarea
                            id="wpr-note"
                            class="wpr-textarea"
                            .value=${this.note}
                            @input=${(e: Event) => {
                              this.note = (e.target as HTMLTextAreaElement).value;
                            }}
                          ></textarea>
                        </div>`
                      : nothing}

                    <div class="wpr-actions">
                      <button
                        type="button"
                        class="fs-btn fs-tap wpr-btn-wa"
                        ?disabled=${!canSend}
                        @click=${() => this.submit()}
                      >
                        ${label(c, 'wpr_send_label', 'إرسال عبر واتساب', 'Send via WhatsApp')}
                      </button>
                    </div>
                  </div>
                `}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  WhatsappPartRequest as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
