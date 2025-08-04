import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: './',
  
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        products: resolve(__dirname, 'src/products.html'),
        facility: resolve(__dirname, 'src/facility.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },
  
  server: {
    port: 4200,
    open: true,
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        // Enable modern API for Sass to avoid deprecation warnings
        api: 'modern-compiler',
      },
    },
  },
  
  // Handle assets like images
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.ico'],
});