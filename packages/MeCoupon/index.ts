import type { App } from 'vue'
import coupon from './index.vue'
import { SFCWithInstall } from '../types'

const MeCoupon: SFCWithInstall<typeof coupon> = coupon as SFCWithInstall<typeof coupon> // 增加类型
// 安装
MeCoupon.install = (app: App) => {
  app.component('MeCoupon', MeCoupon)
}

export { MeCoupon }
