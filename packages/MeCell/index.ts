import type { App } from 'vue'
import cell from './index.vue'
import { SFCWithInstall } from '../types'

const MeCell: SFCWithInstall<typeof cell> = cell as SFCWithInstall<typeof cell> // 增加类型
// 安装
MeCell.install = (app: App) => {
  app.component('MeCell', MeCell)
}

export { MeCell }
