var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, f as toNumber, t, e as extractLink, k as itemIdFromLabel, d as isTruthy, s as sharedSectionCss, r as readSectionTheme, g as getRadioValue, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .mmt-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .mmt-card {
    position: relative;
    overflow: hidden;
    padding: 1.25rem 1.15rem 1.35rem;
    border-radius: var(--section-radius, 20px);
    background:
      radial-gradient(
        120% 80% at 100% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, transparent),
        transparent 55%
      ),
      var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1.15rem;
  }

  .mmt-odometer {
    display: grid;
    gap: 0.55rem;
    width: 100%;
    max-width: 420px;
    padding: 0.95rem 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.65);
    background: color-mix(in srgb, var(--card-bg, #fff) 88%, #f1f5f9);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 88%, #fff);
  }

  .mmt-odometer__label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .mmt-odometer__row {
    display: flex;
    gap: 0.55rem;
    align-items: stretch;
  }

  .mmt-odometer__input {
    flex: 1;
    min-width: 0;
    min-height: 50px;
    padding: 0.75rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.5);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .mmt-odometer__input:focus {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
    outline: none;
  }

  .mmt-odometer__unit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 3.4rem;
    padding: 0 0.75rem;
    border-radius: calc(var(--section-radius, 20px) * 0.5);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-size: 0.82rem;
    font-weight: 900;
    color: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .mmt-hint {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted-color, #64748b);
    line-height: 1.5;
  }

  .mmt-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem 0.9rem;
    font-size: 0.74rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .mmt-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .mmt-legend i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .mmt-legend i.is-done {
    background: var(--fs-success, #2f9e63);
  }

  .mmt-legend i.is-due {
    background: var(--accent-color, var(--fs-store-primary));
  }

  .mmt-legend i.is-upcoming {
    background: color-mix(in srgb, var(--muted-color, #64748b) 55%, #fff);
  }

  .mmt-layout {
    display: grid;
    gap: 1.15rem;
  }

  @media (min-width: 900px) {
    .mmt-layout:not(.mmt-layout--vertical) {
      grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.9fr);
      align-items: start;
      gap: 1.35rem;
    }
  }

  .mmt-track-wrap {
    position: relative;
    padding: 0.85rem 0.35rem 0.45rem;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, #fff),
        var(--card-bg, #fff) 60%
      );
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 90%, #fff);
  }

  .mmt-progress {
    position: absolute;
    top: 2.35rem;
    inset-inline: 1.65rem;
    height: 5px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 85%, #fff);
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .mmt-progress__fill {
    height: 100%;
    width: var(--mmt-progress, 0%);
    background: var(--accent-color, var(--fs-store-primary));
    border-radius: inherit;
    transition: width 0.4s ease;
  }

  .mmt-track {
    position: relative;
    display: flex;
    gap: 0;
    overflow-x: auto;
    padding: 0.35rem 0.2rem 0.55rem;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    z-index: 1;
  }

  .mmt-track::-webkit-scrollbar {
    display: none;
  }

  .mmt-item {
    position: relative;
    flex: 0 0 auto;
    min-width: 128px;
    max-width: 160px;
    padding: 0 0.45rem 0.2rem;
    scroll-snap-align: start;
  }

  .mmt-node {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.2rem 0.1rem;
    border: none;
    background: transparent;
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .mmt-node:hover {
    transform: translateY(-2px);
  }

  .mmt-node__pin {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.74rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    background: var(--card-bg, #fff);
    border: 2px solid var(--border-color, #d9e2ec);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
    transition:
      border-color 0.2s ease,
      transform 0.2s ease,
      background 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .mmt-node.is-active .mmt-node__pin,
  .mmt-node:hover .mmt-node__pin {
    border-color: var(--accent-color, var(--fs-store-primary));
  }

  .mmt-node.is-active .mmt-node__pin {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow:
      0 0 0 5px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent),
      0 10px 22px rgba(15, 23, 42, 0.16);
  }

  .mmt-node.is-due:not(.is-active) .mmt-node__pin {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, var(--card-bg, #fff));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, var(--border-color, #d9e2ec));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .mmt-node.is-done .mmt-node__pin {
    background: color-mix(in srgb, var(--fs-success, #2f9e63) 16%, var(--card-bg, #fff));
    border-color: color-mix(in srgb, var(--fs-success, #2f9e63) 55%, var(--border-color, #d9e2ec));
    color: var(--fs-success, #2f9e63);
  }

  .mmt-node.is-upcoming:not(.is-active) .mmt-node__pin {
    opacity: 0.92;
  }

  .mmt-node__km {
    font-size: 0.8rem;
    font-weight: 900;
    text-align: center;
    line-height: 1.3;
  }

  .mmt-node__title {
    margin: 0;
    max-width: 9.5rem;
    font-size: 0.72rem;
    font-weight: 700;
    line-height: 1.35;
    text-align: center;
    color: var(--muted-color, #64748b);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .mmt-node.is-active .mmt-node__title {
    color: var(--text-color, #111827);
  }

  .mmt-node__status {
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .mmt-node.is-due .mmt-node__status {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .mmt-node.is-done .mmt-node__status {
    color: var(--fs-success, #2f9e63);
  }

  .mmt-panel {
    display: grid;
    gap: 0.9rem;
    padding: 1.2rem 1.2rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    align-content: start;
  }

  .mmt-panel__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.85rem;
  }

  .mmt-panel__kicker {
    margin: 0 0 0.25rem;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .mmt-panel__title {
    margin: 0;
    font-size: clamp(1.05rem, 2.2vw, 1.22rem);
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .mmt-panel__nav {
    display: inline-flex;
    gap: 0.4rem;
    flex: 0 0 auto;
  }

  .mmt-nav-btn {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  }

  .mmt-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    transform: scale(1.04);
  }

  .mmt-nav-btn:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 30%, transparent);
    outline-offset: 2px;
  }

  .mmt-badge {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.74rem;
    font-weight: 800;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--muted-color, #64748b);
    width: fit-content;
  }

  .mmt-badge.is-due {
    color: var(--accent-color, var(--fs-store-primary));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .mmt-badge.is-done {
    color: var(--fs-success, #2f9e63);
    border-color: color-mix(in srgb, var(--fs-success, #2f9e63) 40%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--fs-success, #2f9e63) 10%, var(--card-bg, #fff));
  }

  .mmt-badge.is-upcoming {
    color: var(--muted-color, #64748b);
  }

  .mmt-services {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }

  .mmt-services li {
    display: grid;
    grid-template-columns: 1.35rem 1fr;
    gap: 0.55rem;
    align-items: start;
    padding: 0.7rem 0.8rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    background: color-mix(in srgb, var(--card-bg, #fff) 90%, #f8fafc);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 88%, #fff);
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .mmt-services li::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    margin-top: 0.4rem;
    border-radius: 999px;
    background: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, transparent);
  }

  .mmt-note {
    margin: 0;
    padding: 0.85rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
    font-size: 0.86rem;
    color: var(--text-color, #111827);
    line-height: 1.55;
  }

  .mmt-panel .fs-btn {
    width: fit-content;
    min-width: min(100%, 14rem);
  }

  /* Vertical */
  .mmt-layout--vertical .mmt-track-wrap {
    padding: 1rem 0.9rem;
  }

  .mmt-layout--vertical .mmt-progress {
    top: 1.15rem;
    bottom: 1.15rem;
    inset-inline-start: 2rem;
    inset-inline-end: auto;
    width: 5px;
    height: auto;
  }

  .mmt-layout--vertical .mmt-progress__fill {
    width: 100%;
    height: var(--mmt-progress, 0%);
    background: linear-gradient(
      180deg,
      var(--accent-color, var(--fs-store-primary)),
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, #f59e0b)
    );
  }

  .mmt-layout--vertical .mmt-track {
    flex-direction: column;
    overflow-x: visible;
    scroll-snap-type: none;
    padding: 0;
    gap: 0.15rem;
  }

  .mmt-layout--vertical .mmt-item {
    min-width: 0;
    max-width: none;
    padding: 0 0 0.85rem;
  }

  .mmt-layout--vertical .mmt-node {
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.9rem;
    text-align: start;
    padding: 0.35rem 0.25rem;
  }

  .mmt-layout--vertical .mmt-node:hover {
    transform: none;
  }

  .mmt-layout--vertical .mmt-node__km,
  .mmt-layout--vertical .mmt-node__status,
  .mmt-layout--vertical .mmt-node__title {
    text-align: start;
    max-width: none;
  }

  .mmt-layout--vertical .mmt-node__meta {
    display: grid;
    gap: 0.15rem;
    min-width: 0;
  }

  @media (max-width: 899px) {

    .mmt-card {
      padding: 1rem 0.9rem 1.15rem;
      gap: 0.95rem;
    }

    .mmt-odometer {
      max-width: none;
    }

    .mmt-item {
      min-width: 112px;
    }

    .mmt-node__pin {
      width: 38px;
      height: 38px;
      font-size: 0.68rem;
    }

    .mmt-panel {
      padding: 1.05rem 1rem 1.15rem;
    }

    .mmt-panel .fs-btn {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mmt-node,
    .mmt-node__pin,
    .mmt-progress__fill,
    .mmt-nav-btn,
    .mmt-odometer__input {
      transition: none !important;
    }
  }
`;
function splitServices(raw) {
  const text = localizedString(raw, "");
  return text ? text.split(/\r?\n|،|;|,/).map((part) => part.trim()).filter(Boolean) : [];
}
__name(splitServices, "splitServices");
const DEFAULT_META = [
  {
    km: 5e3,
    ar: "صيانة 5,000 كم",
    en: "5,000 km service",
    services: [
      ["تغيير زيت المحرك", "Engine oil change"],
      ["فحص الإطارات", "Tire inspection"]
    ],
    noteAr: "صيانة دورية أساسية.",
    noteEn: "Basic routine service."
  },
  {
    km: 1e4,
    ar: "صيانة 10,000 كم",
    en: "10,000 km service",
    services: [
      ["فلتر هواء", "Air filter"],
      ["فلتر المكيف", "AC filter"],
      ["تدوير الإطارات", "Tire rotation"]
    ],
    noteAr: "",
    noteEn: ""
  },
  {
    km: 2e4,
    ar: "صيانة 20,000 كم",
    en: "20,000 km service",
    services: [
      ["فلتر وقود", "Fuel filter"],
      ["فحص الفرامل", "Brake inspection"],
      ["سائل فرامل", "Brake fluid"]
    ],
    noteAr: "",
    noteEn: ""
  },
  {
    km: 4e4,
    ar: "صيانة 40,000 كم",
    en: "40,000 km service",
    services: [
      ["تغيير فحمات الفرامل", "Brake pad replacement"],
      ["فحص التعليق", "Suspension check"]
    ],
    noteAr: "",
    noteEn: ""
  },
  {
    km: 8e4,
    ar: "صيانة 80,000 كم",
    en: "80,000 km service",
    services: [
      ["تغيير الإطارات", "Tire replacement"],
      ["فحص البطارية", "Battery check"],
      ["سير المحرك", "Engine belt"]
    ],
    noteAr: "صيانة شاملة.",
    noteEn: "Major service interval."
  }
];
function defaultMilestones() {
  return DEFAULT_META.map((m, i) => ({
    id: `default-${i + 1}`,
    km: m.km,
    title: t(m.ar, m.en),
    services: m.services.map(([ar, en]) => t(ar, en)),
    icon: String(i + 1).padStart(2, "0"),
    link: "",
    note: m.noteAr || m.noteEn ? t(m.noteAr, m.noteEn) : ""
  }));
}
__name(defaultMilestones, "defaultMilestones");
function parseMilestones(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title), km = toNumber(row.km, 0), servicesRaw = row.services, services = typeof servicesRaw == "string" || servicesRaw && typeof servicesRaw == "object" ? splitServices(servicesRaw) : normalizeCollection(servicesRaw).map((s) => localizedString(s.name) || String(s.text ?? "").trim()).filter(Boolean);
    if (!km && !title) return null;
    const label2 = title || formatKm(km, t("كم", "km"));
    return {
      id: String(row.id ?? "").trim() || itemIdFromLabel(label2, "") || `mile-${i + 1}`,
      km,
      title: label2,
      services,
      icon: String(row.icon ?? "").trim() || String(i + 1).padStart(2, "0"),
      link: extractLink(row.link),
      note: localizedString(row.note)
    };
  }).filter((m) => !!m);
  return [...parsed.length ? parsed : defaultMilestones()].sort((a, b) => a.km - b.km);
}
__name(parseMilestones, "parseMilestones");
function formatKm(km, unitLabel) {
  const formatted = Number.isFinite(km) ? km.toLocaleString() : "0";
  return unitLabel ? `${formatted} ${unitLabel}` : formatted;
}
__name(formatKm, "formatKm");
function showOdometer(config) {
  return isTruthy(config.mmt_show_odometer, !0);
}
__name(showOdometer, "showOdometer");
function milestoneStatus(milestone, currentKm, dueWindow = 1500) {
  return currentKm == null || !Number.isFinite(currentKm) || currentKm < 0 ? "neutral" : milestone.km < currentKm - dueWindow ? "done" : Math.abs(milestone.km - currentKm) <= dueWindow || milestone.km <= currentKm ? "due" : "upcoming";
}
__name(milestoneStatus, "milestoneStatus");
function progressPercent(milestones, currentKm) {
  var _a;
  if (!milestones.length || currentKm == null || !Number.isFinite(currentKm)) return 0;
  const max = ((_a = milestones[milestones.length - 1]) == null ? void 0 : _a.km) || 1;
  return Math.max(0, Math.min(100, currentKm / max * 100));
}
__name(progressPercent, "progressPercent");
function nearestMilestoneId(milestones, currentKm) {
  if (!milestones.length) return "";
  let best = milestones[0], bestDist = Math.abs(best.km - currentKm);
  for (const m of milestones) {
    const dist = Math.abs(m.km - currentKm);
    dist < bestDist && (best = m, bestDist = dist);
  }
  return best.id;
}
__name(nearestMilestoneId, "nearestMilestoneId");
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
function pinLabel(milestone, index) {
  const raw = String(milestone.icon || "").trim();
  return raw && raw.length <= 3 && !new RegExp("\\p{Extended_Pictographic}", "u").test(raw) ? raw : String(index + 1).padStart(2, "0");
}
__name(pinLabel, "pinLabel");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _MileageMaintenanceTimeline = class _MileageMaintenanceTimeline extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.currentKmInput = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a;
    changed.has("config") && (this.activeId = ((_a = this.milestones[0]) == null ? void 0 : _a.id) ?? "", this.currentKmInput = "");
  }
  get milestones() {
    var _a;
    return parseMilestones((_a = this.config) == null ? void 0 : _a.mmt_milestones);
  }
  get currentKm() {
    if (!showOdometer(this.config || {})) return null;
    const raw = this.currentKmInput.replace(/[^\d.]/g, "");
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  get active() {
    return this.milestones.find((m) => m.id === this.activeId) ?? this.milestones[0] ?? null;
  }
  statusOf(m) {
    return milestoneStatus(m, this.currentKm);
  }
  statusLabel(status) {
    return status === "done" ? t("تمت", "Done") : status === "due" ? t("مستحقة", "Due") : status === "upcoming" ? t("قادمة", "Upcoming") : "";
  }
  select(id) {
    this.activeId = id;
  }
  onOdometerInput(value) {
    this.currentKmInput = value;
    const km = Number(value.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(km) || km < 0) return;
    const nearest = nearestMilestoneId(this.milestones, km);
    nearest && (this.activeId = nearest);
  }
  shiftActive(delta) {
    const list = this.milestones;
    if (!list.length) return;
    const next = (Math.max(
      0,
      list.findIndex((m) => {
        var _a;
        return m.id === ((_a = this.active) == null ? void 0 : _a.id);
      })
    ) + delta + list.length) % list.length;
    this.activeId = list[next].id;
  }
  renderPanel(milestone, list) {
    if (!milestone) return nothing;
    const status = this.statusOf(milestone), idx = list.findIndex((m) => m.id === milestone.id), unitLabel = localizedString((this.config || {}).mmt_unit_label) || t("كم", "km");
    return html`
      <div class="mmt-panel" role="region" aria-live="polite">
        <div class="mmt-panel__head">
          <div>
            <p class="mmt-panel__kicker">
              ${formatKm(milestone.km, unitLabel)}
              ${idx >= 0 ? ` · ${idx + 1}/${list.length}` : ""}
            </p>
            <h3 class="mmt-panel__title">${milestone.title}</h3>
          </div>
          ${list.length > 1 ? html`<div class="mmt-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${t("السابق", "Previous")}
                  @click=${() => this.shiftActive(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${t("التالي", "Next")}
                  @click=${() => this.shiftActive(1)}
                >
                  ›
                </button>
              </div>` : nothing}
        </div>

        ${status !== "neutral" ? html`<span class=${classMap({ "mmt-badge": !0, [`is-${status}`]: !0 })}>
              ${this.statusLabel(status)}
            </span>` : nothing}

        ${milestone.services.length ? html`<ul class="mmt-services">
              ${milestone.services.map((s) => html`<li>${s}</li>`)}
            </ul>` : html`<p class="mmt-hint">${t("لا توجد خدمات محددة.", "No services listed.")}</p>`}

        ${milestone.note ? html`<p class="mmt-note">${milestone.note}</p>` : nothing}

        ${milestone.link ? html`<a
              class="fs-btn fs-tap"
              href=${milestone.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              ${t("اطلب قطع هذه المرحلة", "Order parts for this service")}
            </a>` : nothing}
      </div>
    `;
  }
  renderProducts(active) {
    return renderCommerceOutcome(this.config || {}, "mmt_", {
      ready: !!active
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "mmt_"), milestones = this.milestones, title = localizedString(c.mmt_title) || t("جدول الصيانة حسب المسافة", "Mileage maintenance timeline"), desc = localizedString(c.mmt_desc) || t(
      "أدخل عداد سيارتك الحالي ثم اختر المرحلة لمعرفة الخدمات والقطع المطلوبة.",
      "Enter your current mileage, then pick a milestone to see services and parts."
    ), unitLabel = localizedString(c.mmt_unit_label) || t("كم", "km"), layout = getRadioValue(c.mmt_layout, "horizontal"), active = this.active, progress = progressPercent(milestones, this.currentKm), odometerOn = showOdometer(c);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="mmt-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("خطة الصيانة", "Service plan")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            <div class="mmt-card">
              ${odometerOn ? html`<div class="mmt-odometer">
                    <label class="mmt-odometer__label" for="mmt-km">
                      ${label(c, "mmt_odometer_label", "عداد المسافة الحالي", "Current mileage")}
                    </label>
                    <div class="mmt-odometer__row">
                      <input
                        id="mmt-km"
                        class="mmt-odometer__input"
                        type="text"
                        inputmode="numeric"
                        .value=${this.currentKmInput}
                        placeholder=${t("مثال: 24500", "e.g. 24500")}
                        @input=${(e) => this.onOdometerInput(e.target.value)}
                      />
                      <span class="mmt-odometer__unit">${unitLabel}</span>
                    </div>
                    <p class="mmt-hint">
                      ${t(
      "سنظلّل المراحل السابقة ونقترح الأقرب لعدادك.",
      "Past services are marked and the nearest milestone is selected."
    )}
                    </p>
                  </div>` : nothing}

              ${odometerOn && this.currentKm != null ? html`<div class="mmt-legend" aria-hidden="true">
                    <span><i class="is-done"></i>${t("تمت", "Done")}</span>
                    <span><i class="is-due"></i>${t("مستحقة", "Due")}</span>
                    <span><i class="is-upcoming"></i>${t("قادمة", "Upcoming")}</span>
                  </div>` : nothing}

              <div
                class=${classMap({
      "mmt-layout": !0,
      "mmt-layout--vertical": layout === "vertical"
    })}
              >
                <div class="mmt-track-wrap">
                  <div
                    class="mmt-progress"
                    style=${styleMap({ "--mmt-progress": `${progress}%` })}
                    aria-hidden="true"
                  >
                    <div class="mmt-progress__fill"></div>
                  </div>
                  <div class="mmt-track" role="tablist" aria-label=${title}>
                    ${milestones.map((m, i) => {
      const isActive = (active == null ? void 0 : active.id) === m.id, status = this.statusOf(m);
      return html`
                        <div class="mmt-item" role="presentation">
                          <button
                            type="button"
                            class=${classMap({
        "mmt-node": !0,
        "is-active": isActive,
        "is-done": status === "done",
        "is-due": status === "due",
        "is-upcoming": status === "upcoming"
      })}
                            role="tab"
                            aria-selected=${isActive ? "true" : "false"}
                            @click=${() => this.select(m.id)}
                          >
                            <span class="mmt-node__pin">${pinLabel(m, i)}</span>
                            <span class="mmt-node__meta">
                              <span class="mmt-node__km">${formatKm(m.km, unitLabel)}</span>
                              ${m.title ? html`<span class="mmt-node__title">${m.title}</span>` : nothing}
                              ${status !== "neutral" ? html`<span class="mmt-node__status">${this.statusLabel(status)}</span>` : nothing}
                            </span>
                          </button>
                        </div>
                      `;
    })}
                  </div>
                </div>

                ${this.renderPanel(active, milestones)}
              </div>
            </div>

            ${this.renderProducts(active)}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_MileageMaintenanceTimeline, "MileageMaintenanceTimeline"), _MileageMaintenanceTimeline.styles = [sharedSectionCss, componentStyles];
let MileageMaintenanceTimeline = _MileageMaintenanceTimeline;
__decorateClass([
  property({ type: Object })
], MileageMaintenanceTimeline.prototype, "config");
__decorateClass([
  state()
], MileageMaintenanceTimeline.prototype, "activeId");
__decorateClass([
  state()
], MileageMaintenanceTimeline.prototype, "currentKmInput");
bindSallaRegistration(
  MileageMaintenanceTimeline
);
typeof MileageMaintenanceTimeline < "u" && MileageMaintenanceTimeline.registerSallaComponent("salla-mileage-maintenance-timeline");
export {
  MileageMaintenanceTimeline as default
};
