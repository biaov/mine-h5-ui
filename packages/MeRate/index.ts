import type { App } from 'vue'
import rate from './index.vue'
import { SFCWithInstall } from '../types'

const MeRate = rate as SFCWithInstall<typeof rate> // 增加类型
// 安装
MeRate.install = (app: App) => {
  app.component('MeRate', MeRate)
}

export { MeRate }
