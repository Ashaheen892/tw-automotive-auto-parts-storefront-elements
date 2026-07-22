import {
  extractImageUrl,
  isTruthy,
  itemIdFromLabel,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { FeatureItem } from './types.js';

const DEFAULT_META = [
  {
    ar: 'أداء عالي',
    en: 'High performance',
    dar: 'توازن مثالي بين القوة والكفاءة في ظروف القيادة اليومية.',
    den: 'Balanced power and efficiency for everyday driving.',
    icon: '01',
  },
  {
    ar: 'متانة طويلة',
    en: 'Long durability',
    dar: 'مواد مقاومة للحرارة والاهتزاز لإطالة عمر القطعة.',
    den: 'Heat- and vibration-resistant materials for longer life.',
    icon: '02',
  },
  {
    ar: 'تركيب سهل',
    en: 'Easy install',
    dar: 'تصميم متوافق مع المقاسات الشائعة لتثبيت أسرع.',
    den: 'Compatible sizing for faster, cleaner installation.',
    icon: '03',
  },
  {
    ar: 'أمان أعلى',
    en: 'Better safety',
    dar: 'اختبارات جودة تضمن ثباتًا أفضل أثناء الاستخدام.',
    den: 'Quality checks that support more stable performance.',
    icon: '04',
  },
  {
    ar: 'توفير في الصيانة',
    en: 'Lower upkeep',
    dar: 'يقلل الحاجة للاستبدال المتكرر ويحافظ على سيارتك.',
    den: 'Helps reduce frequent replacements and protect the vehicle.',
    icon: '05',
  },
  {
    ar: 'توافق واسع',
    en: 'Wide fitment',
    dar: 'يناسب مجموعة كبيرة من الماركات والموديلات الشائعة.',
    den: 'Fits a wide range of popular brands and models.',
    icon: '06',
  },
] as const;

function defaultFeatures(): FeatureItem[] {
  return DEFAULT_META.map((m, i) => {
    const title = t(m.ar, m.en);
    return {
      id: itemIdFromLabel(title, '') || `feat-${i + 1}`,
      title,
      desc: t(m.dar, m.den),
      icon: m.icon,
      iconImage: '',
    };
  });
}

export function parseFeatures(raw: unknown): FeatureItem[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title =
        localizedString(row.title as LocaleValue) ||
        localizedString(row.name as LocaleValue);
      if (!title) return null;
      const iconRaw = String(row.icon ?? '').trim();
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(title, '') ||
          `feat-${i + 1}`,
        title,
        desc:
          localizedString(row.desc as LocaleValue) ||
          localizedString(row.description as LocaleValue),
        icon: iconRaw || String(i + 1).padStart(2, '0'),
        iconImage: extractImageUrl(row.icon_image) || extractImageUrl(row.image),
      } satisfies FeatureItem;
    })
    .filter((x): x is NonNullable<typeof x> => !!x);

  return parsed.length ? parsed : defaultFeatures();
}

export function splitFeatures(items: FeatureItem[]): {
  start: FeatureItem[];
  end: FeatureItem[];
} {
  const mid = Math.ceil(items.length / 2);
  return {
    start: items.slice(0, mid),
    end: items.slice(mid),
  };
}

export function showConnectors(config: Record<string, unknown>): boolean {
  return isTruthy(config.pfs_show_connectors, true);
}
