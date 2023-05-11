import type { App } from 'vue'
import Function from './function' // 封装API
import BindEvent from './event' // 绑定事件
import Validator from './validator' // 校验

const install = (app: App) => {
  app.config.globalProperties.$Validator = Validator
}

const MeAPI = Object.assign(Function, BindEvent, Validator, { install })

export { MeAPI }
