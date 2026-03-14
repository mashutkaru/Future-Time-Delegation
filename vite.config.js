import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Use relative paths so the build works when opening index.html directly (file://)
  plugins: [react()]
})
