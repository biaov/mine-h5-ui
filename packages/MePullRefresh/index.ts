import type { App } from 'vue'
import pullRefresh from './index.vue'
import { SFCWithInstall } from '../types'

const MePullRefresh: SFCWithInstall<typeof pullRefresh> = pullRefresh as SFCWithInstall<typeof pullRefresh> // 增加类型
// 安装
MePullRefresh.install = (app: App) => {
  app.component('MePullRefresh', MePullRefresh)
}

export { MePullRefresh }
