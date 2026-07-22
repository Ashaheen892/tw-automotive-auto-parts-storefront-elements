import {
  extractImageUrl,
  extractLink,
  getRadioValue,
  isTruthy,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { VideoHeroAlign } from './types.js';

const DEFAULT_POSTER =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80';

export function resolveVideoUrl(config: Record<string, unknown>): string {
  const raw =
    localizedString(config.vh_video_url as LocaleValue) ||
    extractLink(config.vh_video_url) ||
    String(config.vh_video || '').trim();
  return raw.trim();
}

export function resolvePoster(config: Record<string, unknown>): string {
  return (
    extractImageUrl(config.vh_poster) ||
    extractImageUrl(config.vh_image) ||
    DEFAULT_POSTER
  );
}

export function isPlayableVideo(url: string): boolean {
  if (!url) return false;
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) return true;
  if (url.includes('video') && !/youtube|youtu\.be|vimeo/i.test(url)) return true;
  return false;
}

export function resolveAlign(config: Record<string, unknown>): VideoHeroAlign {
  const raw = getRadioValue(config.vh_align, 'start').toLowerCase();
  if (raw === 'center' || raw === 'middle') return 'center';
  if (raw === 'end' || raw === 'left') return 'end';
  return 'start';
}

export function resolveOverlayOpacity(config: Record<string, unknown>): number {
  const n = Number(config.vh_overlay_opacity ?? 45);
  if (!Number.isFinite(n)) return 0.45;
  return Math.max(0, Math.min(85, n)) / 100;
}

export function resolveMinHeight(config: Record<string, unknown>): string {
  const n = Number(config.vh_min_height ?? 72);
  if (!Number.isFinite(n) || n <= 0) return '72vh';
  return `${Math.max(40, Math.min(100, n))}vh`;
}

export function resolvePrimaryCta(config: Record<string, unknown>): {
  label: string;
  link: string;
} {
  return {
    label: localizedString(config.vh_primary_label as LocaleValue),
    link:
      extractLink(config.vh_primary_link) ||
      extractLink(config.vh_primary_url) ||
      String(config.vh_primary_url || '').trim(),
  };
}

export function resolveSecondaryCta(config: Record<string, unknown>): {
  label: string;
  link: string;
} {
  return {
    label: localizedString(config.vh_secondary_label as LocaleValue),
    link:
      extractLink(config.vh_secondary_link) ||
      extractLink(config.vh_secondary_url) ||
      String(config.vh_secondary_url || '').trim(),
  };
}

export function videoPlaybackFlags(config: Record<string, unknown>): {
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
} {
  const autoplay = isTruthy(config.vh_autoplay, true);
  // `vh_muted` is the theme's muted-text color; the sound toggle is `vh_video_muted`.
  return {
    autoplay,
    muted: isTruthy(config.vh_video_muted, true) || autoplay,
    loop: isTruthy(config.vh_loop, true),
  };
}
