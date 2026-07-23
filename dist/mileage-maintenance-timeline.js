var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, LitElement, nothing, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, g as getPageLocale } from "./localizedString-Bm7wdWFi.js";
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const PRIMARY = "var(--color-primary, var(--primary-color, var(--color-main, #64748b)))";
function detectFsTheme() {
  var _a;
  if (typeof document > "u") return "light";
  const root = document.documentElement, attr = (root.getAttribute("data-theme") || root.getAttribute("data-mode") || "").toLowerCase();
  if (attr === "dark") return "dark";
  if (attr === "light") return "light";
  if (root.classList.contains("dark") || (_a = document.body) != null && _a.classList.contains("dark"))
    return "dark";
  try {
    const stored = localStorage.getItem("salla_demo_theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
  }
  return "light";
}
__name(detectFsTheme, "detectFsTheme");
function fsThemeVars(mode = detectFsTheme()) {
  const dark = mode === "dark";
  return {
    "--fs-store-primary": PRIMARY,
    "--accent-color": PRIMARY,
    "--button-bg": PRIMARY,
    "--button-color": "#ffffff",
    "--text-color": dark ? "#ffffff" : "#000000",
    "--muted-color": dark ? "#aaaaaa" : "#666666",
    "--card-bg": dark ? "#0f0f0f" : "#ffffff",
    "--fs-surface": dark ? "#0a0a0a" : "#f0f0f0",
    "--border-color": dark ? "rgba(255, 255, 255, 0.12)" : "#e5e7eb",
    "--section-bg": "transparent"
  };
}
__name(fsThemeVars, "fsThemeVars");
function applyVars(el, vars) {
  for (const [key, value] of Object.entries(vars))
    el.style.setProperty(key, value);
  el.setAttribute("data-fs-theme", detectFsTheme());
}
__name(applyVars, "applyVars");
function walkAndApply(root, vars) {
  root.querySelectorAll(".fs-section").forEach((node) => {
    applyVars(node, vars);
  });
}
__name(walkAndApply, "walkAndApply");
function applyFsThemeToDocument(mode = detectFsTheme()) {
  if (typeof document > "u") return;
  const vars = fsThemeVars(mode);
  walkAndApply(document, vars), document.querySelectorAll("*").forEach((node) => {
    const el = node, shadow = el.shadowRoot;
    shadow && shadow.querySelector(".fs-section") && (applyVars(el, vars), walkAndApply(shadow, vars));
  });
}
__name(applyFsThemeToDocument, "applyFsThemeToDocument");
let watching = !1, syncTimer = null;
function scheduleSync() {
  syncTimer && clearTimeout(syncTimer), syncTimer = setTimeout(() => {
    syncTimer = null, applyFsThemeToDocument();
  }, 50);
}
__name(scheduleSync, "scheduleSync");
function ensureFsThemeWatch() {
  if (!(watching || typeof document > "u")) {
    watching = !0, scheduleSync();
    try {
      new MutationObserver(scheduleSync).observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-theme", "data-mode", "class"]
      }), document.body && new MutationObserver(scheduleSync).observe(document.body, {
        attributes: !0,
        attributeFilter: ["class", "data-theme", "data-mode"]
      });
    } catch {
    }
    window.addEventListener("storage", (event) => {
      event.key === "salla_demo_theme" && scheduleSync();
    });
    try {
      new MutationObserver((records) => {
        records.some((r) => r.addedNodes.length) && scheduleSync();
      }).observe(document.documentElement, { childList: !0, subtree: !0 });
    } catch {
    }
  }
}
__name(ensureFsThemeWatch, "ensureFsThemeWatch");
function normalizeItem(item) {
  return Object.entries(item || {}).reduce((acc, [key, value]) => {
    const normalizedKey = key.includes(".") ? key.split(".").pop() : key;
    return acc[normalizedKey] = value, acc;
  }, {});
}
__name(normalizeItem, "normalizeItem");
function slugifyId(value, fallback = "") {
  const raw = typeof value == "string" || typeof value == "number" ? String(value).trim() : localizedString(value, "").trim();
  return raw && raw.toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 48) || fallback;
}
__name(slugifyId, "slugifyId");
function itemIdFromLabel(value, fallback = "") {
  if (value && typeof value == "object" && !Array.isArray(value)) {
    const row = value, en = String(row.en ?? "").trim(), ar = String(row.ar ?? "").trim();
    return slugifyId(en || ar, fallback);
  }
  return slugifyId(value, fallback);
}
__name(itemIdFromLabel, "itemIdFromLabel");
function resolveItemId(item, index, prefix = "item") {
  const explicit = String(item.id ?? item.value ?? item.key ?? "").trim();
  return explicit || itemIdFromLabel(item.name ?? item.title ?? item.label ?? item.brand ?? item.model, "") || `${prefix}-${index + 1}`;
}
__name(resolveItemId, "resolveItemId");
function normalizeCollection(items) {
  let list = items;
  if (list && typeof list == "object" && !Array.isArray(list)) {
    const obj = list;
    Array.isArray(obj.value) ? list = obj.value : Array.isArray(obj.selected) ? list = obj.selected : Array.isArray(obj.items) ? list = obj.items : Array.isArray(obj.data) && (list = obj.data);
  }
  return Array.isArray(list) ? list.filter((item) => !!item && typeof item == "object").map((item, index) => {
    const normalized = normalizeItem(item), row = normalized;
    return String(row.id ?? "").trim() || (row.id = resolveItemId(row, index)), normalized;
  }) : [];
}
__name(normalizeCollection, "normalizeCollection");
function getUnitValue(val, fallback = 0) {
  return typeof val == "number" && Number.isFinite(val) ? val : typeof val == "string" && val.trim() !== "" && Number.isFinite(Number(val)) ? Number(val) : val && typeof val == "object" && "value" in val ? getUnitValue(val.value, fallback) : fallback;
}
__name(getUnitValue, "getUnitValue");
function toNumber(val, fallback = 0) {
  if (typeof val == "number" && Number.isFinite(val)) return val;
  if (typeof val == "string" && val.trim() !== "") {
    const n = Number(val.replace(",", "."));
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
}
__name(toNumber, "toNumber");
function isTruthy(val, fallback = !1) {
  if (typeof val == "boolean") return val;
  if (typeof val == "string") {
    const v = val.toLowerCase().trim();
    if (["true", "1", "yes", "on"].includes(v)) return !0;
    if (["false", "0", "no", "off", ""].includes(v)) return !1;
  }
  if (typeof val == "number") return val !== 0;
  if (val && typeof val == "object") {
    const obj = val;
    if ("value" in obj && obj.value !== obj) return isTruthy(obj.value, fallback);
    if ("selected" in obj) return isTruthy(obj.selected, fallback);
  }
  return fallback;
}
__name(isTruthy, "isTruthy");
function extractLink(value) {
  if (!value) return "";
  if (typeof value == "string") {
    const trimmed = value.trim();
    return isValidHref(trimmed) ? trimmed : "";
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const link = extractLink(item);
      if (link) return link;
    }
    return "";
  }
  if (typeof value == "object") {
    const obj = value, candidates = [
      obj.url,
      obj.href,
      obj.link,
      obj.value,
      obj.custom,
      obj.path
    ];
    for (const candidate of candidates) {
      const link = extractLink(candidate);
      if (link) return link;
    }
  }
  return "";
}
__name(extractLink, "extractLink");
function isValidHref(url) {
  if (!url || url === "#") return !1;
  if (url.startsWith("/") || url.startsWith("#") || url.startsWith("?") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("whatsapp:"))
    return !0;
  try {
    const parsed = new URL(url, window.location.origin);
    return ["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol);
  } catch {
    return !1;
  }
}
__name(isValidHref, "isValidHref");
function isExternalUrl(url) {
  try {
    return new URL(url, window.location.origin).origin !== window.location.origin;
  } catch {
    return !1;
  }
}
__name(isExternalUrl, "isExternalUrl");
function t(ar, en, value, fallbackAr) {
  return getPageLocale() === "en" ? en : fallbackAr || ar;
}
__name(t, "t");
function readSectionTheme(config, prefix, defaults) {
  const c = config || {};
  return {
    bg: "transparent",
    text: "#000000",
    muted: "#666666",
    accent: "var(--color-primary, var(--primary-color, var(--color-main, #64748b)))",
    card: "var(--color-white, var(--bg-color, #ffffff))",
    border: "var(--color-border, #e5e7eb)",
    buttonBg: "var(--color-primary, var(--primary-color, var(--color-main, #64748b)))",
    buttonColor: "#ffffff",
    radius: `${getUnitValue(c[`${prefix}radius`], 20)}px`,
    spaceDesktop: getUnitValue(
      c[`${prefix}space_desktop`],
      48
    ),
    spaceMobile: getUnitValue(
      c[`${prefix}space_mobile`],
      28
    ),
    noBottomMargin: !1,
    hasContainer: !0
  };
}
__name(readSectionTheme, "readSectionTheme");
function themeStyleMap(theme) {
  const useContainer = theme.hasContainer !== !1;
  return ensureFsThemeWatch(), {
    ...fsThemeVars(),
    "--section-radius": theme.radius,
    "--space-desktop": `${theme.spaceDesktop}px`,
    "--space-mobile": `${theme.spaceMobile}px`,
    "--space-desktop-bottom": theme.noBottomMargin ? "0px" : `${theme.spaceDesktop}px`,
    "--space-mobile-bottom": theme.noBottomMargin ? "0px" : `${theme.spaceMobile}px`,
    "--section-container-max": useContainer ? "1440px" : "none",
    "--section-container-pad": useContainer ? "16px" : "0px",
    "--section-container-pad-sm": useContainer ? "12px" : "0px"
  };
}
__name(themeStyleMap, "themeStyleMap");
function getRadioValue(value, fallback = "") {
  if (typeof value == "string" && value.trim()) return value.trim();
  if (Array.isArray(value) && value[0]) {
    const first = value[0];
    if (typeof first == "string") return first;
    if (first && typeof first == "object" && "value" in first)
      return String(first.value ?? fallback);
    if (first && typeof first == "object" && "key" in first)
      return String(first.key ?? fallback);
  }
  if (value && typeof value == "object") {
    const obj = value;
    if (Array.isArray(obj.selected) && obj.selected[0])
      return getRadioValue(obj.selected, fallback);
    if ("value" in obj && obj.value != null && !Array.isArray(obj.value))
      return String(obj.value ?? fallback);
    if (Array.isArray(obj.value) && obj.value[0])
      return getRadioValue(obj.value, fallback);
  }
  return fallback;
}
__name(getRadioValue, "getRadioValue");
const sharedSectionCss = css`
  :host {
    direction: inherit;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: block;
    overflow-x: clip;
    /* Store primary + light/dark text defaults */
    --fs-store-primary: var(--color-primary, var(--primary-color, var(--color-main, #64748b)));
    --accent-color: var(--fs-store-primary);
    --button-bg: var(--fs-store-primary);
    --button-color: #ffffff;
    /* Light: titles black · subtitle/desc muted */
    --text-color: #000000;
    --muted-color: #666666;
    --card-bg: #ffffff;
    --border-color: #e5e7eb;
    --section-bg: transparent;
    --fs-surface: #f0f0f0;
    --fs-success: #2f9e63;
    --fs-caution: #e0a100;
    --fs-danger: #cf4b4b;
    --fs-unknown: #8f7a86;
  }

  :host-context(:root:not([data-theme='dark']):not(.dark)),
  :host-context(html:not([data-theme='dark']):not(.dark)) {
    --text-color: #000000;
    --muted-color: #666666;
    --card-bg: #ffffff;
    --border-color: #e5e7eb;
    --section-bg: transparent;
    --fs-surface: #f0f0f0;
    --button-bg: var(--fs-store-primary);
    --button-color: #ffffff;
  }

  :host-context([data-theme='dark']),
  :host-context(.dark),
  :host-context([data-mode='dark']) {
    /* Dark: titles white · subtitle/desc muted · secondary surfaces darker */
    --text-color: #ffffff;
    --muted-color: #aaaaaa;
    --card-bg: #0f0f0f;
    --border-color: rgba(255, 255, 255, 0.12);
    --section-bg: transparent;
    --fs-surface: #0a0a0a;
    --button-bg: var(--fs-store-primary);
    --button-color: #ffffff;
  }

  .fs-section {
    background:
      radial-gradient(
        130% 90% at 100% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, transparent),
        transparent 58%
      ),
      radial-gradient(
        120% 80% at 0% 100%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 5%, transparent),
        transparent 55%
      ),
      var(--section-bg, transparent);
    color: var(--text-color, #000000);
    padding: var(--space-mobile, 28px) 0
      var(--space-mobile-bottom, var(--space-mobile, 28px));
    overflow-x: clip;
  }

  @media (min-width: 960px) {
    .fs-section {
      padding: var(--space-desktop, 48px) 0
        var(--space-desktop-bottom, var(--space-desktop, 48px));
    }
  }

  .fs-container {
    width: 100%;
    max-width: var(--section-container-max, 1440px);
    margin: 0 auto;
    padding: 0 var(--section-container-pad, 16px);
    box-sizing: border-box;
  }

  /* Keep every element body flush with the storefront container width */
  .fs-container > * {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .fs-header,
  .fs-hero {
    display: grid;
    gap: 0.55rem;
    justify-items: center;
    text-align: center;
    margin-bottom: 1.75rem;
  }

  .fs-hero {
    padding: 1.15rem 1.25rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, var(--card-bg, #fff)) 0%,
      var(--card-bg, #fff) 58%
    );
    border: 1px solid
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    box-sizing: border-box;
  }

  /* Inside element shells that already provide gap */
  .fs-shell > .fs-hero,
  [class$='-shell'] > .fs-hero,
  [class$='-shell'] > .fs-header {
    margin-bottom: 0;
  }

  .fs-eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0.28rem 0.75rem;
    border-radius: 999px;
    border: 1px solid
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.3;
  }

  .fs-title {
    margin: 0 0 0.6rem;
    font-size: clamp(1.4rem, 2.6vw, 1.95rem);
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: var(--text-color, #000000);
  }

  .fs-header .fs-title::after,
  .fs-hero .fs-title::after,
  .fs-eyebrow + .fs-title::after {
    content: '';
    display: block;
    width: 52px;
    height: 3px;
    margin: 0.65rem auto 0;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      var(--accent-color, var(--fs-store-primary)),
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, #7c2d12)
    );
  }

  .fs-subtitle {
    margin: 0 0 0.45rem;
    color: var(--muted-color, #666666);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .fs-desc {
    margin: 0;
    max-width: 42rem;
    color: var(--muted-color, #666666);
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .fs-title,
  .fs-commerce__title {
    color: var(--text-color, #000000);
  }

  .fs-desc,
  .fs-subtitle,
  .fs-empty {
    color: var(--muted-color, #666666);
  }

  :host([data-fs-theme='dark']) .fs-title,
  :host([data-fs-theme='dark']) .fs-commerce__title {
    color: #ffffff;
  }

  :host([data-fs-theme='dark']) .fs-desc,
  :host([data-fs-theme='dark']) .fs-subtitle,
  :host([data-fs-theme='dark']) .fs-empty {
    color: #aaaaaa;
  }

  :host([data-fs-theme='light']) .fs-title,
  :host([data-fs-theme='light']) .fs-commerce__title {
    color: #000000;
  }

  :host([data-fs-theme='light']) .fs-desc,
  :host([data-fs-theme='light']) .fs-subtitle,
  :host([data-fs-theme='light']) .fs-empty {
    color: #666666;
  }

  /* Tip / notice surfaces — follow light/dark tokens (never hard-mix with #fff) */
  .fs-hint,
  .fs-notice {
    margin: 0;
    padding: 0.7rem 0.85rem;
    border-radius: 12px;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--text-color, #000000);
    background: color-mix(
      in srgb,
      var(--accent-color, var(--fs-store-primary)) 14%,
      var(--fs-surface, var(--card-bg, #f0f0f0))
    );
    border: 1px solid color-mix(in srgb, var(--border-color, #e5e7eb) 80%, transparent);
    border-inline-start: 3px solid var(--accent-color, var(--fs-store-primary));
  }

  :host([data-fs-theme='dark']) .fs-hint,
  :host([data-fs-theme='dark']) .fs-notice {
    color: #ffffff;
    background: color-mix(
      in srgb,
      var(--accent-color, var(--fs-store-primary)) 18%,
      var(--fs-surface, #0a0a0a)
    );
    border-color: rgba(255, 255, 255, 0.12);
  }

  :host([data-fs-theme='light']) .fs-hint,
  :host([data-fs-theme='light']) .fs-notice {
    color: #000000;
  }

  :host([data-fs-theme='dark']) .bsf-question__hint,
  :host([data-fs-theme='dark']) .bsg-step__hint,
  :host([data-fs-theme='dark']) .bsg-notice,
  :host([data-fs-theme='dark']) .bac-tip,
  :host([data-fs-theme='dark']) .bac-tip__text,
  :host([data-fs-theme='dark']) .bac-notice,
  :host([data-fs-theme='dark']) .bil-note,
  :host([data-fs-theme='dark']) .brl-step__note,
  :host([data-fs-theme='dark']) .bpa-tips,
  :host([data-fs-theme='dark']) .bpa-notice,
  :host([data-fs-theme='dark']) .bff-notice,
  :host([data-fs-theme='dark']) .bff-note,
  :host([data-fs-theme='dark']) .bfz-notice,
  :host([data-fs-theme='dark']) .bch-notice,
  :host([data-fs-theme='dark']) .bwp-notice,
  :host([data-fs-theme='dark']) .srg-zone-tip,
  :host([data-fs-theme='dark']) .pql-callout,
  :host([data-fs-theme='dark']) .fll-note,
  :host([data-fs-theme='dark']) .inp-note,
  :host([data-fs-theme='dark']) .sfr-tip,
  :host([data-fs-theme='dark']) .nal-tip,
  :host([data-fs-theme='dark']) .pcc-notice,
  :host([data-fs-theme='dark']) .pcc-tips,
  :host([data-fs-theme='dark']) .icpm-tip,
  :host([data-fs-theme='dark']) .mmt-note,
  :host([data-fs-theme='dark']) .csdg-alert,
  :host([data-fs-theme='dark']) .tbsg-notes {
    color: #ffffff;
    background: color-mix(
      in srgb,
      var(--accent-color, var(--fs-store-primary)) 18%,
      var(--fs-surface, #0a0a0a)
    );
    border-color: rgba(255, 255, 255, 0.12);
  }

  :host([data-fs-theme='dark']) .bac-tip__text,
  :host([data-fs-theme='dark']) .pcc-notice__text,
  :host([data-fs-theme='dark']) .pcc-tips__text,
  :host([data-fs-theme='dark']) .icpm-tip__text,
  :host([data-fs-theme='dark']) .pcc-tips__title {
    color: #ffffff;
    background: transparent;
    border: none;
  }

  :host-context([data-theme='dark']) .fs-section,
  :host-context(.dark) .fs-section,
  :host-context([data-mode='dark']) .fs-section {
    color: #ffffff;
    background:
      radial-gradient(
        130% 90% at 100% 0%,
        color-mix(in srgb, var(--fs-store-primary) 14%, transparent),
        transparent 58%
      ),
      radial-gradient(
        120% 80% at 0% 100%,
        color-mix(in srgb, var(--fs-store-primary) 8%, transparent),
        transparent 55%
      ),
      var(--section-bg, transparent);
  }

  :host-context([data-theme='dark']) .fs-card,
  :host-context(.dark) .fs-card,
  :host-context([data-mode='dark']) .fs-card,
  :host-context([data-theme='dark']) .fs-stage,
  :host-context(.dark) .fs-stage,
  :host-context([data-mode='dark']) .fs-stage {
    background: var(--card-bg, #0f0f0f);
    border-color: var(--border-color, rgba(255, 255, 255, 0.14));
    color: #ffffff;
  }

  :host-context([data-theme='dark']) .fs-commerce,
  :host-context(.dark) .fs-commerce,
  :host-context([data-mode='dark']) .fs-commerce {
    border-color: var(--border-color, rgba(255, 255, 255, 0.14));
  }

  .fs-hero__meta {
    margin: 0;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .fs-card {
    background: var(--card-bg, #ffffff);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, #fff);
    border-radius: var(--section-radius, 20px);
    box-shadow:
      0 1px 0 color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, transparent),
      0 14px 34px rgba(30, 41, 59, 0.09);
  }

  /* —— Unified buttons (size + primary fill) —— */
  .fs-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    min-height: 44px;
    min-width: 44px;
    padding: 0.65rem 1.25rem;
    border: 1.5px solid transparent;
    border-radius: 999px;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #ffffff);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.2;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 6px 16px color-mix(in srgb, var(--fs-store-primary) 22%, transparent);
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease,
      filter 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  .fs-btn:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
    box-shadow: 0 10px 22px color-mix(in srgb, var(--fs-store-primary) 30%, transparent);
  }

  .fs-btn:active {
    transform: translateY(0);
    filter: brightness(0.98);
  }

  .fs-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    filter: none;
  }

  .fs-btn--ghost {
    background: transparent;
    color: var(--accent-color, var(--fs-store-primary));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 50%, var(--border-color, #e5e7eb));
    box-shadow: none;
  }

  .fs-btn--ghost:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, transparent);
    filter: none;
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 70%, var(--border-color, #e5e7eb));
  }

  :host([data-fs-theme='dark']) .fs-btn--ghost {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, rgba(255, 255, 255, 0.2));
  }

  .fs-btn--compact,
  .fs-btn--icon {
    min-width: 44px;
    min-height: 44px;
    padding: 0.5rem 1rem;
    font-size: 0.86rem;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--fs-store-primary) 18%, transparent);
  }

  .fs-btn--icon {
    width: 44px;
    padding: 0;
  }

  .fs-btn--ghost.fs-btn--compact,
  .fs-btn--ghost.fs-btn--icon {
    box-shadow: none;
  }

  /* Choice chips — same height/radius as primary buttons */
  .fs-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-height: 44px;
    min-width: 44px;
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    border: 1.5px solid var(--border-color, #e5e7eb);
    background: var(--fs-surface, var(--card-bg, #f0f0f0));
    color: var(--text-color, #000000);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  }

  .fs-chip:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #e5e7eb));
  }

  .fs-chip[aria-pressed='true'],
  .fs-chip.is-active,
  .fs-chip[aria-selected='true'] {
    background: var(--button-bg, var(--fs-store-primary));
    border-color: transparent;
    color: #ffffff;
    transform: translateY(-1px);
  }

  :host([data-fs-theme='dark']) .fs-chip {
    background: var(--fs-surface, #0a0a0a);
    border-color: rgba(255, 255, 255, 0.14);
    color: #ffffff;
  }

  :host([data-fs-theme='dark']) .fs-chip[aria-pressed='true'],
  :host([data-fs-theme='dark']) .fs-chip.is-active,
  :host([data-fs-theme='dark']) .fs-chip[aria-selected='true'] {
    background: var(--button-bg, var(--fs-store-primary));
    border-color: transparent;
    color: #ffffff;
  }

  /* Align pill CTAs / choice chips only — NOT card-style chips (spa-chip, ffm-chip, …) */
  .bpb-card__cta,
  .spb-card__cta,
  .gpb-card__cta,
  .spb-cta,
  .bsf-chip,
  .bsg-option,
  .brb-option,
  .bca-answer,
  .bch-type,
  .bff-chip,
  .bac-chip {
    min-height: 44px;
    border-radius: 999px;
    box-sizing: border-box;
  }

  .bpb-card__cta,
  .spb-card__cta,
  .gpb-card__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.65rem 1.25rem;
    border: 1.5px solid transparent;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #ffffff);
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    box-shadow: 0 6px 16px color-mix(in srgb, var(--fs-store-primary) 22%, transparent);
  }

  .fs-tap {
    min-width: 44px;
    min-height: 44px;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .fs-actions,
  .fs-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem;
  }

  .fs-nav {
    justify-content: center;
    margin-top: 0.35rem;
  }

  .fs-nav .fs-btn {
    min-width: 7.5rem;
  }

  .fs-btn:focus-visible,
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--accent-color, var(--fs-store-primary));
    outline-offset: 2px;
  }

  .fs-empty {
    display: grid;
    place-items: center;
    gap: 0.55rem;
    padding: 2.4rem 1.25rem;
    text-align: center;
    color: var(--muted-color, #64748b);
    border: 1px dashed color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, var(--border-color, #d9e2ec));
    border-radius: var(--section-radius, 20px);
    background:
      radial-gradient(
        80% 80% at 50% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, transparent),
        transparent 70%
      ),
      color-mix(in srgb, var(--card-bg, #fff) 70%, var(--section-bg, transparent));
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .fs-coach {
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;
    padding: 0.85rem 1rem;
    border-radius: 14px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    color: var(--text-color, #111827);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  :host([data-fs-theme='dark']) .fs-coach {
    color: #ffffff;
    background: color-mix(
      in srgb,
      var(--accent-color, var(--fs-store-primary)) 16%,
      var(--fs-surface, #0a0a0a)
    );
    border-color: rgba(255, 255, 255, 0.12);
  }

  .fs-coach__mark {
    flex: 0 0 auto;
    width: 1.55rem;
    height: 1.55rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--accent-color, var(--fs-store-primary));
    color: #fff;
    font-size: 0.75rem;
    font-weight: 800;
  }

  .fs-progress {
    display: grid;
    gap: 0.4rem;
  }

  .fs-progress__bar {
    height: 6px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 75%, #fff);
    overflow: hidden;
  }

  .fs-progress__bar > span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      var(--accent-color, var(--fs-store-primary)),
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 65%, #7c2d12)
    );
    transition: width 0.28s ease;
  }

  .fs-progress__label {
    font-size: 0.8rem;
    font-weight: 650;
    color: var(--muted-color, #64748b);
  }

  .fs-stage {
    position: relative;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 12px 32px rgba(30, 41, 59, 0.08);
    overflow: hidden;
  }

  .fs-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 1.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .fs-pill--success {
    background: color-mix(in srgb, var(--fs-success) 14%, #fff);
    color: var(--fs-success);
  }

  .fs-pill--caution {
    background: color-mix(in srgb, var(--fs-caution) 16%, #fff);
    color: #9a6d00;
  }

  .fs-pill--danger {
    background: color-mix(in srgb, var(--fs-danger) 14%, #fff);
    color: var(--fs-danger);
  }

  .fs-meter {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 80%, transparent);
    overflow: hidden;
  }

  .fs-meter > span {
    display: block;
    height: 100%;
    background: linear-gradient(
      90deg,
      var(--accent-color, var(--fs-store-primary)),
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 60%, #7c2d12)
    );
    border-radius: inherit;
    transition: width 0.45s ease;
  }

  .fs-scroll-x {
    display: flex;
    gap: 0.65rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scrollbar-width: thin;
  }

  .fs-scroll-x > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  /* —— Salla theme-raed style product card —— */
  .fs-product-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    text-align: start;
    color: #1f2937;
    background: #fff;
    border: 0;
    border-radius: 15px;
    box-shadow: none;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fs-product-card:hover {
    box-shadow: 5px 10px 30px rgba(43, 45, 52, 0.051);
  }

  .fs-product-card--selectable {
    cursor: pointer;
  }

  .fs-product-card--selectable:focus-visible {
    outline: 2px solid var(--accent-color, var(--fs-store-primary));
    outline-offset: 2px;
  }

  .fs-product-card.is-selected {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 32%, transparent),
      0 16px 34px rgba(43, 33, 28, 0.12);
  }

  .fs-product-card__media {
    position: relative;
    aspect-ratio: 1 / 1;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 45%, #fff);
  }

  .fs-product-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fs-product-card__img--empty {
    background: linear-gradient(145deg, #3a2c26, #1c1613);
  }

  /* fs-product-card__badge--rtl-fix */
  .fs-product-card__badge {
    position: absolute;
    top: 1rem;
    inset-inline-start: 0;
    z-index: 2;
    padding: 0.375rem 0.625rem;
    border-radius: 0 15px 15px 0;
    background: #991b1b;
    color: #fff;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.02em;
      }

  :host([dir='rtl']) .fs-product-card__badge,
  [dir='rtl'] .fs-product-card__badge {
    border-radius: 15px 0 0 15px;
  }

  .fs-product-card__wishlist {
    position: absolute;
    top: 0.6rem;
    inset-inline-end: 0.6rem;
    z-index: 3;
    width: 2.15rem;
    height: 2.15rem;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    border-radius: 50%;
    background: color-mix(in srgb, var(--card-bg, #fff) 82%, transparent);
    color: var(--muted-color, #64748b);
    font-size: 0.98rem;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(43, 33, 28, 0.12);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    transition:
      color 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  .fs-product-card__wishlist:hover {
    transform: scale(1.1);
    color: #d1495b;
    border-color: color-mix(in srgb, #d1495b 35%, var(--border-color, #d9e2ec));
  }

  .fs-product-card__wishlist:active {
    transform: scale(0.94);
  }

  .fs-product-card__wishlist.is-active {
    color: #fff;
    border-color: transparent;
    background: linear-gradient(135deg, #d1495b, #b23a4a);
    animation: fs-heart-pop 0.32s ease;
  }

  @keyframes fs-heart-pop {
    0% {
      transform: scale(0.8);
    }
    55% {
      transform: scale(1.18);
    }
    100% {
      transform: scale(1);
    }
  }

  .fs-product-card__check {
    position: absolute;
    top: 0.6rem;
    inset-inline-start: 0.6rem;
    z-index: 3;
    width: 1.65rem;
    height: 1.65rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--accent-color, var(--fs-store-primary));
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    box-shadow: 0 6px 14px rgba(43, 33, 28, 0.22);
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .fs-product-card.is-selected .fs-product-card__check {
    opacity: 1;
    transform: scale(1);
  }

  .fs-product-card__body {
    display: flex;
    flex-direction: column;
    gap: 0.42rem;
    padding: 0.8rem 0.85rem 0.9rem;
    flex: 1 1 auto;
  }

  .fs-product-card__title {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.45;
    color: var(--text-color, #111827);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .fs-product-card__title a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .fs-product-card:hover .fs-product-card__title a {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .fs-product-card__subtitle {
    margin: 0;
    font-size: 0.76rem;
    color: var(--muted-color, #64748b);
    line-height: 1.45;
  }

  .fs-product-card__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.35rem 0.6rem;
    margin-top: auto;
    padding-top: 0.15rem;
  }

  .fs-product-card__price {
    display: inline-flex;
    align-items: baseline;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .fs-product-card__price-now {
    font-size: 1rem;
    font-weight: 700;
    color: #991b1b;
    letter-spacing: -0.01em;
  }

  .fs-product-card__price-old {
    font-size: 0.76rem;
    font-weight: 500;
    color: var(--muted-color, #64748b);
    text-decoration: line-through;
  }

  .fs-product-card__rating {
    display: inline-flex;
    align-items: center;
    gap: 0.22rem;
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
    background: color-mix(in srgb, #f4a940 16%, var(--card-bg, #fff));
    font-size: 0.76rem;
    font-weight: 700;
    color: var(--text-color, #111827);
  }

  .fs-product-card__rating .sicon-star2 {
    color: #f4a940;
  }

  .fs-product-card__add {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.25rem;
    padding: 0.5rem 1.25rem 0.625rem;
    border-radius: 0.375rem;
    border: 1px solid var(--color-primary, var(--accent-color, var(--fs-store-primary)));
    background: var(--color-primary, var(--accent-color, var(--fs-store-primary)));
    color: var(--color-primary-reverse, #fff);
    font-size: 0.875rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 300ms;
  }

  .fs-product-card__add:hover {
    opacity: 0.8;
  }

  .fs-product-card__add:active {
    opacity: 0.9;
  }

  .fs-product-card__link {
    margin-top: 0.2rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .fs-product-card__link:hover {
    text-decoration: underline;
  }

  /* —— Merchant commercial outcome (real Salla products slider) —— */
  .fs-commerce {
    margin-top: clamp(1.5rem, 4vw, 3rem);
    padding-top: clamp(1.25rem, 3vw, 2rem);
    border-top: 1px solid var(--border-color, #e8ddd6);
    display: grid;
    gap: 1rem;
  }

  .fs-commerce__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin: 0;
  }

  .fs-commerce__title,
  .fs-commerce__head h3 {
    margin: 0;
    color: var(--text-color, #2b211c);
    font-size: 1.1rem;
    font-weight: 800;
    text-align: start;
    line-height: 1.35;
  }

  .fs-commerce__view-all {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-height: 40px;
    padding: 0.4rem 0.8rem;
    border: 1px solid color-mix(
      in srgb,
      var(--accent-color, var(--fs-store-primary)) 35%,
      var(--border-color, #d9e2ec)
    );
    border-radius: 999px;
    color: var(--accent-color, var(--fs-store-primary));
    background: var(--card-bg, #fff);
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    transition: color 180ms ease, background-color 180ms ease,
      border-color 180ms ease;
  }

  .fs-commerce__view-all:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--button-color, #fff);
    background: var(--accent-color, var(--fs-store-primary));
  }

  .fs-commerce__view-all-arrow {
    font-size: 1rem;
    transition: transform 180ms ease;
  }

  .fs-commerce__view-all:hover .fs-commerce__view-all-arrow {
    transform: translateX(-2px);
  }

  :host-context([dir='ltr']) .fs-commerce__view-all-arrow,
  :host([dir='ltr']) .fs-commerce__view-all-arrow {
    transform: rotate(180deg);
  }

  @media (max-width: 479px) {
    .fs-commerce__head {
      align-items: flex-start;
    }

    .fs-commerce__view-all {
      min-height: 38px;
      padding-inline: 0.7rem;
      font-size: 0.78rem;
    }
  }

  .fs-commerce__head p {
    margin: 0.35rem 0 0;
    color: var(--muted-color, #7a6a62);
    font-size: 0.9rem;
    text-align: center;
  }

  .fs-commerce__slider {
    min-width: 0;
    width: 100%;
  }

  .fs-commerce__slider salla-products-slider {
    display: block;
    width: 100%;
    margin-bottom: 0 !important;
  }

  .fs-commerce__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.65rem;
  }

  .fs-commerce__cta {
    min-width: min(100%, 16rem);
  }

  .fs-commerce__hint {
    margin: 0;
    text-align: center;
    color: var(--muted-color, #7a6a62);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .fs-commerce__slider[data-hide-add='1'] .s-product-card-content-footer,
  .fs-commerce__slider[data-hide-add='1'] .s-add-product-button,
  .fs-commerce__slider[data-hide-add='1'] salla-add-product-button {
    display: none !important;
  }

  /* —— Salla product cards (Theme Raed look) —— */
  .fs-commerce__slider .s-slider-block__title {
    display: none;
  }

  .fs-commerce__slider .swiper,
  .fs-commerce__slider .s-slider-container {
    overflow: hidden;
    padding: 0.35rem 0.2rem 1.1rem;
  }

  .fs-commerce__slider .swiper-wrapper {
    align-items: stretch;
  }

  .fs-commerce__slider .swiper-slide,
  .fs-commerce__slider .s-products-slider-card {
    height: auto;
    /* Swiper sets slide width — forcing it breaks drag/translate */
    box-sizing: border-box;
  }

  .fs-commerce__slider salla-product-card,
  .fs-commerce__slider .s-product-card-entry {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: start;
    color: #1f2937;
    background: #fff;
    border: 0;
    border-radius: 15px;
    box-shadow: none;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fs-commerce__slider .s-product-card-vertical {
    flex-direction: column;
  }

  .fs-commerce__slider--shadow .s-product-card-entry:hover,
  .fs-commerce__slider--shadow .s-product-card-shadow:hover {
    box-shadow: 5px 10px 30px rgba(43, 45, 52, 0.051);
  }

  .fs-commerce__slider .s-product-card-image {
    position: relative;
    display: block;
    flex: 1 1 0%;
    overflow: hidden;
    width: 100%;
    min-height: 11rem;
    max-height: 15rem;
    aspect-ratio: 1 / 1;
    background: #f3f4f6;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .fs-commerce__slider .s-product-card-image::before,
  .fs-commerce__slider .s-product-card-image a::before {
    content: none !important;
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  .fs-commerce__slider .s-product-card-image:hover {
    opacity: 1;
  }

  .fs-commerce__slider .s-product-card-image a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .fs-commerce__slider .s-product-card-image img,
  .fs-commerce__slider .s-product-card-image-cover,
  .fs-commerce__slider .s-product-card-image-contain {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fs-commerce__slider .s-product-card-image-contain {
    object-fit: contain;
  }

  .fs-commerce__slider .s-product-card-wishlist-btn {
    position: absolute;
    top: 0.5rem;
    inset-inline-end: 0.5rem;
    z-index: 2;
    opacity: 0.75;
  }

  .fs-commerce__slider .s-product-card-wishlist-btn:hover {
    opacity: 1;
  }

  .fs-commerce__slider .s-product-card-wishlist-btn button,
  .fs-commerce__slider .s-product-card-wishlist-btn .s-button-element {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 999px !important;
    background: #fff !important;
    box-shadow: none;
    cursor: pointer;
  }

  .fs-commerce__slider .s-product-card-wishlist-btn svg {
    width: 1rem;
    height: 1rem;
    fill: #6b7280;
  }

  .fs-commerce__slider .s-product-card-wishlist-btn button:hover svg {
    fill: #4b5563;
  }

  .fs-commerce__slider .s-product-card-wishlist-added svg,
  .fs-commerce__slider .s-product-card-wishlist-added i {
    fill: #ef4444;
    color: #ef4444;
  }

  .fs-commerce__slider .s-product-card-promotion-title {
    position: absolute;
    top: 1rem;
    left: 0;
    z-index: 2;
    max-width: calc(100% - 60px);
    padding: 0.375rem 0.625rem;
    border-radius: 0 15px 15px 0;
    background: #991b1b;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([dir='rtl']) .fs-commerce__slider .s-product-card-promotion-title,
  [dir='rtl'] .fs-commerce__slider .s-product-card-promotion-title {
    right: 0;
    left: auto;
    border-radius: 15px 0 0 15px;
  }

  .fs-commerce__slider .s-product-card-quantity {
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    z-index: 2;
    max-width: calc(100% - 60px);
    transform: translateX(-50%);
    padding: 0.375rem 0.625rem;
    border-radius: 15px;
    background: #f87171;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
  }

  .fs-commerce__slider .s-product-card-out-badge {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    z-index: 2;
    max-width: calc(100% - 60px);
    transform: translateX(-50%);
    padding: 0.375rem 0.625rem;
    border-radius: 0.375rem;
    background: #f3f4f6;
    color: #999;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
  }

  .fs-commerce__slider .s-product-card-out-of-stock img {
    filter: grayscale(100%);
  }

  .fs-commerce__slider .s-product-card-content {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 0.75rem;
    min-width: 0;
  }

  @media (min-width: 640px) {
    .fs-commerce__slider .s-product-card-content {
      padding: 1.25rem;
    }
  }

  .fs-commerce__slider .s-product-card-content-title {
    margin: 0 0 0.625rem;
    max-width: 100%;
    line-height: 1.5rem;
    word-break: break-word;
  }

  .fs-commerce__slider .s-product-card-content-title a {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #1f2937;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-decoration: none;
  }

  .fs-commerce__slider .s-product-card-content-title a:hover {
    color: var(--color-primary, var(--accent-color, var(--fs-store-primary)));
  }

  .fs-commerce__slider .s-product-card-content-subtitle {
    margin: 0 0 0.625rem;
    color: #4b5563;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  .fs-commerce__slider .s-product-card-content-sub {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .fs-commerce__slider .s-product-card-content-footer {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 0.65rem;
    margin-top: auto;
  }

  .fs-commerce__slider .s-product-card-price {
    margin: 0;
    color: #1f2937;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
  }

  .fs-commerce__slider .s-product-card-sale-price {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.25rem;
  }

  .fs-commerce__slider .s-product-card-sale-price h4 {
    margin: 0;
    display: inline-block;
    color: #991b1b !important;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
  }

  .fs-commerce__slider .s-product-card-sale-price span {
    color: #9ca3af;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: line-through;
  }

  .fs-commerce__slider .s-product-card-starting-price {
    display: flex;
    width: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;
  }

  .fs-commerce__slider .s-product-card-starting-price h4 {
    margin: 0;
    display: inline-block;
    color: #991b1b;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
  }

  .fs-commerce__slider .s-product-card-starting-price p {
    margin: 0;
    color: #6b7280;
    font-size: 0.75rem;
  }

  .fs-commerce__slider .s-product-card-rating {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: #9ca3af;
    font-size: 0.875rem;
  }

  .fs-commerce__slider .s-product-card-rating span svg {
    width: 1rem;
    height: 1rem;
    margin-bottom: 3px;
    fill: #fbbf24;
  }

  .fs-commerce__slider .s-add-product-button,
  .fs-commerce__slider .s-add-product-button-main {
    display: block;
    width: 100%;
    margin-top: 0;
  }

  .fs-commerce__slider .s-add-product-button .s-button-btn,
  .fs-commerce__slider .s-add-product-button-main .s-button-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    width: 100%;
    min-height: 2.55rem;
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    border: 1px solid var(--color-primary, var(--accent-color, var(--fs-store-primary)));
    background: var(--color-primary, var(--accent-color, var(--fs-store-primary)));
    color: var(--color-primary-reverse, #fff);
    font-size: 0.8125rem;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 0 8px 18px color-mix(in srgb, var(--color-primary, #21636d) 22%, transparent);
    transition: transform 180ms ease, opacity 180ms ease;
  }

  .fs-commerce__slider .s-add-product-button .s-button-btn:hover,
  .fs-commerce__slider .s-add-product-button-main .s-button-btn:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    .fs-commerce__slider .s-product-card-entry,
    .fs-commerce__slider .s-product-card-image img {
      transition: none;
    }
  }

  /* —— Tablet —— */
  @media (max-width: 959px) {
    .fs-header,
    .fs-hero {
      margin-bottom: 1.25rem;
    }

    .fs-title {
      font-size: clamp(1.3rem, 4vw, 1.75rem);
      line-height: 1.3;
    }

    .fs-desc {
      font-size: 0.92rem;
      line-height: 1.65;
    }

    
    .fs-actions .fs-btn {
      width: 100%;
    }
  }

  /* —— Phone —— */
  @media (max-width: 639px) {
    .fs-section {
      padding: var(--space-mobile, 22px) 0
        var(--space-mobile-bottom, var(--space-mobile, 22px));
    }

    .fs-container {
      padding: 0 var(--section-container-pad-sm, 12px);
    }

    .fs-header,
    .fs-hero {
      margin-bottom: 1rem;
      padding: 0.95rem 1rem 1.05rem;
    }

    .fs-title {
      font-size: clamp(1.2rem, 6.2vw, 1.55rem);
      line-height: 1.28;
    }

    .fs-desc {
      font-size: 0.88rem;
      line-height: 1.6;
    }

    .fs-empty {
      padding: 1.35rem 0.85rem;
      font-size: 0.88rem;
    }

    /* Keep primary buttons consistent on phone */
    .fs-btn {
      min-height: 44px;
      padding: 0.65rem 1.2rem;
      font-size: 0.9rem;
    }

    .fs-btn:hover {
      box-shadow: 0 6px 14px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 26%, transparent);
    }

    .fs-tap {
      min-height: 44px;
      min-width: 44px;
    }

    
    /*
     * Shrink choice chips / options / toggles across all beauty tools.
     * !important beats per-component min-heights (styles load after shared).
     * Excludes icon-only nav handles and visual sample pickers.
     */
    button[class*='option'],
    button[class*='segment'],
    button[class*='toggle'],
    button[class*='answer'],
    button[class*='finish'],
    button[role='tab'],
    button.bch-color,
    button.bch-type,
    button.bta-play__cta,
    button.bil-segment__btn,
    button.brl-step__toggle,
    button.bcr-cover__btn,
    a.fs-btn {
      min-height: 44px !important;
      padding-top: 0.35rem !important;
      padding-bottom: 0.35rem !important;
      font-size: 0.82rem !important;
    }

    /* Form controls that read as large tap targets */
    input.bpa-input,
    select.bpa-select,
    .bpa-input,
    .bpa-select {
      min-height: 38px !important;
      padding: 0.45rem 0.7rem !important;
      font-size: 0.88rem !important;
    }

    /* Multi-line option cards stay readable but smaller */
    button.bch-type,
    button.bsg-option:not([class*='compact']) {
      min-height: 46px !important;
      padding: 0.5rem 0.75rem !important;
      font-size: 0.84rem !important;
    }

    /* Pill-chip icons only — exclude card chips (spa-chip, ffm-chip, …) */
    button.bsf-chip [class*='swatch'],
    button.bsf-chip [class*='icon'],
    button.bff-chip [class*='swatch'],
    button.bff-chip [class*='icon'],
    button.bac-chip [class*='swatch'],
    button.bac-chip [class*='icon'] {
      width: 1.65rem !important;
      height: 1.65rem !important;
      font-size: 0.8rem !important;
    }

    button.bca-answer [class*='icon'],
    button.bca-answer img {
      width: 1.75rem !important;
      height: 1.75rem !important;
    }

    .fs-product-card__body {
      padding: 0.65rem 0.65rem 0.75rem;
      gap: 0.35rem;
    }

    .fs-product-card__title {
      font-size: 0.86rem;
    }

    .fs-product-card__price-now {
      font-size: 0.92rem;
    }

    .fs-product-card__wishlist {
      width: 1.95rem;
      height: 1.95rem;
      font-size: 0.9rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fs-btn,
    .fs-meter > span,
    * {
      scroll-behavior: auto !important;
    }

    .fs-pulse,
    .fs-fade,
    .fs-curtain,
    .fs-celebrate,
    .fs-product-card,
    .fs-product-card__img,
    .fs-product-card__media::after,
    .fs-product-card__wishlist,
    .fs-product-card__check,
    .fs-product-card__add {
      transition: none !important;
      animation: none !important;
    }

    .fs-product-card:hover {
      transform: none;
    }

    .fs-product-card:hover .fs-product-card__img {
      transform: none;
    }
  }
`;
function normalizeArgs(optionsOrConfig, legacyPrefix, legacyOptions) {
  if (optionsOrConfig && typeof optionsOrConfig == "object" && "config" in optionsOrConfig && "prefix" in optionsOrConfig) {
    const o = optionsOrConfig;
    return {
      ...o,
      config: o.config || {},
      prefix: o.prefix || ""
    };
  }
  return {
    ...legacyOptions && !Array.isArray(legacyOptions) ? legacyOptions : {},
    config: optionsOrConfig || {},
    prefix: legacyPrefix
  };
}
__name(normalizeArgs, "normalizeArgs");
function renderCommerceCtaButton(config, prefix, options = {}) {
  const ctaLink = (options.href || "").trim() || extractLink(config[`${prefix}result_link`] ?? config[`${prefix}cta_link`]) || "/", ctaLabel = localizedString(config[`${prefix}cta_label`], "").trim() || t("تسوق الآن", "Shop now"), className = ["fs-btn", "fs-tap", options.className || ""].filter(Boolean).join(" ");
  return html`<a
    class=${className}
    href=${ctaLink}
    target=${isExternalUrl(ctaLink) ? "_blank" : nothing}
    rel=${isExternalUrl(ctaLink) ? "noopener noreferrer" : nothing}
  >
    ${ctaLabel}
  </a>`;
}
__name(renderCommerceCtaButton, "renderCommerceCtaButton");
function renderCommerceOutcome(optionsOrConfig, legacyPrefix, legacyOptions) {
  const opts = normalizeArgs(optionsOrConfig, legacyPrefix, legacyOptions), c = opts.config || {}, prefix = opts.prefix || "";
  if (opts.ready === !1) return nothing;
  const ctaLink = extractLink(
    c[`${prefix}result_link`] ?? c[`${prefix}cta_link`]
  );
  return isTruthy(c[`${prefix}show_cta`], !!ctaLink) && !!ctaLink ? html`
    <aside class="fs-commerce" aria-label=${t("التسوق", "Shopping")}>
      <div class="fs-commerce__actions">
        ${renderCommerceCtaButton(c, prefix, {
    className: opts.className || "fs-commerce__cta",
    href: opts.href
  })}
      </div>
    </aside>
  ` : nothing;
}
__name(renderCommerceOutcome, "renderCommerceOutcome");
function bindSallaRegistration(ctor) {
  ctor.registerSallaComponent = /* @__PURE__ */ __name(function(tagName) {
    const attempt = /* @__PURE__ */ __name(() => {
      var _a, _b;
      const bundles = (_a = window.Salla) == null ? void 0 : _a.bundles;
      if (bundles != null && bundles.registerComponent) {
        if ((_b = bundles.isRegistered) != null && _b.call(bundles, tagName)) return !0;
        const dynamicTagName = `${tagName}-${Math.random().toString(36).slice(2, 8)}`;
        return bundles.registerComponent(tagName, { component: this, dynamicTagName }), !0;
      }
      const host = HTMLElement;
      return typeof host.registerSallaComponent == "function" ? (host.registerSallaComponent.call(this, tagName), !0) : !1;
    }, "attempt");
    if (attempt()) return;
    let ticks = 0;
    const timer = window.setInterval(() => {
      ticks += 1, (attempt() || ticks > 200) && window.clearInterval(timer);
    }, 50);
  }, "registerSallaComponent");
}
__name(bindSallaRegistration, "bindSallaRegistration");
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
