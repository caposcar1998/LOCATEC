import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  server: {
    host: true,
    port: 8080,
    https: true
  },
  plugins: [react(), mkcert()]
})
