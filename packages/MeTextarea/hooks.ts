import type { Emits } from './types'

/**
 * 输入框
 */
export const useTextarea = (emit: Emits) => {
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

  return { onFocus, onBlur, onChange, onInput }
}
