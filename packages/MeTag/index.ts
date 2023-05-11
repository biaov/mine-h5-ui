import type { App } from 'vue'
import MeTag from './index.vue'

// 安装
MeTag.install = (app: App) => {
  app.component('MeTag', MeTag)
}

export { MeTag }
