// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://orcasharkz.github.io",
  base: "/orcashark",

  server: {
      open: true,
	},

  integrations: [mdx()],
});