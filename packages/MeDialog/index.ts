import type { App } from 'vue'
import dialog from './index.vue'
import { SFCWithInstall } from '../types'

const MeDialog: SFCWithInstall<typeof dialog> = dialog as SFCWithInstall<typeof dialog> // 增加类型
// 安装
MeDialog.install = (app: App) => {
  app.component('MeDialog', MeDialog)
}

export { MeDialog }
