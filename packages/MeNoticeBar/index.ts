import type { App } from 'vue'
import MeNoticeBar from './index.vue'

// 安装
MeNoticeBar.install = (app: App) => {
  app.component('MeNoticeBar', MeNoticeBar)
}

export { MeNoticeBar }
