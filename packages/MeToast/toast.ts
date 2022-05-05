import { createVNode, render } from 'vue'
import ToastConstructor from './index.vue'
import { Options } from './types'
import { Option } from './interfaces'
import { IsType } from '../MeAPI/function'

/**
 * 消息提示
 * @param {Options} arg 选项参数
 * @returns {void} 空
 */
const Toast = (arg: Options) => {
  const options = IsType('String', arg) || IsType('Number', arg) ? { message: arg as string | number } : IsType('Object', arg) ? { ...(arg as Option) } : {}
  const vm = createVNode(ToastConstructor, options) // 创建虚拟节点
  const container = document.createElement('div')

  render(vm, container)
  document.body.appendChild(container.firstElementChild!) // 把虚拟DOM插入到真实DOM树中
}

export default Toast
