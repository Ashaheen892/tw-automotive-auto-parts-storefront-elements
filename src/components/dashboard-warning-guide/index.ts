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
import { parseWarnings, severityClass, severityFieldLabel, severityValueLabel } from './utils.js';
import type { DashboardWarning } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class DashboardWarningGuide extends LitElement {

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
      this.activeId = '';
    }
  }

  private get warnings(): DashboardWarning[] {
    return parseWarnings(this.config?.dwg_warnings);
  }

  private get active(): DashboardWarning | null {
    return this.warnings.find((w) => w.id === this.activeId) ?? null;
  }

  private renderDetail(warning: DashboardWarning | null) {
    if (!warning) return nothing;

    const c = this.config || {};

    return html`
      <div class="dwg-detail" role="region" aria-live="polite">
        <div class="dwg-detail__head">
          <h3 class="dwg-detail__title">${warning.name}</h3>
          <span class=${classMap({ 'fs-pill': true, [severityClass(warning.severity)]: true })}>
            ${severityFieldLabel(c)}: ${severityValueLabel(warning.severity)}
          </span>
        </div>

        ${warning.meaning
          ? html`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${t('المعنى', 'Meaning')}</p>
              <p class="dwg-detail__text">${warning.meaning}</p>
            </div>`
          : nothing}

        ${warning.action
          ? html`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${t('الإجراء المقترح', 'Suggested action')}</p>
              <div class="dwg-detail__action">${warning.action}</div>
            </div>`
          : nothing}

        ${warning.link
          ? html`<a class="fs-btn fs-tap" href=${warning.link} target="_blank" rel="noopener noreferrer">
              ${t('تصفّح القطع ذات الصلة', 'Browse related parts')}
            </a>`
          : nothing}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'dwg_');
    const warnings = this.warnings;
    const title = localizedString(c.dwg_title as string);
    const desc = localizedString(c.dwg_desc as string);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('دليل أضواء التحذير', 'Dashboard warning guide')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="dwg-grid" role="list">
            ${warnings.map((w) => {
              const active = this.activeId === w.id;
              return html`
                <button
                  type="button"
                  class=${classMap({ 'dwg-item': true, 'is-active': active })}
                  role="listitem"
                  aria-pressed=${active ? 'true' : 'false'}
                  style=${styleMap(w.color ? { '--dwg-color': w.color } : {})}
                  @click=${() => (this.activeId = w.id)}
                >
                  <span class="dwg-item__icon">
                    ${w.image
                      ? html`<img src=${w.image} alt="" loading="lazy" />`
                      : w.iconText || '⚠'}
                  </span>
                  <span class="dwg-item__name">${w.name}</span>
                </button>
              `;
            })}
          </div>

          ${this.renderDetail(this.active)}
          ${renderCommerceOutcome(c, 'dwg_', { ready: Boolean(this.active) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(DashboardWarningGuide as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

