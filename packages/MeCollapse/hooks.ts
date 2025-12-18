import { provide } from 'vue'
import { MeCollapseKey } from './token'
import type { USEInitSlots } from './types'

/**
 * 初始化 slots
 */
export const useInitSlots = ({ emit, currentValue }: USEInitSlots.Option) => {
  /**
   * 状态改变时触发此方法
   */
  const onChange = (name: string | number) => {
    const value = name !== currentValue.value ? name : ''
    currentValue.value = value
    emit('change', value)
  }

  provide(MeCollapseKey, { name: MeCollapseKey, currentValue, onChange })

  return {}
}
