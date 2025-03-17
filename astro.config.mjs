import { defineConfig, passthroughImageService } from 'astro/config'

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kavicastelo-dev.netlify.app',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
  }
});