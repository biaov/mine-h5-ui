import { ref, provide, onMounted } from 'vue'
import { MeGridKey } from './token'
import type { Props } from './types'

/**
 * 初始化 slot
 */
export const useInitSlots = (props: Readonly<Required<Props>>) => {
  const grid = ref<HTMLDivElement>()
  const params = { cols: props.cols, borderColor: props.borderColor }

  provide(MeGridKey, { name: MeGridKey, params })

  onMounted(() => {
    const gridItems: NodeListOf<HTMLDivElement> = grid.value?.querySelectorAll('.me-grid-item')!
    gridItems?.forEach((elem, i) => {
      elem.style.borderTopWidth = `${+(i < props.cols)}px`
      elem.style.borderLeftWidth = `${+(i % props.cols === 0)}px`
    })
  })

  return { grid }
}
