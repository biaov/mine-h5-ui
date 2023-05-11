import type { App } from 'vue'
import MePreview from './preview'

// 安装
MePreview.install = (app: App) => {
  app.config.globalProperties.$MePreview = MePreview
}

export { MePreview }
