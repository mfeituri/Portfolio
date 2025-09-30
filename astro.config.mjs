import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/Portfolio/',
  output: 'static',
  integrations: [tailwind()],
});
