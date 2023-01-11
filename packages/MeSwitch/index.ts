import type { App } from 'vue'
import _switch from './index.vue'
import { SFCWithInstall } from '../types'

const MeSwitch = _switch as SFCWithInstall<typeof _switch> // 增加类型
// 安装
MeSwitch.install = (app: App) => {
  app.component('MeSwitch', MeSwitch)
}

export { MeSwitch }
