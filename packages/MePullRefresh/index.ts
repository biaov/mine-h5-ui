import type { App } from 'vue'
import MePullRefresh from './index.vue'

// 安装
MePullRefresh.install = (app: App) => {
  app.component('MePullRefresh', MePullRefresh)
}

export { MePullRefresh }
