import type { App } from 'vue'
import MeUpload from './index.vue'

// 安装
MeUpload.install = (app: App) => {
  app.component('MeUpload', MeUpload)
}

export { MeUpload }
