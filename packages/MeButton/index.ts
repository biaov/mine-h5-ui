import type { App } from 'vue'
import MeButton from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeButton.install = (app: App): void => {
  app.component(MeButton.name, MeButton)
}
const InMeButton: SFCWithInstall<typeof MeButton> = MeButton // 增加类型
export default InMeButton
