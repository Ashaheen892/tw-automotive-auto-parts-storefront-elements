import {
  extractImageUrl,
  extractLink,
  getRadioValue,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { ConditionsLayout, DrivingCondition } from './types.js';

function splitLines(raw: LocaleValue): string[] {
  const text = localizedString(raw, '');
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function resolveLayout(value: unknown): ConditionsLayout {
  const raw = getRadioValue(value, 'cards').toLowerCase();
  return raw === 'tabs' ? 'tabs' : 'cards';
}

export function parseConditions(raw: unknown): DrivingCondition[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name = localizedString(row.name as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `cond-${i + 1}`,
        name,
        icon: String(row.icon ?? '').trim(),
        image: extractImageUrl(row.image),
        desc: localizedString(row.desc as LocaleValue) || localizedString(row.description as LocaleValue),
        checks: splitLines(row.checks as LocaleValue),
        parts: splitLines(row.parts as LocaleValue),
        maintenance: splitLines(row.maintenance as LocaleValue),
        prep: splitLines(row.prep as LocaleValue),
        link: extractLink(row.link),
      } satisfies DrivingCondition;
    })
    .filter((c) => c.name);

  return parsed.length ? parsed : defaultConditions();
}

function defaultConditions(): DrivingCondition[] {
  return [
    {
      id: 'heat',
      name: t('أجواء شديدة الحرارة', 'Extreme heat'),
      icon: '☀',
      image: '',
      desc: t('حرارة عالية تؤثر على التبريد والبطارية والإطارات.', 'High heat affects cooling, battery, and tires.'),
      checks: [t('درجة حرارة المحرك', 'Engine temperature'), t('ضغط الإطارات', 'Tire pressure'), t('سائل التبريد', 'Coolant level')],
      parts: [t('مبرد', 'Radiator'), t('ثرموستات', 'Thermostat'), t('بطارية', 'Battery')],
      maintenance: [t('فحص سائل التبريد', 'Check coolant'), t('تنظيف المكثف', 'Clean condenser')],
      prep: [t('ظل للسيارة', 'Park in shade'), t('فحص قبل السفر', 'Pre-trip check')],
      link: '',
    },
    {
      id: 'desert',
      name: t('طرق صحراوية', 'Desert roads'),
      icon: '🏜',
      image: '',
      desc: t('غبار رملي واهتزازات على طرق غير معبدة.', 'Dust and vibration on unpaved roads.'),
      checks: [t('فلتر الهواء', 'Air filter'), t('نظام التعليق', 'Suspension'), t('درع المحرك', 'Skid plate')],
      parts: [t('فلتر هواء', 'Air filter'), t('مساعدات', 'Shocks')],
      maintenance: [t('تنظيف الفلاتر', 'Clean filters'), t('فحص البراغي', 'Check fasteners')],
      prep: [t('ضغط إطارات مناسب', 'Proper tire pressure'), t('ماء وطوارئ', 'Water & emergency kit')],
      link: '',
    },
    {
      id: 'long-trip',
      name: t('سفر لمسافات طويلة', 'Long-distance travel'),
      icon: '🛣',
      image: '',
      desc: t('قيادة مستمرة لساعات — زيت، فرامل، وإطارات.', 'Hours of driving — oil, brakes, tires.'),
      checks: [t('زيت المحرك', 'Engine oil'), t('الفرامل', 'Brakes'), t('الإطارات', 'Tires')],
      parts: [t('زيت وفلاتر', 'Oil & filters'), t('مساحات', 'Wipers')],
      maintenance: [t('تغيير زيت قبل الرحلة', 'Pre-trip oil change'), t('فحص شامل', 'Full inspection')],
      prep: [t('ضغط إطارات', 'Tire pressure'), t('طقم إسعافات', 'Emergency kit')],
      link: '',
    },
    {
      id: 'city',
      name: t('قيادة داخل المدن', 'City driving'),
      icon: '🏙',
      image: '',
      desc: t('توقف وانطلاق متكرر — فرامل وبطارية.', 'Stop-and-go — brakes and battery.'),
      checks: [t('فرامل', 'Brakes'), t('بطارية', 'Battery'), t('تكييف', 'AC')],
      parts: [t('فحمات فرامل', 'Brake pads'), t('بطارية', 'Battery')],
      maintenance: [t('فحص الفرامل', 'Brake check'), t('تنظيف حساسات', 'Clean sensors')],
      prep: [t('فحص دوري', 'Routine check')],
      link: '',
    },
    {
      id: 'rain',
      name: t('طرق ممطرة', 'Rainy roads'),
      icon: '🌧',
      image: '',
      desc: t('انزلاق وتآكل — إطارات ومساحات وإضاءة.', 'Slip and wear — tires, wipers, lights.'),
      checks: [t('عمق مداس الإطار', 'Tread depth'), t('مساحات', 'Wipers'), t('أضواء', 'Lights')],
      parts: [t('إطارات', 'Tires'), t('مساحات', 'Wipers')],
      maintenance: [t('فحص الإطارات', 'Tire inspection'), t('تنظيف مصابيح', 'Clean lamps')],
      prep: [t('قيادة هادئة', 'Drive gently'), t('مسافة أمان', 'Safe distance')],
      link: '',
    },
    {
      id: 'daily',
      name: t('استخدام يومي مكثف', 'Heavy daily use'),
      icon: '🚗',
      image: '',
      desc: t('استخدام يومي مرتفع — صيانة أسرع.', 'High daily mileage — faster wear.'),
      checks: [t('زيت', 'Oil'), t('إطارات', 'Tires'), t('فرامل', 'Brakes')],
      parts: [t('زيت وفلاتر', 'Oil & filters'), t('إطارات', 'Tires')],
      maintenance: [t('جدول صيانة مختصر', 'Shortened service interval'), t('فحص أسبوعي', 'Weekly check')],
      prep: [t('سجل صيانة', 'Maintenance log')],
      link: '',
    },
  ];
}
