import { ref, watch } from 'vue'
import { Props } from './types'
import { ListDataItem, Emits } from './interfaces'

// 操作
export const useHandler = (props: Props, emit: Emits) => {
  // 列表样式
  const listData = ref(Array.from({ length: props.count }, (k, v) => ({ id: v + 1, state: false })))
  // 点击按钮
  const onClick = ({ id, state }: ListDataItem) => {
    // 判断是否为只读/禁用/选中状态
    if ((state && !listData.value[id].state) || props.disabled || props.readonly) return
    emit('update:modelValue', id)
    emit('on-change')
    // 循环遍历设置状态值的改变
    listData.value.forEach(elem => {
      elem.state = elem.id <= id
    })
  }
  // 设置页面状态
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
