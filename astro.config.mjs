import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      },
    },
  },
});
