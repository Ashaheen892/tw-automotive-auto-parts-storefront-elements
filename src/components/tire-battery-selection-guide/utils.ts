import { getRadioValue, normalizeCollection, t } from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { BatterySpec, GuideMode, ParsedTireCode, TirePart } from './types.js';

export function resolveMode(value: unknown): GuideMode {
  const raw = getRadioValue(value, 'both').toLowerCase();
  if (raw === 'tires' || raw === 'batteries') return raw;
  return 'both';
}

export function parseTireCode(raw: string): ParsedTireCode | null {
  const match = raw.trim().match(/^(\d{3})\/(\d{2})\s*([A-Z])\s*(\d{2})$/i);
  if (!match) return null;
  return {
    width: match[1],
    aspect: match[2],
    construction: match[3].toUpperCase(),
    rim: match[4],
    raw: raw.trim(),
  };
}

export function parseTireParts(raw: unknown, example: ParsedTireCode | null): TirePart[] {
  const fromConfig = normalizeCollection(raw)
    .map((row, i) => ({
      key: String(row.key ?? row.part ?? `part-${i + 1}`).trim(),
      label: localizedString(row.label as LocaleValue) || localizedString(row.name as LocaleValue),
      value: localizedString(row.value as LocaleValue),
      note: localizedString(row.note as LocaleValue) || localizedString(row.desc as LocaleValue),
    }))
    .filter((part) => part.label);

  if (fromConfig.length) return fromConfig;
  if (!example) {
    return [
      {
        key: 'width',
        label: t('العرض (مم)', 'Width (mm)'),
        value: '225',
        note: t('عرض نقطة التلامس مع الطريق', 'Tread contact width in millimeters'),
      },
      {
        key: 'aspect',
        label: t('نسبة الارتفاع', 'Aspect ratio'),
        value: '45%',
        note: t('ارتفاع الجانب كنسبة من العرض', 'Sidewall height as % of width'),
      },
      {
        key: 'construction',
        label: t('نوع الهيكل', 'Construction'),
        value: 'R',
        note: t('R = radial — الأكثر شيوعًا', 'R = radial — most common'),
      },
      {
        key: 'rim',
        label: t('قطر الجنط (inch)', 'Rim diameter'),
        value: '18"',
        note: t('يجب مطابقته مع جنط سيارتك', 'Must match your wheel size'),
      },
    ];
  }

  return [
    {
      key: 'width',
      label: t('العرض (مم)', 'Width (mm)'),
      value: example.width,
      note: t('عرض نقطة التلامس مع الطريق', 'Tread contact width in millimeters'),
    },
    {
      key: 'aspect',
      label: t('نسبة الارتفاع', 'Aspect ratio'),
      value: `${example.aspect}%`,
      note: t('ارتفاع الجانب كنسبة من العرض', 'Sidewall height as % of width'),
    },
    {
      key: 'construction',
      label: t('نوع الهيكل', 'Construction'),
      value: example.construction,
      note: t('R = radial — الأكثر شيوعًا', 'R = radial — most common'),
    },
    {
      key: 'rim',
      label: t('قطر الجنط (inch)', 'Rim diameter'),
      value: `${example.rim}"`,
      note: t('يجب مطابقته مع جنط سيارتك', 'Must match your wheel size'),
    },
  ];
}

export function parseBatterySpecs(raw: unknown): BatterySpec[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => ({
      id: String(row.id ?? '').trim() || `spec-${i + 1}`,
      label: localizedString(row.label as LocaleValue) || localizedString(row.name as LocaleValue),
      value: localizedString(row.value as LocaleValue),
      note: localizedString(row.note as LocaleValue) || localizedString(row.desc as LocaleValue),
    }))
    .filter((spec) => spec.label);

  return parsed.length ? parsed : defaultBatterySpecs();
}

function defaultBatterySpecs(): BatterySpec[] {
  return [
    {
      id: 'capacity',
      label: t('السعة (Ah)', 'Capacity (Ah)'),
      value: t('60–70 Ah', '60–70 Ah'),
      note: t('تناسب مع معظم السيارات المتوسطة', 'Fits most mid-size cars'),
    },
    {
      id: 'cca',
      label: t('أمبير التشغيل (CCA)', 'Cold cranking amps'),
      value: t('500–650 CCA', '500–650 CCA'),
      note: t('مهم في الأجواء الباردة', 'Important in cold climates'),
    },
    {
      id: 'size',
      label: t('المقاس', 'Size group'),
      value: t('مثل DIN 74 / L2', 'e.g. DIN 74 / L2'),
      note: t('يجب أن يدخل في حامل البطارية', 'Must fit battery tray'),
    },
    {
      id: 'terminal',
      label: t('اتجاه الأقطاب', 'Terminal layout'),
      value: t('يمين / يسار', 'Right / left'),
      note: t('تحقق من كابل السيارة', 'Check cable reach'),
    },
    {
      id: 'usage',
      label: t('نوع الاستخدام', 'Usage type'),
      value: t('SLI — تشغيل عادي', 'SLI — standard starting'),
      note: t('للسيارات بدون start-stop', 'For non start-stop vehicles'),
    },
    {
      id: 'climate',
      label: t('المناخ', 'Climate'),
      value: t('حرارة عالية / منخفضة', 'Hot / cold'),
      note: t('اختر بطارية مناسبة لمنطقتك', 'Pick battery rated for your region'),
    },
  ];
}

export function parseTireNotes(raw: unknown): string {
  return localizedString(raw as LocaleValue) ||
    t(
      'راجع دليل السيارة أو الملصق على باب السائق قبل الشراء. المقاس الصحيح يضمن الأمان والاقتصاد في الوقود.',
      'Check owner manual or driver door sticker before buying. Correct size ensures safety and fuel economy.'
    );
}
