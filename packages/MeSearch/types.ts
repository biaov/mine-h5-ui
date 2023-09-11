/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', str: string): void
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
   * v-model 绑定值
   */
  modelValue: string
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
