/** */
import { ref, provide, watch } from 'vue'
import { MeRadioGroupKey } from './token'
import { Props } from './types'
import { Emits } from './interfaces'

// 初始化 slot
export const useInitSlots = (props: Props, emit: Emits) => {
  const currentValue = ref(props.modelValue) // 当前value值
  // 改变value的值
  const onChange = (name: string | number) => {
    emit('update:modelValue', name)
    emit('on-change', name)
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
