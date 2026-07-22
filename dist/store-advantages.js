import { css as k, LitElement as x, nothing as d, html as s } from "lit";
import { property as y } from "lit/decorators.js";
import { styleMap as w } from "lit/directives/style-map.js";
import { n as $, l as c, c as g, t as m, e as b, k as f, s as C, d as L, i as M, r as S, p as B, a as T, b as H } from "./registerSalla-Dct4KN_E.js";
const N = k`
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
`, j = [
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
function q() {
  return j.map((o, a) => {
    const e = m(o.ar, o.en);
    return {
      id: f(e, "") || `brand-${a + 1}`,
      name: e,
      image: o.image,
      link: ""
    };
  });
}
function z(o) {
  const a = $(o).map((e, n) => {
    const r = c(e.name) || c(e.title) || c(e.brand), t = g(e.image) || g(e.logo) || g(e.brand_image);
    if (!r && !t) return null;
    const i = r || m("ماركة", "Brand");
    return {
      id: String(e.id ?? "").trim() || f(i, "") || `brand-${n + 1}`,
      name: i,
      image: t,
      link: b(e.link) || b(e.url)
    };
  }).filter((e) => !!e);
  return a.length ? a : q();
}
var E = Object.defineProperty, F = (o, a, e, n) => {
  for (var r = void 0, t = o.length - 1, i; t >= 0; t--)
    (i = o[t]) && (r = i(a, e, r) || r);
  return r && E(a, e, r), r;
};
const h = class h extends x {
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
    var a;
    return z((a = this.config) == null ? void 0 : a.sta_items);
  }
  renderBrand(a, e) {
    var p;
    const n = L((p = this.config) == null ? void 0 : p.sta_show_names, !0), r = a.name.charAt(0).toUpperCase(), t = s`
      <span class="sta-brand__logo" aria-hidden="true">
        ${a.image ? s`<img src=${a.image} alt="" loading="lazy" decoding="async" />` : s`<span class="sta-brand__fallback">${r}</span>`}
      </span>
      ${n ? s`<p class="sta-brand__name">${a.name}</p>` : d}
    `;
    if (!a.link)
      return s`<div class="sta-brand" data-key=${e}>${t}</div>`;
    const i = M(a.link);
    return s`<a
      class="sta-brand"
      data-key=${e}
      href=${a.link}
      target=${i ? "_blank" : d}
      rel=${i ? "noopener noreferrer" : d}
      aria-label=${a.name}
    >
      ${t}
    </a>`;
  }
  render() {
    const a = this.config || {}, e = S(a, "sta_", {
      spaceDesktop: 28,
      spaceMobile: 18
    }), n = this.brands, r = c(a.sta_title), t = c(a.sta_desc), i = Math.max(12, Math.min(90, Number(a.sta_speed) || 35)), v = B() || n.length < 2 ? n : [...n, ...n];
    return n.length ? s`
      <section
        class="fs-section"
        style=${w({
      ...T(e),
      "--sta-speed": `${i}s`
    })}
        aria-label=${r || m("الماركات التجارية", "Store brands")}
      >
        <div class="fs-container">
          <div class="sta-shell">
            ${r || t ? s`<div class="fs-hero">
                  ${r ? s`<h2 class="fs-title">${r}</h2>` : d}
                  ${t ? s`<p class="fs-desc">${t}</p>` : d}
                </div>` : d}

            <div class="sta-marquee" role="list" aria-label=${m("الماركات", "Brands")}>
              <div class="sta-track">
                ${v.map((u, _) => this.renderBrand(u, `${u.id}-${_}`))}
              </div>
            </div>
          </div>
        </div>
      </section>
    ` : s`<div class="fs-empty" role="status">
        ${m("أضف الماركات من إعدادات العنصر", "Add brands in element settings")}
      </div>`;
  }
};
h.styles = [C, N];
let l = h;
F([
  y({ type: Object })
], l.prototype, "config");
H(
  l
);
typeof l < "u" && l.registerSallaComponent("salla-store-advantages");
export {
  l as default
};
