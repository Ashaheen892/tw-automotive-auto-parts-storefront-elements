import { extractImageUrl, extractLink, isTruthy } from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { CountdownParts } from './types.js';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80';

export function parseEndsAt(raw: unknown): Date | null {
  const str = localizedString(raw as LocaleValue).trim();
  if (!str) return null;
  const parsed = new Date(str);
  return Number.isFinite(parsed.getTime()) ? parsed : null;
}

export function getCountdown(target: Date, now = new Date()): CountdownParts {
  const totalMs = Math.max(0, target.getTime() - now.getTime());
  const totalSec = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, totalMs };
}

export function resolveOfferImage(config: Record<string, unknown>): string {
  return (
    extractImageUrl(config.lto_image) ||
    extractImageUrl(config.lto_media) ||
    DEFAULT_IMAGE
  );
}

export function resolveCtaLink(config: Record<string, unknown>): string {
  return extractLink(config.lto_cta_link) || extractLink(config.lto_link);
}

export function showTimerUnit(config: Record<string, unknown>, key: string, fallback = true): boolean {
  return isTruthy(config[key], fallback);
}

export function imageOnStart(config: Record<string, unknown>): boolean {
  const raw = String(config.lto_image_side || config.lto_media_side || 'end').toLowerCase();
  return raw === 'start' || raw === 'left' || raw === 'begin';
}
