import { ref, watch } from 'vue'
import type { Props, Emits } from './types'

/**
 * 搜索框
 */
export const useSearch = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 输入框值
   */
  const inputVal = ref(props.modelValue)

  /**
   * 点击软键盘的搜索/回车按钮
   */
  const onKeypress = (e: KeyboardEvent) => {
    e.key === 'Enter' && emit('search')
  }

  /**
   * 输入框聚焦
   */
  const onFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  /**
   * 输入框失去焦点
   */
  const onBlur = (e: FocusEvent) => {
    emit('blur', e)
  }

  /**
   * 输入框 change 事件
   */
  const onChange = (e: Event) => {
    emit('change', e)
  }

  /**
   * 输入框 input 事件
   */
  const onInput = (e: Event) => {
    emit('input', e)
  }

  /**
   * 监听参数 value 的变化
   */
  watch(
    () => props.modelValue,
    value => {
      inputVal.value = value
    }
  )

  /**
   * 监听输入框的值的变化
   */
  watch(inputVal, value => {
    emit('update:modelValue', value)
  })

  return { inputVal, onKeypress, onFocus, onBlur, onInput, onChange }
}

/**
 * 操作按钮
 */
export const useBtns = (emit: Emits) => {
  /**
   * 点击清理按钮
   */
  const onClean = () => {
    emit('update:modelValue', '')
  }

  /**
   * 点击自定义按钮
   */
  const handleBtn = () => {
    emit('click')
  }

  return { onClean, handleBtn }
}
