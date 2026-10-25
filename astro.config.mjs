// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://mingxiaoxin1314-max.github.io',
  base: '/jichangtuijian',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4321,
  },
  preview: {
    host: true,
    port: 4321,
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go'),
    }),
  ],
});
