import { css as I, LitElement as w, html as c, nothing as p } from "lit";
import { property as L, state as b } from "lit/decorators.js";
import { classMap as B } from "lit/directives/class-map.js";
import { styleMap as _ } from "lit/directives/style-map.js";
import { n as v, l as o, e as R, t, s as S, i as q, r as z, a as C, b as Q } from "./registerSalla-Dct4KN_E.js";
import { r as O } from "./commerceOutcome-B3T0_-WJ.js";
const W = I`
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
function M(r) {
  const e = o(r, "");
  return e ? e.split(/\r?\n/).map((n) => n.trim()).filter(Boolean) : [];
}
function T(r) {
  return Array.isArray(r) ? v(r).map((n) => ({
    label: o(n.option_label) || o(n.label),
    resultId: String(n.result_id ?? n.resultId ?? "").trim()
  })).filter((n) => n.label && n.resultId) : M(r).map((n) => {
    const [i, s] = n.split("|").map((a) => a.trim());
    return !i || !s ? null : { label: i, resultId: s };
  }).filter((n) => !!n);
}
function U(r) {
  const e = v(r).map((n, i) => {
    const s = o(n.text) || o(n.question), a = T(n.options);
    return {
      id: String(n.id ?? "").trim() || `q-${i + 1}`,
      text: s,
      options: a
    };
  }).filter((n) => n.text && n.options.length);
  return e.length ? e : E();
}
function A(r) {
  const e = v(r).map((n, i) => {
    const s = o(n.title);
    return {
      id: String(n.code ?? n.id ?? "").trim() || `result-${i + 1}`,
      title: s,
      desc: o(n.desc) || o(n.description),
      link: R(n.link),
      ctaLabel: o(n.cta_label),
      icon: String(n.icon ?? "").trim()
    };
  }).filter((n) => n.title);
  return e.length ? e : N();
}
function E() {
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
function N() {
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
function P(r, e) {
  const n = /* @__PURE__ */ new Map();
  for (const i of e) {
    const s = r[i.id];
    if (!s) continue;
    const a = i.options.find((l) => l.label === s);
    a && n.set(a.resultId, (n.get(a.resultId) ?? 0) + 1);
  }
  return n;
}
function j(r, e) {
  if (!e.length) return null;
  if (!r.size) return e[0] ?? null;
  const n = [...r.entries()].sort((i, s) => s[1] - i[1]);
  for (const [i] of n) {
    const s = e.find((a) => a.id === i);
    if (s) return s;
  }
  return e[0] ?? null;
}
function H(r, e, n) {
  return j(P(r, e), n);
}
function Y(r, e) {
  return e <= 0 ? 0 : e === 1 ? 100 : Math.round(r / (e - 1) * 100);
}
var F = Object.defineProperty, f = (r, e, n, i) => {
  for (var s = void 0, a = r.length - 1, l; a >= 0; a--)
    (l = r[a]) && (s = l(e, n, s) || s);
  return s && F(e, n, s), s;
};
const m = class m extends w {
  constructor() {
    super(...arguments), this.config = {}, this.stepIndex = 0, this.answers = {}, this.finished = !1, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    e.has("config") && this.resetQuiz();
  }
  get questions() {
    var e;
    return U((e = this.config) == null ? void 0 : e.vnc_questions);
  }
  get results() {
    var e;
    return A((e = this.config) == null ? void 0 : e.vnc_results);
  }
  get currentQuestion() {
    return this.questions[this.stepIndex] ?? null;
  }
  get topResult() {
    return H(this.answers, this.questions, this.results);
  }
  resetQuiz() {
    this.stepIndex = 0, this.answers = {}, this.finished = !1;
  }
  selectOption(e, n) {
    this.answers = { ...this.answers, [e]: n };
  }
  goNext() {
    const e = this.currentQuestion;
    if (!(!e || !this.answers[e.id])) {
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
  renderQuestion(e) {
    const n = this.answers[e.id] ?? "";
    return c`
      <div class="vnc-step">
        <p class="vnc-step__meta">${t("السؤال", "Question")} ${this.stepIndex + 1} / ${this.questions.length}</p>
        <h3 class="vnc-step__question">${e.text}</h3>
        <div class="vnc-options" role="radiogroup" aria-label=${e.text}>
          ${e.options.map(
      (i) => c`
              <button
                type="button"
                class=${B({ "vnc-option": !0, "is-selected": n === i.label })}
                role="radio"
                aria-checked=${n === i.label ? "true" : "false"}
                @click=${() => this.selectOption(e.id, i.label)}
              >
                <span class="vnc-option__dot" aria-hidden="true"></span>
                <span>${i.label}</span>
              </button>
            `
    )}
        </div>
      </div>
    `;
  }
  renderResult(e) {
    var l, h, u;
    const n = this.config || {}, i = o((l = this.config) == null ? void 0 : l.vnc_result_title) || t("نتيجة التقييم", "Your result") + (e.title ? `: ${e.title}` : ""), s = o((h = this.config) == null ? void 0 : h.vnc_reset) || t("إعادة الاختبار", "Retake quiz"), a = e.ctaLabel || o((u = this.config) == null ? void 0 : u.vnc_cta) || t("اعرف ما تحتاجه سيارتي", "Find what my car needs");
    return c`
      <div class="vnc-result" aria-live="polite">
        ${e.icon ? c`<div class="vnc-result__icon" aria-hidden="true">${e.icon}</div>` : p}
        <h3 class="vnc-result__title">${i}</h3>
        ${e.desc ? c`<p class="vnc-result__desc">${e.desc}</p>` : p}
        <div class="vnc-result__actions">
          ${e.link ? c`<a
                class="fs-btn fs-tap"
                href=${e.link}
                target="_blank"
                rel=${q(e.link) ? "noopener noreferrer" : p}
              >
                ${a}
              </a>` : c`<span class="fs-btn fs-tap" style="pointer-events:none;opacity:0.85">${a}</span>`}
          <button type="button" class="fs-btn fs-btn--ghost fs-tap" @click=${() => this.resetQuiz()}>
            ${s}
          </button>
        </div>
        ${O(n, "vnc_", { ready: !!e })}
      </div>
    `;
  }
  render() {
    var x, k, y;
    const e = this.config || {}, n = z(e, "vnc_"), i = this.questions, s = o(e.vnc_title), a = o(e.vnc_desc), l = o((x = this.config) == null ? void 0 : x.vnc_next) || t("التالي", "Next"), h = o((k = this.config) == null ? void 0 : k.vnc_back) || t("السابق", "Back"), u = this.currentQuestion, g = this.finished ? 100 : Y(this.stepIndex, i.length), $ = u ? !!this.answers[u.id] : !1;
    return c`
      <section
        class="fs-section"
        style=${_(C(n))}
        aria-label=${s || t("مقياس احتياجات سيارتك", "Vehicle needs checker")}
      >
        <div class="fs-container">
          ${s || a ? c`<div class="fs-hero">
                ${s ? c`<h2 class="fs-title">${s}</h2>` : p}
                ${a ? c`<p class="fs-desc">${a}</p>` : p}
              </div>` : p}

          <div class="vnc-shell">
            <div class="vnc-progress">
              <div class="fs-progress__bar" aria-hidden="true">
                <span style=${_({ width: `${g}%` })}></span>
              </div>
              <p class="vnc-step__meta" style="margin-top:0.45rem;text-align:center;">
                ${this.finished ? t("النتيجة", "Result") + ` · ${g}%` : t("التقدم", "Progress") + `: ${g}%`}
              </p>
            </div>

            ${this.finished && this.topResult ? this.renderResult(this.topResult) : u ? this.renderQuestion(u) : p}

            ${this.finished ? p : c`<div class="vnc-nav">
                  <button
                    type="button"
                    class="fs-btn fs-btn--ghost fs-tap"
                    ?disabled=${this.stepIndex === 0}
                    @click=${() => this.goBack()}
                  >
                    ${h}
                  </button>
                  <button
                    type="button"
                    class="fs-btn fs-tap"
                    ?disabled=${!$}
                    @click=${() => this.goNext()}
                  >
                    ${this.stepIndex >= i.length - 1 ? o((y = this.config) == null ? void 0 : y.vnc_cta) || t("اعرف ما تحتاجه سيارتي", "Find what my car needs") : l}
                  </button>
                </div>`}
          </div>
        </div>
      </section>
    `;
  }
};
m.styles = [S, W];
let d = m;
f([
  L({ type: Object })
], d.prototype, "config");
f([
  b()
], d.prototype, "stepIndex");
f([
  b()
], d.prototype, "answers");
f([
  b()
], d.prototype, "finished");
Q(d);
typeof d < "u" && d.registerSallaComponent("salla-vehicle-needs-checker");
export {
  d as default
};
