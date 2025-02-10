import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(
      {
        exclude: './src/assets/**',  // Wyklucz folder assets z przekształcania SVG na komponenty React
      }
    ),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias @ wskazuje na folder src
    },
  },
})
