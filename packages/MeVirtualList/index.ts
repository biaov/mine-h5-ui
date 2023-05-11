import type { App } from 'vue'
import MeVirtualList from './index.vue'

// 安装
MeVirtualList.install = (app: App) => {
  app.component('MeVirtualList', MeVirtualList)
}

export { MeVirtualList }
