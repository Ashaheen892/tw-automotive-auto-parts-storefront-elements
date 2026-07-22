import {
  getRadioValue,
  isTruthy,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { ComparisonLayout, CriteriaKey, CriteriaRow, PartType } from './types.js';

export const CRITERIA_KEYS: CriteriaKey[] = [
  'quality',
  'lifespan',
  'warranty',
  'performance',
  'price',
  'usage',
];

const DEFAULT_LABELS: Record<CriteriaKey, { ar: string; en: string }> = {
  quality: { ar: 'الجودة', en: 'Quality' },
  lifespan: { ar: 'العمر الافتراضي', en: 'Lifespan' },
  warranty: { ar: 'الضمان', en: 'Warranty' },
  performance: { ar: 'الأداء', en: 'Performance' },
  price: { ar: 'السعر', en: 'Price' },
  usage: { ar: 'الاستخدام المناسب', en: 'Best usage' },
};

export function resolveLayout(value: unknown): ComparisonLayout {
  const raw = getRadioValue(value, 'table').toLowerCase();
  return raw === 'cards' ? 'cards' : 'table';
}

export function parseTypes(raw: unknown): PartType[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name = localizedString(row.name as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `type-${i + 1}`,
        name,
        badge: localizedString(row.badge as LocaleValue),
        quality: localizedString(row.quality as LocaleValue),
        lifespan: localizedString(row.lifespan as LocaleValue),
        warranty: localizedString(row.warranty as LocaleValue),
        performance: localizedString(row.performance as LocaleValue),
        price: localizedString(row.price as LocaleValue),
        usage: localizedString(row.usage as LocaleValue),
        highlight: isTruthy(row.highlight, false),
        color: String(row.color ?? '').trim(),
      } satisfies PartType;
    })
    .filter((item) => item.name);

  return parsed.length ? parsed : defaultTypes();
}

function defaultTypes(): PartType[] {
  return [
    {
      id: 'oem',
      name: t('أصلي', 'OEM / Original'),
      badge: t('موصى به', 'Recommended'),
      quality: t('عالية جدًا', 'Very high'),
      lifespan: t('طويل', 'Long'),
      warranty: t('12–24 شهر', '12–24 months'),
      performance: t('مطابق للمصنع', 'Factory match'),
      price: t('$$$', '$$$'),
      usage: t('سيارات جديدة والصيانة الدورية', 'New cars & scheduled service'),
      highlight: true,
      color: '#ea580c',
    },
    {
      id: 'premium-alt',
      name: t('بديل عالي الجودة', 'Premium aftermarket'),
      badge: t('قيمة ممتازة', 'Great value'),
      quality: t('عالية', 'High'),
      lifespan: t('طويل', 'Long'),
      warranty: t('12 شهر', '12 months'),
      performance: t('قريب من الأصلي', 'Near OEM'),
      price: t('$$', '$$'),
      usage: t('استبدال يومي بجودة موثوقة', 'Daily replacement with trusted quality'),
      highlight: false,
      color: '#2563eb',
    },
    {
      id: 'commercial',
      name: t('تجاري', 'Commercial'),
      badge: t('اقتصادي', 'Budget'),
      quality: t('متوسطة', 'Medium'),
      lifespan: t('متوسط', 'Medium'),
      warranty: t('3–6 أشهر', '3–6 months'),
      performance: t('كافٍ للاستخدام العادي', 'Adequate for normal use'),
      price: t('$', '$'),
      usage: t('سيارات قديمة أو استخدام محدود', 'Older cars or limited use'),
      highlight: false,
      color: '#64748b',
    },
    {
      id: 'refurb',
      name: t('مجدد', 'Refurbished'),
      badge: t('إعادة تأهيل', 'Refurb'),
      quality: t('متغيرة', 'Varies'),
      lifespan: t('قصير–متوسط', 'Short–medium'),
      warranty: t('3–12 شهر', '3–12 months'),
      performance: t('يعتمد على حالة القطعة', 'Depends on unit condition'),
      price: t('$–$$', '$–$$'),
      usage: t('عند توفر ميزانية محدودة', 'When budget is tight'),
      highlight: false,
      color: '#7c3aed',
    },
  ];
}

export function parseCriteriaRows(raw: unknown): CriteriaRow[] {
  const overrides = normalizeCollection(raw)
    .map((row) => {
      const key = String(row.key ?? row.criteria ?? '').trim() as CriteriaKey;
      const label = localizedString(row.label as LocaleValue) || localizedString(row.name as LocaleValue);
      return { key, label };
    })
    .filter((row): row is CriteriaRow => CRITERIA_KEYS.includes(row.key) && Boolean(row.label));

  if (overrides.length) {
    const map = new Map(overrides.map((r) => [r.key, r.label]));
    return CRITERIA_KEYS.map((key) => ({
      key,
      label: map.get(key) || t(DEFAULT_LABELS[key].ar, DEFAULT_LABELS[key].en),
    }));
  }

  return CRITERIA_KEYS.map((key) => ({
    key,
    label: t(DEFAULT_LABELS[key].ar, DEFAULT_LABELS[key].en),
  }));
}

export function getCellValue(type: PartType, key: CriteriaKey): string {
  return type[key] || '—';
}
