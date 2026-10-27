import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://familly.app',
  base: '/blog',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});