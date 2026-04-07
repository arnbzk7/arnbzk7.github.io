import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arnbzk7.github.io',
  integrations: [tailwindcss()],
});