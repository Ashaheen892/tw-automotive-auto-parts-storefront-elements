import {
  extractLink,
  isTruthy,
  itemIdFromLabel,
  normalizeCollection,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { MaintenanceMilestone, MilestoneStatus } from './types.js';

/** Split services from newline or comma-separated text. */
export function splitServices(raw: LocaleValue): string[] {
  const text = localizedString(raw, '');
  if (!text) return [];
  return text
    .split(/\r?\n|،|;|,/)
    .map((part) => part.trim())
    .filter(Boolean);
}

const DEFAULT_META = [
  {
    km: 5000,
    ar: 'صيانة 5,000 كم',
    en: '5,000 km service',
    services: [
      ['تغيير زيت المحرك', 'Engine oil change'],
      ['فحص الإطارات', 'Tire inspection'],
    ],
    noteAr: 'صيانة دورية أساسية.',
    noteEn: 'Basic routine service.',
  },
  {
    km: 10000,
    ar: 'صيانة 10,000 كم',
    en: '10,000 km service',
    services: [
      ['فلتر هواء', 'Air filter'],
      ['فلتر المكيف', 'AC filter'],
      ['تدوير الإطارات', 'Tire rotation'],
    ],
    noteAr: '',
    noteEn: '',
  },
  {
    km: 20000,
    ar: 'صيانة 20,000 كم',
    en: '20,000 km service',
    services: [
      ['فلتر وقود', 'Fuel filter'],
      ['فحص الفرامل', 'Brake inspection'],
      ['سائل فرامل', 'Brake fluid'],
    ],
    noteAr: '',
    noteEn: '',
  },
  {
    km: 40000,
    ar: 'صيانة 40,000 كم',
    en: '40,000 km service',
    services: [
      ['تغيير فحمات الفرامل', 'Brake pad replacement'],
      ['فحص التعليق', 'Suspension check'],
    ],
    noteAr: '',
    noteEn: '',
  },
  {
    km: 80000,
    ar: 'صيانة 80,000 كم',
    en: '80,000 km service',
    services: [
      ['تغيير الإطارات', 'Tire replacement'],
      ['فحص البطارية', 'Battery check'],
      ['سير المحرك', 'Engine belt'],
    ],
    noteAr: 'صيانة شاملة.',
    noteEn: 'Major service interval.',
  },
] as const;

function defaultMilestones(): MaintenanceMilestone[] {
  return DEFAULT_META.map((m, i) => ({
    id: `default-${i + 1}`,
    km: m.km,
    title: t(m.ar, m.en),
    services: m.services.map(([ar, en]) => t(ar, en)),
    icon: String(i + 1).padStart(2, '0'),
    link: '',
    note: m.noteAr || m.noteEn ? t(m.noteAr, m.noteEn) : '',
  }));
}

export function parseMilestones(raw: unknown): MaintenanceMilestone[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      const km = toNumber(row.km, 0);
      const servicesRaw = row.services;
      const services =
        typeof servicesRaw === 'string' || (servicesRaw && typeof servicesRaw === 'object')
          ? splitServices(servicesRaw as LocaleValue)
          : normalizeCollection(servicesRaw)
              .map((s) => localizedString(s.name as LocaleValue) || String(s.text ?? '').trim())
              .filter(Boolean);

      if (!km && !title) return null;

      const label = title || formatKm(km, t('كم', 'km'));
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(label, '') ||
          `mile-${i + 1}`,
        km,
        title: label,
        services,
        icon: String(row.icon ?? '').trim() || String(i + 1).padStart(2, '0'),
        link: extractLink(row.link),
        note: localizedString(row.note as LocaleValue),
      } satisfies MaintenanceMilestone;
    })
    .filter((m): m is NonNullable<typeof m> => !!m);

  const list = parsed.length ? parsed : defaultMilestones();
  return [...list].sort((a, b) => a.km - b.km);
}

export function formatKm(km: number, unitLabel: string): string {
  const formatted = Number.isFinite(km) ? km.toLocaleString() : '0';
  return unitLabel ? `${formatted} ${unitLabel}` : formatted;
}

export function showOdometer(config: Record<string, unknown>): boolean {
  return isTruthy(config.mmt_show_odometer, true);
}

export function milestoneStatus(
  milestone: MaintenanceMilestone,
  currentKm: number | null,
  dueWindow = 1500
): MilestoneStatus {
  if (currentKm == null || !Number.isFinite(currentKm) || currentKm < 0) return 'neutral';
  if (milestone.km < currentKm - dueWindow) return 'done';
  if (Math.abs(milestone.km - currentKm) <= dueWindow || milestone.km <= currentKm) return 'due';
  return 'upcoming';
}

export function progressPercent(milestones: MaintenanceMilestone[], currentKm: number | null): number {
  if (!milestones.length || currentKm == null || !Number.isFinite(currentKm)) return 0;
  const max = milestones[milestones.length - 1]?.km || 1;
  return Math.max(0, Math.min(100, (currentKm / max) * 100));
}

export function nearestMilestoneId(
  milestones: MaintenanceMilestone[],
  currentKm: number
): string {
  if (!milestones.length) return '';
  let best = milestones[0];
  let bestDist = Math.abs(best.km - currentKm);
  for (const m of milestones) {
    const dist = Math.abs(m.km - currentKm);
    if (dist < bestDist) {
      best = m;
      bestDist = dist;
    }
  }
  return best.id;
}

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}

export function pinLabel(milestone: MaintenanceMilestone, index: number): string {
  const raw = String(milestone.icon || '').trim();
  if (raw && raw.length <= 3 && !/\p{Extended_Pictographic}/u.test(raw)) return raw;
  return String(index + 1).padStart(2, '0');
}
