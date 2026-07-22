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
import {
  isAudioUrl,
  isYoutubeUrl,
  parseCases,
  severityLabel,
  youtubeEmbedUrl,
} from './utils.js';
import type { SoundCase } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class CarSoundDiagnosticGuide extends LitElement {

  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private selectedId = '';

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
      const cases = parseCases(this.config?.csdg_cases);
      if (!cases.some((item) => item.id === this.selectedId)) {
        this.selectedId = cases[0]?.id ?? '';
      }
    }
  }

  private get cases(): SoundCase[] {
    return parseCases(this.config?.csdg_cases);
  }

  private get selected(): SoundCase | null {
    return this.cases.find((item) => item.id === this.selectedId) ?? this.cases[0] ?? null;
  }


  private renderMedia(item: SoundCase) {
    const blocks = [];

    if (item.audioUrl && isAudioUrl(item.audioUrl)) {
      blocks.push(html`
        <audio controls preload="none" src=${item.audioUrl} aria-label=${t('عينة صوت', 'Sound sample')}>
          ${t('متصفحك لا يدعم تشغيل الصوت', 'Your browser does not support audio playback')}
        </audio>
      `);
    } else if (item.audioUrl) {
      blocks.push(html`
        <a
          class="csdg-media__link"
          href=${item.audioUrl}
          target="_blank"
          rel=${isExternalUrl(item.audioUrl) ? 'noopener noreferrer' : nothing}
        >
          ${t('استمع للعينة', 'Listen to sample')}
        </a>
      `);
    }

    if (item.videoUrl) {
      if (isYoutubeUrl(item.videoUrl)) {
        const embed = youtubeEmbedUrl(item.videoUrl);
        if (embed) {
          blocks.push(html`
            <iframe
              src=${embed}
              title=${item.name}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          `);
        }
      } else {
        blocks.push(html`
          <a
            class="csdg-media__link"
            href=${item.videoUrl}
            target="_blank"
            rel=${isExternalUrl(item.videoUrl) ? 'noopener noreferrer' : nothing}
          >
            ${t('شاهد الفيديو', 'Watch video')}
          </a>
        `);
      }
    }

    if (!blocks.length) return nothing;
    return html`<div class="csdg-block">
      <p class="csdg-block__label">${t('عينات صوت وفيديو', 'Sound & video samples')}</p>
      <div class="csdg-media">${blocks}</div>
    </div>`;
  }

  private selectCase(id: string): void {
    if (this.selectedId === id) return;
    this.selectedId = id;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 959px)').matches) {
      this.updateComplete.then(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.renderRoot
          .querySelector('.csdg-panel')
          ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
      });
    }
  }

  private onPickerKeydown(e: KeyboardEvent): void {
    const cases = this.cases;
    if (cases.length < 2) return;
    const delta =
      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 :
      e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const current = cases.findIndex((item) => item.id === this.selected?.id);
    const next = (current + delta + cases.length) % cases.length;
    this.selectedId = cases[next].id;
    this.updateComplete.then(() => {
      const btn = this.renderRoot.querySelector<HTMLButtonElement>('.csdg-case.is-selected');
      btn?.focus();
    });
  }

  private renderPanel(item: SoundCase) {
    const causesLabel = localizedString(this.config?.csdg_causes_label as string) || t('الأسباب المحتملة', 'Possible causes');
    const adviceLabel = localizedString(this.config?.csdg_advice_label as string) || t('نصيحة الفني', 'Mechanic advice');

    return html`
      <div class="csdg-panel" aria-live="polite">
        <div class="csdg-panel__head">
          <div class="csdg-panel__heading">
            <p class="csdg-panel__kicker">${t('التشخيص', 'Diagnosis')}</p>
            <h3 class="csdg-panel__title">${item.name}</h3>
          </div>
          <span class=${classMap({ 'csdg-severity': true, [`csdg-severity--${item.severity}`]: true })}>
            <span class="csdg-severity__dot" aria-hidden="true"></span>
            ${t('الخطورة:', 'Severity:')} ${severityLabel(item.severity)}
          </span>
        </div>

        ${item.description ? html`<p class="csdg-panel__desc">${item.description}</p>` : nothing}

        ${item.causes.length
          ? html`<div class="csdg-block">
              <p class="csdg-block__label">${causesLabel}</p>
              <ul class="csdg-causes">
                ${item.causes.map(
                  (cause, i) => html`<li>
                    <span class="csdg-causes__num" aria-hidden="true">${i + 1}</span>
                    <span>${cause}</span>
                  </li>`
                )}
              </ul>
            </div>`
          : nothing}

        ${item.advice
          ? html`<div class="csdg-alert" role="note">
              <span class="csdg-alert__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </span>
              <span class="csdg-alert__body">
                <strong>${adviceLabel}</strong>
                <span>${item.advice}</span>
              </span>
            </div>`
          : nothing}

        ${this.renderMedia(item)}

        ${item.link
          ? html`<div class="csdg-actions">
              <a
                class="fs-btn fs-tap"
                href=${item.link}
                target="_blank"
                rel=${isExternalUrl(item.link) ? 'noopener noreferrer' : nothing}
              >
                ${t('احجز فحصًا', 'Book inspection')}
              </a>
            </div>`
          : nothing}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'csdg_');
    const cases = this.cases;
    const selected = this.selected;
    const title = localizedString(c.csdg_title as string);
    const desc = localizedString(c.csdg_desc as string);

    if (!cases.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف حالات الأصوات من إعدادات العنصر', 'Add sound cases in element settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('دليل تشخيص أصوات السيارة', 'Car sound diagnostic guide')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                <p class="fs-eyebrow">${t('شخّص قبل الشراء', 'Diagnose before you buy')}</p>
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="csdg-layout">
            <div class="csdg-picker-card">
              <div class="csdg-picker__head">
                <p class="csdg-picker__title">${t('ما الصوت الذي تسمعه؟', 'What sound do you hear?')}</p>
                <span class="csdg-picker__count">${cases.length}</span>
              </div>
              <div
                class="csdg-picker"
                role="listbox"
                aria-label=${t('اختر العرض', 'Choose symptom')}
                @keydown=${(e: KeyboardEvent) => this.onPickerKeydown(e)}
              >
                ${cases.map(
                  (item) => html`
                    <button
                      type="button"
                      class=${classMap({ 'csdg-case': true, 'is-selected': item.id === selected?.id })}
                      role="option"
                      aria-selected=${item.id === selected?.id ? 'true' : 'false'}
                      tabindex=${item.id === selected?.id ? '0' : '-1'}
                      @click=${() => this.selectCase(item.id)}
                    >
                      ${item.icon
                        ? html`<span class="csdg-case__icon ${item.icon.startsWith('sicon-') ? item.icon : ''}" aria-hidden="true">
                            ${item.icon.startsWith('sicon-') ? '' : item.icon}
                          </span>`
                        : nothing}
                      <span class="csdg-case__body">
                        <span class="csdg-case__name">${item.name}</span>
                        ${item.description ? html`<span class="csdg-case__desc">${item.description}</span>` : nothing}
                      </span>
                      <span class=${classMap({ 'csdg-case__dot': true, [`csdg-case__dot--${item.severity}`]: true })} aria-hidden="true"></span>
                    </button>
                  `
                )}
              </div>
            </div>

            ${selected ? this.renderPanel(selected) : nothing}
          </div>
          ${renderCommerceOutcome(c, 'csdg_', { ready: Boolean(selected) })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(CarSoundDiagnosticGuide as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

