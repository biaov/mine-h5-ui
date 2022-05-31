import type { App } from 'vue'
import MeCoupon from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCoupon.install = (app: App) => {
  app.component('MeCoupon', MeCoupon)
}
const InMeCoupon: SFCWithInstall<typeof MeCoupon> = MeCoupon // 增加类型

export default InMeCoupon
