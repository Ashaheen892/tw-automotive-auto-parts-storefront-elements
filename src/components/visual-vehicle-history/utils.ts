import {
  extractImageUrl,
  extractLink,
  getRadioValue,
  isTruthy,
  itemIdFromLabel,
  normalizeCollection,
  sortByOrder,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { HistoryEvent, HistoryLayout } from './types.js';

export function resolveLayout(value: unknown): HistoryLayout {
  const raw = getRadioValue(value, 'vertical').toLowerCase();
  return raw === 'horizontal' ? 'horizontal' : 'vertical';
}

export function showStats(config: Record<string, unknown>): boolean {
  return isTruthy(config.vvh_show_stats, true);
}

export function parseEvents(raw: unknown): HistoryEvent[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      if (!title) return null;
      const category =
        localizedString(row.tag as LocaleValue) ||
        localizedString(row.type as LocaleValue) ||
        localizedString(row.service_type as LocaleValue);
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(title, '') ||
          `event-${i + 1}`,
        date: localizedString(row.date as LocaleValue) || String(row.date ?? '').trim(),
        km: toNumber(row.km, 0),
        title,
        category,
        image: extractImageUrl(row.image),
        note: localizedString(row.note as LocaleValue),
        documentUrl: extractLink(row.document_url) || extractLink(row.document),
        nextService: localizedString(row.next_service as LocaleValue),
        order: toNumber(row.order, i + 1),
      } satisfies HistoryEvent;
    })
    .filter((e): e is NonNullable<typeof e> => !!e);

  const sorted = sortByOrder(parsed, 'order');
  return sorted.length ? sorted : defaultEvents();
}

function defaultEvents(): HistoryEvent[] {
  return [
    {
      id: 'oil',
      title: t('تغيير الزيت', 'Oil change'),
      date: t('مارس 2025', 'Mar 2025'),
      km: 45000,
      category: t('محرك', 'Engine'),
      image: '',
      note: t('زيت تخليقي 5W-30 مع فلتر جديد.', 'Synthetic 5W-30 oil with a new filter.'),
      documentUrl: '',
      nextService: t('50,000 كم', '50,000 km'),
      order: 1,
    },
    {
      id: 'battery',
      title: t('تبديل البطارية', 'Battery replacement'),
      date: t('يناير 2025', 'Jan 2025'),
      km: 42000,
      category: t('كهرباء', 'Electrical'),
      image: '',
      note: t('بطارية 70 أمبير مع ضمان سنتين.', '70Ah battery with 2-year warranty.'),
      documentUrl: '',
      nextService: '',
      order: 2,
    },
    {
      id: 'brakes',
      title: t('فحص الفرامل', 'Brake inspection'),
      date: t('نوفمبر 2024', 'Nov 2024'),
      km: 38000,
      category: t('فرامل', 'Brakes'),
      image: '',
      note: t('فحمات عند 60% — لا حاجة للاستبدال الآن.', 'Pads at 60% — no replacement needed yet.'),
      documentUrl: '',
      nextService: t('45,000 كم', '45,000 km'),
      order: 3,
    },
    {
      id: 'tires',
      title: t('تغيير الإطارات', 'Tire change'),
      date: t('سبتمبر 2024', 'Sep 2024'),
      km: 35000,
      category: t('إطارات', 'Tires'),
      image: '',
      note: t('أربعة إطارات صيفية جديدة.', 'Four new summer tires.'),
      documentUrl: '',
      nextService: t('تدوير عند 40,000 كم', 'Rotate at 40,000 km'),
      order: 4,
    },
    {
      id: 'service',
      title: t('الصيانة الدورية', 'Routine service'),
      date: t('يونيو 2024', 'Jun 2024'),
      km: 30000,
      category: t('دورية', 'Routine'),
      image: '',
      note: t('فحص شامل مع استبدال الفلاتر.', 'Full inspection with filter replacement.'),
      documentUrl: '',
      nextService: t('35,000 كم', '35,000 km'),
      order: 5,
    },
  ];
}

export function formatKm(km: number, unitLabel: string): string {
  if (!km) return '';
  const formatted = km.toLocaleString();
  return unitLabel ? `${formatted} ${unitLabel}` : formatted;
}

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}

export function latestEvent(events: HistoryEvent[]): HistoryEvent | null {
  return events[0] ?? null;
}

export function nextServiceHint(events: HistoryEvent[]): string {
  for (const event of events) {
    if (event.nextService.trim()) return event.nextService.trim();
  }
  return '';
}

export function uniqueCategories(events: HistoryEvent[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const event of events) {
    const cat = event.category.trim();
    if (!cat || seen.has(cat)) continue;
    seen.add(cat);
    out.push(cat);
  }
  return out;
}
