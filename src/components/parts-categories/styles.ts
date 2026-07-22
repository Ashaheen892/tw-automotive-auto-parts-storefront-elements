import { css } from 'lit';

export const componentStyles = css`
  .pca-shell {
    display: grid;
    gap: 1.15rem;
  }

  .pca-toolbar {
    display: flex;
    justify-content: flex-end;
  }

  .pca-toggle {
    display: inline-flex;
    gap: 0.35rem;
    padding: 0.25rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
  }

  .pca-toggle__btn {
    min-height: 36px;
    padding: 0.35rem 0.75rem;
    border: none;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    background: transparent;
    color: var(--muted-color, #64748b);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
  }

  .pca-toggle__btn.is-active {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
  }

  .pca-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(var(--pca-cols, 3), minmax(0, 1fr));
  }

  .pca-slider {
    display: flex;
    gap: 0.9rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 0.2rem;
  }

  .pca-slider::-webkit-scrollbar {
    display: none;
  }

  .pca-slider > * {
    flex: 0 0 auto;
    width: min(210px, 70vw);
    scroll-snap-align: start;
  }

  /* —— Shared image-tile card look (showcase + projects) —— */
  .pca-tile .pca-card,
  .pca-tile .pca-card--disabled {
    display: block;
    position: relative;
    height: 100%;
    min-height: 160px;
    border: 0;
    border-radius: calc(var(--section-radius, 20px) * 0.85);
    overflow: hidden;
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
  }

  .pca-tile .pca-card__media {
    position: absolute;
    inset: 0;
    aspect-ratio: auto;
    height: 100%;
  }

  .pca-tile .pca-card__media::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(15, 23, 42, 0.72) 0%,
      rgba(15, 23, 42, 0.28) 42%,
      rgba(15, 23, 42, 0.05) 100%
    );
    pointer-events: none;
  }

  .pca-tile .pca-card__body {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    z-index: 1;
    gap: 0.25rem;
    padding: 1rem 1.05rem 1.05rem;
    background: transparent;
  }

  .pca-tile .pca-card__title {
    color: #fff;
    font-size: clamp(0.95rem, 1.4vw, 1.15rem);
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
  }

  .pca-tile .pca-card__cta {
    display: none;
  }

  .pca-tile .pca-card__desc {
    display: none;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.86rem;
    font-weight: 600;
    line-height: 1.45;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .pca-tile .pca-card--feature .pca-card__desc {
    display: block;
  }

  .pca-tile .pca-card--feature .pca-card__title {
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.25;
  }

  .pca-tile a.pca-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
  }

  .pca-tile a.pca-card:hover .pca-card__media img {
    transform: scale(1.05);
  }

  .pca-tile .pca-card__mono {
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
  }

  /* —— Showcase mosaic (center featured tile) —— */
  .pca-showcase {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: 1fr 1.2fr 1fr;
    grid-template-rows: minmax(180px, 1fr) minmax(180px, 1fr);
    min-height: min(520px, 68vw);
  }

  .pca-showcase > *:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .pca-showcase > *:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }

  .pca-showcase > *:nth-child(3) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .pca-showcase > *:nth-child(4) {
    grid-column: 3;
    grid-row: 1;
  }

  .pca-showcase > *:nth-child(5) {
    grid-column: 3;
    grid-row: 2;
  }

  .pca-showcase > * {
    min-height: 0;
  }

  /* —— Projects mosaic (2×2 + tall side feature) —— */
  .pca-projects {
    display: grid;
    gap: 0.9rem;
    /* Lock visual order like reference: stack left, feature right */
    direction: ltr;
    grid-template-columns: 1.45fr 1fr;
    grid-template-rows: minmax(200px, 1fr) minmax(200px, 1fr);
    min-height: min(520px, 70vw);
  }

  .pca-projects__stack {
    /* Keep card text RTL while mosaic columns stay LTR like the reference */
    direction: rtl;
    grid-column: 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.9rem;
    min-height: 0;
  }

  .pca-projects__feature {
    direction: rtl;
    grid-column: 2;
    grid-row: 1 / span 2;
    min-height: 0;
  }

  :host([dir='ltr']) .pca-projects__stack,
  :host([dir='ltr']) .pca-projects__feature,
  :host-context([dir='ltr']) .pca-projects__stack,
  :host-context([dir='ltr']) .pca-projects__feature {
    direction: ltr;
  }

  .pca-projects__stack > *,
  .pca-projects__feature {
    min-height: 0;
  }

  .pca-projects .pca-card,
  .pca-projects .pca-card--disabled {
    min-height: 150px;
  }

  .pca-footer-link {
    display: flex;
    justify-content: center;
    margin-top: 0.35rem;
  }

  .pca-footer-link a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 44px;
    padding: 0.35rem 0.25rem;
    color: var(--accent-color, var(--fs-store-primary));
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    border-bottom: 2px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    transition: border-color 0.2s ease, gap 0.2s ease;
  }

  .pca-footer-link a:hover {
    border-bottom-color: var(--accent-color, var(--fs-store-primary));
    gap: 0.5rem;
  }

  .pca-footer-link a::after {
    content: '←';
  }

  :host([dir='ltr']) .pca-footer-link a::after,
  :host-context([dir='ltr']) .pca-footer-link a::after {
    content: '→';
  }

  .pca-showcase-rest {
    margin-top: 0.15rem;
  }

  /* —— Standard grid / slider cards —— */
  .pca-card {
    display: grid;
    height: 100%;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  a.pca-card:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
  }

  a.pca-card:hover .pca-card__cta {
    gap: 0.45rem;
  }

  a.pca-card:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .pca-card--disabled {
    opacity: 0.72;
    cursor: default;
  }

  .pca-card__media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: linear-gradient(
      145deg,
      color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 16%, var(--card-bg, #fff)),
      color-mix(in srgb, var(--border-color, #d9e2ec) 35%, var(--card-bg, #fff))
    );
  }

  .pca-card__media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  a.pca-card:hover .pca-card__media img {
    transform: scale(1.04);
  }

  .pca-card__mono {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 900;
    color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 75%, var(--text-color, #111827));
  }

  .pca-card__body {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    padding: 0.9rem 0.95rem 1.05rem;
  }

  .pca-card__title {
    margin: 0;
    font-size: 0.98rem;
    font-weight: 900;
    line-height: 1.35;
    color: var(--text-color, #111827);
  }

  .pca-card__desc {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--muted-color, #64748b);
  }

  .pca-card__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    transition: gap 0.2s ease;
  }

  .pca-card__cta::after {
    content: '←';
    font-size: 0.85rem;
    line-height: 1;
  }

  :host([dir='ltr']) .pca-card__cta::after,
  :host-context([dir='ltr']) .pca-card__cta::after {
    content: '→';
  }

  .pca-card--disabled .pca-card__cta {
    color: var(--muted-color, #64748b);
  }

  .pca-card--disabled .pca-card__cta::after {
    content: '';
  }

  @media (max-width: 899px) {
    .pca-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .pca-showcase {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      min-height: 0;
    }

    .pca-showcase > *:nth-child(1),
    .pca-showcase > *:nth-child(2),
    .pca-showcase > *:nth-child(3),
    .pca-showcase > *:nth-child(4),
    .pca-showcase > *:nth-child(5) {
      grid-column: auto;
      grid-row: auto;
    }

    .pca-showcase > *:nth-child(3) {
      grid-column: 1 / -1;
      min-height: 240px;
    }

    .pca-projects {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      min-height: 0;
    }

    .pca-projects__stack,
    .pca-projects__feature {
      grid-column: auto;
      grid-row: auto;
    }

    .pca-projects__feature {
      min-height: 260px;
      order: -1;
    }

    .pca-tile .pca-card,
    .pca-tile .pca-card--disabled {
      min-height: 180px;
    }
  }

  @media (max-width: 639px) {
    .pca-shell {
      gap: 0.85rem;
    }

    .pca-toolbar {
      justify-content: stretch;
    }

    .pca-toggle {
      width: 100%;
      flex-wrap: wrap;
    }

    .pca-toggle__btn {
      flex: 1 1 calc(50% - 0.35rem);
      min-height: 40px;
    }

    .pca-grid,
    .pca-showcase {
      gap: 0.7rem;
      grid-template-columns: 1fr;
    }

    .pca-showcase > *:nth-child(3) {
      grid-column: auto;
      min-height: 220px;
    }

    .pca-projects__stack {
      grid-template-columns: 1fr;
    }

    .pca-projects__feature {
      min-height: 220px;
    }

    .pca-card__body {
      padding: 0.75rem 0.8rem 0.9rem;
    }

    .pca-card__title {
      font-size: 0.9rem;
    }

    .pca-tile .pca-card__body {
      padding: 0.85rem 0.9rem 0.95rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pca-card,
    .pca-card__media img,
    .pca-card__cta,
    .pca-footer-link a {
      transition: none !important;
    }
  }
`;
