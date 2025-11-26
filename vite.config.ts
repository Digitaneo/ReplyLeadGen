import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures assets use relative paths (e.g., "./assets/...") instead of absolute paths ("/assets/...").
  // This makes the 'dist' folder deployable to any subdirectory on your hosting without breaking links.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});