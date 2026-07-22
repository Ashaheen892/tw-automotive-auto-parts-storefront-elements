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
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { CompatibilityField, FormValues } from './types.js';
import { openWhatsApp } from '../../utils/whatsapp.js';
import {
  buildSummaryChips,
  buildWhatsAppMessage,
  defaultTips,
  label,
  parseCustomFields,
  parseTips,
  resolveCtaUrl,
  showField,
  whatsappPhone,
} from './utils.js';

export default class PartCompatibilityCard extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private values: FormValues = {
    brand: '',
    model: '',
    year: '',
    engine: '',
    vin: '',
    partNumber: '',
    custom: {},
  };

  @state() private touched = false;
  @state() private verified = false;

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
      this.values = {
        brand: '',
        model: '',
        year: '',
        engine: '',
        vin: '',
        partNumber: '',
        custom: {},
      };
      this.touched = false;
      this.verified = false;
    }
  }

  private get customFields(): CompatibilityField[] {
    if (!showField(this.config || {}, 'pcc_show_custom_fields', false)) return [];
    return parseCustomFields(this.config?.pcc_fields);
  }

  private get tips(): string[] {
    if (!showField(this.config || {}, 'pcc_show_tips', true)) return [];
    const parsed = parseTips(this.config?.pcc_tips);
    return parsed.length ? parsed : defaultTips();
  }

  private setValue(key: keyof Omit<FormValues, 'custom'>, val: string): void {
    this.values = { ...this.values, [key]: val };
    this.verified = false;
  }

  private setCustom(id: string, val: string): void {
    this.values = { ...this.values, custom: { ...this.values.custom, [id]: val } };
    this.verified = false;
  }

  private requiredFields(): { key: string; value: string; label: string }[] {
    const c = this.config || {};
    const fields: { key: string; value: string; label: string }[] = [];

    if (showField(c, 'pcc_show_brand', true)) {
      fields.push({
        key: 'brand',
        value: this.values.brand,
        label: label(c, 'pcc_brand_label', 'الماركة', 'Brand'),
      });
    }
    if (showField(c, 'pcc_show_model', true)) {
      fields.push({
        key: 'model',
        value: this.values.model,
        label: label(c, 'pcc_model_label', 'الموديل', 'Model'),
      });
    }
    if (showField(c, 'pcc_show_year', true)) {
      fields.push({
        key: 'year',
        value: this.values.year,
        label: label(c, 'pcc_year_label', 'سنة الصنع', 'Year'),
      });
    }
    if (showField(c, 'pcc_show_part_number', true)) {
      fields.push({
        key: 'partNumber',
        value: this.values.partNumber,
        label: label(c, 'pcc_part_number_label', 'رقم القطعة', 'Part number'),
      });
    }

    this.customFields.forEach((f) => {
      if (f.required) {
        fields.push({ key: f.id, value: this.values.custom[f.id] ?? '', label: f.label });
      }
    });

    return fields;
  }

  private isValid(): boolean {
    return this.requiredFields().every((f) => f.value.trim().length > 0);
  }

  private vehicleFilled(): boolean {
    const c = this.config || {};
    const checks: string[] = [];
    if (showField(c, 'pcc_show_brand', true)) checks.push(this.values.brand);
    if (showField(c, 'pcc_show_model', true)) checks.push(this.values.model);
    if (showField(c, 'pcc_show_year', true)) checks.push(this.values.year);
    if (!checks.length) return true;
    return checks.every((v) => v.trim().length > 0);
  }

  private partFilled(): boolean {
    const c = this.config || {};
    if (!showField(c, 'pcc_show_part_number', true)) return true;
    return this.values.partNumber.trim().length > 0;
  }

  private verify(): void {
    this.touched = true;
    if (this.isValid()) this.verified = true;
  }

  private sendToWhatsApp(): void {
    const c = this.config || {};
    const phone = whatsappPhone(c);
    if (!phone) return;
    const chips = buildSummaryChips(c, this.values, this.customFields);
    openWhatsApp(phone, buildWhatsAppMessage(c, chips));
  }

  private renderInput(
    id: string,
    fieldLabel: string,
    value: string,
    placeholder: string,
    required: boolean,
    onInput: (val: string) => void
  ) {
    const invalid = this.touched && required && !value.trim();
    return html`
      <div class="pcc-field">
        <label class="pcc-label" for=${id}>
          ${fieldLabel}${required ? html` <span aria-hidden="true">*</span>` : nothing}
        </label>
        <input
          id=${id}
          class=${classMap({ 'pcc-input': true, 'is-invalid': invalid })}
          type="text"
          .value=${value}
          placeholder=${placeholder}
          ?required=${required}
          @input=${(e: Event) => onInput((e.target as HTMLInputElement).value)}
        />
      </div>
    `;
  }

  private renderSteps() {
    const vehicleDone = this.vehicleFilled();
    const partDone = this.partFilled();
    return html`
      <div class="pcc-steps" aria-hidden="true">
        <div
          class=${classMap({
            'pcc-step': true,
            'is-active': !this.verified,
            'is-done': vehicleDone,
          })}
        >
          <span class="pcc-step__num">1</span>
          <span>${t('بيانات السيارة', 'Vehicle')}</span>
        </div>
        <div class="pcc-step-line"></div>
        <div
          class=${classMap({
            'pcc-step': true,
            'is-active': vehicleDone && !this.verified,
            'is-done': this.verified || (vehicleDone && partDone),
          })}
        >
          <span class="pcc-step__num">2</span>
          <span>${t('القطعة والنتيجة', 'Part & result')}</span>
        </div>
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pcc_');
    const title =
      localizedString(c.pcc_title as string) || t('تحقق من توافق القطعة', 'Check part compatibility');
    const desc =
      localizedString(c.pcc_desc as string) ||
      t(
        'أدخل بيانات سيارتك ورقم القطعة للتأكد قبل إتمام الطلب.',
        'Enter your vehicle details and part number to confirm before ordering.'
      );
    const notice =
      localizedString(c.pcc_notice as string) ||
      t(
        'التوافق النهائي يعتمد على مطابقة الماركة والموديل والسنة ورقم القطعة.',
        'Final fitment depends on matching brand, model, year, and part number.'
      );
    const ctaLabel = label(c, 'pcc_cta', 'تحقق من التوافق', 'Verify compatibility');
    const showContinue = showField(c, 'pcc_show_continue_link', false);
    const ctaUrl = showContinue ? resolveCtaUrl(c) : '';
    const customFields = this.customFields;
    const tips = this.tips;
    const chips = this.verified ? buildSummaryChips(c, this.values, customFields) : [];
    const successTitle =
      localizedString(c.pcc_success_title as string) ||
      t('بيانات التوافق جاهزة', 'Compatibility details ready');
    const successDesc =
      localizedString(c.pcc_success_desc as string) ||
      t(
        'راجع الملخص أدناه ثم أكمل الطلب أو تصفّح القطع المقترحة.',
        'Review the summary below, then continue or browse suggested parts.'
      );
    const waEnabled = showField(c, 'pcc_show_whatsapp', true) && !!whatsappPhone(c);
    const waText =
      localizedString(c.pcc_whatsapp_text as string) ||
      t(
        'أرسل بياناتك لفريق المتجر وسنؤكد لك التوافق قبل إتمام الطلب.',
        'Send your details to the store team and we will confirm fitment before you order.'
      );
    const waLabel = label(c, 'pcc_whatsapp_label', 'تحقق عبر واتساب', 'Verify on WhatsApp');

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pcc-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('قبل إتمام الطلب', 'Before checkout')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div class="pcc-layout">
              <div class="pcc-card">
                ${this.renderSteps()}

                ${showField(c, 'pcc_show_notice', true)
                  ? html`<div class="pcc-notice" role="note">
                      <span class="pcc-notice__label">${t('ملاحظة', 'Note')}</span>
                      <p class="pcc-notice__text">${notice}</p>
                    </div>`
                  : nothing}

                <form class="pcc-block" @submit=${(e: Event) => e.preventDefault()}>
                  <div class="pcc-block">
                    <p class="pcc-block__title">${t('1) بيانات السيارة', '1) Vehicle details')}</p>
                    <div class="pcc-grid">
                      ${showField(c, 'pcc_show_brand', true)
                        ? this.renderInput(
                            'pcc-brand',
                            label(c, 'pcc_brand_label', 'الماركة', 'Brand'),
                            this.values.brand,
                            t('مثال: تويوتا', 'e.g. Toyota'),
                            true,
                            (v) => this.setValue('brand', v)
                          )
                        : nothing}
                      ${showField(c, 'pcc_show_model', true)
                        ? this.renderInput(
                            'pcc-model',
                            label(c, 'pcc_model_label', 'الموديل', 'Model'),
                            this.values.model,
                            t('مثال: كامري', 'e.g. Camry'),
                            true,
                            (v) => this.setValue('model', v)
                          )
                        : nothing}
                      ${showField(c, 'pcc_show_year', true)
                        ? this.renderInput(
                            'pcc-year',
                            label(c, 'pcc_year_label', 'سنة الصنع', 'Year'),
                            this.values.year,
                            t('مثال: 2022', 'e.g. 2022'),
                            true,
                            (v) => this.setValue('year', v)
                          )
                        : nothing}
                      ${showField(c, 'pcc_show_engine', true)
                        ? this.renderInput(
                            'pcc-engine',
                            label(c, 'pcc_engine_label', 'المحرك', 'Engine'),
                            this.values.engine,
                            t('مثال: 2.5L', 'e.g. 2.5L'),
                            false,
                            (v) => this.setValue('engine', v)
                          )
                        : nothing}
                      ${showField(c, 'pcc_show_vin', true)
                        ? this.renderInput(
                            'pcc-vin',
                            label(c, 'pcc_vin_label', 'رقم الهيكل VIN', 'VIN'),
                            this.values.vin,
                            t('17 حرفًا', '17 characters'),
                            false,
                            (v) => this.setValue('vin', v)
                          )
                        : nothing}
                    </div>
                  </div>

                  <div class="pcc-block">
                    <p class="pcc-block__title">${t('2) بيانات القطعة', '2) Part details')}</p>
                    <div class="pcc-grid">
                      ${showField(c, 'pcc_show_part_number', true)
                        ? this.renderInput(
                            'pcc-part',
                            label(c, 'pcc_part_number_label', 'رقم القطعة', 'Part number'),
                            this.values.partNumber,
                            t('رقم OEM أو SKU', 'OEM or SKU number'),
                            true,
                            (v) => this.setValue('partNumber', v)
                          )
                        : nothing}
                      ${customFields.map((f) =>
                        this.renderInput(
                          `pcc-custom-${f.id}`,
                          f.label,
                          this.values.custom[f.id] ?? '',
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
                    ${ctaUrl && this.verified
                      ? html`<a
                          class="fs-btn fs-btn--ghost fs-tap"
                          href=${ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${t('متابعة الطلب', 'Continue order')}
                        </a>`
                      : nothing}
                  </div>

                  ${this.touched && !this.isValid()
                    ? html`<p class="pcc-alert" role="alert">
                        ${t('يرجى تعبئة جميع الحقول المطلوبة.', 'Please fill all required fields.')}
                      </p>`
                    : nothing}

                  ${this.verified
                    ? html`<div class="pcc-result" role="status">
                        <h3 class="pcc-result__title">${successTitle}</h3>
                        <p class="pcc-result__desc">${successDesc}</p>
                        ${chips.length
                          ? html`<div class="pcc-chips">
                              ${chips.map(
                                (chip) => html`<span class="pcc-chip">
                                  <span class="pcc-chip__k">${chip.label}:</span>
                                  <span>${chip.value}</span>
                                </span>`
                              )}
                            </div>`
                          : nothing}
                        ${waEnabled
                          ? html`<div class="pcc-wa">
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
                            </div>`
                          : nothing}
                      </div>`
                    : nothing}
                </form>
              </div>

              ${tips.length
                ? html`<aside class="pcc-side">
                    <div class="pcc-tips">
                      <div class="pcc-tips__head">
                        <span class="pcc-tips__badge" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <p class="pcc-tips__title">${t('نصائح التحقق', 'Verification tips')}</p>
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
                  </aside>`
                : nothing}
            </div>

            ${renderCommerceOutcome(c, 'pcc_', { ready: this.verified })}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  PartCompatibilityCard as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
