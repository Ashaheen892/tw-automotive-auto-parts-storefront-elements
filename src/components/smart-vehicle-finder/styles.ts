import { css } from 'lit';

export const componentStyles = css`
  .svf-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }

  .svf-card {
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .svf-field {
    display: grid;
    gap: 0.5rem;
  }

  .svf-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .svf-input,
  .svf-textarea {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.92rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
  }

  .svf-textarea {
    min-height: 96px;
    resize: vertical;
    line-height: 1.5;
  }

  .svf-input:focus,
  .svf-textarea:focus {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
    outline: none;
  }

  /* ── Company tabs ── */
  .svf-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
  }

  .svf-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    min-width: 6.2rem;
    min-height: 92px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
  }

  .svf-brand:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
  }

  .svf-brand[aria-selected='true'] {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .svf-brand__img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    display: block;
  }

  .svf-brand__icon {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
    font-size: 1.1rem;
    font-weight: 800;
  }

  .svf-brand__name {
    font-size: 0.78rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
  }

  .svf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.15rem;
  }

  .svf-hint {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    line-height: 1.55;
    text-align: center;
  }

  .svf-field-hint {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted-color, #64748b);
    line-height: 1.45;
  }

  /* ── WhatsApp panel ── */
  .svf-wa {
    display: grid;
    gap: 0.85rem;
    padding: 1.1rem 1.05rem;
    border-radius: var(--section-radius, 20px);
    background: color-mix(in srgb, #25d366 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, #25d366 28%, var(--border-color, #d9e2ec));
  }

  .svf-wa__head {
    display: grid;
    gap: 0.25rem;
  }

  .svf-wa__title {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .svf-wa__desc {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
    line-height: 1.5;
  }

  .svf-wa__form {
    display: grid;
    gap: 0.7rem;
  }

  .svf-wa__row {
    display: grid;
    gap: 0.7rem;
  }

  @media (min-width: 640px) {
    .svf-wa__row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .svf-btn-wa {
    background: #25d366 !important;
    color: #fff !important;
    border-color: #1ebe57 !important;
  }

  .svf-btn-wa:hover {
    filter: brightness(0.96);
  }

  @media (max-width: 639px) {
    .svf-tabs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(4.8rem, 1fr));
    }

    .svf-brand {
      min-width: 0;
      padding: 0.7rem 0.45rem;
    }
  }
`;
