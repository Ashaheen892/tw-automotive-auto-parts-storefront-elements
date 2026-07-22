import { css } from 'lit';

export const componentStyles = css`
  .wac-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.45rem;
    margin-bottom: 1rem;
  }

  .wac-tab {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 44px;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  }

  .wac-tab:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
  }

  .wac-tab:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .wac-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .wac-tab__icon {
    font-size: 1rem;
    line-height: 1;
  }

  .wac-panel {
    display: grid;
    gap: 0.85rem;
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .wac-panel__head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .wac-panel__icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1.15rem;
    flex: 0 0 auto;
  }

  .wac-panel__title {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .wac-panel__media {
    margin: 0;
    border-radius: calc(var(--section-radius, 20px) * 0.6);
    overflow: hidden;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
  }

  .wac-panel__media img {
    display: block;
    width: 100%;
    max-height: 320px;
    object-fit: cover;
  }

  .wac-panel__body {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.7;
    color: var(--text-color, #111827);
    white-space: pre-wrap;
  }

  .wac-panel__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    width: fit-content;
    min-height: 40px;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .wac-panel__link:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
  }

  .wac-accordion {
    display: grid;
    gap: 0.55rem;
  }

  .wac-acc {
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    background: var(--card-bg, #fff);
    overflow: hidden;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .wac-acc.is-open {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  }

  .wac-acc__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 52px;
    padding: 0.8rem 0.95rem;
    border: 0;
    background: transparent;
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 800;
    text-align: start;
    cursor: pointer;
  }

  .wac-acc__trigger:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: -3px;
  }

  .wac-acc__icon {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1rem;
    flex: 0 0 auto;
  }

  .wac-acc__title {
    flex: 1 1 auto;
    min-width: 0;
  }

  .wac-acc__chevron {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    flex: 0 0 auto;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .wac-acc.is-open .wac-acc__chevron {
    transform: rotate(180deg);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .wac-acc__content {
    display: grid;
    gap: 0.75rem;
    padding: 0 0.95rem 1rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .wac-cards {
    display: grid;
    gap: 0.85rem;
  }

  @media (min-width: 640px) {
    .wac-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .wac-cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .wac-card {
    display: grid;
    gap: 0.7rem;
    align-content: start;
    padding: 1.05rem 1rem 1.15rem;
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .wac-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.09);
  }

  .wac-card .wac-panel__title {
    font-size: 0.95rem;
  }

  .wac-card .wac-panel__body {
    font-size: 0.86rem;
  }

  .wac-card .wac-panel__media img {
    max-height: 180px;
  }

  @media (prefers-reduced-motion: reduce) {
    .wac-tab,
    .wac-acc,
    .wac-acc__chevron,
    .wac-card {
      transition: none !important;
    }

    .wac-card:hover {
      transform: none;
    }
  }
`;
