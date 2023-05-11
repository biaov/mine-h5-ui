import type { App } from 'vue'
import MeEmpty from './index.vue'

// 安装
MeEmpty.install = (app: App) => {
  app.component('MeEmpty', MeEmpty)
}

export { MeEmpty }
