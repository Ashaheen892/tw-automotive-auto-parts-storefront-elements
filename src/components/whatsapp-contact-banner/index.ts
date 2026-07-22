import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  readSectionTheme,
  t,
  themeStyleMap,
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import { resolveStorePhone, resolveWhatsAppHref } from './utils.js';

const waIcon = html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path
    d="M12.04 2c-5.5 0-9.96 4.43-9.96 9.9 0 1.75.46 3.45 1.34 4.95L2 22l5.3-1.38a10 10 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.43 9.96-9.9C22.01 6.43 17.54 2 12.04 2Zm5.8 14.2c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.75 1.23 1.61 2 .1.9 1.95 1.86 2.26 1.99.31.13.49.11.67-.07.18-.17.77-.9.98-1.2.2-.31.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.08.13.08.73-.16 1.41Z"
  />
</svg>`;

export default class WhatsappContactBanner extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

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

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'wcb_', {
      bg: '#f1f4f7',
      text: '#0f172a',
      accent: '#25d366',
      buttonBg: '#25d366',
      buttonColor: '#ffffff',
    });
    const title =
      localizedString(c.wcb_title as string) ||
      t('لا تعرف أي قطعة تناسب سيارتك؟', "Don't know which part fits your car?");
    const desc =
      localizedString(c.wcb_desc as string) ||
      t(
        'فريقنا الفني جاهز لمساعدتك في اختيار القطعة الصحيحة بناءً على رقم الهيكل (VIN) لضمان التوافق التام.',
        'Our technical team can help you pick the right part using the VIN for full compatibility.'
      );
    const ctaLabel =
      localizedString(c.wcb_cta_label as string) ||
      t('تواصل عبر واتساب', 'Contact via WhatsApp');
    const phone = resolveStorePhone(c);
    const href = resolveWhatsAppHref(c);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('تواصل معنا', 'Contact us')}
      >
        <div class="fs-container">
          <div class="wcb-shell">
            <div class="wcb-banner">
              <svg class="wcb-watermark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M12.04 2c-5.5 0-9.96 4.43-9.96 9.9 0 1.75.46 3.45 1.34 4.95L2 22l5.3-1.38a10 10 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.43 9.96-9.9C22.01 6.43 17.54 2 12.04 2Zm5.8 14.2c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.75 1.23 1.61 2 .1.9 1.95 1.86 2.26 1.99.31.13.49.11.67-.07.18-.17.77-.9.98-1.2.2-.31.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.08.13.08.73-.16 1.41Z"
                />
              </svg>

              <div class="wcb-copy">
                ${title ? html`<h2 class="wcb-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="wcb-desc">${desc}</p>` : nothing}
              </div>

              <div class="wcb-actions">
                ${href
                  ? html`<a
                      class="wcb-btn"
                      href=${href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${waIcon}
                      <span>${ctaLabel}</span>
                    </a>`
                  : html`<span
                      class=${classMap({ 'wcb-btn': true, 'wcb-btn--disabled': true })}
                      role="link"
                      aria-disabled="true"
                    >
                      ${waIcon}
                      <span>${ctaLabel}</span>
                    </span>`}
              </div>
            </div>

            ${!phone
              ? html`<p class="wcb-hint">
                  ${t(
                    'أضف رقم واتساب المتجر من إعدادات العنصر.',
                    'Add the store WhatsApp number in the component settings.'
                  )}
                </p>`
              : nothing}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  WhatsappContactBanner as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
