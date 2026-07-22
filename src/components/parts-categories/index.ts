import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { enableDragScroll } from '../../utils/dragScroll.js';
import {
  extractLink,
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
import type { CategoryItem, CategoryLayout } from './types.js';
import {
  monogram,
  parseCategories,
  resolveColumns,
  resolveLayout,
  showLayoutToggle,
  splitProjectsItems,
  splitShowcaseItems,
} from './utils.js';

type CardOpts = {
  tile?: boolean;
  feature?: boolean;
};

export default class PartsCategories extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private layout: CategoryLayout = 'projects';

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
      this.layout = resolveLayout(this.config || {});
    }
  }

  private get items(): CategoryItem[] {
    return parseCategories(this.config?.pca_items ?? this.config?.pca_categories);
  }

  private renderCard(item: CategoryItem, opts: CardOpts = {}) {
    const tile = !!opts.tile;
    const feature = !!opts.feature;
    const compact = tile && !feature;

    const body = html`
      <div class="pca-card__media">
        ${item.image
          ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />`
          : html`<span class="pca-card__mono" aria-hidden="true">${monogram(item.title)}</span>`}
      </div>
      <div class="pca-card__body">
        <h3 class="pca-card__title">${item.title}</h3>
        ${!compact && item.desc ? html`<p class="pca-card__desc">${item.desc}</p>` : nothing}
        ${!tile
          ? html`<span class="pca-card__cta">
              ${item.link
                ? t('تصفّح التصنيف', 'Browse category')
                : t('أضف رابطًا من الإعدادات', 'Add a link in settings')}
            </span>`
          : nothing}
      </div>
    `;

    const cardClass = classMap({
      'pca-card': true,
      'pca-card--disabled': !item.link,
      'pca-card--feature': feature,
    });

    if (!item.link) {
      return html`<div class=${cardClass} role="group" aria-label=${item.title}>
        ${body}
      </div>`;
    }

    const external = isExternalUrl(item.link);
    return html`<a
      class=${cardClass}
      href=${item.link}
      target=${external ? '_blank' : nothing}
      rel=${external ? 'noopener noreferrer' : nothing}
      aria-label=${item.title}
    >
      ${body}
    </a>`;
  }

  private renderProducts() {
    return renderCommerceOutcome(this.config || {}, 'pca_', { ready: true });
  }

  private renderFooterLink() {
    const c = this.config || {};
    if (!isTruthy(c.pca_show_footer_link, false)) return nothing;
    const href = extractLink(c.pca_footer_link);
    if (!href) return nothing;
    const label =
      localizedString(c.pca_footer_label as string) ||
      t('اكتشف أحدث العروض', 'Discover latest offers');
    const external = isExternalUrl(href);
    return html`
      <div class="pca-footer-link">
        <a
          href=${href}
          target=${external ? '_blank' : nothing}
          rel=${external ? 'noopener noreferrer' : nothing}
        >
          ${label}
        </a>
      </div>
    `;
  }

  private renderShowcase(items: CategoryItem[]) {
    const { mosaic, rest } = splitShowcaseItems(items);
    return html`
      <div class="pca-showcase pca-tile" role="list">
        ${mosaic.map(
          (item) => html`<div role="listitem">${this.renderCard(item, { tile: true })}</div>`
        )}
      </div>
      ${rest.length
        ? html`<div class="pca-grid pca-showcase-rest" role="list">
            ${rest.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
          </div>`
        : nothing}
    `;
  }

  private renderProjects(items: CategoryItem[]) {
    const { stack, feature, rest } = splitProjectsItems(items);
    return html`
      <div class="pca-projects pca-tile" role="list">
        <div class="pca-projects__stack">
          ${stack.map(
            (item) => html`<div role="listitem">${this.renderCard(item, { tile: true })}</div>`
          )}
        </div>
        ${feature
          ? html`<div class="pca-projects__feature" role="listitem">
              ${this.renderCard(feature, { tile: true, feature: true })}
            </div>`
          : nothing}
      </div>
      ${this.renderFooterLink()}
      ${rest.length
        ? html`<div class="pca-grid pca-showcase-rest" role="list">
            ${rest.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
          </div>`
        : nothing}
    `;
  }

  private renderLayoutBody(items: CategoryItem[]) {
    if (this.layout === 'showcase') return this.renderShowcase(items);
    if (this.layout === 'projects') return this.renderProjects(items);

    const cols = resolveColumns(this.config || {});
    return html`<div
      class=${this.layout === 'slider' ? 'pca-slider' : 'pca-grid'}
      style=${this.layout === 'grid' ? styleMap({ '--pca-cols': String(cols) }) : nothing}
      role="list"
      ${ref((el) => {
        if (el instanceof HTMLElement && el.classList.contains('pca-slider')) {
          enableDragScroll(el);
        }
      })}
    >
      ${items.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
    </div>`;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pca_');
    const items = this.items;
    const title =
      localizedString(c.pca_title as string) || t('تصنيفات القطع', 'Parts categories');
    const desc =
      localizedString(c.pca_desc as string) ||
      t(
        'انتقل مباشرة إلى تصنيف أو منتج من متجرك.',
        'Go straight to a store category or product.'
      );
    const allowToggle = showLayoutToggle(c);

    if (!items.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف التصنيفات من إعدادات العنصر', 'Add categories in element settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pca-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('تسوّق بالتصنيف', 'Shop by category')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            ${allowToggle
              ? html`<div class="pca-toolbar">
                  <div class="pca-toggle" role="group" aria-label=${t('طريقة العرض', 'Layout')}>
                    <button
                      type="button"
                      class=${classMap({
                        'pca-toggle__btn': true,
                        'is-active': this.layout === 'showcase',
                      })}
                      @click=${() => (this.layout = 'showcase')}
                    >
                      ${t('مميز', 'Showcase')}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
                        'pca-toggle__btn': true,
                        'is-active': this.layout === 'projects',
                      })}
                      @click=${() => (this.layout = 'projects')}
                    >
                      ${t('مشاريع', 'Projects')}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
                        'pca-toggle__btn': true,
                        'is-active': this.layout === 'grid',
                      })}
                      @click=${() => (this.layout = 'grid')}
                    >
                      ${t('شبكة', 'Grid')}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
                        'pca-toggle__btn': true,
                        'is-active': this.layout === 'slider',
                      })}
                      @click=${() => (this.layout = 'slider')}
                    >
                      ${t('تمرير', 'Scroll')}
                    </button>
                  </div>
                </div>`
              : nothing}

            ${this.renderLayoutBody(items)}
            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  PartsCategories as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
