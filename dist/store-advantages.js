var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, c as extractImageUrl, t, e as extractLink, k as itemIdFromLabel, s as sharedSectionCss, d as isTruthy, i as isExternalUrl, r as readSectionTheme, p as prefersReducedMotion, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
const componentStyles = css`
  .sta-shell {
    display: grid;
    gap: 1rem;
  }

  .sta-marquee {
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--section-radius, 20px) * 0.65);
    background: color-mix(in srgb, var(--card-bg, #fff) 88%, var(--border-color, #d9e2ec));
    border: 1px solid var(--border-color, #d9e2ec);
    padding-block: 1.1rem;
    mask-image: linear-gradient(
      to left,
      transparent 0%,
      #000 8%,
      #000 92%,
      transparent 100%
    );
  }

  .sta-track {
    display: flex;
    width: max-content;
    gap: 0.85rem;
    /* Keep motion direction stable regardless of page RTL. */
    direction: ltr;
    animation: sta-scroll var(--sta-speed, 35s) linear infinite;
    will-change: transform;
  }

  .sta-marquee:hover .sta-track {
    animation-play-state: paused;
  }

  .sta-brand,
  a.sta-brand {
    flex: 0 0 auto;
    display: grid;
    justify-items: center;
    gap: 0.45rem;
    min-width: 7.5rem;
    padding: 0.55rem 0.9rem;
    text-decoration: none;
    color: inherit;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    transition: background 0.15s ease, transform 0.15s ease;
  }

  a.sta-brand:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, transparent);
    transform: translateY(-1px);
  }

  a.sta-brand:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .sta-brand__logo {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
  }

  .sta-brand__logo img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
  }

  .sta-brand__fallback {
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .sta-brand__name {
    margin: 0;
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
    text-align: center;
    max-width: 7.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
    unicode-bidi: plaintext;
  }

  @keyframes sta-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 639px) {
    .sta-brand,
    a.sta-brand {
      min-width: 6.4rem;
      padding: 0.4rem 0.65rem;
    }

    .sta-brand__logo {
      width: 3.7rem;
      height: 3.7rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sta-track {
      animation: none !important;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }

    .sta-marquee {
      mask-image: none;
    }
  }
`, DEFAULT_BRANDS = [
  {
    ar: "تويوتا",
    en: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/200px-Toyota_carlogo.svg.png"
  },
  {
    ar: "هيونداي",
    en: "Hyundai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png"
  },
  {
    ar: "نيسان",
    en: "Nissan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.svg/200px-Nissan_logo.svg.png"
  },
  {
    ar: "كيا",
    en: "Kia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia_logo.svg/200px-Kia_logo.svg.png"
  },
  {
    ar: "فورد",
    en: "Ford",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png"
  },
  {
    ar: "شيفروليه",
    en: "Chevrolet",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet_logo.svg/200px-Chevrolet_logo.svg.png"
  }
];
function defaultBrands() {
  return DEFAULT_BRANDS.map((b, i) => {
    const name = t(b.ar, b.en);
    return {
      id: itemIdFromLabel(name, "") || `brand-${i + 1}`,
      name,
      image: b.image,
      link: ""
    };
  });
}
__name(defaultBrands, "defaultBrands");
function parseBrands(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name) || localizedString(row.title) || localizedString(row.brand), image = extractImageUrl(row.image) || extractImageUrl(row.logo) || extractImageUrl(row.brand_image);
    if (!name && !image) return null;
    const label = name || t("ماركة", "Brand");
    return {
      id: String(row.id ?? "").trim() || itemIdFromLabel(label, "") || `brand-${i + 1}`,
      name: label,
      image,
      link: extractLink(row.link) || extractLink(row.url)
    };
  }).filter((item) => !!item);
  return parsed.length ? parsed : defaultBrands();
}
__name(parseBrands, "parseBrands");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _StoreAdvantages = class _StoreAdvantages extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  get brands() {
    var _a;
    return parseBrands((_a = this.config) == null ? void 0 : _a.sta_items);
  }
  renderBrand(item, key) {
    var _a;
    const showName = isTruthy((_a = this.config) == null ? void 0 : _a.sta_show_names, !0), initial = item.name.charAt(0).toUpperCase(), body = html`
      <span class="sta-brand__logo" aria-hidden="true">
        ${item.image ? html`<img src=${item.image} alt="" loading="lazy" decoding="async" />` : html`<span class="sta-brand__fallback">${initial}</span>`}
      </span>
      ${showName ? html`<p class="sta-brand__name">${item.name}</p>` : nothing}
    `;
    if (!item.link)
      return html`<div class="sta-brand" data-key=${key}>${body}</div>`;
    const external = isExternalUrl(item.link);
    return html`<a
      class="sta-brand"
      data-key=${key}
      href=${item.link}
      target=${external ? "_blank" : nothing}
      rel=${external ? "noopener noreferrer" : nothing}
      aria-label=${item.name}
    >
      ${body}
    </a>`;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "sta_", {
      spaceDesktop: 28,
      spaceMobile: 18
    }), brands = this.brands, title = localizedString(c.sta_title), desc = localizedString(c.sta_desc), speed = Math.max(12, Math.min(90, Number(c.sta_speed) || 35)), loop = prefersReducedMotion() || brands.length < 2 ? brands : [...brands, ...brands];
    return brands.length ? html`
      <section
        class="fs-section"
        style=${styleMap({
      ...themeStyleMap(theme),
      "--sta-speed": `${speed}s`
    })}
        aria-label=${title || t("الماركات التجارية", "Store brands")}
      >
        <div class="fs-container">
          <div class="sta-shell">
            ${title || desc ? html`<div class="fs-hero">
                  ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                  ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
                </div>` : nothing}

            <div class="sta-marquee" role="list" aria-label=${t("الماركات", "Brands")}>
              <div class="sta-track">
                ${loop.map((brand, i) => this.renderBrand(brand, `${brand.id}-${i}`))}
              </div>
            </div>
          </div>
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف الماركات من إعدادات العنصر", "Add brands in element settings")}
      </div>`;
  }
};
__name(_StoreAdvantages, "StoreAdvantages"), _StoreAdvantages.styles = [sharedSectionCss, componentStyles];
let StoreAdvantages = _StoreAdvantages;
__decorateClass([
  property({ type: Object })
], StoreAdvantages.prototype, "config");
bindSallaRegistration(
  StoreAdvantages
);
typeof StoreAdvantages < "u" && StoreAdvantages.registerSallaComponent("salla-store-advantages");
export {
  StoreAdvantages as default
};
