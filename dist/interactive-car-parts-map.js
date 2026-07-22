import { css as I, LitElement as E, svg as L, nothing as p, html as a } from "lit";
import { property as M, state as P } from "lit/decorators.js";
import { classMap as g } from "lit/directives/class-map.js";
import { styleMap as v } from "lit/directives/style-map.js";
import { n as R, l as m, c as y, e as T, j as x, f as _, k as $, d as w, g as j, t as s, s as H, r as B, p as D, a as O, b as Y } from "./registerSalla-Dct4KN_E.js";
import { r as U } from "./commerceOutcome-B3T0_-WJ.js";
const q = I`
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
`, N = [
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
function V() {
  return N.map((o, e) => {
    const t = s(o.ar, o.en);
    return {
      id: $(t, "") || `default-${e + 1}`,
      name: t,
      x: o.x,
      y: o.y,
      title: t,
      desc: s(o.dar, o.den),
      icon: o.icon,
      link: "",
      image: "",
      tip: s(o.tipAr, o.tipEn)
    };
  });
}
function F(o) {
  const e = R(o).map((t, i) => {
    const r = m(t.name), n = m(t.title) || r;
    if (!r && !n) return null;
    const l = n || r;
    return {
      id: String(t.id ?? "").trim() || $(l, "") || `part-${i + 1}`,
      name: r || n,
      x: x(_(t.x, 50), 0, 100),
      y: x(_(t.y, 50), 0, 100),
      title: l,
      desc: m(t.desc),
      icon: String(t.icon ?? "").trim() || String(i + 1).padStart(2, "0"),
      link: T(t.link),
      image: y(t.image),
      tip: m(t.tip)
    };
  }).filter((t) => !!t);
  return e.length ? e : V();
}
function W(o) {
  return j(o.icpm_detail_mode, "inline") === "sheet" ? "sheet" : "inline";
}
function G(o) {
  return w(o.icpm_show_legend, !0);
}
function J(o) {
  var e;
  return ((e = o[0]) == null ? void 0 : e.id) ?? "";
}
var K = Object.defineProperty, k = (o, e, t, i) => {
  for (var r = void 0, n = o.length - 1, l; n >= 0; n--)
    (l = o[n]) && (r = l(e, t, r) || r);
  return r && K(e, t, r), r;
};
const f = class f extends E {
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
    e.has("config") && (this.activeId = J(this.parts));
  }
  get parts() {
    var e;
    return F((e = this.config) == null ? void 0 : e.icpm_parts);
  }
  resolveActive(e) {
    return !e.length || this.activeId === "__none__" ? null : e.find((t) => t.id === this.activeId) ?? e[0] ?? null;
  }
  activeIndex(e, t) {
    return t ? e.findIndex((i) => i.id === t.id) : -1;
  }
  selectPart(e) {
    this.activeId = e, this.updateComplete.then(() => {
      var i;
      const t = (i = this.renderRoot) == null ? void 0 : i.querySelector(
        ".icpm-legend__item.is-active"
      );
      t == null || t.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }
  shiftActive(e, t) {
    if (!e.length) return;
    const i = this.resolveActive(e), n = (Math.max(0, this.activeIndex(e, i)) + t + e.length) % e.length;
    this.activeId = e[n].id;
  }
  pinLabel(e, t) {
    const i = String(e.icon || "").trim();
    return i && i.length <= 3 ? i : String(t + 1).padStart(2, "0");
  }
  renderSilhouette() {
    return L`
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
  renderHotspot(e, t, i, r) {
    const n = r === e.id;
    return a`
      <button
        type="button"
        class=${g({ "icpm-hotspot": !0, "is-active": n })}
        style=${v({ "--dot-x": `${e.x}%`, "--dot-y": `${e.y}%` })}
        aria-pressed=${n ? "true" : "false"}
        aria-label=${e.name}
        title=${e.name}
        @click=${() => this.selectPart(e.id)}
      >
        <span class="icpm-hotspot__pin">
          ${i && !n ? a`<span class="icpm-hotspot__pulse" aria-hidden="true"></span>` : p}
          ${this.pinLabel(e, t)}
        </span>
        <span class="icpm-hotspot__label">${e.name}</span>
      </button>
    `;
  }
  renderLegend(e, t) {
    return G(this.config || {}) ? a`
      <div class="icpm-legend" role="list" aria-label=${s("أنظمة السيارة", "Vehicle systems")}>
        ${e.map(
      (i, r) => a`
            <button
              type="button"
              role="listitem"
              class=${g({ "icpm-legend__item": !0, "is-active": (t == null ? void 0 : t.id) === i.id })}
              aria-pressed=${(t == null ? void 0 : t.id) === i.id ? "true" : "false"}
              @click=${() => this.selectPart(i.id)}
            >
              <span class="icpm-legend__num">${this.pinLabel(i, r)}</span>
              <span>${i.name}</span>
            </button>
          `
    )}
      </div>
    ` : p;
  }
  renderDetail(e, t, i) {
    if (!e)
      return a`<div class="icpm-panel icpm-panel--empty" role="region">
        <p>${s("اضغط على نقطة في الخريطة أو اختر نظامًا من القائمة.", "Tap a hotspot or pick a system from the list.")}</p>
      </div>`;
    const r = this.activeIndex(i, e);
    return a`
      <div class="icpm-panel" role="region" aria-live="polite">
        ${t === "sheet" ? a`<button
              type="button"
              class="fs-btn fs-btn--ghost fs-tap"
              aria-label=${s("إغلاق", "Close")}
              @click=${() => this.activeId = "__none__"}
            >
              ${s("إغلاق", "Close")}
            </button>` : p}

        <div class="icpm-panel__head">
          <div>
            <p class="icpm-panel__kicker">
              ${s("نظام مختار", "Selected system")}
              ${r >= 0 ? ` · ${r + 1}/${i.length}` : ""}
            </p>
            <h3 class="icpm-panel__title">${e.title || e.name}</h3>
          </div>
          ${i.length > 1 ? a`<div class="icpm-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${s("السابق", "Previous")}
                  @click=${() => this.shiftActive(i, -1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="icpm-nav-btn"
                  aria-label=${s("التالي", "Next")}
                  @click=${() => this.shiftActive(i, 1)}
                >
                  ›
                </button>
              </div>` : p}
        </div>

        ${e.image ? a`<img class="icpm-panel__img" src=${e.image} alt="" loading="lazy" />` : p}
        ${e.desc ? a`<p class="icpm-panel__desc">${e.desc}</p>` : p}
        ${e.tip ? a`<div class="icpm-tip">
              <span class="icpm-tip__label">${s("نصيحة صيانة", "Maintenance tip")}</span>
              <p class="icpm-tip__text">${e.tip}</p>
            </div>` : p}
        ${e.link ? a`<a class="fs-btn fs-tap" href=${e.link} target="_blank" rel="noopener noreferrer">
              ${s("تصفّح قطع هذا النظام", "Browse this system")}
            </a>` : p}
      </div>
    `;
  }
  renderProducts(e) {
    return U(this.config || {}, "icpm_", {
      ready: !!e
    });
  }
  render() {
    const e = this.config || {}, t = B(e, "icpm_"), i = !D(), r = this.parts, n = y(e.icpm_car_image), l = m(e.icpm_title) || s("خريطة أجزاء السيارة", "Car parts map"), b = m(e.icpm_desc) || s(
      "استكشف أنظمة السيارة بالنقاط أو القائمة، ثم اعرض القطع المناسبة لكل نظام.",
      "Explore vehicle systems via hotspots or the list, then see matching parts."
    ), h = W(e), z = w(e.icpm_pulse, !0) && i, c = this.resolveActive(r), A = h === "sheet" && !!c, u = this.activeIndex(r, c);
    return r.length ? a`
      <section
        class="fs-section"
        style=${v(O(t))}
        aria-label=${l}
      >
        <div class="fs-container">
          <div class="icpm-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${s("استكشف بالخريطة", "Explore by map")}</p>
              ${l ? a`<h2 class="fs-title">${l}</h2>` : p}
              ${b ? a`<p class="fs-desc">${b}</p>` : p}
              ${u >= 0 ? a`<p class="fs-hero__meta">
                    ${s("النظام الحالي", "Current system")}: ${c == null ? void 0 : c.name}
                    · ${u + 1}/${r.length}
                  </p>` : p}
            </div>

            <div class=${g({ "icpm-layout": !0, "icpm-layout--sheet": h === "sheet" })}>
              <div class="icpm-stage-card">
                <div class="icpm-stage">
                  ${n ? a`<img class="icpm-stage__img" src=${n} alt="" loading="lazy" />` : a`
                        ${this.renderSilhouette()}
                        <div class="icpm-stage__missing" role="img">
                          <p>${s("أضف صورة السيارة من الإعدادات", "Add a car image in settings")}</p>
                        </div>
                      `}
                  ${r.map((S, C) => this.renderHotspot(S, C, z, (c == null ? void 0 : c.id) ?? ""))}
                </div>
                ${this.renderLegend(r, c)}
              </div>

              ${h === "sheet" ? a`
                    ${A ? a`<button
                          class="icpm-sheet-backdrop"
                          aria-label=${s("إغلاق", "Close")}
                          @click=${() => this.activeId = "__none__"}
                        ></button>` : p}
                    ${this.renderDetail(c, h, r)}
                  ` : this.renderDetail(c, h, r)}
            </div>

            ${this.renderProducts(c)}
          </div>
        </div>
      </section>
    ` : a`<div class="fs-empty" role="status">
        ${s("أضف أجزاء السيارة من إعدادات العنصر.", "Add car parts in the element settings.")}
      </div>`;
  }
};
f.styles = [H, q];
let d = f;
k([
  M({ type: Object })
], d.prototype, "config");
k([
  P()
], d.prototype, "activeId");
Y(
  d
);
typeof d < "u" && d.registerSallaComponent("salla-interactive-car-parts-map");
export {
  d as default
};
