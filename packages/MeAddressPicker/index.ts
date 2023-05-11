import type { App } from 'vue'
import MeAddressPicker from './index.vue'

// 安装
MeAddressPicker.install = (app: App) => {
  app.component('MeAddressPicker', MeAddressPicker)
}

export { MeAddressPicker }
