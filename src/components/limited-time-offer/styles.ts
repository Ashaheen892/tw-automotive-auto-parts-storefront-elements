import { css } from 'lit';

export const componentStyles = css`
  .lto-shell {
    display: grid;
    gap: 1.15rem;
  }

  .lto-panel {
    /* Dedicated dark promo surface — never derive from --text-color
       (in dark mode that token is white and would wash out the panel). */
    --lto-panel-bg: #0f172a;
    --lto-panel-bg-2: #1e293b;
    --lto-ink: #ffffff;
    --lto-ink-soft: rgba(255, 255, 255, 0.82);
    --lto-ink-faint: rgba(255, 255, 255, 0.58);

    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 1.25rem;
    align-items: stretch;
    padding: clamp(1.1rem, 2.4vw, 1.6rem);
    border-radius: var(--section-radius, 20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(
        120% 90% at 100% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        transparent 55%
      ),
      linear-gradient(145deg, var(--lto-panel-bg) 0%, var(--lto-panel-bg-2) 100%);
    color: var(--lto-ink);
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.16);
    overflow: hidden;
  }

  :host([data-fs-theme='dark']) .lto-panel {
    --lto-panel-bg: #161b22;
    --lto-panel-bg-2: #0d1117;
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
  }

  .lto-panel--image-start {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }

  .lto-panel--image-start .lto-media {
    order: -1;
  }

  .lto-copy {
    display: grid;
    gap: 0.85rem;
    align-content: center;
    padding: clamp(0.35rem, 1.5vw, 0.75rem) clamp(0.25rem, 1.2vw, 0.5rem);
    min-width: 0;
  }

  .lto-eyebrow {
    margin: 0;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 70%, #fbbf24);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .lto-title {
    margin: 0;
    font-size: clamp(1.45rem, 2.8vw, 2.15rem);
    font-weight: 900;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: var(--lto-ink);
  }

  .lto-desc {
    margin: 0;
    max-width: 38rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--lto-ink-soft);
  }

  .lto-timer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.35rem;
    margin-top: 0.15rem;
  }

  .lto-timer__unit {
    display: grid;
    gap: 0.2rem;
    justify-items: start;
    min-width: 3.25rem;
  }

  .lto-timer__value {
    font-size: clamp(1.55rem, 3vw, 2rem);
    font-weight: 900;
    line-height: 1;
    color: var(--lto-ink);
    font-variant-numeric: tabular-nums;
  }

  .lto-timer__label {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--lto-ink-faint);
  }

  .lto-ended {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, #fff);
  }

  .lto-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  .lto-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border-radius: 999px;
    border: 1.5px solid transparent;
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: var(--button-color, #ffffff);
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
  }

  .lto-cta:hover {
    filter: brightness(1.04);
    transform: translateY(-1px);
  }

  .lto-media {
    position: relative;
    min-height: 260px;
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    overflow: hidden;
    background: color-mix(in srgb, #0f172a 70%, #334155);
  }

  .lto-media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 260px;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  .lto-panel:hover .lto-media img {
    transform: scale(1.03);
  }

  @media (max-width: 899px) {
    .lto-panel,
    .lto-panel--image-start {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .lto-panel--image-start .lto-media {
      order: 0;
    }

    .lto-media {
      min-height: 220px;
      order: -1;
    }

    .lto-media img {
      min-height: 220px;
      aspect-ratio: 16 / 10;
    }

    .lto-copy {
      padding: 0.15rem 0.1rem 0.35rem;
    }
  }

  @media (max-width: 639px) {
    .lto-timer {
      gap: 0.85rem 1.1rem;
    }

    .lto-timer__unit {
      min-width: 2.75rem;
    }

    .lto-timer__value {
      font-size: 1.35rem;
    }

    .lto-actions .lto-cta {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .lto-cta,
    .lto-media img {
      transition: none !important;
    }

    .lto-panel:hover .lto-media img {
      transform: none;
    }
  }
`;
