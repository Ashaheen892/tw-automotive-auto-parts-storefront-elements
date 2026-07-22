var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, t, e as extractLink, c as extractImageUrl, s as sharedSectionCss, d as isTruthy, p as prefersReducedMotion, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .gba-shell {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #0f172a;
    /* Allow vertical page scroll while capturing horizontal swipes */
    touch-action: pan-y;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
  }

  .gba-shell:active {
    cursor: grabbing;
  }

  /* ── Slides stack in one grid cell and cross-fade ── */
  .gba-track {
    display: grid;
  }

  .gba-slide {
    grid-area: 1 / 1;
    position: relative;
    min-height: 320px;
    display: grid;
    align-items: end;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .gba-slide--active {
    opacity: 1;
    visibility: visible;
  }

  .gba-slide__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .gba-slide__bg img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gba-slide__bg--empty {
    background: linear-gradient(135deg, #1e293b, #0f172a 70%);
  }

  .gba-slide__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
    z-index: 1;
  }

  .gba-slide__content {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 0.65rem;
    padding: 2rem 1.75rem;
    width: min(100%, 52rem);
  }

  .gba-slide__title {
    margin: 0;
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.2;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .gba-slide__subtitle {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .gba-slide__cta {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border: 1.5px solid transparent;
    border-radius: 999px;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #fff);
    font: inherit;
    font-weight: 700;
    font-size: 0.92rem;
    line-height: 1.2;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 8px 20px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
    transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .gba-slide__cta:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
    box-shadow: 0 12px 26px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 34%, transparent);
  }

  /* ── Navigation ── */
  .gba-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }

  .gba-nav:hover {
    background: var(--accent-color, #ea580c);
    border-color: var(--accent-color, #ea580c);
  }

  .gba-nav--prev {
    inset-inline-start: 0.85rem;
  }

  .gba-nav--next {
    inset-inline-end: 0.85rem;
  }

  .gba-nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 639px) {
    .gba-slide {
      min-height: 260px;
    }

    .gba-slide__content {
      padding: 1.25rem 1rem;
    }

    .gba-nav {
      width: 2.2rem;
      height: 2.2rem;
      font-size: 0.95rem;
    }

    .gba-nav--prev {
      inset-inline-start: 0.45rem;
    }

    .gba-nav--next {
      inset-inline-end: 0.45rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gba-slide,
    .gba-slide__cta,
    .gba-nav {
      transition: none !important;
    }
  }
`, B1 = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80", B2 = "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80", B3 = "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80";
function parseBanners(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => ({
    id: String(row.id ?? "").trim() || `banner-${i + 1}`,
    title: localizedString(row.title),
    subtitle: localizedString(row.subtitle) || localizedString(row.desc),
    image: extractImageUrl(row.image),
    link: extractLink(row.link) || extractLink(row.url),
    ctaLabel: localizedString(row.cta_label) || t("تسوق الآن", "Shop now")
  })).filter((b) => b.title || b.image);
  if (!parsed.length) return defaultBanners();
  const defaults = defaultBanners();
  return parsed.map((b, i) => ({
    ...b,
    image: b.image || defaults[i % defaults.length].image,
    title: b.title || defaults[i % defaults.length].title,
    subtitle: b.subtitle || defaults[i % defaults.length].subtitle,
    ctaLabel: b.ctaLabel || defaults[i % defaults.length].ctaLabel
  }));
}
__name(parseBanners, "parseBanners");
function defaultBanners() {
  return [
    {
      id: "promo-1",
      title: t("عروض قطع الغيار", "Parts deals"),
      subtitle: t("وفّر على زيوت وفلاتر أصلية", "Save on genuine oils & filters"),
      image: B1,
      link: "",
      ctaLabel: t("تسوق الآن", "Shop now")
    },
    {
      id: "promo-2",
      title: t("صيانة موسمية", "Seasonal service"),
      subtitle: t("جهّز سيارتك قبل الرحلة", "Prep your car before the trip"),
      image: B2,
      link: "",
      ctaLabel: t("اكتشف القطع", "Browse parts")
    },
    {
      id: "promo-3",
      title: t("وصول حديث", "Just arrived"),
      subtitle: t(
        "قطع جديدة متوافقة مع أغلب الموديلات",
        "New parts for popular models"
      ),
      image: B3,
      link: "",
      ctaLabel: t("شاهد الجديد", "See new")
    }
  ];
}
__name(defaultBanners, "defaultBanners");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const AUTOPLAY_MS = 5e3, _GarageBanners = class _GarageBanners extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeIndex = 0, this.autoTimer = null, this.boundLangHandler = () => this.requestUpdate(), this.swipeStartX = null, this.swipeStartY = null, this.mouseStartX = null;
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler), this.syncAutoplay();
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), this.clearAutoplay(), super.disconnectedCallback();
  }
  willUpdate(changed) {
    if (changed.has("config")) {
      const banners = this.banners;
      this.activeIndex >= banners.length && (this.activeIndex = 0), this.syncAutoplay();
    }
  }
  get banners() {
    var _a;
    return parseBanners((_a = this.config) == null ? void 0 : _a.gba_items);
  }
  clearAutoplay() {
    this.autoTimer && (clearInterval(this.autoTimer), this.autoTimer = null);
  }
  syncAutoplay() {
    this.clearAutoplay();
    const c = this.config || {};
    !isTruthy(c.gba_autoplay, !0) || prefersReducedMotion() || this.banners.length < 2 || (this.autoTimer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.banners.length;
    }, AUTOPLAY_MS));
  }
  goTo(index) {
    this.activeIndex = index, this.syncAutoplay();
  }
  goPrev() {
    const total = this.banners.length;
    this.goTo((this.activeIndex - 1 + total) % total);
  }
  goNext() {
    this.goTo((this.activeIndex + 1) % this.banners.length);
  }
  onTouchStart(e) {
    const touch = e.touches[0];
    this.swipeStartX = touch.clientX, this.swipeStartY = touch.clientY, this.clearAutoplay();
  }
  onTouchEnd(e) {
    const startX = this.swipeStartX, startY = this.swipeStartY;
    if (this.swipeStartX = null, this.swipeStartY = null, this.syncAutoplay(), startX == null || startY == null) return;
    const touch = e.changedTouches[0], dx = touch.clientX - startX, dy = touch.clientY - startY;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    (getComputedStyle(this).direction === "rtl" ? dx > 0 : dx < 0) ? this.goNext() : this.goPrev();
  }
  onPointerDown(e) {
    e.pointerType !== "mouse" || e.button !== 0 || (this.mouseStartX = e.clientX, this.clearAutoplay());
  }
  onPointerUp(e) {
    if (e.pointerType !== "mouse") return;
    const startX = this.mouseStartX;
    if (this.mouseStartX = null, this.syncAutoplay(), startX == null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    (getComputedStyle(this).direction === "rtl" ? dx > 0 : dx < 0) ? this.goNext() : this.goPrev();
  }
  renderSlide(banner, active) {
    return html`
      <div
        class=${classMap({ "gba-slide": !0, "gba-slide--active": active })}
        aria-hidden=${active ? "false" : "true"}
      >
        <div class=${classMap({ "gba-slide__bg": !0, "gba-slide__bg--empty": !banner.image })}>
          ${banner.image ? html`<img src=${banner.image} alt="" loading="eager" decoding="async" />` : nothing}
        </div>
        <div class="gba-slide__overlay"></div>
        <div class="gba-slide__content">
          ${banner.title ? html`<h3 class="gba-slide__title">${banner.title}</h3>` : nothing}
          ${banner.subtitle ? html`<p class="gba-slide__subtitle">${banner.subtitle}</p>` : nothing}
          ${banner.link ? html`<a
                class="gba-slide__cta"
                href=${banner.link}
                target=${isExternalUrl(banner.link) ? "_blank" : nothing}
                rel=${isExternalUrl(banner.link) ? "noopener noreferrer" : nothing}
              >${banner.ctaLabel}</a>` : nothing}
        </div>
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "gba_"), banners = this.banners, title = localizedString(c.gba_title), desc = localizedString(c.gba_desc);
    if (!banners.length)
      return html`<div class="fs-empty" role="status">
        ${t("أضف بانرات من إعدادات العنصر", "Add banners in element settings")}
      </div>`;
    const activeIndex = this.activeIndex < banners.length ? this.activeIndex : 0, multi = banners.length > 1;
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("عروض الورشة", "Garage promotions")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div
            class="gba-shell"
            aria-live="polite"
            @touchstart=${(e) => this.onTouchStart(e)}
            @touchend=${(e) => this.onTouchEnd(e)}
            @pointerdown=${(e) => this.onPointerDown(e)}
            @pointerup=${(e) => this.onPointerUp(e)}
            @dragstart=${(e) => e.preventDefault()}
          >
            <div class="gba-track">
              ${banners.map((banner, i) => this.renderSlide(banner, i === activeIndex))}
            </div>

            ${multi ? html`
                  <button
                    type="button"
                    class="gba-nav gba-nav--prev"
                    aria-label=${t("السابق", "Previous")}
                    @click=${() => this.goPrev()}
                  >‹</button>
                  <button
                    type="button"
                    class="gba-nav gba-nav--next"
                    aria-label=${t("التالي", "Next")}
                    @click=${() => this.goNext()}
                  >›</button>
                ` : nothing}
          </div>

          ${renderCommerceOutcome(c, "gba_", { ready: !0 })}
        </div>
      </section>
    `;
  }
};
__name(_GarageBanners, "GarageBanners"), _GarageBanners.styles = [sharedSectionCss, componentStyles];
let GarageBanners = _GarageBanners;
__decorateClass([
  property({ type: Object })
], GarageBanners.prototype, "config");
__decorateClass([
  state()
], GarageBanners.prototype, "activeIndex");
bindSallaRegistration(GarageBanners);
typeof GarageBanners < "u" && GarageBanners.registerSallaComponent("salla-garage-banners");
export {
  GarageBanners as default
};
