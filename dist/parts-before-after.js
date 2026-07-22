import { css as k, LitElement as E, html as o, nothing as b } from "lit";
import { property as C, state as y } from "lit/decorators.js";
import { classMap as R } from "lit/directives/class-map.js";
import { styleMap as f } from "lit/directives/style-map.js";
import { n as S, c as g, l, t as p, s as z, j as M, r as U, a as j, b as q } from "./registerSalla-Dct4KN_E.js";
import { r as F } from "./commerceOutcome-B3T0_-WJ.js";
const O = k`
  .pba-shell {
    display: grid;
    gap: 1rem;
  }

  /* ── Tabs (multiple pairs) ── */
  .pba-tabs {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.2rem;
  }

  .pba-tab {
    flex: 0 0 auto;
    min-height: 44px;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 8px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    cursor: pointer;
    scroll-snap-align: start;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .pba-tab.is-active {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    border-color: var(--accent-color, var(--fs-store-primary));
  }

  /* ── Viewport ── */
  .pba-viewport {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #0f172a;
    background: #0f172a;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
  }

  .pba-viewport__layer {
    display: block;
    width: 100%;
  }

  .pba-viewport__layer img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 220px;
    max-height: 420px;
    object-fit: cover;
  }

  .pba-viewport__after {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .pba-viewport__after img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pba-placeholder {
    display: grid;
    place-items: center;
    min-height: 220px;
    max-height: 420px;
    width: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* ── Handle ── */
  .pba-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--accent-color, #ea580c);
    cursor: ew-resize;
    z-index: 10;
    transform: translateX(-50%);
  }

  .pba-handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: var(--accent-color, #ea580c);
    border: 3px solid #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  }

  /* ── Labels ── */
  .pba-labels {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    position: absolute;
    inset: auto 0 0 0;
    padding: 0.6rem 0.85rem;
    z-index: 5;
  }

  .pba-badge {
    display: inline-flex;
    align-items: center;
    min-height: 1.65rem;
    padding: 0.2rem 0.65rem;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .pba-badge--before {
    background: rgba(15, 23, 42, 0.85);
    color: #94a3b8;
  }

  .pba-badge--after {
    background: var(--accent-color, #ea580c);
    color: #fff;
  }

  /* ── Range fallback ── */
  .pba-range {
    width: 100%;
    margin-top: 0.4rem;
    accent-color: var(--accent-color, #ea580c);
  }

  @media (max-width: 639px) {
    .pba-viewport__layer img,
    .pba-viewport__after img {
      min-height: 180px;
      max-height: 280px;
    }

    .pba-placeholder {
      min-height: 180px;
      max-height: 280px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pba-handle,
    .pba-tab {
      transition: none !important;
    }
  }
`, $ = "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1000&q=80", _ = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80", B = "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80", T = "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80";
function H(c) {
  const e = S(c).map((t, a) => ({
    id: String(t.id ?? "").trim() || `pair-${a + 1}`,
    title: l(t.title),
    beforeImage: g(t.before_image),
    afterImage: g(t.after_image)
  })).filter((t) => t.title || t.beforeImage || t.afterImage);
  return e.length ? e.map((t, a) => {
    const i = x()[a % 2];
    return {
      ...t,
      beforeImage: t.beforeImage || i.beforeImage,
      afterImage: t.afterImage || i.afterImage,
      title: t.title || i.title
    };
  }) : x();
}
function w() {
  return { before: $, after: _ };
}
function x() {
  return [
    {
      id: "detailing",
      title: p("تفصيل داخلي", "Interior detailing"),
      beforeImage: $,
      afterImage: _
    },
    {
      id: "engine",
      title: p("صيانة المحرك", "Engine service"),
      beforeImage: B,
      afterImage: T
    }
  ];
}
var A = Object.defineProperty, h = (c, e, t, a) => {
  for (var i = void 0, r = c.length - 1, s; r >= 0; r--)
    (s = c[r]) && (i = s(e, t, i) || i);
  return i && A(e, t, i), i;
};
const m = class m extends E {
  constructor() {
    super(...arguments), this.config = {}, this.activePair = 0, this.position = 50, this.dragging = !1, this.boundLangHandler = () => this.requestUpdate(), this.onPointerDown = (e) => {
      var t, a;
      this.dragging = !0, (a = (t = e.target) == null ? void 0 : t.setPointerCapture) == null || a.call(t, e.pointerId), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp), this.updatePosition(e);
    }, this.onPointerMove = (e) => {
      this.dragging && this.updatePosition(e);
    }, this.onPointerUp = () => {
      this.dragging = !1, document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp);
    }, this.onRangeInput = (e) => {
      this.position = Number(e.target.value);
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), super.disconnectedCallback();
  }
  willUpdate(e) {
    if (e.has("config")) {
      const t = this.pairs;
      this.activePair >= t.length && (this.activePair = 0);
    }
  }
  get pairs() {
    var e;
    return H((e = this.config) == null ? void 0 : e.pba_items);
  }
  get singleBefore() {
    var e;
    return g((e = this.config) == null ? void 0 : e.pba_before_image) || w().before;
  }
  get singleAfter() {
    var e;
    return g((e = this.config) == null ? void 0 : e.pba_after_image) || w().after;
  }
  get beforeLabel() {
    var e;
    return l((e = this.config) == null ? void 0 : e.pba_before_label) || p("قبل", "BEFORE");
  }
  get afterLabel() {
    var e;
    return l((e = this.config) == null ? void 0 : e.pba_after_label) || p("بعد", "AFTER");
  }
  selectPair(e) {
    this.activePair = e, this.position = 50;
  }
  updatePosition(e) {
    const t = this.renderRoot.querySelector(".pba-viewport");
    if (!t) return;
    const a = t.getBoundingClientRect(), i = e.clientX - a.left;
    this.position = M(i / a.width * 100, 0, 100);
  }
  renderViewport(e, t) {
    const a = this.position, i = e ? o`<img src=${e} alt=${this.beforeLabel} loading="lazy" decoding="async" />` : o`<div class="pba-placeholder">${this.beforeLabel}</div>`, r = t ? o`<img src=${t} alt=${this.afterLabel} loading="lazy" decoding="async" />` : o`<div class="pba-placeholder">${this.afterLabel}</div>`;
    return o`
      <div
        class="pba-viewport"
        @pointerdown=${this.onPointerDown}
      >
        <div class="pba-viewport__layer">${i}</div>
        <div
          class="pba-viewport__after"
          style=${f({ clipPath: `inset(0 0 0 ${a}%)` })}
        >${r}</div>
        <div
          class="pba-handle"
          style=${f({ left: `${a}%` })}
          aria-hidden="true"
        ></div>
        <div class="pba-labels">
          <span class="pba-badge pba-badge--before">${this.beforeLabel}</span>
          <span class="pba-badge pba-badge--after">${this.afterLabel}</span>
        </div>
      </div>
      <input
        type="range"
        class="pba-range"
        min="0"
        max="100"
        .value=${String(a)}
        aria-label=${p("تحريك المقارنة", "Move comparison")}
        @input=${this.onRangeInput}
      />
    `;
  }
  render() {
    var u, v;
    const e = this.config || {}, t = U(e, "pba_"), a = l(e.pba_title), i = l(e.pba_desc), r = this.pairs, s = r.length > 0, P = s ? ((u = r[this.activePair]) == null ? void 0 : u.beforeImage) ?? "" : this.singleBefore, I = s ? ((v = r[this.activePair]) == null ? void 0 : v.afterImage) ?? "" : this.singleAfter;
    return o`
      <section
        class="fs-section"
        style=${f(j(t))}
        aria-label=${a || p("مقارنة قبل وبعد", "Before & after comparison")}
      >
        <div class="fs-container">
          ${a || i ? o`<div class="fs-hero">
                ${a ? o`<h2 class="fs-title">${a}</h2>` : b}
                ${i ? o`<p class="fs-desc">${i}</p>` : b}
              </div>` : b}

          <div class="pba-shell">
            ${s && r.length > 1 ? o`<div class="pba-tabs" role="tablist">
                  ${r.map(
      (L, d) => o`
                      <button
                        type="button"
                        class=${R({ "pba-tab": !0, "is-active": d === this.activePair })}
                        role="tab"
                        aria-selected=${d === this.activePair ? "true" : "false"}
                        @click=${() => this.selectPair(d)}
                      >${L.title || `${d + 1}`}</button>
                    `
    )}
                </div>` : b}

            ${this.renderViewport(P, I)}
          </div>

          ${F(e, "pba_", { ready: !0 })}
        </div>
      </section>
    `;
  }
};
m.styles = [z, O];
let n = m;
h([
  C({ type: Object })
], n.prototype, "config");
h([
  y()
], n.prototype, "activePair");
h([
  y()
], n.prototype, "position");
q(n);
typeof n < "u" && n.registerSallaComponent("salla-parts-before-after");
export {
  n as default
};
