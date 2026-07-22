import {
  clamp,
  extractLink,
  getRadioValue,
  normalizeCollection,
  t,
  toNumber,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { HealthMeter, MeterDisplay, MeterStatus } from './types.js';

export function resolveDisplay(value: unknown): MeterDisplay {
  const raw = getRadioValue(value, 'circles').toLowerCase();
  return raw === 'bars' ? 'bars' : 'circles';
}

export function resolveStatus(raw: unknown, value: number): MeterStatus {
  const fromConfig = getRadioValue(raw, '').toLowerCase();
  if (fromConfig === 'excellent' || fromConfig === 'good' || fromConfig === 'check' || fromConfig === 'service') {
    return fromConfig;
  }
  if (value >= 85) return 'excellent';
  if (value >= 70) return 'good';
  if (value >= 45) return 'check';
  return 'service';
}

export function statusLabel(status: MeterStatus): string {
  const map: Record<MeterStatus, [string, string]> = {
    excellent: ['ممتاز', 'Excellent'],
    good: ['جيد', 'Good'],
    check: ['يحتاج فحص', 'Needs check'],
    service: ['صيانة مطلوبة', 'Service needed'],
  };
  const [ar, en] = map[status];
  return t(ar, en);
}

export function statusColor(status: MeterStatus): string {
  const map: Record<MeterStatus, string> = {
    excellent: '#16a34a',
    good: '#2563eb',
    check: '#ea580c',
    service: '#dc2626',
  };
  return map[status];
}

export function parseMeters(raw: unknown): HealthMeter[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name = localizedString(row.name as LocaleValue) || localizedString(row.title as LocaleValue);
      const value = clamp(toNumber(row.value, 0), 0, 100);
      return {
        id: String(row.id ?? '').trim() || `meter-${i + 1}`,
        name,
        value,
        status: resolveStatus(row.status, value),
        icon: String(row.icon ?? '').trim(),
        note: localizedString(row.note as LocaleValue),
        link: extractLink(row.link),
      } satisfies HealthMeter;
    })
    .filter((m) => m.name);

  return parsed.length ? parsed : defaultMeters();
}

function defaultMeters(): HealthMeter[] {
  return [
    { id: 'battery', name: t('البطارية', 'Battery'), value: 78, status: 'good', icon: '🔋', note: t('فحص دوري كل 6 أشهر.', 'Check every 6 months.'), link: '' },
    { id: 'tires', name: t('الإطارات', 'Tires'), value: 62, status: 'check', icon: '🛞', note: t('تآكل متوسط — راجع الضغط.', 'Moderate wear — check pressure.'), link: '' },
    { id: 'maintenance', name: t('الصيانة', 'Maintenance'), value: 55, status: 'check', icon: '🔧', note: t('اقترب موعد تغيير الزيت.', 'Oil change due soon.'), link: '' },
    { id: 'brakes', name: t('الفرامل', 'Brakes'), value: 88, status: 'excellent', icon: '🛑', note: t('أداء جيد.', 'Good performance.'), link: '' },
    { id: 'trip', name: t('جاهزية السفر', 'Trip readiness'), value: 72, status: 'good', icon: '🚗', note: t('جاهزة لرحلة قصيرة.', 'Ready for a short trip.'), link: '' },
  ];
}

export function circleDashOffset(value: number, radius = 42): number {
  const circumference = 2 * Math.PI * radius;
  return circumference - (value / 100) * circumference;
}
