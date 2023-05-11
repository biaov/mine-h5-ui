import type { App } from 'vue'
import MeSpace from './index.vue'

// 安装
MeSpace.install = (app: App) => {
  app.component('MeSpace', MeSpace)
}

export { MeSpace }
