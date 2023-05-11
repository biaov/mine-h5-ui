import type { App } from 'vue'
import MeForm from './index.vue'

// 安装
MeForm.install = (app: App) => {
  app.component('MeForm', MeForm)
}

export { MeForm }
