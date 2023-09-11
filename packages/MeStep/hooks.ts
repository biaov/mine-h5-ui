import { provide, computed } from 'vue'
import { MeStepKey } from './token'
import type { Props } from './types'

/**
 * 初始化 slot
 */
export const useInitSlots = (props: Readonly<Required<Props>>) => {
  const parentProps = computed(() => props)
  provide(MeStepKey, { parentProps })

  return {}
}
