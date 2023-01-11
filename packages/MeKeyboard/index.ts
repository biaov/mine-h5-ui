import type { App } from 'vue'
import keyboard from './index.vue'
import { SFCWithInstall } from '../types'

const MeKeyboard = keyboard as SFCWithInstall<typeof keyboard> // 增加类型
// 安装
MeKeyboard.install = (app: App) => {
  app.component('MeKeyboard', MeKeyboard)
}

export { MeKeyboard }
