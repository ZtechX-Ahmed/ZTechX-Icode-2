import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ ده اللي هيخلي الصور والروابط تشتغل بعد الرفع
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
