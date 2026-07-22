function i(n) {
  return String(n ?? "").replace(/\D+/g, "");
}
function o(n, e = "966") {
  let t = i(n);
  return t ? (t.startsWith("00") && (t = t.slice(2)), t.startsWith("0") && t.length >= 9 && (t = `${e}${t.slice(1)}`), t) : "";
}
function s(n, e) {
  const t = o(n);
  if (!t) return "";
  const r = encodeURIComponent(e.trim());
  return r ? `https://wa.me/${t}?text=${r}` : `https://wa.me/${t}`;
}
function u(n, e) {
  const t = s(n, e);
  return !t || typeof window > "u" ? !1 : (window.open(t, "_blank", "noopener,noreferrer"), !0);
}
export {
  s as b,
  u as o
};
