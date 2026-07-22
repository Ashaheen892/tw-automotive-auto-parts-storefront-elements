import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  isTruthy,
  prefersReducedMotion,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { componentStyles } from './styles.js';
import { parseBanners } from './utils.js';
import type { BannerItem } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

const AUTOPLAY_MS = 5000;

export default class GarageBanners extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeIndex = 0;

  private autoTimer: ReturnType<typeof setInterval> | null = null;
  private boundLangHandler = () => this.requestUpdate();
  private swipeStartX: number | null = null;
  private swipeStartY: number | null = null;

  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
    this.syncAutoplay();
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    this.clearAutoplay();
    super.disconnectedCallback();
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('config')) {
      const banners = this.banners;
      if (this.activeIndex >= banners.length) this.activeIndex = 0;
      this.syncAutoplay();
    }
  }

  private get banners(): BannerItem[] {
    return parseBanners(this.config?.gba_items);
  }

  private clearAutoplay(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
  }

  private syncAutoplay(): void {
    this.clearAutoplay();
    const c = this.config || {};
    if (!isTruthy(c.gba_autoplay, true) || prefersReducedMotion() || this.banners.length < 2) return;
    this.autoTimer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.banners.length;
    }, AUTOPLAY_MS);
  }

  private goTo(index: number): void {
    this.activeIndex = index;
    this.syncAutoplay();
  }

  private goPrev(): void {
    const total = this.banners.length;
    this.goTo((this.activeIndex - 1 + total) % total);
  }

  private goNext(): void {
    this.goTo((this.activeIndex + 1) % this.banners.length);
  }

  private onTouchStart(e: TouchEvent): void {
    const touch = e.touches[0];
    this.swipeStartX = touch.clientX;
    this.swipeStartY = touch.clientY;
    this.clearAutoplay();
  }

  private onTouchEnd(e: TouchEvent): void {
    const startX = this.swipeStartX;
    const startY = this.swipeStartY;
    this.swipeStartX = null;
    this.swipeStartY = null;
    this.syncAutoplay();
    if (startX == null || startY == null) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;

    const rtl = getComputedStyle(this).direction === 'rtl';
    const forward = rtl ? dx > 0 : dx < 0;
    if (forward) this.goNext();
    else this.goPrev();
  }

  private mouseStartX: number | null = null;

  private onPointerDown(e: PointerEvent): void {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    this.mouseStartX = e.clientX;
    this.clearAutoplay();
  }

  private onPointerUp(e: PointerEvent): void {
    if (e.pointerType !== 'mouse') return;
    const startX = this.mouseStartX;
    this.mouseStartX = null;
    this.syncAutoplay();
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    const rtl = getComputedStyle(this).direction === 'rtl';
    const forward = rtl ? dx > 0 : dx < 0;
    if (forward) this.goNext();
    else this.goPrev();
  }

  private renderSlide(banner: BannerItem, active: boolean) {
    return html`
      <div
        class=${classMap({ 'gba-slide': true, 'gba-slide--active': active })}
        aria-hidden=${active ? 'false' : 'true'}
      >
        <div class=${classMap({ 'gba-slide__bg': true, 'gba-slide__bg--empty': !banner.image })}>
          ${banner.image
            ? html`<img src=${banner.image} alt="" loading="eager" decoding="async" />`
            : nothing}
        </div>
        <div class="gba-slide__overlay"></div>
        <div class="gba-slide__content">
          ${banner.title ? html`<h3 class="gba-slide__title">${banner.title}</h3>` : nothing}
          ${banner.subtitle ? html`<p class="gba-slide__subtitle">${banner.subtitle}</p>` : nothing}
          ${banner.link
            ? html`<a
                class="gba-slide__cta"
                href=${banner.link}
                target=${isExternalUrl(banner.link) ? '_blank' : nothing}
                rel=${isExternalUrl(banner.link) ? 'noopener noreferrer' : nothing}
              >${banner.ctaLabel}</a>`
            : nothing}
        </div>
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'gba_');
    const banners = this.banners;
    const title = localizedString(c.gba_title as string);
    const desc = localizedString(c.gba_desc as string);

    if (!banners.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف بانرات من إعدادات العنصر', 'Add banners in element settings')}
      </div>`;
    }

    const activeIndex = this.activeIndex < banners.length ? this.activeIndex : 0;
    const multi = banners.length > 1;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('عروض الورشة', 'Garage promotions')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div
            class="gba-shell"
            aria-live="polite"
            @touchstart=${(e: TouchEvent) => this.onTouchStart(e)}
            @touchend=${(e: TouchEvent) => this.onTouchEnd(e)}
            @pointerdown=${(e: PointerEvent) => this.onPointerDown(e)}
            @pointerup=${(e: PointerEvent) => this.onPointerUp(e)}
            @dragstart=${(e: Event) => e.preventDefault()}
          >
            <div class="gba-track">
              ${banners.map((banner, i) => this.renderSlide(banner, i === activeIndex))}
            </div>

            ${multi
              ? html`
                  <button
                    type="button"
                    class="gba-nav gba-nav--prev"
                    aria-label=${t('السابق', 'Previous')}
                    @click=${() => this.goPrev()}
                  >‹</button>
                  <button
                    type="button"
                    class="gba-nav gba-nav--next"
                    aria-label=${t('التالي', 'Next')}
                    @click=${() => this.goNext()}
                  >›</button>
                `
              : nothing}
          </div>

          ${renderCommerceOutcome(c, 'gba_', { ready: true })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(GarageBanners as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });
