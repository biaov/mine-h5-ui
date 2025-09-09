import { h, ref, render, nextTick, Fragment } from 'vue'
import type { VNodeItem } from './types'

/**
 * 操作
 */
export const useHandler = () => {
  /**
   * 收集节点
   */
  const vnodeGroup = (vnodes: VNodeItem[]) => {
    const newVnodes: VNodeItem[] = []
    vnodes.forEach(vnode => {
      if (['template', 'symbol'].includes(typeof vnode.type) && Array.isArray(vnode.children) && vnode.children?.length) {
        newVnodes.push(...vnodeGroup(vnode.children as VNodeItem[]))
      } else {
        newVnodes.push(h('div', { class: 'me-space-item' }, vnode))
      }
    })
    return newVnodes
  }

  /**
   * space 节点
   */
  const spaceRef = ref<HTMLDivElement>()
  const onRender = (slots: VNodeItem[]) => {
    nextTick(() => {
      const extraChildren = vnodeGroup(slots)
      render(h(Fragment, extraChildren), spaceRef.value as Element)
    })
  }
  return { spaceRef, onRender }
}
