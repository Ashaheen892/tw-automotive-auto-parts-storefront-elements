var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, c as extractImageUrl, k as itemIdFromLabel, d as isTruthy, t, s as sharedSectionCss, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, DEFAULT_META = [
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
function defaultFeatures() {
  return DEFAULT_META.map((m, i) => {
    const title = t(m.ar, m.en);
    return {
      id: itemIdFromLabel(title, "") || `feat-${i + 1}`,
      title,
      desc: t(m.dar, m.den),
      icon: m.icon,
      iconImage: ""
    };
  });
}
__name(defaultFeatures, "defaultFeatures");
function parseFeatures(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title) || localizedString(row.name);
    if (!title) return null;
    const iconRaw = String(row.icon ?? "").trim();
    return {
      id: String(row.id ?? "").trim() || itemIdFromLabel(title, "") || `feat-${i + 1}`,
      title,
      desc: localizedString(row.desc) || localizedString(row.description),
      icon: iconRaw || String(i + 1).padStart(2, "0"),
      iconImage: extractImageUrl(row.icon_image) || extractImageUrl(row.image)
    };
  }).filter((x) => !!x);
  return parsed.length ? parsed : defaultFeatures();
}
__name(parseFeatures, "parseFeatures");
function splitFeatures(items) {
  const mid = Math.ceil(items.length / 2);
  return {
    start: items.slice(0, mid),
    end: items.slice(mid)
  };
}
__name(splitFeatures, "splitFeatures");
function showConnectors(config) {
  return isTruthy(config.pfs_show_connectors, !0);
}
__name(showConnectors, "showConnectors");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _PartsFeatureSpotlight = class _PartsFeatureSpotlight extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a;
    changed.has("config") && (this.activeId = ((_a = this.features[0]) == null ? void 0 : _a.id) ?? "");
  }
  get features() {
    var _a;
    return parseFeatures((_a = this.config) == null ? void 0 : _a.pfs_features);
  }
  get active() {
    return this.features.find((f) => f.id === this.activeId) ?? this.features[0] ?? null;
  }
  select(id) {
    this.activeId = id;
  }
  renderFeature(item) {
    var _a;
    const active = item.id === ((_a = this.active) == null ? void 0 : _a.id);
    return html`
      <button
        type="button"
        class=${classMap({ "pfs-feat": !0, "is-active": active })}
        aria-pressed=${active ? "true" : "false"}
        @click=${() => this.select(item.id)}
      >
        <span class="pfs-feat__icon" aria-hidden="true">
          ${item.iconImage ? html`<img src=${item.iconImage} alt="" loading="lazy" decoding="async" />` : item.icon}
        </span>
        <span class="pfs-feat__body">
          <h3 class="pfs-feat__title">${item.title}</h3>
          ${item.desc ? html`<p class="pfs-feat__desc">${item.desc}</p>` : nothing}
        </span>
      </button>
    `;
  }
  renderProducts(item) {
    return renderCommerceOutcome(this.config || {}, "pfs_", {
      ready: !!item
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "pfs_"), features = this.features, { start, end } = splitFeatures(features), active = this.active, title = localizedString(c.pfs_title) || t("مميزات القطعة في لمحة", "Part features at a glance"), desc = localizedString(c.pfs_desc) || t(
      "استكشف أبرز مزايا القطعة حول الصورة المركزية، ثم تصفّح المنتجات المرتبطة.",
      "Explore key part benefits around the center image, then browse related products."
    ), centerImage = extractImageUrl(c.pfs_center_image), centerCaption = localizedString(c.pfs_center_caption) || t("القطعة المختارة", "Featured part"), connectors = showConnectors(c);
    return features.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="pfs-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("لماذا هذه القطعة؟", "Why this part?")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div
              class=${classMap({
      "pfs-stage": !0,
      "has-connectors": connectors
    })}
            >
              <div class="pfs-col pfs-col--start" role="list">
                ${start.map((item) => html`<div role="listitem">${this.renderFeature(item)}</div>`)}
              </div>

              <div class="pfs-center">
                <div class="pfs-center__frame">
                  ${centerImage ? html`<img
                        class="pfs-center__img"
                        src=${centerImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />` : html`<span class="pfs-center__placeholder" aria-hidden="true">+</span>`}
                </div>
                ${centerCaption ? html`<p class="pfs-center__caption">${centerCaption}</p>` : nothing}
              </div>

              <div class="pfs-col pfs-col--end" role="list">
                ${end.map((item) => html`<div role="listitem">${this.renderFeature(item)}</div>`)}
              </div>
            </div>

            ${this.renderProducts(active)}
          </div>
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف المميزات من إعدادات العنصر", "Add features in element settings")}
      </div>`;
  }
};
__name(_PartsFeatureSpotlight, "PartsFeatureSpotlight"), _PartsFeatureSpotlight.styles = [sharedSectionCss, componentStyles];
let PartsFeatureSpotlight = _PartsFeatureSpotlight;
__decorateClass([
  property({ type: Object })
], PartsFeatureSpotlight.prototype, "config");
__decorateClass([
  state()
], PartsFeatureSpotlight.prototype, "activeId");
bindSallaRegistration(
  PartsFeatureSpotlight
);
typeof PartsFeatureSpotlight < "u" && PartsFeatureSpotlight.registerSallaComponent("salla-parts-feature-spotlight");
export {
  PartsFeatureSpotlight as default
};
