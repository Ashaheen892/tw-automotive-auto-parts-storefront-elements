import { css as $, LitElement as k, nothing as s, html as i } from "lit";
import { property as w, state as S } from "lit/decorators.js";
import { classMap as b } from "lit/directives/class-map.js";
import { styleMap as _ } from "lit/directives/style-map.js";
import { n as z, l as d, f as I, c as C, h as q, t, s as E, r as M, a as O, b as L } from "./registerSalla-Dct4KN_E.js";
import { r as P } from "./commerceOutcome-B3T0_-WJ.js";
const U = $`
  .pjt-shell {
    display: grid;
    gap: 1.5rem;
  }

  .pjt-rail {
    position: relative;
    padding: 1.15rem 1rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, #fff),
        var(--card-bg, #fff) 55%
      );
    box-shadow: 0 10px 28px rgba(30, 41, 59, 0.06);
    overflow: hidden;
  }

  .pjt-rail__line {
    display: none;
    position: absolute;
    inset-inline: 8%;
    top: 2.55rem;
    height: 3px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 80%, #fff);
    overflow: hidden;
  }

  .pjt-rail__line span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--accent-color, var(--fs-store-primary));
    transition: width 0.35s ease;
  }

  .pjt-rail__steps {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(118px, 1fr);
    gap: 0.65rem;
    overflow-x: auto;
    padding-bottom: 0.15rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .pjt-node {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: center;
    gap: 0.55rem;
    margin: 0;
    padding: 0.35rem 0.25rem 0.15rem;
    border: 0;
    background: transparent;
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    scroll-snap-align: center;
    transition: transform 0.2s ease;
  }

  .pjt-node:hover {
    transform: translateY(-2px);
  }

  .pjt-node__dot {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 6px 16px rgba(30, 41, 59, 0.08);
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;
  }

  .pjt-node.is-done .pjt-node__dot {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, #fff);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
  }

  .pjt-node.is-active .pjt-node__dot {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    box-shadow:
      0 0 0 5px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent),
      0 10px 22px rgba(30, 41, 59, 0.16);
  }

  .pjt-node__icon {
    font-size: 1.05rem;
    line-height: 1;
  }

  .pjt-node__num {
    font-size: 0.95rem;
    font-weight: 800;
  }

  .pjt-node__label {
    max-width: 9.5rem;
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.35;
    text-align: center;
    color: var(--muted-color, #64748b);
  }

  .pjt-node.is-active .pjt-node__label {
    color: var(--text-color, #111827);
  }

  .pjt-node__badge {
    max-width: 9.5rem;
    padding: 0.12rem 0.45rem;
    border-radius: 999px;
    font-size: 0.65rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    color: var(--accent-color, var(--fs-store-primary));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pjt-panel {
    border-radius: var(--section-radius, 22px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 16px 40px rgba(30, 41, 59, 0.09);
    overflow: hidden;
  }

  .pjt-panel__grid {
    display: grid;
    gap: 0;
  }

  .pjt-panel__grid.has-media {
    direction: ltr;
  }

  @media (min-width: 860px) {
    .pjt-rail__line {
      display: block;
    }

    .pjt-panel__grid.has-media {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
      align-items: stretch;
    }
  }

  .pjt-panel__visual {
    position: relative;
    min-height: 220px;
    background:
      radial-gradient(
        120% 100% at 0% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        transparent 55%
      ),
      linear-gradient(160deg, #1e293b, #0f172a);
  }

  .pjt-panel__visual img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    max-height: 340px;
    object-fit: cover;
  }

  .pjt-panel__visual-fallback {
    min-height: 220px;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .pjt-panel__visual-icon {
    width: 4.5rem;
    height: 4.5rem;
    display: grid;
    place-items: center;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    font-size: 1.8rem;
  }

  .pjt-panel__stamp {
    position: absolute;
    inset-inline-start: 1rem;
    bottom: 1rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.72);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 800;
    backdrop-filter: blur(6px);
  }

  .pjt-panel__body {
    display: grid;
    align-content: center;
    gap: 0.75rem;
    padding: 1.35rem 1.4rem 1.5rem;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .pjt-panel__body,
  :host-context([lang='en']) .pjt-panel__body {
    direction: ltr;
  }

  .pjt-panel__kicker {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pjt-panel__title {
    margin: 0;
    font-size: clamp(1.25rem, 2.4vw, 1.65rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .pjt-panel__desc {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: color-mix(in srgb, var(--text-color, #111827) 86%, var(--muted-color, #64748b));
  }

  .pjt-panel__facts {
    display: grid;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  @media (min-width: 520px) {
    .pjt-panel__facts {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .pjt-fact {
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 0.85rem;
    border-radius: 14px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, #f8fafc);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, transparent);
  }

  .pjt-fact__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .pjt-fact__value {
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--text-color, #111827);
    line-height: 1.4;
  }

  @media (max-width: 859px) {
    .pjt-rail__steps {
      grid-auto-columns: minmax(104px, 140px);
    }

    .pjt-panel__visual img,
    .pjt-panel__visual-fallback {
      max-height: 220px;
      min-height: 180px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pjt-node,
    .pjt-rail__line span,
    .pjt-node__dot {
      transition: none !important;
    }
  }
`;
function v(g) {
  const e = z(g).map((a, r) => {
    const n = d(a.title);
    return {
      id: String(a.id ?? "").trim() || `stage-${r + 1}`,
      title: n,
      desc: d(a.desc) || d(a.description),
      icon: String(a.icon ?? "").trim(),
      image: C(a.image),
      quality: d(a.quality),
      duration: d(a.duration),
      badge: d(a.badge),
      order: I(a.order, r + 1)
    };
  }).filter((a) => a.title), o = q(e, "order");
  return o.length ? o : B();
}
function B() {
  return [
    {
      id: "sourcing",
      title: t("التوريد", "Sourcing"),
      desc: t("اختيار موردين معتمدين وقطع أصلية أو بديلة موثوقة.", "Selecting certified suppliers and trusted OEM or aftermarket parts."),
      icon: "📦",
      image: "",
      quality: t("معيار الجودة: OEM", "Quality: OEM grade"),
      duration: t("1–3 أيام", "1–3 days"),
      badge: t("أصلي", "OEM"),
      order: 1
    },
    {
      id: "qc",
      title: t("فحص الجودة", "Quality check"),
      desc: t("فحص بصري وتشغيلي قبل القبول في المخزون.", "Visual and functional inspection before stock acceptance."),
      icon: "🔍",
      image: "",
      quality: t("فحص 100%", "100% inspection"),
      duration: t("نفس اليوم", "Same day"),
      badge: t("معتمد", "Certified"),
      order: 2
    },
    {
      id: "storage",
      title: t("التخزين", "Storage"),
      desc: t("تخزين في ظروف مناسبة لحماية القطعة.", "Climate-controlled storage to protect the part."),
      icon: "🏭",
      image: "",
      quality: t("بيئة محكمة", "Controlled environment"),
      duration: t("حتى الشحن", "Until shipping"),
      badge: "",
      order: 3
    },
    {
      id: "prep",
      title: t("التجهيز", "Preparation"),
      desc: t("تغليف آمن وإرفاق ملصقات التوافق.", "Secure packaging with compatibility labels."),
      icon: "📋",
      image: "",
      quality: t("تغليف احترافي", "Pro packaging"),
      duration: t("24 س", "24 h"),
      badge: "",
      order: 4
    },
    {
      id: "shipping",
      title: t("الشحن", "Shipping"),
      desc: t("شحن سريع مع تتبع حتى بابك.", "Fast shipping with tracking to your door."),
      icon: "🚚",
      image: "",
      quality: t("تتبع مباشر", "Live tracking"),
      duration: t("1–5 أيام", "1–5 days"),
      badge: t("سريع", "Express"),
      order: 5
    },
    {
      id: "install",
      title: t("التركيب", "Installation"),
      desc: t("دعم تركيب أو إرشادات خطوة بخطوة.", "Install support or step-by-step guidance."),
      icon: "🔧",
      image: "",
      quality: t("ورش معتمدة", "Certified workshops"),
      duration: t("حسب القطعة", "Varies"),
      badge: t("ضمان", "Warranty"),
      order: 6
    }
  ];
}
var H = Object.defineProperty, j = (g, e, o, a) => {
  for (var r = void 0, n = g.length - 1, l; n >= 0; n--)
    (l = g[n]) && (r = l(e, o, r) || r);
  return r && H(e, o, r), r;
};
const f = class f extends k {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var o, a;
    if (e.has("config")) {
      const r = v((o = this.config) == null ? void 0 : o.pjt_stages);
      r.some((n) => n.id === this.activeId) || (this.activeId = ((a = r[0]) == null ? void 0 : a.id) ?? "");
    }
  }
  get stages() {
    var e;
    return v((e = this.config) == null ? void 0 : e.pjt_stages);
  }
  get active() {
    return this.stages.find((e) => e.id === this.activeId) ?? this.stages[0] ?? null;
  }
  get activeIndex() {
    const e = this.stages.findIndex((o) => o.id === this.activeId);
    return e >= 0 ? e : 0;
  }
  select(e) {
    this.activeId = e;
  }
  renderPanel(e, o, a) {
    return e ? i`
      <article class="pjt-panel" role="region" aria-live="polite">
        <div class=${b({ "pjt-panel__grid": !0, "has-media": !!e.image })}>
          <div class="pjt-panel__visual">
            ${e.image ? i`<img src=${e.image} alt="" loading="lazy" decoding="async" />` : i`<div class="pjt-panel__visual-fallback" aria-hidden="true">
                  <span class="pjt-panel__visual-icon">${e.icon || "◆"}</span>
                </div>`}
            ${e.badge ? i`<span class="pjt-panel__stamp">${e.badge}</span>` : s}
          </div>

          <div class="pjt-panel__body">
            <p class="pjt-panel__kicker">
              ${t("المرحلة", "Stage")} ${o + 1}
              <span aria-hidden="true">/</span>
              ${a}
            </p>
            <h3 class="pjt-panel__title">${e.title}</h3>
            ${e.desc ? i`<p class="pjt-panel__desc">${e.desc}</p>` : s}

            <div class="pjt-panel__facts">
              ${e.quality ? i`<div class="pjt-fact">
                    <span class="pjt-fact__label">${t("معيار الجودة", "Quality standard")}</span>
                    <span class="pjt-fact__value">${e.quality}</span>
                  </div>` : s}
              ${e.duration ? i`<div class="pjt-fact">
                    <span class="pjt-fact__label">${t("المدة التقريبية", "Approx. duration")}</span>
                    <span class="pjt-fact__value">${e.duration}</span>
                  </div>` : s}
            </div>
          </div>
        </div>
      </article>
    ` : s;
  }
  render() {
    const e = this.config || {}, o = M(e, "pjt_"), a = this.stages, r = this.active, n = this.activeIndex, l = d(e.pjt_title), m = d(e.pjt_desc), x = a.length ? Math.round((n + 1) / a.length * 100) : 0;
    return i`
      <section
        class="fs-section"
        style=${_(O(o))}
        aria-label=${l || t("رحلة القطعة", "Part journey timeline")}
      >
        <div class="fs-container">
          ${l || m ? i`<div class="fs-hero">
                ${l ? i`<h2 class="fs-title">${l}</h2>` : s}
                ${m ? i`<p class="fs-desc">${m}</p>` : s}
              </div>` : s}

          <div class="pjt-shell">
            <div class="pjt-rail" role="tablist" aria-label=${t("مراحل الرحلة", "Journey stages")}>
              <div class="pjt-rail__line" aria-hidden="true">
                <span style=${_({ width: `${x}%` })}></span>
              </div>

              <div class="pjt-rail__steps">
                ${a.map((c, u) => {
      const h = c.id === (r == null ? void 0 : r.id), y = u < n;
      return i`
                    <button
                      type="button"
                      class=${b({
        "pjt-node": !0,
        "is-active": h,
        "is-done": y
      })}
                      role="tab"
                      aria-selected=${h ? "true" : "false"}
                      @click=${() => this.select(c.id)}
                    >
                      <span class="pjt-node__dot" aria-hidden="true">
                        ${c.icon ? i`<span class="pjt-node__icon">${c.icon}</span>` : i`<span class="pjt-node__num">${u + 1}</span>`}
                      </span>
                      <span class="pjt-node__label">${c.title}</span>
                      ${c.badge ? i`<span class="pjt-node__badge">${c.badge}</span>` : s}
                    </button>
                  `;
    })}
              </div>
            </div>

            ${this.renderPanel(r, n, a.length)}
          </div>

          ${P(e, "pjt_", { ready: !!r })}
        </div>
      </section>
    `;
  }
};
f.styles = [E, U];
let p = f;
j([
  w({ type: Object })
], p.prototype, "config");
j([
  S()
], p.prototype, "activeId");
L(
  p
);
typeof p < "u" && p.registerSallaComponent("salla-part-journey-timeline");
export {
  p as default
};
