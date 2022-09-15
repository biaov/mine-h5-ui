import type { App } from 'vue'
import actionSheet from './index.vue'
import { SFCWithInstall } from '../types'

const MeActionSheet: SFCWithInstall<typeof actionSheet> = actionSheet as SFCWithInstall<typeof actionSheet> // 增加类型
// 安装
MeActionSheet.install = (app: App) => {
  app.component('MeActionSheet', MeActionSheet)
}

export { MeActionSheet }
