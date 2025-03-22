import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensures Astro generates static files
  base: '/portfolio/', // Your GitHub repository name
  site: 'https://lilmark0o.github.io', // Your GitHub Pages site
});
