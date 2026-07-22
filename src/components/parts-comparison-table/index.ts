import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
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
import { getCellValue, parseCriteriaRows, parseTypes, resolveLayout } from './utils.js';
import type { CriteriaKey, PartType } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class PartsComparisonTable extends LitElement {

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

  private renderColumnHead(type: PartType) {
    const colorStyle = type.color ? { '--col-color': type.color } : {};
    return html`
      <div
        class=${classMap({ 'pct-col-head': true, 'is-highlight': type.highlight })}
        style=${styleMap(colorStyle)}
      >
        <span class="pct-col-head__name">${type.name}</span>
        ${type.badge ? html`<span class="pct-badge">${type.badge}</span>` : nothing}
      </div>
    `;
  }

  private renderTable(types: PartType[], criteria: ReturnType<typeof parseCriteriaRows>) {
    return html`
      <div class="pct-table-wrap" role="region" aria-label=${t('جدول المقارنة', 'Comparison table')}>
        <table class="pct-table">
          <thead>
            <tr>
              <th scope="col">${t('المعيار', 'Criteria')}</th>
              ${types.map(
                (type) => html`
                  <th scope="col" style=${styleMap(type.color ? { '--col-color': type.color } : {})}>
                    ${this.renderColumnHead(type)}
                  </th>
                `
              )}
            </tr>
          </thead>
          <tbody>
            ${criteria.map(
              (row) => html`
                <tr>
                  <th scope="row">${row.label}</th>
                  ${types.map(
                    (type) => html`
                      <td
                        class=${classMap({ 'pct-cell': true, 'is-highlight': type.highlight })}
                        style=${styleMap(type.color ? { '--col-color': type.color } : {})}
                      >
                        ${getCellValue(type, row.key as CriteriaKey)}
                      </td>
                    `
                  )}
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }

  private renderCard(type: PartType, criteria: ReturnType<typeof parseCriteriaRows>) {
    const colorStyle = type.color ? { '--col-color': type.color } : {};
    return html`
      <article
        class=${classMap({ 'pct-card': true, 'is-highlight': type.highlight })}
        style=${styleMap(colorStyle)}
        aria-label=${type.name}
      >
        <div class="pct-card__head">
          <h3 class="pct-card__name">${type.name}</h3>
          ${type.badge ? html`<span class="pct-badge">${type.badge}</span>` : nothing}
        </div>
        <dl class="pct-card__rows">
          ${criteria.map(
            (row) => html`
              <div class="pct-card__row">
                <dt>${row.label}</dt>
                <dd>${getCellValue(type, row.key as CriteriaKey)}</dd>
              </div>
            `
          )}
        </dl>
      </article>
    `;
  }

  private renderCards(types: PartType[], criteria: ReturnType<typeof parseCriteriaRows>, layout: 'cards' | 'table') {
    const stackClass = layout === 'cards' ? 'pct-cards--stack' : 'pct-cards--stack';
    return html`
      <div class=${classMap({ 'pct-cards': true, [stackClass]: true })} role="list">
        ${types.map((type) => this.renderCard(type, criteria))}
      </div>
      <div class="pct-scroll" role="list" aria-label=${t('تمرير أفقي للمقارنة', 'Horizontal comparison scroll')}>
        ${types.map((type) => this.renderCard(type, criteria))}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pct_');
    const types = parseTypes(c.pct_types);
    const criteria = parseCriteriaRows(c.pct_rows);
    const layout = resolveLayout(c.pct_layout);
    const title = localizedString(c.pct_title as string);
    const desc = localizedString(c.pct_desc as string);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مقارنة أنواع القطع', 'Parts type comparison')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class=${classMap({ 'pct-shell': true, 'pct-shell--table': layout === 'table', 'pct-shell--cards': layout === 'cards' })}>
            ${layout === 'table' ? this.renderTable(types, criteria) : nothing}
            ${this.renderCards(types, criteria, layout)}
          </div>
          ${renderCommerceOutcome(c, 'pct_', { ready: types.length > 0 })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(PartsComparisonTable as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

