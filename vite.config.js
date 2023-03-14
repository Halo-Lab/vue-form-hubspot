import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'FormVueTest',
      fileName: (format) => `vue-form-hubspot.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
