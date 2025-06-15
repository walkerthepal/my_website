import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_website/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})