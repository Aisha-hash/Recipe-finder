import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define the process.env.BACKEND_URL which can be used in your code
    'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'http://localhost:3001'),
  }
})
