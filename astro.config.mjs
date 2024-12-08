import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://www.lamediterraniajardineria.com",
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: netlify()
});