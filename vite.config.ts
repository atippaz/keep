import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const projectRootDir = resolve(__dirname)
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const isDevelopment = mode === 'development'
  return {
    plugins: [vue()],

    // base: isDevelopment ? '/' : '/app/',
    resolve: {
      alias: {
        '@': resolve(projectRootDir, 'src'),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
      port: 3000,
    },
  }
})
