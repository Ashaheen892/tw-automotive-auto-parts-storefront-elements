import {
  extractImageUrl,
  extractLink,
  itemIdFromLabel,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { BrandItem } from './types.js';

const DEFAULT_BRANDS: Array<{
  ar: string;
  en: string;
  image: string;
}> = [
  {
    ar: 'تويوتا',
    en: 'Toyota',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/200px-Toyota_carlogo.svg.png',
  },
  {
    ar: 'هيونداي',
    en: 'Hyundai',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png',
  },
  {
    ar: 'نيسان',
    en: 'Nissan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.svg/200px-Nissan_logo.svg.png',
  },
  {
    ar: 'كيا',
    en: 'Kia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia_logo.svg/200px-Kia_logo.svg.png',
  },
  {
    ar: 'فورد',
    en: 'Ford',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png',
  },
  {
    ar: 'شيفروليه',
    en: 'Chevrolet',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet_logo.svg/200px-Chevrolet_logo.svg.png',
  },
];

function defaultBrands(): BrandItem[] {
  return DEFAULT_BRANDS.map((b, i) => {
    const name = t(b.ar, b.en);
    return {
      id: itemIdFromLabel(name, '') || `brand-${i + 1}`,
      name,
      image: b.image,
      link: '',
    };
  });
}

export function parseBrands(raw: unknown): BrandItem[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name =
        localizedString(row.name as LocaleValue) ||
        localizedString(row.title as LocaleValue) ||
        localizedString(row.brand as LocaleValue);
      const image =
        extractImageUrl(row.image) ||
        extractImageUrl(row.logo) ||
        extractImageUrl(row.brand_image);
      if (!name && !image) return null;
      const label = name || t('ماركة', 'Brand');
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(label, '') ||
          `brand-${i + 1}`,
        name: label,
        image,
        link: extractLink(row.link) || extractLink(row.url),
      } satisfies BrandItem;
    })
    .filter((item): item is BrandItem => !!item);

  return parsed.length ? parsed : defaultBrands();
}
