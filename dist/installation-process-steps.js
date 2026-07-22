import { css as I, LitElement as S, nothing as o, html as r } from "lit";
import { property as T, state as U } from "lit/decorators.js";
import { classMap as b } from "lit/directives/class-map.js";
import { styleMap as _ } from "lit/directives/style-map.js";
import { n as z, l, f as L, e as x, c as A, h as C, t as i, s as M, d as P, p as j, i as B, r as E, a as H, b as O } from "./registerSalla-Dct4KN_E.js";
import { r as R } from "./commerceOutcome-B3T0_-WJ.js";
const N = I`
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
function y(c) {
  const e = z(c).map((t, a) => {
    const n = l(t.title);
    return {
      id: String(t.id ?? "").trim() || `step-${a + 1}`,
      title: n,
      desc: l(t.desc) || l(t.description),
      duration: l(t.duration),
      image: A(t.image),
      videoUrl: x(t.video_url) || x(t.video),
      order: L(t.order, a + 1)
    };
  }).filter((t) => t.title), s = C(e, "order");
  return s.length ? s : F();
}
function F() {
  return [
    {
      id: "inspect",
      title: i("فحص السيارة", "Vehicle inspection"),
      desc: i("فحص شامل قبل البدء للتأكد من سلامة القطعة والمركبة.", "Full check before starting to confirm part and vehicle condition."),
      duration: i("15–20 د", "15–20 min"),
      image: "",
      videoUrl: "",
      order: 1
    },
    {
      id: "identify",
      title: i("تحديد القطعة", "Identify the part"),
      desc: i("مطابقة رقم القطعة مع دليل قطع السيارة.", "Match part number with vehicle catalog."),
      duration: i("10 د", "10 min"),
      image: "",
      videoUrl: "",
      order: 2
    },
    {
      id: "remove",
      title: i("فك الجزء القديم", "Remove old component"),
      desc: i("فك آمن مع اتباع تعليمات المصنع.", "Safe removal following manufacturer guidance."),
      duration: i("30–45 د", "30–45 min"),
      image: "",
      videoUrl: "",
      order: 3
    },
    {
      id: "install",
      title: i("التركيب", "Installation"),
      desc: i("تركيب القطعة الجديدة وضبط عزم الربط.", "Install new part and torque to spec."),
      duration: i("45–60 د", "45–60 min"),
      image: "",
      videoUrl: "",
      order: 4
    },
    {
      id: "test",
      title: i("الاختبار", "Testing"),
      desc: i("اختبار تشغيلي وقيادة قصيرة عند الحاجة.", "Functional test and short road test if needed."),
      duration: i("15 د", "15 min"),
      image: "",
      videoUrl: "",
      order: 5
    },
    {
      id: "handover",
      title: i("التسليم", "Handover"),
      desc: i("شرح للعميل وتوثيق الضمان.", "Customer briefing and warranty documentation."),
      duration: i("10 د", "10 min"),
      image: "",
      videoUrl: "",
      order: 6
    }
  ];
}
function q(c, e) {
  return e <= 1 ? 100 : Math.round(c / (e - 1) * 100);
}
var D = Object.defineProperty, $ = (c, e, s, t) => {
  for (var a = void 0, n = c.length - 1, p; n >= 0; n--)
    (p = c[n]) && (a = p(e, s, a) || a);
  return a && D(e, s, a), a;
};
const V = 6e3, h = class h extends S {
  constructor() {
    super(...arguments), this.config = {}, this.activeIndex = 0, this.autoplayTimer = null, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler), this.syncAutoplay();
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), this.clearAutoplay(), super.disconnectedCallback();
  }
  willUpdate(e) {
    var s;
    if (e.has("config")) {
      const t = y((s = this.config) == null ? void 0 : s.ips_steps);
      this.activeIndex >= t.length && (this.activeIndex = 0), this.syncAutoplay();
    }
  }
  get steps() {
    var e;
    return y((e = this.config) == null ? void 0 : e.ips_steps);
  }
  clearAutoplay() {
    this.autoplayTimer && (clearInterval(this.autoplayTimer), this.autoplayTimer = null);
  }
  syncAutoplay() {
    this.clearAutoplay();
    const e = this.config || {};
    !P(e.ips_autoplay, !1) || j() || this.steps.length < 2 || (this.autoplayTimer = setInterval(() => {
      const t = this.steps.length;
      this.activeIndex = (this.activeIndex + 1) % t;
    }, V));
  }
  goTo(e) {
    this.activeIndex = e, this.syncAutoplay();
  }
  goPrev() {
    this.goTo(Math.max(0, this.activeIndex - 1));
  }
  goNext() {
    this.goTo(Math.min(this.steps.length - 1, this.activeIndex + 1));
  }
  renderStepButton(e, s) {
    const t = s === this.activeIndex;
    return r`
      <button
        type="button"
        class=${b({ "ips-step-btn": !0, "is-active": t })}
        aria-current=${t ? "step" : o}
        @click=${() => this.goTo(s)}
      >
        <span class="ips-step-btn__num">${i("خطوة", "Step")} ${s + 1}</span>
        <span class="ips-step-btn__title">${e.title}</span>
        ${e.duration ? r`<span class="ips-step-btn__dur">${e.duration}</span>` : o}
      </button>
    `;
  }
  renderDetail(e, s, t) {
    const a = !!e.image;
    return r`
      <div
        class=${b({
      "ips-detail": !0,
      "ips-detail--split": a,
      "ips-detail--text-only": !a
    })}
        aria-live="polite"
      >
        <div class="ips-detail__media" aria-hidden=${a ? "false" : "true"}>
          ${e.image ? r`<img src=${e.image} alt="" loading="lazy" decoding="async" />` : r`<div class="ips-detail__placeholder">
                <span class="ips-detail__placeholder-num">${s + 1}</span>
                <span>${i("مرحلة الخدمة", "Service stage")}</span>
              </div>`}
        </div>

        <div class="ips-detail__copy">
          <p class="ips-detail__meta">
            <span class="ips-detail__step-pill"
              >${i("الخطوة", "Step")} ${s + 1} / ${t}</span
            >
            ${e.duration ? r`<span class="ips-detail__dur">${e.duration}</span>` : o}
          </p>
          <h3 class="ips-detail__title">${e.title}</h3>
          ${e.desc ? r`<p class="ips-detail__desc">${e.desc}</p>` : o}
          ${e.videoUrl ? r`<a
                class="ips-detail__video"
                href=${e.videoUrl}
                target="_blank"
                rel=${B(e.videoUrl) ? "noopener noreferrer" : o}
              >
                ${i("شاهد فيديو التركيب", "Watch install video")}
              </a>` : o}
        </div>
      </div>
    `;
  }
  render() {
    var v, f;
    const e = this.config || {}, s = E(e, "ips_"), t = this.steps, a = t[this.activeIndex] ?? t[0], n = l(e.ips_title), p = l(e.ips_desc), w = l((v = this.config) == null ? void 0 : v.ips_prev_label) || i("السابق", "Previous"), k = l((f = this.config) == null ? void 0 : f.ips_next_label) || i("التالي", "Next"), u = q(this.activeIndex, t.length);
    return t.length ? r`
      <section
        class="fs-section"
        style=${_(H(s))}
        aria-label=${n || i("خطوات التركيب الاحترافي", "Professional installation steps")}
      >
        <div class="fs-container">
          ${n || p ? r`<div class="fs-hero">
                ${n ? r`<h2 class="fs-title">${n}</h2>` : o}
                ${p ? r`<p class="fs-desc">${p}</p>` : o}
              </div>` : o}

          <div class="ips-shell">
            <div class="ips-progress fs-progress">
              <div class="fs-progress__bar" aria-hidden="true"><span style=${_({ width: `${u}%` })}></span></div>
              <span class="fs-progress__label">
                ${i("التقدم", "Progress")}: ${u}%
              </span>
            </div>

            <div class="ips-track" role="tablist" aria-label=${i("خطوات العملية", "Process steps")}>
              ${t.map((m, g) => this.renderStepButton(m, g))}
            </div>

            <div class="ips-vertical" role="tablist">
              ${t.map((m, g) => this.renderStepButton(m, g))}
            </div>

            ${a ? this.renderDetail(a, this.activeIndex, t.length) : o}

            <div class="ips-nav">
              <button
                type="button"
                class="fs-btn fs-btn--ghost fs-tap"
                ?disabled=${this.activeIndex === 0}
                @click=${() => this.goPrev()}
              >
                ${w}
              </button>
              <button
                type="button"
                class="fs-btn fs-tap"
                ?disabled=${this.activeIndex >= t.length - 1}
                @click=${() => this.goNext()}
              >
                ${k}
              </button>
            </div>
          </div>
          ${R(e, "ips_", { ready: !!a })}
        </div>
      </section>
    ` : r`<div class="fs-empty" role="status">
        ${i("أضف خطوات التركيب من إعدادات العنصر", "Add installation steps in element settings")}
      </div>`;
  }
};
h.styles = [M, N];
let d = h;
$([
  T({ type: Object })
], d.prototype, "config");
$([
  U()
], d.prototype, "activeIndex");
O(d);
typeof d < "u" && d.registerSallaComponent("salla-installation-process-steps");
export {
  d as default
};
