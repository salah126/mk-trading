import { c as n } from "./index-BmYXB-wq.js";
const s = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  k = n("chart-column", s);
const d = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  v = n("refresh-cw", d);
const l = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  M = n("rotate-ccw", l);
const h = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  S = n("target", h);
const u = [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }],
  ],
  I = n("trending-down", u);
const y = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  L = n("trending-up", y);
const f = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  N = n("triangle-alert", f),
  i = "khan_daily_signals",
  p = 10,
  g = ["KHAN-ZL28-2Q9F-Q426"];
function o() {
  return true;
}
function T() {
  const e = (localStorage.getItem("khan_license_validated") ?? "")
    .trim()
    .toUpperCase()
    .split("-");
  return e.length === 4 ? e[3] : "";
}
function a() {
  return new Date().toISOString().slice(0, 10);
}
function c() {
  try {
    const t = localStorage.getItem(i);
    if (!t) return { date: a(), count: 0 };
    const e = JSON.parse(t);
    return e.date !== a() ? { date: a(), count: 0 } : e;
  } catch {
    return { date: a(), count: 0 };
  }
}
function m(t) {
  localStorage.setItem(i, JSON.stringify(t));
}
function w(t) {
  if (o()) return 1 / 0;
  const e = t ?? r();
  return e === 0 ? 1 / 0 : Math.max(0, e - c().count);
}
function x(t) {
  if (o()) return !1;
  const e = t ?? r();
  return e === 0 ? !1 : c().count >= e;
}
function C() {
  const t = c();
  m({ date: t.date, count: t.count + 1 });
}
function r() {
  try {
    const t = localStorage.getItem("khan_signal_limit");
    if (t) {
      const e = parseInt(t, 10);
      if (!isNaN(e)) return e;
    }
  } catch {}
  return p;
}
function D(t) {
  localStorage.setItem("khan_signal_limit", String(t));
}
export {
  k as C,
  v as R,
  L as T,
  I as a,
  M as b,
  S as c,
  N as d,
  r as e,
  C as f,
  w as g,
  T as h,
  x as i,
  D as s,
};
