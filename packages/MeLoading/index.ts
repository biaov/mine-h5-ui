import type { App } from 'vue'
import MeLoading from './index.vue'

// 安装
MeLoading.install = (app: App) => {
  app.component('MeLoading', MeLoading)
}

export { MeLoading }
