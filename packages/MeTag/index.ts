import type { App } from 'vue'
import tag from './index.vue'
import { SFCWithInstall } from '../types'

const MeTag = tag as SFCWithInstall<typeof tag> // 增加类型
// 安装
MeTag.install = (app: App) => {
  app.component('MeTag', MeTag)
}

export { MeTag }
