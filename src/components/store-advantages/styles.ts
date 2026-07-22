import { css } from 'lit';

export const componentStyles = css`
  .sta-shell {
    display: grid;
    gap: 1rem;
  }

  .sta-marquee {
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--section-radius, 20px) * 0.65);
    background: color-mix(in srgb, var(--card-bg, #fff) 88%, var(--border-color, #d9e2ec));
    border: 1px solid var(--border-color, #d9e2ec);
    padding-block: 1.1rem;
    mask-image: linear-gradient(
      to left,
      transparent 0%,
      #000 8%,
      #000 92%,
      transparent 100%
    );
  }

  .sta-track {
    display: flex;
    width: max-content;
    gap: 0.85rem;
    /* Keep motion direction stable regardless of page RTL. */
    direction: ltr;
    animation: sta-scroll var(--sta-speed, 35s) linear infinite;
    will-change: transform;
  }

  .sta-marquee:hover .sta-track {
    animation-play-state: paused;
  }

  .sta-brand,
  a.sta-brand {
    flex: 0 0 auto;
    display: grid;
    justify-items: center;
    gap: 0.45rem;
    min-width: 7.5rem;
    padding: 0.55rem 0.9rem;
    text-decoration: none;
    color: inherit;
    border-radius: calc(var(--section-radius, 20px) * 0.45);
    transition: background 0.15s ease, transform 0.15s ease;
  }

  a.sta-brand:hover {
    background: color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 8%, transparent);
    transform: translateY(-1px);
  }

  a.sta-brand:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color, var(--fs-store-primary)) 35%, transparent);
    outline-offset: 2px;
  }

  .sta-brand__logo {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: var(--card-bg, #fff);
    border: 1px solid var(--border-color, #d9e2ec);
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
  }

  .sta-brand__logo img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
  }

  .sta-brand__fallback {
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--accent-color, var(--fs-store-primary));
  }

  .sta-brand__name {
    margin: 0;
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-color, #111827);
    text-align: center;
    max-width: 7.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
    unicode-bidi: plaintext;
  }

  @keyframes sta-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 639px) {
    .sta-brand,
    a.sta-brand {
      min-width: 6.4rem;
      padding: 0.4rem 0.65rem;
    }

    .sta-brand__logo {
      width: 3.7rem;
      height: 3.7rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sta-track {
      animation: none !important;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }

    .sta-marquee {
      mask-image: none;
    }
  }
`;
