import { css } from 'lit';

export const componentStyles = css`
  .pjt-shell {
    display: grid;
    gap: 1.5rem;
  }

  .pjt-rail {
    position: relative;
    padding: 1.15rem 1rem 1.25rem;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, #fff),
        var(--card-bg, #fff) 55%
      );
    box-shadow: 0 10px 28px rgba(30, 41, 59, 0.06);
    overflow: hidden;
  }

  .pjt-rail__line {
    display: none;
    position: absolute;
    inset-inline: 8%;
    top: 2.55rem;
    height: 3px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--border-color, #d9e2ec) 80%, #fff);
    overflow: hidden;
  }

  .pjt-rail__line span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--accent-color, var(--fs-store-primary));
    transition: width 0.35s ease;
  }

  .pjt-rail__steps {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(118px, 1fr);
    gap: 0.65rem;
    overflow-x: auto;
    padding-bottom: 0.15rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .pjt-node {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: center;
    gap: 0.55rem;
    margin: 0;
    padding: 0.35rem 0.25rem 0.15rem;
    border: 0;
    background: transparent;
    color: var(--text-color, #111827);
    font: inherit;
    cursor: pointer;
    scroll-snap-align: center;
    transition: transform 0.2s ease;
  }

  .pjt-node:hover {
    transform: translateY(-2px);
  }

  .pjt-node__dot {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 6px 16px rgba(30, 41, 59, 0.08);
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;
  }

  .pjt-node.is-done .pjt-node__dot {
    border-color: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 55%, #fff);
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
  }

  .pjt-node.is-active .pjt-node__dot {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: var(--button-bg, var(--accent-color, var(--fs-store-primary)));
    color: #fff;
    box-shadow:
      0 0 0 5px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 18%, transparent),
      0 10px 22px rgba(30, 41, 59, 0.16);
  }

  .pjt-node__icon {
    font-size: 1.05rem;
    line-height: 1;
  }

  .pjt-node__num {
    font-size: 0.95rem;
    font-weight: 800;
  }

  .pjt-node__label {
    max-width: 9.5rem;
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.35;
    text-align: center;
    color: var(--muted-color, #64748b);
  }

  .pjt-node.is-active .pjt-node__label {
    color: var(--text-color, #111827);
  }

  .pjt-node__badge {
    max-width: 9.5rem;
    padding: 0.12rem 0.45rem;
    border-radius: 999px;
    font-size: 0.65rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, #fff);
    color: var(--accent-color, var(--fs-store-primary));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pjt-panel {
    border-radius: var(--section-radius, 22px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 16px 40px rgba(30, 41, 59, 0.09);
    overflow: hidden;
  }

  .pjt-panel__grid {
    display: grid;
    gap: 0;
  }

  .pjt-panel__grid.has-media {
    direction: ltr;
  }

  @media (min-width: 860px) {
    .pjt-rail__line {
      display: block;
    }

    .pjt-panel__grid.has-media {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
      align-items: stretch;
    }
  }

  .pjt-panel__visual {
    position: relative;
    min-height: 220px;
    background:
      radial-gradient(
        120% 100% at 0% 0%,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 28%, transparent),
        transparent 55%
      ),
      linear-gradient(160deg, #1e293b, #0f172a);
  }

  .pjt-panel__visual img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    max-height: 340px;
    object-fit: cover;
  }

  .pjt-panel__visual-fallback {
    min-height: 220px;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .pjt-panel__visual-icon {
    width: 4.5rem;
    height: 4.5rem;
    display: grid;
    place-items: center;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    font-size: 1.8rem;
  }

  .pjt-panel__stamp {
    position: absolute;
    inset-inline-start: 1rem;
    bottom: 1rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.72);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 800;
    backdrop-filter: blur(6px);
  }

  .pjt-panel__body {
    display: grid;
    align-content: center;
    gap: 0.75rem;
    padding: 1.35rem 1.4rem 1.5rem;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .pjt-panel__body,
  :host-context([lang='en']) .pjt-panel__body {
    direction: ltr;
  }

  .pjt-panel__kicker {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .pjt-panel__title {
    margin: 0;
    font-size: clamp(1.25rem, 2.4vw, 1.65rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .pjt-panel__desc {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: color-mix(in srgb, var(--text-color, #111827) 86%, var(--muted-color, #64748b));
  }

  .pjt-panel__facts {
    display: grid;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  @media (min-width: 520px) {
    .pjt-panel__facts {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .pjt-fact {
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 0.85rem;
    border-radius: 14px;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 6%, #f8fafc);
    border: 1px solid color-mix(in srgb, var(--border-color, #d9e2ec) 85%, transparent);
  }

  .pjt-fact__label {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
  }

  .pjt-fact__value {
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--text-color, #111827);
    line-height: 1.4;
  }

  @media (max-width: 859px) {
    .pjt-rail__steps {
      grid-auto-columns: minmax(104px, 140px);
    }

    .pjt-panel__visual img,
    .pjt-panel__visual-fallback {
      max-height: 220px;
      min-height: 180px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pjt-node,
    .pjt-rail__line span,
    .pjt-node__dot {
      transition: none !important;
    }
  }
`;
