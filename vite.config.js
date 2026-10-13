import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Keep the original URLs working on static hosts, without server rewrites.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        ['index.html', 'pages/proyecto1.html', 'pages/juegos.html',
          'pages/proyecto3.html', 'pages/proyecto4.html'].map((path) => [
          path, fileURLToPath(new URL(path, import.meta.url)),
        ]),
      ),
    },
  },
});
