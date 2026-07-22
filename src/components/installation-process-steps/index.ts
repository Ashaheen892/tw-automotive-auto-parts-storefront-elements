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
import { parseSteps, progressPercent } from './utils.js';
import type { ProcessStep } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

const AUTOPLAY_MS = 6000;

export default class InstallationProcessSteps extends LitElement {

  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeIndex = 0;

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private boundLangHandler = () => this.requestUpdate();

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
      const steps = parseSteps(this.config?.ips_steps);
      if (this.activeIndex >= steps.length) this.activeIndex = 0;
      this.syncAutoplay();
    }
  }

  private get steps(): ProcessStep[] {
    return parseSteps(this.config?.ips_steps);
  }


  private clearAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  private syncAutoplay(): void {
    this.clearAutoplay();
    const c = this.config || {};
    const enabled = isTruthy(c.ips_autoplay, false);
    if (!enabled || prefersReducedMotion() || this.steps.length < 2) return;

    this.autoplayTimer = setInterval(() => {
      const total = this.steps.length;
      this.activeIndex = (this.activeIndex + 1) % total;
    }, AUTOPLAY_MS);
  }

  private goTo(index: number): void {
    this.activeIndex = index;
    this.syncAutoplay();
  }

  private goPrev(): void {
    this.goTo(Math.max(0, this.activeIndex - 1));
  }

  private goNext(): void {
    this.goTo(Math.min(this.steps.length - 1, this.activeIndex + 1));
  }

  private renderStepButton(step: ProcessStep, index: number) {
    const active = index === this.activeIndex;
    return html`
      <button
        type="button"
        class=${classMap({ 'ips-step-btn': true, 'is-active': active })}
        aria-current=${active ? 'step' : nothing}
        @click=${() => this.goTo(index)}
      >
        <span class="ips-step-btn__num">${t('خطوة', 'Step')} ${index + 1}</span>
        <span class="ips-step-btn__title">${step.title}</span>
        ${step.duration ? html`<span class="ips-step-btn__dur">${step.duration}</span>` : nothing}
      </button>
    `;
  }

  private renderDetail(step: ProcessStep, index: number, total: number) {
    const hasMedia = Boolean(step.image);
    return html`
      <div
        class=${classMap({
          'ips-detail': true,
          'ips-detail--split': hasMedia,
          'ips-detail--text-only': !hasMedia,
        })}
        aria-live="polite"
      >
        <div class="ips-detail__media" aria-hidden=${hasMedia ? 'false' : 'true'}>
          ${step.image
            ? html`<img src=${step.image} alt="" loading="lazy" decoding="async" />`
            : html`<div class="ips-detail__placeholder">
                <span class="ips-detail__placeholder-num">${index + 1}</span>
                <span>${t('مرحلة الخدمة', 'Service stage')}</span>
              </div>`}
        </div>

        <div class="ips-detail__copy">
          <p class="ips-detail__meta">
            <span class="ips-detail__step-pill"
              >${t('الخطوة', 'Step')} ${index + 1} / ${total}</span
            >
            ${step.duration
              ? html`<span class="ips-detail__dur">${step.duration}</span>`
              : nothing}
          </p>
          <h3 class="ips-detail__title">${step.title}</h3>
          ${step.desc ? html`<p class="ips-detail__desc">${step.desc}</p>` : nothing}
          ${step.videoUrl
            ? html`<a
                class="ips-detail__video"
                href=${step.videoUrl}
                target="_blank"
                rel=${isExternalUrl(step.videoUrl) ? 'noopener noreferrer' : nothing}
              >
                ${t('شاهد فيديو التركيب', 'Watch install video')}
              </a>`
            : nothing}
        </div>
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'ips_');
    const steps = this.steps;
    const active = steps[this.activeIndex] ?? steps[0];
    const title = localizedString(c.ips_title as string);
    const desc = localizedString(c.ips_desc as string);
    const prevLabel = localizedString(this.config?.ips_prev_label as string) || t('السابق', 'Previous');
    const nextLabel = localizedString(this.config?.ips_next_label as string) || t('التالي', 'Next');
    const pct = progressPercent(this.activeIndex, steps.length);

    if (!steps.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف خطوات التركيب من إعدادات العنصر', 'Add installation steps in element settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('خطوات التركيب الاحترافي', 'Professional installation steps')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="ips-shell">
            <div class="ips-progress fs-progress">
              <div class="fs-progress__bar" aria-hidden="true"><span style=${styleMap({ width: `${pct}%` })}></span></div>
              <span class="fs-progress__label">
                ${t('التقدم', 'Progress')}: ${pct}%
              </span>
            </div>

            <div class="ips-track" role="tablist" aria-label=${t('خطوات العملية', 'Process steps')}>
              ${steps.map((step, i) => this.renderStepButton(step, i))}
            </div>

            <div class="ips-vertical" role="tablist">
              ${steps.map((step, i) => this.renderStepButton(step, i))}
            </div>

            ${active ? this.renderDetail(active, this.activeIndex, steps.length) : nothing}

            <div class="ips-nav">
              <button
                type="button"
                class="fs-btn fs-btn--ghost fs-tap"
                ?disabled=${this.activeIndex === 0}
                @click=${() => this.goPrev()}
              >
                ${prevLabel}
              </button>
              <button
                type="button"
                class="fs-btn fs-tap"
                ?disabled=${this.activeIndex >= steps.length - 1}
                @click=${() => this.goNext()}
              >
                ${nextLabel}
              </button>
            </div>
          </div>
          ${renderCommerceOutcome(c, 'ips_', { ready: Boolean(active) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(InstallationProcessSteps as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

