import { css } from 'lit';

export const componentStyles = css`
  .vh-section {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background: transparent;
  }

  .vh-section .fs-container {
    max-width: none;
    padding: 0;
  }

  .vh-stage {
    position: relative;
    display: grid;
    align-items: center;
    min-height: var(--vh-min-height, 72vh);
    overflow: hidden;
    background: #0b1220;
    color: #fff;
  }

  .vh-media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .vh-media video,
  .vh-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .vh-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      linear-gradient(
        to left,
        rgba(8, 12, 20, calc(var(--vh-overlay, 0.45) + 0.18)) 0%,
        rgba(8, 12, 20, var(--vh-overlay, 0.45)) 42%,
        rgba(8, 12, 20, 0.18) 100%
      );
  }

  :host([dir='ltr']) .vh-overlay,
  :host-context([dir='ltr']) .vh-overlay {
    background:
      linear-gradient(
        to right,
        rgba(8, 12, 20, calc(var(--vh-overlay, 0.45) + 0.18)) 0%,
        rgba(8, 12, 20, var(--vh-overlay, 0.45)) 42%,
        rgba(8, 12, 20, 0.18) 100%
      );
  }

  .vh-content-wrap {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--section-container-max, 1440px);
    margin: 0 auto;
    padding: clamp(2.5rem, 6vw, 4.5rem) var(--section-container-pad, 16px);
    display: flex;
    justify-content: flex-start;
  }

  .vh-content-wrap--center {
    justify-content: center;
    text-align: center;
  }

  .vh-content-wrap--end {
    justify-content: flex-end;
  }

  .vh-content-wrap--center .vh-content {
    align-items: center;
  }

  .vh-content-wrap--center .vh-actions {
    justify-content: center;
  }

  .vh-content {
    display: grid;
    gap: 1rem;
    width: min(100%, 36rem);
    justify-items: start;
  }

  .vh-badge {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0.28rem 0.85rem;
    border-radius: 999px;
    background: var(--accent-color, var(--fs-store-primary));
    color: #fff;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 22px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
  }

  .vh-title {
    margin: 0;
    font-size: clamp(1.75rem, 4.2vw, 3rem);
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #fff;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
  }

  .vh-desc {
    margin: 0;
    max-width: 34rem;
    font-size: clamp(0.92rem, 1.5vw, 1.05rem);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.86);
  }

  .vh-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 0.35rem;
  }

  .vh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border-radius: 999px;
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 0.2s ease, filter 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .vh-btn--primary {
    border: 1.5px solid transparent;
    background: var(--button-bg, var(--fs-store-primary));
    color: var(--button-color, #fff);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
  }

  .vh-btn--primary:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  .vh-btn--ghost {
    border: 1.5px solid rgba(255, 255, 255, 0.45);
    background: rgba(15, 23, 42, 0.35);
    color: #fff;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }

  .vh-btn--ghost:hover {
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(15, 23, 42, 0.5);
    transform: translateY(-1px);
  }

  .vh-below {
    padding: var(--space-mobile, 28px) var(--section-container-pad, 16px)
      var(--space-mobile-bottom, var(--space-mobile, 28px));
    max-width: var(--section-container-max, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 960px) {
    .vh-below {
      padding-top: var(--space-desktop, 48px);
      padding-bottom: var(--space-desktop-bottom, var(--space-desktop, 48px));
    }
  }

  @media (max-width: 639px) {
    .vh-stage {
      min-height: max(var(--vh-min-height, 72vh), 420px);
      align-items: end;
    }

    .vh-content-wrap {
      padding-bottom: 2rem;
    }

    .vh-overlay {
      background: linear-gradient(
        to top,
        rgba(8, 12, 20, 0.82) 0%,
        rgba(8, 12, 20, 0.45) 48%,
        rgba(8, 12, 20, 0.2) 100%
      );
    }

    .vh-actions {
      width: 100%;
    }

    .vh-actions .vh-btn {
      flex: 1 1 calc(50% - 0.35rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vh-btn {
      transition: none !important;
    }

    .vh-btn:hover {
      transform: none;
    }
  }
`;
