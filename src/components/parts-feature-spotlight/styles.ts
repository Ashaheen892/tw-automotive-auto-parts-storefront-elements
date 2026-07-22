import { css } from 'lit';

export const componentStyles = css`
  .pfs-shell {
    display: grid;
    gap: 1.15rem;
  }


  .pfs-stage {
    display: grid;
    gap: 1.25rem;
    align-items: center;
    padding: 1.15rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
  }

  @media (min-width: 960px) {
    .pfs-stage {
      grid-template-columns: minmax(0, 1fr) minmax(220px, 340px) minmax(0, 1fr);
      gap: 1.5rem 1.25rem;
      padding: 1.5rem 1.35rem 1.6rem;
    }
  }

  .pfs-col {
    display: grid;
    gap: 1.15rem;
    align-content: center;
  }

  .pfs-center {
    display: grid;
    gap: 0.75rem;
    justify-items: center;
    order: -1;
  }

  @media (min-width: 960px) {
    .pfs-center {
      order: 0;
    }
  }

  .pfs-center__frame {
    position: relative;
    width: min(100%, 320px);
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background:
      radial-gradient(
        circle at 50% 40%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, var(--card-bg, #fff)),
        color-mix(in srgb, var(--border-color, #d9e2ec) 35%, var(--card-bg, #fff)) 70%
      );
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, var(--border-color, #d9e2ec));
    box-shadow:
      inset 0 0 0 10px color-mix(in srgb, var(--card-bg, #fff) 70%, transparent),
      0 18px 40px rgba(15, 23, 42, 0.1);
    overflow: hidden;
  }

  .pfs-center__img {
    width: 78%;
    height: 78%;
    object-fit: contain;
    display: block;
  }

  .pfs-center__placeholder {
    font-size: 2.4rem;
    font-weight: 900;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 70%, var(--text-color, #111827));
  }

  .pfs-center__caption {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    text-align: center;
  }

  .pfs-feat {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.75rem;
    align-items: start;
    width: 100%;
    padding: 0.85rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid transparent;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }

  .pfs-feat:hover,
  .pfs-feat.is-active {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, var(--card-bg, #fff));
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  }

  /* Toward center: start column icons face inline-end (toward middle) */
  .pfs-col--start .pfs-feat {
    direction: inherit;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .pfs-col--start .pfs-feat__icon {
    order: 2;
  }

  .pfs-col--start .pfs-feat__body {
    order: 1;
    text-align: end;
  }

  .pfs-col--end .pfs-feat {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .pfs-col--end .pfs-feat__body {
    text-align: start;
  }

  .pfs-feat__icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    font-size: 0.78rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    box-shadow: 0 8px 18px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
    overflow: hidden;
  }

  .pfs-feat__icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pfs-feat__body {
    display: grid;
    gap: 0.28rem;
    min-width: 0;
  }

  .pfs-feat__title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 900;
    line-height: 1.35;
    color: var(--text-color, #111827);
  }

  .pfs-feat__desc {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--muted-color, #64748b);
  }

  .pfs-connector {
    display: none;
  }

  @media (min-width: 960px) {
    .pfs-stage.has-connectors .pfs-feat {
      position: relative;
    }

    .pfs-stage.has-connectors .pfs-col--start .pfs-feat::after,
    .pfs-stage.has-connectors .pfs-col--end .pfs-feat::before {
      content: '';
      position: absolute;
      top: 28px;
      width: 18px;
      height: 2px;
      background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
      pointer-events: none;
    }

    .pfs-stage.has-connectors .pfs-col--start .pfs-feat::after {
      inset-inline-end: -12px;
    }

    .pfs-stage.has-connectors .pfs-col--end .pfs-feat::before {
      inset-inline-start: -12px;
    }
  }

  @media (max-width: 959px) {
    .pfs-stage {
      padding: 0.95rem;
      gap: 0.85rem;
    }

    .pfs-col {
      gap: 0.65rem;
    }

    .pfs-col--start .pfs-feat,
    .pfs-col--end .pfs-feat {
      grid-template-columns: auto minmax(0, 1fr);
    }

    .pfs-col--start .pfs-feat__icon,
    .pfs-col--end .pfs-feat__icon {
      order: 0;
    }

    .pfs-col--start .pfs-feat__body,
    .pfs-col--end .pfs-feat__body {
      order: 0;
      text-align: start;
    }

    .pfs-center__frame {
      width: min(100%, 260px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pfs-feat {
      transition: none !important;
    }
  }
`;
