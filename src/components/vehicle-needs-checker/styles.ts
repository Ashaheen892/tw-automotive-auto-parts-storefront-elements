import { css } from 'lit';

export const componentStyles = css`
  .vnc-shell {
    width: 100%;
  }

  .vnc-progress {
    margin-bottom: 1.25rem;
  }

  .vnc-step {
    padding: 1.35rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 30px rgba(30, 41, 59, 0.06);
  }

  .vnc-step__meta {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--accent-color, var(--fs-store-primary));
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .vnc-step__question {
    margin: 0 0 1rem;
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.45;
    color: var(--text-color, #111827);
  }

  .vnc-options {
    display: grid;
    gap: 0.55rem;
  }

  .vnc-option {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.65);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-weight: 600;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
  }

  .vnc-option:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .vnc-option.is-selected {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
  }

  .vnc-option__dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid var(--border-color, #d9e2ec);
    flex-shrink: 0;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .vnc-option.is-selected .vnc-option__dot {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--accent-color, var(--fs-store-primary));
    box-shadow: inset 0 0 0 2px var(--card-bg, #fff);
  }

  .vnc-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: space-between;
    margin-top: 1.15rem;
  }

  .vnc-result {
    text-align: center;
    padding: 1.5rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 12px 36px rgba(30, 41, 59, 0.08);
  }

  .vnc-result__icon {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.65rem;
  }

  .vnc-result__title {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vnc-result__desc {
    margin: 0 0 1rem;
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--muted-color, #64748b);
  }

  .vnc-result__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: center;
  }
`;
