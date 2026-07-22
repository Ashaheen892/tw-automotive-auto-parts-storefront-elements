import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
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
import type { HistoryEvent } from './types.js';
import {
  formatKm,
  label,
  latestEvent,
  nextServiceHint,
  parseEvents,
  resolveLayout,
  showStats,
  uniqueCategories,
} from './utils.js';

export default class VisualVehicleHistory extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private selectedId = '';
  @state() private filter = '';

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
      const events = this.events;
      this.filter = '';
      this.selectedId = events[0]?.id ?? '';
    }
  }

  private get events(): HistoryEvent[] {
    return parseEvents(this.config?.vvh_events);
  }

  private get filtered(): HistoryEvent[] {
    if (!this.filter) return this.events;
    return this.events.filter((e) => e.category === this.filter);
  }

  private get selected(): HistoryEvent | null {
    const list = this.filtered;
    return list.find((e) => e.id === this.selectedId) ?? list[0] ?? null;
  }

  private select(id: string): void {
    this.selectedId = id;
    void this.updateComplete.then(() => {
      const active = this.renderRoot?.querySelector('.vvh-trigger.is-active') as HTMLElement | null;
      active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
  }

  private setFilter(value: string): void {
    this.filter = value;
    const list = value ? this.events.filter((e) => e.category === value) : this.events;
    this.selectedId = list[0]?.id ?? '';
  }

  private shift(delta: number): void {
    const list = this.filtered;
    if (!list.length) return;
    const idx = Math.max(0, list.findIndex((e) => e.id === this.selected?.id));
    const next = (idx + delta + list.length) % list.length;
    this.select(list[next].id);
  }

  private renderStats(events: HistoryEvent[]) {
    if (!showStats(this.config || {}) || !events.length) return nothing;
    const unit = label(this.config || {}, 'vvh_unit_label', 'كم', 'km');
    const latest = latestEvent(events);
    const next = nextServiceHint(events);
    return html`
      <div class="vvh-stats" role="group" aria-label=${t('ملخص السجل', 'Log summary')}>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${t('عدد السجلات', 'Records')}</p>
          <p class="vvh-stat__value">${events.length}</p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${t('آخر خدمة', 'Latest service')}</p>
          <p class="vvh-stat__value">
            ${latest?.title || '—'}
            ${latest?.km ? html` · ${formatKm(latest.km, unit)}` : nothing}
          </p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${label(this.config || {}, 'vvh_next_label', 'الصيانة القادمة', 'Next service')}</p>
          <p class="vvh-stat__value">${next || t('غير محددة', 'Not set')}</p>
        </div>
      </div>
    `;
  }

  private renderFilters(events: HistoryEvent[]) {
    const cats = uniqueCategories(events);
    if (cats.length < 2) return nothing;
    return html`
      <div class="vvh-filters" role="toolbar" aria-label=${t('تصفية حسب النوع', 'Filter by type')}>
        <button
          type="button"
          class=${classMap({ 'vvh-filter': true, 'is-active': !this.filter })}
          @click=${() => this.setFilter('')}
        >
          ${t('الكل', 'All')}
        </button>
        ${cats.map(
          (cat) => html`<button
            type="button"
            class=${classMap({ 'vvh-filter': true, 'is-active': this.filter === cat })}
            @click=${() => this.setFilter(cat)}
          >
            ${cat}
          </button>`
        )}
      </div>
    `;
  }

  private renderDetail(event: HistoryEvent | null, list: HistoryEvent[]) {
    if (!event) {
      return html`<div class="vvh-detail">
        <p class="vvh-empty">${t('اختر سجلًا من الخط الزمني لعرض التفاصيل.', 'Pick a log entry to see details.')}</p>
      </div>`;
    }

    const c = this.config || {};
    const unit = label(c, 'vvh_unit_label', 'كم', 'km');
    const nextLabel = label(c, 'vvh_next_label', 'الصيانة القادمة', 'Next service');
    const idx = list.findIndex((e) => e.id === event.id);

    return html`
      <div class="vvh-detail" role="region" aria-live="polite">
        <div class="vvh-detail__head">
          <div>
            <p class="vvh-detail__kicker">
              ${t('تفاصيل السجل', 'Log details')}
              ${idx >= 0 ? ` · ${idx + 1}/${list.length}` : ''}
            </p>
            <h3 class="vvh-detail__title">${event.title}</h3>
          </div>
          ${list.length > 1
            ? html`<div class="vvh-detail__nav" dir="ltr">
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${t('السابق', 'Previous')}
                  @click=${() => this.shift(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${t('التالي', 'Next')}
                  @click=${() => this.shift(1)}
                >
                  ›
                </button>
              </div>`
            : nothing}
        </div>

        <p class="vvh-detail__meta">
          ${event.date || nothing}
          ${event.date && event.km ? ' · ' : nothing}
          ${event.km ? formatKm(event.km, unit) : nothing}
          ${event.category
            ? html` · <span class="vvh-chip vvh-chip--accent">${event.category}</span>`
            : nothing}
        </p>

        ${event.image
          ? html`<div class="vvh-detail__media">
              <img src=${event.image} alt="" loading="lazy" decoding="async" />
            </div>`
          : nothing}

        ${event.note ? html`<p class="vvh-detail__note">${event.note}</p>` : nothing}

        ${event.nextService
          ? html`<div class="vvh-next" role="note">
              <span class="vvh-next__label">${nextLabel}</span>
              <p class="vvh-next__text">${event.nextService}</p>
            </div>`
          : nothing}

        ${event.documentUrl
          ? html`<a
              class="fs-btn fs-btn--ghost fs-tap"
              href=${event.documentUrl}
              target="_blank"
              rel=${isExternalUrl(event.documentUrl) ? 'noopener noreferrer' : nothing}
            >
              ${t('عرض المستند', 'View document')}
            </a>`
          : nothing}
      </div>
    `;
  }

  private renderProducts(event: HistoryEvent | null) {
    return renderCommerceOutcome(this.config || {}, 'vvh_', {
      ready: Boolean(event),
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'vvh_');
    const events = this.events;
    const list = this.filtered;
    const layout = resolveLayout(c.vvh_layout);
    const unit = label(c, 'vvh_unit_label', 'كم', 'km');
    const title =
      localizedString(c.vvh_title as string) || t('سجل صيانة السيارة', 'Vehicle maintenance log');
    const desc =
      localizedString(c.vvh_desc as string) ||
      t(
        'راجع خدمات سيارتك السابقة، وتصفّح القطع المناسبة لكل سجل صيانة.',
        'Review past vehicle services and browse matching parts for each log entry.'
      );
    const selected = this.selected;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="vvh-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('دفتر الصيانة', 'Service logbook')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            ${this.renderStats(events)}
            ${this.renderFilters(events)}

            <div
              class=${classMap({
                'vvh-layout': true,
                'vvh-layout--vertical': layout === 'vertical',
                'vvh-layout--horizontal': layout === 'horizontal',
              })}
            >
              <div class="vvh-card">
                <div class="vvh-track" role="list">
                  ${list.length
                    ? list.map(
                        (event, i) => html`
                          <div class="vvh-item" role="listitem">
                            <button
                              type="button"
                              class=${classMap({
                                'vvh-trigger': true,
                                'is-active': event.id === selected?.id,
                              })}
                              aria-pressed=${event.id === selected?.id ? 'true' : 'false'}
                              @click=${() => this.select(event.id)}
                            >
                              <span class="vvh-trigger__index">${String(i + 1).padStart(2, '0')}</span>
                              <span class="vvh-trigger__body">
                                ${event.date
                                  ? html`<span class="vvh-trigger__date">${event.date}</span>`
                                  : nothing}
                                <span class="vvh-trigger__title">${event.title}</span>
                                <span class="vvh-trigger__meta">
                                  ${event.category
                                    ? html`<span class="vvh-chip">${event.category}</span>`
                                    : nothing}
                                  ${event.km
                                    ? html`<span class="vvh-chip vvh-chip--accent"
                                        >${formatKm(event.km, unit)}</span
                                      >`
                                    : nothing}
                                </span>
                              </span>
                            </button>
                          </div>
                        `
                      )
                    : html`<p class="vvh-empty">${t('لا توجد سجلات في هذا التصنيف.', 'No records in this filter.')}</p>`}
                </div>
              </div>

              ${this.renderDetail(selected, list)}
            </div>

            ${this.renderProducts(selected)}
          </div>
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  VisualVehicleHistory as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
