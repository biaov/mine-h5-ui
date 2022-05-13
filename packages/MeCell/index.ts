import type { App } from 'vue'
import MeCell from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCell.install = (app: App) => {
  app.component('MeCell', MeCell)
}
const InMeDialog: SFCWithInstall<typeof MeCell> = MeCell // 增加类型

export default InMeDialog
