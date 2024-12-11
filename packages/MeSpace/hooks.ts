import { useSlots, onMounted, h, ref, render } from 'vue'
import type { Props, VNodeItem } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>) => {
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
  onMounted(() => {
    const slots = useSlots().default?.() || []
    const extraChildren = vnodeGroup(slots)
    render(h('div', { class: `me-space ${props.direction}` }, extraChildren), spaceRef.value as Element)
  })

  return { spaceRef }
}
