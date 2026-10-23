// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mingxiaoxin1314-max.github.io',
  base: '/jichangtuijian',
  output: 'static',
  integrations: [tailwind()],
});
