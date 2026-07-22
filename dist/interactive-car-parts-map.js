var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, svg, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, c as extractImageUrl, e as extractLink, j as clamp, f as toNumber, k as itemIdFromLabel, d as isTruthy, g as getRadioValue, t, s as sharedSectionCss, r as readSectionTheme, p as prefersReducedMotion, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .icpm-shell {
    display: grid;
    gap: 1.15rem;
  }


  .icpm-layout {
    display: grid;
    gap: 1.15rem;
    align-items: start;
  }

  @media (min-width: 920px) {
    .icpm-layout {
      grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.85fr);
      gap: 1.35rem;
    }
  }

  .icpm-stage-card {
    padding: 0.85rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 0.85rem;
  }

  .icpm-stage {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    overflow: hidden;
    background:
      radial-gradient(
        ellipse at 50% 70%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, transparent),
        transparent 55%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--border-color, #d9e2ec) 28%, var(--card-bg, #fff)),
        color-mix(in srgb, var(--border-color, #d9e2ec) 12%, var(--card-bg, #fff))
      );
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .icpm-stage__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .icpm-silhouette {
    position: absolute;
    inset: 12% 8% 18%;
    width: auto;
    height: auto;
    max-width: 84%;
    max-height: 70%;
    margin: auto;
    opacity: 0.55;
    color: color-mix(in srgb, var(--text-color, #111827) 55%, var(--muted-color, #64748b));
  }

  .icpm-stage__missing {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: end center;
    padding: 0.85rem 1rem 1rem;
    pointer-events: none;
  }

  .icpm-stage__missing p {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--card-bg, #fff) 88%, transparent);
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
  }

  .icpm-hotspot {
    position: absolute;
    transform: translate(-50%, -50%);
    inset-inline-start: var(--dot-x, 50%);
    top: var(--dot-y, 50%);
    z-index: 2;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    display: grid;
    justify-items: center;
    gap: 0.28rem;
  }

  :host-context([dir='rtl']) .icpm-hotspot,
  :host([dir='rtl']) .icpm-hotspot {
    inset-inline-start: auto;
    inset-inline-end: var(--dot-x, 50%);
    transform: translate(50%, -50%);
  }

  .icpm-hotspot__pin {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    border: 2px solid #fff;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .icpm-hotspot:hover .icpm-hotspot__pin,
  .icpm-hotspot.is-active .icpm-hotspot__pin {
    transform: scale(1.08);
  }

  .icpm-hotspot.is-active .icpm-hotspot__pin {
    box-shadow:
      0 0 0 4px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
      0 8px 18px rgba(15, 23, 42, 0.3);
  }

  .icpm-hotspot__pulse {
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: inherit;
    opacity: 0.45;
    animation: icpm-pulse 2s ease-out infinite;
    pointer-events: none;
    z-index: -1;
  }

  .icpm-hotspot__label {
    max-width: 7.5rem;
    padding: 0.22rem 0.5rem;
    border-radius: 999px;
    font-size: 0.68rem;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color, #111827);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, transparent);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.08);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.18s ease, transform 0.18s ease;
    pointer-events: none;
  }

  .icpm-hotspot:hover .icpm-hotspot__label,
  .icpm-hotspot.is-active .icpm-hotspot__label,
  .icpm-hotspot:focus-visible .icpm-hotspot__label {
    opacity: 1;
    transform: translateY(0);
  }

  .icpm-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .icpm-legend__item {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 40px;
    padding: 0.4rem 0.7rem 0.4rem 0.45rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
  }

  .icpm-legend__item:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    transform: translateY(-1px);
  }

  .icpm-legend__item.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
  }

  .icpm-legend__num {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.68rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .icpm-panel {
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: var(--section-radius, 20px);
    padding: 1.15rem 1.15rem 1.25rem;
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 0.85rem;
    align-content: start;
  }

  .icpm-panel__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .icpm-panel__kicker {
    margin: 0 0 0.2rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-panel__title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .icpm-panel__nav {
    display: inline-flex;
    gap: 0.35rem;
    flex: 0 0 auto;
  }

  .icpm-nav-btn {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .icpm-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-panel__desc {
    margin: 0;
    color: var(--muted-color, #64748b);
    line-height: 1.65;
    font-size: 0.92rem;
  }

  .icpm-panel__img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    display: block;
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .icpm-tip {
    display: grid;
    gap: 0.2rem;
    padding: 0.75rem 0.85rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .icpm-tip__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-tip__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .icpm-panel--empty {
    min-height: 12rem;
    place-items: center;
    text-align: center;
    color: var(--muted-color, #64748b);
  }

  .icpm-panel--empty p {
    margin: 0;
    max-width: 16rem;
    line-height: 1.6;
  }

  .icpm-sheet-backdrop {
    position: fixed;
    inset: 0;
    z-index: 55;
    background: rgba(17, 24, 39, 0.45);
    border: none;
  }

  @media (max-width: 919px) {
    .icpm-shell {
      gap: 0.85rem;
    }



    .icpm-layout {
      gap: 0.85rem;
    }

    .icpm-stage-card {
      padding: 0.65rem;
      gap: 0.7rem;
    }

    .icpm-stage {
      aspect-ratio: 4 / 3;
      min-height: 220px;
    }

    /* Smaller visible pin; the ::before keeps a 44px+ touch target */
    .icpm-hotspot::before {
      content: '';
      position: absolute;
      inset: -14px;
      border-radius: 999px;
    }

    .icpm-hotspot__pin {
      width: 26px;
      height: 26px;
      font-size: 0.6rem;
      border-width: 1.5px;
      box-shadow: 0 4px 10px rgba(15, 23, 42, 0.24);
    }

    /* Names come from the legend chips on small screens */
    .icpm-hotspot__label {
      display: none !important;
    }

    .icpm-legend {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 0.4rem;
      padding-bottom: 0.2rem;
      margin-inline: -0.15rem;
      padding-inline: 0.15rem;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
    }

    .icpm-legend::-webkit-scrollbar {
      display: none;
    }

    .icpm-legend__item {
      flex: 0 0 auto;
      scroll-snap-align: start;
      min-height: 44px;
      max-width: 11.5rem;
      font-size: 0.78rem;
    }

    .icpm-legend__item span:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .icpm-panel {
      padding: 1rem 0.95rem 1.1rem;
      gap: 0.75rem;
    }

    .icpm-panel__title {
      font-size: 1.05rem;
    }

    .icpm-panel__img {
      aspect-ratio: 16 / 10;
    }

    .icpm-panel--empty {
      min-height: auto;
      padding: 0.9rem;
    }

    .icpm-nav-btn {
      width: 40px;
      height: 40px;
    }

    .icpm-layout--sheet .icpm-panel:not(.icpm-panel--empty) {
      position: fixed;
      inset-inline: 0;
      bottom: 0;
      z-index: 60;
      border-radius: 18px 18px 0 0;
      max-height: min(78vh, 560px);
      overflow-y: auto;
      padding-bottom: calc(1.1rem + env(safe-area-inset-bottom, 0px));
      animation: icpm-sheet-up 0.28s ease;
      box-shadow: 0 -12px 40px rgba(15, 23, 42, 0.18);
    }

    .icpm-layout--sheet .icpm-panel--empty {
      display: none;
    }

    .icpm-layout--sheet .icpm-sheet-backdrop {
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }
  }

  @media (max-width: 480px) {
    .icpm-stage {
      aspect-ratio: 1 / 1;
      min-height: 240px;
    }

    .icpm-silhouette {
      inset: 16% 6% 22%;
      max-width: 90%;
    }

    .icpm-hotspot__pin {
      width: 22px;
      height: 22px;
      font-size: 0.55rem;
    }

    .icpm-hotspot.is-active .icpm-hotspot__pin {
      box-shadow:
        0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        0 5px 12px rgba(15, 23, 42, 0.26);
    }

    .icpm-panel__head {
      flex-wrap: wrap;
    }
  }

  @keyframes icpm-pulse {
    0% {
      transform: scale(1);
      opacity: 0.45;
    }
    70% {
      transform: scale(2.1);
      opacity: 0;
    }
    100% {
      transform: scale(2.1);
      opacity: 0;
    }
  }

  @keyframes icpm-sheet-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .icpm-hotspot__pin,
    .icpm-hotspot__pulse,
    .icpm-hotspot__label,
    .icpm-legend__item,
    .icpm-panel {
      animation: none !important;
      transition: none !important;
    }
  }
`, DEFAULT_PARTS_META = [
  {
    ar: "المحرك",
    en: "Engine",
    x: 52,
    y: 38,
    dar: "زيت، فلاتر، سير، وقطع التبريد.",
    den: "Oil, filters, belts, and cooling parts.",
    tipAr: "تحقق من مستوى الزيت شهريًا.",
    tipEn: "Check oil level monthly.",
    icon: "01"
  },
  {
    ar: "الإطارات",
    en: "Tires",
    x: 18,
    y: 72,
    dar: "إطارات، جنوط، وصمامات.",
    den: "Tires, rims, and valves.",
    tipAr: "افحص ضغط الإطارات أسبوعيًا.",
    tipEn: "Check tire pressure weekly.",
    icon: "02"
  },
  {
    ar: "الفرامل",
    en: "Brakes",
    x: 78,
    y: 58,
    dar: "أقراص، فحمات، وسائل فرامل.",
    den: "Rotors, pads, and brake fluid.",
    tipAr: "استبدل الفحمات عند سماع صوت صرير.",
    tipEn: "Replace pads when you hear squealing.",
    icon: "03"
  },
  {
    ar: "الإضاءة",
    en: "Lights",
    x: 88,
    y: 28,
    dar: "مصابيح أمامية، خلفية، وإشارات.",
    den: "Headlights, taillights, and signals.",
    tipAr: "نظّف عدسات المصابيح بانتظام.",
    tipEn: "Clean headlight lenses regularly.",
    icon: "04"
  },
  {
    ar: "المقصورة",
    en: "Cabin",
    x: 48,
    y: 22,
    dar: "فلاتر AC، مساحات، وإكسسوارات داخلية.",
    den: "AC filters, wipers, and interior accessories.",
    tipAr: "غيّر فلتر المكيف كل 10–15 ألف كم.",
    tipEn: "Replace the AC filter every 10–15k km.",
    icon: "05"
  },
  {
    ar: "الهيكل",
    en: "Body",
    x: 50,
    y: 55,
    dar: "صدامات، مرايا، وقطع خارجية.",
    den: "Bumpers, mirrors, and exterior parts.",
    tipAr: "افحص الصدمات الخفيفة مبكرًا.",
    tipEn: "Inspect minor impacts early.",
    icon: "06"
  },
  {
    ar: "التعليق",
    en: "Suspension",
    x: 30,
    y: 62,
    dar: "مساعدات، مقصات، ومجموعة التوجيه.",
    den: "Shocks, arms, and steering components.",
    tipAr: "انتبه لاهتزاز المقود عند السرعة.",
    tipEn: "Watch for steering vibration at speed.",
    icon: "07"
  }
];
function defaultParts() {
  return DEFAULT_PARTS_META.map((p, i) => {
    const name = t(p.ar, p.en);
    return {
      id: itemIdFromLabel(name, "") || `default-${i + 1}`,
      name,
      x: p.x,
      y: p.y,
      title: name,
      desc: t(p.dar, p.den),
      icon: p.icon,
      link: "",
      image: "",
      tip: t(p.tipAr, p.tipEn)
    };
  });
}
__name(defaultParts, "defaultParts");
function parseParts(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name), title = localizedString(row.title) || name;
    if (!name && !title) return null;
    const label2 = title || name;
    return {
      id: String(row.id ?? "").trim() || itemIdFromLabel(label2, "") || `part-${i + 1}`,
      name: name || title,
      x: clamp(toNumber(row.x, 50), 0, 100),
      y: clamp(toNumber(row.y, 50), 0, 100),
      title: label2,
      desc: localizedString(row.desc),
      icon: String(row.icon ?? "").trim() || String(i + 1).padStart(2, "0"),
      link: extractLink(row.link),
      image: extractImageUrl(row.image),
      tip: localizedString(row.tip)
    };
  }).filter((p) => !!p);
  return parsed.length ? parsed : defaultParts();
}
__name(parseParts, "parseParts");
function resolveDetailMode(config) {
  return getRadioValue(config.icpm_detail_mode, "inline") === "sheet" ? "sheet" : "inline";
}
__name(resolveDetailMode, "resolveDetailMode");
function showLegend(config) {
  return isTruthy(config.icpm_show_legend, !0);
}
__name(showLegend, "showLegend");
function defaultPartId(parts) {
  var _a;
  return ((_a = parts[0]) == null ? void 0 : _a.id) ?? "";
}
__name(defaultPartId, "defaultPartId");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _InteractiveCarPartsMap = class _InteractiveCarPartsMap extends LitElement {
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
    changed.has("config") && (this.activeId = defaultPartId(this.parts));
  }
  get parts() {
    var _a;
    return parseParts((_a = this.config) == null ? void 0 : _a.icpm_parts);
  }
  resolveActive(parts) {
    return !parts.length || this.activeId === "__none__" ? null : parts.find((p) => p.id === this.activeId) ?? parts[0] ?? null;
  }
  activeIndex(parts, active) {
    return active ? parts.findIndex((p) => p.id === active.id) : -1;
  }
  selectPart(id) {
    this.activeId = id, this.updateComplete.then(() => {
      var _a;
      const activeChip = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(
        ".icpm-legend__item.is-active"
      );
      activeChip == null || activeChip.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }
  shiftActive(parts, delta) {
    if (!parts.length) return;
    const active = this.resolveActive(parts), next = (Math.max(0, this.activeIndex(parts, active)) + delta + parts.length) % parts.length;
    this.activeId = parts[next].id;
  }
  pinLabel(part, index) {
    const raw = String(part.icon || "").trim();
    return raw && raw.length <= 3 ? raw : String(index + 1).padStart(2, "0");
  }
  renderSilhouette() {
    return svg`
      <svg class="icpm-silhouette" viewBox="0 0 640 280" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M78 178c8-42 46-78 118-96 52-14 118-20 188-18 74 2 132 16 168 42 28 20 46 48 52 78l6 22H72l6-28zm86-18c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32zm312 0c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32zM168 112c34-18 92-30 168-30s134 12 168 30c-18-28-64-48-156-50-96-2-150 18-180 50z"
          opacity="0.35"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="8"
          stroke-linecap="round"
          d="M96 176c18-46 64-78 148-90 70-10 148-8 214 8 48 12 84 40 102 78"
          opacity="0.55"
        />
      </svg>
    `;
  }
  renderHotspot(part, index, pulse, activeId) {
    const active = activeId === part.id;
    return html`
      <button
        type="button"
        class=${classMap({ "icpm-hotspot": !0, "is-active": active })}
        style=${styleMap({ "--dot-x": `${part.x}%`, "--dot-y": `${part.y}%` })}
        aria-pressed=${active ? "true" : "false"}
        aria-label=${part.name}
        title=${part.name}
        @click=${() => this.selectPart(part.id)}
      >
        <span class="icpm-hotspot__pin">
          ${pulse && !active ? html`<span class="icpm-hotspot__pulse" aria-hidden="true"></span>` : nothing}
          ${this.pinLabel(part, index)}
        </span>
        <span class="icpm-hotspot__label">${part.name}</span>
      </button>
    `;
  }
  renderLegend(parts, active) {
    return showLegend(this.config || {}) ? html`
      <div class="icpm-legend" role="list" aria-label=${t("أنظمة السيارة", "Vehicle systems")}>
        ${parts.map(
      (part, index) => html`
            <button
              type="button"
              role="listitem"
              class=${classMap({ "icpm-legend__item": !0, "is-active": (active == null ? void 0 : active.id) === part.id })}
              aria-pressed=${(active == null ? void 0 : active.id) === part.id ? "true" : "false"}
              @click=${() => this.selectPart(part.id)}
            >
              <span class="icpm-legend__num">${this.pinLabel(part, index)}</span>
              <span>${part.name}</span>
            </button>
          `
    )}
      </div>
    ` : nothing;
  }
  renderDetail(part, mode, parts) {
    if (!part)
      return html`<div class="icpm-panel icpm-panel--empty" role="region">
        <p>${t("اضغط على نقطة في الخريطة أو اختر نظامًا من القائمة.", "Tap a hotspot or pick a system from the list.")}</p>
      </div>`;
    const idx = this.activeIndex(parts, part);
    return html`
      <div class="icpm-panel" role="region" aria-live="polite">
        ${mode === "sheet" ? html`<button
              type="button"
              class="fs-btn fs-btn--ghost fs-tap"
              aria-label=${t("إغلاق", "Close")}
              @click=${() => this.activeId = "__none__"}
            >
              ${t("إغلاق", "Close")}
            </button>` : nothing}

        <div class="icpm-panel__head">
          <div>
            <p class="icpm-panel__kicker">
              ${t("نظام مختار", "Selected system")}
              ${idx >= 0 ? ` · ${idx + 1}/${parts.length}` : ""}
            </p>
            <h3 class="icpm-panel__title">${part.title || part.name}</h3>
          </div>
          ${parts.length > 1 ? html`<div class="icpm-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${t("السابق", "Previous")}
                  @click=${() => this.shiftActive(parts, -1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${t("التالي", "Next")}
                  @click=${() => this.shiftActive(parts, 1)}
                >
                  ›
                </button>
              </div>` : nothing}
        </div>

        ${part.image ? html`<img class="icpm-panel__img" src=${part.image} alt="" loading="lazy" />` : nothing}
        ${part.desc ? html`<p class="icpm-panel__desc">${part.desc}</p>` : nothing}
        ${part.tip ? html`<div class="icpm-tip">
              <span class="icpm-tip__label">${t("نصيحة صيانة", "Maintenance tip")}</span>
              <p class="icpm-tip__text">${part.tip}</p>
            </div>` : nothing}
        ${part.link ? html`<a class="fs-btn fs-tap" href=${part.link} target="_blank" rel="noopener noreferrer">
              ${t("تصفّح قطع هذا النظام", "Browse this system")}
            </a>` : nothing}
      </div>
    `;
  }
  renderProducts(active) {
    return renderCommerceOutcome(this.config || {}, "icpm_", {
      ready: !!active
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "icpm_"), animate = !prefersReducedMotion(), parts = this.parts, carImage = extractImageUrl(c.icpm_car_image), title = localizedString(c.icpm_title) || t("خريطة أجزاء السيارة", "Car parts map"), desc = localizedString(c.icpm_desc) || t(
      "استكشف أنظمة السيارة بالنقاط أو القائمة، ثم اعرض القطع المناسبة لكل نظام.",
      "Explore vehicle systems via hotspots or the list, then see matching parts."
    ), detailMode = resolveDetailMode(c), pulse = isTruthy(c.icpm_pulse, !0) && animate, active = this.resolveActive(parts), sheetOpen = detailMode === "sheet" && !!active, activeIdx = this.activeIndex(parts, active);
    return parts.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="icpm-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("استكشف بالخريطة", "Explore by map")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              ${activeIdx >= 0 ? html`<p class="fs-hero__meta">
                    ${t("النظام الحالي", "Current system")}: ${active == null ? void 0 : active.name}
                    · ${activeIdx + 1}/${parts.length}
                  </p>` : nothing}
            </div>

            <div class=${classMap({ "icpm-layout": !0, "icpm-layout--sheet": detailMode === "sheet" })}>
              <div class="icpm-stage-card">
                <div class="icpm-stage">
                  ${carImage ? html`<img class="icpm-stage__img" src=${carImage} alt="" loading="lazy" />` : html`
                        ${this.renderSilhouette()}
                        <div class="icpm-stage__missing" role="img">
                          <p>${t("أضف صورة السيارة من الإعدادات", "Add a car image in settings")}</p>
                        </div>
                      `}
                  ${parts.map((part, i) => this.renderHotspot(part, i, pulse, (active == null ? void 0 : active.id) ?? ""))}
                </div>
                ${this.renderLegend(parts, active)}
              </div>

              ${detailMode === "sheet" ? html`
                    ${sheetOpen ? html`<button
                          class="icpm-sheet-backdrop"
                          aria-label=${t("إغلاق", "Close")}
                          @click=${() => this.activeId = "__none__"}
                        ></button>` : nothing}
                    ${this.renderDetail(active, detailMode, parts)}
                  ` : this.renderDetail(active, detailMode, parts)}
            </div>

            ${this.renderProducts(active)}
          </div>
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف أجزاء السيارة من إعدادات العنصر.", "Add car parts in the element settings.")}
      </div>`;
  }
};
__name(_InteractiveCarPartsMap, "InteractiveCarPartsMap"), _InteractiveCarPartsMap.styles = [sharedSectionCss, componentStyles];
let InteractiveCarPartsMap = _InteractiveCarPartsMap;
__decorateClass([
  property({ type: Object })
], InteractiveCarPartsMap.prototype, "config");
__decorateClass([
  state()
], InteractiveCarPartsMap.prototype, "activeId");
bindSallaRegistration(
  InteractiveCarPartsMap
);
typeof InteractiveCarPartsMap < "u" && InteractiveCarPartsMap.registerSallaComponent("salla-interactive-car-parts-map");
export {
  InteractiveCarPartsMap as default
};
