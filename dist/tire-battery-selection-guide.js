import { css as y, LitElement as x, nothing as c, html as l } from "lit";
import { property as _, state as $ } from "lit/decorators.js";
import { classMap as w } from "lit/directives/class-map.js";
import { styleMap as C } from "lit/directives/style-map.js";
import { g as k, n as u, l as s, t, s as T, r as z, a as S, b as R } from "./registerSalla-Dct4KN_E.js";
import { r as L } from "./commerceOutcome-B3T0_-WJ.js";
const A = y`
  .tbsg-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .tbsg-tab {
    min-height: 44px;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 700;
    font-size: 0.86rem;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .tbsg-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 24%, transparent);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tbsg-select-wrap {
    display: grid;
    gap: 0.35rem;
    max-width: 280px;
    margin: 0 auto 1rem;
  }

  .tbsg-select-wrap label {
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-select {
    min-height: 44px;
    padding: 0.55rem 0.75rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 12px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
  }

  .tbsg-panel {
    padding: 1.1rem 1rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 10px 28px rgba(30, 41, 59, 0.07);
  }

  .tbsg-panel + .tbsg-panel {
    margin-top: 1rem;
  }

  .tbsg-panel__title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-example {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.45rem 0.75rem;
    margin-bottom: 0.85rem;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 800;
    font-size: 1rem;
    color: var(--accent-color, var(--fs-store-primary));
    letter-spacing: 0.04em;
  }

  .tbsg-grid {
    display: grid;
    gap: 0.65rem;
  }

  @media (min-width: 640px) {
    .tbsg-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .tbsg-item {
    padding: 0.75rem 0.8rem;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, transparent);
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 12%, var(--card-bg, #fff));
  }

  .tbsg-item__label {
    margin: 0 0 0.25rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-item__value {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-item__note {
    margin: 0.35rem 0 0;
    font-size: 0.82rem;
    line-height: 1.55;
    color: var(--muted-color, #64748b);
  }

  .tbsg-notes {
    margin: 0.85rem 0 0;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (prefers-reduced-motion: reduce) {
    .tbsg-tab {
      transition: none !important;
    }
  }
`;
function p(n) {
  const e = k(n, "both").toLowerCase();
  return e === "tires" || e === "batteries" ? e : "both";
}
function M(n) {
  const e = n.trim().match(/^(\d{3})\/(\d{2})\s*([A-Z])\s*(\d{2})$/i);
  return e ? {
    width: e[1],
    aspect: e[2],
    construction: e[3].toUpperCase(),
    rim: e[4],
    raw: n.trim()
  } : null;
}
function I(n, e) {
  const a = u(n).map((r, i) => ({
    key: String(r.key ?? r.part ?? `part-${i + 1}`).trim(),
    label: s(r.label) || s(r.name),
    value: s(r.value),
    note: s(r.note) || s(r.desc)
  })).filter((r) => r.label);
  return a.length ? a : e ? [
    {
      key: "width",
      label: t("العرض (مم)", "Width (mm)"),
      value: e.width,
      note: t("عرض نقطة التلامس مع الطريق", "Tread contact width in millimeters")
    },
    {
      key: "aspect",
      label: t("نسبة الارتفاع", "Aspect ratio"),
      value: `${e.aspect}%`,
      note: t("ارتفاع الجانب كنسبة من العرض", "Sidewall height as % of width")
    },
    {
      key: "construction",
      label: t("نوع الهيكل", "Construction"),
      value: e.construction,
      note: t("R = radial — الأكثر شيوعًا", "R = radial — most common")
    },
    {
      key: "rim",
      label: t("قطر الجنط (inch)", "Rim diameter"),
      value: `${e.rim}"`,
      note: t("يجب مطابقته مع جنط سيارتك", "Must match your wheel size")
    }
  ] : [
    {
      key: "width",
      label: t("العرض (مم)", "Width (mm)"),
      value: "225",
      note: t("عرض نقطة التلامس مع الطريق", "Tread contact width in millimeters")
    },
    {
      key: "aspect",
      label: t("نسبة الارتفاع", "Aspect ratio"),
      value: "45%",
      note: t("ارتفاع الجانب كنسبة من العرض", "Sidewall height as % of width")
    },
    {
      key: "construction",
      label: t("نوع الهيكل", "Construction"),
      value: "R",
      note: t("R = radial — الأكثر شيوعًا", "R = radial — most common")
    },
    {
      key: "rim",
      label: t("قطر الجنط (inch)", "Rim diameter"),
      value: '18"',
      note: t("يجب مطابقته مع جنط سيارتك", "Must match your wheel size")
    }
  ];
}
function P(n) {
  const e = u(n).map((a, r) => ({
    id: String(a.id ?? "").trim() || `spec-${r + 1}`,
    label: s(a.label) || s(a.name),
    value: s(a.value),
    note: s(a.note) || s(a.desc)
  })).filter((a) => a.label);
  return e.length ? e : B();
}
function B() {
  return [
    {
      id: "capacity",
      label: t("السعة (Ah)", "Capacity (Ah)"),
      value: t("60–70 Ah", "60–70 Ah"),
      note: t("تناسب مع معظم السيارات المتوسطة", "Fits most mid-size cars")
    },
    {
      id: "cca",
      label: t("أمبير التشغيل (CCA)", "Cold cranking amps"),
      value: t("500–650 CCA", "500–650 CCA"),
      note: t("مهم في الأجواء الباردة", "Important in cold climates")
    },
    {
      id: "size",
      label: t("المقاس", "Size group"),
      value: t("مثل DIN 74 / L2", "e.g. DIN 74 / L2"),
      note: t("يجب أن يدخل في حامل البطارية", "Must fit battery tray")
    },
    {
      id: "terminal",
      label: t("اتجاه الأقطاب", "Terminal layout"),
      value: t("يمين / يسار", "Right / left"),
      note: t("تحقق من كابل السيارة", "Check cable reach")
    },
    {
      id: "usage",
      label: t("نوع الاستخدام", "Usage type"),
      value: t("SLI — تشغيل عادي", "SLI — standard starting"),
      note: t("للسيارات بدون start-stop", "For non start-stop vehicles")
    },
    {
      id: "climate",
      label: t("المناخ", "Climate"),
      value: t("حرارة عالية / منخفضة", "Hot / cold"),
      note: t("اختر بطارية مناسبة لمنطقتك", "Pick battery rated for your region")
    }
  ];
}
function E(n) {
  return s(n) || t(
    "راجع دليل السيارة أو الملصق على باب السائق قبل الشراء. المقاس الصحيح يضمن الأمان والاقتصاد في الوقود.",
    "Check owner manual or driver door sticker before buying. Correct size ensures safety and fuel economy."
  );
}
var U = Object.defineProperty, f = (n, e, a, r) => {
  for (var i = void 0, o = n.length - 1, b; o >= 0; o--)
    (b = n[o]) && (i = b(e, a, i) || i);
  return i && U(e, a, i), i;
};
const g = class g extends x {
  constructor() {
    super(...arguments), this.config = {}, this.activeTab = "tires", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var a;
    e.has("config") && (p((a = this.config) == null ? void 0 : a.tbsg_mode) === "batteries" ? this.activeTab = "batteries" : this.activeTab = "tires");
  }
  get mode() {
    var e;
    return p((e = this.config) == null ? void 0 : e.tbsg_mode);
  }
  setTab(e) {
    this.activeTab = e;
  }
  renderSpecItem(e, a, r) {
    return l`
      <div class="tbsg-item">
        <p class="tbsg-item__label">${e}</p>
        <p class="tbsg-item__value">${a || "—"}</p>
        ${r ? l`<p class="tbsg-item__note">${r}</p>` : c}
      </div>
    `;
  }
  renderTiresPanel() {
    const e = this.config || {}, a = s(e.tbsg_tire_example) || "225/45 R18", r = M(a), i = I(e.tbsg_tire_parts, r), o = E(e.tbsg_tire_notes), b = s(e.tbsg_tire_title) || t("فهم مقاس الإطار", "Understanding tire size");
    return l`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${b}</h3>
        <div class="tbsg-example" aria-label=${t("مثال مقاس", "Example size")}>${a}</div>
        ${r ? c : l`<p class="tbsg-notes">${t("صيغة المثال: 225/45 R18", "Example format: 225/45 R18")}</p>`}
        <div class="tbsg-grid">
          ${i.map((m) => this.renderSpecItem(m.label, m.value, m.note))}
        </div>
        ${o ? l`<p class="tbsg-notes">${o}</p>` : c}
      </div>
    `;
  }
  renderBatteriesPanel() {
    const e = this.config || {}, a = P(e.tbsg_battery_specs), r = s(e.tbsg_battery_title) || t("مواصفات البطارية", "Battery specifications");
    return l`
      <div class="tbsg-panel" role="tabpanel">
        <h3 class="tbsg-panel__title">${r}</h3>
        <div class="tbsg-grid">
          ${a.map((i) => this.renderSpecItem(i.label, i.value, i.note))}
        </div>
      </div>
    `;
  }
  renderTabs(e) {
    var r, i;
    if (e !== "both") return c;
    const a = [
      { id: "tires", label: s((r = this.config) == null ? void 0 : r.tbsg_tire_title) || t("الإطارات", "Tires") },
      {
        id: "batteries",
        label: s((i = this.config) == null ? void 0 : i.tbsg_battery_title) || t("البطاريات", "Batteries")
      }
    ];
    return l`
      <div class="tbsg-toolbar" role="tablist">
        ${a.map(
      (o) => l`
            <button
              type="button"
              class=${w({ "tbsg-tab": !0, "is-active": this.activeTab === o.id })}
              role="tab"
              aria-selected=${this.activeTab === o.id ? "true" : "false"}
              @click=${() => this.setTab(o.id)}
            >
              ${o.label}
            </button>
          `
    )}
      </div>
    `;
  }
  render() {
    const e = this.config || {}, a = z(e, "tbsg_"), r = this.mode, i = s(e.tbsg_title), o = s(e.tbsg_desc), b = r === "tires" || r === "both", m = r === "batteries" || r === "both", h = r === "tires" || r === "both" && this.activeTab === "tires", v = r === "batteries" || r === "both" && this.activeTab === "batteries";
    return l`
      <section
        class="fs-section"
        style=${C(S(a))}
        aria-label=${i || t("دليل اختيار الإطارات والبطاريات", "Tire & battery selection guide")}
      >
        <div class="fs-container">
          ${i || o ? l`<div class="fs-hero">
                ${i ? l`<h2 class="fs-title">${i}</h2>` : c}
                ${o ? l`<p class="fs-desc">${o}</p>` : c}
              </div>` : c}

          ${r === "both" ? this.renderTabs(r) : c}

          ${b && h ? this.renderTiresPanel() : c}
          ${m && v ? this.renderBatteriesPanel() : c}
          ${L(e, "tbsg_", { ready: !!this.activeTab })}
        </div>
      </section>
    `;
  }
};
g.styles = [T, A];
let d = g;
f([
  _({ type: Object })
], d.prototype, "config");
f([
  $()
], d.prototype, "activeTab");
R(d);
typeof d < "u" && d.registerSallaComponent("salla-tire-battery-selection-guide");
export {
  d as default
};
