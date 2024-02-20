import { provide, ref, watch } from 'vue'
import { MeAccordionKey } from './token'
import type { Emits, Props } from './types'

/**
 * 初始化 slots
 */
export const useInitSlots = (props: Readonly<Props>, emit: Emits) => {
  /**
   * 当前值
   */
  const currentValue = ref(props.modelValue)
  /**
   * 状态改变时触发此方法
   */
  const onChange = (name: string | number) => {
    const value = name !== props.modelValue ? name : ''
    emit('update:modelValue', value)
    emit('change', value)
  }

  provide(MeAccordionKey, { name: MeAccordionKey, currentValue, onChange })
  /**
   * 监听值的改变
   */
  watch(
    () => props.modelValue,
    value => {
      currentValue.value = value
    }
  )

  return {}
}
