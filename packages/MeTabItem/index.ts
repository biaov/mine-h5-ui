import type { App } from 'vue'
import tabItem from './index.vue'
import { SFCWithInstall } from '../types'

const MeTabItem = tabItem as SFCWithInstall<typeof tabItem> // 增加类型
// 安装
MeTabItem.install = (app: App) => {
  app.component('MeTabItem', MeTabItem)
}

export { MeTabItem }
