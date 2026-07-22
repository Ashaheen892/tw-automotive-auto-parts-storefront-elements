import { css as $, LitElement as k, nothing as p, html as s } from "lit";
import { property as C, state as I } from "lit/decorators.js";
import { classMap as _ } from "lit/directives/class-map.js";
import { styleMap as z } from "lit/directives/style-map.js";
import { n as L, l as c, c as g, k as x, d as S, t as o, s as F, r as E, a as H, b as j } from "./registerSalla-Dct4KN_E.js";
import { r as M } from "./commerceOutcome-B3T0_-WJ.js";
const T = $`
  .pfs-shell {
    display: grid;
    gap: 1.15rem;
  }


  .pfs-stage {
    display: grid;
    gap: 1.25rem;
    align-items: center;
    padding: 1.15rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
  }

  @media (min-width: 960px) {
    .pfs-stage {
      grid-template-columns: minmax(0, 1fr) minmax(220px, 340px) minmax(0, 1fr);
      gap: 1.5rem 1.25rem;
      padding: 1.5rem 1.35rem 1.6rem;
    }
  }

  .pfs-col {
    display: grid;
    gap: 1.15rem;
    align-content: center;
  }

  .pfs-center {
    display: grid;
    gap: 0.75rem;
    justify-items: center;
    order: -1;
  }

  @media (min-width: 960px) {
    .pfs-center {
      order: 0;
    }
  }

  .pfs-center__frame {
    position: relative;
    width: min(100%, 320px);
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background:
      radial-gradient(
        circle at 50% 40%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, var(--card-bg, #fff)),
        color-mix(in srgb, var(--border-color, #d9e2ec) 35%, var(--card-bg, #fff)) 70%
      );
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
    box-shadow:
      inset 0 0 0 10px color-mix(in srgb, var(--card-bg, #fff) 70%, transparent),
      0 18px 40px rgba(15, 23, 42, 0.1);
    overflow: hidden;
  }

  .pfs-center__img {
    width: 78%;
    height: 78%;
    object-fit: contain;
    display: block;
  }

  .pfs-center__placeholder {
    font-size: 2.4rem;
    font-weight: 900;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 70%, var(--text-color, #111827));
  }

  .pfs-center__caption {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-align: center;
  }

  .pfs-feat {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.75rem;
    align-items: start;
    width: 100%;
    padding: 0.85rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid transparent;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }

  .pfs-feat:hover,
  .pfs-feat.is-active {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, var(--card-bg, #fff));
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  }

  /* Toward center: start column icons face inline-end (toward middle) */
  .pfs-col--start .pfs-feat {
    direction: inherit;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .pfs-col--start .pfs-feat__icon {
    order: 2;
  }

  .pfs-col--start .pfs-feat__body {
    order: 1;
    text-align: end;
  }

  .pfs-col--end .pfs-feat {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .pfs-col--end .pfs-feat__body {
    text-align: start;
  }

  .pfs-feat__icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    font-size: 0.78rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 8px 18px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
    overflow: hidden;
  }

  .pfs-feat__icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pfs-feat__body {
    display: grid;
    gap: 0.28rem;
    min-width: 0;
  }

  .pfs-feat__title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 900;
    line-height: 1.35;
    color: var(--text-color, #111827);
  }

  .pfs-feat__desc {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--muted-color, #64748b);
  }

  .pfs-connector {
    display: none;
  }

  @media (min-width: 960px) {
    .pfs-stage.has-connectors .pfs-feat {
      position: relative;
    }

    .pfs-stage.has-connectors .pfs-col--start .pfs-feat::after,
    .pfs-stage.has-connectors .pfs-col--end .pfs-feat::before {
      content: '';
      position: absolute;
      top: 28px;
      width: 18px;
      height: 2px;
      background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
      pointer-events: none;
    }

    .pfs-stage.has-connectors .pfs-col--start .pfs-feat::after {
      inset-inline-end: -12px;
    }

    .pfs-stage.has-connectors .pfs-col--end .pfs-feat::before {
      inset-inline-start: -12px;
    }
  }

  @media (max-width: 959px) {
    .pfs-stage {
      padding: 0.95rem;
      gap: 0.85rem;
    }

    .pfs-col {
      gap: 0.65rem;
    }

    .pfs-col--start .pfs-feat,
    .pfs-col--end .pfs-feat {
      grid-template-columns: auto minmax(0, 1fr);
    }

    .pfs-col--start .pfs-feat__icon,
    .pfs-col--end .pfs-feat__icon {
      order: 0;
    }

    .pfs-col--start .pfs-feat__body,
    .pfs-col--end .pfs-feat__body {
      order: 0;
      text-align: start;
    }

    .pfs-center__frame {
      width: min(100%, 260px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pfs-feat {
      transition: none !important;
    }
  }
`, U = [
  {
    ar: "أداء عالي",
    en: "High performance",
    dar: "توازن مثالي بين القوة والكفاءة في ظروف القيادة اليومية.",
    den: "Balanced power and efficiency for everyday driving.",
    icon: "01"
  },
  {
    ar: "متانة طويلة",
    en: "Long durability",
    dar: "مواد مقاومة للحرارة والاهتزاز لإطالة عمر القطعة.",
    den: "Heat- and vibration-resistant materials for longer life.",
    icon: "02"
  },
  {
    ar: "تركيب سهل",
    en: "Easy install",
    dar: "تصميم متوافق مع المقاسات الشائعة لتثبيت أسرع.",
    den: "Compatible sizing for faster, cleaner installation.",
    icon: "03"
  },
  {
    ar: "أمان أعلى",
    en: "Better safety",
    dar: "اختبارات جودة تضمن ثباتًا أفضل أثناء الاستخدام.",
    den: "Quality checks that support more stable performance.",
    icon: "04"
  },
  {
    ar: "توفير في الصيانة",
    en: "Lower upkeep",
    dar: "يقلل الحاجة للاستبدال المتكرر ويحافظ على سيارتك.",
    den: "Helps reduce frequent replacements and protect the vehicle.",
    icon: "05"
  },
  {
    ar: "توافق واسع",
    en: "Wide fitment",
    dar: "يناسب مجموعة كبيرة من الماركات والموديلات الشائعة.",
    den: "Fits a wide range of popular brands and models.",
    icon: "06"
  }
];
function A() {
  return U.map((r, e) => {
    const t = o(r.ar, r.en);
    return {
      id: x(t, "") || `feat-${e + 1}`,
      title: t,
      desc: o(r.dar, r.den),
      icon: r.icon,
      iconImage: ""
    };
  });
}
function B(r) {
  const e = L(r).map((t, n) => {
    const a = c(t.title) || c(t.name);
    if (!a) return null;
    const i = String(t.icon ?? "").trim();
    return {
      id: String(t.id ?? "").trim() || x(a, "") || `feat-${n + 1}`,
      title: a,
      desc: c(t.desc) || c(t.description),
      icon: i || String(n + 1).padStart(2, "0"),
      iconImage: g(t.icon_image) || g(t.image)
    };
  }).filter((t) => !!t);
  return e.length ? e : A();
}
function O(r) {
  const e = Math.ceil(r.length / 2);
  return {
    start: r.slice(0, e),
    end: r.slice(e)
  };
}
function P(r) {
  return S(r.pfs_show_connectors, !0);
}
var q = Object.defineProperty, y = (r, e, t, n) => {
  for (var a = void 0, i = r.length - 1, l; i >= 0; i--)
    (l = r[i]) && (a = l(e, t, a) || a);
  return a && q(e, t, a), a;
};
const h = class h extends k {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var t;
    e.has("config") && (this.activeId = ((t = this.features[0]) == null ? void 0 : t.id) ?? "");
  }
  get features() {
    var e;
    return B((e = this.config) == null ? void 0 : e.pfs_features);
  }
  get active() {
    return this.features.find((e) => e.id === this.activeId) ?? this.features[0] ?? null;
  }
  select(e) {
    this.activeId = e;
  }
  renderFeature(e) {
    var n;
    const t = e.id === ((n = this.active) == null ? void 0 : n.id);
    return s`
      <button
        type="button"
        class=${_({ "pfs-feat": !0, "is-active": t })}
        aria-pressed=${t ? "true" : "false"}
        @click=${() => this.select(e.id)}
      >
        <span class="pfs-feat__icon" aria-hidden="true">
          ${e.iconImage ? s`<img src=${e.iconImage} alt="" loading="lazy" decoding="async" />` : e.icon}
        </span>
        <span class="pfs-feat__body">
          <h3 class="pfs-feat__title">${e.title}</h3>
          ${e.desc ? s`<p class="pfs-feat__desc">${e.desc}</p>` : p}
        </span>
      </button>
    `;
  }
  renderProducts(e) {
    return M(this.config || {}, "pfs_", {
      ready: !!e
    });
  }
  render() {
    const e = this.config || {}, t = E(e, "pfs_"), n = this.features, { start: a, end: i } = O(n), l = this.active, f = c(e.pfs_title) || o("مميزات القطعة في لمحة", "Part features at a glance"), u = c(e.pfs_desc) || o(
      "استكشف أبرز مزايا القطعة حول الصورة المركزية، ثم تصفّح المنتجات المرتبطة.",
      "Explore key part benefits around the center image, then browse related products."
    ), v = g(e.pfs_center_image), b = c(e.pfs_center_caption) || o("القطعة المختارة", "Featured part"), w = P(e);
    return n.length ? s`
      <section
        class="fs-section"
        style=${z(H(t))}
        aria-label=${f}
      >
        <div class="fs-container">
          <div class="pfs-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${o("لماذا هذه القطعة؟", "Why this part?")}</p>
              ${f ? s`<h2 class="fs-title">${f}</h2>` : p}
              ${u ? s`<p class="fs-desc">${u}</p>` : p}
            </div>

            <div
              class=${_({
      "pfs-stage": !0,
      "has-connectors": w
    })}
            >
              <div class="pfs-col pfs-col--start" role="list">
                ${a.map((m) => s`<div role="listitem">${this.renderFeature(m)}</div>`)}
              </div>

              <div class="pfs-center">
                <div class="pfs-center__frame">
                  ${v ? s`<img
                        class="pfs-center__img"
                        src=${v}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />` : s`<span class="pfs-center__placeholder" aria-hidden="true">+</span>`}
                </div>
                ${b ? s`<p class="pfs-center__caption">${b}</p>` : p}
              </div>

              <div class="pfs-col pfs-col--end" role="list">
                ${i.map((m) => s`<div role="listitem">${this.renderFeature(m)}</div>`)}
              </div>
            </div>

            ${this.renderProducts(l)}
          </div>
        </div>
      </section>
    ` : s`<div class="fs-empty" role="status">
        ${o("أضف المميزات من إعدادات العنصر", "Add features in element settings")}
      </div>`;
  }
};
h.styles = [F, T];
let d = h;
y([
  C({ type: Object })
], d.prototype, "config");
y([
  I()
], d.prototype, "activeId");
j(
  d
);
typeof d < "u" && d.registerSallaComponent("salla-parts-feature-spotlight");
export {
  d as default
};
