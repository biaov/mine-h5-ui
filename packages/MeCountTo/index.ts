import type { App } from 'vue'
import countTo from './index.vue'
import { SFCWithInstall } from '../types'

const MeCountTo = countTo as SFCWithInstall<typeof countTo> // 增加类型
// 安装
MeCountTo.install = (app: App) => {
  app.component('MeCountTo', MeCountTo)
}

export { MeCountTo }
