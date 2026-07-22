import { css as w, LitElement as x, html as d, nothing as m } from "lit";
import { property as S, state as g } from "lit/decorators.js";
import { classMap as z } from "lit/directives/class-map.js";
import { styleMap as C } from "lit/directives/style-map.js";
import { n as $, l as c, k as b, g as T, t as p, s as k, r as I, a as L, b as R } from "./registerSalla-Dct4KN_E.js";
import { r as A } from "./commerceOutcome-B3T0_-WJ.js";
const E = w`
  .tsf-shell {
    width: 100%;
    display: grid;
    gap: 1rem;
  }

  .tsf-card {
    padding: 1.25rem 1.15rem 1.35rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1.05rem;
  }

  .tsf-code {
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background:
      linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #0f172a) 0%,
        #111827 100%
      );
    color: #fff;
    text-align: center;
  }

  .tsf-code__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.75;
  }

  .tsf-code__value {
    margin: 0;
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
  }

  .tsf-field {
    display: grid;
    gap: 0.5rem;
  }

  .tsf-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tsf-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
    gap: 0.55rem;
  }

  .tsf-type {
    display: grid;
    gap: 0.2rem;
    text-align: start;
    padding: 0.85rem 0.8rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .tsf-type[aria-pressed='true'] {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .tsf-type__name {
    font-size: 0.88rem;
    font-weight: 800;
  }

  .tsf-type__desc {
    font-size: 0.74rem;
    color: var(--muted-color, #64748b);
    line-height: 1.4;
  }

  .tsf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tsf-chip {
    min-width: 3.4rem;
    min-height: 40px;
    padding: 0.4rem 0.65rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
  }

  .tsf-chip.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tsf-hint {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    text-align: center;
  }
`, D = [
  {
    id: "all-season",
    ar: "طوال السنة",
    en: "All-season",
    dar: "استخدام يومي متوازن",
    den: "Balanced daily use"
  },
  {
    id: "summer",
    ar: "صيفي",
    en: "Summer",
    dar: "ثبات أعلى في الحر",
    den: "Better grip in heat"
  },
  {
    id: "winter",
    ar: "شتوي",
    en: "Winter",
    dar: "للأمطار والبرودة",
    den: "For rain and cold"
  },
  {
    id: "offroad",
    ar: "طرق وعرة",
    en: "Off-road",
    dar: "للبر والطرق الوعرة",
    den: "Desert & rough roads"
  }
];
function M() {
  return D.map((s) => ({
    id: s.id,
    name: p(s.ar, s.en),
    desc: p(s.dar, s.den)
  }));
}
const P = ["185", "195", "205", "215", "225", "235", "245", "255", "265"], U = ["35", "40", "45", "50", "55", "60", "65", "70"], W = ["15", "16", "17", "18", "19", "20", "21", "22"];
function l(s, e, t, i) {
  return c(s[e]) || p(t, i);
}
function _(s) {
  const e = $(s).map((t, i) => {
    const r = c(t.name) || c(t.title);
    return r ? {
      id: b(r, "") || `type-${i + 1}`,
      name: r,
      desc: c(t.desc) || c(t.description)
    } : null;
  }).filter((t) => !!t);
  return e.length ? e : M();
}
function v(s, e) {
  const t = c(s, "") || String(s ?? "").trim();
  if (!t) return e;
  const i = t.split(/[,،|\s]+/).map((r) => r.trim()).filter(Boolean);
  return i.length ? [...new Set(i)] : e;
}
function B(s) {
  return v(s.tsf_widths, P);
}
function F(s) {
  return v(s.tsf_aspects, U);
}
function H(s) {
  return v(s.tsf_rims, W);
}
function O(s) {
  return $(s).map((e, t) => {
    const i = String(e.width ?? "").trim(), r = String(e.aspect ?? e.profile ?? "").trim(), a = String(e.rim ?? e.diameter ?? "").trim();
    if (!i || !r || !a) return null;
    const f = T(e.type, "") || b(c(e.type_name), "") || "", u = `${i}/${r} R${a}`;
    return {
      id: b(u, "") || `size-${t + 1}`,
      width: i,
      aspect: r,
      rim: a,
      typeId: f,
      label: u
    };
  }).filter((e) => !!e);
}
function j(s, e, t) {
  return !s || !e || !t ? "" : `${s}/${e} R${t}`;
}
function q(s, e, t, i, r) {
  return s.find(
    (a) => a.width === e && a.aspect === t && a.rim === i && (!r || !a.typeId || a.typeId === r)
  ) || null;
}
var V = Object.defineProperty, h = (s, e, t, i) => {
  for (var r = void 0, a = s.length - 1, f; a >= 0; a--)
    (f = s[a]) && (r = f(e, t, r) || r);
  return r && V(e, t, r), r;
};
const y = class y extends x {
  constructor() {
    super(...arguments), this.config = {}, this.typeId = "", this.width = "", this.aspect = "", this.rim = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var t, i;
    if (e.has("config")) {
      const r = _((t = this.config) == null ? void 0 : t.tsf_types);
      this.typeId = ((i = r[0]) == null ? void 0 : i.id) || "", this.width = "", this.aspect = "", this.rim = "";
    }
  }
  get types() {
    var e;
    return _((e = this.config) == null ? void 0 : e.tsf_types);
  }
  get activeType() {
    return this.types.find((e) => e.id === this.typeId) ?? null;
  }
  get sizeRows() {
    var e;
    return O((e = this.config) == null ? void 0 : e.tsf_sizes);
  }
  get matchingSize() {
    return q(this.sizeRows, this.width, this.aspect, this.rim, this.typeId);
  }
  get code() {
    return j(this.width, this.aspect, this.rim);
  }
  get ready() {
    return !!(this.typeId && this.width && this.aspect && this.rim);
  }
  renderChips(e, t, i, r) {
    return d`
      <div class="tsf-chips" role="group" aria-label=${r}>
        ${e.map(
      (a) => d`<button
            type="button"
            class=${z({ "tsf-chip": !0, "is-active": t === a })}
            aria-pressed=${t === a ? "true" : "false"}
            @click=${() => i(a)}
          >
            ${a}
          </button>`
    )}
      </div>
    `;
  }
  renderProducts() {
    return A(this.config || {}, "tsf_", {
      ready: this.ready
    });
  }
  render() {
    const e = this.config || {}, t = I(e, "tsf_"), i = c(e.tsf_title) || p("محدد مقاس الإطار", "Tire size finder"), r = c(e.tsf_desc) || p(
      "اختر نوع الإطار ثم العرض والنسبة والجنط لعرض المقاس المناسب للسيارة.",
      "Choose tire type, then width, aspect ratio, and rim to see the matching size."
    ), a = B(e), f = F(e), u = H(e);
    return d`
      <section
        class="fs-section"
        style=${C(L(t))}
        aria-label=${i}
      >
        <div class="fs-container">
          ${i || r ? d`<div class="fs-hero">
                ${i ? d`<h2 class="fs-title">${i}</h2>` : m}
                ${r ? d`<p class="fs-desc">${r}</p>` : m}
              </div>` : m}

          <div class="tsf-shell">
            <div class="tsf-card">
              <div class="tsf-code" aria-live="polite">
                <p class="tsf-code__label">${p("المقاس المختار", "Selected size")}</p>
                <p class="tsf-code__value">${this.code || "— / — R—"}</p>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${l(e, "tsf_type_label", "نوع الإطار", "Tire type")}</span>
                <div class="tsf-types" role="group">
                  ${this.types.map(
      (n) => d`<button
                      type="button"
                      class="tsf-type"
                      aria-pressed=${this.typeId === n.id ? "true" : "false"}
                      @click=${() => {
        this.typeId = n.id;
      }}
                    >
                      <span class="tsf-type__name">${n.name}</span>
                      ${n.desc ? d`<span class="tsf-type__desc">${n.desc}</span>` : m}
                    </button>`
    )}
                </div>
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${l(e, "tsf_width_label", "العرض", "Width")}</span>
                ${this.renderChips(a, this.width, (n) => {
      this.width = n;
    }, l(e, "tsf_width_label", "العرض", "Width"))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${l(e, "tsf_aspect_label", "نسبة الارتفاع", "Aspect ratio")}</span>
                ${this.renderChips(f, this.aspect, (n) => {
      this.aspect = n;
    }, l(e, "tsf_aspect_label", "نسبة الارتفاع", "Aspect ratio"))}
              </div>

              <div class="tsf-field">
                <span class="tsf-label">${l(e, "tsf_rim_label", "قطر الجنط", "Rim diameter")}</span>
                ${this.renderChips(u, this.rim, (n) => {
      this.rim = n;
    }, l(e, "tsf_rim_label", "قطر الجنط", "Rim diameter"))}
              </div>

              ${this.ready ? m : d`<p class="tsf-hint">
                    ${p("أكمل اختيار النوع والمقاس لعرض النتيجة المناسبة.", "Complete type and size to see the right match.")}
                  </p>`}
            </div>

            ${this.renderProducts()}
          </div>
        </div>
      </section>
    `;
  }
};
y.styles = [k, E];
let o = y;
h([
  S({ type: Object })
], o.prototype, "config");
h([
  g()
], o.prototype, "typeId");
h([
  g()
], o.prototype, "width");
h([
  g()
], o.prototype, "aspect");
h([
  g()
], o.prototype, "rim");
R(
  o
);
typeof o < "u" && o.registerSallaComponent("salla-tire-size-finder");
export {
  o as default
};
