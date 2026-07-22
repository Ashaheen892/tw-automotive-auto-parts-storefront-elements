import { extractImageUrl, normalizeCollection, t } from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { BeforeAfterPair } from './types.js';

const BEFORE =
  'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1000&q=80';
const AFTER =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80';
const BEFORE2 =
  'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80';
const AFTER2 =
  'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80';

/** Keep Salla collection order as-is (no custom sort). */
export function parsePairs(raw: unknown): BeforeAfterPair[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => ({
      id: String(row.id ?? '').trim() || `pair-${i + 1}`,
      title: localizedString(row.title as LocaleValue),
      beforeImage: extractImageUrl(row.before_image),
      afterImage: extractImageUrl(row.after_image),
    }))
    .filter((p) => p.title || p.beforeImage || p.afterImage);

  if (!parsed.length) return defaultPairs();
  return parsed.map((p, i) => {
    const d = defaultPairs()[i % 2];
    return {
      ...p,
      beforeImage: p.beforeImage || d.beforeImage,
      afterImage: p.afterImage || d.afterImage,
      title: p.title || d.title,
    };
  });
}

export function defaultSingleImages(): { before: string; after: string } {
  return { before: BEFORE, after: AFTER };
}

function defaultPairs(): BeforeAfterPair[] {
  return [
    {
      id: 'detailing',
      title: t('تفصيل داخلي', 'Interior detailing'),
      beforeImage: BEFORE,
      afterImage: AFTER,
    },
    {
      id: 'engine',
      title: t('صيانة المحرك', 'Engine service'),
      beforeImage: BEFORE2,
      afterImage: AFTER2,
    },
  ];
}
