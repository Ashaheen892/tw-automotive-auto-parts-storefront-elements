import { css } from 'lit';

export const componentStyles = css`
  .tsf-shell {
    width: 100%;
    display: grid;
    gap: 1rem;
  }

  .tsf-card {
    padding: 1.25rem 1.15rem 1.35rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1.05rem;
  }

  .tsf-code {
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background:
      linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #0f172a) 0%,
        #111827 100%
      );
    color: #fff;
    text-align: center;
  }

  .tsf-code__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.75;
  }

  .tsf-code__value {
    margin: 0;
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
  }

  .tsf-field {
    display: grid;
    gap: 0.5rem;
  }

  .tsf-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .tsf-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
    gap: 0.55rem;
  }

  .tsf-type {
    display: grid;
    gap: 0.2rem;
    text-align: start;
    padding: 0.85rem 0.8rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .tsf-type[aria-pressed='true'] {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .tsf-type__name {
    font-size: 0.88rem;
    font-weight: 800;
  }

  .tsf-type__desc {
    font-size: 0.74rem;
    color: var(--muted-color, #64748b);
    line-height: 1.4;
  }

  .tsf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tsf-chip {
    min-width: 3.4rem;
    min-height: 40px;
    padding: 0.4rem 0.65rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
  }

  .tsf-chip.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .tsf-hint {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    text-align: center;
  }
`;
