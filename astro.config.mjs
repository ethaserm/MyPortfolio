import { defineConfig } from 'astro/config';

// SITE and BASE are injected by the GitHub Pages workflow (.github/workflows/deploy.yml),
// so a custom domain later needs no code change. Defaults suit local dev.
export default defineConfig({
  site: process.env.SITE || 'https://ethaserm.github.io',
  base: process.env.BASE || '/',
});
