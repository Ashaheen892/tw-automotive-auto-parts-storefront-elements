var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { css, html, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { l as localizedString, s as sharedSectionCss, r as readSectionTheme, t, a as themeStyleMap, b as bindSallaRegistration } from "./registerSalla-C-gSyj7s.js";
import { b as buildWhatsAppUrl } from "./whatsapp-C3glLfzz.js";
const componentStyles = css`
  .wcb-shell {
    display: grid;
    gap: 1rem;
  }

  .wcb-banner {
    position: relative;
    display: grid;
    gap: 1.1rem;
    justify-items: start;
    padding: clamp(1.35rem, 3vw, 1.9rem) clamp(1.25rem, 3vw, 2rem);
    border-radius: var(--section-radius, 20px);
    overflow: hidden;
    /* Fixed dark surface so light/dark page themes keep readable white text */
    --wcb-panel-bg: #0f172a;
    --wcb-panel-bg-2: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(
        90% 120% at 0% 100%,
        color-mix(in srgb, var(--accent-color, #25d366) 22%, transparent),
        transparent 55%
      ),
      linear-gradient(135deg, var(--wcb-panel-bg) 0%, var(--wcb-panel-bg-2) 100%);
    color: #fff;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);
  }

  :host([data-fs-theme='dark']) .wcb-banner {
    --wcb-panel-bg: #161b22;
    --wcb-panel-bg-2: #0d1117;
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  }

  .wcb-watermark {
    position: absolute;
    inset-inline-start: -1.5rem;
    bottom: -2.2rem;
    width: min(42%, 220px);
    height: auto;
    opacity: 0.14;
    color: #fff;
    pointer-events: none;
    z-index: 0;
  }

  .wcb-copy {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 0.55rem;
    max-width: 42rem;
  }

  .wcb-title {
    margin: 0;
    font-size: clamp(1.2rem, 2.4vw, 1.65rem);
    font-weight: 900;
    line-height: 1.35;
    color: #fff;
  }

  .wcb-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }

  .wcb-actions {
    position: relative;
    z-index: 1;
  }

  .wcb-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border: 1.5px solid transparent;
    border-radius: 999px;
    background: var(--button-bg, #25d366);
    color: var(--button-color, #fff);
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.28);
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
  }

  .wcb-btn svg {
    width: 1.15rem;
    height: 1.15rem;
    flex-shrink: 0;
  }

  .wcb-btn:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  .wcb-btn:disabled,
  .wcb-btn--disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    filter: none;
    pointer-events: none;
  }

  .wcb-hint {
    margin: 0;
    font-size: 0.82rem;
    color: var(--muted-color, #64748b);
  }

  @media (max-width: 639px) {
    .wcb-banner {
      padding: 1.2rem 1.1rem 1.35rem;
    }

    .wcb-watermark {
      width: min(52%, 160px);
      opacity: 0.1;
    }

    .wcb-btn {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wcb-btn {
      transition: none !important;
    }

    .wcb-btn:hover {
      transform: none;
    }
  }
`;
function resolveStorePhone(config) {
  return localizedString(config.wcb_whatsapp_phone) || String(config.wcb_whatsapp_phone ?? "").trim();
}
__name(resolveStorePhone, "resolveStorePhone");
function resolvePrefillMessage(config) {
  return localizedString(config.wcb_message) || localizedString(config.wcb_prefill) || "";
}
__name(resolvePrefillMessage, "resolvePrefillMessage");
function resolveWhatsAppHref(config) {
  const phone = resolveStorePhone(config);
  return phone ? buildWhatsAppUrl(phone, resolvePrefillMessage(config)) : "";
}
__name(resolveWhatsAppHref, "resolveWhatsAppHref");
var __defProp2 = Object.defineProperty, __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  for (var result = void 0, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = decorator(target, key, result) || result);
  return result && __defProp2(target, key, result), result;
}, "__decorateClass");
const waIcon = html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path
    d="M12.04 2c-5.5 0-9.96 4.43-9.96 9.9 0 1.75.46 3.45 1.34 4.95L2 22l5.3-1.38a10 10 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.43 9.96-9.9C22.01 6.43 17.54 2 12.04 2Zm5.8 14.2c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.75 1.23 1.61 2 .1.9 1.95 1.86 2.26 1.99.31.13.49.11.67-.07.18-.17.77-.9.98-1.2.2-.31.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.08.13.08.73-.16 1.41Z"
  />
</svg>`, _WhatsappContactBanner = class _WhatsappContactBanner extends LitElement {
  constructor() {
    super(...arguments), this.config = {}, this.boundLangHandler = () => this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("language-changed", this.boundLangHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("language-changed", this.boundLangHandler), super.disconnectedCallback();
  }
  render() {
    const c = this.config || {}, theme = readSectionTheme(c, "wcb_", {}), title = localizedString(c.wcb_title) || t("لا تعرف أي قطعة تناسب سيارتك؟", "Don't know which part fits your car?"), desc = localizedString(c.wcb_desc) || t(
      "فريقنا الفني جاهز لمساعدتك في اختيار القطعة الصحيحة بناءً على رقم الهيكل (VIN) لضمان التوافق التام.",
      "Our technical team can help you pick the right part using the VIN for full compatibility."
    ), ctaLabel = localizedString(c.wcb_cta_label) || t("تواصل عبر واتساب", "Contact via WhatsApp"), phone = resolveStorePhone(c), href = resolveWhatsAppHref(c);
    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t("تواصل معنا", "Contact us")}
      >
        <div class="fs-container">
          <div class="wcb-shell">
            <div class="wcb-banner">
              <svg class="wcb-watermark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M12.04 2c-5.5 0-9.96 4.43-9.96 9.9 0 1.75.46 3.45 1.34 4.95L2 22l5.3-1.38a10 10 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.43 9.96-9.9C22.01 6.43 17.54 2 12.04 2Zm5.8 14.2c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.75 1.23 1.61 2 .1.9 1.95 1.86 2.26 1.99.31.13.49.11.67-.07.18-.17.77-.9.98-1.2.2-.31.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.22.57.34.08.13.08.73-.16 1.41Z"
                />
              </svg>

              <div class="wcb-copy">
                ${title ? html`<h2 class="wcb-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="wcb-desc">${desc}</p>` : nothing}
              </div>

              <div class="wcb-actions">
                ${href ? html`<a
                      class="wcb-btn"
                      href=${href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${waIcon}
                      <span>${ctaLabel}</span>
                    </a>` : html`<span
                      class=${classMap({ "wcb-btn": !0, "wcb-btn--disabled": !0 })}
                      role="link"
                      aria-disabled="true"
                    >
                      ${waIcon}
                      <span>${ctaLabel}</span>
                    </span>`}
              </div>
            </div>

            ${phone ? nothing : html`<p class="wcb-hint">
                  ${t(
      "أضف رقم واتساب المتجر من إعدادات العنصر.",
      "Add the store WhatsApp number in the component settings."
    )}
                </p>`}
          </div>
        </div>
      </section>
    `;
  }
};
__name(_WhatsappContactBanner, "WhatsappContactBanner"), _WhatsappContactBanner.styles = [sharedSectionCss, componentStyles];
let WhatsappContactBanner = _WhatsappContactBanner;
__decorateClass([
  property({ type: Object })
], WhatsappContactBanner.prototype, "config");
bindSallaRegistration(
  WhatsappContactBanner
);
typeof WhatsappContactBanner < "u" && WhatsappContactBanner.registerSallaComponent("salla-whatsapp-contact-banner");
export {
  WhatsappContactBanner as default
};
