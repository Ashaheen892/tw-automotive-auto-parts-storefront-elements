import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isTruthy,
  readSectionTheme,
  t,
  themeStyleMap,
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { openWhatsApp } from '../../utils/whatsapp.js';
import { componentStyles } from './styles.js';
import {
  brandsFromRows,
  label,
  resolveVehicleRows,
} from './utils.js';
import type { VehicleBrand } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class SmartVehicleFinder extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private brandId = '';
  @state() private showRequest = false;
  @state() private reqName = '';
  @state() private reqPhone = '';
  @state() private reqPart = '';
  @state() private reqNote = '';

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

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('config')) {
      this.brandId = '';
      this.showRequest = false;
      this.reqName = '';
      this.reqPhone = '';
      this.reqPart = '';
      this.reqNote = '';
    }
    // Tabs behavior: first company is selected by default.
    if (!this.brandId) {
      const first = this.brands[0];
      if (first) this.brandId = first.id;
    }
  }

  private get rows() {
    return resolveVehicleRows(this.config || {});
  }

  private get brands(): VehicleBrand[] {
    return brandsFromRows(this.rows);
  }

  private get activeBrand(): VehicleBrand | null {
    return this.brands.find((b) => b.id === this.brandId) ?? this.brands[0] ?? null;
  }

  private sendWhatsAppRequest(): void {
    const c = this.config || {};
    const phone =
      localizedString(c.svf_whatsapp_phone as string) ||
      String(c.svf_whatsapp_phone ?? '').trim();
    if (!phone) return;

    const lines = [
      localizedString(c.svf_whatsapp_prefix as string) ||
        t('طلب قطعة غير متوفرة من محدد السيارة:', 'Part request from vehicle finder:'),
      this.reqName ? `${t('الاسم', 'Name')}: ${this.reqName}` : '',
      this.reqPhone ? `${t('جوال العميل', 'Customer phone')}: ${this.reqPhone}` : '',
      this.activeBrand ? `${t('الشركة', 'Company')}: ${this.activeBrand.name}` : '',
      this.reqPart ? `${t('القطعة المطلوبة', 'Requested part')}: ${this.reqPart}` : '',
      this.reqNote ? `${t('ملاحظات', 'Notes')}: ${this.reqNote}` : '',
    ].filter(Boolean);

    openWhatsApp(phone, lines.join('\n'));
  }

  private renderBrandTabs(brands: VehicleBrand[]) {
    return html`
      <div
        class="svf-tabs"
        role="tablist"
        aria-label=${label(this.config, 'svf_brand_label', 'الشركة', 'Company')}
      >
        ${brands.map((brand) => {
          const active = this.brandId === brand.id;
          const initial = brand.name.charAt(0).toUpperCase();
          return html`
            <button
              type="button"
              class="svf-brand"
              role="tab"
              aria-selected=${active ? 'true' : 'false'}
              @click=${() => (this.brandId = brand.id)}
            >
              ${brand.image
                ? html`<img class="svf-brand__img" src=${brand.image} alt="" loading="lazy" />`
                : html`<span class="svf-brand__icon" aria-hidden="true">${initial}</span>`}
              <span class="svf-brand__name">${brand.name}</span>
            </button>
          `;
        })}
      </div>
    `;
  }

  private renderWhatsAppPanel(c: Record<string, unknown>) {
    if (!isTruthy(c.svf_show_whatsapp_request, true)) return nothing;
    const phone =
      localizedString(c.svf_whatsapp_phone as string) || String(c.svf_whatsapp_phone ?? '').trim();
    if (!phone) return nothing;

    const openLabel =
      label(c, 'svf_whatsapp_open_label', 'لم تجد طلبك؟ أرسله عبر واتساب', "Can't find it? Request on WhatsApp");
    const sendLabel = label(c, 'svf_whatsapp_send_label', 'إرسال عبر واتساب', 'Send via WhatsApp');
    const title =
      localizedString(c.svf_whatsapp_title as string) ||
      t('طلب قطعة غير متوفرة', 'Request a missing part');
    const desc =
      localizedString(c.svf_whatsapp_desc as string) ||
      t(
        'املأ البيانات وسنفتح واتساب برسالة جاهزة للمتجر.',
        'Fill the form and we will open WhatsApp with a ready message.'
      );

    if (!this.showRequest) {
      return html`
        <div class="svf-actions" style="justify-content:center;margin-top:0.35rem">
          <button
            type="button"
            class="fs-btn fs-btn--ghost fs-tap"
            @click=${() => {
              this.showRequest = true;
              this.requestUpdate();
              requestAnimationFrame(() => {
                this.renderRoot
                  ?.querySelector('.svf-wa')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              });
            }}
          >
            ${openLabel}
          </button>
        </div>
      `;
    }

    const canSend = Boolean(this.reqPart.trim() || this.reqNote.trim() || this.activeBrand);

    return html`
      <aside class="svf-wa" aria-label=${title}>
        <div class="svf-wa__head">
          <h3 class="svf-wa__title">${title}</h3>
          <p class="svf-wa__desc">${desc}</p>
        </div>
        <div class="svf-wa__form">
          <div class="svf-wa__row">
            <div class="svf-field">
              <label class="svf-label" for="svf-req-name">${t('الاسم', 'Name')}</label>
              <input
                id="svf-req-name"
                class="svf-input"
                .value=${this.reqName}
                @input=${(e: Event) => {
                  this.reqName = (e.target as HTMLInputElement).value;
                }}
              />
            </div>
            <div class="svf-field">
              <label class="svf-label" for="svf-req-phone">${t('رقم الجوال', 'Phone')}</label>
              <input
                id="svf-req-phone"
                class="svf-input"
                type="tel"
                .value=${this.reqPhone}
                @input=${(e: Event) => {
                  this.reqPhone = (e.target as HTMLInputElement).value;
                }}
              />
            </div>
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-part">${t('القطعة المطلوبة', 'Requested part')}</label>
            <input
              id="svf-req-part"
              class="svf-input"
              .value=${this.reqPart}
              placeholder=${t('مثال: فلتر زيت أصلي', 'e.g. OEM oil filter')}
              @input=${(e: Event) => {
                this.reqPart = (e.target as HTMLInputElement).value;
              }}
            />
          </div>
          <div class="svf-field">
            <label class="svf-label" for="svf-req-note">${t('ملاحظات', 'Notes')}</label>
            <textarea
              id="svf-req-note"
              class="svf-textarea"
              .value=${this.reqNote}
              @input=${(e: Event) => {
                this.reqNote = (e.target as HTMLTextAreaElement).value;
              }}
            ></textarea>
          </div>
          ${this.activeBrand
            ? html`<p class="svf-field-hint">${t('الشركة المختارة', 'Selected company')}: ${this.activeBrand.name}</p>`
            : nothing}
          <div class="svf-actions">
            <button
              type="button"
              class="fs-btn fs-tap svf-btn-wa"
              ?disabled=${!canSend}
              @click=${() => this.sendWhatsAppRequest()}
            >
              ${sendLabel}
            </button>
            <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => { this.showRequest = false; }}>
              ${t('إلغاء', 'Cancel')}
            </button>
          </div>
        </div>
      </aside>
    `;
  }

  private renderEmptyMerchant() {
    return html`
      <div class="svf-card">
        <p class="svf-hint">
          ${t(
            'أضف شركات السيارات من إعدادات العنصر (الشركة والصورة) ليظهر المحدد للعملاء.',
            'Add car companies in the component settings (company and image) so shoppers can use the finder.'
          )}
        </p>
      </div>
    `;
  }

  private renderProducts(c: Record<string, unknown>) {
    return renderCommerceOutcome(c, 'svf_', {
      ready: Boolean(this.activeBrand),
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'svf_');
    const brands = this.brands;

    const title = localizedString(c.svf_title as string);
    const desc = localizedString(c.svf_desc as string);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مُحدّد السيارة الذكي', 'Smart vehicle finder')}
      >
        <div class="fs-container">
          <div class="svf-shell">
            ${title || desc
              ? html`<div class="fs-hero">
                  <p class="fs-eyebrow">${t('تسوق حسب الشركة', 'Shop by company')}</p>
                  ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                  ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
                </div>`
              : nothing}

            ${!brands.length
              ? this.renderEmptyMerchant()
              : html`
                  ${this.renderBrandTabs(brands)}
                  ${this.renderProducts(c)}
                  ${this.renderWhatsAppPanel(c)}
                `}
          </div>
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(
  SmartVehicleFinder as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
