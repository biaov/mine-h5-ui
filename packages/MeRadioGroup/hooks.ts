import { provide } from 'vue'
import { MeRadioGroupKey } from './token'
import type { USEInitSlots } from './types'

/**
 * 初始化 slot
 */
export const useInitSlots = ({ emit, currentValue }: USEInitSlots.Option) => {
  /**
   * 改变 value 的值
   */
  const onChange = (name: string | number) => {
    currentValue.value = name
    emit('change', name)
  }

  provide(MeRadioGroupKey, { name: MeRadioGroupKey, currentValue, onChange })

  return {}
}
