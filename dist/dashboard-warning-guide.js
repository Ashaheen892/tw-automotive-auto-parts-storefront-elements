import { css as h, LitElement as b, nothing as c, html as o } from "lit";
import { property as _, state as y } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { styleMap as v } from "lit/directives/style-map.js";
import { t as i, n as x, e as w, l as m, c as $, g as k, s as S, r as C, a as L, b as T } from "./registerSalla-Dct4KN_E.js";
import { r as I } from "./commerceOutcome-B3T0_-WJ.js";
const E = h`
  .dwg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
    gap: 0.65rem;
    width: 100%;
  }

  .dwg-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    min-height: 96px;
    padding: 0.75rem 0.5rem;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  }

  .dwg-item:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
  }

  .dwg-item.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 25%, transparent);
  }

  .dwg-item__icon {
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--dwg-color, var(--accent-color, var(--fs-store-primary))) 14%, var(--card-bg, #fff));
    color: var(--dwg-color, var(--accent-color, var(--fs-store-primary)));
    font-size: 1rem;
    font-weight: 800;
    overflow: hidden;
  }

  .dwg-item__icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .dwg-item__name {
    font-size: 0.74rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.35;
  }

  .dwg-detail {
    width: 100%;
    margin: 1.25rem 0 0;
    padding: 1.15rem 1.2rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 30px rgba(30, 41, 59, 0.08);
  }

  .dwg-detail__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.65rem;
  }

  .dwg-detail__title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .dwg-detail__block {
    margin-bottom: 0.85rem;
  }

  .dwg-detail__label {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .dwg-detail__text {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .dwg-detail__action {
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (max-width: 639px) {
    .dwg-grid {
      grid-template-columns: repeat(auto-fill, minmax(4.8rem, 1fr));
    }
  }
`, z = ["low", "medium", "high", "critical"];
function A(r) {
  const e = k(r, "medium").toLowerCase().trim();
  return z.includes(e) ? e : "medium";
}
const B = [
  { name: i("زيت المحرك", "Engine oil"), iconText: "🛢", image: "", meaning: i("ضغط الزيت منخفض أو مستشعر الزيت.", "Low oil pressure or oil sensor alert."), severity: "high", action: i("أوقف السيارة وافحص مستوى الزيت.", "Stop and check oil level."), link: "", color: "#ea580c" },
  { name: i("البطارية", "Battery"), iconText: "🔋", image: "", meaning: i("مشكلة في شحن البطارية أو الدينامو.", "Charging system or battery issue."), severity: "medium", action: i("افحص البطارية والأسلاك.", "Inspect battery and cables."), link: "", color: "#eab308" },
  { name: i("ABS", "ABS"), iconText: "ABS", image: "", meaning: i("عطل في نظام الفرامل المانعة للانغلاق.", "Anti-lock brake system fault."), severity: "high", action: i("قد بحرص وافحص الفرامل.", "Drive carefully and inspect brakes."), link: "", color: "#dc2626" },
  { name: i("درجة الحرارة", "Temperature"), iconText: "🌡", image: "", meaning: i("ارتفاع حرارة المحرك.", "Engine overheating."), severity: "critical", action: i("أوقف السيارة فورًا واتركها تبرد.", "Stop immediately and let it cool."), link: "", color: "#dc2626" },
  { name: i("ضغط الإطارات", "Tire pressure"), iconText: "⛽", image: "", meaning: i("ضغط إطار أو أكثر غير مناسب.", "One or more tires under/over pressure."), severity: "medium", action: i("اضبط ضغط الإطارات.", "Adjust tire pressure."), link: "", color: "#ea580c" },
  { name: i("فحص المحرك", "Check engine"), iconText: "⚠", image: "", meaning: i("خلل في نظام المحرك أو الانبعاثات.", "Engine or emissions system fault."), severity: "high", action: i("افحص السيارة في أقرب ورشة.", "Have the vehicle diagnosed soon."), link: "", color: "#f97316" }
];
function j(r) {
  const e = x(r).map((t, d) => ({
    id: String(t.id ?? "").trim() || `warn-${d + 1}`,
    name: m(t.name),
    iconText: String(t.icon_text ?? "").trim(),
    image: $(t.image),
    meaning: m(t.meaning),
    severity: A(t.severity),
    action: m(t.action),
    link: w(t.link),
    color: String(t.color ?? "").trim()
  })).filter((t) => t.name);
  return e.length ? e : B.map((t, d) => ({ id: `default-${d + 1}`, ...t }));
}
function H(r) {
  return {
    low: i("منخفض", "Low"),
    medium: i("متوسط", "Medium"),
    high: i("مرتفع", "High"),
    critical: i("حرج", "Critical")
  }[r];
}
function M(r) {
  return m(r.dwg_severity_label) || i("الخطورة", "Severity");
}
function O(r) {
  return r === "critical" || r === "high" ? "fs-pill--danger" : r === "medium" ? "fs-pill--caution" : "fs-pill--success";
}
var R = Object.defineProperty, u = (r, e, t, d) => {
  for (var a = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (a = n(e, t, a) || a);
  return a && R(e, t, a), a;
};
const g = class g extends b {
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
    e.has("config") && (this.activeId = "");
  }
  get warnings() {
    var e;
    return j((e = this.config) == null ? void 0 : e.dwg_warnings);
  }
  get active() {
    return this.warnings.find((e) => e.id === this.activeId) ?? null;
  }
  renderDetail(e) {
    if (!e) return c;
    const t = this.config || {};
    return o`
      <div class="dwg-detail" role="region" aria-live="polite">
        <div class="dwg-detail__head">
          <h3 class="dwg-detail__title">${e.name}</h3>
          <span class=${f({ "fs-pill": !0, [O(e.severity)]: !0 })}>
            ${M(t)}: ${H(e.severity)}
          </span>
        </div>

        ${e.meaning ? o`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${i("المعنى", "Meaning")}</p>
              <p class="dwg-detail__text">${e.meaning}</p>
            </div>` : c}

        ${e.action ? o`<div class="dwg-detail__block">
              <p class="dwg-detail__label">${i("الإجراء المقترح", "Suggested action")}</p>
              <div class="dwg-detail__action">${e.action}</div>
            </div>` : c}

        ${e.link ? o`<a class="fs-btn fs-tap" href=${e.link} target="_blank" rel="noopener noreferrer">
              ${i("تصفّح القطع ذات الصلة", "Browse related parts")}
            </a>` : c}
      </div>
    `;
  }
  render() {
    const e = this.config || {}, t = C(e, "dwg_"), d = this.warnings, a = m(e.dwg_title), s = m(e.dwg_desc);
    return o`
      <section
        class="fs-section"
        style=${v(L(t))}
        aria-label=${a || i("دليل أضواء التحذير", "Dashboard warning guide")}
      >
        <div class="fs-container">
          ${a || s ? o`<div class="fs-hero">
                ${a ? o`<h2 class="fs-title">${a}</h2>` : c}
                ${s ? o`<p class="fs-desc">${s}</p>` : c}
              </div>` : c}

          <div class="dwg-grid" role="list">
            ${d.map((n) => {
      const p = this.activeId === n.id;
      return o`
                <button
                  type="button"
                  class=${f({ "dwg-item": !0, "is-active": p })}
                  role="listitem"
                  aria-pressed=${p ? "true" : "false"}
                  style=${v(n.color ? { "--dwg-color": n.color } : {})}
                  @click=${() => this.activeId = n.id}
                >
                  <span class="dwg-item__icon">
                    ${n.image ? o`<img src=${n.image} alt="" loading="lazy" />` : n.iconText || "⚠"}
                  </span>
                  <span class="dwg-item__name">${n.name}</span>
                </button>
              `;
    })}
          </div>

          ${this.renderDetail(this.active)}
          ${I(e, "dwg_", { ready: !!this.active })}
        </div>
      </section>
    `;
  }
};
g.styles = [S, E];
let l = g;
u([
  _({ type: Object })
], l.prototype, "config");
u([
  y()
], l.prototype, "activeId");
T(l);
typeof l < "u" && l.registerSallaComponent("salla-dashboard-warning-guide");
export {
  l as default
};
