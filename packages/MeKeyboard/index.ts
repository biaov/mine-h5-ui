import type { App } from 'vue'
import MeKeyboard from './index.vue'

// 安装
MeKeyboard.install = (app: App) => {
  app.component('MeKeyboard', MeKeyboard)
}

export { MeKeyboard }
