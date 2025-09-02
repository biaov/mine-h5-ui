import type { ModelRef, Ref } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'change', e: Event): void
  (event: 'input', e: Event): void
  (event: 'click-sms', e: MouseEvent): void
  (event: 'click-icon', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 输入框值
   */
  type?: string
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 只读状态
   */
  readonly?: boolean
  /**
   * 禁用状态
   */
  disabled?: boolean
  /**
   * label 内容
   */
  label?: string
  /**
   * label 宽度
   */
  labelWidth?: string
  /**
   * label 对齐方式
   */
  labelAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'initial' | 'inherit'
  /**
   * label 颜色
   */
  labelColor?: string
  /**
   * label 图标
   */
  labelIcon?: string
  /**
   * 聚焦边框样式
   */
  focusType?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * 聚焦颜色
   */
  focusColor?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 密码输入框
   */
  password?: boolean
  /**
   * 整数输入
   */
  digit?: boolean
  /**
   * 短信验证码
   */
  smsMsg?: string
  /**
   * 短信颜色
   */
  smsColor?: string
  /**
   * 是否开启倒计时
   */
  smsIs?: boolean

  /**
   * 最大长度
   */
  maxlength?: number
  /**
   * 最小长度
   */
  minlength?: number
}

/**
 * useInput
 */
export namespace USEInput {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    sms: Ref<HTMLDivElement | undefined>
    inputVal: ModelRef<string | number>
  }
}
