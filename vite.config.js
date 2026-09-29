import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cafepossystem/', // 👈 हे असणे अत्यंत आवश्यक आहे
})
