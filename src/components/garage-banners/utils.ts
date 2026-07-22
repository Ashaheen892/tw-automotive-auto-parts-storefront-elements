import {
  extractImageUrl,
  extractLink,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { BannerItem } from './types.js';

const B1 =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80';
const B2 =
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80';
const B3 =
  'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80';

/** Keep Salla collection order as-is (no custom sort). */
export function parseBanners(raw: unknown): BannerItem[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => ({
      id: String(row.id ?? '').trim() || `banner-${i + 1}`,
      title: localizedString(row.title as LocaleValue),
      subtitle:
        localizedString(row.subtitle as LocaleValue) ||
        localizedString(row.desc as LocaleValue),
      image: extractImageUrl(row.image),
      link: extractLink(row.link) || extractLink(row.url),
      ctaLabel: localizedString(row.cta_label as LocaleValue) || t('تسوق الآن', 'Shop now'),
    }))
    .filter((b) => b.title || b.image);

  if (!parsed.length) return defaultBanners();
  const defaults = defaultBanners();
  return parsed.map((b, i) => ({
    ...b,
    image: b.image || defaults[i % defaults.length].image,
    title: b.title || defaults[i % defaults.length].title,
    subtitle: b.subtitle || defaults[i % defaults.length].subtitle,
    ctaLabel: b.ctaLabel || defaults[i % defaults.length].ctaLabel,
  }));
}

function defaultBanners(): BannerItem[] {
  return [
    {
      id: 'promo-1',
      title: t('عروض قطع الغيار', 'Parts deals'),
      subtitle: t('وفّر على زيوت وفلاتر أصلية', 'Save on genuine oils & filters'),
      image: B1,
      link: '',
      ctaLabel: t('تسوق الآن', 'Shop now'),
    },
    {
      id: 'promo-2',
      title: t('صيانة موسمية', 'Seasonal service'),
      subtitle: t('جهّز سيارتك قبل الرحلة', 'Prep your car before the trip'),
      image: B2,
      link: '',
      ctaLabel: t('اكتشف القطع', 'Browse parts'),
    },
    {
      id: 'promo-3',
      title: t('وصول حديث', 'Just arrived'),
      subtitle: t(
        'قطع جديدة متوافقة مع أغلب الموديلات',
        'New parts for popular models'
      ),
      image: B3,
      link: '',
      ctaLabel: t('شاهد الجديد', 'See new'),
    },
  ];
}
