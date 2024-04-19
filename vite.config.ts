import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import markdownVite from 'unplugin-vue-markdown/vite'
import { VitePWA } from 'vite-plugin-pwa'
import eslint from 'vite-plugin-eslint'
import { markdownViteConfig, vueConfig, vitePwaConfig, eslintConfig } from './config/plugins'
import { useGlobalVars } from './examples/config/variables'

const { BaseRouter: base } = useGlobalVars()
const { dirname } = import.meta
/**
 * 构建配置信息
 */
export default defineConfig({
  base,
  plugins: [eslint(eslintConfig), vue(vueConfig), markdownVite(markdownViteConfig), VitePWA(vitePwaConfig)],

  /**
   * 服务配置
   */
  server: {
    host: '0.0.0.0',
    port: 3333
  },
  resolve: {
    /**
     * 路径别名
     */
    alias: {
      '@': resolve(dirname, './examples'),
      '~': resolve(dirname, './packages'),
      '^': resolve(dirname, './mobile'),
      '#': resolve(dirname, './dist/packages')
    }
  },
  css: {
    /**
     * 配置预编译器
     */
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  build: {
    /**
     * 输出目录
     */
    outDir: './dist/docs',
    /**
     * 多页面打包
     */
    rollupOptions: {
      input: {
        main: resolve(dirname, './index.html'),
        mobile: resolve(dirname, './mobile.html')
      }
    }
  }
})
