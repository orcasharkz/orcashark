// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://orcasharkz.github.io",
  base: "/orcashark",

  server: {
      open: true,
    },

  integrations: [mdx(), sitemap()],
});