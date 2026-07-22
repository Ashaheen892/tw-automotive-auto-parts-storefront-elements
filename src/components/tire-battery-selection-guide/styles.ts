import { css } from 'lit';

export const componentStyles = css`
  .tbsg-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .tbsg-tab {
    min-height: 44px;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 700;
    font-size: 0.86rem;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .tbsg-tab.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 24%, transparent);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tbsg-select-wrap {
    display: grid;
    gap: 0.35rem;
    max-width: 280px;
    margin: 0 auto 1rem;
  }

  .tbsg-select-wrap label {
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-select {
    min-height: 44px;
    padding: 0.55rem 0.75rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 12px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
  }

  .tbsg-panel {
    padding: 1.1rem 1rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 10px 28px rgba(30, 41, 59, 0.07);
  }

  .tbsg-panel + .tbsg-panel {
    margin-top: 1rem;
  }

  .tbsg-panel__title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-example {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.45rem 0.75rem;
    margin-bottom: 0.85rem;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-weight: 800;
    font-size: 1rem;
    color: var(--accent-color, var(--fs-store-primary));
    letter-spacing: 0.04em;
  }

  .tbsg-grid {
    display: grid;
    gap: 0.65rem;
  }

  @media (min-width: 640px) {
    .tbsg-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .tbsg-item {
    padding: 0.75rem 0.8rem;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, transparent);
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 12%, var(--card-bg, #fff));
  }

  .tbsg-item__label {
    margin: 0 0 0.25rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tbsg-item__value {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tbsg-item__note {
    margin: 0.35rem 0 0;
    font-size: 0.82rem;
    line-height: 1.55;
    color: var(--muted-color, #64748b);
  }

  .tbsg-notes {
    margin: 0.85rem 0 0;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (prefers-reduced-motion: reduce) {
    .tbsg-tab {
      transition: none !important;
    }
  }
`;
