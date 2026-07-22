var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, c as extractImageUrl, e as extractLink, d as isTruthy, s as sharedSectionCss, t, r as readSectionTheme, i as isExternalUrl, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, DEFAULT_IMAGE = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80";
function parseEndsAt(raw) {
  const str = localizedString(raw).trim();
  if (!str) return null;
  const parsed = new Date(str);
  return Number.isFinite(parsed.getTime()) ? parsed : null;
}
__name(parseEndsAt, "parseEndsAt");
function getCountdown(target, now = /* @__PURE__ */ new Date()) {
  const totalMs = Math.max(0, target.getTime() - now.getTime()), totalSec = Math.floor(totalMs / 1e3), days = Math.floor(totalSec / 86400), hours = Math.floor(totalSec % 86400 / 3600), minutes = Math.floor(totalSec % 3600 / 60), seconds = totalSec % 60;
  return { days, hours, minutes, seconds, totalMs };
}
__name(getCountdown, "getCountdown");
function resolveOfferImage(config) {
  return extractImageUrl(config.lto_image) || extractImageUrl(config.lto_media) || DEFAULT_IMAGE;
}
__name(resolveOfferImage, "resolveOfferImage");
function resolveCtaLink(config) {
  return extractLink(config.lto_cta_link) || extractLink(config.lto_link);
}
__name(resolveCtaLink, "resolveCtaLink");
function showTimerUnit(config, key, fallback = !0) {
  return isTruthy(config[key], fallback);
}
__name(showTimerUnit, "showTimerUnit");
function imageOnStart(config) {
  const raw = String(config.lto_image_side || config.lto_media_side || "end").toLowerCase();
  return raw === "start" || raw === "left" || raw === "begin";
}
__name(imageOnStart, "imageOnStart");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _LimitedTimeOffer = class _LimitedTimeOffer extends LitElement {
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
  willUpdate(changed) {
    changed.has("config") && this.syncTimer();
  }
  clearTimer() {
    this.timerId != null && (clearInterval(this.timerId), this.timerId = null);
  }
  syncTimer() {
    var _a;
    this.clearTimer();
    const endsAt = parseEndsAt((_a = this.config) == null ? void 0 : _a.lto_ends_at);
    if (!endsAt) {
      this.ended = !1, this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
      return;
    }
    const tick = /* @__PURE__ */ __name(() => {
      const parts = getCountdown(endsAt);
      this.countdown = parts, this.ended = parts.totalMs <= 0, this.ended && this.clearTimer();
    }, "tick");
    tick(), this.ended || (this.timerId = setInterval(tick, 1e3));
  }
  renderTimerUnit(value, labelAr, labelEn, show) {
    return show ? html`
      <div class="lto-timer__unit" role="listitem">
        <span class="lto-timer__value" aria-hidden="true">${String(value).padStart(2, "0")}</span>
        <span class="lto-timer__label">${t(labelAr, labelEn)}</span>
      </div>
    ` : nothing;
  }
  renderProducts() {
    return renderCommerceOutcome(this.config || {}, "lto_", { ready: !0 });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "lto_"), eyebrow = localizedString(c.lto_eyebrow) || t("عرض موسم 2026", "Season 2026 offer"), title = localizedString(c.lto_title) || t("امنح سيارتك الأداء الذي تستحقه", "Give your car the performance it deserves"), desc = localizedString(c.lto_desc) || t(
      "احصل على مجموعة غسيل وتلميع وحماية كاملة بسعر خاص لفترة محدودة. منتجات عالمية تحافظ على طلاء سيارتك.",
      "Get a complete wash, polish, and protection package at a special limited-time price."
    ), image = resolveOfferImage(c), ctaLabel = localizedString(c.lto_cta_label) || t("عرض الآن", "View now"), ctaLink = resolveCtaLink(c), showCta = isTruthy(c.lto_show_cta, !0) && !!ctaLink, hasEndsAt = !!parseEndsAt(c.lto_ends_at), mediaStart = imageOnStart(c), external = ctaLink ? isExternalUrl(ctaLink) : !1;
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="lto-shell">
            <div
              class=${classMap({
      "lto-panel": !0,
      "lto-panel--image-start": mediaStart
    })}
            >
              <div class="lto-copy">
                ${eyebrow ? html`<p class="lto-eyebrow">${eyebrow}</p>` : nothing}
                ${title ? html`<h2 class="lto-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="lto-desc">${desc}</p>` : nothing}

                ${hasEndsAt ? this.ended ? html`<p class="lto-ended" role="status">
                        ${t("انتهى العرض", "Offer ended")}
                      </p>` : html`<div
                        class="lto-timer"
                        role="timer"
                        aria-label=${t("العد التنازلي للعرض", "Offer countdown")}
                      >
                        ${this.renderTimerUnit(
      this.countdown.days,
      "يوم",
      "Days",
      showTimerUnit(c, "lto_show_days")
    )}
                        ${this.renderTimerUnit(
      this.countdown.hours,
      "ساعة",
      "Hours",
      showTimerUnit(c, "lto_show_hours")
    )}
                        ${this.renderTimerUnit(
      this.countdown.minutes,
      "دقيقة",
      "Minutes",
      showTimerUnit(c, "lto_show_minutes")
    )}
                        ${this.renderTimerUnit(
      this.countdown.seconds,
      "ثانية",
      "Seconds",
      showTimerUnit(c, "lto_show_seconds")
    )}
                      </div>` : nothing}

                ${showCta ? html`<div class="lto-actions">
                      <a
                        class="lto-cta"
                        href=${ctaLink}
                        target=${external ? "_blank" : nothing}
                        rel=${external ? "noopener noreferrer" : nothing}
                      >
                        ${ctaLabel}
                      </a>
                    </div>` : nothing}
              </div>

              <div class="lto-media" aria-hidden=${"false"}>
                ${html`<img src=${image} alt="" loading="lazy" decoding="async" />`}
              </div>
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_LimitedTimeOffer, "LimitedTimeOffer"), _LimitedTimeOffer.styles = [sharedSectionCss, componentStyles];
let LimitedTimeOffer = _LimitedTimeOffer;
__decorateClass([
  property({ type: Object })
], LimitedTimeOffer.prototype, "config");
__decorateClass([
  state()
], LimitedTimeOffer.prototype, "countdown");
__decorateClass([
  state()
], LimitedTimeOffer.prototype, "ended");
bindSallaRegistration(
  LimitedTimeOffer
);
typeof LimitedTimeOffer < "u" && LimitedTimeOffer.registerSallaComponent("salla-limited-time-offer");
export {
  LimitedTimeOffer as default
};
