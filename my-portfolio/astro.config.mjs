import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensures Astro generates static files
  base: '/portfolio/', // Important since your GitHub Pages is under /portfolio/
  site: 'https://lilmark0o.github.io', // Set your GitHub Pages URL
});
