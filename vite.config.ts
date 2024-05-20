import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const isDevelopment = mode === 'development'
  return {
    plugins: [vue(), alias()],

    // base: isDevelopment ? '/' : '/app/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@/router': resolve(__dirname, 'src/router'),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
      port: 3000,
    },
  }
})
