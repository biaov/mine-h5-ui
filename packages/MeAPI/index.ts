import type { App } from 'vue'
import Function from './function'
import BindEvent from './event'
import Validator from './validator'

const install = (app: App) => {
  app.config.globalProperties.$Validator = Validator
}

const MeAPI = Object.assign(Function, BindEvent, Validator, { install })

export { MeAPI }
