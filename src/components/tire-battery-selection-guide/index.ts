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
import {
  parseBatterySpecs,
  parseTireCode,
  parseTireNotes,
  parseTireParts,
  resolveMode,
} from './utils.js';
import type { GuideMode } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

type TabId = 'tires' | 'batteries';

export default class TireBatterySelectionGuide extends LitElement {

  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeTab: TabId = 'tires';

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
      const mode = resolveMode(this.config?.tbsg_mode);
      if (mode === 'batteries') this.activeTab = 'batteries';
      else this.activeTab = 'tires';
    }
  }

  private get mode(): GuideMode {
    return resolveMode(this.config?.tbsg_mode);
  }

  private setTab(tab: TabId): void {
    this.activeTab = tab;
  }

  private renderSpecItem(label: string, value: string, note: string) {
    return html`
      <div class="tbsg-item">
        <p class="tbsg-item__label">${label}</p>
        <p class="tbsg-item__value">${value || '—'}</p>
        ${note ? html`<p class="tbsg-item__note">${note}</p>` : nothing}
      </div>
    `;
  }

  private renderTiresPanel() {
    const c = this.config || {};
    const exampleRaw = localizedString(c.tbsg_tire_example as string) || '225/45 R18';
    const parsed = parseTireCode(exampleRaw);
    const parts = parseTireParts(c.tbsg_tire_parts, parsed);
    const notes = parseTireNotes(c.tbsg_tire_notes);
    const tireTitle = localizedString(c.tbsg_tire_title as string) || t('فهم مقاس الإطار', 'Understanding tire size');

    return html`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${tireTitle}</h3>
        <div class="tbsg-example" aria-label=${t('مثال مقاس', 'Example size')}>${exampleRaw}</div>
        ${parsed
          ? nothing
          : html`<p class="tbsg-notes">${t('صيغة المثال: 225/45 R18', 'Example format: 225/45 R18')}</p>`}
        <div class="tbsg-grid">
          ${parts.map((part) => this.renderSpecItem(part.label, part.value, part.note))}
        </div>
        ${notes ? html`<p class="tbsg-notes">${notes}</p>` : nothing}
      </div>
    `;
  }

  private renderBatteriesPanel() {
    const c = this.config || {};
    const specs = parseBatterySpecs(c.tbsg_battery_specs);
    const batteryTitle =
      localizedString(c.tbsg_battery_title as string) || t('مواصفات البطارية', 'Battery specifications');

    return html`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${batteryTitle}</h3>
        <div class="tbsg-grid">
          ${specs.map((spec) => this.renderSpecItem(spec.label, spec.value, spec.note))}
        </div>
      </div>
    `;
  }

  private renderTabs(mode: GuideMode) {
    if (mode !== 'both') return nothing;

    const tabs: { id: TabId; label: string }[] = [
      { id: 'tires', label: localizedString(this.config?.tbsg_tire_title as string) || t('الإطارات', 'Tires') },
      {
        id: 'batteries',
        label: localizedString(this.config?.tbsg_battery_title as string) || t('البطاريات', 'Batteries'),
      },
    ];

    return html`
      <div class="tbsg-toolbar" role="tablist">
        ${tabs.map(
          (tab) => html`
            <button
              type="button"
              class=${classMap({ 'tbsg-tab': true, 'is-active': this.activeTab === tab.id })}
              role="tab"
              aria-selected=${this.activeTab === tab.id ? 'true' : 'false'}
              @click=${() => this.setTab(tab.id)}
            >
              ${tab.label}
            </button>
          `
        )}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'tbsg_');
    const mode = this.mode;
    const title = localizedString(c.tbsg_title as string);
    const desc = localizedString(c.tbsg_desc as string);

    const showTires = mode === 'tires' || mode === 'both';
    const showBatteries = mode === 'batteries' || mode === 'both';
    const tiresVisible = mode === 'tires' || (mode === 'both' && this.activeTab === 'tires');
    const batteriesVisible = mode === 'batteries' || (mode === 'both' && this.activeTab === 'batteries');

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('دليل اختيار الإطارات والبطاريات', 'Tire & battery selection guide')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          ${mode === 'both' ? this.renderTabs(mode) : nothing}

          ${showTires && tiresVisible ? this.renderTiresPanel() : nothing}
          ${showBatteries && batteriesVisible ? this.renderBatteriesPanel() : nothing}
          ${renderCommerceOutcome(c, 'tbsg_', { ready: Boolean(this.activeTab) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(TireBatterySelectionGuide as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

