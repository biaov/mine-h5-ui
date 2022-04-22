import type { App } from 'vue'
import MeNoticeBar from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeNoticeBar.install = (app: App) => {
  app.component(MeNoticeBar.name, MeNoticeBar)
}
const InMeNoticeBar: SFCWithInstall<typeof MeNoticeBar> = MeNoticeBar // 增加类型
export default InMeNoticeBar
