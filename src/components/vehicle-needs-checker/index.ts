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
  computeTopResult,
  parseQuestions,
  parseResults,
  progressPercent,
} from './utils.js';
import type { QuizQuestion, QuizResult } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class VehicleNeedsChecker extends LitElement {

  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private stepIndex = 0;
  @state() private answers: Record<string, string> = {};
  @state() private finished = false;

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
      this.resetQuiz();
    }
  }

  private get questions(): QuizQuestion[] {
    return parseQuestions(this.config?.vnc_questions);
  }

  private get results(): QuizResult[] {
    return parseResults(this.config?.vnc_results);
  }

  private get currentQuestion(): QuizQuestion | null {
    return this.questions[this.stepIndex] ?? null;
  }

  private get topResult(): QuizResult | null {
    return computeTopResult(this.answers, this.questions, this.results);
  }


  private resetQuiz(): void {
    this.stepIndex = 0;
    this.answers = {};
    this.finished = false;
  }

  private selectOption(questionId: string, label: string): void {
    this.answers = { ...this.answers, [questionId]: label };
  }

  private goNext(): void {
    const question = this.currentQuestion;
    if (!question || !this.answers[question.id]) return;

    if (this.stepIndex >= this.questions.length - 1) {
      this.finished = true;
      return;
    }
    this.stepIndex += 1;
  }

  private goBack(): void {
    if (this.finished) {
      this.finished = false;
      this.stepIndex = Math.max(0, this.questions.length - 1);
      return;
    }
    this.stepIndex = Math.max(0, this.stepIndex - 1);
  }

  private renderQuestion(question: QuizQuestion) {
    const selected = this.answers[question.id] ?? '';

    return html`
      <div class="vnc-step">
        <p class="vnc-step__meta">${t('السؤال', 'Question')} ${this.stepIndex + 1} / ${this.questions.length}</p>
        <h3 class="vnc-step__question">${question.text}</h3>
        <div class="vnc-options" role="radiogroup" aria-label=${question.text}>
          ${question.options.map(
            (opt) => html`
              <button
                type="button"
                class=${classMap({ 'vnc-option': true, 'is-selected': selected === opt.label })}
                role="radio"
                aria-checked=${selected === opt.label ? 'true' : 'false'}
                @click=${() => this.selectOption(question.id, opt.label)}
              >
                <span class="vnc-option__dot" aria-hidden="true"></span>
                <span>${opt.label}</span>
              </button>
            `
          )}
        </div>
      </div>
    `;
  }

  private renderResult(result: QuizResult) {
    const c = this.config || {};
    const resultTitle =
      localizedString(this.config?.vnc_result_title as string) || t('نتيجة التقييم', 'Your result') +
      (result.title ? `: ${result.title}` : '');
    const resetLabel = localizedString(this.config?.vnc_reset as string) || t('إعادة الاختبار', 'Retake quiz');
    const ctaLabel =
      result.ctaLabel ||
      localizedString(this.config?.vnc_cta as string) || t('اعرف ما تحتاجه سيارتي', 'Find what my car needs');

    return html`
      <div class="vnc-result" aria-live="polite">
        ${result.icon ? html`<div class="vnc-result__icon" aria-hidden="true">${result.icon}</div>` : nothing}
        <h3 class="vnc-result__title">${resultTitle}</h3>
        ${result.desc ? html`<p class="vnc-result__desc">${result.desc}</p>` : nothing}
        <div class="vnc-result__actions">
          ${result.link
            ? html`<a
                class="fs-btn fs-tap"
                href=${result.link}
                target="_blank"
                rel=${isExternalUrl(result.link) ? 'noopener noreferrer' : nothing}
              >
                ${ctaLabel}
              </a>`
            : html`<span class="fs-btn fs-tap" style="pointer-events:none;opacity:0.85">${ctaLabel}</span>`}
          <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => this.resetQuiz()}>
            ${resetLabel}
          </button>
        </div>
        ${renderCommerceOutcome(c, 'vnc_', { ready: Boolean(result) })}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'vnc_');
    const questions = this.questions;
    const title = localizedString(c.vnc_title as string);
    const desc = localizedString(c.vnc_desc as string);
    const nextLabel = localizedString(this.config?.vnc_next as string) || t('التالي', 'Next');
    const backLabel = localizedString(this.config?.vnc_back as string) || t('السابق', 'Back');
    const question = this.currentQuestion;
    const pct = this.finished
      ? 100
      : progressPercent(this.stepIndex, questions.length);
    const canNext = question ? Boolean(this.answers[question.id]) : false;

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مقياس احتياجات سيارتك', 'Vehicle needs checker')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          <div class="vnc-shell">
            <div class="vnc-progress">
              <div class="fs-progress__bar" aria-hidden="true">
                <span style=${styleMap({ width: `${pct}%` })}></span>
              </div>
              <p class="vnc-step__meta" style="margin-top:0.45rem;text-align:center;">
                ${this.finished
                  ? t('النتيجة', 'Result') + ` · ${pct}%`
                  : t('التقدم', 'Progress') + `: ${pct}%`}
              </p>
            </div>

            ${this.finished && this.topResult
              ? this.renderResult(this.topResult)
              : question
                ? this.renderQuestion(question)
                : nothing}

            ${!this.finished
              ? html`<div class="vnc-nav">
                  <button
                    type="button"
                    class="fs-btn fs-btn--ghost fs-tap"
                    ?disabled=${this.stepIndex === 0}
                    @click=${() => this.goBack()}
                  >
                    ${backLabel}
                  </button>
                  <button
                    type="button"
                    class="fs-btn fs-tap"
                    ?disabled=${!canNext}
                    @click=${() => this.goNext()}
                  >
                    ${this.stepIndex >= questions.length - 1
                      ? localizedString(this.config?.vnc_cta as string) || t('اعرف ما تحتاجه سيارتي', 'Find what my car needs')
                      : nextLabel}
                  </button>
                </div>`
              : nothing}
          </div>
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(VehicleNeedsChecker as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });

