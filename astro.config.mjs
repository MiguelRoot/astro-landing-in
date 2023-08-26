import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  site: 'https://miguelroot.github.io',
  base: '/astro-landing-in',
});