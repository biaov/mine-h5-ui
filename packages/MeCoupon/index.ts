import type { App } from 'vue'
import MeCoupon from './index.vue'

// 安装
MeCoupon.install = (app: App) => {
  app.component('MeCoupon', MeCoupon)
}

export { MeCoupon }
