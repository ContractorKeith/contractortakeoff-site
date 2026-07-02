import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://contractortakeoff.ai",
  output: "static",
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
});
