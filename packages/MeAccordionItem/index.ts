import type { App } from 'vue'
import MeAccordionItem from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeAccordionItem.install = (app: App) => {
  app.component(MeAccordionItem.name, MeAccordionItem)
}
const InMeAccordionItem: SFCWithInstall<typeof MeAccordionItem> = MeAccordionItem // 增加类型

export default InMeAccordionItem
