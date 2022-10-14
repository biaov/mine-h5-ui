import type { App } from 'vue'
import * as components from './components'

const install = (app: App) => {
  // 注册组件
  Object.values(components).forEach(value => {
    value.install && value.install(app)
  })
}

export { install }
