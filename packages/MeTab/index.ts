import type { App } from 'vue'
import tab from './index.vue'
import { SFCWithInstall } from '../types'

const MeTab: SFCWithInstall<typeof tab> = tab as SFCWithInstall<typeof tab> // 增加类型
// 安装
MeTab.install = (app: App) => {
  app.component('MeTab', MeTab)
}

export { MeTab }
