var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, e as extractLink, t, g as getRadioValue, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
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
`, SEVERITIES = ["low", "medium", "high", "critical"];
function normalizeSeverity(value) {
  const raw = getRadioValue(value, "medium").toLowerCase();
  return SEVERITIES.includes(raw) ? raw : "medium";
}
__name(normalizeSeverity, "normalizeSeverity");
function parseCauses(raw) {
  return Array.isArray(raw) ? raw.map((line) => localizedString(line) || String(line ?? "").trim()).filter(Boolean) : (localizedString(raw) || String(raw ?? "")).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}
__name(parseCauses, "parseCauses");
function parseCases(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const name = localizedString(row.name);
    return {
      id: String(row.id ?? "").trim() || `case-${i + 1}`,
      name,
      icon: String(row.icon ?? "").trim(),
      description: localizedString(row.description),
      causes: parseCauses(row.causes),
      severity: normalizeSeverity(row.severity),
      advice: localizedString(row.advice),
      audioUrl: extractLink(row.audio_url) || extractLink(row.audio),
      videoUrl: extractLink(row.video_url) || extractLink(row.video),
      link: extractLink(row.link)
    };
  }).filter((item) => item.name);
  return parsed.length ? parsed : defaultCases();
}
__name(parseCases, "parseCases");
function defaultCases() {
  return [
    {
      id: "rattle",
      name: t("طقطقة / رنين", "Rattling"),
      icon: "🔊",
      description: t("أصوات طقطقة من المحرك أو تحت السيارة أثناء القيادة.", "Knocking or rattling from engine or undercarriage while driving."),
      causes: [
        t("مسامير أو clips مفكوكة", "Loose bolts or clips"),
        t("تآكل في العادم أو الحماية السفلية", "Exhaust or heat shield wear"),
        t("احتمال تلف في المحرك", "Possible internal engine wear")
      ],
      severity: "medium",
      advice: t("افحص السيارة في ورشة موثوقة قبل استمرار القيادة لمسافات طويلة.", "Have a trusted workshop inspect before long drives."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "brake-squeal",
      name: t("صرير الفرامل", "Brake squeal"),
      icon: "🛑",
      description: t("صوت صرير عند الضغط على الفرامل.", "Squealing when pressing the brake pedal."),
      causes: [
        t("تآكل تيل الفرامل", "Worn brake pads"),
        t("غبار أو زيت على الأقراص", "Dust or oil on rotors"),
        t("تيل فرامل منخفض الجودة", "Low-quality brake pads")
      ],
      severity: "high",
      advice: t("لا تؤجل فحص الفرامل — السلامة أولًا.", "Do not delay brake inspection — safety first."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "vibration",
      name: t("اهتزاز أثناء القيادة", "Vibration while driving"),
      icon: "📳",
      description: t("اهتزاز في المقود أو جسم السيارة بسرعات معينة.", "Steering wheel or body vibration at certain speeds."),
      causes: [
        t("توازن الإطارات", "Tire balance"),
        t("تآكل في الأذرع أو الكفرات", "Worn suspension or bushings"),
        t("أقراص فرامل مشوهة", "Warped brake rotors")
      ],
      severity: "medium",
      advice: t("ابدأ بفحص ضغط الإطارات والتوازن.", "Start with tire pressure and balance check."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "startup",
      name: t("صوت عند التشغيل", "Startup noise"),
      icon: "🔑",
      description: t("صوت غير طبيعي عند تشغيل المحرك.", "Unusual noise when starting the engine."),
      causes: [
        t("بطارية ضعيفة", "Weak battery"),
        t("سير المحرك أو البكرة", "Serpentine belt or pulley"),
        t("زيت منخفض أو كثافة غير مناسبة", "Low or wrong oil viscosity")
      ],
      severity: "medium",
      advice: t("سجّل الصوت وشاركه مع الفني لتشخيص أسرع.", "Record the sound and share with your mechanic."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    },
    {
      id: "tire",
      name: t("ضجيج الإطارات", "Tire noise"),
      icon: "🛞",
      description: t("همهمة أو صوت طنين مستمر من الإطارات.", "Humming or droning from tires."),
      causes: [
        t("تآكل غير متساوٍ", "Uneven tread wear"),
        t("تآكل رولمان البلي", "Wheel bearing wear"),
        t("إطارات شتوية على أسفلت جاف", "Winter tires on dry pavement")
      ],
      severity: "low",
      advice: t("دوّر الإطارات وافحص المحاذاة دوريًا.", "Rotate tires and check alignment regularly."),
      audioUrl: "",
      videoUrl: "",
      link: ""
    }
  ];
}
__name(defaultCases, "defaultCases");
function severityLabel(level) {
  const map = {
    low: { ar: "منخفض", en: "Low" },
    medium: { ar: "متوسط", en: "Medium" },
    high: { ar: "مرتفع", en: "High" },
    critical: { ar: "حرج", en: "Critical" }
  };
  return t(map[level].ar, map[level].en);
}
__name(severityLabel, "severityLabel");
function isYoutubeUrl(url) {
  return /youtube\.com|youtu\.be/i.test(url);
}
__name(isYoutubeUrl, "isYoutubeUrl");
function youtubeEmbedUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.hostname.includes("youtu.be")) {
      const id2 = parsed.pathname.replace("/", "");
      return id2 ? `https://www.youtube.com/embed/${id2}` : "";
    }
    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : "";
  } catch {
    return "";
  }
}
__name(youtubeEmbedUrl, "youtubeEmbedUrl");
function isAudioUrl(url) {
  return /\.(mp3|wav|ogg|m4a)(\?|$)/i.test(url);
}
__name(isAudioUrl, "isAudioUrl");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _CarSoundDiagnosticGuide = class _CarSoundDiagnosticGuide extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.selectedId = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a, _b;
    if (changed.has("config")) {
      const cases = parseCases((_a = this.config) == null ? void 0 : _a.csdg_cases);
      cases.some((item) => item.id === this.selectedId) || (this.selectedId = ((_b = cases[0]) == null ? void 0 : _b.id) ?? "");
    }
  }
  get cases() {
    var _a;
    return parseCases((_a = this.config) == null ? void 0 : _a.csdg_cases);
  }
  get selected() {
    return this.cases.find((item) => item.id === this.selectedId) ?? this.cases[0] ?? null;
  }
  renderMedia(item) {
    const blocks = [];
    if (item.audioUrl && isAudioUrl(item.audioUrl) ? blocks.push(html`
        <audio controls preload="none" src=${item.audioUrl} aria-label=${t("عينة صوت", "Sound sample")}>
          ${t("متصفحك لا يدعم تشغيل الصوت", "Your browser does not support audio playback")}
        </audio>
      `) : item.audioUrl && blocks.push(html`
        <a
          class="csdg-media__link"
          href=${item.audioUrl}
          target="_blank"
          rel=${isExternalUrl(item.audioUrl) ? "noopener noreferrer" : nothing}
        >
          ${t("استمع للعينة", "Listen to sample")}
        </a>
      `), item.videoUrl)
      if (isYoutubeUrl(item.videoUrl)) {
        const embed = youtubeEmbedUrl(item.videoUrl);
        embed && blocks.push(html`
            <iframe
              src=${embed}
              title=${item.name}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          `);
      } else
        blocks.push(html`
          <a
            class="csdg-media__link"
            href=${item.videoUrl}
            target="_blank"
            rel=${isExternalUrl(item.videoUrl) ? "noopener noreferrer" : nothing}
          >
            ${t("شاهد الفيديو", "Watch video")}
          </a>
        `);
    return blocks.length ? html`<div class="csdg-block">
      <p class="csdg-block__label">${t("عينات صوت وفيديو", "Sound & video samples")}</p>
      <div class="csdg-media">${blocks}</div>
    </div>` : nothing;
  }
  selectCase(id) {
    this.selectedId !== id && (this.selectedId = id, typeof window < "u" && window.matchMedia("(max-width: 959px)").matches && this.updateComplete.then(() => {
      var _a;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      (_a = this.renderRoot.querySelector(".csdg-panel")) == null || _a.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    }));
  }
  onPickerKeydown(e) {
    const cases = this.cases;
    if (cases.length < 2) return;
    const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (cases.findIndex((item) => {
      var _a;
      return item.id === ((_a = this.selected) == null ? void 0 : _a.id);
    }) + delta + cases.length) % cases.length;
    this.selectedId = cases[next].id, this.updateComplete.then(() => {
      const btn = this.renderRoot.querySelector(".csdg-case.is-selected");
      btn == null || btn.focus();
    });
  }
  renderPanel(item) {
    var _a, _b;
    const causesLabel = localizedString((_a = this.config) == null ? void 0 : _a.csdg_causes_label) || t("الأسباب المحتملة", "Possible causes"), adviceLabel = localizedString((_b = this.config) == null ? void 0 : _b.csdg_advice_label) || t("نصيحة الفني", "Mechanic advice");
    return html`
      <div class="csdg-panel" aria-live="polite">
        <div class="csdg-panel__head">
          <div class="csdg-panel__heading">
            <p class="csdg-panel__kicker">${t("التشخيص", "Diagnosis")}</p>
            <h3 class="csdg-panel__title">${item.name}</h3>
          </div>
          <span class=${classMap({ "csdg-severity": !0, [`csdg-severity--${item.severity}`]: !0 })}>
            <span class="csdg-severity__dot" aria-hidden="true"></span>
            ${t("الخطورة:", "Severity:")} ${severityLabel(item.severity)}
          </span>
        </div>

        ${item.description ? html`<p class="csdg-panel__desc">${item.description}</p>` : nothing}

        ${item.causes.length ? html`<div class="csdg-block">
              <p class="csdg-block__label">${causesLabel}</p>
              <ul class="csdg-causes">
                ${item.causes.map(
      (cause, i) => html`<li>
                    <span class="csdg-causes__num" aria-hidden="true">${i + 1}</span>
                    <span>${cause}</span>
                  </li>`
    )}
              </ul>
            </div>` : nothing}

        ${item.advice ? html`<div class="csdg-alert" role="note">
              <span class="csdg-alert__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </span>
              <span class="csdg-alert__body">
                <strong>${adviceLabel}</strong>
                <span>${item.advice}</span>
              </span>
            </div>` : nothing}

        ${this.renderMedia(item)}

        ${item.link ? html`<div class="csdg-actions">
              <a
                class="fs-btn fs-tap"
                href=${item.link}
                target="_blank"
                rel=${isExternalUrl(item.link) ? "noopener noreferrer" : nothing}
              >
                ${t("احجز فحصًا", "Book inspection")}
              </a>
            </div>` : nothing}
      </div>
    `;
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "csdg_"), cases = this.cases, selected = this.selected, title = localizedString(c.csdg_title), desc = localizedString(c.csdg_desc);
    return cases.length ? html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("دليل تشخيص أصوات السيارة", "Car sound diagnostic guide")}
      >
        <div class="fs-container">
          ${title || desc ? html`<div class="fs-hero">
                <p class="fs-eyebrow">${t("شخّص قبل الشراء", "Diagnose before you buy")}</p>
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>` : nothing}

          <div class="csdg-layout">
            <div class="csdg-picker-card">
              <div class="csdg-picker__head">
                <p class="csdg-picker__title">${t("ما الصوت الذي تسمعه؟", "What sound do you hear?")}</p>
                <span class="csdg-picker__count">${cases.length}</span>
              </div>
              <div
                class="csdg-picker"
                role="listbox"
                aria-label=${t("اختر العرض", "Choose symptom")}
                @keydown=${(e) => this.onPickerKeydown(e)}
              >
                ${cases.map(
      (item) => html`
                    <button
                      type="button"
                      class=${classMap({ "csdg-case": !0, "is-selected": item.id === (selected == null ? void 0 : selected.id) })}
                      role="option"
                      aria-selected=${item.id === (selected == null ? void 0 : selected.id) ? "true" : "false"}
                      tabindex=${item.id === (selected == null ? void 0 : selected.id) ? "0" : "-1"}
                      @click=${() => this.selectCase(item.id)}
                    >
                      ${item.icon ? html`<span class="csdg-case__icon ${item.icon.startsWith("sicon-") ? item.icon : ""}" aria-hidden="true">
                            ${item.icon.startsWith("sicon-") ? "" : item.icon}
                          </span>` : nothing}
                      <span class="csdg-case__body">
                        <span class="csdg-case__name">${item.name}</span>
                        ${item.description ? html`<span class="csdg-case__desc">${item.description}</span>` : nothing}
                      </span>
                      <span class=${classMap({ "csdg-case__dot": !0, [`csdg-case__dot--${item.severity}`]: !0 })} aria-hidden="true"></span>
                    </button>
                  `
    )}
              </div>
            </div>

            ${selected ? this.renderPanel(selected) : nothing}
          </div>
          ${renderCommerceOutcome(c, "csdg_", { ready: !!selected })}
        </div>
      </section>
    ` : html`<div class="fs-empty" role="status">
        ${t("أضف حالات الأصوات من إعدادات العنصر", "Add sound cases in element settings")}
      </div>`;
  }
};
__name(_CarSoundDiagnosticGuide, "CarSoundDiagnosticGuide"), _CarSoundDiagnosticGuide.styles = [sharedSectionCss, componentStyles];
let CarSoundDiagnosticGuide = _CarSoundDiagnosticGuide;
__decorateClass([
  property({ type: Object })
], CarSoundDiagnosticGuide.prototype, "config");
__decorateClass([
  state()
], CarSoundDiagnosticGuide.prototype, "selectedId");
bindSallaRegistration(CarSoundDiagnosticGuide);
typeof CarSoundDiagnosticGuide < "u" && CarSoundDiagnosticGuide.registerSallaComponent("salla-car-sound-diagnostic-guide");
export {
  CarSoundDiagnosticGuide as default
};
