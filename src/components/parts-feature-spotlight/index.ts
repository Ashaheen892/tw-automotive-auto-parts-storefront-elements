import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  extractImageUrl,
  isTruthy,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { FeatureItem } from './types.js';
import {
  parseFeatures,
  showConnectors,
  splitFeatures,
} from './utils.js';

export default class PartsFeatureSpotlight extends LitElement {
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
      this.activeId = this.features[0]?.id ?? '';
    }
  }

  private get features(): FeatureItem[] {
    return parseFeatures(this.config?.pfs_features);
  }

  private get active(): FeatureItem | null {
    return this.features.find((f) => f.id === this.activeId) ?? this.features[0] ?? null;
  }

  private select(id: string): void {
    this.activeId = id;
  }

  private renderFeature(item: FeatureItem) {
    const active = item.id === this.active?.id;
    return html`
      <button
        type="button"
        class=${classMap({ 'pfs-feat': true, 'is-active': active })}
        aria-pressed=${active ? 'true' : 'false'}
        @click=${() => this.select(item.id)}
      >
        <span class="pfs-feat__icon" aria-hidden="true">
          ${item.iconImage
            ? html`<img src=${item.iconImage} alt="" loading="lazy" decoding="async" />`
            : item.icon}
        </span>
        <span class="pfs-feat__body">
          <h3 class="pfs-feat__title">${item.title}</h3>
          ${item.desc ? html`<p class="pfs-feat__desc">${item.desc}</p>` : nothing}
        </span>
      </button>
    `;
  }

  private renderProducts(item: FeatureItem | null) {
    return renderCommerceOutcome(this.config || {}, 'pfs_', {
      ready: Boolean(item),
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'pfs_');
    const features = this.features;
    const { start, end } = splitFeatures(features);
    const active = this.active;
    const title =
      localizedString(c.pfs_title as string) ||
      t('مميزات القطعة في لمحة', 'Part features at a glance');
    const desc =
      localizedString(c.pfs_desc as string) ||
      t(
        'استكشف أبرز مزايا القطعة حول الصورة المركزية، ثم تصفّح المنتجات المرتبطة.',
        'Explore key part benefits around the center image, then browse related products.'
      );
    const centerImage = extractImageUrl(c.pfs_center_image);
    const centerCaption =
      localizedString(c.pfs_center_caption as string) ||
      t('القطعة المختارة', 'Featured part');
    const connectors = showConnectors(c);

    if (!features.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف المميزات من إعدادات العنصر', 'Add features in element settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pfs-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('لماذا هذه القطعة؟', 'Why this part?')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div
              class=${classMap({
                'pfs-stage': true,
                'has-connectors': connectors,
              })}
            >
              <div class="pfs-col pfs-col--start" role="list">
                ${start.map((item) => html`<div role="listitem">${this.renderFeature(item)}</div>`)}
              </div>

              <div class="pfs-center">
                <div class="pfs-center__frame">
                  ${centerImage
                    ? html`<img
                        class="pfs-center__img"
                        src=${centerImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />`
                    : html`<span class="pfs-center__placeholder" aria-hidden="true">+</span>`}
                </div>
                ${centerCaption
                  ? html`<p class="pfs-center__caption">${centerCaption}</p>`
                  : nothing}
              </div>

              <div class="pfs-col pfs-col--end" role="list">
                ${end.map((item) => html`<div role="listitem">${this.renderFeature(item)}</div>`)}
              </div>
            </div>

            ${this.renderProducts(active)}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  PartsFeatureSpotlight as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
