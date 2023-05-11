import type { App } from 'vue'
import MeAccordion from './index.vue'

// 安装
MeAccordion.install = (app: App) => {
  app.component('MeAccordion', MeAccordion)
}

export { MeAccordion }
