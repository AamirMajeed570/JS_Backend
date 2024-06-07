import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:3000', // Update this to your backend server address
        changeOrigin: true,
        secure: false,
      },
    }
  },
  plugins: [react()],
})
