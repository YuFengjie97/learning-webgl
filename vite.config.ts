import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), glsl()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@public': resolve(__dirname, 'public')
    }
  }
})
