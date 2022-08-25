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
  value: Record<string, any>
}

// emits
export interface Emits {
  (event: 'submit', option: Option): void
}

// props
export interface Props {
  model: Record<string, any>
  rules: RuleItem[]
}
