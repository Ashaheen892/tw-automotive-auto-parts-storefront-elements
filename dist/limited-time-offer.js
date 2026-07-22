import { css as S, LitElement as M, nothing as s, html as i } from "lit";
import { property as C, state as x } from "lit/decorators.js";
import { classMap as U } from "lit/directives/class-map.js";
import { styleMap as z } from "lit/directives/style-map.js";
import { l as m, c as w, e as b, d as y, s as I, t as d, r as L, i as E, a as j, b as A } from "./registerSalla-Dct4KN_E.js";
import { r as D } from "./commerceOutcome-B3T0_-WJ.js";
const O = S`
  .lto-shell {
    display: grid;
    gap: 1.15rem;
  }

  .lto-panel {
    /* Dedicated dark promo surface — never derive from --text-color
       (in dark mode that token is white and would wash out the panel). */
    --lto-panel-bg: #0f172a;
    --lto-panel-bg-2: #1e293b;
    --lto-ink: #ffffff;
    --lto-ink-soft: rgba(255, 255, 255, 0.82);
    --lto-ink-faint: rgba(255, 255, 255, 0.58);

    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 1.25rem;
    align-items: stretch;
    padding: clamp(1.1rem, 2.4vw, 1.6rem);
    border-radius: var(--section-radius, 20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(
        120% 90% at 100% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        transparent 55%
      ),
      linear-gradient(145deg, var(--lto-panel-bg) 0%, var(--lto-panel-bg-2) 100%);
    color: var(--lto-ink);
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.16);
    overflow: hidden;
  }

  :host([data-fs-theme='dark']) .lto-panel {
    --lto-panel-bg: #161b22;
    --lto-panel-bg-2: #0d1117;
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
  }

  .lto-panel--image-start {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }

  .lto-panel--image-start .lto-media {
    order: -1;
  }

  .lto-copy {
    display: grid;
    gap: 0.85rem;
    align-content: center;
    padding: clamp(0.35rem, 1.5vw, 0.75rem) clamp(0.25rem, 1.2vw, 0.5rem);
    min-width: 0;
  }

  .lto-eyebrow {
    margin: 0;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 70%, #fbbf24);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .lto-title {
    margin: 0;
    font-size: clamp(1.45rem, 2.8vw, 2.15rem);
    font-weight: 900;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: var(--lto-ink);
  }

  .lto-desc {
    margin: 0;
    max-width: 38rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--lto-ink-soft);
  }

  .lto-timer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.35rem;
    margin-top: 0.15rem;
  }

  .lto-timer__unit {
    display: grid;
    gap: 0.2rem;
    justify-items: start;
    min-width: 3.25rem;
  }

  .lto-timer__value {
    font-size: clamp(1.55rem, 3vw, 2rem);
    font-weight: 900;
    line-height: 1;
    color: var(--lto-ink);
    font-variant-numeric: tabular-nums;
  }

  .lto-timer__label {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--lto-ink-faint);
  }

  .lto-ended {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, #fff);
  }

  .lto-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  .lto-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border-radius: 999px;
    border: 1.5px solid transparent;
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: var(--button-color, #ffffff);
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
  }

  .lto-cta:hover {
    filter: brightness(1.04);
    transform: translateY(-1px);
  }

  .lto-media {
    position: relative;
    min-height: 260px;
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    overflow: hidden;
    background: color-mix(in srgb, #0f172a 70%, #334155);
  }

  .lto-media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 260px;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  .lto-panel:hover .lto-media img {
    transform: scale(1.03);
  }

  @media (max-width: 899px) {
    .lto-panel,
    .lto-panel--image-start {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .lto-panel--image-start .lto-media {
      order: 0;
    }

    .lto-media {
      min-height: 220px;
      order: -1;
    }

    .lto-media img {
      min-height: 220px;
      aspect-ratio: 16 / 10;
    }

    .lto-copy {
      padding: 0.15rem 0.1rem 0.35rem;
    }
  }

  @media (max-width: 639px) {
    .lto-timer {
      gap: 0.85rem 1.1rem;
    }

    .lto-timer__unit {
      min-width: 2.75rem;
    }

    .lto-timer__value {
      font-size: 1.35rem;
    }

    .lto-actions .lto-cta {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .lto-cta,
    .lto-media img {
      transition: none !important;
    }

    .lto-panel:hover .lto-media img {
      transform: none;
    }
  }
`, H = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80";
function _(e) {
  const t = m(e).trim();
  if (!t) return null;
  const r = new Date(t);
  return Number.isFinite(r.getTime()) ? r : null;
}
function P(e, t = /* @__PURE__ */ new Date()) {
  const r = Math.max(0, e.getTime() - t.getTime()), a = Math.floor(r / 1e3), o = Math.floor(a / 86400), n = Math.floor(a % 86400 / 3600), c = Math.floor(a % 3600 / 60), f = a % 60;
  return { days: o, hours: n, minutes: c, seconds: f, totalMs: r };
}
function G(e) {
  return w(e.lto_image) || w(e.lto_media) || H;
}
function q(e) {
  return b(e.lto_cta_link) || b(e.lto_link);
}
function h(e, t, r = !0) {
  return y(e[t], r);
}
function F(e) {
  const t = String(e.lto_image_side || e.lto_media_side || "end").toLowerCase();
  return t === "start" || t === "left" || t === "begin";
}
var N = Object.defineProperty, g = (e, t, r, a) => {
  for (var o = void 0, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (o = c(t, r, o) || o);
  return o && N(t, r, o), o;
};
const u = class u extends M {
  constructor() {
    super(...arguments), this.config = {}, this.countdown = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0
    }, this.ended = !1, this.timerId = null, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler), this.syncTimer();
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), this.clearTimer(), super.disconnectedCallback();
  }
  willUpdate(t) {
    t.has("config") && this.syncTimer();
  }
  clearTimer() {
    this.timerId != null && (clearInterval(this.timerId), this.timerId = null);
  }
  syncTimer() {
    var a;
    this.clearTimer();
    const t = _((a = this.config) == null ? void 0 : a.lto_ends_at);
    if (!t) {
      this.ended = !1, this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
      return;
    }
    const r = () => {
      const o = P(t);
      this.countdown = o, this.ended = o.totalMs <= 0, this.ended && this.clearTimer();
    };
    r(), this.ended || (this.timerId = setInterval(r, 1e3));
  }
  renderTimerUnit(t, r, a, o) {
    return o ? i`
      <div class="lto-timer__unit" role="listitem">
        <span class="lto-timer__value" aria-hidden="true">${String(t).padStart(2, "0")}</span>
        <span class="lto-timer__label">${d(r, a)}</span>
      </div>
    ` : s;
  }
  renderProducts() {
    return D(this.config || {}, "lto_", { ready: !0 });
  }
  render() {
    const t = this.config || {}, r = L(t, "lto_"), a = m(t.lto_eyebrow) || d("عرض موسم 2026", "Season 2026 offer"), o = m(t.lto_title) || d("امنح سيارتك الأداء الذي تستحقه", "Give your car the performance it deserves"), n = m(t.lto_desc) || d(
      "احصل على مجموعة غسيل وتلميع وحماية كاملة بسعر خاص لفترة محدودة. منتجات عالمية تحافظ على طلاء سيارتك.",
      "Get a complete wash, polish, and protection package at a special limited-time price."
    ), c = G(t), f = m(t.lto_cta_label) || d("عرض الآن", "View now"), p = q(t), k = y(t.lto_show_cta, !0) && !!p, $ = !!_(t.lto_ends_at), T = F(t), v = p ? E(p) : !1;
    return i`
      <section
        class="fs-section"
        style=${z(j(r))}
        aria-label=${o}
      >
        <div class="fs-container">
          <div class="lto-shell">
            <div
              class=${U({
      "lto-panel": !0,
      "lto-panel--image-start": T
    })}
            >
              <div class="lto-copy">
                ${a ? i`<p class="lto-eyebrow">${a}</p>` : s}
                ${o ? i`<h2 class="lto-title">${o}</h2>` : s}
                ${n ? i`<p class="lto-desc">${n}</p>` : s}

                ${$ ? this.ended ? i`<p class="lto-ended" role="status">
                        ${d("انتهى العرض", "Offer ended")}
                      </p>` : i`<div
                        class="lto-timer"
                        role="timer"
                        aria-label=${d("العد التنازلي للعرض", "Offer countdown")}
                      >
                        ${this.renderTimerUnit(
      this.countdown.days,
      "يوم",
      "Days",
      h(t, "lto_show_days")
    )}
                        ${this.renderTimerUnit(
      this.countdown.hours,
      "ساعة",
      "Hours",
      h(t, "lto_show_hours")
    )}
                        ${this.renderTimerUnit(
      this.countdown.minutes,
      "دقيقة",
      "Minutes",
      h(t, "lto_show_minutes")
    )}
                        ${this.renderTimerUnit(
      this.countdown.seconds,
      "ثانية",
      "Seconds",
      h(t, "lto_show_seconds")
    )}
                      </div>` : s}

                ${k ? i`<div class="lto-actions">
                      <a
                        class="lto-cta"
                        href=${p}
                        target=${v ? "_blank" : s}
                        rel=${v ? "noopener noreferrer" : s}
                      >
                        ${f}
                      </a>
                    </div>` : s}
              </div>

              <div class="lto-media" aria-hidden=${"false"}>
                ${i`<img src=${c} alt="" loading="lazy" decoding="async" />`}
              </div>
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
};
u.styles = [I, O];
let l = u;
g([
  C({ type: Object })
], l.prototype, "config");
g([
  x()
], l.prototype, "countdown");
g([
  x()
], l.prototype, "ended");
A(
  l
);
typeof l < "u" && l.registerSallaComponent("salla-limited-time-offer");
export {
  l as default
};
