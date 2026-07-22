/** Build a WhatsApp click-to-chat URL with a prefilled message. */

export function digitsOnlyPhone(raw: unknown): string {
  return String(raw ?? '').replace(/\D+/g, '');
}

/**
 * Accepts local SA numbers (05xxxxxxxx) or international (9665…).
 * Returns digits suitable for wa.me (country code without +).
 */
export function normalizeWhatsAppPhone(raw: unknown, defaultCountry = '966'): string {
  let digits = digitsOnlyPhone(raw);
  if (!digits) return '';
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.startsWith('0') && digits.length >= 9) {
    digits = `${defaultCountry}${digits.slice(1)}`;
  }
  return digits;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const num = normalizeWhatsAppPhone(phone);
  if (!num) return '';
  const text = encodeURIComponent(message.trim());
  return text ? `https://wa.me/${num}?text=${text}` : `https://wa.me/${num}`;
}

export function openWhatsApp(phone: string, message: string): boolean {
  const url = buildWhatsAppUrl(phone, message);
  if (!url || typeof window === 'undefined') return false;
  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
}
