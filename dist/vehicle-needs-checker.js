var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, e as extractLink, t, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .vnc-shell {
    width: 100%;
  }

  .vnc-progress {
    margin-bottom: 1.25rem;
  }

  .vnc-step {
    padding: 1.35rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 30px rgba(30, 41, 59, 0.06);
  }

  .vnc-step__meta {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--accent-color, var(--fs-store-primary));
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .vnc-step__question {
    margin: 0 0 1rem;
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.45;
    color: var(--text-color, #111827);
  }

  .vnc-options {
    display: grid;
    gap: 0.55rem;
  }

  .vnc-option {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.65);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 600;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
  }

  .vnc-option:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .vnc-option.is-selected {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
  }

  .vnc-option__dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid var(--border-color, #d9e2ec);
    flex-shrink: 0;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .vnc-option.is-selected .vnc-option__dot {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--accent-color, var(--fs-store-primary));
    box-shadow: inset 0 0 0 2px var(--card-bg, #fff);
  }

  .vnc-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: space-between;
    margin-top: 1.15rem;
  }

  .vnc-result {
    text-align: center;
    padding: 1.5rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 12px 36px rgba(30, 41, 59, 0.08);
  }

  .vnc-result__icon {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.65rem;
  }

  .vnc-result__title {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vnc-result__desc {
    margin: 0 0 1rem;
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--muted-color, #64748b);
  }

  .vnc-result__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: center;
  }
`;
function splitLines(raw) {
  const text = localizedString(raw, "");
  return text ? text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean) : [];
}
__name(splitLines, "splitLines");
function parseOptions(raw) {
  return Array.isArray(raw) ? normalizeCollection(raw).map((row) => ({
    label: localizedString(row.option_label) || localizedString(row.label),
    resultId: String(row.result_id ?? row.resultId ?? "").trim()
  })).filter((opt) => opt.label && opt.resultId) : splitLines(raw).map((line) => {
    const [label, resultId] = line.split("|").map((part) => part.trim());
    return !label || !resultId ? null : { label, resultId };
  }).filter((opt) => !!opt);
}
__name(parseOptions, "parseOptions");
function parseQuestions(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const text = localizedString(row.text) || localizedString(row.question), options = parseOptions(row.options);
    return {
      id: String(row.id ?? "").trim() || `q-${i + 1}`,
      text,
      options
    };
  }).filter((q) => q.text && q.options.length);
  return parsed.length ? parsed : defaultQuestions();
}
__name(parseQuestions, "parseQuestions");
function parseResults(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title);
    return {
      id: String(row.code ?? row.id ?? "").trim() || `result-${i + 1}`,
      title,
      desc: localizedString(row.desc) || localizedString(row.description),
      link: extractLink(row.link),
      ctaLabel: localizedString(row.cta_label),
      icon: String(row.icon ?? "").trim()
    };
  }).filter((r) => r.title);
  return parsed.length ? parsed : defaultResults();
}
__name(parseResults, "parseResults");
function defaultQuestions() {
  return [
    {
      id: "vehicle-type",
      text: t("ما نوع سيارتك؟", "What type of vehicle do you drive?"),
      options: [
        { label: t("سيدان", "Sedan"), resultId: "general" },
        { label: t("SUV", "SUV"), resultId: "general" },
        { label: t("بيك أب", "Pickup"), resultId: "general" },
        { label: t("شاحنة", "Truck"), resultId: "general" }
      ]
    },
    {
      id: "issue",
      text: t("ما المشكلة الرئيسية؟", "What is the main issue?"),
      options: [
        { label: t("فرامل", "Brakes"), resultId: "brakes" },
        { label: t("بطارية", "Battery"), resultId: "battery" },
        { label: t("إطارات", "Tires"), resultId: "tires" },
        { label: t("محرك", "Engine"), resultId: "engine" },
        { label: t("تكييف", "AC"), resultId: "ac" }
      ]
    },
    {
      id: "when",
      text: t("متى تظهر المشكلة؟", "When does the issue appear?"),
      options: [
        { label: t("دائمًا", "Always"), resultId: "urgent" },
        { label: t("عند التشغيل", "On startup"), resultId: "battery" },
        { label: t("أثناء القيادة", "While driving"), resultId: "engine" },
        { label: t("عند الفرملة", "When braking"), resultId: "brakes" }
      ]
    },
    {
      id: "warning",
      text: t("هل توجد لمبة تحذير؟", "Is a warning light on?"),
      options: [
        { label: t("نعم", "Yes"), resultId: "urgent" },
        { label: t("لا", "No"), resultId: "general" }
      ]
    },
    {
      id: "mileage",
      text: t("كم عدد الكيلومترات؟", "What is your mileage?"),
      options: [
        { label: t("أقل من 40 ألف", "Under 40k"), resultId: "general" },
        { label: t("40–80 ألف", "40–80k"), resultId: "maintenance" },
        { label: t("أكثر من 80 ألف", "Over 80k"), resultId: "maintenance" }
      ]
    }
  ];
}
__name(defaultQuestions, "defaultQuestions");
function defaultResults() {
  return [
    {
      id: "brakes",
      title: t("فحص الفرامل مطلوب", "Brake inspection needed"),
      desc: t("قد تحتاج لفحص فحمات وأسطوانات الفرامل واستبدال سائل الفرامل.", "You may need pad/rotor inspection and brake fluid check."),
      link: "",
      ctaLabel: t("تصفّح قطع الفرامل", "Browse brake parts"),
      icon: "🛑"
    },
    {
      id: "battery",
      title: t("فحص البطارية والشحن", "Battery & charging check"),
      desc: t("البطارية أو الدينامو قد يحتاجان فحصًا — خصوصًا عند التشغيل البارد.", "Battery or alternator may need testing, especially on cold starts."),
      link: "",
      ctaLabel: t("تصفّح البطاريات", "Browse batteries"),
      icon: "🔋"
    },
    {
      id: "tires",
      title: t("صيانة الإطارات", "Tire maintenance"),
      desc: t("افحص التآكل والضغط ودوران الإطارات.", "Check wear, pressure, and rotation."),
      link: "",
      ctaLabel: t("تصفّح الإطارات", "Browse tires"),
      icon: "🛞"
    },
    {
      id: "engine",
      title: t("فحص المحرك", "Engine diagnosis"),
      desc: t("أصوات أو اهتزاز أثناء القيادة قد تتطلب فحصًا تشخيصيًا.", "Noises or vibration while driving may need diagnostic inspection."),
      link: "",
      ctaLabel: t("تصفّح قطع المحرك", "Browse engine parts"),
      icon: "⚙"
    },
    {
      id: "ac",
      title: t("صيانة التكييف", "AC service"),
      desc: t("ضعف التبريد قد يعني فحص غاز التكييف أو الفلاتر.", "Weak cooling may need refrigerant or filter service."),
      link: "",
      ctaLabel: t("تصفّح قطع التكييف", "Browse AC parts"),
      icon: "❄"
    },
    {
      id: "maintenance",
      title: t("صيانة دورية", "Routine maintenance"),
      desc: t("حان وقت زيت المحرك والفلاتر وفحص شامل حسب الكيلومترات.", "Time for oil, filters, and a mileage-based inspection."),
      link: "",
      ctaLabel: t("اطلب قطع الصيانة", "Order maintenance parts"),
      icon: "🔧"
    },
    {
      id: "urgent",
      title: t("فحص عاجل موصى به", "Urgent inspection recommended"),
      desc: t("لمبة تحذير أو عطل مستمر — توقف عن القيادة إن لزم وافحص فورًا.", "Warning light or persistent fault — stop driving if needed and inspect soon."),
      link: "",
      ctaLabel: t("احجز فحصًا", "Book inspection"),
      icon: "⚠"
    },
    {
      id: "general",
      title: t("فحص عام", "General check-up"),
      desc: t("لا توجد مؤشرات حرجة — جدولة فحص دوري للاطمئنان.", "No critical signs — schedule a routine check for peace of mind."),
      link: "",
      ctaLabel: t("تصفّح قطع الغيار", "Browse parts"),
      icon: "✅"
    }
  ];
}
__name(defaultResults, "defaultResults");
function scoreResults(answers, questions) {
  const scores = /* @__PURE__ */ new Map();
  for (const question of questions) {
    const selectedLabel = answers[question.id];
    if (!selectedLabel) continue;
    const option = question.options.find((opt) => opt.label === selectedLabel);
    option && scores.set(option.resultId, (scores.get(option.resultId) ?? 0) + 1);
  }
  return scores;
}
__name(scoreResults, "scoreResults");
function topResult(scores, results) {
  if (!results.length) return null;
  if (!scores.size) return results[0] ?? null;
  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  for (const [id] of ranked) {
    const match = results.find((r) => r.id === id);
    if (match) return match;
  }
  return results[0] ?? null;
}
__name(topResult, "topResult");
function computeTopResult(answers, questions, results) {
  return topResult(scoreResults(answers, questions), results);
}
__name(computeTopResult, "computeTopResult");
function progressPercent(stepIndex, total) {
  return total <= 0 ? 0 : total === 1 ? 100 : Math.round(stepIndex / (total - 1) * 100);
}
__name(progressPercent, "progressPercent");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _VehicleNeedsChecker = class _VehicleNeedsChecker extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.stepIndex = 0, this.answers = {}, this.finished = !1, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    changed.has("config") && this.resetQuiz();
  }
  get questions() {
    var _a;
    return parseQuestions((_a = this.config) == null ? void 0 : _a.vnc_questions);
  }
  get results() {
    var _a;
    return parseResults((_a = this.config) == null ? void 0 : _a.vnc_results);
  }
  get currentQuestion() {
    return this.questions[this.stepIndex] ?? null;
  }
  get topResult() {
    return computeTopResult(this.answers, this.questions, this.results);
  }
  resetQuiz() {
    this.stepIndex = 0, this.answers = {}, this.finished = !1;
  }
  selectOption(questionId, label) {
    this.answers = { ...this.answers, [questionId]: label };
  }
  goNext() {
    const question = this.currentQuestion;
    if (!(!question || !this.answers[question.id])) {
      if (this.stepIndex >= this.questions.length - 1) {
        this.finished = !0;
        return;
      }
      this.stepIndex += 1;
    }
  }
  goBack() {
    if (this.finished) {
      this.finished = !1, this.stepIndex = Math.max(0, this.questions.length - 1);
      return;
    }
    this.stepIndex = Math.max(0, this.stepIndex - 1);
  }
  renderQuestion(question) {
    const selected = this.answers[question.id] ?? "";
    return html`
      <div class="vnc-step">
        <p class="vnc-step__meta">${t("السؤال", "Question")} ${this.stepIndex + 1} / ${this.questions.length}</p>
        <h3 class="vnc-step__question">${question.text}</h3>
        <div class="vnc-options" role="radiogroup" aria-label=${question.text}>
          ${question.options.map(
      (opt) => html`
              <button
                type="button"
                class=${classMap({ "vnc-option": !0, "is-selected": selected === opt.label })}
                role="radio"
                aria-checked=${selected === opt.label ? "true" : "false"}
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
  renderResult(result) {
    var _a, _b, _c;
    const c = this.config || {}, resultTitle = localizedString((_a = this.config) == null ? void 0 : _a.vnc_result_title) || t("نتيجة التقييم", "Your result") + (result.title ? `: ${result.title}` : ""), resetLabel = localizedString((_b = this.config) == null ? void 0 : _b.vnc_reset) || t("إعادة الاختبار", "Retake quiz"), ctaLabel = result.ctaLabel || localizedString((_c = this.config) == null ? void 0 : _c.vnc_cta) || t("اعرف ما تحتاجه سيارتي", "Find what my car needs");
    return html`
      <div class="vnc-result" aria-live="polite">
        ${result.icon ? html`<div class="vnc-result__icon" aria-hidden="true">${result.icon}</div>` : nothing}
        <h3 class="vnc-result__title">${resultTitle}</h3>
        ${result.desc ? html`<p class="vnc-result__desc">${result.desc}</p>` : nothing}
        <div class="vnc-result__actions">
          ${result.link ? html`<a
                class="fs-btn fs-tap"
                href=${result.link}
                target="_blank"
                rel=${isExternalUrl(result.link) ? "noopener noreferrer" : nothing}
              >
                ${ctaLabel}
              </a>` : html`<span class="fs-btn fs-tap" style="pointer-events:none;opacity:0.85">${ctaLabel}</span>`}
          <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => this.resetQuiz()}>
            ${resetLabel}
          </button>
        </div>
        ${renderCommerceOutcome(c, "vnc_", { ready: !!result })}
      </div>
    `;
  }
  render() {
    var _a, _b, _c;
    const c = this.config || {}, theme = readSectionTheme(c, "vnc_"), questions = this.questions, title = localizedString(c.vnc_title), desc = localizedString(c.vnc_desc), nextLabel = localizedString((_a = this.config) == null ? void 0 : _a.vnc_next) || t("التالي", "Next"), backLabel = localizedString((_b = this.config) == null ? void 0 : _b.vnc_back) || t("السابق", "Back"), question = this.currentQuestion, pct = this.finished ? 100 : progressPercent(this.stepIndex, questions.length), canNext = question ? !!this.answers[question.id] : !1;
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مقياس احتياجات سيارتك", "Vehicle needs checker")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="vnc-shell">
            <div class="vnc-progress">
              <div class="fs-progress__bar" aria-hidden="true">
                <span style=${styleMap({ width: `${pct}%` })}></span>
              </div>
              <p class="vnc-step__meta" style="margin-top:0.45rem;text-align:center;">
                ${this.finished ? t("النتيجة", "Result") + ` · ${pct}%` : t("التقدم", "Progress") + `: ${pct}%`}
              </p>
            </div>

            ${this.finished && this.topResult ? this.renderResult(this.topResult) : question ? this.renderQuestion(question) : nothing}

            ${this.finished ? nothing : html`<div class="vnc-nav">
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
                    ${this.stepIndex >= questions.length - 1 ? localizedString((_c = this.config) == null ? void 0 : _c.vnc_cta) || t("اعرف ما تحتاجه سيارتي", "Find what my car needs") : nextLabel}
                  </button>
                </div>`}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_VehicleNeedsChecker, "VehicleNeedsChecker"), _VehicleNeedsChecker.styles = [sharedSectionCss, componentStyles];
let VehicleNeedsChecker = _VehicleNeedsChecker;
__decorateClass([
  property({ type: Object })
], VehicleNeedsChecker.prototype, "config");
__decorateClass([
  state()
], VehicleNeedsChecker.prototype, "stepIndex");
__decorateClass([
  state()
], VehicleNeedsChecker.prototype, "answers");
__decorateClass([
  state()
], VehicleNeedsChecker.prototype, "finished");
bindSallaRegistration(VehicleNeedsChecker);
typeof VehicleNeedsChecker < "u" && VehicleNeedsChecker.registerSallaComponent("salla-vehicle-needs-checker");
export {
  VehicleNeedsChecker as default
};
