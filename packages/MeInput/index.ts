import type { App } from 'vue'
import input from './index.vue'
import { SFCWithInstall } from '../types'

const MeInput = input as SFCWithInstall<typeof input> // 增加类型
// 安装
MeInput.install = (app: App) => {
  app.component('MeInput', MeInput)
}

export { MeInput }
