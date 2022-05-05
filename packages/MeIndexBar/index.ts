import type { App } from 'vue'
import MeIndexBar from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeIndexBar.install = (app: App) => {
  app.component('MeIndexBar', MeIndexBar)
}
const InMeIndexBar: SFCWithInstall<typeof MeIndexBar> = MeIndexBar // 增加类型

export default InMeIndexBar
