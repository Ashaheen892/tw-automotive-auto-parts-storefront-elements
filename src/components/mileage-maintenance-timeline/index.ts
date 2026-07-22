import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  getRadioValue,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import type { MaintenanceMilestone, MilestoneStatus } from './types.js';
import {
  formatKm,
  label,
  milestoneStatus,
  nearestMilestoneId,
  parseMilestones,
  pinLabel,
  progressPercent,
  showOdometer,
} from './utils.js';

export default class MileageMaintenanceTimeline extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeId = '';
  @state() private currentKmInput = '';

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
      this.activeId = this.milestones[0]?.id ?? '';
      this.currentKmInput = '';
    }
  }

  private get milestones(): MaintenanceMilestone[] {
    return parseMilestones(this.config?.mmt_milestones);
  }

  private get currentKm(): number | null {
    if (!showOdometer(this.config || {})) return null;
    const raw = this.currentKmInput.replace(/[^\d.]/g, '');
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  private get active(): MaintenanceMilestone | null {
    return this.milestones.find((m) => m.id === this.activeId) ?? this.milestones[0] ?? null;
  }

  private statusOf(m: MaintenanceMilestone): MilestoneStatus {
    return milestoneStatus(m, this.currentKm);
  }

  private statusLabel(status: MilestoneStatus): string {
    if (status === 'done') return t('تمت', 'Done');
    if (status === 'due') return t('مستحقة', 'Due');
    if (status === 'upcoming') return t('قادمة', 'Upcoming');
    return '';
  }

  private select(id: string): void {
    this.activeId = id;
  }

  private onOdometerInput(value: string): void {
    this.currentKmInput = value;
    const km = Number(value.replace(/[^\d.]/g, ''));
    if (!Number.isFinite(km) || km < 0) return;
    const nearest = nearestMilestoneId(this.milestones, km);
    if (nearest) this.activeId = nearest;
  }

  private shiftActive(delta: number): void {
    const list = this.milestones;
    if (!list.length) return;
    const idx = Math.max(
      0,
      list.findIndex((m) => m.id === this.active?.id)
    );
    const next = (idx + delta + list.length) % list.length;
    this.activeId = list[next].id;
  }

  private renderPanel(milestone: MaintenanceMilestone | null, list: MaintenanceMilestone[]) {
    if (!milestone) return nothing;
    const status = this.statusOf(milestone);
    const idx = list.findIndex((m) => m.id === milestone.id);
    const unitLabel =
      localizedString((this.config || {}).mmt_unit_label as string) || t('كم', 'km');

    return html`
      <div class="mmt-panel" role="region" aria-live="polite">
        <div class="mmt-panel__head">
          <div>
            <p class="mmt-panel__kicker">
              ${formatKm(milestone.km, unitLabel)}
              ${idx >= 0 ? ` · ${idx + 1}/${list.length}` : ''}
            </p>
            <h3 class="mmt-panel__title">${milestone.title}</h3>
          </div>
          ${list.length > 1
            ? html`<div class="mmt-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${t('السابق', 'Previous')}
                  @click=${() => this.shiftActive(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${t('التالي', 'Next')}
                  @click=${() => this.shiftActive(1)}
                >
                  ›
                </button>
              </div>`
            : nothing}
        </div>

        ${status !== 'neutral'
          ? html`<span class=${classMap({ 'mmt-badge': true, [`is-${status}`]: true })}>
              ${this.statusLabel(status)}
            </span>`
          : nothing}

        ${milestone.services.length
          ? html`<ul class="mmt-services">
              ${milestone.services.map((s) => html`<li>${s}</li>`)}
            </ul>`
          : html`<p class="mmt-hint">${t('لا توجد خدمات محددة.', 'No services listed.')}</p>`}

        ${milestone.note ? html`<p class="mmt-note">${milestone.note}</p>` : nothing}

        ${milestone.link
          ? html`<a
              class="fs-btn fs-tap"
              href=${milestone.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              ${t('اطلب قطع هذه المرحلة', 'Order parts for this service')}
            </a>`
          : nothing}
      </div>
    `;
  }

  private renderProducts(active: MaintenanceMilestone | null) {
    return renderCommerceOutcome(this.config || {}, 'mmt_', {
      ready: Boolean(active),
    });
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'mmt_');
    const milestones = this.milestones;
    const title =
      localizedString(c.mmt_title as string) ||
      t('جدول الصيانة حسب المسافة', 'Mileage maintenance timeline');
    const desc =
      localizedString(c.mmt_desc as string) ||
      t(
        'أدخل عداد سيارتك الحالي ثم اختر المرحلة لمعرفة الخدمات والقطع المطلوبة.',
        'Enter your current mileage, then pick a milestone to see services and parts.'
      );
    const unitLabel = localizedString(c.mmt_unit_label as string) || t('كم', 'km');
    const layout = getRadioValue(c.mmt_layout, 'horizontal');
    const active = this.active;
    const progress = progressPercent(milestones, this.currentKm);
    const odometerOn = showOdometer(c);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="mmt-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t('خطة الصيانة', 'Service plan')}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div class="mmt-card">
              ${odometerOn
                ? html`<div class="mmt-odometer">
                    <label class="mmt-odometer__label" for="mmt-km">
                      ${label(c, 'mmt_odometer_label', 'عداد المسافة الحالي', 'Current mileage')}
                    </label>
                    <div class="mmt-odometer__row">
                      <input
                        id="mmt-km"
                        class="mmt-odometer__input"
                        type="text"
                        inputmode="numeric"
                        .value=${this.currentKmInput}
                        placeholder=${t('مثال: 24500', 'e.g. 24500')}
                        @input=${(e: Event) =>
                          this.onOdometerInput((e.target as HTMLInputElement).value)}
                      />
                      <span class="mmt-odometer__unit">${unitLabel}</span>
                    </div>
                    <p class="mmt-hint">
                      ${t(
                        'سنظلّل المراحل السابقة ونقترح الأقرب لعدادك.',
                        'Past services are marked and the nearest milestone is selected.'
                      )}
                    </p>
                  </div>`
                : nothing}

              ${odometerOn && this.currentKm != null
                ? html`<div class="mmt-legend" aria-hidden="true">
                    <span><i class="is-done"></i>${t('تمت', 'Done')}</span>
                    <span><i class="is-due"></i>${t('مستحقة', 'Due')}</span>
                    <span><i class="is-upcoming"></i>${t('قادمة', 'Upcoming')}</span>
                  </div>`
                : nothing}

              <div
                class=${classMap({
                  'mmt-layout': true,
                  'mmt-layout--vertical': layout === 'vertical',
                })}
              >
                <div class="mmt-track-wrap">
                  <div
                    class="mmt-progress"
                    style=${styleMap({ '--mmt-progress': `${progress}%` })}
                    aria-hidden="true"
                  >
                    <div class="mmt-progress__fill"></div>
                  </div>
                  <div class="mmt-track" role="tablist" aria-label=${title}>
                    ${milestones.map((m, i) => {
                      const isActive = active?.id === m.id;
                      const status = this.statusOf(m);
                      return html`
                        <div class="mmt-item" role="presentation">
                          <button
                            type="button"
                            class=${classMap({
                              'mmt-node': true,
                              'is-active': isActive,
                              'is-done': status === 'done',
                              'is-due': status === 'due',
                              'is-upcoming': status === 'upcoming',
                            })}
                            role="tab"
                            aria-selected=${isActive ? 'true' : 'false'}
                            @click=${() => this.select(m.id)}
                          >
                            <span class="mmt-node__pin">${pinLabel(m, i)}</span>
                            <span class="mmt-node__meta">
                              <span class="mmt-node__km">${formatKm(m.km, unitLabel)}</span>
                              ${m.title
                                ? html`<span class="mmt-node__title">${m.title}</span>`
                                : nothing}
                              ${status !== 'neutral'
                                ? html`<span class="mmt-node__status">${this.statusLabel(status)}</span>`
                                : nothing}
                            </span>
                          </button>
                        </div>
                      `;
                    })}
                  </div>
                </div>

                ${this.renderPanel(active, milestones)}
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
  MileageMaintenanceTimeline as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
