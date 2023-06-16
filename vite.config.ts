import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const pathResolve = (pathStr: string) => {
  return resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: '/foodHub_project/',
  resolve: {
    alias: {
      '@': pathResolve('./src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  optimizeDeps: {
    include: ['@babel/preset-env']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/utils/_mixins.scss";`
      }
    }
  }
})
