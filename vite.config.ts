import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 750,
  viewportUnit: 'vw'
})
// https://vitejs.dev/config/ 
export default defineConfig({
  server: {
    port: 8888
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  },
  base: '/nft/',
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
