import { css as E, LitElement as A, nothing as c, html as m } from "lit";
import { property as L, state as S } from "lit/decorators.js";
import { classMap as h } from "lit/directives/class-map.js";
import { styleMap as w } from "lit/directives/style-map.js";
import { n as $, l as d, f as C, t as a, e as M, k as O, d as N, s as P, r as B, g as F, a as j, b as D } from "./registerSalla-Dct4KN_E.js";
import { r as T } from "./commerceOutcome-B3T0_-WJ.js";
const U = E`
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
function H(t) {
  const e = d(t, "");
  return e ? e.split(/\r?\n|،|;|,/).map((r) => r.trim()).filter(Boolean) : [];
}
const K = [
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
function R() {
  return K.map((t, e) => ({
    id: `default-${e + 1}`,
    km: t.km,
    title: a(t.ar, t.en),
    services: t.services.map(([r, o]) => a(r, o)),
    icon: String(e + 1).padStart(2, "0"),
    link: "",
    note: t.noteAr || t.noteEn ? a(t.noteAr, t.noteEn) : ""
  }));
}
function V(t) {
  const e = $(t).map((o, i) => {
    const n = d(o.title), s = C(o.km, 0), f = o.services, g = typeof f == "string" || f && typeof f == "object" ? H(f) : $(f).map((u) => d(u.name) || String(u.text ?? "").trim()).filter(Boolean);
    if (!s && !n) return null;
    const b = n || x(s, a("كم", "km"));
    return {
      id: String(o.id ?? "").trim() || O(b, "") || `mile-${i + 1}`,
      km: s,
      title: b,
      services: g,
      icon: String(o.icon ?? "").trim() || String(i + 1).padStart(2, "0"),
      link: M(o.link),
      note: d(o.note)
    };
  }).filter((o) => !!o);
  return [...e.length ? e : R()].sort((o, i) => o.km - i.km);
}
function x(t, e) {
  const r = Number.isFinite(t) ? t.toLocaleString() : "0";
  return e ? `${r} ${e}` : r;
}
function z(t) {
  return N(t.mmt_show_odometer, !0);
}
function q(t, e, r = 1500) {
  return e == null || !Number.isFinite(e) || e < 0 ? "neutral" : t.km < e - r ? "done" : Math.abs(t.km - e) <= r || t.km <= e ? "due" : "upcoming";
}
function Y(t, e) {
  var o;
  if (!t.length || e == null || !Number.isFinite(e)) return 0;
  const r = ((o = t[t.length - 1]) == null ? void 0 : o.km) || 1;
  return Math.max(0, Math.min(100, e / r * 100));
}
function G(t, e) {
  if (!t.length) return "";
  let r = t[0], o = Math.abs(r.km - e);
  for (const i of t) {
    const n = Math.abs(i.km - e);
    n < o && (r = i, o = n);
  }
  return r.id;
}
function J(t, e, r, o) {
  return d(t[e]) || a(r, o);
}
function Q(t, e) {
  const r = String(t.icon || "").trim();
  return r && r.length <= 3 && !new RegExp("\\p{Extended_Pictographic}", "u").test(r) ? r : String(e + 1).padStart(2, "0");
}
var X = Object.defineProperty, _ = (t, e, r, o) => {
  for (var i = void 0, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (i = s(e, r, i) || i);
  return i && X(e, r, i), i;
};
const y = class y extends A {
  constructor() {
    super(...arguments), this.config = {}, this.activeId = "", this.currentKmInput = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var r;
    e.has("config") && (this.activeId = ((r = this.milestones[0]) == null ? void 0 : r.id) ?? "", this.currentKmInput = "");
  }
  get milestones() {
    var e;
    return V((e = this.config) == null ? void 0 : e.mmt_milestones);
  }
  get currentKm() {
    if (!z(this.config || {})) return null;
    const e = this.currentKmInput.replace(/[^\d.]/g, "");
    if (!e) return null;
    const r = Number(e);
    return Number.isFinite(r) ? r : null;
  }
  get active() {
    return this.milestones.find((e) => e.id === this.activeId) ?? this.milestones[0] ?? null;
  }
  statusOf(e) {
    return q(e, this.currentKm);
  }
  statusLabel(e) {
    return e === "done" ? a("تمت", "Done") : e === "due" ? a("مستحقة", "Due") : e === "upcoming" ? a("قادمة", "Upcoming") : "";
  }
  select(e) {
    this.activeId = e;
  }
  onOdometerInput(e) {
    this.currentKmInput = e;
    const r = Number(e.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(r) || r < 0) return;
    const o = G(this.milestones, r);
    o && (this.activeId = o);
  }
  shiftActive(e) {
    const r = this.milestones;
    if (!r.length) return;
    const i = (Math.max(
      0,
      r.findIndex((n) => {
        var s;
        return n.id === ((s = this.active) == null ? void 0 : s.id);
      })
    ) + e + r.length) % r.length;
    this.activeId = r[i].id;
  }
  renderPanel(e, r) {
    if (!e) return c;
    const o = this.statusOf(e), i = r.findIndex((s) => s.id === e.id), n = d((this.config || {}).mmt_unit_label) || a("كم", "km");
    return m`
      <div class="mmt-panel" role="region" aria-live="polite">
        <div class="mmt-panel__head">
          <div>
            <p class="mmt-panel__kicker">
              ${x(e.km, n)}
              ${i >= 0 ? ` · ${i + 1}/${r.length}` : ""}
            </p>
            <h3 class="mmt-panel__title">${e.title}</h3>
          </div>
          ${r.length > 1 ? m`<div class="mmt-panel__nav" dir="ltr">
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${a("السابق", "Previous")}
                  @click=${() => this.shiftActive(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="mmt-nav-btn"
                  aria-label=${a("التالي", "Next")}
                  @click=${() => this.shiftActive(1)}
                >
                  ›
                </button>
              </div>` : c}
        </div>

        ${o !== "neutral" ? m`<span class=${h({ "mmt-badge": !0, [`is-${o}`]: !0 })}>
              ${this.statusLabel(o)}
            </span>` : c}

        ${e.services.length ? m`<ul class="mmt-services">
              ${e.services.map((s) => m`<li>${s}</li>`)}
            </ul>` : m`<p class="mmt-hint">${a("لا توجد خدمات محددة.", "No services listed.")}</p>`}

        ${e.note ? m`<p class="mmt-note">${e.note}</p>` : c}

        ${e.link ? m`<a
              class="fs-btn fs-tap"
              href=${e.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              ${a("اطلب قطع هذه المرحلة", "Order parts for this service")}
            </a>` : c}
      </div>
    `;
  }
  renderProducts(e) {
    return T(this.config || {}, "mmt_", {
      ready: !!e
    });
  }
  render() {
    const e = this.config || {}, r = B(e, "mmt_"), o = this.milestones, i = d(e.mmt_title) || a("جدول الصيانة حسب المسافة", "Mileage maintenance timeline"), n = d(e.mmt_desc) || a(
      "أدخل عداد سيارتك الحالي ثم اختر المرحلة لمعرفة الخدمات والقطع المطلوبة.",
      "Enter your current mileage, then pick a milestone to see services and parts."
    ), s = d(e.mmt_unit_label) || a("كم", "km"), f = F(e.mmt_layout, "horizontal"), g = this.active, b = Y(o, this.currentKm), u = z(e);
    return m`
      <section
        class="fs-section"
        style=${w(j(r))}
        aria-label=${i}
      >
        <div class="fs-container">
          <div class="mmt-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${a("خطة الصيانة", "Service plan")}</p>
              ${i ? m`<h2 class="fs-title">${i}</h2>` : c}
              ${n ? m`<p class="fs-desc">${n}</p>` : c}
            </div>

            <div class="mmt-card">
              ${u ? m`<div class="mmt-odometer">
                    <label class="mmt-odometer__label" for="mmt-km">
                      ${J(e, "mmt_odometer_label", "عداد المسافة الحالي", "Current mileage")}
                    </label>
                    <div class="mmt-odometer__row">
                      <input
                        id="mmt-km"
                        class="mmt-odometer__input"
                        type="text"
                        inputmode="numeric"
                        .value=${this.currentKmInput}
                        placeholder=${a("مثال: 24500", "e.g. 24500")}
                        @input=${(l) => this.onOdometerInput(l.target.value)}
                      />
                      <span class="mmt-odometer__unit">${s}</span>
                    </div>
                    <p class="mmt-hint">
                      ${a(
      "سنظلّل المراحل السابقة ونقترح الأقرب لعدادك.",
      "Past services are marked and the nearest milestone is selected."
    )}
                    </p>
                  </div>` : c}

              ${u && this.currentKm != null ? m`<div class="mmt-legend" aria-hidden="true">
                    <span><i class="is-done"></i>${a("تمت", "Done")}</span>
                    <span><i class="is-due"></i>${a("مستحقة", "Due")}</span>
                    <span><i class="is-upcoming"></i>${a("قادمة", "Upcoming")}</span>
                  </div>` : c}

              <div
                class=${h({
      "mmt-layout": !0,
      "mmt-layout--vertical": f === "vertical"
    })}
              >
                <div class="mmt-track-wrap">
                  <div
                    class="mmt-progress"
                    style=${w({ "--mmt-progress": `${b}%` })}
                    aria-hidden="true"
                  >
                    <div class="mmt-progress__fill"></div>
                  </div>
                  <div class="mmt-track" role="tablist" aria-label=${i}>
                    ${o.map((l, I) => {
      const k = (g == null ? void 0 : g.id) === l.id, v = this.statusOf(l);
      return m`
                        <div class="mmt-item" role="presentation">
                          <button
                            type="button"
                            class=${h({
        "mmt-node": !0,
        "is-active": k,
        "is-done": v === "done",
        "is-due": v === "due",
        "is-upcoming": v === "upcoming"
      })}
                            role="tab"
                            aria-selected=${k ? "true" : "false"}
                            @click=${() => this.select(l.id)}
                          >
                            <span class="mmt-node__pin">${Q(l, I)}</span>
                            <span class="mmt-node__meta">
                              <span class="mmt-node__km">${x(l.km, s)}</span>
                              ${l.title ? m`<span class="mmt-node__title">${l.title}</span>` : c}
                              ${v !== "neutral" ? m`<span class="mmt-node__status">${this.statusLabel(v)}</span>` : c}
                            </span>
                          </button>
                        </div>
                      `;
    })}
                  </div>
                </div>

                ${this.renderPanel(g, o)}
              </div>
            </div>

            ${this.renderProducts(g)}
          </div>
        </div>
      </section>
    `;
  }
};
y.styles = [P, U];
let p = y;
_([
  L({ type: Object })
], p.prototype, "config");
_([
  S()
], p.prototype, "activeId");
_([
  S()
], p.prototype, "currentKmInput");
D(
  p
);
typeof p < "u" && p.registerSallaComponent("salla-mileage-maintenance-timeline");
export {
  p as default
};
