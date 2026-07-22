import { css } from 'lit';

export const componentStyles = css`
  .wpr-card {
    width: 100%;
    display: grid;
    gap: 1rem;
    justify-items: center;
    text-align: center;
    padding: 1.35rem 1.2rem 1.4rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .wpr-card .wpr-form,
  .wpr-card .wpr-hint,
  .wpr-card .fs-btn {
    width: 100%;
    text-align: start;
    justify-self: stretch;
  }




  .wpr-form {
    display: grid;
    gap: 0.75rem;
  }

  .wpr-row {
    display: grid;
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .wpr-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .wpr-field {
    display: grid;
    gap: 0.4rem;
  }

  .wpr-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .wpr-input,
  .wpr-textarea {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    box-sizing: border-box;
  }

  .wpr-textarea {
    min-height: 110px;
    resize: vertical;
  }

  .wpr-input:focus,
  .wpr-textarea:focus {
    outline: none;
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
  }

  .wpr-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.25rem;
  }

  .wpr-btn-wa {
    background: #25d366 !important;
    color: #fff !important;
    border-color: #1ebe57 !important;
  }

  .wpr-hint {
    margin: 0;
    font-size: 0.8rem;
    color: var(--muted-color, #64748b);
  }
`;
