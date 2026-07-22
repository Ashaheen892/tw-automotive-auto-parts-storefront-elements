import { css } from 'lit';

export const componentStyles = css`
  .dwg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
    gap: 0.65rem;
    width: 100%;
  }

  .dwg-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    min-height: 96px;
    padding: 0.75rem 0.5rem;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  }

  .dwg-item:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    transform: translateY(-2px);
  }

  .dwg-item.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 25%, transparent);
  }

  .dwg-item__icon {
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--dwg-color, var(--accent-color, var(--fs-store-primary))) 14%, var(--card-bg, #fff));
    color: var(--dwg-color, var(--accent-color, var(--fs-store-primary)));
    font-size: 1rem;
    font-weight: 800;
    overflow: hidden;
  }

  .dwg-item__icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .dwg-item__name {
    font-size: 0.74rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.35;
  }

  .dwg-detail {
    width: 100%;
    margin: 1.25rem 0 0;
    padding: 1.15rem 1.2rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 30px rgba(30, 41, 59, 0.08);
  }

  .dwg-detail__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.65rem;
  }

  .dwg-detail__title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .dwg-detail__block {
    margin-bottom: 0.85rem;
  }

  .dwg-detail__label {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .dwg-detail__text {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .dwg-detail__action {
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  @media (max-width: 639px) {
    .dwg-grid {
      grid-template-columns: repeat(auto-fill, minmax(4.8rem, 1fr));
    }
  }
`;
