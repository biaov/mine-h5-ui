import type { App } from 'vue'
import accordionItem from './index.vue'
import { SFCWithInstall } from '../types'

const MeAccordionItem = accordionItem as SFCWithInstall<typeof accordionItem> // 增加类型
// 安装
MeAccordionItem.install = (app: App) => {
  app.component('MeAccordionItem', MeAccordionItem)
}

export { MeAccordionItem }
