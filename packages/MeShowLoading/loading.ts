import { createVNode, render } from 'vue'
import { IsType } from '../MeAPI/function'
import type { AddComponentNameRecord } from '../types'
import ShowLoadingConstructor from './index.vue'

const loadingNodes: Element[] = []
/**
 * 消息提示
 */
const ShowLoading = (arg?: string) => {
  const option = IsType('string', arg) ? { message: arg as string, visible: true } : { visible: true }
  /**
   * 创建虚拟节点
   */
  const vm = createVNode(ShowLoadingConstructor, option)
  const container = document.createElement('div')

  render(vm, container)
  const loadingNode = container.firstElementChild!
  loadingNodes.push(loadingNode)
  /**
   * 把虚拟 DOM 插入到真实 DOM 树中
   */
  document.body.appendChild(loadingNode)
}

const hideLoading = () => {
  loadingNodes.forEach(node => {
    node && document.body.removeChild(node)
  })
  loadingNodes.length = 0
}

const showLoading = ShowLoading as AddComponentNameRecord<typeof ShowLoading>
showLoading.componentName = ShowLoadingConstructor.name as string
hideLoading.componentName = 'MeHideLoading'

export { showLoading, hideLoading }
