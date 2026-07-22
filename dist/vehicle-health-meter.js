import { css as y, LitElement as _, html as t, nothing as o } from "lit";
import { property as w } from "lit/decorators.js";
import { classMap as C } from "lit/directives/class-map.js";
import { styleMap as m } from "lit/directives/style-map.js";
import { n as L, l as v, j as S, f as M, e as z, t as s, g as $, s as E, i as b, r as R, p as j, a as B, b as O } from "./registerSalla-Dct4KN_E.js";
import { r as I } from "./commerceOutcome-B3T0_-WJ.js";
const P = y`
  .vhm-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    justify-content: center;
    margin-bottom: 1.25rem;
    font-size: 0.78rem;
    color: var(--muted-color, #64748b);
  }

  .vhm-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .vhm-legend i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .vhm-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .vhm-grid--bars {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .vhm-meter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
    padding: 1rem 0.75rem;
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    text-align: center;
  }

  .vhm-meter--bar {
    align-items: stretch;
    text-align: start;
  }

  .vhm-circle {
    position: relative;
    width: 96px;
    height: 96px;
  }

  .vhm-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .vhm-circle__track {
    fill: none;
    stroke: color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    stroke-width: 8;
  }

  .vhm-circle__fill {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.8s ease;
  }

  .vhm-circle__value {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-name {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-status {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .vhm-note {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--muted-color, #64748b);
  }

  .vhm-bar-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.45rem;
  }

  .vhm-bar-track {
    height: 10px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 55%, transparent);
    overflow: hidden;
  }

  .vhm-bar-fill {
    height: 100%;
    border-radius: inherit;
    transition: width 0.8s ease;
  }

  .vhm-link {
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .vhm-link:hover {
    text-decoration: underline;
  }

  .vhm-circle__fill,
  .vhm-bar-fill {
    transition-duration: 1s;
  }

  @media (prefers-reduced-motion: reduce) {
    .vhm-circle__fill,
    .vhm-bar-fill {
      transition: none !important;
    }
  }
`;
function D(a) {
  return $(a, "circles").toLowerCase() === "bars" ? "bars" : "circles";
}
function T(a, e) {
  const r = $(a, "").toLowerCase();
  return r === "excellent" || r === "good" || r === "check" || r === "service" ? r : e >= 85 ? "excellent" : e >= 70 ? "good" : e >= 45 ? "check" : "service";
}
function f(a) {
  const e = {
    excellent: ["ممتاز", "Excellent"],
    good: ["جيد", "Good"],
    check: ["يحتاج فحص", "Needs check"],
    service: ["صيانة مطلوبة", "Service needed"]
  }, [r, c] = e[a];
  return s(r, c);
}
function u(a) {
  return {
    excellent: "#16a34a",
    good: "#2563eb",
    check: "#ea580c",
    service: "#dc2626"
  }[a];
}
function U(a) {
  const e = L(a).map((r, c) => {
    const n = v(r.name) || v(r.title), i = S(M(r.value, 0), 0, 100);
    return {
      id: String(r.id ?? "").trim() || `meter-${c + 1}`,
      name: n,
      value: i,
      status: T(r.status, i),
      icon: String(r.icon ?? "").trim(),
      note: v(r.note),
      link: z(r.link)
    };
  }).filter((r) => r.name);
  return e.length ? e : G();
}
function G() {
  return [
    { id: "battery", name: s("البطارية", "Battery"), value: 78, status: "good", icon: "🔋", note: s("فحص دوري كل 6 أشهر.", "Check every 6 months."), link: "" },
    { id: "tires", name: s("الإطارات", "Tires"), value: 62, status: "check", icon: "🛞", note: s("تآكل متوسط — راجع الضغط.", "Moderate wear — check pressure."), link: "" },
    { id: "maintenance", name: s("الصيانة", "Maintenance"), value: 55, status: "check", icon: "🔧", note: s("اقترب موعد تغيير الزيت.", "Oil change due soon."), link: "" },
    { id: "brakes", name: s("الفرامل", "Brakes"), value: 88, status: "excellent", icon: "🛑", note: s("أداء جيد.", "Good performance."), link: "" },
    { id: "trip", name: s("جاهزية السفر", "Trip readiness"), value: 72, status: "good", icon: "🚗", note: s("جاهزة لرحلة قصيرة.", "Ready for a short trip."), link: "" }
  ];
}
function k(a, e = 42) {
  const r = 2 * Math.PI * e;
  return r - a / 100 * r;
}
var N = Object.defineProperty, q = (a, e, r, c) => {
  for (var n = void 0, i = a.length - 1, l; i >= 0; i--)
    (l = a[i]) && (n = l(e, r, n) || n);
  return n && N(e, r, n), n;
};
const h = 42, g = class g extends _ {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  get meters() {
    var e;
    return U((e = this.config) == null ? void 0 : e.vhm_meters);
  }
  renderLegend() {
    return t`
      <div class="vhm-legend" aria-hidden="true">
        ${["excellent", "good", "check", "service"].map(
      (r) => t`<span><i style=${m({ background: u(r) })}></i>${f(r)}</span>`
    )}
      </div>
    `;
  }
  renderCircle(e, r) {
    const c = u(e.status), n = k(r ? e.value : 0, h), i = 2 * Math.PI * h;
    return t`
      <div class="vhm-circle" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="presentation">
          <circle class="vhm-circle__track" cx="50" cy="50" r=${h} />
          <circle
            class="vhm-circle__fill"
            cx="50"
            cy="50"
            r=${h}
            stroke=${c}
            stroke-dasharray=${i}
            stroke-dashoffset=${n}
          />
        </svg>
        <span class="vhm-circle__value">${e.value}%</span>
      </div>
    `;
  }
  renderBar(e) {
    const r = u(e.status);
    return t`
      <div class="vhm-bar-head">
        <p class="vhm-name">${e.icon ? t`${e.icon} ` : o}${e.name}</p>
        <span class="vhm-status" style=${m({ color: r })}>${f(e.status)}</span>
      </div>
      <div class="vhm-bar-track" role="progressbar" aria-valuenow=${e.value} aria-valuemin="0" aria-valuemax="100">
        <div class="vhm-bar-fill" style=${m({ width: `${e.value}%`, background: r })}></div>
      </div>
      ${e.note ? t`<p class="vhm-note">${e.note}</p>` : o}
      ${e.link ? t`<a
            class="vhm-link"
            href=${e.link}
            target="_blank"
            rel=${b(e.link) ? "noopener noreferrer" : o}
          >
            ${s("المزيد", "Learn more")}
          </a>` : o}
    `;
  }
  renderMeterCard(e, r, c) {
    const n = u(e.status);
    return r === "bars" ? t`<article class="vhm-meter vhm-meter--bar">${this.renderBar(e)}</article>` : t`
      <article class="vhm-meter">
        ${this.renderCircle(e, c)}
        <p class="vhm-name">${e.icon ? t`${e.icon} ` : o}${e.name}</p>
        <p class="vhm-status" style=${m({ color: n })}>${f(e.status)}</p>
        ${e.note ? t`<p class="vhm-note">${e.note}</p>` : o}
        ${e.link ? t`<a
              class="vhm-link"
              href=${e.link}
              target="_blank"
              rel=${b(e.link) ? "noopener noreferrer" : o}
            >
              ${s("المزيد", "Learn more")}
            </a>` : o}
      </article>
    `;
  }
  render() {
    const e = this.config || {}, r = R(e, "vhm_"), c = !j(), n = this.meters, i = D(e.vhm_display), l = v(e.vhm_title), p = v(e.vhm_desc);
    return t`
      <section
        class="fs-section"
        style=${m(B(r))}
        aria-label=${l || s("مؤشر صحة السيارة", "Vehicle health meter")}
      >
        <div class="fs-container">
          ${l || p ? t`<div class="fs-hero">
                ${l ? t`<h2 class="fs-title">${l}</h2>` : o}
                ${p ? t`<p class="fs-desc">${p}</p>` : o}
              </div>` : o}

          ${this.renderLegend()}

          <div class=${C({ "vhm-grid": !0, "vhm-grid--bars": i === "bars" })}>
            ${n.map((x) => this.renderMeterCard(x, i, c))}
          </div>
          ${I(e, "vhm_", { ready: n.length > 0 })}
        </div>
      </section>
    `;
  }
};
g.styles = [E, P];
let d = g;
q([
  w({ type: Object })
], d.prototype, "config");
O(d);
typeof d < "u" && d.registerSallaComponent("salla-vehicle-health-meter");
export {
  d as default
};
