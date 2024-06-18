import { provide } from 'vue'
import { MeCheckboxGroupKey } from './token'
import type { OnChangeParams, USEInitSlots } from './types'

/**
 * 初始化 slots
 */
export const useInitSlots = ({ emit, currentValue }: USEInitSlots.Option) => {
  /**
   * 改变 value 的值
   */
  const onChange = ({ name, isChecked }: OnChangeParams) => {
    const names = [...currentValue.value]

    /**
     * 判断之前是否选中
     */
    if (isChecked.value) {
      /**
       * 取消选中状态
       */
      names.splice(names.indexOf(name), 1)
    } else {
      /**
       * 选中状态
       */
      names.push(name)
    }
    currentValue.value = names
    emit('change', currentValue.value)
  }

  provide(MeCheckboxGroupKey, { name: MeCheckboxGroupKey, currentValue, onChange })

  return {}
}
