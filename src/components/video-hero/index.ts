import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  isTruthy,
  prefersReducedMotion,
  readSectionTheme,
  t,
  themeStyleMap,
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';
import { componentStyles } from './styles.js';
import {
  isPlayableVideo,
  resolveAlign,
  resolveMinHeight,
  resolveOverlayOpacity,
  resolvePoster,
  resolvePrimaryCta,
  resolveSecondaryCta,
  resolveVideoUrl,
  videoPlaybackFlags,
} from './utils.js';

export default class VideoHero extends LitElement {
  @property({ type: Object })
  config: Record<string, unknown> = {};

  /** Set when the <video> fails to load so we fall back to the poster image. */
  @state() private videoFailed = false;

  private boundLangHandler = () => this.requestUpdate();

  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    super.disconnectedCallback();
  }

  updated(): void {
    // Some browsers ignore the autoplay attribute on dynamically-rendered
    // videos, so nudge playback explicitly (muted autoplay is always allowed).
    const video = this.renderRoot.querySelector('video');
    if (video && video.autoplay && video.paused && !this.videoFailed) {
      video.muted = true;
      video.play().catch(() => undefined);
    }
  }

  private renderCta(label: string, link: string, variant: 'primary' | 'ghost') {
    if (!label || !link) return nothing;
    const external = isExternalUrl(link);
    return html`<a
      class=${classMap({
        'vh-btn': true,
        'vh-btn--primary': variant === 'primary',
        'vh-btn--ghost': variant === 'ghost',
      })}
      href=${link}
      target=${external ? '_blank' : nothing}
      rel=${external ? 'noopener noreferrer' : nothing}
    >
      ${label}
    </a>`;
  }

  private renderProducts() {
    const outcome = renderCommerceOutcome(this.config || {}, 'vh_', {
      ready: true,
    });
    if (outcome === nothing) return nothing;
    return html`<div class="vh-below">${outcome}</div>`;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'vh_', {
      bg: 'transparent',
      accent: '#ea580c',
      buttonBg: '#ea580c',
      buttonColor: '#ffffff',
      spaceDesktop: 0,
      spaceMobile: 0,
    });
    const badge =
      localizedString(c.vh_badge as string) || t('عرض موسم 2026', 'Season 2026 offer');
    const title =
      localizedString(c.vh_title as string) ||
      t('امنح سيارتك الأداء الذي تستحقه', 'Give your car the performance it deserves');
    const desc =
      localizedString(c.vh_desc as string) ||
      t(
        'قطع أصلية عالية الجودة مع توصيل سريع لجميع مناطق المملكة. اختر قطعتك بثقة وابدأ رحلتك بأداء أفضل.',
        'Genuine high-quality parts with fast delivery across the Kingdom. Choose with confidence and drive better.'
      );
    const videoUrl = resolveVideoUrl(c);
    const poster = resolvePoster(c);
    const playVideo =
      isPlayableVideo(videoUrl) && !prefersReducedMotion() && !this.videoFailed;
    const flags = videoPlaybackFlags(c);
    const align = resolveAlign(c);
    const primary = resolvePrimaryCta(c);
    const secondary = resolveSecondaryCta(c);
    const primaryLabel = primary.label || t('تسوق الآن', 'Shop now');
    const secondaryLabel = secondary.label || t('تصفح العروض', 'Browse offers');

    return html`
      <section
        class="fs-section vh-section"
        style=${styleMap({
          ...themeStyleMap(theme),
          '--vh-overlay': String(resolveOverlayOpacity(c)),
          '--vh-min-height': resolveMinHeight(c),
        })}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="vh-stage">
            <div class="vh-media" aria-hidden="true">
              ${playVideo
                ? html`<video
                    src=${videoUrl}
                    poster=${poster || nothing}
                    playsinline
                    ?autoplay=${flags.autoplay}
                    .muted=${flags.muted}
                    ?loop=${flags.loop}
                    preload="metadata"
                    @error=${() => (this.videoFailed = true)}
                  ></video>`
                : poster
                  ? html`<img src=${poster} alt="" loading="eager" decoding="async" />`
                  : nothing}
            </div>
            <div class="vh-overlay"></div>

            <div
              class=${classMap({
                'vh-content-wrap': true,
                'vh-content-wrap--center': align === 'center',
                'vh-content-wrap--end': align === 'end',
              })}
            >
              <div class="vh-content">
                ${badge ? html`<span class="vh-badge">${badge}</span>` : nothing}
                ${title ? html`<h1 class="vh-title">${title}</h1>` : nothing}
                ${desc ? html`<p class="vh-desc">${desc}</p>` : nothing}
                <div class="vh-actions">
                  ${this.renderCta(primaryLabel, primary.link, 'primary')}
                  ${isTruthy(c.vh_show_secondary, true)
                    ? this.renderCta(secondaryLabel, secondary.link, 'ghost')
                    : nothing}
                </div>
              </div>
            </div>
          </div>

          ${this.renderProducts()}
        </div>
      </section>
    `;
  }
}

bindSallaRegistration(
  VideoHero as unknown as CustomElementConstructor & {
    registerSallaComponent?: (tagName: string) => void;
  }
);
