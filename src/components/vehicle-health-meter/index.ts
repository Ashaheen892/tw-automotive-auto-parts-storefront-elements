import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  prefersReducedMotion,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { componentStyles } from './styles.js';
import {
  circleDashOffset,
  parseMeters,
  resolveDisplay,
  statusColor,
  statusLabel,
} from './utils.js';
import type { HealthMeter, MeterStatus } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

const CIRCLE_RADIUS = 42;

export default class VehicleHealthMeter extends LitElement {

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

  private get meters(): HealthMeter[] {
    return parseMeters(this.config?.vhm_meters);
  }

  private renderLegend() {
    const statuses: MeterStatus[] = ['excellent', 'good', 'check', 'service'];
    return html`
      <div class="vhm-legend" aria-hidden="true">
        ${statuses.map(
          (s) => html`<span><i style=${styleMap({ background: statusColor(s) })}></i>${statusLabel(s)}</span>`
        )}
      </div>
    `;
  }

  private renderCircle(meter: HealthMeter, animate: boolean) {
    const color = statusColor(meter.status);
    const offset = animate ? circleDashOffset(meter.value, CIRCLE_RADIUS) : circleDashOffset(0, CIRCLE_RADIUS);
    const circumference = 2 * Math.PI * CIRCLE_RADIUS;

    return html`
      <div class="vhm-circle" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="presentation">
          <circle class="vhm-circle__track" cx="50" cy="50" r=${CIRCLE_RADIUS} />
          <circle
            class="vhm-circle__fill"
            cx="50"
            cy="50"
            r=${CIRCLE_RADIUS}
            stroke=${color}
            stroke-dasharray=${circumference}
            stroke-dashoffset=${offset}
          />
        </svg>
        <span class="vhm-circle__value">${meter.value}%</span>
      </div>
    `;
  }

  private renderBar(meter: HealthMeter) {
    const color = statusColor(meter.status);
    return html`
      <div class="vhm-bar-head">
        <p class="vhm-name">${meter.icon ? html`${meter.icon} ` : nothing}${meter.name}</p>
        <span class="vhm-status" style=${styleMap({ color })}>${statusLabel(meter.status)}</span>
      </div>
      <div class="vhm-bar-track" role="progressbar" aria-valuenow=${meter.value} aria-valuemin="0" aria-valuemax="100">
        <div class="vhm-bar-fill" style=${styleMap({ width: `${meter.value}%`, background: color })}></div>
      </div>
      ${meter.note ? html`<p class="vhm-note">${meter.note}</p>` : nothing}
      ${meter.link
        ? html`<a
            class="vhm-link"
            href=${meter.link}
            target="_blank"
            rel=${isExternalUrl(meter.link) ? 'noopener noreferrer' : nothing}
          >
            ${t('المزيد', 'Learn more')}
          </a>`
        : nothing}
    `;
  }

  private renderMeterCard(meter: HealthMeter, display: 'circles' | 'bars', animate: boolean) {
    const color = statusColor(meter.status);

    if (display === 'bars') {
      return html`<article class="vhm-meter vhm-meter--bar">${this.renderBar(meter)}</article>`;
    }

    return html`
      <article class="vhm-meter">
        ${this.renderCircle(meter, animate)}
        <p class="vhm-name">${meter.icon ? html`${meter.icon} ` : nothing}${meter.name}</p>
        <p class="vhm-status" style=${styleMap({ color })}>${statusLabel(meter.status)}</p>
        ${meter.note ? html`<p class="vhm-note">${meter.note}</p>` : nothing}
        ${meter.link
          ? html`<a
              class="vhm-link"
              href=${meter.link}
              target="_blank"
              rel=${isExternalUrl(meter.link) ? 'noopener noreferrer' : nothing}
            >
              ${t('المزيد', 'Learn more')}
            </a>`
          : nothing}
      </article>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'vhm_');
    const animate = !prefersReducedMotion();
    const meters = this.meters;
    const display = resolveDisplay(c.vhm_display);
    const title = localizedString(c.vhm_title as string);
    const desc = localizedString(c.vhm_desc as string);

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مؤشر صحة السيارة', 'Vehicle health meter')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          ${this.renderLegend()}

          <div class=${classMap({ 'vhm-grid': true, 'vhm-grid--bars': display === 'bars' })}>
            ${meters.map((meter) => this.renderMeterCard(meter, display, animate))}
          </div>
          ${renderCommerceOutcome(c, 'vhm_', { ready: meters.length > 0 })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(VehicleHealthMeter as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

