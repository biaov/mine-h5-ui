import type { App } from 'vue'
import MePopup from './index.vue'

// 安装
MePopup.install = (app: App) => {
  app.component('MePopup', MePopup)
}

export { MePopup }
