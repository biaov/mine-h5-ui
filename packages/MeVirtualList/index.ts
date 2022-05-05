import type { App } from 'vue'
import MeVirtualList from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeVirtualList.install = (app: App) => {
  app.component(MeVirtualList.name, MeVirtualList)
}
const InMeVirtualList: SFCWithInstall<typeof MeVirtualList> = MeVirtualList // 增加类型

export default InMeVirtualList
