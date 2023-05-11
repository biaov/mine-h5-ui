import type { App } from 'vue'
import MeCheckboxGroup from './index.vue'

// 安装
MeCheckboxGroup.install = (app: App) => {
  app.component('MeCheckboxGroup', MeCheckboxGroup)
}

export { MeCheckboxGroup }
