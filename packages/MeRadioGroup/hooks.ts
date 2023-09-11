import { ref, provide, watch } from 'vue'
import { MeRadioGroupKey } from './token'
import type { Props, Emits } from './types'

/**
 * 初始化 slot
 */
export const useInitSlots = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 当前 value 值
   */
  const currentValue = ref(props.modelValue)

  /**
   * 改变 value 的值
   */
  const onChange = (name: string | number) => {
    emit('update:modelValue', name)
    emit('change', name)
  }

  provide(MeRadioGroupKey, { name: MeRadioGroupKey, currentValue, onChange })

  watch(
    () => props.modelValue,
    value => {
      currentValue.value = value
    }
  )

  return {}
}
