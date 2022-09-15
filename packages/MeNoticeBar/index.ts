import type { App } from 'vue'
import noticeBar from './index.vue'
import { SFCWithInstall } from '../types'

const MeNoticeBar: SFCWithInstall<typeof noticeBar> = noticeBar as SFCWithInstall<typeof noticeBar> // 增加类型
// 安装
MeNoticeBar.install = (app: App) => {
  app.component('MeNoticeBar', MeNoticeBar)
}

export { MeNoticeBar }
