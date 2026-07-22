var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, e as extractLink, c as extractImageUrl, d as isTruthy, g as getRadioValue, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, t, p as prefersReducedMotion, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, DEFAULT_POSTER = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80";
function resolveVideoUrl(config) {
  return (localizedString(config.vh_video_url) || extractLink(config.vh_video_url) || String(config.vh_video || "").trim()).trim();
}
__name(resolveVideoUrl, "resolveVideoUrl");
function resolvePoster(config) {
  return extractImageUrl(config.vh_poster) || extractImageUrl(config.vh_image) || DEFAULT_POSTER;
}
__name(resolvePoster, "resolvePoster");
function isPlayableVideo(url) {
  return url ? !!(/\.(mp4|webm|ogg)(\?|$)/i.test(url) || url.includes("video") && !/youtube|youtu\.be|vimeo/i.test(url)) : !1;
}
__name(isPlayableVideo, "isPlayableVideo");
function resolveAlign(config) {
  const raw = getRadioValue(config.vh_align, "start").toLowerCase();
  return raw === "center" || raw === "middle" ? "center" : raw === "end" || raw === "left" ? "end" : "start";
}
__name(resolveAlign, "resolveAlign");
function resolveOverlayOpacity(config) {
  const n = Number(config.vh_overlay_opacity ?? 45);
  return Number.isFinite(n) ? Math.max(0, Math.min(85, n)) / 100 : 0.45;
}
__name(resolveOverlayOpacity, "resolveOverlayOpacity");
function resolveMinHeight(config) {
  const n = Number(config.vh_min_height ?? 72);
  return !Number.isFinite(n) || n <= 0 ? "72vh" : `${Math.max(40, Math.min(100, n))}vh`;
}
__name(resolveMinHeight, "resolveMinHeight");
function resolvePrimaryCta(config) {
  return {
    label: localizedString(config.vh_primary_label),
    link: extractLink(config.vh_primary_link) || extractLink(config.vh_primary_url) || String(config.vh_primary_url || "").trim()
  };
}
__name(resolvePrimaryCta, "resolvePrimaryCta");
function resolveSecondaryCta(config) {
  return {
    label: localizedString(config.vh_secondary_label),
    link: extractLink(config.vh_secondary_link) || extractLink(config.vh_secondary_url) || String(config.vh_secondary_url || "").trim()
  };
}
__name(resolveSecondaryCta, "resolveSecondaryCta");
function videoPlaybackFlags(config) {
  const autoplay = isTruthy(config.vh_autoplay, !0);
  return {
    autoplay,
    muted: isTruthy(config.vh_video_muted, !0) || autoplay,
    loop: isTruthy(config.vh_loop, !0)
  };
}
__name(videoPlaybackFlags, "videoPlaybackFlags");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _VideoHero = class _VideoHero extends LitElement {
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
    const video = this.renderRoot.querySelector("video");
    video && video.autoplay && video.paused && !this.videoFailed && (video.muted = !0, video.play().catch(() => {
    }));
  }
  renderCta(label, link, variant) {
    if (!label || !link) return nothing;
    const external = isExternalUrl(link);
    return html`<a
      class=${classMap({
      "vh-btn": !0,
      "vh-btn--primary": variant === "primary",
      "vh-btn--ghost": variant === "ghost"
    })}
      href=${link}
      target=${external ? "_blank" : nothing}
      rel=${external ? "noopener noreferrer" : nothing}
    >
      ${label}
    </a>`;
  }
  renderProducts() {
    const outcome = renderCommerceOutcome(this.config || {}, "vh_", {
      ready: !0
    });
    return outcome === nothing ? nothing : html`<div class="vh-below">${outcome}</div>`;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "vh_", {
      spaceDesktop: 0,
      spaceMobile: 0
    }), badge = localizedString(c.vh_badge) || t("عرض موسم 2026", "Season 2026 offer"), title = localizedString(c.vh_title) || t("امنح سيارتك الأداء الذي تستحقه", "Give your car the performance it deserves"), desc = localizedString(c.vh_desc) || t(
      "قطع أصلية عالية الجودة مع توصيل سريع لجميع مناطق المملكة. اختر قطعتك بثقة وابدأ رحلتك بأداء أفضل.",
      "Genuine high-quality parts with fast delivery across the Kingdom. Choose with confidence and drive better."
    ), videoUrl = resolveVideoUrl(c), poster = resolvePoster(c), playVideo = isPlayableVideo(videoUrl) && !prefersReducedMotion() && !this.videoFailed, flags = videoPlaybackFlags(c), align = resolveAlign(c), primary = resolvePrimaryCta(c), secondary = resolveSecondaryCta(c), primaryLabel = primary.label || t("تسوق الآن", "Shop now"), secondaryLabel = secondary.label || t("تصفح العروض", "Browse offers");
    return html`
      <section
        class="fs-section vh-section"
        style=${styleMap({
      ...themeStyleMap(theme),
      "--vh-overlay": String(resolveOverlayOpacity(c)),
      "--vh-min-height": resolveMinHeight(c)
    })}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="vh-stage">
            <div class="vh-media" aria-hidden="true">
              ${playVideo ? html`<video
                    src=${videoUrl}
                    poster=${poster}
                    playsinline
                    ?autoplay=${flags.autoplay}
                    .muted=${flags.muted}
                    ?loop=${flags.loop}
                    preload="metadata"
                    @error=${() => this.videoFailed = !0}
                  ></video>` : html`<img src=${poster} alt="" loading="eager" decoding="async" />`}
            </div>
            <div class="vh-overlay"></div>

            <div
              class=${classMap({
      "vh-content-wrap": !0,
      "vh-content-wrap--center": align === "center",
      "vh-content-wrap--end": align === "end"
    })}
            >
              <div class="vh-content">
                ${badge ? html`<span class="vh-badge">${badge}</span>` : nothing}
                ${title ? html`<h1 class="vh-title">${title}</h1>` : nothing}
                ${desc ? html`<p class="vh-desc">${desc}</p>` : nothing}
                <div class="vh-actions">
                  ${this.renderCta(primaryLabel, primary.link, "primary")}
                  ${isTruthy(c.vh_show_secondary, !0) ? this.renderCta(secondaryLabel, secondary.link, "ghost") : nothing}
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
__name(_VideoHero, "VideoHero"), _VideoHero.styles = [sharedSectionCss, componentStyles];
let VideoHero = _VideoHero;
__decorateClass([
  property({ type: Object })
], VideoHero.prototype, "config");
__decorateClass([
  state()
], VideoHero.prototype, "videoFailed");
bindSallaRegistration(
  VideoHero
);
typeof VideoHero < "u" && VideoHero.registerSallaComponent("salla-video-hero");
export {
  VideoHero as default
};
