import {
  extractImageUrl,
  normalizeCollection,
  sortByOrder,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { JourneyStage } from './types.js';

export function parseStages(raw: unknown): JourneyStage[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `stage-${i + 1}`,
        title,
        desc: localizedString(row.desc as LocaleValue) || localizedString(row.description as LocaleValue),
        icon: String(row.icon ?? '').trim(),
        image: extractImageUrl(row.image),
        quality: localizedString(row.quality as LocaleValue),
        duration: localizedString(row.duration as LocaleValue),
        badge: localizedString(row.badge as LocaleValue),
        order: toNumber(row.order, i + 1),
      } satisfies JourneyStage;
    })
    .filter((stage) => stage.title);

  const sorted = sortByOrder(parsed, 'order');
  return sorted.length ? sorted : defaultStages();
}

function defaultStages(): JourneyStage[] {
  return [
    {
      id: 'sourcing',
      title: t('التوريد', 'Sourcing'),
      desc: t('اختيار موردين معتمدين وقطع أصلية أو بديلة موثوقة.', 'Selecting certified suppliers and trusted OEM or aftermarket parts.'),
      icon: '📦',
      image: '',
      quality: t('معيار الجودة: OEM', 'Quality: OEM grade'),
      duration: t('1–3 أيام', '1–3 days'),
      badge: t('أصلي', 'OEM'),
      order: 1,
    },
    {
      id: 'qc',
      title: t('فحص الجودة', 'Quality check'),
      desc: t('فحص بصري وتشغيلي قبل القبول في المخزون.', 'Visual and functional inspection before stock acceptance.'),
      icon: '🔍',
      image: '',
      quality: t('فحص 100%', '100% inspection'),
      duration: t('نفس اليوم', 'Same day'),
      badge: t('معتمد', 'Certified'),
      order: 2,
    },
    {
      id: 'storage',
      title: t('التخزين', 'Storage'),
      desc: t('تخزين في ظروف مناسبة لحماية القطعة.', 'Climate-controlled storage to protect the part.'),
      icon: '🏭',
      image: '',
      quality: t('بيئة محكمة', 'Controlled environment'),
      duration: t('حتى الشحن', 'Until shipping'),
      badge: '',
      order: 3,
    },
    {
      id: 'prep',
      title: t('التجهيز', 'Preparation'),
      desc: t('تغليف آمن وإرفاق ملصقات التوافق.', 'Secure packaging with compatibility labels.'),
      icon: '📋',
      image: '',
      quality: t('تغليف احترافي', 'Pro packaging'),
      duration: t('24 س', '24 h'),
      badge: '',
      order: 4,
    },
    {
      id: 'shipping',
      title: t('الشحن', 'Shipping'),
      desc: t('شحن سريع مع تتبع حتى بابك.', 'Fast shipping with tracking to your door.'),
      icon: '🚚',
      image: '',
      quality: t('تتبع مباشر', 'Live tracking'),
      duration: t('1–5 أيام', '1–5 days'),
      badge: t('سريع', 'Express'),
      order: 5,
    },
    {
      id: 'install',
      title: t('التركيب', 'Installation'),
      desc: t('دعم تركيب أو إرشادات خطوة بخطوة.', 'Install support or step-by-step guidance.'),
      icon: '🔧',
      image: '',
      quality: t('ورش معتمدة', 'Certified workshops'),
      duration: t('حسب القطعة', 'Varies'),
      badge: t('ضمان', 'Warranty'),
      order: 6,
    },
  ];
}
