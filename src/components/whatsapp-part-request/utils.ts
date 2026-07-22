import { getRadioValue, isTruthy, t } from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import { buildWhatsAppUrl } from '../../utils/whatsapp.js';

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}

export function buildRequestMessage(input: {
  prefix: string;
  name: string;
  phone: string;
  vehicle: string;
  part: string;
  note: string;
  nameLabel: string;
  phoneLabel: string;
  vehicleLabel: string;
  partLabel: string;
  noteLabel: string;
}): string {
  return [
    input.prefix,
    input.name ? `${input.nameLabel}: ${input.name}` : '',
    input.phone ? `${input.phoneLabel}: ${input.phone}` : '',
    input.vehicle ? `${input.vehicleLabel}: ${input.vehicle}` : '',
    input.part ? `${input.partLabel}: ${input.part}` : '',
    input.note ? `${input.noteLabel}: ${input.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function resolveWhatsAppHref(
  config: Record<string, unknown>,
  message: string
): string {
  const phone =
    localizedString(config.wpr_whatsapp_phone as LocaleValue) ||
    String(config.wpr_whatsapp_phone ?? '').trim();
  return buildWhatsAppUrl(phone, message);
}

export { getRadioValue, isTruthy };
