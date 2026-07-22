import { css } from 'lit';

export const componentStyles = css`
  .dcg-shell {
    display: grid;
    gap: 1.25rem;
  }

  /* —— Tabs —— */
  .dcg-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .dcg-tab {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 42px;
    padding: 0.45rem 0.95rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;
  }

  .dcg-tab__icon {
    font-size: 1rem;
    line-height: 1;
  }

  .dcg-tab:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .dcg-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    box-shadow: 0 8px 20px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
  }

  /* —— Condition cards —— */
  .dcg-cards {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  }

  .dcg-card {
    display: grid;
    gap: 0.45rem;
    align-content: start;
    min-height: 118px;
    padding: 1rem 0.95rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    background:
      linear-gradient(
        165deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 5%, #fff),
        var(--card-bg, #fff) 42%
      );
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.15s ease;
  }

  .dcg-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
  }

  .dcg-card.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow:
      0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent),
      0 12px 28px rgba(30, 41, 59, 0.1);
  }

  .dcg-card__icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    font-size: 1.15rem;
    line-height: 1;
  }

  .dcg-card.is-active .dcg-card__icon {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .dcg-card__name {
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .dcg-card__hint {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--muted-color, #64748b);
  }

  /* —— Detail panel: image left · text right —— */
  .dcg-panel {
    display: grid;
    border-radius: var(--section-radius, 22px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 16px 40px rgba(30, 41, 59, 0.09);
    overflow: hidden;
  }

  .dcg-panel--split {
    direction: ltr;
  }

  @media (min-width: 900px) {
    .dcg-panel--split {
      grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
      align-items: stretch;
    }
  }

  .dcg-panel__visual {
    position: relative;
    min-height: 220px;
    background:
      radial-gradient(
        120% 90% at 10% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent),
        transparent 55%
      ),
      linear-gradient(160deg, #1e293b, #0f172a);
  }

  .dcg-panel__visual img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    max-height: 100%;
    object-fit: cover;
  }

  .dcg-panel__visual-fallback {
    min-height: 220px;
    height: 100%;
    display: grid;
    place-items: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 3rem;
  }

  .dcg-panel__overlay {
    position: absolute;
    inset-inline-start: 1rem;
    bottom: 1rem;
  }

  .dcg-panel__count {
    display: inline-flex;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.72);
    color: #fff;
    font-size: 0.74rem;
    font-weight: 800;
    backdrop-filter: blur(6px);
  }

  .dcg-panel__copy {
    display: grid;
    align-content: start;
    gap: 0.9rem;
    padding: 1.3rem 1.35rem 1.45rem;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .dcg-panel__copy,
  :host-context([lang='en']) .dcg-panel__copy {
    direction: ltr;
  }

  .dcg-panel__head {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .dcg-panel__icon {
    flex: 0 0 auto;
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    font-size: 1.25rem;
  }


  .dcg-panel__title {
    margin: 0;
    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .dcg-panel__desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: color-mix(in srgb, var(--text-color, #111827) 82%, var(--muted-color, #64748b));
  }

  .dcg-panel__grid {
    display: grid;
    gap: 0.7rem;
  }

  @media (min-width: 640px) {
    .dcg-panel__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .dcg-advice {
    display: grid;
    gap: 0.45rem;
    padding: 0.85rem 0.9rem;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 90%, transparent);
    background: #f8fafc;
  }

  .dcg-advice--checks {
    background: color-mix(in srgb, #0ea5e9 7%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #0ea5e9 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--parts {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, #fff);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--maint {
    background: color-mix(in srgb, #10b981 7%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #10b981 18%, var(--border-color, #d9e2ec));
  }

  .dcg-advice--prep {
    background: color-mix(in srgb, #f59e0b 8%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    border-color: color-mix(in srgb, #f59e0b 20%, var(--border-color, #d9e2ec));
  }

  .dcg-advice__label {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .dcg-advice__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.3rem;
  }

  .dcg-advice__list li {
    position: relative;
    padding-inline-start: 1rem;
    font-size: 0.84rem;
    line-height: 1.5;
    color: color-mix(in srgb, var(--text-color, #111827) 90%, var(--muted-color, #64748b));
  }

  .dcg-advice__list li::before {
    content: '';
    position: absolute;
    inset-inline-start: 0;
    top: 0.55em;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .dcg-advice--checks .dcg-advice__list li::before {
    background: #0284c7;
  }

  .dcg-advice--maint .dcg-advice__list li::before {
    background: #059669;
  }

  .dcg-advice--prep .dcg-advice__list li::before {
    background: #d97706;
  }

  .dcg-panel__cta {
    justify-self: start;
    margin-top: 0.15rem;
  }

  @media (max-width: 899px) {
    .dcg-panel__visual img,
    .dcg-panel__visual-fallback {
      max-height: 220px;
      min-height: 180px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dcg-card,
    .dcg-tab {
      transition: none !important;
    }
  }
`;
