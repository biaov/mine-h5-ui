import type { App } from 'vue'
import MeAccordion from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeAccordion.install = (app: App) => {
  app.component(MeAccordion.name, MeAccordion)
}
const InMeAccordion: SFCWithInstall<typeof MeAccordion> = MeAccordion // 增加类型
export default InMeAccordion
