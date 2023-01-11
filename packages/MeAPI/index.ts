import Function from './function' // 封装API
import BindEvent from './event' // 绑定事件
import Validator from './validator' // 校验
import { AddInstall } from './types'

const API = Object.assign(Function, BindEvent, Validator)

export const MeAPI = API as AddInstall<typeof API>
