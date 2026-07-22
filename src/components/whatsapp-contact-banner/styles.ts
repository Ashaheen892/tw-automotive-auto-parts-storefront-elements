import { css } from 'lit';

export const componentStyles = css`
  .wcb-shell {
    display: grid;
    gap: 1rem;
  }

  .wcb-banner {
    position: relative;
    display: grid;
    gap: 1.1rem;
    justify-items: start;
    padding: clamp(1.35rem, 3vw, 1.9rem) clamp(1.25rem, 3vw, 2rem);
    border-radius: var(--section-radius, 20px);
    overflow: hidden;
    /* Fixed dark surface so light/dark page themes keep readable white text */
    --wcb-panel-bg: #0f172a;
    --wcb-panel-bg-2: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(
        90% 120% at 0% 100%,
        color-mix(in srgb, var(--accent-color, #25d366) 22%, transparent),
        transparent 55%
      ),
      linear-gradient(135deg, var(--wcb-panel-bg) 0%, var(--wcb-panel-bg-2) 100%);
    color: #fff;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);
  }

  :host([data-fs-theme='dark']) .wcb-banner {
    --wcb-panel-bg: #161b22;
    --wcb-panel-bg-2: #0d1117;
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  }

  .wcb-watermark {
    position: absolute;
    inset-inline-start: -1.5rem;
    bottom: -2.2rem;
    width: min(42%, 220px);
    height: auto;
    opacity: 0.14;
    color: #fff;
    pointer-events: none;
    z-index: 0;
  }

  .wcb-copy {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 0.55rem;
    max-width: 42rem;
  }

  .wcb-title {
    margin: 0;
    font-size: clamp(1.2rem, 2.4vw, 1.65rem);
    font-weight: 900;
    line-height: 1.35;
    color: #fff;
  }

  .wcb-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }

  .wcb-actions {
    position: relative;
    z-index: 1;
  }

  .wcb-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 46px;
    padding: 0.7rem 1.35rem;
    border: 1.5px solid transparent;
    border-radius: 999px;
    background: var(--button-bg, #25d366);
    color: var(--button-color, #fff);
    font: inherit;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.28);
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
  }

  .wcb-btn svg {
    width: 1.15rem;
    height: 1.15rem;
    flex-shrink: 0;
  }

  .wcb-btn:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  .wcb-btn:disabled,
  .wcb-btn--disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    filter: none;
    pointer-events: none;
  }

  .wcb-hint {
    margin: 0;
    font-size: 0.82rem;
    color: var(--muted-color, #64748b);
  }

  @media (max-width: 639px) {
    .wcb-banner {
      padding: 1.2rem 1.1rem 1.35rem;
    }

    .wcb-watermark {
      width: min(52%, 160px);
      opacity: 0.1;
    }

    .wcb-btn {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wcb-btn {
      transition: none !important;
    }

    .wcb-btn:hover {
      transform: none;
    }
  }
`;
