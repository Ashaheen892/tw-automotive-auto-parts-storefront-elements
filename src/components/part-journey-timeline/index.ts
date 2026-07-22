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
import { componentStyles } from './styles.js';
import { parseStages } from './utils.js';
import type { JourneyStage } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class PartJourneyTimeline extends LitElement {
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
      const stages = parseStages(this.config?.pjt_stages);
      if (!stages.some((s) => s.id === this.activeId)) {
        this.activeId = stages[0]?.id ?? '';
      }
    }
  }

  private get stages(): JourneyStage[] {
    return parseStages(this.config?.pjt_stages);
  }

  private get active(): JourneyStage | null {
    return this.stages.find((s) => s.id === this.activeId) ?? this.stages[0] ?? null;
  }

  private get activeIndex(): number {
    const idx = this.stages.findIndex((s) => s.id === this.activeId);
    return idx >= 0 ? idx : 0;
  }

  private select(id: string): void {
    this.activeId = id;
  }

  private renderPanel(stage: JourneyStage | null, index: number, total: number) {
    if (!stage) return nothing;

    return html`
      <article class="pjt-panel" role="region" aria-live="polite">
        <div class=${classMap({ 'pjt-panel__grid': true, 'has-media': Boolean(stage.image) })}>
          <div class="pjt-panel__visual">
            ${stage.image
              ? html`<img src=${stage.image} alt="" loading="lazy" decoding="async" />`
              : html`<div class="pjt-panel__visual-fallback" aria-hidden="true">
                  <span class="pjt-panel__visual-icon">${stage.icon || '◆'}</span>
                </div>`}
            ${stage.badge
              ? html`<span class="pjt-panel__stamp">${stage.badge}</span>`
              : nothing}
          </div>

          <div class="pjt-panel__body">
            <p class="pjt-panel__kicker">
              ${t('المرحلة', 'Stage')} ${index + 1}
              <span aria-hidden="true">/</span>
              ${total}
            </p>
            <h3 class="pjt-panel__title">${stage.title}</h3>
            ${stage.desc ? html`<p class="pjt-panel__desc">${stage.desc}</p>` : nothing}

            <div class="pjt-panel__facts">
              ${stage.quality
                ? html`<div class="pjt-fact">
                    <span class="pjt-fact__label">${t('معيار الجودة', 'Quality standard')}</span>
                    <span class="pjt-fact__value">${stage.quality}</span>
                  </div>`
                : nothing}
              ${stage.duration
                ? html`<div class="pjt-fact">
                    <span class="pjt-fact__label">${t('المدة التقريبية', 'Approx. duration')}</span>
                    <span class="pjt-fact__value">${stage.duration}</span>
                  </div>`
                : nothing}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pjt_');
    const stages = this.stages;
    const active = this.active;
    const activeIdx = this.activeIndex;
    const title = localizedString(c.pjt_title as string);
    const desc = localizedString(c.pjt_desc as string);
    const progress = stages.length ? Math.round(((activeIdx + 1) / stages.length) * 100) : 0;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('رحلة القطعة', 'Part journey timeline')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="pjt-shell">
            <div class="pjt-rail" role="tablist" aria-label=${t('مراحل الرحلة', 'Journey stages')}>
              <div class="pjt-rail__line" aria-hidden="true">
                <span style=${styleMap({ width: `${progress}%` })}></span>
              </div>

              <div class="pjt-rail__steps">
                ${stages.map((stage, i) => {
                  const isActive = stage.id === active?.id;
                  const isDone = i < activeIdx;
                  return html`
                    <button
                      type="button"
                      class=${classMap({
                        'pjt-node': true,
                        'is-active': isActive,
                        'is-done': isDone,
                      })}
                      role="tab"
                      aria-selected=${isActive ? 'true' : 'false'}
                      @click=${() => this.select(stage.id)}
                    >
                      <span class="pjt-node__dot" aria-hidden="true">
                        ${stage.icon
                          ? html`<span class="pjt-node__icon">${stage.icon}</span>`
                          : html`<span class="pjt-node__num">${i + 1}</span>`}
                      </span>
                      <span class="pjt-node__label">${stage.title}</span>
                      ${stage.badge
                        ? html`<span class="pjt-node__badge">${stage.badge}</span>`
                        : nothing}
                    </button>
                  `;
                })}
              </div>
            </div>

            ${this.renderPanel(active, activeIdx, stages.length)}
          </div>

          ${renderCommerceOutcome(c, 'pjt_', { ready: Boolean(active) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(
  PartJourneyTimeline as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
