import type { App } from 'vue'
import slider from './index.vue'
import { SFCWithInstall } from '../types'

const MeSlider: SFCWithInstall<typeof slider> = slider as SFCWithInstall<typeof slider> // 增加类型
// 安装
MeSlider.install = (app: App) => {
  app.component('MeSlider', MeSlider)
}

export { MeSlider }
