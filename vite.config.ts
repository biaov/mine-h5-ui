import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import markdownVite from 'unplugin-vue-markdown/vite'
import { VitePWA } from 'vite-plugin-pwa'
import eslint from 'vite-plugin-eslint2'
import tailwindcss from '@tailwindcss/vite'
import { markdownViteConfig, vitePwaConfig, eslintConfig } from './config/plugins'

const env = loadEnv('development', './')
/**
 * 构建配置信息
 */
export default defineConfig({
  base: env.VITE_BASE_ROUTER,
  plugins: [
    tailwindcss(),
    eslint(eslintConfig),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdownVite(markdownViteConfig),
    VitePWA(vitePwaConfig)
  ],

  /**
   * 服务配置
   */
  server: {
    host: '0.0.0.0',
    port: +env.VITE_PORT
  },
  resolve: {
    /**
     * 路径别名
     */
    alias: {
      '@': resolve(import.meta.dirname, './examples'),
      '~': resolve(import.meta.dirname, './packages'),
      '^': resolve(import.meta.dirname, './mobile'),
      '#': resolve(import.meta.dirname, './dist/packages')
    }
  },
  css: {
    /**
     * 配置预编译器
     */
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/vars.less";`
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
        main: resolve(import.meta.dirname, './index.html'),
        mobile: resolve(import.meta.dirname, './mobile.html')
      }
    }
  }
})
