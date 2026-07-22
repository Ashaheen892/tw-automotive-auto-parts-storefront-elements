import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

export function resolveStorePhone(config: Record<string, unknown>): string {
  return (
    localizedString(config.wcb_whatsapp_phone as LocaleValue) ||
    String(config.wcb_whatsapp_phone ?? '').trim()
  );
}

export function resolvePrefillMessage(config: Record<string, unknown>): string {
  return (
    localizedString(config.wcb_message as LocaleValue) ||
    localizedString(config.wcb_prefill as LocaleValue) ||
    ''
  );
}

export function resolveWhatsAppHref(config: Record<string, unknown>): string {
  const phone = resolveStorePhone(config);
  if (!phone) return '';
  return buildWhatsAppUrl(phone, resolvePrefillMessage(config));
}
