var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { nothing, html } from "lit";
import { e as extractLink, d as isTruthy, t, l as localizedString, i as isExternalUrl } from "./registerSalla-C-gSyj7s.js";
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
    prefix: legacyPrefix || ""
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
export {
  renderCommerceOutcome as r
};
