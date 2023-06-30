import { ref, watch } from 'vue'
import type { Props, ListDataItem, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 列表样式
   */
  const listData = ref(Array.from({ length: props.count }, (_, i) => ({ id: i + 1, state: false })))

  /**
   * 点击按钮
   */
  const onClick = ({ id, state }: ListDataItem) => {
    // 判断是否为只读/禁用/选中状态
    if ((state && !listData.value[id].state) || props.disabled || props.readonly) return
    emit('update:modelValue', id)
    emit('change')
    // 循环遍历设置状态值的改变
    listData.value.forEach(elem => {
      elem.state = elem.id <= id
    })
  }

  /**
   * 设置页面状态
   */
  const setStatus = () => {
    // 循环遍历设置状态值的改变
    listData.value.forEach(elem => {
      elem.state = elem.id <= props.modelValue
    })
  }

  watch(() => props.modelValue, setStatus)

  setStatus()

  return { listData, onClick }
}
