import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://orcasharkz.github.io",
	base: "/orcashark",
	integrations: [sitemap()],
});
