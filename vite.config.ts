import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/main.scss";`,
      },
    },
  },
  // console 제거 설정
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
