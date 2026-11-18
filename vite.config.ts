import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativa para funcionar no GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react()]
})
