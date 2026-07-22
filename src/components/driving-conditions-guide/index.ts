import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { componentStyles } from './styles.js';
import { parseConditions, resolveLayout } from './utils.js';
import type { DrivingCondition } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class DrivingConditionsGuide extends LitElement {
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
      const items = parseConditions(this.config?.dcg_conditions);
      if (!items.some((item) => item.id === this.activeId)) {
        this.activeId = items[0]?.id ?? '';
      }
    }
  }

  private get conditions(): DrivingCondition[] {
    return parseConditions(this.config?.dcg_conditions);
  }

  private get active(): DrivingCondition | null {
    return this.conditions.find((c) => c.id === this.activeId) ?? this.conditions[0] ?? null;
  }


  private select(id: string): void {
    this.activeId = id;
  }

  private renderAdviceCard(tone: string, label: string, items: string[]) {
    if (!items.length) return nothing;
    return html`
      <div class=${classMap({ 'dcg-advice': true, [`dcg-advice--${tone}`]: true })}>
        <p class="dcg-advice__label">${label}</p>
        <ul class="dcg-advice__list">
          ${items.map((item) => html`<li>${item}</li>`)}
        </ul>
      </div>
    `;
  }

  private renderPanel(item: DrivingCondition, index: number, total: number) {
    const hasMedia = Boolean(item.image);
    return html`
      <article
        class=${classMap({
          'dcg-panel': true,
          'dcg-panel--split': hasMedia,
        })}
        role="region"
        aria-live="polite"
      >
        <div class="dcg-panel__visual">
          ${item.image
            ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />`
            : html`<div class="dcg-panel__visual-fallback" aria-hidden="true">
                <span>${item.icon || '🚗'}</span>
              </div>`}
          <div class="dcg-panel__overlay">
            <span class="dcg-panel__count"
              >${t('الظرف', 'Condition')} ${index + 1}/${total}</span
            >
          </div>
        </div>

        <div class="dcg-panel__copy">
          <div class="dcg-panel__head">
            ${item.icon
              ? html`<span class="dcg-panel__icon" aria-hidden="true">${item.icon}</span>`
              : nothing}
            <div>
              <p class="fs-eyebrow">${t('توصيات القيادة', 'Driving advice')}</p>
              <h3 class="dcg-panel__title">${item.name}</h3>
            </div>
          </div>

          ${item.desc ? html`<p class="dcg-panel__desc">${item.desc}</p>` : nothing}

          <div class="dcg-panel__grid">
            ${this.renderAdviceCard(
              'checks',
              localizedString(this.config?.dcg_checks_label as string) || t('الفحص المطلوب', 'Required checks'),
              item.checks
            )}
            ${this.renderAdviceCard(
              'parts',
              localizedString(this.config?.dcg_parts_label as string) || t('قطع تحتاج اهتمامًا', 'Parts to watch'),
              item.parts
            )}
            ${this.renderAdviceCard(
              'maint',
              localizedString(this.config?.dcg_maint_label as string) || t('صيانة وقائية', 'Preventive maintenance'),
              item.maintenance
            )}
            ${this.renderAdviceCard(
              'prep',
              localizedString(this.config?.dcg_prep_label as string) || t('تجهيز قبل الرحلة', 'Trip prep'),
              item.prep
            )}
          </div>

          ${item.link
            ? html`<a
                class="fs-btn fs-tap dcg-panel__cta"
                href=${item.link}
                target="_blank"
                rel=${isExternalUrl(item.link) ? 'noopener noreferrer' : nothing}
              >
                ${t('تصفّح القطع المناسبة', 'Browse matching parts')}
              </a>`
            : nothing}
        </div>
      </article>
    `;
  }

  private renderTabs(items: DrivingCondition[]) {
    const active = this.active;
    return html`
      <div class="dcg-tabs" role="tablist" aria-label=${t('ظروف القيادة', 'Driving conditions')}>
        ${items.map((item) => {
          const isActive = item.id === active?.id;
          return html`
            <button
              type="button"
              class=${classMap({ 'dcg-tab': true, 'is-active': isActive })}
              role="tab"
              aria-selected=${isActive ? 'true' : 'false'}
              @click=${() => this.select(item.id)}
            >
              ${item.icon
                ? html`<span class="dcg-tab__icon" aria-hidden="true">${item.icon}</span>`
                : nothing}
              <span>${item.name}</span>
            </button>
          `;
        })}
      </div>
    `;
  }

  private renderCards(items: DrivingCondition[]) {
    const active = this.active;
    return html`
      <div class="dcg-cards" role="listbox" aria-label=${t('ظروف القيادة', 'Driving conditions')}>
        ${items.map((item) => {
          const isActive = item.id === active?.id;
          return html`
            <button
              type="button"
              class=${classMap({ 'dcg-card': true, 'is-active': isActive })}
              role="option"
              aria-selected=${isActive ? 'true' : 'false'}
              @click=${() => this.select(item.id)}
            >
              <span class="dcg-card__icon" aria-hidden="true">${item.icon || '◎'}</span>
              <span class="dcg-card__name">${item.name}</span>
              ${item.desc
                ? html`<span class="dcg-card__hint">${item.desc}</span>`
                : nothing}
            </button>
          `;
        })}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'dcg_');
    const items = this.conditions;
    const active = this.active;
    const activeIndex = Math.max(
      0,
      items.findIndex((item) => item.id === active?.id)
    );
    const layout = resolveLayout(c.dcg_layout);
    const title = localizedString(c.dcg_title as string);
    const desc = localizedString(c.dcg_desc as string);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('دليل ظروف القيادة', 'Driving conditions guide')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="dcg-shell">
            ${layout === 'tabs' ? this.renderTabs(items) : this.renderCards(items)}
            ${active ? this.renderPanel(active, activeIndex, items.length) : nothing}
          </div>

          ${renderCommerceOutcome(c, 'dcg_', { ready: Boolean(active) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(
  DrivingConditionsGuide as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
