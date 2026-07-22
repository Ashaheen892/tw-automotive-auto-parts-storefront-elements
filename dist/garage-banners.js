import { css as _, LitElement as w, nothing as l, html as o } from "lit";
import { property as $, state as S } from "lit/decorators.js";
import { classMap as b } from "lit/directives/class-map.js";
import { styleMap as k } from "lit/directives/style-map.js";
import { n as T, l as g, t as s, e as m, c as L, s as A, d as I, p as P, i as f, r as X, a as z, b as C } from "./registerSalla-Dct4KN_E.js";
import { r as Y } from "./commerceOutcome-B3T0_-WJ.js";
const M = _`
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
`, N = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80", U = "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80", j = "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80";
function E(h) {
  const t = T(h).map((e, a) => ({
    id: String(e.id ?? "").trim() || `banner-${a + 1}`,
    title: g(e.title),
    subtitle: g(e.subtitle) || g(e.desc),
    image: L(e.image),
    link: m(e.link) || m(e.url),
    ctaLabel: g(e.cta_label) || s("تسوق الآن", "Shop now")
  })).filter((e) => e.title || e.image);
  if (!t.length) return v();
  const i = v();
  return t.map((e, a) => ({
    ...e,
    image: e.image || i[a % i.length].image,
    title: e.title || i[a % i.length].title,
    subtitle: e.subtitle || i[a % i.length].subtitle,
    ctaLabel: e.ctaLabel || i[a % i.length].ctaLabel
  }));
}
function v() {
  return [
    {
      id: "promo-1",
      title: s("عروض قطع الغيار", "Parts deals"),
      subtitle: s("وفّر على زيوت وفلاتر أصلية", "Save on genuine oils & filters"),
      image: N,
      link: "",
      ctaLabel: s("تسوق الآن", "Shop now")
    },
    {
      id: "promo-2",
      title: s("صيانة موسمية", "Seasonal service"),
      subtitle: s("جهّز سيارتك قبل الرحلة", "Prep your car before the trip"),
      image: U,
      link: "",
      ctaLabel: s("اكتشف القطع", "Browse parts")
    },
    {
      id: "promo-3",
      title: s("وصول حديث", "Just arrived"),
      subtitle: s(
        "قطع جديدة متوافقة مع أغلب الموديلات",
        "New parts for popular models"
      ),
      image: j,
      link: "",
      ctaLabel: s("شاهد الجديد", "See new")
    }
  ];
}
var q = Object.defineProperty, y = (h, t, i, e) => {
  for (var a = void 0, n = h.length - 1, d; n >= 0; n--)
    (d = h[n]) && (a = d(t, i, a) || a);
  return a && q(t, i, a), a;
};
const B = 5e3, p = class p extends w {
  constructor() {
    super(...arguments), this.config = {}, this.activeIndex = 0, this.autoTimer = null, this.boundLangHandler = () => this.requestUpdate(), this.swipeStartX = null, this.swipeStartY = null, this.mouseStartX = null;
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler), this.syncAutoplay();
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), this.clearAutoplay(), super.disconnectedCallback();
  }
  willUpdate(t) {
    if (t.has("config")) {
      const i = this.banners;
      this.activeIndex >= i.length && (this.activeIndex = 0), this.syncAutoplay();
    }
  }
  get banners() {
    var t;
    return E((t = this.config) == null ? void 0 : t.gba_items);
  }
  clearAutoplay() {
    this.autoTimer && (clearInterval(this.autoTimer), this.autoTimer = null);
  }
  syncAutoplay() {
    this.clearAutoplay();
    const t = this.config || {};
    !I(t.gba_autoplay, !0) || P() || this.banners.length < 2 || (this.autoTimer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.banners.length;
    }, B));
  }
  goTo(t) {
    this.activeIndex = t, this.syncAutoplay();
  }
  goPrev() {
    const t = this.banners.length;
    this.goTo((this.activeIndex - 1 + t) % t);
  }
  goNext() {
    this.goTo((this.activeIndex + 1) % this.banners.length);
  }
  onTouchStart(t) {
    const i = t.touches[0];
    this.swipeStartX = i.clientX, this.swipeStartY = i.clientY, this.clearAutoplay();
  }
  onTouchEnd(t) {
    const i = this.swipeStartX, e = this.swipeStartY;
    if (this.swipeStartX = null, this.swipeStartY = null, this.syncAutoplay(), i == null || e == null) return;
    const a = t.changedTouches[0], n = a.clientX - i, d = a.clientY - e;
    if (Math.abs(n) < 45 || Math.abs(n) < Math.abs(d)) return;
    (getComputedStyle(this).direction === "rtl" ? n > 0 : n < 0) ? this.goNext() : this.goPrev();
  }
  onPointerDown(t) {
    t.pointerType !== "mouse" || t.button !== 0 || (this.mouseStartX = t.clientX, this.clearAutoplay());
  }
  onPointerUp(t) {
    if (t.pointerType !== "mouse") return;
    const i = this.mouseStartX;
    if (this.mouseStartX = null, this.syncAutoplay(), i == null) return;
    const e = t.clientX - i;
    if (Math.abs(e) < 40) return;
    (getComputedStyle(this).direction === "rtl" ? e > 0 : e < 0) ? this.goNext() : this.goPrev();
  }
  renderSlide(t, i) {
    return o`
      <div
        class=${b({ "gba-slide": !0, "gba-slide--active": i })}
        aria-hidden=${i ? "false" : "true"}
      >
        <div class=${b({ "gba-slide__bg": !0, "gba-slide__bg--empty": !t.image })}>
          ${t.image ? o`<img src=${t.image} alt="" loading="eager" decoding="async" />` : l}
        </div>
        <div class="gba-slide__overlay"></div>
        <div class="gba-slide__content">
          ${t.title ? o`<h3 class="gba-slide__title">${t.title}</h3>` : l}
          ${t.subtitle ? o`<p class="gba-slide__subtitle">${t.subtitle}</p>` : l}
          ${t.link ? o`<a
                class="gba-slide__cta"
                href=${t.link}
                target=${f(t.link) ? "_blank" : l}
                rel=${f(t.link) ? "noopener noreferrer" : l}
              >${t.ctaLabel}</a>` : l}
        </div>
      </div>
    `;
  }
  render() {
    const t = this.config || {}, i = X(t, "gba_"), e = this.banners, a = g(t.gba_title), n = g(t.gba_desc);
    if (!e.length)
      return o`<div class="fs-empty" role="status">
        ${s("أضف بانرات من إعدادات العنصر", "Add banners in element settings")}
      </div>`;
    const d = this.activeIndex < e.length ? this.activeIndex : 0, u = e.length > 1;
    return o`
      <section
        class="fs-section"
        style=${k(z(i))}
        aria-label=${a || s("عروض الورشة", "Garage promotions")}
      >
        <div class="fs-container">
          ${a || n ? o`<div class="fs-hero">
                ${a ? o`<h2 class="fs-title">${a}</h2>` : l}
                ${n ? o`<p class="fs-desc">${n}</p>` : l}
              </div>` : l}

          <div
            class="gba-shell"
            aria-live="polite"
            @touchstart=${(r) => this.onTouchStart(r)}
            @touchend=${(r) => this.onTouchEnd(r)}
            @pointerdown=${(r) => this.onPointerDown(r)}
            @pointerup=${(r) => this.onPointerUp(r)}
            @dragstart=${(r) => r.preventDefault()}
          >
            <div class="gba-track">
              ${e.map((r, x) => this.renderSlide(r, x === d))}
            </div>

            ${u ? o`
                  <button
                    type="button"
                    class="gba-nav gba-nav--prev"
                    aria-label=${s("السابق", "Previous")}
                    @click=${() => this.goPrev()}
                  >‹</button>
                  <button
                    type="button"
                    class="gba-nav gba-nav--next"
                    aria-label=${s("التالي", "Next")}
                    @click=${() => this.goNext()}
                  >›</button>
                ` : l}
          </div>

          ${Y(t, "gba_", { ready: !0 })}
        </div>
      </section>
    `;
  }
};
p.styles = [A, M];
let c = p;
y([
  $({ type: Object })
], c.prototype, "config");
y([
  S()
], c.prototype, "activeIndex");
C(c);
typeof c < "u" && c.registerSallaComponent("salla-garage-banners");
export {
  c as default
};
