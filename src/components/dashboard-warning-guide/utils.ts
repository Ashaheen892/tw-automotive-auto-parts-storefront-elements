import {
  extractImageUrl,
  extractLink,
  getRadioValue,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { DashboardWarning, WarningSeverity } from './types.js';

const SEVERITIES: WarningSeverity[] = ['low', 'medium', 'high', 'critical'];

function parseSeverity(raw: unknown): WarningSeverity {
  const value = getRadioValue(raw, 'medium').toLowerCase().trim();
  return SEVERITIES.includes(value as WarningSeverity) ? (value as WarningSeverity) : 'medium';
}

const DEFAULT_WARNINGS: Omit<DashboardWarning, 'id'>[] = [
  { name: t('زيت المحرك', 'Engine oil'), iconText: '🛢', image: '', meaning: t('ضغط الزيت منخفض أو مستشعر الزيت.', 'Low oil pressure or oil sensor alert.'), severity: 'high', action: t('أوقف السيارة وافحص مستوى الزيت.', 'Stop and check oil level.'), link: '', color: '#ea580c' },
  { name: t('البطارية', 'Battery'), iconText: '🔋', image: '', meaning: t('مشكلة في شحن البطارية أو الدينامو.', 'Charging system or battery issue.'), severity: 'medium', action: t('افحص البطارية والأسلاك.', 'Inspect battery and cables.'), link: '', color: '#eab308' },
  { name: t('ABS', 'ABS'), iconText: 'ABS', image: '', meaning: t('عطل في نظام الفرامل المانعة للانغلاق.', 'Anti-lock brake system fault.'), severity: 'high', action: t('قد بحرص وافحص الفرامل.', 'Drive carefully and inspect brakes.'), link: '', color: '#dc2626' },
  { name: t('درجة الحرارة', 'Temperature'), iconText: '🌡', image: '', meaning: t('ارتفاع حرارة المحرك.', 'Engine overheating.'), severity: 'critical', action: t('أوقف السيارة فورًا واتركها تبرد.', 'Stop immediately and let it cool.'), link: '', color: '#dc2626' },
  { name: t('ضغط الإطارات', 'Tire pressure'), iconText: '⛽', image: '', meaning: t('ضغط إطار أو أكثر غير مناسب.', 'One or more tires under/over pressure.'), severity: 'medium', action: t('اضبط ضغط الإطارات.', 'Adjust tire pressure.'), link: '', color: '#ea580c' },
  { name: t('فحص المحرك', 'Check engine'), iconText: '⚠', image: '', meaning: t('خلل في نظام المحرك أو الانبعاثات.', 'Engine or emissions system fault.'), severity: 'high', action: t('افحص السيارة في أقرب ورشة.', 'Have the vehicle diagnosed soon.'), link: '', color: '#f97316' },
];

export function parseWarnings(raw: unknown): DashboardWarning[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => ({
      id: String(row.id ?? '').trim() || `warn-${i + 1}`,
      name: localizedString(row.name as LocaleValue),
      iconText: String(row.icon_text ?? '').trim(),
      image: extractImageUrl(row.image),
      meaning: localizedString(row.meaning as LocaleValue),
      severity: parseSeverity(row.severity),
      action: localizedString(row.action as LocaleValue),
      link: extractLink(row.link),
      color: String(row.color ?? '').trim(),
    }))
    .filter((w) => w.name);

  if (parsed.length) return parsed;
  return DEFAULT_WARNINGS.map((w, i) => ({ id: `default-${i + 1}`, ...w }));
}

export function severityValueLabel(severity: WarningSeverity): string {
  const map: Record<WarningSeverity, string> = {
    low: t('منخفض', 'Low'),
    medium: t('متوسط', 'Medium'),
    high: t('مرتفع', 'High'),
    critical: t('حرج', 'Critical'),
  };
  return map[severity];
}

export function severityFieldLabel(config: Record<string, unknown>): string {
  return localizedString(config.dwg_severity_label as LocaleValue) || t('الخطورة', 'Severity');
}

export function severityClass(severity: WarningSeverity): string {
  if (severity === 'critical' || severity === 'high') return 'fs-pill--danger';
  if (severity === 'medium') return 'fs-pill--caution';
  return 'fs-pill--success';
}
