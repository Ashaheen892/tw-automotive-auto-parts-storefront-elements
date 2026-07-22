import { css } from 'lit';

export const componentStyles = css`
  .pct-shell {
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(30, 41, 59, 0.08);
  }

  .pct-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .pct-table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    font-size: 0.88rem;
  }

  .pct-table th,
  .pct-table td {
    padding: 0.85rem 0.75rem;
    border-bottom: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 80%, transparent);
    text-align: start;
    vertical-align: top;
  }

  .pct-table thead th {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, var(--card-bg, #fff));
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-table tbody th {
    width: 28%;
    font-weight: 700;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 25%, var(--card-bg, #fff));
  }

  .pct-col-head {
    display: grid;
    gap: 0.35rem;
    justify-items: start;
  }

  .pct-col-head__name {
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-col-head.is-highlight {
    position: relative;
  }

  .pct-col-head.is-highlight::before {
    content: '';
    position: absolute;
    inset: -0.85rem -0.75rem auto;
    height: 3px;
    background: var(--col-color, var(--accent-color, var(--fs-store-primary)));
    border-radius: 0 0 4px 4px;
  }

  .pct-badge {
    display: inline-flex;
    align-items: center;
    min-height: 1.5rem;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 14%, #fff);
    color: var(--col-color, var(--accent-color, var(--fs-store-primary)));
  }

  .pct-cell.is-highlight {
    background: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 6%, var(--card-bg, #fff));
    font-weight: 650;
  }

  .pct-cards {
    display: grid;
    gap: 0.85rem;
    padding: 1rem;
  }

  .pct-card {
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    padding: 1rem;
    background: var(--card-bg, #fff);
  }

  .pct-card.is-highlight {
    border-color: color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--col-color, var(--accent-color, var(--fs-store-primary))) 22%, transparent);
  }

  .pct-card__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.75rem;
  }

  .pct-card__name {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .pct-card__rows {
    display: grid;
    gap: 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pct-card__row {
    display: grid;
    grid-template-columns: minmax(7rem, 38%) 1fr;
    gap: 0.5rem;
    font-size: 0.86rem;
    line-height: 1.5;
  }

  .pct-card__row dt {
    margin: 0;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .pct-card__row dd {
    margin: 0;
    color: var(--text-color, #111827);
  }

  .pct-scroll {
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding: 1rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .pct-scroll .pct-card {
    flex: 0 0 min(88vw, 320px);
    scroll-snap-align: start;
  }

  .pct-shell--table .pct-cards--stack {
    display: none;
  }

  .pct-shell--cards .pct-table-wrap {
    display: none;
  }

  @media (max-width: 639px) {
    .pct-shell--table .pct-table-wrap {
      display: none;
    }

    .pct-shell--table .pct-cards--stack {
      display: none;
    }

    .pct-shell--table .pct-scroll,
    .pct-shell--cards .pct-scroll {
      display: flex;
    }

    .pct-shell--cards .pct-cards--stack {
      display: none;
    }
  }

  @media (min-width: 640px) {
    .pct-scroll {
      display: none;
    }

    .pct-shell--cards .pct-cards--stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pct-table,
    .pct-card {
      transition: none !important;
    }
  }
`;
