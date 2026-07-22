import { css as E, LitElement as P, nothing as s, html as c } from "lit";
import { property as z, state as T } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { ref as D } from "lit/directives/ref.js";
import { styleMap as w } from "lit/directives/style-map.js";
import { g as M, n as A, l as p, e as b, c as k, k as L, f as I, d as S, t as n, s as q, i as $, r as B, a as F, b as H } from "./registerSalla-Dct4KN_E.js";
import { r as O } from "./commerceOutcome-B3T0_-WJ.js";
const j = "__fsDragScrollCleanup", R = 6;
function U(t) {
  var y;
  if (!t) return;
  const e = t;
  (y = e[j]) == null || y.call(e);
  let r = null, o = 0, a = 0, i = !1;
  const d = (l) => {
    l.pointerType !== "mouse" || l.button !== 0 || e.scrollWidth <= e.clientWidth || (r = l.pointerId, o = l.clientX, a = e.scrollLeft, i = !1, e.style.scrollSnapType = "none", e.style.cursor = "grabbing");
  }, h = (l) => {
    if (r === null || l.pointerId !== r) return;
    const m = l.clientX - o;
    if (!i && Math.abs(m) > R) {
      i = !0;
      try {
        e.setPointerCapture(r);
      } catch {
      }
    }
    i && (l.preventDefault(), e.scrollLeft = a - m);
  }, g = (l) => {
    if (!(r === null || l.pointerId !== r)) {
      if (i)
        try {
          e.releasePointerCapture(r);
        } catch {
        }
      if (r = null, e.style.scrollSnapType = "", e.style.cursor = "", i) {
        const m = (x) => {
          x.preventDefault(), x.stopPropagation();
        };
        e.addEventListener("click", m, { capture: !0, once: !0 }), window.setTimeout(() => {
          e.removeEventListener("click", m, { capture: !0 });
        }, 0);
      }
      i = !1;
    }
  }, v = (l) => {
    l.preventDefault();
  };
  e.addEventListener("pointerdown", d), e.addEventListener("pointermove", h), e.addEventListener("pointerup", g), e.addEventListener("pointercancel", g), e.addEventListener("dragstart", v, { capture: !0 }), e.style.touchAction = "pan-x pan-y", e.scrollWidth > e.clientWidth && (e.style.cursor = "grab"), e[j] = () => {
    e.removeEventListener("pointerdown", d), e.removeEventListener("pointermove", h), e.removeEventListener("pointerup", g), e.removeEventListener("pointercancel", g), e.removeEventListener("dragstart", v, { capture: !0 });
  };
}
const G = E`
  .pca-shell {
    display: grid;
    gap: 1.15rem;
  }

  .pca-toolbar {
    display: flex;
    justify-content: flex-end;
  }

  .pca-toggle {
    display: inline-flex;
    gap: 0.35rem;
    padding: 0.25rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
  }

  .pca-toggle__btn {
    min-height: 36px;
    padding: 0.35rem 0.75rem;
    border: none;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    background: transparent;
    color: var(--muted-color, #64748b);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
  }

  .pca-toggle__btn.is-active {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .pca-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(var(--pca-cols, 3), minmax(0, 1fr));
  }

  .pca-slider {
    display: flex;
    gap: 0.9rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 0.2rem;
  }

  .pca-slider::-webkit-scrollbar {
    display: none;
  }

  .pca-slider > * {
    flex: 0 0 auto;
    width: min(210px, 70vw);
    scroll-snap-align: start;
  }

  /* —— Shared image-tile card look (showcase + projects) —— */
  .pca-tile .pca-card,
  .pca-tile .pca-card--disabled {
    display: block;
    position: relative;
    height: 100%;
    min-height: 160px;
    border: 0;
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    overflow: hidden;
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
  }

  .pca-tile .pca-card__media {
    position: absolute;
    inset: 0;
    aspect-ratio: auto;
    height: 100%;
  }

  .pca-tile .pca-card__media::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(15, 23, 42, 0.72) 0%,
      rgba(15, 23, 42, 0.28) 42%,
      rgba(15, 23, 42, 0.05) 100%
    );
    pointer-events: none;
  }

  .pca-tile .pca-card__body {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    z-index: 1;
    gap: 0.25rem;
    padding: 1rem 1.05rem 1.05rem;
    background: transparent;
  }

  .pca-tile .pca-card__title {
    color: #fff;
    font-size: clamp(0.95rem, 1.4vw, 1.15rem);
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
  }

  .pca-tile .pca-card__cta {
    display: none;
  }

  .pca-tile .pca-card__desc {
    display: none;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.86rem;
    font-weight: 600;
    line-height: 1.45;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .pca-tile .pca-card--feature .pca-card__desc {
    display: block;
  }

  .pca-tile .pca-card--feature .pca-card__title {
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.25;
  }

  .pca-tile a.pca-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
  }

  .pca-tile a.pca-card:hover .pca-card__media img {
    transform: scale(1.05);
  }

  .pca-tile .pca-card__mono {
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
  }

  /* —— Showcase mosaic (center featured tile) —— */
  .pca-showcase {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: 1fr 1.2fr 1fr;
    grid-template-rows: minmax(180px, 1fr) minmax(180px, 1fr);
    min-height: min(520px, 68vw);
  }

  .pca-showcase > *:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .pca-showcase > *:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }

  .pca-showcase > *:nth-child(3) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .pca-showcase > *:nth-child(4) {
    grid-column: 3;
    grid-row: 1;
  }

  .pca-showcase > *:nth-child(5) {
    grid-column: 3;
    grid-row: 2;
  }

  .pca-showcase > * {
    min-height: 0;
  }

  /* —— Projects mosaic (2×2 + tall side feature) —— */
  .pca-projects {
    display: grid;
    gap: 0.9rem;
    /* Lock visual order like reference: stack left, feature right */
    direction: ltr;
    grid-template-columns: 1.45fr 1fr;
    grid-template-rows: minmax(200px, 1fr) minmax(200px, 1fr);
    min-height: min(520px, 70vw);
  }

  .pca-projects__stack {
    /* Keep card text RTL while mosaic columns stay LTR like the reference */
    direction: rtl;
    grid-column: 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.9rem;
    min-height: 0;
  }

  .pca-projects__feature {
    direction: rtl;
    grid-column: 2;
    grid-row: 1 / span 2;
    min-height: 0;
  }

  :host([dir='ltr']) .pca-projects__stack,
  :host([dir='ltr']) .pca-projects__feature,
  :host-context([dir='ltr']) .pca-projects__stack,
  :host-context([dir='ltr']) .pca-projects__feature {
    direction: ltr;
  }

  .pca-projects__stack > *,
  .pca-projects__feature {
    min-height: 0;
  }

  .pca-projects .pca-card,
  .pca-projects .pca-card--disabled {
    min-height: 150px;
  }

  .pca-footer-link {
    display: flex;
    justify-content: center;
    margin-top: 0.35rem;
  }

  .pca-footer-link a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 44px;
    padding: 0.35rem 0.25rem;
    color: var(--accent-color, var(--fs-store-primary));
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    border-bottom: 2px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    transition: border-color 0.2s ease, gap 0.2s ease;
  }

  .pca-footer-link a:hover {
    border-bottom-color: var(--accent-color, var(--fs-store-primary));
    gap: 0.5rem;
  }

  .pca-footer-link a::after {
    content: '←';
  }

  :host([dir='ltr']) .pca-footer-link a::after,
  :host-context([dir='ltr']) .pca-footer-link a::after {
    content: '→';
  }

  .pca-showcase-rest {
    margin-top: 0.15rem;
  }

  /* —— Standard grid / slider cards —— */
  .pca-card {
    display: grid;
    height: 100%;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  a.pca-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
  }

  a.pca-card:hover .pca-card__cta {
    gap: 0.45rem;
  }

  a.pca-card:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .pca-card--disabled {
    opacity: 0.72;
    cursor: default;
  }

  .pca-card__media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: linear-gradient(
      145deg,
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 16%, var(--card-bg, #fff)),
      color-mix(in srgb, var(--border-color, #d9e2ec) 35%, var(--card-bg, #fff))
    );
  }

  .pca-card__media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  a.pca-card:hover .pca-card__media img {
    transform: scale(1.04);
  }

  .pca-card__mono {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 900;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 75%, var(--text-color, #111827));
  }

  .pca-card__body {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    padding: 0.9rem 0.95rem 1.05rem;
  }

  .pca-card__title {
    margin: 0;
    font-size: 0.98rem;
    font-weight: 900;
    line-height: 1.35;
    color: var(--text-color, #111827);
  }

  .pca-card__desc {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--muted-color, #64748b);
  }

  .pca-card__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    transition: gap 0.2s ease;
  }

  .pca-card__cta::after {
    content: '←';
    font-size: 0.85rem;
    line-height: 1;
  }

  :host([dir='ltr']) .pca-card__cta::after,
  :host-context([dir='ltr']) .pca-card__cta::after {
    content: '→';
  }

  .pca-card--disabled .pca-card__cta {
    color: var(--muted-color, #64748b);
  }

  .pca-card--disabled .pca-card__cta::after {
    content: '';
  }

  @media (max-width: 899px) {
    .pca-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .pca-showcase {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      min-height: 0;
    }

    .pca-showcase > *:nth-child(1),
    .pca-showcase > *:nth-child(2),
    .pca-showcase > *:nth-child(3),
    .pca-showcase > *:nth-child(4),
    .pca-showcase > *:nth-child(5) {
      grid-column: auto;
      grid-row: auto;
    }

    .pca-showcase > *:nth-child(3) {
      grid-column: 1 / -1;
      min-height: 240px;
    }

    .pca-projects {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      min-height: 0;
    }

    .pca-projects__stack,
    .pca-projects__feature {
      grid-column: auto;
      grid-row: auto;
    }

    .pca-projects__feature {
      min-height: 260px;
      order: -1;
    }

    .pca-tile .pca-card,
    .pca-tile .pca-card--disabled {
      min-height: 180px;
    }
  }

  @media (max-width: 639px) {
    .pca-shell {
      gap: 0.85rem;
    }

    .pca-toolbar {
      justify-content: stretch;
    }

    .pca-toggle {
      width: 100%;
      flex-wrap: wrap;
    }

    .pca-toggle__btn {
      flex: 1 1 calc(50% - 0.35rem);
      min-height: 40px;
    }

    .pca-grid,
    .pca-showcase {
      gap: 0.7rem;
      grid-template-columns: 1fr;
    }

    .pca-showcase > *:nth-child(3) {
      grid-column: auto;
      min-height: 220px;
    }

    .pca-projects__stack {
      grid-template-columns: 1fr;
    }

    .pca-projects__feature {
      min-height: 220px;
    }

    .pca-card__body {
      padding: 0.75rem 0.8rem 0.9rem;
    }

    .pca-card__title {
      font-size: 0.9rem;
    }

    .pca-tile .pca-card__body {
      padding: 0.85rem 0.9rem 0.95rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pca-card,
    .pca-card__media img,
    .pca-card__cta,
    .pca-footer-link a {
      transition: none !important;
    }
  }
`, W = [
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
], X = [
  {
    ar: "زيوت ومحركات",
    en: "Oil & Engines",
    dar: "زيوت، فلاتر زيت، وإضافات المحرك",
    den: "Oils, oil filters, and engine additives"
  },
  {
    ar: "فرامل",
    en: "Brakes",
    dar: "فحمات، أقراص، ووسائل فرامل",
    den: "Pads, rotors, and brake fluid"
  },
  {
    ar: "فلاتر",
    en: "Filters",
    dar: "هواء، وقود، ومكيف",
    den: "Air, fuel, and cabin filters"
  },
  {
    ar: "بطاريات",
    en: "Batteries",
    dar: "بطاريات وشواحن",
    den: "Batteries and chargers"
  },
  {
    ar: "قطع أصلية لسيارتك",
    en: "Genuine parts for your car",
    dar: "نساعدك تختار القطعة المناسبة بسرعة وثقة",
    den: "Find the right part quickly and confidently"
  }
];
function Y() {
  return X.map((t, e) => {
    const r = n(t.ar, t.en);
    return {
      id: L(r, "") || `cat-${e + 1}`,
      title: r,
      desc: n(t.dar, t.den),
      image: W[e] || "",
      link: ""
    };
  });
}
function K(t) {
  const e = A(t).map((r, o) => {
    const a = p(r.title) || p(r.name);
    return a ? {
      id: String(r.id ?? "").trim() || L(a, "") || `cat-${o + 1}`,
      title: a,
      desc: p(r.desc) || p(r.description) || p(r.subtitle),
      image: k(r.image) || k(r.thumbnail),
      link: b(r.link) || b(r.url)
    } : null;
  }).filter((r) => !!r);
  return e.length ? e : Y();
}
function N(t) {
  const e = M(t.pca_layout, "projects").toLowerCase();
  return e === "slider" ? "slider" : e === "grid" ? "grid" : e === "showcase" || e === "mosaic" || e === "center" ? "showcase" : "projects";
}
function V(t) {
  return S(t.pca_show_layout_toggle, !1);
}
function J(t) {
  const e = I(t.pca_columns, 3);
  return Math.max(2, Math.min(6, e || 3));
}
function Q(t) {
  const e = t.trim();
  return e ? e.slice(0, 1) : "•";
}
function Z(t) {
  return t.length <= 5 ? { mosaic: t, rest: [] } : { mosaic: t.slice(0, 5), rest: t.slice(5) };
}
function ee(t) {
  return t.length ? t.length === 1 ? { stack: [], feature: t[0], rest: [] } : t.length <= 4 ? { stack: t.slice(0, -1), feature: t[t.length - 1], rest: [] } : {
    stack: t.slice(0, 4),
    feature: t[4],
    rest: t.slice(5)
  } : { stack: [], feature: null, rest: [] };
}
var re = Object.defineProperty, C = (t, e, r, o) => {
  for (var a = void 0, i = t.length - 1, d; i >= 0; i--)
    (d = t[i]) && (a = d(e, r, a) || a);
  return a && re(e, r, a), a;
};
const _ = class _ extends P {
  constructor() {
    super(...arguments), this.config = {}, this.layout = "projects", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    e.has("config") && (this.layout = N(this.config || {}));
  }
  get items() {
    var e, r;
    return K(((e = this.config) == null ? void 0 : e.pca_items) ?? ((r = this.config) == null ? void 0 : r.pca_categories));
  }
  renderCard(e, r = {}) {
    const o = !!r.tile, a = !!r.feature, i = o && !a, d = c`
      <div class="pca-card__media">
        ${e.image ? c`<img src=${e.image} alt="" loading="lazy" decoding="async" />` : c`<span class="pca-card__mono" aria-hidden="true">${Q(e.title)}</span>`}
      </div>
      <div class="pca-card__body">
        <h3 class="pca-card__title">${e.title}</h3>
        ${!i && e.desc ? c`<p class="pca-card__desc">${e.desc}</p>` : s}
        ${o ? s : c`<span class="pca-card__cta">
              ${e.link ? n("تصفّح التصنيف", "Browse category") : n("أضف رابطًا من الإعدادات", "Add a link in settings")}
            </span>`}
      </div>
    `, h = f({
      "pca-card": !0,
      "pca-card--disabled": !e.link,
      "pca-card--feature": a
    });
    if (!e.link)
      return c`<div class=${h} role="group" aria-label=${e.title}>
        ${d}
      </div>`;
    const g = $(e.link);
    return c`<a
      class=${h}
      href=${e.link}
      target=${g ? "_blank" : s}
      rel=${g ? "noopener noreferrer" : s}
      aria-label=${e.title}
    >
      ${d}
    </a>`;
  }
  renderProducts() {
    return O(this.config || {}, "pca_", { ready: !0 });
  }
  renderFooterLink() {
    const e = this.config || {};
    if (!S(e.pca_show_footer_link, !1)) return s;
    const r = b(e.pca_footer_link);
    if (!r) return s;
    const o = p(e.pca_footer_label) || n("اكتشف أحدث العروض", "Discover latest offers"), a = $(r);
    return c`
      <div class="pca-footer-link">
        <a
          href=${r}
          target=${a ? "_blank" : s}
          rel=${a ? "noopener noreferrer" : s}
        >
          ${o}
        </a>
      </div>
    `;
  }
  renderShowcase(e) {
    const { mosaic: r, rest: o } = Z(e);
    return c`
      <div class="pca-showcase pca-tile" role="list">
        ${r.map(
      (a) => c`<div role="listitem">${this.renderCard(a, { tile: !0 })}</div>`
    )}
      </div>
      ${o.length ? c`<div class="pca-grid pca-showcase-rest" role="list">
            ${o.map((a) => c`<div role="listitem">${this.renderCard(a)}</div>`)}
          </div>` : s}
    `;
  }
  renderProjects(e) {
    const { stack: r, feature: o, rest: a } = ee(e);
    return c`
      <div class="pca-projects pca-tile" role="list">
        <div class="pca-projects__stack">
          ${r.map(
      (i) => c`<div role="listitem">${this.renderCard(i, { tile: !0 })}</div>`
    )}
        </div>
        ${o ? c`<div class="pca-projects__feature" role="listitem">
              ${this.renderCard(o, { tile: !0, feature: !0 })}
            </div>` : s}
      </div>
      ${this.renderFooterLink()}
      ${a.length ? c`<div class="pca-grid pca-showcase-rest" role="list">
            ${a.map((i) => c`<div role="listitem">${this.renderCard(i)}</div>`)}
          </div>` : s}
    `;
  }
  renderLayoutBody(e) {
    if (this.layout === "showcase") return this.renderShowcase(e);
    if (this.layout === "projects") return this.renderProjects(e);
    const r = J(this.config || {});
    return c`<div
      class=${this.layout === "slider" ? "pca-slider" : "pca-grid"}
      style=${this.layout === "grid" ? w({ "--pca-cols": String(r) }) : s}
      role="list"
      ${D((o) => {
      o instanceof HTMLElement && o.classList.contains("pca-slider") && U(o);
    })}
    >
      ${e.map((o) => c`<div role="listitem">${this.renderCard(o)}</div>`)}
    </div>`;
  }
  render() {
    const e = this.config || {}, r = B(e, "pca_"), o = this.items, a = p(e.pca_title) || n("تصنيفات القطع", "Parts categories"), i = p(e.pca_desc) || n(
      "انتقل مباشرة إلى تصنيف أو منتج من متجرك.",
      "Go straight to a store category or product."
    ), d = V(e);
    return o.length ? c`
      <section
        class="fs-section"
        style=${w(F(r))}
        aria-label=${a}
      >
        <div class="fs-container">
          <div class="pca-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${n("تسوّق بالتصنيف", "Shop by category")}</p>
              ${a ? c`<h2 class="fs-title">${a}</h2>` : s}
              ${i ? c`<p class="fs-desc">${i}</p>` : s}
            </div>

            ${d ? c`<div class="pca-toolbar">
                  <div class="pca-toggle" role="group" aria-label=${n("طريقة العرض", "Layout")}>
                    <button
                      type="button"
                      class=${f({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "showcase"
    })}
                      @click=${() => this.layout = "showcase"}
                    >
                      ${n("مميز", "Showcase")}
                    </button>
                    <button
                      type="button"
                      class=${f({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "projects"
    })}
                      @click=${() => this.layout = "projects"}
                    >
                      ${n("مشاريع", "Projects")}
                    </button>
                    <button
                      type="button"
                      class=${f({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "grid"
    })}
                      @click=${() => this.layout = "grid"}
                    >
                      ${n("شبكة", "Grid")}
                    </button>
                    <button
                      type="button"
                      class=${f({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "slider"
    })}
                      @click=${() => this.layout = "slider"}
                    >
                      ${n("تمرير", "Scroll")}
                    </button>
                  </div>
                </div>` : s}

            ${this.renderLayoutBody(o)}
            ${this.renderProducts()}
          </div>
        </div>
      </section>
    ` : c`<div class="fs-empty" role="status">
        ${n("أضف التصنيفات من إعدادات العنصر", "Add categories in element settings")}
      </div>`;
  }
};
_.styles = [q, G];
let u = _;
C([
  z({ type: Object })
], u.prototype, "config");
C([
  T()
], u.prototype, "layout");
H(
  u
);
typeof u < "u" && u.registerSallaComponent("salla-parts-categories");
export {
  u as default
};
