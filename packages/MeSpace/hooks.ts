import { useSlots, onMounted, h, ref, render } from 'vue'
import type { Props } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>) => {
  /**
   * space 节点
   */
  const spaceRef = ref<HTMLDivElement>()

  onMounted(() => {
    const slots = useSlots().default?.() || []
    const extraChildren = slots.map(vnode => h('div', { class: 'me-space-item' }, vnode))
    render(h('div', { class: `me-space ${props.direction}` }, extraChildren), spaceRef.value as Element)
  })

  return { spaceRef }
}
