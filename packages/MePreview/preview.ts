import { createVNode, render } from 'vue'
import { IsType } from '../MeAPI/function'
import type { AddComponentNameRecord } from '../types'
import PreviewConstructor from './index.vue'
import type { Option } from './types'

/**
 * 图片预览
 * @param { Option } arg 选项参数
 * @returns { void } 空
 */
const Preview = (arg: Option | string) => {
  const options: Partial<Option> = {}
  if (IsType('string', arg)) {
    options.url = arg as string
  } else if (!IsType('Object', arg)) {
    throw new Error(`${arg} is not object`)
  } else {
    Object.assign(options, arg)
  }

  /**
   * 创建虚拟节点
   */
  const vm = createVNode(PreviewConstructor, options)
  const container = document.createElement('div')
  render(vm, container)
  /**
   * 把虚拟 DOM 插入到真实 DOM 树中
   */
  document.body.appendChild(container.firstElementChild!)
}

const InPreview = Preview as AddComponentNameRecord<typeof Preview>
InPreview.componentName = PreviewConstructor.name as string

export default InPreview
