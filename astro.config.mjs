// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://harmonybreath.com',
  trailingSlash: 'ignore',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
