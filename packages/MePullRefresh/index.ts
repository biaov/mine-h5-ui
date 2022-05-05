import type { App } from 'vue'
import MePullRefresh from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MePullRefresh.install = (app: App) => {
  app.component(MePullRefresh.name, MePullRefresh)
}
const InMePullRefresh: SFCWithInstall<typeof MePullRefresh> = MePullRefresh // 增加类型

export default InMePullRefresh
