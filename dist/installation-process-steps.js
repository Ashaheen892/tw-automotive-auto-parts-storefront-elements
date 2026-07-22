var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, f as toNumber, e as extractLink, c as extractImageUrl, h as sortByOrder, t, s as sharedSectionCss, d as isTruthy, p as prefersReducedMotion, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .ips-shell {
    display: grid;
    gap: 1.15rem;
  }

  .ips-progress {
    display: grid;
    gap: 0.45rem;
  }

  .ips-track {
    display: flex;
    gap: 0.65rem;
    overflow-x: auto;
    padding-bottom: 0.35rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .ips-step-btn {
    flex: 0 0 auto;
    min-width: 140px;
    max-width: 200px;
    display: grid;
    gap: 0.35rem;
    padding: 0.75rem 0.85rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 14px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    scroll-snap-align: start;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  .ips-step-btn.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .ips-step-btn__num {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    letter-spacing: 0.04em;
  }

  .ips-step-btn.is-active .ips-step-btn__num {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .ips-step-btn__title {
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .ips-step-btn__dur {
    font-size: 0.75rem;
    color: var(--muted-color, #64748b);
  }

  /* Visual layout: image LEFT · text RIGHT (forced LTR columns) */
  .ips-detail {
    display: grid;
    gap: 0;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(30, 41, 59, 0.08);
    overflow: hidden;
    direction: ltr;
  }

  .ips-detail--split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }

  .ips-detail--text-only {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  .ips-detail__media {
    position: relative;
    min-height: 240px;
    background:
      linear-gradient(
        145deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, #1e293b),
        #0f172a 70%
      );
  }

  .ips-detail__media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 240px;
    max-height: 360px;
    object-fit: cover;
  }

  .ips-detail__placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    gap: 0.55rem;
    justify-items: center;
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.88rem;
    font-weight: 700;
  }

  .ips-detail__placeholder-num {
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.35);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .ips-detail__copy {
    display: grid;
    align-content: center;
    gap: 0.65rem;
    padding: 1.35rem 1.4rem;
    text-align: start;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .ips-detail__copy,
  :host-context([lang='en']) .ips-detail__copy {
    direction: ltr;
  }

  .ips-detail__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    margin: 0;
  }

  .ips-detail__step-pill {
    display: inline-flex;
    align-items: center;
    min-height: 1.65rem;
    padding: 0.15rem 0.65rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, transparent);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .ips-detail__dur {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .ips-detail__title {
    margin: 0;
    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .ips-detail__desc {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: color-mix(in srgb, var(--text-color, #111827) 88%, var(--muted-color, #64748b));
  }

  .ips-detail__video {
    justify-self: start;
    margin-top: 0.25rem;
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .ips-detail__video:hover {
    text-decoration: underline;
  }

  .ips-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    justify-content: space-between;
  }

  .ips-vertical {
    display: none;
    gap: 0.65rem;
  }

  .ips-vertical .ips-step-btn {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 859px) {
    .ips-detail--split,
    .ips-detail--text-only {
      grid-template-columns: 1fr;
    }

    .ips-detail__media {
      min-height: 200px;
      order: -1;
    }

    .ips-detail__media img {
      min-height: 200px;
      max-height: 240px;
    }
  }

  @media (max-width: 639px) {
    .ips-track {
      display: none;
    }

    .ips-vertical {
      display: grid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ips-step-btn,
    .fs-progress__bar > span {
      transition: none !important;
    }
  }
`;
function parseSteps(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title);
    return {
      id: String(row.id ?? "").trim() || `step-${i + 1}`,
      title,
      desc: localizedString(row.desc) || localizedString(row.description),
      duration: localizedString(row.duration),
      image: extractImageUrl(row.image),
      videoUrl: extractLink(row.video_url) || extractLink(row.video),
      order: toNumber(row.order, i + 1)
    };
  }).filter((step) => step.title), sorted = sortByOrder(parsed, "order");
  return sorted.length ? sorted : defaultSteps();
}
__name(parseSteps, "parseSteps");
function defaultSteps() {
  return [
    {
      id: "inspect",
      title: t("فحص السيارة", "Vehicle inspection"),
      desc: t("فحص شامل قبل البدء للتأكد من سلامة القطعة والمركبة.", "Full check before starting to confirm part and vehicle condition."),
      duration: t("15–20 د", "15–20 min"),
      image: "",
      videoUrl: "",
      order: 1
    },
    {
      id: "identify",
      title: t("تحديد القطعة", "Identify the part"),
      desc: t("مطابقة رقم القطعة مع دليل قطع السيارة.", "Match part number with vehicle catalog."),
      duration: t("10 د", "10 min"),
      image: "",
      videoUrl: "",
      order: 2
    },
    {
      id: "remove",
      title: t("فك الجزء القديم", "Remove old component"),
      desc: t("فك آمن مع اتباع تعليمات المصنع.", "Safe removal following manufacturer guidance."),
      duration: t("30–45 د", "30–45 min"),
      image: "",
      videoUrl: "",
      order: 3
    },
    {
      id: "install",
      title: t("التركيب", "Installation"),
      desc: t("تركيب القطعة الجديدة وضبط عزم الربط.", "Install new part and torque to spec."),
      duration: t("45–60 د", "45–60 min"),
      image: "",
      videoUrl: "",
      order: 4
    },
    {
      id: "test",
      title: t("الاختبار", "Testing"),
      desc: t("اختبار تشغيلي وقيادة قصيرة عند الحاجة.", "Functional test and short road test if needed."),
      duration: t("15 د", "15 min"),
      image: "",
      videoUrl: "",
      order: 5
    },
    {
      id: "handover",
      title: t("التسليم", "Handover"),
      desc: t("شرح للعميل وتوثيق الضمان.", "Customer briefing and warranty documentation."),
      duration: t("10 د", "10 min"),
      image: "",
      videoUrl: "",
      order: 6
    }
  ];
}
__name(defaultSteps, "defaultSteps");
function progressPercent(activeIndex, total) {
  return total <= 1 ? 100 : Math.round(activeIndex / (total - 1) * 100);
}
__name(progressPercent, "progressPercent");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const AUTOPLAY_MS = 6e3, _InstallationProcessSteps = class _InstallationProcessSteps extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeIndex = 0, this.autoplayTimer = null, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler), this.syncAutoplay();
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), this.clearAutoplay(), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a;
    if (changed.has("config")) {
      const steps = parseSteps((_a = this.config) == null ? void 0 : _a.ips_steps);
      this.activeIndex >= steps.length && (this.activeIndex = 0), this.syncAutoplay();
    }
  }
  get steps() {
    var _a;
    return parseSteps((_a = this.config) == null ? void 0 : _a.ips_steps);
  }
  clearAutoplay() {
    this.autoplayTimer && (clearInterval(this.autoplayTimer), this.autoplayTimer = null);
  }
  syncAutoplay() {
    this.clearAutoplay();
    const c = this.config || {};
    !isTruthy(c.ips_autoplay, !1) || prefersReducedMotion() || this.steps.length < 2 || (this.autoplayTimer = setInterval(() => {
      const total = this.steps.length;
      this.activeIndex = (this.activeIndex + 1) % total;
    }, AUTOPLAY_MS));
  }
  goTo(index) {
    this.activeIndex = index, this.syncAutoplay();
  }
  goPrev() {
    this.goTo(Math.max(0, this.activeIndex - 1));
  }
  goNext() {
    this.goTo(Math.min(this.steps.length - 1, this.activeIndex + 1));
  }
  renderStepButton(step, index) {
    const active = index === this.activeIndex;
    return html`
      <button
        type="button"
        class=${classMap({ "ips-step-btn": !0, "is-active": active })}
        aria-current=${active ? "step" : nothing}
        @click=${() => this.goTo(index)}
      >
        <span class="ips-step-btn__num">${t("خطوة", "Step")} ${index + 1}</span>
        <span class="ips-step-btn__title">${step.title}</span>
        ${step.duration ? html`<span class="ips-step-btn__dur">${step.duration}</span>` : nothing}
      </button>
    `;
  }
  renderDetail(step, index, total) {
    const hasMedia = !!step.image;
    return html`
      <div
        class=${classMap({
      "ips-detail": !0,
      "ips-detail--split": hasMedia,
      "ips-detail--text-only": !hasMedia
    })}
        aria-live="polite"
      >
        <div class="ips-detail__media" aria-hidden=${hasMedia ? "false" : "true"}>
          ${step.image ? html`<img src=${step.image} alt="" loading="lazy" decoding="async" />` : html`<div class="ips-detail__placeholder">
                <span class="ips-detail__placeholder-num">${index + 1}</span>
                <span>${t("مرحلة الخدمة", "Service stage")}</span>
              </div>`}
        </div>

        <div class="ips-detail__copy">
          <p class="ips-detail__meta">
            <span class="ips-detail__step-pill"
              >${t("الخطوة", "Step")} ${index + 1} / ${total}</span
            >
            ${step.duration ? html`<span class="ips-detail__dur">${step.duration}</span>` : nothing}
          </p>
          <h3 class="ips-detail__title">${step.title}</h3>
          ${step.desc ? html`<p class="ips-detail__desc">${step.desc}</p>` : nothing}
          ${step.videoUrl ? html`<a
                class="ips-detail__video"
                href=${step.videoUrl}
                target="_blank"
                rel=${isExternalUrl(step.videoUrl) ? "noopener noreferrer" : nothing}
              >
                ${t("شاهد فيديو التركيب", "Watch install video")}
              </a>` : nothing}
        </div>
      </div>
    `;
  }
  render() {
    var _a, _b;
    const c = this.config || {}, theme = readSectionTheme(c, "ips_"), steps = this.steps, active = steps[this.activeIndex] ?? steps[0], title = localizedString(c.ips_title), desc = localizedString(c.ips_desc), prevLabel = localizedString((_a = this.config) == null ? void 0 : _a.ips_prev_label) || t("السابق", "Previous"), nextLabel = localizedString((_b = this.config) == null ? void 0 : _b.ips_next_label) || t("التالي", "Next"), pct = progressPercent(this.activeIndex, steps.length);
    return steps.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("خطوات التركيب الاحترافي", "Professional installation steps")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="ips-shell">
            <div class="ips-progress fs-progress">
              <div class="fs-progress__bar" aria-hidden="true"><span style=${styleMap({ width: `${pct}%` })}></span></div>
              <span class="fs-progress__label">
                ${t("التقدم", "Progress")}: ${pct}%
              </span>
            </div>

            <div class="ips-track" role="tablist" aria-label=${t("خطوات العملية", "Process steps")}>
              ${steps.map((step, i) => this.renderStepButton(step, i))}
            </div>

            <div class="ips-vertical" role="tablist">
              ${steps.map((step, i) => this.renderStepButton(step, i))}
            </div>

            ${active ? this.renderDetail(active, this.activeIndex, steps.length) : nothing}

            <div class="ips-nav">
              <button
                type="button"
                class="fs-btn fs-btn--ghost fs-tap"
                ?disabled=${this.activeIndex === 0}
                @click=${() => this.goPrev()}
              >
                ${prevLabel}
              </button>
              <button
                type="button"
                class="fs-btn fs-tap"
                ?disabled=${this.activeIndex >= steps.length - 1}
                @click=${() => this.goNext()}
              >
                ${nextLabel}
              </button>
            </div>
          </div>
          ${renderCommerceOutcome(c, "ips_", { ready: !!active })}
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف خطوات التركيب من إعدادات العنصر", "Add installation steps in element settings")}
      </div>`;
  }
};
__name(_InstallationProcessSteps, "InstallationProcessSteps"), _InstallationProcessSteps.styles = [sharedSectionCss, componentStyles];
let InstallationProcessSteps = _InstallationProcessSteps;
__decorateClass([
  property({ type: Object })
], InstallationProcessSteps.prototype, "config");
__decorateClass([
  state()
], InstallationProcessSteps.prototype, "activeIndex");
bindSallaRegistration(InstallationProcessSteps);
typeof InstallationProcessSteps < "u" && InstallationProcessSteps.registerSallaComponent("salla-installation-process-steps");
export {
  InstallationProcessSteps as default
};
