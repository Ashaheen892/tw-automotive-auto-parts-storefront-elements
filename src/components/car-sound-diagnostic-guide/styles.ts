import { css } from 'lit';

export const componentStyles = css`
  .csdg-layout {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 960px) {
    .csdg-layout {
      grid-template-columns: minmax(260px, 340px) 1fr;
      align-items: start;
    }
  }

  .csdg-picker-card {
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.05);
    overflow: hidden;
  }

  @media (min-width: 960px) {
    .csdg-picker-card {
      position: sticky;
      top: 1rem;
    }
  }

  .csdg-picker__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, var(--card-bg, #fff));
  }

  .csdg-picker__title {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .csdg-picker__count {
    display: grid;
    place-items: center;
    min-width: 26px;
    height: 26px;
    padding: 0 0.4rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-picker {
    display: grid;
    gap: 0.55rem;
    padding: 0.85rem;
  }

  .csdg-case {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.8rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.6);
    background: color-mix(in srgb, var(--card-bg, #fff) 96%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  .csdg-case:hover {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 40%, var(--border-color, #d9e2ec));
    background: var(--card-bg, #fff);
  }

  .csdg-case:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .csdg-case.is-selected {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 7%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 20%, transparent);
  }

  .csdg-case__icon {
    flex: 0 0 auto;
    width: 2.2rem;
    height: 2.2rem;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 10%, #fff);
    font-size: 1.05rem;
  }

  .csdg-case__body {
    display: grid;
    gap: 0.15rem;
    min-width: 0;
    flex: 1 1 auto;
  }

  .csdg-case__name {
    font-weight: 800;
    font-size: 0.9rem;
    line-height: 1.35;
  }

  .csdg-case__desc {
    font-size: 0.78rem;
    color: var(--muted-color, #64748b);
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .csdg-case__dot {
    flex: 0 0 auto;
    width: 10px;
    height: 10px;
    margin-top: 0.35rem;
    border-radius: 999px;
  }

  .csdg-case__dot--low {
    background: var(--fs-success, #2f9e63);
  }

  .csdg-case__dot--medium {
    background: var(--fs-caution, #d99a06);
  }

  .csdg-case__dot--high {
    background: var(--fs-danger, #cf4b4b);
  }

  .csdg-case__dot--critical {
    background: #7f1d1d;
  }

  .csdg-panel {
    display: grid;
    gap: 0.9rem;
    padding: 1.2rem 1.15rem 1.3rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .csdg-panel__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.6rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px dashed var(--border-color, #d9e2ec);
  }

  .csdg-panel__heading {
    display: grid;
    gap: 0.2rem;
  }

  .csdg-panel__kicker {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-panel__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--text-color, #111827);
  }

  .csdg-panel__desc {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--muted-color, #64748b);
  }

  .csdg-severity {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 1.9rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 800;
  }

  .csdg-severity__dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: currentColor;
  }

  .csdg-severity--low {
    background: color-mix(in srgb, var(--fs-success) 14%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: var(--fs-success);
  }

  .csdg-severity--medium {
    background: color-mix(in srgb, var(--fs-caution) 16%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: #9a6d00;
  }

  .csdg-severity--high {
    background: color-mix(in srgb, var(--fs-danger) 14%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: var(--fs-danger);
  }

  .csdg-severity--critical {
    background: color-mix(in srgb, #7f1d1d 20%, var(--fs-surface, var(--card-bg, #f0f0f0)));
    color: #7f1d1d;
  }

  .csdg-block {
    display: grid;
    gap: 0.55rem;
  }

  .csdg-block__label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--muted-color, #64748b);
  }

  .csdg-causes {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }

  .csdg-causes li {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: start;
    gap: 0.55rem;
    padding: 0.55rem 0.6rem;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    font-size: 0.87rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  .csdg-causes__num {
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

  .csdg-alert {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.85rem 0.95rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, var(--border-color, #d9e2ec));
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-color, #111827);
  }

  .csdg-alert__icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    flex: 0 0 auto;
    color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
  }

  .csdg-alert__body {
    display: grid;
    gap: 0.15rem;
  }

  .csdg-alert__body strong {
    font-size: 0.78rem;
    font-weight: 900;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .csdg-media {
    display: grid;
    gap: 0.75rem;
  }

  .csdg-media audio {
    width: 100%;
  }

  .csdg-media iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    border-radius: 12px;
    background: #000;
  }

  .csdg-media__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    width: fit-content;
    min-height: 40px;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .csdg-media__link:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, #fff);
  }

  .csdg-actions {
    padding-top: 0.25rem;
  }

  @media (max-width: 959px) {
    .csdg-picker {
      grid-auto-flow: column;
      grid-auto-columns: minmax(220px, 78%);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 1rem;
      -webkit-overflow-scrolling: touch;
    }

    .csdg-case {
      scroll-snap-align: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .csdg-case {
      transition: none !important;
    }
  }
`;
