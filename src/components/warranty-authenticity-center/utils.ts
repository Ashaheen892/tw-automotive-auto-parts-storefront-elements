import {
  extractImageUrl,
  extractLink,
  getRadioValue,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { TrustItem, TrustLayout } from './types.js';

export function resolveLayout(value: unknown): TrustLayout {
  const raw = getRadioValue(value, 'tabs').toLowerCase();
  if (raw === 'accordion' || raw === 'cards') return raw;
  return 'tabs';
}

export function parseItems(raw: unknown): TrustItem[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `item-${i + 1}`,
        title,
        icon: String(row.icon ?? '').trim(),
        body: localizedString(row.body as LocaleValue) || localizedString(row.desc as LocaleValue),
        image: extractImageUrl(row.image),
        link: extractLink(row.link),
        linkLabel: localizedString(row.link_label as LocaleValue),
      } satisfies TrustItem;
    })
    .filter((item) => item.title);

  return parsed.length ? parsed : defaultItems();
}

function defaultItems(): TrustItem[] {
  return [
    {
      id: 'duration',
      title: t('مدة الضمان', 'Warranty duration'),
      icon: '📅',
      body: t('تختلف حسب نوع القطعة — الأصلي غالبًا 12–24 شهرًا.', 'Varies by part type — OEM often 12–24 months.'),
      image: '',
      link: '',
      linkLabel: '',
    },
    {
      id: 'coverage',
      title: t('ما يشمله الضمان', 'What is covered'),
      icon: '✅',
      body: t('عيوب التصنيع والأداء تحت الاستخدام العادي.', 'Manufacturing defects under normal use.'),
      image: '',
      link: '',
      linkLabel: '',
    },
    {
      id: 'replacement',
      title: t('شروط الاستبدال', 'Replacement terms'),
      icon: '🔄',
      body: t('فاتورة الشراء + فحص الورشة المعتمدة.', 'Purchase invoice + certified workshop inspection.'),
      image: '',
      link: '',
      linkLabel: '',
    },
    {
      id: 'source',
      title: t('مصدر القطعة', 'Part source'),
      icon: '🏭',
      body: t('نوضح مصدر كل فئة: أصلي، بديل معتمد، أو مجدد.', 'We disclose source for each category: OEM, certified aftermarket, or refurbished.'),
      image: '',
      link: '',
      linkLabel: '',
    },
    {
      id: 'certs',
      title: t('شهادات الاعتماد', 'Certifications'),
      icon: '📜',
      body: t('قطعنا المختارة تتوافق مع معايير الجودة المعترف بها.', 'Selected parts meet recognized quality standards.'),
      image: '',
      link: '',
      linkLabel: '',
    },
    {
      id: 'care',
      title: t('إرشادات الحفاظ على الضمان', 'Keeping warranty valid'),
      icon: '🛡️',
      body: t('التركيب في ورشة معتمدة والاحتفاظ بالفاتورة.', 'Professional installation and keeping your invoice.'),
      image: '',
      link: '',
      linkLabel: '',
    },
  ];
}
