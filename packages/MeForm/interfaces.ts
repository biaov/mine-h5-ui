/* eslint-disable no-unused-vars */
// props model
export interface Model {
  [key: string]: any
}

// props rules
export interface RuleItem {
  type: string
  required?: boolean
  message?: string
  validator: (value: any) => boolean
  pattern: RegExp
}

// option
export interface Option {
  valid: boolean
  message: string
  type: string
  value: Model
}

// emits
export interface Emits {
  (event: 'on-submit', option: Option): void
}

// props
export interface Props {
  model: Model
  rules: RuleItem[]
}
