import { css } from 'lit';

export const componentStyles = css`
  .ips-shell {
    display: grid;
    gap: 1.15rem;
  }

  .ips-progress {
    display: grid;
    gap: 0.45rem;
  }

  .ips-track {
    display: flex;
    gap: 0.65rem;
    overflow-x: auto;
    padding-bottom: 0.35rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .ips-step-btn {
    flex: 0 0 auto;
    min-width: 140px;
    max-width: 200px;
    display: grid;
    gap: 0.35rem;
    padding: 0.75rem 0.85rem;
    border: 1px solid var(--border-color, #d9e2ec);
    border-radius: 14px;
    background: var(--card-bg, #fff);
    color: var(--text-color, #111827);
    font: inherit;
    text-align: start;
    cursor: pointer;
    scroll-snap-align: start;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  .ips-step-btn.is-active {
    border-color: var(--accent-color, var(--fs-store-primary));
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, var(--card-bg, #fff));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 22%, transparent);
  }

  .ips-step-btn__num {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--muted-color, #64748b);
    letter-spacing: 0.04em;
  }

  .ips-step-btn.is-active .ips-step-btn__num {
    color: var(--accent-color, var(--fs-store-primary));
  }

  .ips-step-btn__title {
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .ips-step-btn__dur {
    font-size: 0.75rem;
    color: var(--muted-color, #64748b);
  }

  /* Visual layout: image LEFT · text RIGHT (forced LTR columns) */
  .ips-detail {
    display: grid;
    gap: 0;
    border-radius: var(--section-radius, 20px);
    border: 1px solid var(--border-color, #d9e2ec);
    background: var(--card-bg, #fff);
    box-shadow: 0 14px 36px rgba(30, 41, 59, 0.08);
    overflow: hidden;
    direction: ltr;
  }

  .ips-detail--split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }

  .ips-detail--text-only {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  .ips-detail__media {
    position: relative;
    min-height: 240px;
    background:
      linear-gradient(
        145deg,
        color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 14%, #1e293b),
        #0f172a 70%
      );
  }

  .ips-detail__media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 240px;
    max-height: 360px;
    object-fit: cover;
  }

  .ips-detail__placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    gap: 0.55rem;
    justify-items: center;
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.88rem;
    font-weight: 700;
  }

  .ips-detail__placeholder-num {
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.35);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .ips-detail__copy {
    display: grid;
    align-content: center;
    gap: 0.65rem;
    padding: 1.35rem 1.4rem;
    text-align: start;
    direction: rtl;
    unicode-bidi: isolate;
  }

  :host-context(html[lang='en']) .ips-detail__copy,
  :host-context([lang='en']) .ips-detail__copy {
    direction: ltr;
  }

  .ips-detail__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    margin: 0;
  }

  .ips-detail__step-pill {
    display: inline-flex;
    align-items: center;
    min-height: 1.65rem;
    padding: 0.15rem 0.65rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 800;
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 12%, transparent);
    color: var(--accent-color, var(--fs-store-primary));
  }

  .ips-detail__dur {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--muted-color, #64748b);
  }

  .ips-detail__title {
    margin: 0;
    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
  }

  .ips-detail__desc {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: color-mix(in srgb, var(--text-color, #111827) 88%, var(--muted-color, #64748b));
  }

  .ips-detail__video {
    justify-self: start;
    margin-top: 0.25rem;
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--accent-color, var(--fs-store-primary));
    text-decoration: none;
  }

  .ips-detail__video:hover {
    text-decoration: underline;
  }

  .ips-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    justify-content: space-between;
  }

  .ips-vertical {
    display: none;
    gap: 0.65rem;
  }

  .ips-vertical .ips-step-btn {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 859px) {
    .ips-detail--split,
    .ips-detail--text-only {
      grid-template-columns: 1fr;
    }

    .ips-detail__media {
      min-height: 200px;
      order: -1;
    }

    .ips-detail__media img {
      min-height: 200px;
      max-height: 240px;
    }
  }

  @media (max-width: 639px) {
    .ips-track {
      display: none;
    }

    .ips-vertical {
      display: grid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ips-step-btn,
    .fs-progress__bar > span {
      transition: none !important;
    }
  }
`;
