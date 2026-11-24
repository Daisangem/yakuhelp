import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],

  base: '/',

  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },

  build: {
    outDir: '../server/wwwroot',
    emptyOutDir: true,
    manifest: true
  }
})
