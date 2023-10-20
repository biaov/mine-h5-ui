import { createVNode, render } from 'vue'
import { IsType } from '../MeAPI/function'
import type { AddComponentNameRecord } from '../types'
import ToastConstructor from './index.vue'
import type { Options, Option } from './types'

/**
 * 消息提示
 * @param {Options} arg 选项参数
 * @returns {void} 空
 */
const Toast = (arg: Options) => {
  const options = IsType('string', arg) || IsType('number', arg) ? { message: arg as string | number } : IsType('Object', arg) ? { ...(arg as Option) } : {}
  /**
   * 创建虚拟节点
   */
  const vm = createVNode(ToastConstructor, options)
  const container = document.createElement('div')

  render(vm, container)
  /**
   * 把虚拟 DOM 插入到真实 DOM 树中
   */
  document.body.appendChild(container.firstElementChild!)
}

const InToast = Toast as AddComponentNameRecord<typeof Toast>
InToast.componentName = ToastConstructor.name

export default InToast
