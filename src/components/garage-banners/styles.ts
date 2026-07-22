import { css } from 'lit';

export const componentStyles = css`
  .gba-shell {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #0f172a;
    /* Allow vertical page scroll while capturing horizontal swipes */
    touch-action: pan-y;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
  }

  .gba-shell:active {
    cursor: grabbing;
  }

  /* ── Slides stack in one grid cell and cross-fade ── */
  .gba-track {
    display: grid;
  }

  .gba-slide {
    grid-area: 1 / 1;
    position: relative;
    min-height: 320px;
    display: grid;
    align-items: end;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .gba-slide--active {
    opacity: 1;
    visibility: visible;
  }

  .gba-slide__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .gba-slide__bg img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gba-slide__bg--empty {
    background: linear-gradient(135deg, #1e293b, #0f172a 70%);
  }

  .gba-slide__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
    z-index: 1;
  }

  .gba-slide__content {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 0.65rem;
    padding: 2rem 1.75rem;
    width: min(100%, 52rem);
  }

  .gba-slide__title {
    margin: 0;
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.2;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .gba-slide__subtitle {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .gba-slide__cta {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border: 1.5px solid transparent;
    border-radius: 999px;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #fff);
    font: inherit;
    font-weight: 700;
    font-size: 0.92rem;
    line-height: 1.2;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 8px 20px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent);
    transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .gba-slide__cta:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
    box-shadow: 0 12px 26px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 34%, transparent);
  }

  /* ── Navigation ── */
  .gba-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }

  .gba-nav:hover {
    background: var(--accent-color, #ea580c);
    border-color: var(--accent-color, #ea580c);
  }

  .gba-nav--prev {
    inset-inline-start: 0.85rem;
  }

  .gba-nav--next {
    inset-inline-end: 0.85rem;
  }

  .gba-nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 639px) {
    .gba-slide {
      min-height: 260px;
    }

    .gba-slide__content {
      padding: 1.25rem 1rem;
    }

    .gba-nav {
      width: 2.2rem;
      height: 2.2rem;
      font-size: 0.95rem;
    }

    .gba-nav--prev {
      inset-inline-start: 0.45rem;
    }

    .gba-nav--next {
      inset-inline-end: 0.45rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gba-slide,
    .gba-slide__cta,
    .gba-nav {
      transition: none !important;
    }
  }
`;
