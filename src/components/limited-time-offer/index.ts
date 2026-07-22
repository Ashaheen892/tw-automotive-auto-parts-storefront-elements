import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  isTruthy,
  readSectionTheme,
  t,
  themeStyleMap,
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { CountdownParts } from './types.js';
import {
  getCountdown,
  imageOnStart,
  parseEndsAt,
  resolveCtaLink,
  resolveOfferImage,
  showTimerUnit,
} from './utils.js';

export default class LimitedTimeOffer extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private countdown: CountdownParts = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
  };

  @state() private ended = false;

  private timerId: ReturnType<typeof setInterval> | null = null;
  private boundLangHandler = () => this.requestUpdate();

  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
    this.syncTimer();
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    this.clearTimer();
    super.disconnectedCallback();
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('config')) this.syncTimer();
  }

  private clearTimer(): void {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private syncTimer(): void {
    this.clearTimer();
    const endsAt = parseEndsAt(this.config?.lto_ends_at);
    if (!endsAt) {
      this.ended = false;
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
      return;
    }

    const tick = () => {
      const parts = getCountdown(endsAt);
      this.countdown = parts;
      this.ended = parts.totalMs <= 0;
      if (this.ended) this.clearTimer();
    };

    tick();
    if (!this.ended) this.timerId = setInterval(tick, 1000);
  }

  private renderTimerUnit(value: number, labelAr: string, labelEn: string, show: boolean) {
    if (!show) return nothing;
    return html`
      <div class="lto-timer__unit" role="listitem">
        <span class="lto-timer__value" aria-hidden="true">${String(value).padStart(2, '0')}</span>
        <span class="lto-timer__label">${t(labelAr, labelEn)}</span>
      </div>
    `;
  }

  private renderProducts() {
    return renderCommerceOutcome(this.config || {}, 'lto_', { ready: true });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'lto_');
    const eyebrow =
      localizedString(c.lto_eyebrow as string) || t('عرض موسم 2026', 'Season 2026 offer');
    const title =
      localizedString(c.lto_title as string) ||
      t('امنح سيارتك الأداء الذي تستحقه', 'Give your car the performance it deserves');
    const desc =
      localizedString(c.lto_desc as string) ||
      t(
        'احصل على مجموعة غسيل وتلميع وحماية كاملة بسعر خاص لفترة محدودة. منتجات عالمية تحافظ على طلاء سيارتك.',
        'Get a complete wash, polish, and protection package at a special limited-time price.'
      );
    const image = resolveOfferImage(c);
    const ctaLabel = localizedString(c.lto_cta_label as string) || t('عرض الآن', 'View now');
    const ctaLink = resolveCtaLink(c);
    const showCta = isTruthy(c.lto_show_cta, true) && !!ctaLink;
    const hasEndsAt = !!parseEndsAt(c.lto_ends_at);
    const mediaStart = imageOnStart(c);
    const external = ctaLink ? isExternalUrl(ctaLink) : false;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="lto-shell">
            <div
              class=${classMap({
                'lto-panel': true,
                'lto-panel--image-start': mediaStart,
              })}
            >
              <div class="lto-copy">
                ${eyebrow ? html`<p class="lto-eyebrow">${eyebrow}</p>` : nothing}
                ${title ? html`<h2 class="lto-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="lto-desc">${desc}</p>` : nothing}

                ${hasEndsAt
                  ? this.ended
                    ? html`<p class="lto-ended" role="status">
                        ${t('انتهى العرض', 'Offer ended')}
                      </p>`
                    : html`<div
                        class="lto-timer"
                        role="timer"
                        aria-label=${t('العد التنازلي للعرض', 'Offer countdown')}
                      >
                        ${this.renderTimerUnit(
                          this.countdown.days,
                          'يوم',
                          'Days',
                          showTimerUnit(c, 'lto_show_days')
                        )}
                        ${this.renderTimerUnit(
                          this.countdown.hours,
                          'ساعة',
                          'Hours',
                          showTimerUnit(c, 'lto_show_hours')
                        )}
                        ${this.renderTimerUnit(
                          this.countdown.minutes,
                          'دقيقة',
                          'Minutes',
                          showTimerUnit(c, 'lto_show_minutes')
                        )}
                        ${this.renderTimerUnit(
                          this.countdown.seconds,
                          'ثانية',
                          'Seconds',
                          showTimerUnit(c, 'lto_show_seconds')
                        )}
                      </div>`
                  : nothing}

                ${showCta
                  ? html`<div class="lto-actions">
                      <a
                        class="lto-cta"
                        href=${ctaLink}
                        target=${external ? '_blank' : nothing}
                        rel=${external ? 'noopener noreferrer' : nothing}
                      >
                        ${ctaLabel}
                      </a>
                    </div>`
                  : nothing}
              </div>

              <div class="lto-media" aria-hidden=${image ? 'false' : 'true'}>
                ${image
                  ? html`<img src=${image} alt="" loading="lazy" decoding="async" />`
                  : nothing}
              </div>
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  LimitedTimeOffer as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
