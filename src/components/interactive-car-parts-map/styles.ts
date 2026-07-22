import { css } from 'lit';

export const componentStyles = css`
  .icpm-shell {
    display: grid;
    gap: 1.15rem;
  }


  .icpm-layout {
    display: grid;
    gap: 1.15rem;
    align-items: start;
  }

  @media (min-width: 920px) {
    .icpm-layout {
      grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.85fr);
      gap: 1.35rem;
    }
  }

  .icpm-stage-card {
    padding: 0.85rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 0.85rem;
  }

  .icpm-stage {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: calc(var(--section-radius, 20px) * 0.7);
    overflow: hidden;
    background:
      radial-gradient(
        ellipse at 50% 70%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, transparent),
        transparent 55%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--border-color, #d9e2ec) 28%, var(--card-bg, #fff)),
        color-mix(in srgb, var(--border-color, #d9e2ec) 12%, var(--card-bg, #fff))
      );
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .icpm-stage__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .icpm-silhouette {
    position: absolute;
    inset: 12% 8% 18%;
    width: auto;
    height: auto;
    max-width: 84%;
    max-height: 70%;
    margin: auto;
    opacity: 0.55;
    color: color-mix(in srgb, var(--text-color, #111827) 55%, var(--muted-color, #64748b));
  }

  .icpm-stage__missing {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: end center;
    padding: 0.85rem 1rem 1rem;
    pointer-events: none;
  }

  .icpm-stage__missing p {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
    background: color-mix(in srgb, var(--card-bg, #fff) 88%, transparent);
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
  }

  .icpm-hotspot {
    position: absolute;
    transform: translate(-50%, -50%);
    inset-inline-start: var(--dot-x, 50%);
    top: var(--dot-y, 50%);
    z-index: 2;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    display: grid;
    justify-items: center;
    gap: 0.28rem;
  }

  :host-context([dir='rtl']) .icpm-hotspot,
  :host([dir='rtl']) .icpm-hotspot {
    inset-inline-start: auto;
    inset-inline-end: var(--dot-x, 50%);
    transform: translate(50%, -50%);
  }

  .icpm-hotspot__pin {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    border: 2px solid #fff;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .icpm-hotspot:hover .icpm-hotspot__pin,
  .icpm-hotspot.is-active .icpm-hotspot__pin {
    transform: scale(1.08);
  }

  .icpm-hotspot.is-active .icpm-hotspot__pin {
    box-shadow:
      0 0 0 4px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
      0 8px 18px rgba(15, 23, 42, 0.3);
  }

  .icpm-hotspot__pulse {
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: inherit;
    opacity: 0.45;
    animation: icpm-pulse 2s ease-out infinite;
    pointer-events: none;
    z-index: -1;
  }

  .icpm-hotspot__label {
    max-width: 7.5rem;
    padding: 0.22rem 0.5rem;
    border-radius: 999px;
    font-size: 0.68rem;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color, #111827);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, transparent);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.08);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.18s ease, transform 0.18s ease;
    pointer-events: none;
  }

  .icpm-hotspot:hover .icpm-hotspot__label,
  .icpm-hotspot.is-active .icpm-hotspot__label,
  .icpm-hotspot:focus-visible .icpm-hotspot__label {
    opacity: 1;
    transform: translateY(0);
  }

  .icpm-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .icpm-legend__item {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 40px;
    padding: 0.4rem 0.7rem 0.4rem 0.45rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
  }

  .icpm-legend__item:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 45%, var(--border-color, #d9e2ec));
    transform: translateY(-1px);
  }

  .icpm-legend__item.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
  }

  .icpm-legend__num {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.68rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .icpm-panel {
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: var(--section-radius, 20px);
    padding: 1.15rem 1.15rem 1.25rem;
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    display: grid;
    gap: 0.85rem;
    align-content: start;
  }

  .icpm-panel__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .icpm-panel__kicker {
    margin: 0 0 0.2rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-panel__title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .icpm-panel__nav {
    display: inline-flex;
    gap: 0.35rem;
    flex: 0 0 auto;
  }

  .icpm-nav-btn {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 92%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .icpm-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-panel__desc {
    margin: 0;
    color: var(--muted-color, #64748b);
    line-height: 1.65;
    font-size: 0.92rem;
  }

  .icpm-panel__img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    display: block;
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .icpm-tip {
    display: grid;
    gap: 0.2rem;
    padding: 0.75rem 0.85rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .icpm-tip__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .icpm-tip__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .icpm-panel--empty {
    min-height: 12rem;
    place-items: center;
    text-align: center;
    color: var(--muted-color, #64748b);
  }

  .icpm-panel--empty p {
    margin: 0;
    max-width: 16rem;
    line-height: 1.6;
  }

  .icpm-sheet-backdrop {
    position: fixed;
    inset: 0;
    z-index: 55;
    background: rgba(17, 24, 39, 0.45);
    border: none;
  }

  @media (max-width: 919px) {
    .icpm-shell {
      gap: 0.85rem;
    }



    .icpm-layout {
      gap: 0.85rem;
    }

    .icpm-stage-card {
      padding: 0.65rem;
      gap: 0.7rem;
    }

    .icpm-stage {
      aspect-ratio: 4 / 3;
      min-height: 220px;
    }

    /* Smaller visible pin; the ::before keeps a 44px+ touch target */
    .icpm-hotspot::before {
      content: '';
      position: absolute;
      inset: -14px;
      border-radius: 999px;
    }

    .icpm-hotspot__pin {
      width: 26px;
      height: 26px;
      font-size: 0.6rem;
      border-width: 1.5px;
      box-shadow: 0 4px 10px rgba(15, 23, 42, 0.24);
    }

    /* Names come from the legend chips on small screens */
    .icpm-hotspot__label {
      display: none !important;
    }

    .icpm-legend {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 0.4rem;
      padding-bottom: 0.2rem;
      margin-inline: -0.15rem;
      padding-inline: 0.15rem;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
    }

    .icpm-legend::-webkit-scrollbar {
      display: none;
    }

    .icpm-legend__item {
      flex: 0 0 auto;
      scroll-snap-align: start;
      min-height: 44px;
      max-width: 11.5rem;
      font-size: 0.78rem;
    }

    .icpm-legend__item span:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .icpm-panel {
      padding: 1rem 0.95rem 1.1rem;
      gap: 0.75rem;
    }

    .icpm-panel__title {
      font-size: 1.05rem;
    }

    .icpm-panel__img {
      aspect-ratio: 16 / 10;
    }

    .icpm-panel--empty {
      min-height: auto;
      padding: 0.9rem;
    }

    .icpm-nav-btn {
      width: 40px;
      height: 40px;
    }

    .icpm-layout--sheet .icpm-panel:not(.icpm-panel--empty) {
      position: fixed;
      inset-inline: 0;
      bottom: 0;
      z-index: 60;
      border-radius: 18px 18px 0 0;
      max-height: min(78vh, 560px);
      overflow-y: auto;
      padding-bottom: calc(1.1rem + env(safe-area-inset-bottom, 0px));
      animation: icpm-sheet-up 0.28s ease;
      box-shadow: 0 -12px 40px rgba(15, 23, 42, 0.18);
    }

    .icpm-layout--sheet .icpm-panel--empty {
      display: none;
    }

    .icpm-layout--sheet .icpm-sheet-backdrop {
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }
  }

  @media (max-width: 480px) {
    .icpm-stage {
      aspect-ratio: 1 / 1;
      min-height: 240px;
    }

    .icpm-silhouette {
      inset: 16% 6% 22%;
      max-width: 90%;
    }

    .icpm-hotspot__pin {
      width: 22px;
      height: 22px;
      font-size: 0.55rem;
    }

    .icpm-hotspot.is-active .icpm-hotspot__pin {
      box-shadow:
        0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        0 5px 12px rgba(15, 23, 42, 0.26);
    }

    .icpm-panel__head {
      flex-wrap: wrap;
    }
  }

  @keyframes icpm-pulse {
    0% {
      transform: scale(1);
      opacity: 0.45;
    }
    70% {
      transform: scale(2.1);
      opacity: 0;
    }
    100% {
      transform: scale(2.1);
      opacity: 0;
    }
  }

  @keyframes icpm-sheet-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .icpm-hotspot__pin,
    .icpm-hotspot__pulse,
    .icpm-hotspot__label,
    .icpm-legend__item,
    .icpm-panel {
      animation: none !important;
      transition: none !important;
    }
  }
`;
