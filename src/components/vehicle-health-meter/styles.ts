import { css } from 'lit';

export const componentStyles = css`
  .vhm-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    justify-content: center;
    margin-bottom: 1.25rem;
    font-size: 0.78rem;
    color: var(--muted-color, #64748b);
  }

  .vhm-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .vhm-legend i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .vhm-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .vhm-grid--bars {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .vhm-meter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
    padding: 1rem 0.75rem;
    border-radius: calc(var(--section-radius, 20px) * 0.75);
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    text-align: center;
  }

  .vhm-meter--bar {
    align-items: stretch;
    text-align: start;
  }

  .vhm-circle {
    position: relative;
    width: 96px;
    height: 96px;
  }

  .vhm-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .vhm-circle__track {
    fill: none;
    stroke: color-mix(in srgb, var(--border-color, #d9e2ec) 70%, transparent);
    stroke-width: 8;
  }

  .vhm-circle__fill {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.8s ease;
  }

  .vhm-circle__value {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-name {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--text-color, #111827);
  }

  .vhm-status {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .vhm-note {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.45;
    color: var(--muted-color, #64748b);
  }

  .vhm-bar-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.45rem;
  }

  .vhm-bar-track {
    height: 10px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 55%, transparent);
    overflow: hidden;
  }

  .vhm-bar-fill {
    height: 100%;
    border-radius: inherit;
    transition: width 0.8s ease;
  }

  .vhm-link {
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .vhm-link:hover {
    text-decoration: underline;
  }

  .vhm-circle__fill,
  .vhm-bar-fill {
    transition-duration: 1s;
  }

  @media (prefers-reduced-motion: reduce) {
    .vhm-circle__fill,
    .vhm-bar-fill {
      transition: none !important;
    }
  }
`;
