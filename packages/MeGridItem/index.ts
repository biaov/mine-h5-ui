import type { App } from 'vue'
import gridItem from './index.vue'
import { SFCWithInstall } from '../types'

const MeGridItem: SFCWithInstall<typeof gridItem> = gridItem as SFCWithInstall<typeof gridItem> // 增加类型
// 安装
MeGridItem.install = (app: App) => {
  app.component('MeGridItem', MeGridItem)
}

export { MeGridItem }
