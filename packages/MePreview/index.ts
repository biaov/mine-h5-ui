import type { App } from 'vue'
import preview from './preview'
import { SFCWithInstall } from '../types'

const MePreview = preview as SFCWithInstall<typeof preview> // 增加类型
// 安装
MePreview.install = (app: App) => {
  app.config.globalProperties.$MePreview = preview
}

export { MePreview }
