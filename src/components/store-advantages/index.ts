import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  isTruthy,
  prefersReducedMotion,
  readSectionTheme,
  t,
  themeStyleMap,
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { BrandItem } from './types.js';
import { parseBrands } from './utils.js';

export default class StoreAdvantages extends LitElement {
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

  private get brands(): BrandItem[] {
    return parseBrands(this.config?.sta_items);
  }

  private renderBrand(item: BrandItem, key: string) {
    const showName = isTruthy(this.config?.sta_show_names, true);
    const initial = item.name.charAt(0).toUpperCase();
    const body = html`
      <span class="sta-brand__logo" aria-hidden="true">
        ${item.image
          ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />`
          : html`<span class="sta-brand__fallback">${initial}</span>`}
      </span>
      ${showName ? html`<p class="sta-brand__name">${item.name}</p>` : nothing}
    `;

    if (!item.link) {
      return html`<div class="sta-brand" data-key=${key}>${body}</div>`;
    }

    const external = isExternalUrl(item.link);
    return html`<a
      class="sta-brand"
      data-key=${key}
      href=${item.link}
      target=${external ? '_blank' : nothing}
      rel=${external ? 'noopener noreferrer' : nothing}
      aria-label=${item.name}
    >
      ${body}
    </a>`;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'sta_', {
      bg: 'transparent',
      spaceDesktop: 28,
      spaceMobile: 18,
    });
    const brands = this.brands;
    const title = localizedString(c.sta_title as string);
    const desc = localizedString(c.sta_desc as string);
    const speed = Math.max(12, Math.min(90, Number(c.sta_speed) || 35));
    const reduced = prefersReducedMotion();
    // Duplicate the list so the infinite CSS loop stays seamless.
    const loop = reduced || brands.length < 2 ? brands : [...brands, ...brands];

    if (!brands.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف الماركات من إعدادات العنصر', 'Add brands in element settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap({
          ...themeStyleMap(theme),
          '--sta-speed': `${speed}s`,
        })}
        aria-label=${title || t('الماركات التجارية', 'Store brands')}
      >
        <div class="fs-container">
          <div class="sta-shell">
            ${title || desc
              ? html`<div class="fs-hero">
                  ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                  ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
                </div>`
              : nothing}

            <div class="sta-marquee" role="list" aria-label=${t('الماركات', 'Brands')}>
              <div class="sta-track">
                ${loop.map((brand, i) => this.renderBrand(brand, `${brand.id}-${i}`))}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  StoreAdvantages as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
