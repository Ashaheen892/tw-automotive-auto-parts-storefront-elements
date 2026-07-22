import { css } from 'lit';

export const componentStyles = css`
  .pba-shell {
    display: grid;
    gap: 1rem;
  }

  /* ── Tabs (multiple pairs) ── */
  .pba-tabs {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.2rem;
  }

  .pba-tab {
    flex: 0 0 auto;
    min-height: 44px;
    padding: 0.55rem 1rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 8px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    cursor: pointer;
    scroll-snap-align: start;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .pba-tab.is-active {
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    border-color: var(--accent-color, var(--fs-store-primary));
  }

  /* ── Viewport ── */
  .pba-viewport {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #0f172a;
    background: #0f172a;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
  }

  .pba-viewport__layer {
    display: block;
    width: 100%;
  }

  .pba-viewport__layer img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 220px;
    max-height: 420px;
    object-fit: cover;
  }

  .pba-viewport__after {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .pba-viewport__after img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pba-placeholder {
    display: grid;
    place-items: center;
    min-height: 220px;
    max-height: 420px;
    width: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* ── Handle ── */
  .pba-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--accent-color, #ea580c);
    cursor: ew-resize;
    z-index: 10;
    transform: translateX(-50%);
  }

  .pba-handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: var(--accent-color, #ea580c);
    border: 3px solid #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  }

  /* ── Labels ── */
  .pba-labels {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    position: absolute;
    inset: auto 0 0 0;
    padding: 0.6rem 0.85rem;
    z-index: 5;
  }

  .pba-badge {
    display: inline-flex;
    align-items: center;
    min-height: 1.65rem;
    padding: 0.2rem 0.65rem;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .pba-badge--before {
    background: rgba(15, 23, 42, 0.85);
    color: #94a3b8;
  }

  .pba-badge--after {
    background: var(--accent-color, #ea580c);
    color: #fff;
  }

  /* ── Range fallback ── */
  .pba-range {
    width: 100%;
    margin-top: 0.4rem;
    accent-color: var(--accent-color, #ea580c);
  }

  @media (max-width: 639px) {
    .pba-viewport__layer img,
    .pba-viewport__after img {
      min-height: 180px;
      max-height: 280px;
    }

    .pba-placeholder {
      min-height: 180px;
      max-height: 280px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pba-handle,
    .pba-tab {
      transition: none !important;
    }
  }
`;
