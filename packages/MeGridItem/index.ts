import type { App } from 'vue'
import MeGridItem from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeGridItem.install = (app: App) => {
  app.component(MeGridItem.name, MeGridItem)
}
const InMeGridItem: SFCWithInstall<typeof MeGridItem> = MeGridItem // 增加类型

export default InMeGridItem
