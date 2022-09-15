import type { App } from 'vue'
import virtualList from './index.vue'
import { SFCWithInstall } from '../types'

const MeVirtualList: SFCWithInstall<typeof virtualList> = virtualList as SFCWithInstall<typeof virtualList> // 增加类型
// 安装
MeVirtualList.install = (app: App) => {
  app.component('MeVirtualList', MeVirtualList)
}

export { MeVirtualList }
