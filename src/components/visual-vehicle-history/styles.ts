import { css } from 'lit';

export const componentStyles = css`
  .vvh-shell {
    display: grid;
    gap: 1.15rem;
    width: 100%;
  }


  .vvh-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.55rem;
  }

  .vvh-stat {
    padding: 0.85rem 0.9rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    display: grid;
    gap: 0.2rem;
    min-width: 0;
  }

  .vvh-stat__label {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-stat__value {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .vvh-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .vvh-filter {
    min-height: 36px;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
  }

  .vvh-filter.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, var(--card-bg, #fff));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-layout {
    display: grid;
    gap: 1.1rem;
    align-items: start;
  }

  @media (min-width: 900px) {
    .vvh-layout--vertical {
      grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    }
  }

  .vvh-card {
    padding: 1rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }

  .vvh-track {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .vvh-layout--horizontal .vvh-track {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.65rem;
    padding-bottom: 0.2rem;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .vvh-layout--horizontal .vvh-track::-webkit-scrollbar {
    display: none;
  }

  .vvh-item {
    position: relative;
  }

  .vvh-layout--horizontal .vvh-item {
    flex: 0 0 auto;
    width: min(220px, 72vw);
    scroll-snap-align: start;
  }

  .vvh-trigger {
    width: 100%;
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 0.75rem;
    align-items: center;
    padding: 0.85rem 0.9rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--card-bg, #fff) 94%, #f8fafc);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .vvh-layout--horizontal .vvh-trigger {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    min-height: 148px;
    align-content: center;
  }

  .vvh-trigger.is-active,
  .vvh-trigger:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  .vvh-trigger__index {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 0.72rem;
    font-weight: 900;
    color: #fff;
    background: var(--accent-color, var(--fs-store-primary));
    flex: 0 0 auto;
  }

  .vvh-trigger__body {
    display: grid;
    gap: 0.22rem;
    min-width: 0;
  }

  .vvh-layout--horizontal .vvh-trigger__body {
    justify-items: center;
  }

  .vvh-trigger__date {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .vvh-trigger__title {
    font-size: 0.92rem;
    font-weight: 900;
    line-height: 1.35;
  }

  .vvh-trigger__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    align-items: center;
  }

  .vvh-layout--horizontal .vvh-trigger__meta {
    justify-content: center;
  }

  .vvh-chip {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .vvh-chip--accent {
    color: var(--accent-color, var(--fs-store-primary));
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, var(--border-color, #d9e2ec));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
  }

  .vvh-detail {
    display: grid;
    gap: 0.85rem;
    padding: 1.15rem 1.15rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
    align-content: start;
  }

  .vvh-detail__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .vvh-detail__kicker {
    margin: 0 0 0.2rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__title {
    margin: 0;
    font-size: 1.12rem;
    font-weight: 900;
    color: var(--text-color, #111827);
    line-height: 1.35;
  }

  .vvh-detail__nav {
    display: inline-flex;
    gap: 0.35rem;
    flex: 0 0 auto;
  }

  .vvh-nav-btn {
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

  .vvh-nav-btn:hover {
    border-color: var(--accent-color, var(--fs-store-primary));
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-detail__meta {
    margin: 0;
    font-size: 0.84rem;
    color: var(--muted-color, #64748b);
  }

  .vvh-detail__note {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-color, #111827);
  }

  .vvh-detail__media img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    border: 1px solid var(--border-color, #d9e2ec);
  }

  .vvh-next {
    display: grid;
    gap: 0.2rem;
    padding: 0.75rem 0.85rem;
    border-radius: calc(var(--section-radius, 20px) * 0.55);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 9%, var(--card-bg, #fff));
    border: 1px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .vvh-next__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .vvh-next__text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--text-color, #111827);
  }

  .vvh-empty {
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: var(--muted-color, #64748b);
    font-size: 0.9rem;
  }

  @media (max-width: 899px) {
    .vvh-shell {
      gap: 0.85rem;
    }

    .vvh-stats {
      grid-template-columns: 1fr;
    }

    .vvh-filters {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.15rem;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .vvh-filters::-webkit-scrollbar {
      display: none;
    }

    .vvh-filter {
      flex: 0 0 auto;
      min-height: 40px;
    }

    .vvh-card {
      padding: 0.75rem;
    }

    .vvh-trigger {
      min-height: 64px;
      padding: 0.75rem 0.8rem;
    }

    .vvh-detail {
      padding: 1rem 0.95rem 1.1rem;
    }

    .vvh-detail__head {
      flex-wrap: wrap;
    }

    .vvh-nav-btn {
      width: 40px;
      height: 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vvh-trigger,
    .vvh-nav-btn {
      transition: none !important;
    }
  }
`;
