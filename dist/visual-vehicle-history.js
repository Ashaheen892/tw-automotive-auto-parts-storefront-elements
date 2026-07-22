var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { n as normalizeCollection, l as localizedString, f as toNumber, e as extractLink, c as extractImageUrl, k as itemIdFromLabel, h as sortByOrder, d as isTruthy, t, g as getRadioValue, s as sharedSectionCss, i as isExternalUrl, r as readSectionTheme, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { r as renderCommerceOutcome } from "./commerceOutcome--G016JKs.js";
const componentStyles = css`
  .vvh-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .vvh-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.55rem;
  }

  .vvh-stat {
    padding: 0.85rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    display: grid;
    gap: 0.2rem;
    min-width: 0;
  }

  .vvh-stat__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-stat__value {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .vvh-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .vvh-filter {
    min-height: 36px;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
  }

  .vvh-filter.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-layout {
    display: grid;
    gap: 1.1rem;
    align-items: start;
  }

  @media (min-width: 900px) {
    .vvh-layout--vertical {
      grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    }
  }

  .vvh-card {
    padding: 1rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .vvh-track {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .vvh-layout--horizontal .vvh-track {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.65rem;
    padding-bottom: 0.2rem;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .vvh-layout--horizontal .vvh-track::-webkit-scrollbar {
    display: none;
  }

  .vvh-item {
    position: relative;
  }

  .vvh-layout--horizontal .vvh-item {
    flex: 0 0 auto;
    width: min(220px, 72vw);
    scroll-snap-align: start;
  }

  .vvh-trigger {
    width: 100%;
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 0.75rem;
    align-items: center;
    padding: 0.85rem 0.9rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .vvh-layout--horizontal .vvh-trigger {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    min-height: 148px;
    align-content: center;
  }

  .vvh-trigger.is-active,
  .vvh-trigger:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  .vvh-trigger__index {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .vvh-trigger__body {
    display: grid;
    gap: 0.22rem;
    min-width: 0;
  }

  .vvh-layout--horizontal .vvh-trigger__body {
    justify-items: center;
  }

  .vvh-trigger__date {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .vvh-trigger__title {
    font-size: 0.92rem;
    font-weight: 900;
    line-height: 1.35;
  }

  .vvh-trigger__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    align-items: center;
  }

  .vvh-layout--horizontal .vvh-trigger__meta {
    justify-content: center;
  }

  .vvh-chip {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-chip--accent {
    color: var(--accent-color, var(--fs-store-primary));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
  }

  .vvh-detail {
    display: grid;
    gap: 0.85rem;
    padding: 1.15rem 1.15rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    align-content: start;
  }

  .vvh-detail__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .vvh-detail__kicker {
    margin: 0 0 0.2rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__title {
    margin: 0;
    font-size: 1.12rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .vvh-detail__nav {
    display: inline-flex;
    gap: 0.35rem;
    flex: 0 0 auto;
  }

  .vvh-nav-btn {
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

  .vvh-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__meta {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
  }

  .vvh-detail__note {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .vvh-detail__media img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .vvh-next {
    display: grid;
    gap: 0.2rem;
    padding: 0.75rem 0.85rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .vvh-next__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-next__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .vvh-empty {
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: var(--muted-color, #64748b);
    font-size: 0.9rem;
  }

  @media (max-width: 899px) {
    .vvh-shell {
      gap: 0.85rem;
    }

    .vvh-stats {
      grid-template-columns: 1fr;
    }

    .vvh-filters {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.15rem;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .vvh-filters::-webkit-scrollbar {
      display: none;
    }

    .vvh-filter {
      flex: 0 0 auto;
      min-height: 40px;
    }

    .vvh-card {
      padding: 0.75rem;
    }

    .vvh-trigger {
      min-height: 64px;
      padding: 0.75rem 0.8rem;
    }

    .vvh-detail {
      padding: 1rem 0.95rem 1.1rem;
    }

    .vvh-detail__head {
      flex-wrap: wrap;
    }

    .vvh-nav-btn {
      width: 40px;
      height: 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vvh-trigger,
    .vvh-nav-btn {
      transition: none !important;
    }
  }
`;
function resolveLayout(value) {
  return getRadioValue(value, "vertical").toLowerCase() === "horizontal" ? "horizontal" : "vertical";
}
__name(resolveLayout, "resolveLayout");
function showStats(config) {
  return isTruthy(config.vvh_show_stats, !0);
}
__name(showStats, "showStats");
function parseEvents(raw) {
  const parsed = normalizeCollection(raw).map((row, i) => {
    const title = localizedString(row.title);
    if (!title) return null;
    const category = localizedString(row.tag) || localizedString(row.type) || localizedString(row.service_type);
    return {
      id: String(row.id ?? "").trim() || itemIdFromLabel(title, "") || `event-${i + 1}`,
      date: localizedString(row.date) || String(row.date ?? "").trim(),
      km: toNumber(row.km, 0),
      title,
      category,
      image: extractImageUrl(row.image),
      note: localizedString(row.note),
      documentUrl: extractLink(row.document_url) || extractLink(row.document),
      nextService: localizedString(row.next_service),
      order: toNumber(row.order, i + 1)
    };
  }).filter((e) => !!e), sorted = sortByOrder(parsed, "order");
  return sorted.length ? sorted : defaultEvents();
}
__name(parseEvents, "parseEvents");
function defaultEvents() {
  return [
    {
      id: "oil",
      title: t("تغيير الزيت", "Oil change"),
      date: t("مارس 2025", "Mar 2025"),
      km: 45e3,
      category: t("محرك", "Engine"),
      image: "",
      note: t("زيت تخليقي 5W-30 مع فلتر جديد.", "Synthetic 5W-30 oil with a new filter."),
      documentUrl: "",
      nextService: t("50,000 كم", "50,000 km"),
      order: 1
    },
    {
      id: "battery",
      title: t("تبديل البطارية", "Battery replacement"),
      date: t("يناير 2025", "Jan 2025"),
      km: 42e3,
      category: t("كهرباء", "Electrical"),
      image: "",
      note: t("بطارية 70 أمبير مع ضمان سنتين.", "70Ah battery with 2-year warranty."),
      documentUrl: "",
      nextService: "",
      order: 2
    },
    {
      id: "brakes",
      title: t("فحص الفرامل", "Brake inspection"),
      date: t("نوفمبر 2024", "Nov 2024"),
      km: 38e3,
      category: t("فرامل", "Brakes"),
      image: "",
      note: t("فحمات عند 60% — لا حاجة للاستبدال الآن.", "Pads at 60% — no replacement needed yet."),
      documentUrl: "",
      nextService: t("45,000 كم", "45,000 km"),
      order: 3
    },
    {
      id: "tires",
      title: t("تغيير الإطارات", "Tire change"),
      date: t("سبتمبر 2024", "Sep 2024"),
      km: 35e3,
      category: t("إطارات", "Tires"),
      image: "",
      note: t("أربعة إطارات صيفية جديدة.", "Four new summer tires."),
      documentUrl: "",
      nextService: t("تدوير عند 40,000 كم", "Rotate at 40,000 km"),
      order: 4
    },
    {
      id: "service",
      title: t("الصيانة الدورية", "Routine service"),
      date: t("يونيو 2024", "Jun 2024"),
      km: 3e4,
      category: t("دورية", "Routine"),
      image: "",
      note: t("فحص شامل مع استبدال الفلاتر.", "Full inspection with filter replacement."),
      documentUrl: "",
      nextService: t("35,000 كم", "35,000 km"),
      order: 5
    }
  ];
}
__name(defaultEvents, "defaultEvents");
function formatKm(km, unitLabel) {
  if (!km) return "";
  const formatted = km.toLocaleString();
  return unitLabel ? `${formatted} ${unitLabel}` : formatted;
}
__name(formatKm, "formatKm");
function label(config, key, ar, en) {
  return localizedString(config[key]) || t(ar, en);
}
__name(label, "label");
function latestEvent(events) {
  return events[0] ?? null;
}
__name(latestEvent, "latestEvent");
function nextServiceHint(events) {
  for (const event of events)
    if (event.nextService.trim()) return event.nextService.trim();
  return "";
}
__name(nextServiceHint, "nextServiceHint");
function uniqueCategories(events) {
  const seen = /* @__PURE__ */ new Set(), out = [];
  for (const event of events) {
    const cat = event.category.trim();
    !cat || seen.has(cat) || (seen.add(cat), out.push(cat));
  }
  return out;
}
__name(uniqueCategories, "uniqueCategories");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const _VisualVehicleHistory = class _VisualVehicleHistory extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.selectedId = "", this.filter = "", this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  willUpdate(changed) {
    var _a;
    if (changed.has("config")) {
      const events = this.events;
      this.filter = "", this.selectedId = ((_a = events[0]) == null ? void 0 : _a.id) ?? "";
    }
  }
  get events() {
    var _a;
    return parseEvents((_a = this.config) == null ? void 0 : _a.vvh_events);
  }
  get filtered() {
    return this.filter ? this.events.filter((e) => e.category === this.filter) : this.events;
  }
  get selected() {
    const list = this.filtered;
    return list.find((e) => e.id === this.selectedId) ?? list[0] ?? null;
  }
  select(id) {
    this.selectedId = id, this.updateComplete.then(() => {
      var _a;
      const active = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".vvh-trigger.is-active");
      active == null || active.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }
  setFilter(value) {
    var _a;
    this.filter = value;
    const list = value ? this.events.filter((e) => e.category === value) : this.events;
    this.selectedId = ((_a = list[0]) == null ? void 0 : _a.id) ?? "";
  }
  shift(delta) {
    const list = this.filtered;
    if (!list.length) return;
    const next = (Math.max(0, list.findIndex((e) => {
      var _a;
      return e.id === ((_a = this.selected) == null ? void 0 : _a.id);
    })) + delta + list.length) % list.length;
    this.select(list[next].id);
  }
  renderStats(events) {
    if (!showStats(this.config || {}) || !events.length) return nothing;
    const unit = label(this.config || {}, "vvh_unit_label", "كم", "km"), latest = latestEvent(events), next = nextServiceHint(events);
    return html`
      <div class="vvh-stats" role="group" aria-label=${t("ملخص السجل", "Log summary")}>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${t("عدد السجلات", "Records")}</p>
          <p class="vvh-stat__value">${events.length}</p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${t("آخر خدمة", "Latest service")}</p>
          <p class="vvh-stat__value">
            ${(latest == null ? void 0 : latest.title) || "—"}
            ${latest != null && latest.km ? html` · ${formatKm(latest.km, unit)}` : nothing}
          </p>
        </div>
        <div class="vvh-stat">
          <p class="vvh-stat__label">${label(this.config || {}, "vvh_next_label", "الصيانة القادمة", "Next service")}</p>
          <p class="vvh-stat__value">${next || t("غير محددة", "Not set")}</p>
        </div>
      </div>
    `;
  }
  renderFilters(events) {
    const cats = uniqueCategories(events);
    return cats.length < 2 ? nothing : html`
      <div class="vvh-filters" role="toolbar" aria-label=${t("تصفية حسب النوع", "Filter by type")}>
        <button
          type="button"
          class=${classMap({ "vvh-filter": !0, "is-active": !this.filter })}
          @click=${() => this.setFilter("")}
        >
          ${t("الكل", "All")}
        </button>
        ${cats.map(
      (cat) => html`<button
            type="button"
            class=${classMap({ "vvh-filter": !0, "is-active": this.filter === cat })}
            @click=${() => this.setFilter(cat)}
          >
            ${cat}
          </button>`
    )}
      </div>
    `;
  }
  renderDetail(event, list) {
    if (!event)
      return html`<div class="vvh-detail">
        <p class="vvh-empty">${t("اختر سجلًا من الخط الزمني لعرض التفاصيل.", "Pick a log entry to see details.")}</p>
      </div>`;
    const c = this.config || {}, unit = label(c, "vvh_unit_label", "كم", "km"), nextLabel = label(c, "vvh_next_label", "الصيانة القادمة", "Next service"), idx = list.findIndex((e) => e.id === event.id);
    return html`
      <div class="vvh-detail" role="region" aria-live="polite">
        <div class="vvh-detail__head">
          <div>
            <p class="vvh-detail__kicker">
              ${t("تفاصيل السجل", "Log details")}
              ${idx >= 0 ? ` · ${idx + 1}/${list.length}` : ""}
            </p>
            <h3 class="vvh-detail__title">${event.title}</h3>
          </div>
          ${list.length > 1 ? html`<div class="vvh-detail__nav" dir="ltr">
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${t("السابق", "Previous")}
                  @click=${() => this.shift(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="vvh-nav-btn"
                  aria-label=${t("التالي", "Next")}
                  @click=${() => this.shift(1)}
                >
                  ›
                </button>
              </div>` : nothing}
        </div>

        <p class="vvh-detail__meta">
          ${event.date || nothing}
          ${event.date && event.km ? " · " : nothing}
          ${event.km ? formatKm(event.km, unit) : nothing}
          ${event.category ? html` · <span class="vvh-chip vvh-chip--accent">${event.category}</span>` : nothing}
        </p>

        ${event.image ? html`<div class="vvh-detail__media">
              <img src=${event.image} alt="" loading="lazy" decoding="async" />
            </div>` : nothing}

        ${event.note ? html`<p class="vvh-detail__note">${event.note}</p>` : nothing}

        ${event.nextService ? html`<div class="vvh-next" role="note">
              <span class="vvh-next__label">${nextLabel}</span>
              <p class="vvh-next__text">${event.nextService}</p>
            </div>` : nothing}

        ${event.documentUrl ? html`<a
              class="fs-btn fs-btn--ghost fs-tap"
              href=${event.documentUrl}
              target="_blank"
              rel=${isExternalUrl(event.documentUrl) ? "noopener noreferrer" : nothing}
            >
              ${t("عرض المستند", "View document")}
            </a>` : nothing}
      </div>
    `;
  }
  renderProducts(event) {
    return renderCommerceOutcome(this.config || {}, "vvh_", {
      ready: !!event
    });
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "vvh_"), events = this.events, list = this.filtered, layout = resolveLayout(c.vvh_layout), unit = label(c, "vvh_unit_label", "كم", "km"), title = localizedString(c.vvh_title) || t("سجل صيانة السيارة", "Vehicle maintenance log"), desc = localizedString(c.vvh_desc) || t(
      "راجع خدمات سيارتك السابقة، وتصفّح القطع المناسبة لكل سجل صيانة.",
      "Review past vehicle services and browse matching parts for each log entry."
    ), selected = this.selected;
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title}
      >
        <div class="fs-container">
          <div class="vvh-shell">
            <div class="fs-hero">
              <p class="fs-eyebrow">${t("دفتر الصيانة", "Service logbook")}</p>
              ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
              ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
            </div>

            ${this.renderStats(events)}
            ${this.renderFilters(events)}

            <div
              class=${classMap({
      "vvh-layout": !0,
      "vvh-layout--vertical": layout === "vertical",
      "vvh-layout--horizontal": layout === "horizontal"
    })}
            >
              <div class="vvh-card">
                <div class="vvh-track" role="list">
                  ${list.length ? list.map(
      (event, i) => html`
                          <div class="vvh-item" role="listitem">
                            <button
                              type="button"
                              class=${classMap({
        "vvh-trigger": !0,
        "is-active": event.id === (selected == null ? void 0 : selected.id)
      })}
                              aria-pressed=${event.id === (selected == null ? void 0 : selected.id) ? "true" : "false"}
                              @click=${() => this.select(event.id)}
                            >
                              <span class="vvh-trigger__index">${String(i + 1).padStart(2, "0")}</span>
                              <span class="vvh-trigger__body">
                                ${event.date ? html`<span class="vvh-trigger__date">${event.date}</span>` : nothing}
                                <span class="vvh-trigger__title">${event.title}</span>
                                <span class="vvh-trigger__meta">
                                  ${event.category ? html`<span class="vvh-chip">${event.category}</span>` : nothing}
                                  ${event.km ? html`<span class="vvh-chip vvh-chip--accent"
                                        >${formatKm(event.km, unit)}</span
                                      >` : nothing}
                                </span>
                              </span>
                            </button>
                          </div>
                        `
    ) : html`<p class="vvh-empty">${t("لا توجد سجلات في هذا التصنيف.", "No records in this filter.")}</p>`}
                </div>
              </div>

              ${this.renderDetail(selected, list)}
            </div>

            ${this.renderProducts(selected)}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_VisualVehicleHistory, "VisualVehicleHistory"), _VisualVehicleHistory.styles = [sharedSectionCss, componentStyles];
let VisualVehicleHistory = _VisualVehicleHistory;
__decorateClass([
  property({ type: Object })
], VisualVehicleHistory.prototype, "config");
__decorateClass([
  state()
], VisualVehicleHistory.prototype, "selectedId");
__decorateClass([
  state()
], VisualVehicleHistory.prototype, "filter");
bindSallaRegistration(
  VisualVehicleHistory
);
typeof VisualVehicleHistory < "u" && VisualVehicleHistory.registerSallaComponent("salla-visual-vehicle-history");
export {
  VisualVehicleHistory as default
};
