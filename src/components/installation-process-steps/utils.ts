import {
  extractImageUrl,
  extractLink,
  normalizeCollection,
  sortByOrder,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { ProcessStep } from './types.js';

export function parseSteps(raw: unknown): ProcessStep[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `step-${i + 1}`,
        title,
        desc: localizedString(row.desc as LocaleValue) || localizedString(row.description as LocaleValue),
        duration: localizedString(row.duration as LocaleValue),
        image: extractImageUrl(row.image),
        videoUrl: extractLink(row.video_url) || extractLink(row.video),
        order: toNumber(row.order, i + 1),
      } satisfies ProcessStep;
    })
    .filter((step) => step.title);

  const sorted = sortByOrder(parsed, 'order');
  return sorted.length ? sorted : defaultSteps();
}

function defaultSteps(): ProcessStep[] {
  return [
    {
      id: 'inspect',
      title: t('فحص السيارة', 'Vehicle inspection'),
      desc: t('فحص شامل قبل البدء للتأكد من سلامة القطعة والمركبة.', 'Full check before starting to confirm part and vehicle condition.'),
      duration: t('15–20 د', '15–20 min'),
      image: '',
      videoUrl: '',
      order: 1,
    },
    {
      id: 'identify',
      title: t('تحديد القطعة', 'Identify the part'),
      desc: t('مطابقة رقم القطعة مع دليل قطع السيارة.', 'Match part number with vehicle catalog.'),
      duration: t('10 د', '10 min'),
      image: '',
      videoUrl: '',
      order: 2,
    },
    {
      id: 'remove',
      title: t('فك الجزء القديم', 'Remove old component'),
      desc: t('فك آمن مع اتباع تعليمات المصنع.', 'Safe removal following manufacturer guidance.'),
      duration: t('30–45 د', '30–45 min'),
      image: '',
      videoUrl: '',
      order: 3,
    },
    {
      id: 'install',
      title: t('التركيب', 'Installation'),
      desc: t('تركيب القطعة الجديدة وضبط عزم الربط.', 'Install new part and torque to spec.'),
      duration: t('45–60 د', '45–60 min'),
      image: '',
      videoUrl: '',
      order: 4,
    },
    {
      id: 'test',
      title: t('الاختبار', 'Testing'),
      desc: t('اختبار تشغيلي وقيادة قصيرة عند الحاجة.', 'Functional test and short road test if needed.'),
      duration: t('15 د', '15 min'),
      image: '',
      videoUrl: '',
      order: 5,
    },
    {
      id: 'handover',
      title: t('التسليم', 'Handover'),
      desc: t('شرح للعميل وتوثيق الضمان.', 'Customer briefing and warranty documentation.'),
      duration: t('10 د', '10 min'),
      image: '',
      videoUrl: '',
      order: 6,
    },
  ];
}

export function progressPercent(activeIndex: number, total: number): number {
  if (total <= 1) return 100;
  return Math.round((activeIndex / (total - 1)) * 100);
}
