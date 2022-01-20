import { ref, watch } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 搜索框
export const useSearch = (props: Props, emit: Emits) => {
  const inputVal = ref(props.modelValue) // 输入框值
  // 点击软键盘的搜索/回车按钮
  const onKeypress = (e: KeyboardEvent) => {
    e.key === 'Enter' && emit('on-search')
  }
  // 输入框聚焦
  const onFocus = (e: FocusEvent) => {
    emit('on-focus', e)
  }
  // 输入框失去焦点
  const onBlur = (e: FocusEvent) => {
    emit('on-blur', e)
  }
  // 输入框 change 事件
  const onChange = (e: Event) => {
    emit('on-change', e)
  }
  // 输入框 input 事件
  const onInput = (e: Event) => {
    emit('on-input', e)
  }
  // 监听参数value的变化
  watch(
    () => props.modelValue,
    value => {
      inputVal.value = value
    }
  )
  // 监听输入框的值的变化
  watch(inputVal, value => {
    emit('update:modelValue', value)
  })
  return { inputVal, onKeypress, onFocus, onBlur, onInput, onChange }
}
// 操作按钮
export const useBtns = (emit: Emits) => {
  // 点击清理按钮
  const onClean = () => {
    emit('update:modelValue', '')
  }
  // 点击自定义按钮
  const handleBtn = () => {
    emit('on-click')
  }
  return { onClean, handleBtn }
}
