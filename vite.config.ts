import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vitePluginMd from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import { vitePluginMdConfig, vueConfig, vitePwaConfig } from './config/plugins'
import { useGlobalVars } from './examples/utils/variables'

const { BaseRouter: base } = useGlobalVars()
// 配置信息
const config: UserConfig = {
  base,
  plugins: [vue(vueConfig), vitePluginMd(vitePluginMdConfig), VitePWA(vitePwaConfig)],
  server: {
    host: '0.0.0.0',
    port: 3333
  },
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, './examples'),
      '~': resolve(__dirname, './packages'),
      '^': resolve(__dirname, './mobile')
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
}

export default defineConfig(config)
