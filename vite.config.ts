import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vitePluginMd from 'vite-plugin-vue-markdown'
import { VitePWA } from 'vite-plugin-pwa'
import eslint from 'vite-plugin-eslint'
import { vitePluginMdConfig, vueConfig, vitePwaConfig, eslintConfig } from './config/plugins'
import { useGlobalVars } from './examples/config/variables'

const { BaseRouter: base } = useGlobalVars()

/**
 * 配置信息
 */
export default defineConfig({
  base,
  plugins: [eslint(eslintConfig), vue(vueConfig), vitePluginMd(vitePluginMdConfig), VitePWA(vitePwaConfig)],
  server: {
    host: '0.0.0.0',
    port: 3333
  },
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, './examples'),
      '~': resolve(__dirname, './packages'),
      '^': resolve(__dirname, './mobile'),
      '#': resolve(__dirname, './dist/packages')
    }
  },
  css: {
    // 配置预编译器
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  build: {
    outDir: './dist/docs',
    ssrManifest: false,
    manifest: false,
    // 多页面
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        mobile: resolve(__dirname, './mobile.html')
      }
    }
  }
})
