import type { App } from 'vue'
import search from './index.vue'
import { SFCWithInstall } from '../types'

const MeSearch: SFCWithInstall<typeof search> = search as SFCWithInstall<typeof search> // 增加类型
// 安装
MeSearch.install = (app: App) => {
  app.component('MeSearch', MeSearch)
}

export { MeSearch }
