import { createVNode, render } from 'vue'
import PreviewConstructor from './index.vue'
import { Option } from './interfaces'
import { IsType } from '../MeAPI/function'
/**
 * 图片预览
 * @param {Option} arg 选项参数
 * @returns {void} 空
 */
const Preview = (arg: Option) => {
  if (!IsType('Object', arg)) throw new Error(`${arg} is not object`)
  const options = { ...arg }
  const vm = createVNode(PreviewConstructor, options) // 创建虚拟节点
  const container = document.createElement('div')
  render(vm, container)
  document.body.appendChild(container.firstElementChild!) // 把虚拟DOM插入到真实DOM树中
}
export default Preview
