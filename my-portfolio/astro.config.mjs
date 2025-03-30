import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your GitHub repository name
  base: '/',

  // Your GitHub Pages site
  site: 'https://lilmark0o.github.io',

  vite: {
    plugins: [tailwindcss()]
  }
});