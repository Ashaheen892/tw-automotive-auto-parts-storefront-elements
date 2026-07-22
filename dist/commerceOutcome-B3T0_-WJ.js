import { nothing as s, html as l } from "lit";
import { e as f, d as u, t as m, l as $, i } from "./registerSalla-Dct4KN_E.js";
function h(e, c, t) {
  if (e && typeof e == "object" && "config" in e && "prefix" in e) {
    const a = e;
    return {
      ...a,
      config: a.config || {},
      prefix: a.prefix || ""
    };
  }
  return {
    ...t && !Array.isArray(t) ? t : {},
    config: e || {},
    prefix: c || ""
  };
}
function _(e, c, t = {}) {
  const r = (t.href || "").trim() || f(e[`${c}result_link`] ?? e[`${c}cta_link`]) || "/", a = $(e[`${c}cta_label`], "").trim() || m("تسوق الآن", "Shop now"), n = ["fs-btn", "fs-tap", t.className || ""].filter(Boolean).join(" ");
  return l`<a
    class=${n}
    href=${r}
    target=${i(r) ? "_blank" : s}
    rel=${i(r) ? "noopener noreferrer" : s}
  >
    ${a}
  </a>`;
}
function b(e, c, t) {
  const r = h(e, c, t), a = r.config || {}, n = r.prefix || "";
  if (r.ready === !1) return s;
  const o = f(
    a[`${n}result_link`] ?? a[`${n}cta_link`]
  );
  return u(a[`${n}show_cta`], !!o) && !!o ? l`
    <aside class="fs-commerce" aria-label=${m("التسوق", "Shopping")}>
      <div class="fs-commerce__actions">
        ${_(a, n, {
    className: r.className || "fs-commerce__cta",
    href: r.href
  })}
      </div>
    </aside>
  ` : s;
}
export {
  b as r
};
