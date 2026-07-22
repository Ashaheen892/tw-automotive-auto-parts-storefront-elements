import {
  extractLink,
  isTruthy,
  itemIdFromLabel,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { CompatibilityField, FormValues, SummaryChip } from './types.js';

export function parseCustomFields(raw: unknown): CompatibilityField[] {
  return normalizeCollection(raw)
    .map((row, i) => {
      const labelText = localizedString(row.label as LocaleValue);
      if (!labelText) return null;
      return {
        id:
          String(row.id ?? '').trim() ||
          itemIdFromLabel(labelText, '') ||
          `field-${i + 1}`,
        label: labelText,
        placeholder: localizedString(row.placeholder as LocaleValue),
        required: isTruthy(row.required, false),
      } satisfies CompatibilityField;
    })
    .filter((f): f is CompatibilityField => !!f);
}

export function parseTips(raw: unknown): string[] {
  if (typeof raw === 'string' || (raw && typeof raw === 'object' && !Array.isArray(raw))) {
    const text = localizedString(raw as LocaleValue, '');
    if (!text) return [];
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return normalizeCollection(raw)
    .map((row) => localizedString(row.tip as LocaleValue) || localizedString(row.text as LocaleValue))
    .filter(Boolean);
}

export function defaultTips(): string[] {
  return [
    t('طابق رقم القطعة مع كتالوج الشركة.', 'Match the part number to the OEM catalog.'),
    t('تأكد من سنة الصنع بدقة.', 'Confirm the exact model year.'),
    t('عند الشك تواصل مع الدعم.', 'Contact support if unsure.'),
  ];
}

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}

export function resolveCtaUrl(config: Record<string, unknown>): string {
  return extractLink(config.pcc_cta_url);
}

export function whatsappPhone(config: Record<string, unknown>): string {
  return String(config.pcc_whatsapp_phone ?? '').trim();
}

export function buildWhatsAppMessage(
  config: Record<string, unknown>,
  chips: SummaryChip[]
): string {
  const prefix =
    localizedString(config.pcc_whatsapp_prefix as LocaleValue) ||
    t(
      'أرغب في التحقق من توافق هذه القطعة مع سيارتي:',
      'I would like to verify this part fits my vehicle:'
    );
  const lines = chips.map((chip) => `• ${chip.label}: ${chip.value}`);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  return [prefix, ...lines, pageUrl ? `${t('الصفحة', 'Page')}: ${pageUrl}` : '']
    .filter(Boolean)
    .join('\n');
}

export function showField(config: Record<string, unknown>, key: string, fallback = true): boolean {
  return isTruthy(config[key], fallback);
}

export function buildSummaryChips(
  config: Record<string, unknown>,
  values: FormValues,
  customFields: CompatibilityField[]
): SummaryChip[] {
  const chips: SummaryChip[] = [];
  const push = (showKey: string, labelKey: string, ar: string, en: string, value: string) => {
    if (!showField(config, showKey, true) || !value.trim()) return;
    chips.push({ label: label(config, labelKey, ar, en), value: value.trim() });
  };

  push('pcc_show_brand', 'pcc_brand_label', 'الماركة', 'Brand', values.brand);
  push('pcc_show_model', 'pcc_model_label', 'الموديل', 'Model', values.model);
  push('pcc_show_year', 'pcc_year_label', 'سنة الصنع', 'Year', values.year);
  push('pcc_show_engine', 'pcc_engine_label', 'المحرك', 'Engine', values.engine);
  push('pcc_show_vin', 'pcc_vin_label', 'رقم الهيكل VIN', 'VIN', values.vin);
  push(
    'pcc_show_part_number',
    'pcc_part_number_label',
    'رقم القطعة',
    'Part number',
    values.partNumber
  );

  if (showField(config, 'pcc_show_custom_fields', false)) {
    customFields.forEach((f) => {
      const value = (values.custom[f.id] ?? '').trim();
      if (!value) return;
      chips.push({ label: f.label, value });
    });
  }

  return chips;
}
