import {
  clamp,
  extractImageUrl,
  extractLink,
  getRadioValue,
  isTruthy,
  itemIdFromLabel,
  normalizeCollection,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { CarPart, DetailMode } from './types.js';

const DEFAULT_PARTS_META = [
  {
    ar: 'المحرك',
    en: 'Engine',
    x: 52,
    y: 38,
    dar: 'زيت، فلاتر، سير، وقطع التبريد.',
    den: 'Oil, filters, belts, and cooling parts.',
    tipAr: 'تحقق من مستوى الزيت شهريًا.',
    tipEn: 'Check oil level monthly.',
    icon: '01',
  },
  {
    ar: 'الإطارات',
    en: 'Tires',
    x: 18,
    y: 72,
    dar: 'إطارات، جنوط، وصمامات.',
    den: 'Tires, rims, and valves.',
    tipAr: 'افحص ضغط الإطارات أسبوعيًا.',
    tipEn: 'Check tire pressure weekly.',
    icon: '02',
  },
  {
    ar: 'الفرامل',
    en: 'Brakes',
    x: 78,
    y: 58,
    dar: 'أقراص، فحمات، وسائل فرامل.',
    den: 'Rotors, pads, and brake fluid.',
    tipAr: 'استبدل الفحمات عند سماع صوت صرير.',
    tipEn: 'Replace pads when you hear squealing.',
    icon: '03',
  },
  {
    ar: 'الإضاءة',
    en: 'Lights',
    x: 88,
    y: 28,
    dar: 'مصابيح أمامية، خلفية، وإشارات.',
    den: 'Headlights, taillights, and signals.',
    tipAr: 'نظّف عدسات المصابيح بانتظام.',
    tipEn: 'Clean headlight lenses regularly.',
    icon: '04',
  },
  {
    ar: 'المقصورة',
    en: 'Cabin',
    x: 48,
    y: 22,
    dar: 'فلاتر AC، مساحات، وإكسسوارات داخلية.',
    den: 'AC filters, wipers, and interior accessories.',
    tipAr: 'غيّر فلتر المكيف كل 10–15 ألف كم.',
    tipEn: 'Replace the AC filter every 10–15k km.',
    icon: '05',
  },
  {
    ar: 'الهيكل',
    en: 'Body',
    x: 50,
    y: 55,
    dar: 'صدامات، مرايا، وقطع خارجية.',
    den: 'Bumpers, mirrors, and exterior parts.',
    tipAr: 'افحص الصدمات الخفيفة مبكرًا.',
    tipEn: 'Inspect minor impacts early.',
    icon: '06',
  },
  {
    ar: 'التعليق',
    en: 'Suspension',
    x: 30,
    y: 62,
    dar: 'مساعدات، مقصات، ومجموعة التوجيه.',
    den: 'Shocks, arms, and steering components.',
    tipAr: 'انتبه لاهتزاز المقود عند السرعة.',
    tipEn: 'Watch for steering vibration at speed.',
    icon: '07',
  },
] as const;

function defaultParts(): CarPart[] {
  return DEFAULT_PARTS_META.map((p, i) => {
    const name = t(p.ar, p.en);
    return {
      id: itemIdFromLabel(name, '') || `default-${i + 1}`,
      name,
      x: p.x,
      y: p.y,
      title: name,
      desc: t(p.dar, p.den),
      icon: p.icon,
      link: '',
      image: '',
      tip: t(p.tipAr, p.tipEn),
    };
  });
}

export function parseParts(raw: unknown): CarPart[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name = localizedString(row.name as LocaleValue);
      const title = localizedString(row.title as LocaleValue) || name;
      if (!name && !title) return null;
      const label = title || name;
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(label, '') ||
          `part-${i + 1}`,
        name: name || title,
        x: clamp(toNumber(row.x, 50), 0, 100),
        y: clamp(toNumber(row.y, 50), 0, 100),
        title: label,
        desc: localizedString(row.desc as LocaleValue),
        icon: String(row.icon ?? '').trim() || String(i + 1).padStart(2, '0'),
        link: extractLink(row.link),
        image: extractImageUrl(row.image),
        tip: localizedString(row.tip as LocaleValue),
      } satisfies CarPart;
    })
    .filter((p): p is NonNullable<typeof p> => !!p);

  return parsed.length ? parsed : defaultParts();
}

export function resolveDetailMode(config: Record<string, unknown>): DetailMode {
  return getRadioValue(config.icpm_detail_mode, 'inline') === 'sheet' ? 'sheet' : 'inline';
}

export function showLegend(config: Record<string, unknown>): boolean {
  return isTruthy(config.icpm_show_legend, true);
}

export function defaultPartId(parts: CarPart[]): string {
  return parts[0]?.id ?? '';
}

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}
