import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxToVw from 'postcss-px-to-viewport'
import topLevelAwait from "vite-plugin-top-level-await";
import AutoImport from 'unplugin-auto-import/vite'
const pxToVwData = pxToVw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 750,
  viewportUnit: 'vw'
})
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
    proxy: {
      '/fe': {
        target: 'https://fe.ecool.fun',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fe/, '')
      },
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  },
  base: '/nft/',
  plugins: [vue(),
  topLevelAwait({
    // The export name of top-level await promise for each chunk module
    promiseExportName: "__tla",
    // The function to generate import names of top-level await promise in each chunk module
    promiseImportName: i => `__tla_${i}`
  }),
  AutoImport({
    // resolvers: [ElementPlusResolver()],
    imports: [
      'vue',
      'pinia',
      'vue-router',
    ],
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    dts: true //auto generation auto-imports.d.ts file
  }),
  ],
  css: {
    postcss: {
      plugins: [pxToVwData]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
