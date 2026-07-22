import { css } from 'lit';

export const componentStyles = css`
  .pcc-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .pcc-layout {
    display: grid;
    gap: 1.1rem;
  }

  @media (min-width: 880px) {
    .pcc-layout {
      grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.75fr);
      align-items: start;
    }
  }

  .pcc-card {
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 1rem;
  }

  .pcc-notice {
    display: grid;
    gap: 0.2rem;
    padding: 0.8rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .pcc-notice__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-notice__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .pcc-steps {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0.45rem;
    align-items: center;
  }

  .pcc-step {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 40px;
    padding: 0.45rem 0.65rem;
    border-radius: calc(var(--section-radius, 20px) * 0.5);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .pcc-step.is-active,
  .pcc-step.is-done {
    color: var(--text-color, #111827);
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
  }

  .pcc-step.is-done {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, var(--card-bg, #fff));
  }

  .pcc-step__num {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.68rem;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .pcc-step-line {
    height: 2px;
    background: var(--border-color, #d9e2ec);
  }

  .pcc-block {
    display: grid;
    gap: 0.75rem;
  }

  .pcc-block__title {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pcc-grid {
    display: grid;
    gap: 0.75rem;
  }

  @media (min-width: 560px) {
    .pcc-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .pcc-field {
    display: grid;
    gap: 0.4rem;
  }

  .pcc-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pcc-label span {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-input {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.92rem;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .pcc-input:focus {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent);
    outline: none;
  }

  .pcc-input.is-invalid {
    border-color: var(--fs-danger, #cf4b4b);
  }

  .pcc-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .pcc-alert {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--fs-danger, #cf4b4b);
  }

  .pcc-result {
    display: grid;
    gap: 0.75rem;
    padding: 0.95rem 1rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid color-mix(in srgb, var(--fs-success, #2f9e63) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--fs-success, #2f9e63) 8%, var(--card-bg, #fff));
  }

  .pcc-result__title {
    margin: 0;
    font-size: 1rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .pcc-result__desc {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--muted-color, #64748b);
  }

  .pcc-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .pcc-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    min-height: 32px;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    font-size: 0.76rem;
    font-weight: 700;
    color: var(--text-color, #111827);
  }

  .pcc-chip__k {
    color: var(--muted-color, #64748b);
    font-weight: 700;
  }

  .pcc-wa {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.55rem 0.7rem;
    padding: 0.85rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid color-mix(in srgb, #25d366 40%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, #25d366 7%, var(--card-bg, #fff));
  }

  .pcc-wa__icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: #25d366;
    color: #fff;
    flex: 0 0 auto;
  }

  .pcc-wa__text {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .pcc-wa__btn {
    grid-column: 1 / -1;
    background: #25d366 !important;
    border-color: #1ebe57 !important;
    color: #fff !important;
  }

  @media (min-width: 560px) {
    .pcc-wa {
      grid-template-columns: auto 1fr auto;
    }

    .pcc-wa__btn {
      grid-column: auto;
    }
  }

  .pcc-side {
    display: grid;
    gap: 0.85rem;
  }

  .pcc-tips {
    padding: 1.05rem 1.05rem 1.15rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.05);
    display: grid;
    gap: 0.85rem;
  }

  .pcc-tips__head {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .pcc-tips__badge {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .pcc-tips__title {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .pcc-tips ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.55rem;
  }

  .pcc-tips li {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: start;
    gap: 0.55rem;
    padding: 0.55rem 0.6rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
  }

  .pcc-tips__num {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .pcc-tips__text {
    font-size: 0.84rem;
    line-height: 1.6;
    font-weight: 600;
    color: var(--text-color, #111827);
  }

  @media (max-width: 879px) {
    .pcc-side {
      order: 2;
    }
  }
`;
