import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'click'): void
  (event: 'search'): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'input', e: Event): void
  (event: 'change', e: Event): void
}

/**
 * props
 */
export interface Props {
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 右侧按钮内容
   */
  btnText?: string
  /**
   * 搜索框对齐方式
   */
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit'
  /**
   * 搜索框倒角
   */
  radius?: string
  /**
   * 搜索框背景色
   */
  background?: string
  /**
   * 字体颜色
   */
  color?: string
  /**
   * 是否禁用输入框
   */
  disabled?: boolean
}

/**
 * useBtns
 */
export namespace USEBtns {
  export interface Option {
    emit: Emits
    inputVal: ModelRef<string | undefined>
  }
}
