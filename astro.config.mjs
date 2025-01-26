import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://orcashark.com",
  trailingSlash: "always",
  build: {
    assets: "_shark",
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tiger.orcashark.com",
      },
    ],
  },
});
