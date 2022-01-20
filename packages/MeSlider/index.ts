import type { App } from 'vue'
import MeSlider from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeSlider.install = (app: App) => {
  app.component(MeSlider.name, MeSlider)
}
const InMeSlider: SFCWithInstall<typeof MeSlider> = MeSlider // 增加类型
export default InMeSlider
