import type { App } from 'vue'
import MePassword from './index.vue'

// 安装
MePassword.install = (app: App) => {
  app.component('MePassword', MePassword)
}

export { MePassword }
