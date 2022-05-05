import type { App } from 'vue'
import MeKeyboard from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeKeyboard.install = (app: App) => {
  app.component('MeKeyboard', MeKeyboard)
}
const InMeKeyboard: SFCWithInstall<typeof MeKeyboard> = MeKeyboard // 增加类型

export default InMeKeyboard
