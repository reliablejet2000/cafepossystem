import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // जर रिएक्ट असेल तर

export default defineConfig({
  plugins: [react()],
  base: '/cafepossystem/', // 👈 ही लाईन अचूकपणे जोडा
})
