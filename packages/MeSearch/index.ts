import type { App } from 'vue'
import MeSearch from './index.vue'

// 安装
MeSearch.install = (app: App) => {
  app.component('MeSearch', MeSearch)
}

export { MeSearch }
