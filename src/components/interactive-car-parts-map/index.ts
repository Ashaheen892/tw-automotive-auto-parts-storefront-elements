import { html, LitElement, nothing, svg } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  extractImageUrl,
  isTruthy,
  prefersReducedMotion,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { CarPart } from './types.js';
import {
  defaultPartId,
  parseParts,
  resolveDetailMode,
  showLegend,
} from './utils.js';

export default class InteractiveCarPartsMap extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeId = '';

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
      this.activeId = defaultPartId(this.parts);
    }
  }

  private get parts(): CarPart[] {
    return parseParts(this.config?.icpm_parts);
  }

  private resolveActive(parts: CarPart[]): CarPart | null {
    if (!parts.length) return null;
    if (this.activeId === '__none__') return null;
    return parts.find((p) => p.id === this.activeId) ?? parts[0] ?? null;
  }

  private activeIndex(parts: CarPart[], active: CarPart | null): number {
    if (!active) return -1;
    return parts.findIndex((p) => p.id === active.id);
  }

  private selectPart(id: string): void {
    this.activeId = id;
    void this.updateComplete.then(() => {
      const activeChip = this.renderRoot?.querySelector(
        '.icpm-legend__item.is-active'
      ) as HTMLElement | null;
      activeChip?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
  }

  private shiftActive(parts: CarPart[], delta: number): void {
    if (!parts.length) return;
    const active = this.resolveActive(parts);
    const idx = Math.max(0, this.activeIndex(parts, active));
    const next = (idx + delta + parts.length) % parts.length;
    this.activeId = parts[next].id;
  }

  private pinLabel(part: CarPart, index: number): string {
    const raw = String(part.icon || '').trim();
    if (raw && raw.length <= 3) return raw;
    return String(index + 1).padStart(2, '0');
  }

  private renderSilhouette() {
    return svg`
      <svg class="icpm-silhouette" viewBox="0 0 640 280" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M78 178c8-42 46-78 118-96 52-14 118-20 188-18 74 2 132 16 168 42 28 20 46 48 52 78l6 22H72l6-28zm86-18c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32zm312 0c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32zM168 112c34-18 92-30 168-30s134 12 168 30c-18-28-64-48-156-50-96-2-150 18-180 50z"
          opacity="0.35"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="8"
          stroke-linecap="round"
          d="M96 176c18-46 64-78 148-90 70-10 148-8 214 8 48 12 84 40 102 78"
          opacity="0.55"
        />
      </svg>
    `;
  }

  private renderHotspot(part: CarPart, index: number, pulse: boolean, activeId: string) {
    const active = activeId === part.id;
    return html`
      <button
        type="button"
        class=${classMap({ 'icpm-hotspot': true, 'is-active': active })}
        style=${styleMap({ '--dot-x': `${part.x}%`, '--dot-y': `${part.y}%` })}
        aria-pressed=${active ? 'true' : 'false'}
        aria-label=${part.name}
        title=${part.name}
        @click=${() => this.selectPart(part.id)}
      >
        <span class="icpm-hotspot__pin">
          ${pulse && !active ? html`<span class="icpm-hotspot__pulse" aria-hidden="true"></span>` : nothing}
          ${this.pinLabel(part, index)}
        </span>
        <span class="icpm-hotspot__label">${part.name}</span>
      </button>
    `;
  }

  private renderLegend(parts: CarPart[], active: CarPart | null) {
    if (!showLegend(this.config || {})) return nothing;
    return html`
      <div class="icpm-legend" role="list" aria-label=${t('أنظمة السيارة', 'Vehicle systems')}>
        ${parts.map(
          (part, index) => html`
            <button
              type="button"
              role="listitem"
              class=${classMap({ 'icpm-legend__item': true, 'is-active': active?.id === part.id })}
              aria-pressed=${active?.id === part.id ? 'true' : 'false'}
              @click=${() => this.selectPart(part.id)}
            >
              <span class="icpm-legend__num">${this.pinLabel(part, index)}</span>
              <span>${part.name}</span>
            </button>
          `
        )}
      </div>
    `;
  }

  private renderDetail(part: CarPart | null, mode: string, parts: CarPart[]) {
    if (!part) {
      return html`<div class="icpm-panel icpm-panel--empty" role="region">
        <p>${t('اضغط على نقطة في الخريطة أو اختر نظامًا من القائمة.', 'Tap a hotspot or pick a system from the list.')}</p>
      </div>`;
    }

    const idx = this.activeIndex(parts, part);

    return html`
      <div class="icpm-panel" role="region" aria-live="polite">
        ${mode === 'sheet'
          ? html`<button
              type="button"
              class="fs-btn fs-btn--ghost fs-tap"
              aria-label=${t('إغلاق', 'Close')}
              @click=${() => (this.activeId = '__none__')}
            >
              ${t('إغلاق', 'Close')}
            </button>`
          : nothing}

        <div class="icpm-panel__head">
          <div>
            <p class="icpm-panel__kicker">
              ${t('نظام مختار', 'Selected system')}
              ${idx >= 0 ? ` · ${idx + 1}/${parts.length}` : ''}
            </p>
            <h3 class="icpm-panel__title">${part.title || part.name}</h3>
          </div>
          ${parts.length > 1
            ? html`<div class="icpm-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${t('السابق', 'Previous')}
                  @click=${() => this.shiftActive(parts, -1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${t('التالي', 'Next')}
                  @click=${() => this.shiftActive(parts, 1)}
                >
                  ›
                </button>
              </div>`
            : nothing}
        </div>

        ${part.image
          ? html`<img class="icpm-panel__img" src=${part.image} alt="" loading="lazy" />`
          : nothing}
        ${part.desc ? html`<p class="icpm-panel__desc">${part.desc}</p>` : nothing}
        ${part.tip
          ? html`<div class="icpm-tip">
              <span class="icpm-tip__label">${t('نصيحة صيانة', 'Maintenance tip')}</span>
              <p class="icpm-tip__text">${part.tip}</p>
            </div>`
          : nothing}
        ${part.link
          ? html`<a class="fs-btn fs-tap" href=${part.link} target="_blank" rel="noopener noreferrer">
              ${t('تصفّح قطع هذا النظام', 'Browse this system')}
            </a>`
          : nothing}
      </div>
    `;
  }

  private renderProducts(active: CarPart | null) {
    return renderCommerceOutcome(this.config || {}, 'icpm_', {
      ready: Boolean(active),
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'icpm_');
    const animate = !prefersReducedMotion();
    const parts = this.parts;
    const carImage = extractImageUrl(c.icpm_car_image);
    const title =
      localizedString(c.icpm_title as string) || t('خريطة أجزاء السيارة', 'Car parts map');
    const desc =
      localizedString(c.icpm_desc as string) ||
      t(
        'استكشف أنظمة السيارة بالنقاط أو القائمة، ثم اعرض القطع المناسبة لكل نظام.',
        'Explore vehicle systems via hotspots or the list, then see matching parts.'
      );
    const detailMode = resolveDetailMode(c);
    const pulse = isTruthy(c.icpm_pulse, true) && animate;
    const active = this.resolveActive(parts);
    const sheetOpen = detailMode === 'sheet' && !!active;
    const activeIdx = this.activeIndex(parts, active);

    if (!parts.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف أجزاء السيارة من إعدادات العنصر.', 'Add car parts in the element settings.')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="icpm-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('استكشف بالخريطة', 'Explore by map')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              ${activeIdx >= 0
                ? html`<p class="fs-hero__meta">
                    ${t('النظام الحالي', 'Current system')}: ${active?.name}
                    · ${activeIdx + 1}/${parts.length}
                  </p>`
                : nothing}
            </div>

            <div class=${classMap({ 'icpm-layout': true, 'icpm-layout--sheet': detailMode === 'sheet' })}>
              <div class="icpm-stage-card">
                <div class="icpm-stage">
                  ${carImage
                    ? html`<img class="icpm-stage__img" src=${carImage} alt="" loading="lazy" />`
                    : html`
                        ${this.renderSilhouette()}
                        <div class="icpm-stage__missing" role="img">
                          <p>${t('أضف صورة السيارة من الإعدادات', 'Add a car image in settings')}</p>
                        </div>
                      `}
                  ${parts.map((part, i) => this.renderHotspot(part, i, pulse, active?.id ?? ''))}
                </div>
                ${this.renderLegend(parts, active)}
              </div>

              ${detailMode === 'sheet'
                ? html`
                    ${sheetOpen
                      ? html`<button
                          class="icpm-sheet-backdrop"
                          aria-label=${t('إغلاق', 'Close')}
                          @click=${() => (this.activeId = '__none__')}
                        ></button>`
                      : nothing}
                    ${this.renderDetail(active, detailMode, parts)}
                  `
                : this.renderDetail(active, detailMode, parts)}
            </div>

            ${this.renderProducts(active)}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  InteractiveCarPartsMap as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
