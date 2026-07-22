import { css as C, LitElement as L, nothing as a, html as o } from "lit";
import { property as M, state as j } from "lit/decorators.js";
import { classMap as x } from "lit/directives/class-map.js";
import { styleMap as z } from "lit/directives/style-map.js";
import { l, e as v, c as w, d as p, g as F, s as P, i as E, r as O, t as h, p as U, a as R, b as q } from "./registerSalla-Dct4KN_E.js";
import { r as N } from "./commerceOutcome-B3T0_-WJ.js";
const T = C`
  .vh-section {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background: transparent;
  }

  .vh-section .fs-container {
    max-width: none;
    padding: 0;
  }

  .vh-stage {
    position: relative;
    display: grid;
    align-items: center;
    min-height: var(--vh-min-height, 72vh);
    overflow: hidden;
    background: #0b1220;
    color: #fff;
  }

  .vh-media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .vh-media video,
  .vh-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .vh-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      linear-gradient(
        to left,
        rgba(8, 12, 20, calc(var(--vh-overlay, 0.45) + 0.18)) 0%,
        rgba(8, 12, 20, var(--vh-overlay, 0.45)) 42%,
        rgba(8, 12, 20, 0.18) 100%
      );
  }

  :host([dir='ltr']) .vh-overlay,
  :host-context([dir='ltr']) .vh-overlay {
    background:
      linear-gradient(
        to right,
        rgba(8, 12, 20, calc(var(--vh-overlay, 0.45) + 0.18)) 0%,
        rgba(8, 12, 20, var(--vh-overlay, 0.45)) 42%,
        rgba(8, 12, 20, 0.18) 100%
      );
  }

  .vh-content-wrap {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--section-container-max, 1440px);
    margin: 0 auto;
    padding: clamp(2.5rem, 6vw, 4.5rem) var(--section-container-pad, 16px);
    display: flex;
    justify-content: flex-start;
  }

  .vh-content-wrap--center {
    justify-content: center;
    text-align: center;
  }

  .vh-content-wrap--end {
    justify-content: flex-end;
  }

  .vh-content-wrap--center .vh-content {
    align-items: center;
  }

  .vh-content-wrap--center .vh-actions {
    justify-content: center;
  }

  .vh-content {
    display: grid;
    gap: 1rem;
    width: min(100%, 36rem);
    justify-items: start;
  }

  .vh-badge {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0.28rem 0.85rem;
    border-radius: 999px;
    background: var(--accent-color, var(--fs-store-primary));
    color: #fff;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 22px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
  }

  .vh-title {
    margin: 0;
    font-size: clamp(1.75rem, 4.2vw, 3rem);
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #fff;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
  }

  .vh-desc {
    margin: 0;
    max-width: 34rem;
    font-size: clamp(0.92rem, 1.5vw, 1.05rem);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.86);
  }

  .vh-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 0.35rem;
  }

  .vh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border-radius: 999px;
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 0.2s ease, filter 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .vh-btn--primary {
    border: 1.5px solid transparent;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #fff);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
  }

  .vh-btn--primary:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  .vh-btn--ghost {
    border: 1.5px solid rgba(255, 255, 255, 0.45);
    background: rgba(15, 23, 42, 0.35);
    color: #fff;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }

  .vh-btn--ghost:hover {
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(15, 23, 42, 0.5);
    transform: translateY(-1px);
  }

  .vh-below {
    padding: var(--space-mobile, 28px) var(--section-container-pad, 16px)
      var(--space-mobile-bottom, var(--space-mobile, 28px));
    max-width: var(--section-container-max, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 960px) {
    .vh-below {
      padding-top: var(--space-desktop, 48px);
      padding-bottom: var(--space-desktop-bottom, var(--space-desktop, 48px));
    }
  }

  @media (max-width: 639px) {
    .vh-stage {
      min-height: max(var(--vh-min-height, 72vh), 420px);
      align-items: end;
    }

    .vh-content-wrap {
      padding-bottom: 2rem;
    }

    .vh-overlay {
      background: linear-gradient(
        to top,
        rgba(8, 12, 20, 0.82) 0%,
        rgba(8, 12, 20, 0.45) 48%,
        rgba(8, 12, 20, 0.2) 100%
      );
    }

    .vh-actions {
      width: 100%;
    }

    .vh-actions .vh-btn {
      flex: 1 1 calc(50% - 0.35rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vh-btn {
      transition: none !important;
    }

    .vh-btn:hover {
      transform: none;
    }
  }
`, A = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80";
function D(t) {
  return (l(t.vh_video_url) || v(t.vh_video_url) || String(t.vh_video || "").trim()).trim();
}
function G(t) {
  return w(t.vh_poster) || w(t.vh_image) || A;
}
function H(t) {
  return t ? !!(/\.(mp4|webm|ogg)(\?|$)/i.test(t) || t.includes("video") && !/youtube|youtu\.be|vimeo/i.test(t)) : !1;
}
function V(t) {
  const e = F(t.vh_align, "start").toLowerCase();
  return e === "center" || e === "middle" ? "center" : e === "end" || e === "left" ? "end" : "start";
}
function Y(t) {
  const e = Number(t.vh_overlay_opacity ?? 45);
  return Number.isFinite(e) ? Math.max(0, Math.min(85, e)) / 100 : 0.45;
}
function B(t) {
  const e = Number(t.vh_min_height ?? 72);
  return !Number.isFinite(e) || e <= 0 ? "72vh" : `${Math.max(40, Math.min(100, e))}vh`;
}
function I(t) {
  return {
    label: l(t.vh_primary_label),
    link: v(t.vh_primary_link) || v(t.vh_primary_url) || String(t.vh_primary_url || "").trim()
  };
}
function K(t) {
  return {
    label: l(t.vh_secondary_label),
    link: v(t.vh_secondary_link) || v(t.vh_secondary_url) || String(t.vh_secondary_url || "").trim()
  };
}
function J(t) {
  const e = p(t.vh_autoplay, !0);
  return {
    autoplay: e,
    muted: p(t.vh_video_muted, !0) || e,
    loop: p(t.vh_loop, !0)
  };
}
var Q = Object.defineProperty, _ = (t, e, n, s) => {
  for (var r = void 0, d = t.length - 1, c; d >= 0; d--)
    (c = t[d]) && (r = c(e, n, r) || r);
  return r && Q(e, n, r), r;
};
const u = class u extends L {
  constructor() {
    super(...arguments), this.config = {}, this.videoFailed = !1, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  updated() {
    const e = this.renderRoot.querySelector("video");
    e && e.autoplay && e.paused && !this.videoFailed && (e.muted = !0, e.play().catch(() => {
    }));
  }
  renderCta(e, n, s) {
    if (!e || !n) return a;
    const r = E(n);
    return o`<a
      class=${x({
      "vh-btn": !0,
      "vh-btn--primary": s === "primary",
      "vh-btn--ghost": s === "ghost"
    })}
      href=${n}
      target=${r ? "_blank" : a}
      rel=${r ? "noopener noreferrer" : a}
    >
      ${e}
    </a>`;
  }
  renderProducts() {
    const e = N(this.config || {}, "vh_", {
      ready: !0
    });
    return e === a ? a : o`<div class="vh-below">${e}</div>`;
  }
  render() {
    const e = this.config || {}, n = O(e, "vh_", {
      spaceDesktop: 0,
      spaceMobile: 0
    }), s = l(e.vh_badge) || h("عرض موسم 2026", "Season 2026 offer"), r = l(e.vh_title) || h("امنح سيارتك الأداء الذي تستحقه", "Give your car the performance it deserves"), d = l(e.vh_desc) || h(
      "قطع أصلية عالية الجودة مع توصيل سريع لجميع مناطق المملكة. اختر قطعتك بثقة وابدأ رحلتك بأداء أفضل.",
      "Genuine high-quality parts with fast delivery across the Kingdom. Choose with confidence and drive better."
    ), c = D(e), g = G(e), k = H(c) && !U() && !this.videoFailed, m = J(e), b = V(e), f = I(e), y = K(e), $ = f.label || h("تسوق الآن", "Shop now"), S = y.label || h("تصفح العروض", "Browse offers");
    return o`
      <section
        class="fs-section vh-section"
        style=${z({
      ...R(n),
      "--vh-overlay": String(Y(e)),
      "--vh-min-height": B(e)
    })}
        aria-label=${r}
      >
        <div class="fs-container">
          <div class="vh-stage">
            <div class="vh-media" aria-hidden="true">
              ${k ? o`<video
                    src=${c}
                    poster=${g}
                    playsinline
                    ?autoplay=${m.autoplay}
                    .muted=${m.muted}
                    ?loop=${m.loop}
                    preload="metadata"
                    @error=${() => this.videoFailed = !0}
                  ></video>` : o`<img src=${g} alt="" loading="eager" decoding="async" />`}
            </div>
            <div class="vh-overlay"></div>

            <div
              class=${x({
      "vh-content-wrap": !0,
      "vh-content-wrap--center": b === "center",
      "vh-content-wrap--end": b === "end"
    })}
            >
              <div class="vh-content">
                ${s ? o`<span class="vh-badge">${s}</span>` : a}
                ${r ? o`<h1 class="vh-title">${r}</h1>` : a}
                ${d ? o`<p class="vh-desc">${d}</p>` : a}
                <div class="vh-actions">
                  ${this.renderCta($, f.link, "primary")}
                  ${p(e.vh_show_secondary, !0) ? this.renderCta(S, y.link, "ghost") : a}
                </div>
              </div>
            </div>
          </div>

          ${this.renderProducts()}
        </div>
      </section>
    `;
  }
};
u.styles = [P, T];
let i = u;
_([
  M({ type: Object })
], i.prototype, "config");
_([
  j()
], i.prototype, "videoFailed");
q(
  i
);
typeof i < "u" && i.registerSallaComponent("salla-video-hero");
export {
  i as default
};
