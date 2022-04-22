import API from './function' // 封装API
import BindEvent from './event' // 绑定事件
import Validator from './validator'

// 正则变量
export default { ...API, ...BindEvent, Validator }
