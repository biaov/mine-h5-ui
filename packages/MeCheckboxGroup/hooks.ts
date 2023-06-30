import { ref, provide, watch } from 'vue'
import { MeCheckboxGroupKey } from './token'
import type { Props, OnChangeParams, Emits } from './types'

/**
 * 初始化 slots
 */
export const useInitSlots = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 当前 value 值
   */
  const currentValue = ref([...props.modelValue])

  /**
   * 改变 value 的值
   */
  const onChange = ({ name, isChecked }: OnChangeParams) => {
    const arr = currentValue.value

    // 判断之前是否选中
    if (isChecked.value) {
      // 取消选中状态
      arr.splice(arr.indexOf(name), 1)
    } else {
      // 选中状态
      arr.push(name)
    }

    emit('update:modelValue', currentValue.value)
    emit('change', currentValue.value)
  }

  provide(MeCheckboxGroupKey, { name: MeCheckboxGroupKey, currentValue, onChange })

  watch(
    () => props.modelValue,
    value => {
      currentValue.value = [...value]
    },
    {
      deep: true
    }
  )

  return {}
}
