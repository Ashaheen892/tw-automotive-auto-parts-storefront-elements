import {
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
import type { CategoryItem, CategoryLayout } from './types.js';

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
] as const;

const DEFAULT_META = [
  {
    ar: 'زيوت ومحركات',
    en: 'Oil & Engines',
    dar: 'زيوت، فلاتر زيت، وإضافات المحرك',
    den: 'Oils, oil filters, and engine additives',
  },
  {
    ar: 'فرامل',
    en: 'Brakes',
    dar: 'فحمات، أقراص، ووسائل فرامل',
    den: 'Pads, rotors, and brake fluid',
  },
  {
    ar: 'فلاتر',
    en: 'Filters',
    dar: 'هواء، وقود، ومكيف',
    den: 'Air, fuel, and cabin filters',
  },
  {
    ar: 'بطاريات',
    en: 'Batteries',
    dar: 'بطاريات وشواحن',
    den: 'Batteries and chargers',
  },
  {
    ar: 'قطع أصلية لسيارتك',
    en: 'Genuine parts for your car',
    dar: 'نساعدك تختار القطعة المناسبة بسرعة وثقة',
    den: 'Find the right part quickly and confidently',
  },
] as const;

function defaultCategories(): CategoryItem[] {
  return DEFAULT_META.map((m, i) => {
    const title = t(m.ar, m.en);
    return {
      id: itemIdFromLabel(title, '') || `cat-${i + 1}`,
      title,
      desc: t(m.dar, m.den),
      image: SAMPLE_IMAGES[i] || '',
      link: '',
    };
  });
}

/** Keep Salla collection order as-is (no custom sort). */
export function parseCategories(raw: unknown): CategoryItem[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title =
        localizedString(row.title as LocaleValue) ||
        localizedString(row.name as LocaleValue);
      if (!title) return null;
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(title, '') ||
          `cat-${i + 1}`,
        title,
        desc:
          localizedString(row.desc as LocaleValue) ||
          localizedString(row.description as LocaleValue) ||
          localizedString(row.subtitle as LocaleValue),
        image: extractImageUrl(row.image) || extractImageUrl(row.thumbnail),
        link: extractLink(row.link) || extractLink(row.url),
      } satisfies CategoryItem;
    })
    .filter((item): item is CategoryItem => !!item);

  return parsed.length ? parsed : defaultCategories();
}

export function resolveLayout(config: Record<string, unknown>): CategoryLayout {
  const raw = getRadioValue(config.pca_layout, 'projects').toLowerCase();
  if (raw === 'slider') return 'slider';
  if (raw === 'grid') return 'grid';
  if (raw === 'showcase' || raw === 'mosaic' || raw === 'center') return 'showcase';
  if (raw === 'projects' || raw === 'project' || raw === 'side') return 'projects';
  return 'projects';
}

export function showLayoutToggle(config: Record<string, unknown>): boolean {
  return isTruthy(config.pca_show_layout_toggle, false);
}

export function resolveColumns(config: Record<string, unknown>): number {
  const n = toNumber(config.pca_columns, 3);
  return Math.max(2, Math.min(6, n || 3));
}

export function monogram(title: string): string {
  const clean = title.trim();
  if (!clean) return '•';
  return clean.slice(0, 1);
}

/** First 5 items feed the mosaic; leftover continue in a regular grid. */
export function splitShowcaseItems(items: CategoryItem[]): {
  mosaic: CategoryItem[];
  rest: CategoryItem[];
} {
  if (items.length <= 5) return { mosaic: items, rest: [] };
  return { mosaic: items.slice(0, 5), rest: items.slice(5) };
}

/**
 * Projects layout: first 4 = 2×2 stack, 5th = tall feature card.
 * Extra items continue below.
 */
export function splitProjectsItems(items: CategoryItem[]): {
  stack: CategoryItem[];
  feature: CategoryItem | null;
  rest: CategoryItem[];
} {
  if (!items.length) return { stack: [], feature: null, rest: [] };
  if (items.length === 1) return { stack: [], feature: items[0], rest: [] };
  if (items.length <= 4) {
    return { stack: items.slice(0, -1), feature: items[items.length - 1], rest: [] };
  }
  return {
    stack: items.slice(0, 4),
    feature: items[4],
    rest: items.slice(5),
  };
}
