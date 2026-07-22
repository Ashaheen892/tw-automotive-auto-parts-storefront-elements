import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
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
import {
  findMatchingSize,
  formatTireCode,
  label,
  parseTireSizes,
  parseTireTypes,
  resolveAspects,
  resolveRims,
  resolveWidths,
} from './utils.js';

export default class TireSizeFinder extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private typeId = '';
  @state() private width = '';
  @state() private aspect = '';
  @state() private rim = '';

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
      const types = parseTireTypes(this.config?.tsf_types);
      this.typeId = types[0]?.id || '';
      this.width = '';
      this.aspect = '';
      this.rim = '';
    }
  }

  private get types() {
    return parseTireTypes(this.config?.tsf_types);
  }

  private get activeType() {
    return this.types.find((x) => x.id === this.typeId) ?? null;
  }

  private get sizeRows() {
    return parseTireSizes(this.config?.tsf_sizes);
  }

  private get matchingSize() {
    return findMatchingSize(this.sizeRows, this.width, this.aspect, this.rim, this.typeId);
  }

  private get code() {
    return formatTireCode(this.width, this.aspect, this.rim);
  }

  private get ready() {
    return Boolean(this.typeId && this.width && this.aspect && this.rim);
  }

  private renderChips(
    values: string[],
    selected: string,
    onPick: (v: string) => void,
    aria: string
  ) {
    return html`
      <div class="tsf-chips" role="group" aria-label=${aria}>
        ${values.map(
          (v) => html`<button
            type="button"
            class=${classMap({ 'tsf-chip': true, 'is-active': selected === v })}
            aria-pressed=${selected === v ? 'true' : 'false'}
            @click=${() => onPick(v)}
          >
            ${v}
          </button>`
        )}
      </div>
    `;
  }

  private renderProducts() {
    return renderCommerceOutcome(this.config || {}, 'tsf_', {
      ready: this.ready,
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'tsf_');
    const title =
      localizedString(c.tsf_title as string) || t('محدد مقاس الإطار', 'Tire size finder');
    const desc =
      localizedString(c.tsf_desc as string) ||
      t(
        'اختر نوع الإطار ثم العرض والنسبة والجنط لعرض المقاس المناسب للسيارة.',
        'Choose tire type, then width, aspect ratio, and rim to see the matching size.'
      );

    const widths = resolveWidths(c);
    const aspects = resolveAspects(c);
    const rims = resolveRims(c);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="tsf-shell">
            <div class="tsf-card">
              <div class="tsf-code" aria-live="polite">
                <p class="tsf-code__label">${t('المقاس المختار', 'Selected size')}</p>
                <p class="tsf-code__value">${this.code || '— / — R—'}</p>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, 'tsf_type_label', 'نوع الإطار', 'Tire type')}</span>
                <div class="tsf-types" role="group">
                  ${this.types.map(
                    (type) => html`<button
                      type="button"
                      class="tsf-type"
                      aria-pressed=${this.typeId === type.id ? 'true' : 'false'}
                      @click=${() => {
                        this.typeId = type.id;
                      }}
                    >
                      <span class="tsf-type__name">${type.name}</span>
                      ${type.desc
                        ? html`<span class="tsf-type__desc">${type.desc}</span>`
                        : nothing}
                    </button>`
                  )}
                </div>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, 'tsf_width_label', 'العرض', 'Width')}</span>
                ${this.renderChips(widths, this.width, (v) => {
                  this.width = v;
                }, label(c, 'tsf_width_label', 'العرض', 'Width'))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, 'tsf_aspect_label', 'نسبة الارتفاع', 'Aspect ratio')}</span>
                ${this.renderChips(aspects, this.aspect, (v) => {
                  this.aspect = v;
                }, label(c, 'tsf_aspect_label', 'نسبة الارتفاع', 'Aspect ratio'))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${label(c, 'tsf_rim_label', 'قطر الجنط', 'Rim diameter')}</span>
                ${this.renderChips(rims, this.rim, (v) => {
                  this.rim = v;
                }, label(c, 'tsf_rim_label', 'قطر الجنط', 'Rim diameter'))}
              </div>

              ${!this.ready
                ? html`<p class="tsf-hint">
                    ${t('أكمل اختيار النوع والمقاس لعرض النتيجة المناسبة.', 'Complete type and size to see the right match.')}
                  </p>`
                : nothing}
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  TireSizeFinder as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
