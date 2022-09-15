import API from './function' // 封装API
import BindEvent from './event' // 绑定事件
import Validator from './validator'

export const MeAPI = Object.assign(API, BindEvent, Validator)
