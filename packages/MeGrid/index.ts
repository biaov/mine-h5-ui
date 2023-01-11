import type { App } from 'vue'
import grid from './index.vue'
import { SFCWithInstall } from '../types'

const MeGrid = grid as SFCWithInstall<typeof grid> // 增加类型
// 安装
MeGrid.install = (app: App) => {
  app.component('MeGrid', MeGrid)
}

export { MeGrid }
