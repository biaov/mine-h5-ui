import type { App } from 'vue'
import MeRadioGroup from './index.vue'

// 安装
MeRadioGroup.install = (app: App) => {
  app.component('MeRadioGroup', MeRadioGroup)
}

export { MeRadioGroup }
