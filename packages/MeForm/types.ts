/**
 * props rules
 */
export interface RuleItem {
  type: string
  required?: boolean
  message?: string
  validator: (value: any) => boolean
  pattern: RegExp
}

/**
 * option
 */
export interface Option {
  valid: boolean
  message: string
  type: string
  value: Record<string, any>
}

/**
 * emits
 */
export interface Emits {
  (event: 'submit', option: Option): void
}

/**
 * props
 */
export interface Props {
  /**
   * 校验数据
   */
  model?: Record<string, any>
  /**
   * 校验规则
   */
  rules?: RuleItem[]
}
