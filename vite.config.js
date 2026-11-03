import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Сайт пользователя GitHub Pages (ник.github.io) живёт в корне домена, поэтому base = '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
