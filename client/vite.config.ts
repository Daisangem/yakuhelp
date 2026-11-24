
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss()],

    base: '/static/',

    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true
            }
        }
    },

    build: {
        outDir: '../server/app/static',
        emptyOutDir: true,
        manifest: true
    }
})
