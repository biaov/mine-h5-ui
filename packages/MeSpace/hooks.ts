import { useSlots, onMounted, h, ref, render } from 'vue'
import { Props } from './types'

// 操作
export const useHandler = (props: Readonly<Props>) => {
  const spaceRef = ref<HTMLDivElement>() // space 节点

  onMounted(() => {
    const slots = useSlots().default?.() || []
    const extraChildren = slots.map(vnode => h('div', { class: 'me-space-item' }, vnode))
    render(h('div', { class: `me-space ${props.direction}` }, extraChildren), spaceRef.value as Element)
  })

  return { spaceRef }
}
