var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
function digitsOnlyPhone(raw) {
  return String(raw ?? "").replace(/\D+/g, "");
}
__name(digitsOnlyPhone, "digitsOnlyPhone");
function normalizeWhatsAppPhone(raw, defaultCountry = "966") {
  let digits = digitsOnlyPhone(raw);
  return digits ? (digits.startsWith("00") && (digits = digits.slice(2)), digits.startsWith("0") && digits.length >= 9 && (digits = `${defaultCountry}${digits.slice(1)}`), digits) : "";
}
__name(normalizeWhatsAppPhone, "normalizeWhatsAppPhone");
function buildWhatsAppUrl(phone, message) {
  const num = normalizeWhatsAppPhone(phone);
  if (!num) return "";
  const text = encodeURIComponent(message.trim());
  return text ? `https://wa.me/${num}?text=${text}` : `https://wa.me/${num}`;
}
__name(buildWhatsAppUrl, "buildWhatsAppUrl");
function openWhatsApp(phone, message) {
  const url = buildWhatsAppUrl(phone, message);
  return !url || typeof window > "u" ? !1 : (window.open(url, "_blank", "noopener,noreferrer"), !0);
}
__name(openWhatsApp, "openWhatsApp");
export {
  buildWhatsAppUrl as b,
  openWhatsApp as o
};
