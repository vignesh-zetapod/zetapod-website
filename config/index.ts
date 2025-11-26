import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Zetapod - Your pod for next-Gen innovation",
  description: "Welcome to Zetapod, where engineering brilliance meets creative imagination. We build innovative software solutions that redefine the future. Join us on a journey to unlock new frontiers of opportunity.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Zetapod",
    url: "https://zetapod.in",
  },
} as const;
