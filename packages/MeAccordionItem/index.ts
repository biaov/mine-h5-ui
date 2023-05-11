import type { App } from 'vue'
import MeAccordionItem from './index.vue'

// 安装
MeAccordionItem.install = (app: App) => {
  app.component('MeAccordionItem', MeAccordionItem)
}

export { MeAccordionItem }
