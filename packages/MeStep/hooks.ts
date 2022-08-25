import { provide, computed } from 'vue'
import { Props } from './types'
import { MeStepKey } from './token'

// 初始化 slot
export const useInitSlots = (props: Readonly<Props>) => {
  const parentProps = computed(() => props)
  provide(MeStepKey, { parentProps })
  return {}
}
