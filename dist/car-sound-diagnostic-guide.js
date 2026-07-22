import { css as y, LitElement as x, html as c, nothing as l } from "lit";
import { property as _, state as k } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { styleMap as w } from "lit/directives/style-map.js";
import { n as $, l as g, e as u, t as s, g as U, s as S, i as m, r as z, a as C, b as L } from "./registerSalla-Dct4KN_E.js";
import { r as I } from "./commerceOutcome-B3T0_-WJ.js";
const M = y`
  .csdg-layout {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 960px) {
    .csdg-layout {
      grid-template-columns: minmax(260px, 340px) 1fr;
      align-items: start;
    }
  }

  .csdg-picker-card {
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.05);
    overflow: hidden;
  }

  @media (min-width: 960px) {
    .csdg-picker-card {
      position: sticky;
      top: 1rem;
    }
  }

  .csdg-picker__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, var(--card-bg, #fff));
  }

  .csdg-picker__title {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .csdg-picker__count {
    display: grid;
    place-items: center;
    min-width: 26px;
    height: 26px;
    padding: 0 0.4rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-picker {
    display: grid;
    gap: 0.55rem;
    padding: 0.85rem;
  }

  .csdg-case {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.8rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.6);
    background: color-mix(in srgb, var(--card-bg, #fff) 96%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  .csdg-case:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    background: var(--card-bg, #fff);
  }

  .csdg-case:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .csdg-case.is-selected {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
  }

  .csdg-case__icon {
    flex: 0 0 auto;
    width: 2.2rem;
    height: 2.2rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1.05rem;
  }

  .csdg-case__body {
    display: grid;
    gap: 0.15rem;
    min-width: 0;
    flex: 1 1 auto;
  }

  .csdg-case__name {
    font-weight: 800;
    font-size: 0.9rem;
    line-height: 1.35;
  }

  .csdg-case__desc {
    font-size: 0.78rem;
    color: var(--muted-color, #64748b);
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .csdg-case__dot {
    flex: 0 0 auto;
    width: 10px;
    height: 10px;
    margin-top: 0.35rem;
    border-radius: 999px;
  }

  .csdg-case__dot--low {
    background: var(--fs-success, #2f9e63);
  }

  .csdg-case__dot--medium {
    background: var(--fs-caution, #d99a06);
  }

  .csdg-case__dot--high {
    background: var(--fs-danger, #cf4b4b);
  }

  .csdg-case__dot--critical {
    background: #7f1d1d;
  }

  .csdg-panel {
    display: grid;
    gap: 0.9rem;
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .csdg-panel__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.6rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .csdg-panel__heading {
    display: grid;
    gap: 0.2rem;
  }

  .csdg-panel__kicker {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-panel__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .csdg-panel__desc {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--muted-color, #64748b);
  }

  .csdg-severity {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 1.9rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 800;
  }

  .csdg-severity__dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: currentColor;
  }

  .csdg-severity--low {
    background: color-mix(in srgb, var(--fs-success) 14%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: var(--fs-success);
  }

  .csdg-severity--medium {
    background: color-mix(in srgb, var(--fs-caution) 16%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: #9a6d00;
  }

  .csdg-severity--high {
    background: color-mix(in srgb, var(--fs-danger) 14%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: var(--fs-danger);
  }

  .csdg-severity--critical {
    background: color-mix(in srgb, #7f1d1d 20%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: #7f1d1d;
  }

  .csdg-block {
    display: grid;
    gap: 0.55rem;
  }

  .csdg-block__label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--muted-color, #64748b);
  }

  .csdg-causes {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }

  .csdg-causes li {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: start;
    gap: 0.55rem;
    padding: 0.55rem 0.6rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    font-size: 0.87rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  .csdg-causes__num {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-alert {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.85rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  .csdg-alert__icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    flex: 0 0 auto;
    color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
  }

  .csdg-alert__body {
    display: grid;
    gap: 0.15rem;
  }

  .csdg-alert__body strong {
    font-size: 0.78rem;
    font-weight: 900;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-media {
    display: grid;
    gap: 0.75rem;
  }

  .csdg-media audio {
    width: 100%;
  }

  .csdg-media iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    border-radius: 12px;
    background: #000;
  }

  .csdg-media__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    width: fit-content;
    min-height: 40px;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .csdg-media__link:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
  }

  .csdg-actions {
    padding-top: 0.25rem;
  }

  @media (max-width: 959px) {
    .csdg-picker {
      grid-auto-flow: column;
      grid-auto-columns: minmax(220px, 78%);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 1rem;
      -webkit-overflow-scrolling: touch;
    }

    .csdg-case {
      scroll-snap-align: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .csdg-case {
      transition: none !important;
    }
  }
`, R = ["low", "medium", "high", "critical"];
function W(o) {
  const e = U(o, "medium").toLowerCase();
  return R.includes(e) ? e : "medium";
}
function E(o) {
  return Array.isArray(o) ? o.map((r) => g(r) || String(r ?? "").trim()).filter(Boolean) : (g(o) || String(o ?? "")).split(/\r?\n/).map((r) => r.trim()).filter(Boolean);
}
function b(o) {
  const e = $(o).map((r, i) => {
    const a = g(r.name);
    return {
      id: String(r.id ?? "").trim() || `case-${i + 1}`,
      name: a,
      icon: String(r.icon ?? "").trim(),
      description: g(r.description),
      causes: E(r.causes),
      severity: W(r.severity),
      advice: g(r.advice),
      audioUrl: u(r.audio_url) || u(r.audio),
      videoUrl: u(r.video_url) || u(r.video),
      link: u(r.link)
    };
  }).filter((r) => r.name);
  return e.length ? e : P();
}
function P() {
  return [
    {
      id: "rattle",
      name: s("طقطقة / رنين", "Rattling"),
      icon: "🔊",
      description: s("أصوات طقطقة من المحرك أو تحت السيارة أثناء القيادة.", "Knocking or rattling from engine or undercarriage while driving."),
      causes: [
        s("مسامير أو clips مفكوكة", "Loose bolts or clips"),
        s("تآكل في العادم أو الحماية السفلية", "Exhaust or heat shield wear"),
        s("احتمال تلف في المحرك", "Possible internal engine wear")
      ],
      severity: "medium",
      advice: s("افحص السيارة في ورشة موثوقة قبل استمرار القيادة لمسافات طويلة.", "Have a trusted workshop inspect before long drives."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "brake-squeal",
      name: s("صرير الفرامل", "Brake squeal"),
      icon: "🛑",
      description: s("صوت صرير عند الضغط على الفرامل.", "Squealing when pressing the brake pedal."),
      causes: [
        s("تآكل تيل الفرامل", "Worn brake pads"),
        s("غبار أو زيت على الأقراص", "Dust or oil on rotors"),
        s("تيل فرامل منخفض الجودة", "Low-quality brake pads")
      ],
      severity: "high",
      advice: s("لا تؤجل فحص الفرامل — السلامة أولًا.", "Do not delay brake inspection — safety first."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "vibration",
      name: s("اهتزاز أثناء القيادة", "Vibration while driving"),
      icon: "📳",
      description: s("اهتزاز في المقود أو جسم السيارة بسرعات معينة.", "Steering wheel or body vibration at certain speeds."),
      causes: [
        s("توازن الإطارات", "Tire balance"),
        s("تآكل في الأذرع أو الكفرات", "Worn suspension or bushings"),
        s("أقراص فرامل مشوهة", "Warped brake rotors")
      ],
      severity: "medium",
      advice: s("ابدأ بفحص ضغط الإطارات والتوازن.", "Start with tire pressure and balance check."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "startup",
      name: s("صوت عند التشغيل", "Startup noise"),
      icon: "🔑",
      description: s("صوت غير طبيعي عند تشغيل المحرك.", "Unusual noise when starting the engine."),
      causes: [
        s("بطارية ضعيفة", "Weak battery"),
        s("سير المحرك أو البكرة", "Serpentine belt or pulley"),
        s("زيت منخفض أو كثافة غير مناسبة", "Low or wrong oil viscosity")
      ],
      severity: "medium",
      advice: s("سجّل الصوت وشاركه مع الفني لتشخيص أسرع.", "Record the sound and share with your mechanic."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "tire",
      name: s("ضجيج الإطارات", "Tire noise"),
      icon: "🛞",
      description: s("همهمة أو صوت طنين مستمر من الإطارات.", "Humming or droning from tires."),
      causes: [
        s("تآكل غير متساوٍ", "Uneven tread wear"),
        s("تآكل رولمان البلي", "Wheel bearing wear"),
        s("إطارات شتوية على أسفلت جاف", "Winter tires on dry pavement")
      ],
      severity: "low",
      advice: s("دوّر الإطارات وافحص المحاذاة دوريًا.", "Rotate tires and check alignment regularly."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    }
  ];
}
function A(o) {
  const e = {
    low: { ar: "منخفض", en: "Low" },
    medium: { ar: "متوسط", en: "Medium" },
    high: { ar: "مرتفع", en: "High" },
    critical: { ar: "حرج", en: "Critical" }
  };
  return s(e[o].ar, e[o].en);
}
function q(o) {
  return /youtube\.com|youtu\.be/i.test(o);
}
function B(o) {
  try {
    const e = new URL(o, window.location.origin);
    if (e.hostname.includes("youtu.be")) {
      const i = e.pathname.replace("/", "");
      return i ? `https://www.youtube.com/embed/${i}` : "";
    }
    const r = e.searchParams.get("v");
    return r ? `https://www.youtube.com/embed/${r}` : "";
  } catch {
    return "";
  }
}
function H(o) {
  return /\.(mp3|wav|ogg|m4a)(\?|$)/i.test(o);
}
var j = Object.defineProperty, v = (o, e, r, i) => {
  for (var a = void 0, d = o.length - 1, n; d >= 0; d--)
    (n = o[d]) && (a = n(e, r, a) || a);
  return a && j(e, r, a), a;
};
const h = class h extends x {
  constructor() {
    super(...arguments), this.config = {}, this.selectedId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(e) {
    var r, i;
    if (e.has("config")) {
      const a = b((r = this.config) == null ? void 0 : r.csdg_cases);
      a.some((d) => d.id === this.selectedId) || (this.selectedId = ((i = a[0]) == null ? void 0 : i.id) ?? "");
    }
  }
  get cases() {
    var e;
    return b((e = this.config) == null ? void 0 : e.csdg_cases);
  }
  get selected() {
    return this.cases.find((e) => e.id === this.selectedId) ?? this.cases[0] ?? null;
  }
  renderMedia(e) {
    const r = [];
    if (e.audioUrl && H(e.audioUrl) ? r.push(c`
        <audio controls preload="none" src=${e.audioUrl} aria-label=${s("عينة صوت", "Sound sample")}>
          ${s("متصفحك لا يدعم تشغيل الصوت", "Your browser does not support audio playback")}
        </audio>
      `) : e.audioUrl && r.push(c`
        <a
          class="csdg-media__link"
          href=${e.audioUrl}
          target="_blank"
          rel=${m(e.audioUrl) ? "noopener noreferrer" : l}
        >
          ${s("استمع للعينة", "Listen to sample")}
        </a>
      `), e.videoUrl)
      if (q(e.videoUrl)) {
        const i = B(e.videoUrl);
        i && r.push(c`
            <iframe
              src=${i}
              title=${e.name}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          `);
      } else
        r.push(c`
          <a
            class="csdg-media__link"
            href=${e.videoUrl}
            target="_blank"
            rel=${m(e.videoUrl) ? "noopener noreferrer" : l}
          >
            ${s("شاهد الفيديو", "Watch video")}
          </a>
        `);
    return r.length ? c`<div class="csdg-block">
      <p class="csdg-block__label">${s("عينات صوت وفيديو", "Sound & video samples")}</p>
      <div class="csdg-media">${r}</div>
    </div>` : l;
  }
  selectCase(e) {
    this.selectedId !== e && (this.selectedId = e, typeof window < "u" && window.matchMedia("(max-width: 959px)").matches && this.updateComplete.then(() => {
      var i;
      const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      (i = this.renderRoot.querySelector(".csdg-panel")) == null || i.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "nearest" });
    }));
  }
  onPickerKeydown(e) {
    const r = this.cases;
    if (r.length < 2) return;
    const i = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!i) return;
    e.preventDefault();
    const d = (r.findIndex((n) => {
      var t;
      return n.id === ((t = this.selected) == null ? void 0 : t.id);
    }) + i + r.length) % r.length;
    this.selectedId = r[d].id, this.updateComplete.then(() => {
      const n = this.renderRoot.querySelector(".csdg-case.is-selected");
      n == null || n.focus();
    });
  }
  renderPanel(e) {
    var a, d;
    const r = g((a = this.config) == null ? void 0 : a.csdg_causes_label) || s("الأسباب المحتملة", "Possible causes"), i = g((d = this.config) == null ? void 0 : d.csdg_advice_label) || s("نصيحة الفني", "Mechanic advice");
    return c`
      <div class="csdg-panel" aria-live="polite">
        <div class="csdg-panel__head">
          <div class="csdg-panel__heading">
            <p class="csdg-panel__kicker">${s("التشخيص", "Diagnosis")}</p>
            <h3 class="csdg-panel__title">${e.name}</h3>
          </div>
          <span class=${f({ "csdg-severity": !0, [`csdg-severity--${e.severity}`]: !0 })}>
            <span class="csdg-severity__dot" aria-hidden="true"></span>
            ${s("الخطورة:", "Severity:")} ${A(e.severity)}
          </span>
        </div>

        ${e.description ? c`<p class="csdg-panel__desc">${e.description}</p>` : l}

        ${e.causes.length ? c`<div class="csdg-block">
              <p class="csdg-block__label">${r}</p>
              <ul class="csdg-causes">
                ${e.causes.map(
      (n, t) => c`<li>
                    <span class="csdg-causes__num" aria-hidden="true">${t + 1}</span>
                    <span>${n}</span>
                  </li>`
    )}
              </ul>
            </div>` : l}

        ${e.advice ? c`<div class="csdg-alert" role="note">
              <span class="csdg-alert__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </span>
              <span class="csdg-alert__body">
                <strong>${i}</strong>
                <span>${e.advice}</span>
              </span>
            </div>` : l}

        ${this.renderMedia(e)}

        ${e.link ? c`<div class="csdg-actions">
              <a
                class="fs-btn fs-tap"
                href=${e.link}
                target="_blank"
                rel=${m(e.link) ? "noopener noreferrer" : l}
              >
                ${s("احجز فحصًا", "Book inspection")}
              </a>
            </div>` : l}
      </div>
    `;
  }
  render() {
    const e = this.config || {}, r = z(e, "csdg_"), i = this.cases, a = this.selected, d = g(e.csdg_title), n = g(e.csdg_desc);
    return i.length ? c`
      <section
        class="fs-section"
        style=${w(C(r))}
        aria-label=${d || s("دليل تشخيص أصوات السيارة", "Car sound diagnostic guide")}
      >
        <div class="fs-container">
          ${d || n ? c`<div class="fs-hero">
                <p class="fs-eyebrow">${s("شخّص قبل الشراء", "Diagnose before you buy")}</p>
                ${d ? c`<h2 class="fs-title">${d}</h2>` : l}
                ${n ? c`<p class="fs-desc">${n}</p>` : l}
              </div>` : l}

          <div class="csdg-layout">
            <div class="csdg-picker-card">
              <div class="csdg-picker__head">
                <p class="csdg-picker__title">${s("ما الصوت الذي تسمعه؟", "What sound do you hear?")}</p>
                <span class="csdg-picker__count">${i.length}</span>
              </div>
              <div
                class="csdg-picker"
                role="listbox"
                aria-label=${s("اختر العرض", "Choose symptom")}
                @keydown=${(t) => this.onPickerKeydown(t)}
              >
                ${i.map(
      (t) => c`
                    <button
                      type="button"
                      class=${f({ "csdg-case": !0, "is-selected": t.id === (a == null ? void 0 : a.id) })}
                      role="option"
                      aria-selected=${t.id === (a == null ? void 0 : a.id) ? "true" : "false"}
                      tabindex=${t.id === (a == null ? void 0 : a.id) ? "0" : "-1"}
                      @click=${() => this.selectCase(t.id)}
                    >
                      ${t.icon ? c`<span class="csdg-case__icon ${t.icon.startsWith("sicon-") ? t.icon : ""}" aria-hidden="true">
                            ${t.icon.startsWith("sicon-") ? "" : t.icon}
                          </span>` : l}
                      <span class="csdg-case__body">
                        <span class="csdg-case__name">${t.name}</span>
                        ${t.description ? c`<span class="csdg-case__desc">${t.description}</span>` : l}
                      </span>
                      <span class=${f({ "csdg-case__dot": !0, [`csdg-case__dot--${t.severity}`]: !0 })} aria-hidden="true"></span>
                    </button>
                  `
    )}
              </div>
            </div>

            ${a ? this.renderPanel(a) : l}
          </div>
          ${I(e, "csdg_", { ready: !!a })}
        </div>
      </section>
    ` : c`<div class="fs-empty" role="status">
        ${s("أضف حالات الأصوات من إعدادات العنصر", "Add sound cases in element settings")}
      </div>`;
  }
};
h.styles = [S, M];
let p = h;
v([
  _({ type: Object })
], p.prototype, "config");
v([
  k()
], p.prototype, "selectedId");
L(p);
typeof p < "u" && p.registerSallaComponent("salla-car-sound-diagnostic-guide");
export {
  p as default
};
