var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";
import { g as getRadioValue, n as normalizeCollection, l as localizedString, e as extractLink, c as extractImageUrl, k as itemIdFromLabel, f as toNumber, d as isTruthy, t, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const CLEANUP_KEY = "__fsDragScrollCleanup", DRAG_THRESHOLD_PX = 6;
function enableDragScroll(el) {
  var _a;
  if (!el) return;
  const host = el;
  (_a = host[CLEANUP_KEY]) == null || _a.call(host);
  let pointerId = null, startX = 0, startScrollLeft = 0, dragged = !1;
  const onPointerDown = /* @__PURE__ */ __name((event) => {
    event.pointerType !== "mouse" || event.button !== 0 || host.scrollWidth <= host.clientWidth || (pointerId = event.pointerId, startX = event.clientX, startScrollLeft = host.scrollLeft, dragged = !1, host.style.scrollSnapType = "none", host.style.cursor = "grabbing");
  }, "onPointerDown"), onPointerMove = /* @__PURE__ */ __name((event) => {
    if (pointerId === null || event.pointerId !== pointerId) return;
    const dx = event.clientX - startX;
    if (!dragged && Math.abs(dx) > DRAG_THRESHOLD_PX) {
      dragged = !0;
      try {
        host.setPointerCapture(pointerId);
      } catch {
      }
    }
    dragged && (event.preventDefault(), host.scrollLeft = startScrollLeft - dx);
  }, "onPointerMove"), endDrag = /* @__PURE__ */ __name((event) => {
    if (!(pointerId === null || event.pointerId !== pointerId)) {
      if (dragged)
        try {
          host.releasePointerCapture(pointerId);
        } catch {
        }
      if (pointerId = null, host.style.scrollSnapType = "", host.style.cursor = "", dragged) {
        const suppressClick = /* @__PURE__ */ __name((clickEvent) => {
          clickEvent.preventDefault(), clickEvent.stopPropagation();
        }, "suppressClick");
        host.addEventListener("click", suppressClick, { capture: !0, once: !0 }), window.setTimeout(() => {
          host.removeEventListener("click", suppressClick, { capture: !0 });
        }, 0);
      }
      dragged = !1;
    }
  }, "endDrag"), onDragStart = /* @__PURE__ */ __name((event) => {
    event.preventDefault();
  }, "onDragStart");
  host.addEventListener("pointerdown", onPointerDown), host.addEventListener("pointermove", onPointerMove), host.addEventListener("pointerup", endDrag), host.addEventListener("pointercancel", endDrag), host.addEventListener("dragstart", onDragStart, { capture: !0 }), host.style.touchAction = "pan-x pan-y", host.scrollWidth > host.clientWidth && (host.style.cursor = "grab"), host[CLEANUP_KEY] = () => {
    host.removeEventListener("pointerdown", onPointerDown), host.removeEventListener("pointermove", onPointerMove), host.removeEventListener("pointerup", endDrag), host.removeEventListener("pointercancel", endDrag), host.removeEventListener("dragstart", onDragStart, { capture: !0 });
  };
}
__name(enableDragScroll, "enableDragScroll");
const componentStyles = css`
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
`, SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
], DEFAULT_META = [
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
function defaultCategories() {
  return DEFAULT_META.map((m, i) => {
    const title = t(m.ar, m.en);
    return {
      id: itemIdFromLabel(title, "") || `cat-${i + 1}`,
      title,
      desc: t(m.dar, m.den),
      image: SAMPLE_IMAGES[i] || "",
      link: ""
    };
  });
}
__name(defaultCategories, "defaultCategories");
function parseCategories(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title) || localizedString(row.name);
    return title ? {
      id: String(row.id ?? "").trim() || itemIdFromLabel(title, "") || `cat-${i + 1}`,
      title,
      desc: localizedString(row.desc) || localizedString(row.description) || localizedString(row.subtitle),
      image: extractImageUrl(row.image) || extractImageUrl(row.thumbnail),
      link: extractLink(row.link) || extractLink(row.url)
    } : null;
  }).filter((item) => !!item);
  return parsed.length ? parsed : defaultCategories();
}
__name(parseCategories, "parseCategories");
function resolveLayout(config) {
  const raw = getRadioValue(config.pca_layout, "projects").toLowerCase();
  return raw === "slider" ? "slider" : raw === "grid" ? "grid" : raw === "showcase" || raw === "mosaic" || raw === "center" ? "showcase" : "projects";
}
__name(resolveLayout, "resolveLayout");
function showLayoutToggle(config) {
  return isTruthy(config.pca_show_layout_toggle, !1);
}
__name(showLayoutToggle, "showLayoutToggle");
function resolveColumns(config) {
  const n = toNumber(config.pca_columns, 3);
  return Math.max(2, Math.min(6, n || 3));
}
__name(resolveColumns, "resolveColumns");
function monogram(title) {
  const clean = title.trim();
  return clean ? clean.slice(0, 1) : "•";
}
__name(monogram, "monogram");
function splitShowcaseItems(items) {
  return items.length <= 5 ? { mosaic: items, rest: [] } : { mosaic: items.slice(0, 5), rest: items.slice(5) };
}
__name(splitShowcaseItems, "splitShowcaseItems");
function splitProjectsItems(items) {
  return items.length ? items.length === 1 ? { stack: [], feature: items[0], rest: [] } : items.length <= 4 ? { stack: items.slice(0, -1), feature: items[items.length - 1], rest: [] } : {
    stack: items.slice(0, 4),
    feature: items[4],
    rest: items.slice(5)
  } : { stack: [], feature: null, rest: [] };
}
__name(splitProjectsItems, "splitProjectsItems");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _PartsCategories = class _PartsCategories extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.layout = "projects", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    changed.has("config") && (this.layout = resolveLayout(this.config || {}));
  }
  get items() {
    var _a, _b;
    return parseCategories(((_a = this.config) == null ? void 0 : _a.pca_items) ?? ((_b = this.config) == null ? void 0 : _b.pca_categories));
  }
  renderCard(item, opts = {}) {
    const tile = !!opts.tile, feature = !!opts.feature, compact = tile && !feature, body = html`
      <div class="pca-card__media">
        ${item.image ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />` : html`<span class="pca-card__mono" aria-hidden="true">${monogram(item.title)}</span>`}
      </div>
      <div class="pca-card__body">
        <h3 class="pca-card__title">${item.title}</h3>
        ${!compact && item.desc ? html`<p class="pca-card__desc">${item.desc}</p>` : nothing}
        ${tile ? nothing : html`<span class="pca-card__cta">
              ${item.link ? t("تصفّح التصنيف", "Browse category") : t("أضف رابطًا من الإعدادات", "Add a link in settings")}
            </span>`}
      </div>
    `, cardClass = classMap({
      "pca-card": !0,
      "pca-card--disabled": !item.link,
      "pca-card--feature": feature
    });
    if (!item.link)
      return html`<div class=${cardClass} role="group" aria-label=${item.title}>
        ${body}
      </div>`;
    const external = isExternalUrl(item.link);
    return html`<a
      class=${cardClass}
      href=${item.link}
      target=${external ? "_blank" : nothing}
      rel=${external ? "noopener noreferrer" : nothing}
      aria-label=${item.title}
    >
      ${body}
    </a>`;
  }
  renderProducts() {
    return renderCommerceOutcome(this.config || {}, "pca_", { ready: !0 });
  }
  renderFooterLink() {
    const c = this.config || {};
    if (!isTruthy(c.pca_show_footer_link, !1)) return nothing;
    const href = extractLink(c.pca_footer_link);
    if (!href) return nothing;
    const label = localizedString(c.pca_footer_label) || t("اكتشف أحدث العروض", "Discover latest offers"), external = isExternalUrl(href);
    return html`
      <div class="pca-footer-link">
        <a
          href=${href}
          target=${external ? "_blank" : nothing}
          rel=${external ? "noopener noreferrer" : nothing}
        >
          ${label}
        </a>
      </div>
    `;
  }
  renderShowcase(items) {
    const { mosaic, rest } = splitShowcaseItems(items);
    return html`
      <div class="pca-showcase pca-tile" role="list">
        ${mosaic.map(
      (item) => html`<div role="listitem">${this.renderCard(item, { tile: !0 })}</div>`
    )}
      </div>
      ${rest.length ? html`<div class="pca-grid pca-showcase-rest" role="list">
            ${rest.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
          </div>` : nothing}
    `;
  }
  renderProjects(items) {
    const { stack, feature, rest } = splitProjectsItems(items);
    return html`
      <div class="pca-projects pca-tile" role="list">
        <div class="pca-projects__stack">
          ${stack.map(
      (item) => html`<div role="listitem">${this.renderCard(item, { tile: !0 })}</div>`
    )}
        </div>
        ${feature ? html`<div class="pca-projects__feature" role="listitem">
              ${this.renderCard(feature, { tile: !0, feature: !0 })}
            </div>` : nothing}
      </div>
      ${this.renderFooterLink()}
      ${rest.length ? html`<div class="pca-grid pca-showcase-rest" role="list">
            ${rest.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
          </div>` : nothing}
    `;
  }
  renderLayoutBody(items) {
    if (this.layout === "showcase") return this.renderShowcase(items);
    if (this.layout === "projects") return this.renderProjects(items);
    const cols = resolveColumns(this.config || {});
    return html`<div
      class=${this.layout === "slider" ? "pca-slider" : "pca-grid"}
      style=${this.layout === "grid" ? styleMap({ "--pca-cols": String(cols) }) : nothing}
      role="list"
      ${ref((el) => {
      el instanceof HTMLElement && el.classList.contains("pca-slider") && enableDragScroll(el);
    })}
    >
      ${items.map((item) => html`<div role="listitem">${this.renderCard(item)}</div>`)}
    </div>`;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "pca_"), items = this.items, title = localizedString(c.pca_title) || t("تصنيفات القطع", "Parts categories"), desc = localizedString(c.pca_desc) || t(
      "انتقل مباشرة إلى تصنيف أو منتج من متجرك.",
      "Go straight to a store category or product."
    ), allowToggle = showLayoutToggle(c);
    return items.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pca-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("تسوّق بالتصنيف", "Shop by category")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            ${allowToggle ? html`<div class="pca-toolbar">
                  <div class="pca-toggle" role="group" aria-label=${t("طريقة العرض", "Layout")}>
                    <button
                      type="button"
                      class=${classMap({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "showcase"
    })}
                      @click=${() => this.layout = "showcase"}
                    >
                      ${t("مميز", "Showcase")}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "projects"
    })}
                      @click=${() => this.layout = "projects"}
                    >
                      ${t("مشاريع", "Projects")}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "grid"
    })}
                      @click=${() => this.layout = "grid"}
                    >
                      ${t("شبكة", "Grid")}
                    </button>
                    <button
                      type="button"
                      class=${classMap({
      "pca-toggle__btn": !0,
      "is-active": this.layout === "slider"
    })}
                      @click=${() => this.layout = "slider"}
                    >
                      ${t("تمرير", "Scroll")}
                    </button>
                  </div>
                </div>` : nothing}

            ${this.renderLayoutBody(items)}
            ${this.renderProducts()}
          </div>
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف التصنيفات من إعدادات العنصر", "Add categories in element settings")}
      </div>`;
  }
};
__name(_PartsCategories, "PartsCategories"), _PartsCategories.styles = [sharedSectionCss, componentStyles];
let PartsCategories = _PartsCategories;
__decorateClass([
  property({ type: Object })
], PartsCategories.prototype, "config");
__decorateClass([
  state()
], PartsCategories.prototype, "layout");
bindSallaRegistration(
  PartsCategories
);
typeof PartsCategories < "u" && PartsCategories.registerSallaComponent("salla-parts-categories");
export {
  PartsCategories as default
};
