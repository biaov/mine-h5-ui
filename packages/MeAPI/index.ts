import type { App } from 'vue'
import Function from './function' // 封装API
import BindEvent from './event' // 绑定事件
import Validator from './validator' // 校验
import { SFCWithInstall } from '../types'

const API = Object.assign(Function, BindEvent, Validator)

const MeAPI = API as SFCWithInstall<typeof API>

MeAPI.install = (app: App) => {
  app.config.globalProperties.$Validator = Validator
}

export { MeAPI }
