import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vitePluginVuedoc from 'vite-plugin-vuedoc'
import { vitePluginVuedocConfig, vueConfig } from './config/plugins'
import { useGlobalVars } from './examples/utils/variables'

const { BaseRouter: base } = useGlobalVars()
// 配置信息
const config: UserConfigExport = defineConfig({
  base,
  plugins: [vitePluginVuedoc(vitePluginVuedocConfig), vue(vueConfig)],
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
    // 多页面
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        mobile: resolve(__dirname, './mobile.html')
      }
    }
  }
})
export default config
