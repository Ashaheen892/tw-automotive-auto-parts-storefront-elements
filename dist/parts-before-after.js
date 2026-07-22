var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, c as extractImageUrl, l as localizedString, t, s as sharedSectionCss, j as clamp, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, BEFORE = "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1000&q=80", AFTER = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80", BEFORE2 = "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80", AFTER2 = "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80";
function parsePairs(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => ({
    id: String(row.id ?? "").trim() || `pair-${i + 1}`,
    title: localizedString(row.title),
    beforeImage: extractImageUrl(row.before_image),
    afterImage: extractImageUrl(row.after_image)
  })).filter((p) => p.title || p.beforeImage || p.afterImage);
  return parsed.length ? parsed.map((p, i) => {
    const d = defaultPairs()[i % 2];
    return {
      ...p,
      beforeImage: p.beforeImage || d.beforeImage,
      afterImage: p.afterImage || d.afterImage,
      title: p.title || d.title
    };
  }) : defaultPairs();
}
__name(parsePairs, "parsePairs");
function defaultSingleImages() {
  return { before: BEFORE, after: AFTER };
}
__name(defaultSingleImages, "defaultSingleImages");
function defaultPairs() {
  return [
    {
      id: "detailing",
      title: t("تفصيل داخلي", "Interior detailing"),
      beforeImage: BEFORE,
      afterImage: AFTER
    },
    {
      id: "engine",
      title: t("صيانة المحرك", "Engine service"),
      beforeImage: BEFORE2,
      afterImage: AFTER2
    }
  ];
}
__name(defaultPairs, "defaultPairs");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _PartsBeforeAfter = class _PartsBeforeAfter extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activePair = 0, this.position = 50, this.dragging = !1, this.boundLangHandler = () => this.requestUpdate(), this.onPointerDown = (e) => {
      var _a, _b;
      this.dragging = !0, (_b = (_a = e.target) == null ? void 0 : _a.setPointerCapture) == null || _b.call(_a, e.pointerId), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp), this.updatePosition(e);
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
  willUpdate(changed) {
    if (changed.has("config")) {
      const pairs = this.pairs;
      this.activePair >= pairs.length && (this.activePair = 0);
    }
  }
  get pairs() {
    var _a;
    return parsePairs((_a = this.config) == null ? void 0 : _a.pba_items);
  }
  get singleBefore() {
    var _a;
    return extractImageUrl((_a = this.config) == null ? void 0 : _a.pba_before_image) || defaultSingleImages().before;
  }
  get singleAfter() {
    var _a;
    return extractImageUrl((_a = this.config) == null ? void 0 : _a.pba_after_image) || defaultSingleImages().after;
  }
  get beforeLabel() {
    var _a;
    return localizedString((_a = this.config) == null ? void 0 : _a.pba_before_label) || t("قبل", "BEFORE");
  }
  get afterLabel() {
    var _a;
    return localizedString((_a = this.config) == null ? void 0 : _a.pba_after_label) || t("بعد", "AFTER");
  }
  selectPair(index) {
    this.activePair = index, this.position = 50;
  }
  updatePosition(e) {
    const viewport = this.renderRoot.querySelector(".pba-viewport");
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect(), x = e.clientX - rect.left;
    this.position = clamp(x / rect.width * 100, 0, 100);
  }
  renderViewport(beforeImg, afterImg) {
    const pos = this.position, beforeContent = beforeImg ? html`<img src=${beforeImg} alt=${this.beforeLabel} loading="lazy" decoding="async" />` : html`<div class="pba-placeholder">${this.beforeLabel}</div>`, afterContent = afterImg ? html`<img src=${afterImg} alt=${this.afterLabel} loading="lazy" decoding="async" />` : html`<div class="pba-placeholder">${this.afterLabel}</div>`;
    return html`
      <div
        class="pba-viewport"
        @pointerdown=${this.onPointerDown}
      >
        <div class="pba-viewport__layer">${beforeContent}</div>
        <div
          class="pba-viewport__after"
          style=${styleMap({ clipPath: `inset(0 0 0 ${pos}%)` })}
        >${afterContent}</div>
        <div
          class="pba-handle"
          style=${styleMap({ left: `${pos}%` })}
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
        .value=${String(pos)}
        aria-label=${t("تحريك المقارنة", "Move comparison")}
        @input=${this.onRangeInput}
      />
    `;
  }
  render() {
    var _a, _b;
    const c = this.config || {}, theme = readSectionTheme(c, "pba_"), title = localizedString(c.pba_title), desc = localizedString(c.pba_desc), pairs = this.pairs, hasPairs = pairs.length > 0, beforeImg = hasPairs ? ((_a = pairs[this.activePair]) == null ? void 0 : _a.beforeImage) ?? "" : this.singleBefore, afterImg = hasPairs ? ((_b = pairs[this.activePair]) == null ? void 0 : _b.afterImage) ?? "" : this.singleAfter;
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("مقارنة قبل وبعد", "Before & after comparison")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="pba-shell">
            ${hasPairs && pairs.length > 1 ? html`<div class="pba-tabs" role="tablist">
                  ${pairs.map(
      (pair, i) => html`
                      <button
                        type="button"
                        class=${classMap({ "pba-tab": !0, "is-active": i === this.activePair })}
                        role="tab"
                        aria-selected=${i === this.activePair ? "true" : "false"}
                        @click=${() => this.selectPair(i)}
                      >${pair.title || `${i + 1}`}</button>
                    `
    )}
                </div>` : nothing}

            ${this.renderViewport(beforeImg, afterImg)}
          </div>

          ${renderCommerceOutcome(c, "pba_", { ready: !0 })}
        </div>
      </section>
    `;
  }
};
__name(_PartsBeforeAfter, "PartsBeforeAfter"), _PartsBeforeAfter.styles = [sharedSectionCss, componentStyles];
let PartsBeforeAfter = _PartsBeforeAfter;
__decorateClass([
  property({ type: Object })
], PartsBeforeAfter.prototype, "config");
__decorateClass([
  state()
], PartsBeforeAfter.prototype, "activePair");
__decorateClass([
  state()
], PartsBeforeAfter.prototype, "position");
bindSallaRegistration(PartsBeforeAfter);
typeof PartsBeforeAfter < "u" && PartsBeforeAfter.registerSallaComponent("salla-parts-before-after");
export {
  PartsBeforeAfter as default
};
