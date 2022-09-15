import type { App } from 'vue'
import shareSheet from './index.vue'
import { SFCWithInstall } from '../types'

const MeShareSheet: SFCWithInstall<typeof shareSheet> = shareSheet as SFCWithInstall<typeof shareSheet> // 增加类型
// 安装
MeShareSheet.install = (app: App) => {
  app.component('MeShareSheet', MeShareSheet)
}

export { MeShareSheet }
