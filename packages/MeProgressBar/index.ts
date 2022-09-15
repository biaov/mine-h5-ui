import type { App } from 'vue'
import progressBar from './index.vue'
import { SFCWithInstall } from '../types'

const MeProgressBar: SFCWithInstall<typeof progressBar> = progressBar as SFCWithInstall<typeof progressBar> // 增加类型
// 安装
MeProgressBar.install = (app: App) => {
  app.component('MeProgressBar', MeProgressBar)
}

export { MeProgressBar }
