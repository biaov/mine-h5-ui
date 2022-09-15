import type { App } from 'vue'
import accordion from './index.vue'
import { SFCWithInstall } from '../types'

const MeAccordion: SFCWithInstall<typeof accordion> = accordion as SFCWithInstall<typeof accordion> // 增加类型
// 安装
MeAccordion.install = (app: App) => {
  app.component('MeAccordion', MeAccordion)
}

export { MeAccordion }
