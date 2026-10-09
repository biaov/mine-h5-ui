/**
 * 规则项
 */
export interface RulesItem {
  type: string
  message: string
  required?: boolean
  pattern?: RegExp
  validator?: (value: any) => boolean
}

/**
 * 表单
 */
export interface Form {
  username: string
  password: string
  sms: string
}

/**
 * 列表项
 */
export interface ListDataItem {
  id: number
  label: string
  form: Form
  rules: RulesItem[]
}

/**
 * 提交回调
 */
export interface SubmitCallBackParams {
  valid: boolean
  value: Form
}
