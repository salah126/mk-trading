import { c as r, h as c, b as l, j as e, L as n } from "./index-BmYXB-wq.js";

const d = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  h = r("circle-check", d),
  i = [
    {
      platform: "youtube",
      label: "YouTube",
      defaultHref: "https://youtube.com/@traderkaiserr?si=jC_02QBDr6RlxXrr",
      color: "#FF0000",
      icon: e.jsx("svg", {
        "data-hercules-id": "src/components/PageFooter.tsx:12:6",
        "data-hercules-name": "svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-5 h-5",
        children: e.jsx("path", {
          "data-hercules-id": "src/components/PageFooter.tsx:13:8",
          "data-hercules-name": "path",
          d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        }),
      }),
    },
    {
      platform: "telegram",
      label: "Telegram",
      defaultHref: "https://t.me/kaiserteam0",
      color: "#229ED9",
      icon: e.jsx("svg", {
        "data-hercules-id": "src/components/PageFooter.tsx:23:6",
        "data-hercules-name": "svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-5 h-5",
        children: e.jsxs(e.Fragment, {
          children: [
            e.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
            e.jsx("path", { d: "M22 2 11 13v8l3-3" }),
          ],
        }),
      }),
    },
    {
      platform: "tiktok",
      label: "TikTok",
      defaultHref:
        "https://www.tiktok.com/@kaisertrades5?_r=1&_t=ZS-96CGLtK4ND6",
      color: "#000000",
      icon: e.jsx("svg", {
        "data-hercules-id": "src/components/PageFooter.tsx:34:6",
        "data-hercules-name": "svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-5 h-5",
        children: e.jsx("path", {
          "data-hercules-id": "src/components/PageFooter.tsx:35:8",
          "data-hercules-name": "path",
          d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.63 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
        }),
      }),
    },
    {
      platform: "telegram_support",
      label: "Support",
      defaultHref: "https://t.me/kayserspoort2",
      color: "#229ED9",
      icon: e.jsx("svg", {
        "data-hercules-id": "src/components/PageFooter.tsx:45:6",
        "data-hercules-name": "svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-5 h-5",
        children: e.jsxs(e.Fragment, {
          children: [
            e.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
            e.jsx("path", { d: "M22 2 11 13v8l3-3" }),
          ],
        }),
      }),
    },
  ];

function p() {
  const s = new Date().getFullYear(),
    o = c(l.adminQueries.getSocialLinks),
    t = {};
  for (const a of o ?? []) t[a.platform] = a.url;

  return e.jsxs("div", {
    "data-hercules-id": "src/components/PageFooter.tsx:63:4",
    "data-hercules-name": "div",
    className: "w-full text-center py-2 px-4 mt-3 border-t",
    style: { borderColor: "#f8bbd0" },
    children: [
      e.jsx("div", {
        "data-hercules-id": "src/components/PageFooter.tsx:65:6",
        "data-hercules-name": "div",
        className: "flex justify-center gap-5 mb-2 pt-2",
        children: i.map((a) =>
          e.jsx(
            "a",
            {
              "data-hercules-id": "src/components/PageFooter.tsx:67:10",
              "data-hercules-name": "a",
              href: a.defaultHref,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": a.label,
              className:
                "w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer",
              style: {
                background: a.color,
                color: "white",
                boxShadow: `0 2px 8px ${a.color}55`,
              },
              children: a.icon,
            },
            a.platform,
          ),
        ),
      }),
      e.jsx("p", {
        "data-hercules-id": "src/components/PageFooter.tsx:80:6",
        "data-hercules-name": "p",
        className: "text-[11px] font-semibold mb-3",
        style: { color: "#e57373" },
        children: "⚠ For Educational Purposes Only",
      }),
      null,
      e.jsx("div", {
        "data-hercules-id": "src/components/PageFooter.tsx:102:6",
        "data-hercules-name": "div",
        className: "w-12 mx-auto border-t mb-2",
        style: { borderColor: "#f8bbd0" },
      }),
      e.jsxs("p", {
        "data-hercules-id": "src/components/PageFooter.tsx:103:6",
        "data-hercules-name": "p",
        className: "text-[11px] font-semibold pb-2",
        style: { color: "#c2185b" },
        children: ["© ", s, " Kiser Data Provider - All Rights Reserved."],
      }),
    ],
  });
}
export { h as C, p as P };
