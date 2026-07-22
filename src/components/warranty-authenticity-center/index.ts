import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  isExternalUrl,
  readSectionTheme,
  t,
  themeStyleMap
} from '../../utils/helpers.js';
import { localizedString } from '../../utils/localizedString.js';
import { sharedSectionCss } from '../../utils/sharedStyles.js';
import { renderCommerceOutcome } from '../../utils/commerceOutcome.js';
import { componentStyles } from './styles.js';
import { parseItems, resolveLayout } from './utils.js';
import type { TrustItem } from './types.js';
import { bindSallaRegistration } from '../../utils/registerSalla.js';

export default class WarrantyAuthenticityCenter extends LitElement {

  @property({ type: Object })
  config: Record<string, unknown> = {};

  @state() private activeId = '';
  @state() private openAccordion = new Set<string>();

  private boundLangHandler = () => this.requestUpdate();

  static styles = [sharedSectionCss, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('language-changed', this.boundLangHandler);
  }

  disconnectedCallback(): void {
    window.removeEventListener('language-changed', this.boundLangHandler);
    super.disconnectedCallback();
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('config')) {
      const items = parseItems(this.config?.wac_items);
      if (!items.some((item) => item.id === this.activeId)) {
        this.activeId = items[0]?.id ?? '';
      }
      if (!this.openAccordion.size && items.length) {
        this.openAccordion = new Set([items[0].id]);
      }
    }
  }

  private get items(): TrustItem[] {
    return parseItems(this.config?.wac_items);
  }

  private get active(): TrustItem | null {
    return this.items.find((item) => item.id === this.activeId) ?? this.items[0] ?? null;
  }

  private renderItemLink(item: TrustItem) {
    if (!item.link) return nothing;
    const label = item.linkLabel || t('المزيد', 'Learn more');
    return html`
      <a
        class="wac-panel__link"
        href=${item.link}
        target="_blank"
        rel=${isExternalUrl(item.link) ? 'noopener noreferrer' : nothing}
      >
        ${label}
      </a>
    `;
  }

  private renderItemImage(item: TrustItem) {
    if (!item.image) return nothing;
    return html`
      <figure class="wac-panel__media">
        <img src=${item.image} alt=${item.title} loading="lazy" />
      </figure>
    `;
  }

  private renderItemBody(item: TrustItem) {
    return html`
      ${this.renderItemImage(item)}
      ${item.body ? html`<p class="wac-panel__body">${item.body}</p>` : nothing}
      ${this.renderItemLink(item)}
    `;
  }

  private renderItemHead(item: TrustItem) {
    return html`
      <div class="wac-panel__head">
        ${item.icon
          ? html`<span class="wac-panel__icon ${item.icon.startsWith('sicon-') ? item.icon : ''}" aria-hidden="true">
              ${item.icon.startsWith('sicon-') ? '' : item.icon}
            </span>`
          : nothing}
        <h3 class="wac-panel__title">${item.title}</h3>
      </div>
    `;
  }

  private onTabsKeydown(e: KeyboardEvent): void {
    const items = this.items;
    if (items.length < 2) return;
    const delta =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 :
      e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const current = items.findIndex((item) => item.id === this.active?.id);
    const next = (current + delta + items.length) % items.length;
    this.activeId = items[next].id;
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLButtonElement>('.wac-tab.is-active')?.focus();
    });
  }

  private renderTabs(items: TrustItem[]) {
    const active = this.active;
    return html`
      <div class="wac-tabs" role="tablist" @keydown=${(e: KeyboardEvent) => this.onTabsKeydown(e)}>
        ${items.map(
          (item) => html`
            <button
              type="button"
              class=${classMap({ 'wac-tab': true, 'is-active': item.id === active?.id })}
              role="tab"
              aria-selected=${item.id === active?.id ? 'true' : 'false'}
              tabindex=${item.id === active?.id ? '0' : '-1'}
              @click=${() => (this.activeId = item.id)}
            >
              ${item.icon && !item.icon.startsWith('sicon-')
                ? html`<span class="wac-tab__icon" aria-hidden="true">${item.icon}</span>`
                : nothing}
              <span>${item.title}</span>
            </button>
          `
        )}
      </div>
      ${active
        ? html`<div class="wac-panel" role="tabpanel">
            ${this.renderItemHead(active)}
            ${this.renderItemBody(active)}
          </div>`
        : nothing}
    `;
  }

  private toggleAccordion(id: string): void {
    const next = new Set(this.openAccordion);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.openAccordion = next;
  }

  private renderAccordion(items: TrustItem[]) {
    return html`
      <div class="wac-accordion">
        ${items.map((item) => {
          const open = this.openAccordion.has(item.id);
          return html`
            <div class=${classMap({ 'wac-acc': true, 'is-open': open })}>
              <button
                type="button"
                class="wac-acc__trigger"
                aria-expanded=${open ? 'true' : 'false'}
                @click=${() => this.toggleAccordion(item.id)}
              >
                ${item.icon && !item.icon.startsWith('sicon-')
                  ? html`<span class="wac-acc__icon" aria-hidden="true">${item.icon}</span>`
                  : nothing}
                <span class="wac-acc__title">${item.title}</span>
                <span class="wac-acc__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              ${open ? html`<div class="wac-acc__content">${this.renderItemBody(item)}</div>` : nothing}
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderCards(items: TrustItem[]) {
    return html`
      <div class="wac-cards">
        ${items.map(
          (item) => html`
            <article class="wac-card">
              ${this.renderItemHead(item)}
              ${this.renderItemBody(item)}
            </article>
          `
        )}
      </div>
    `;
  }

  render() {
    const c = this.config || {};
    const theme = readSectionTheme(c, 'wac_');
    const items = this.items;
    const layout = resolveLayout(c.wac_layout);
    const title = localizedString(c.wac_title as string);
    const desc = localizedString(c.wac_desc as string);

    if (!items.length) {
      return html`<div class="fs-empty" role="status">
        ${t('أضف عناصر مركز الثقة من الإعدادات', 'Add trust center items in settings')}
      </div>`;
    }

    return html`
      <section
        class="fs-section"
        style=${styleMap(themeStyleMap(theme))}
        aria-label=${title || t('مركز الضمان والأصالة', 'Warranty & authenticity center')}
      >
        <div class="fs-container">
          ${title || desc
            ? html`<div class="fs-hero">
                <p class="fs-eyebrow">${t('اشترِ بثقة', 'Buy with confidence')}</p>
                ${title ? html`<h2 class="fs-title">${title}</h2>` : nothing}
                ${desc ? html`<p class="fs-desc">${desc}</p>` : nothing}
              </div>`
            : nothing}

          ${layout === 'tabs' ? this.renderTabs(items) : nothing}
          ${layout === 'accordion' ? this.renderAccordion(items) : nothing}
          ${layout === 'cards' ? this.renderCards(items) : nothing}

          ${renderCommerceOutcome(c, 'wac_', { ready: items.length > 0 })}
        </div>
      </section>
    `;
  }
}
bindSallaRegistration(WarrantyAuthenticityCenter as unknown as CustomElementConstructor & { registerSallaComponent?: (tagName: string) => void });
