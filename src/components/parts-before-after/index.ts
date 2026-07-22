import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  clamp,
  extractImageUrl,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { componentStyles } from './styles.js';
import { defaultSingleImages, parsePairs } from './utils.js';
import type { BeforeAfterPair } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class PartsBeforeAfter extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activePair = 0;
  @state() private position = 50;

  private dragging = false;
  private boundLangHandler = () => this.requestUpdate();

  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    super.disconnectedCallback();
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('config')) {
      const pairs = this.pairs;
      if (this.activePair >= pairs.length) this.activePair = 0;
    }
  }

  private get pairs(): BeforeAfterPair[] {
    return parsePairs(this.config?.pba_items);
  }

  private get singleBefore(): string {
    return extractImageUrl(this.config?.pba_before_image) || defaultSingleImages().before;
  }

  private get singleAfter(): string {
    return extractImageUrl(this.config?.pba_after_image) || defaultSingleImages().after;
  }

  private get beforeLabel(): string {
    return localizedString(this.config?.pba_before_label as LocaleValue) || t('قبل', 'BEFORE');
  }

  private get afterLabel(): string {
    return localizedString(this.config?.pba_after_label as LocaleValue) || t('بعد', 'AFTER');
  }

  private selectPair(index: number): void {
    this.activePair = index;
    this.position = 50;
  }

  private onPointerDown = (e: PointerEvent): void => {
    this.dragging = true;
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
    this.updatePosition(e);
  };

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.dragging) return;
    this.updatePosition(e);
  };

  private onPointerUp = (): void => {
    this.dragging = false;
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
  };

  private updatePosition(e: PointerEvent): void {
    const viewport = this.renderRoot.querySelector<HTMLElement>('.pba-viewport');
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.position = clamp((x / rect.width) * 100, 0, 100);
  }

  private onRangeInput = (e: Event): void => {
    this.position = Number((e.target as HTMLInputElement).value);
  };

  private renderViewport(beforeImg: string, afterImg: string) {
    const pos = this.position;
    const beforeContent = beforeImg
      ? html`<img src=${beforeImg} alt=${this.beforeLabel} loading="lazy" decoding="async" />`
      : html`<div class="pba-placeholder">${this.beforeLabel}</div>`;
    const afterContent = afterImg
      ? html`<img src=${afterImg} alt=${this.afterLabel} loading="lazy" decoding="async" />`
      : html`<div class="pba-placeholder">${this.afterLabel}</div>`;

    return html`
      <div
        class="pba-viewport"
        @pointerdown=${this.onPointerDown}
      >
        <div class="pba-viewport__layer">${beforeContent}</div>
        <div
          class="pba-viewport__after"
          style=${styleMap({ clipPath: `inset(0 0 0 ${pos}%)` })}
        >${afterContent}</div>
        <div
          class="pba-handle"
          style=${styleMap({ left: `${pos}%` })}
          aria-hidden="true"
        ></div>
        <div class="pba-labels">
          <span class="pba-badge pba-badge--before">${this.beforeLabel}</span>
          <span class="pba-badge pba-badge--after">${this.afterLabel}</span>
        </div>
      </div>
      <input
        type="range"
        class="pba-range"
        min="0"
        max="100"
        .value=${String(pos)}
        aria-label=${t('تحريك المقارنة', 'Move comparison')}
        @input=${this.onRangeInput}
      />
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pba_');
    const title = localizedString(c.pba_title as string);
    const desc = localizedString(c.pba_desc as string);

    const pairs = this.pairs;
    const hasPairs = pairs.length > 0;
    const beforeImg = hasPairs ? (pairs[this.activePair]?.beforeImage ?? '') : this.singleBefore;
    const afterImg = hasPairs ? (pairs[this.activePair]?.afterImage ?? '') : this.singleAfter;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مقارنة قبل وبعد', 'Before & after comparison')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="pba-shell">
            ${hasPairs && pairs.length > 1
              ? html`<div class="pba-tabs" role="tablist">
                  ${pairs.map(
                    (pair, i) => html`
                      <button
                        type="button"
                        class=${classMap({ 'pba-tab': true, 'is-active': i === this.activePair })}
                        role="tab"
                        aria-selected=${i === this.activePair ? 'true' : 'false'}
                        @click=${() => this.selectPair(i)}
                      >${pair.title || `${i + 1}`}</button>
                    `
                  )}
                </div>`
              : nothing}

            ${this.renderViewport(beforeImg, afterImg)}
          </div>

          ${renderCommerceOutcome(c, 'pba_', { ready: true })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(PartsBeforeAfter as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });
