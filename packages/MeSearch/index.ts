import type { App } from 'vue'
import MeSearch from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeSearch.install = (app: App) => {
  app.component(MeSearch.name, MeSearch)
}
const InMeSearch: SFCWithInstall<typeof MeSearch> = MeSearch // 增加类型

export default InMeSearch
