import type { App } from 'vue'
import MeShareSheet from './index.vue'

// 安装
MeShareSheet.install = (app: App) => {
  app.component('MeShareSheet', MeShareSheet)
}

export { MeShareSheet }
