import type { App } from 'vue'
import navBar from './index.vue'
import { SFCWithInstall } from '../types'

const MeNavBar = navBar as SFCWithInstall<typeof navBar> // 增加类型
// 安装
MeNavBar.install = (app: App) => {
  app.component('MeNavBar', MeNavBar)
}

export { MeNavBar }
