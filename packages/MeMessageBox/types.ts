/**
 * onOk 函数
 */
export type OnOk = (value?: string) => void
/**
 * onOff 函数
 */
export type OnOff = () => void
/**
 * onOk 函数 | onOff 函数
 */
export type HookFn = OnOk | OnOff

export type OptionType = 'alert' | 'confirm' | 'prompt' | 'custom'

/**
 * 传参
 */
export interface Option extends Record<string, string | HookFn | undefined> {
  tips?: string
  type?: OptionType
  message?: string
  html?: string
  cancelButtonText?: string
  confirmButtonText?: string
  onOff?: OnOff
  onOk?: OnOk
}

/**
 * alert, confirm, prompt, custom
 */
export type MessageBoxFn = (option: string | Option) => Promise<string | undefined>

/**
 * curOption
 */
export type CurOption = Option & {
  onAction?: (arg: string) => void
}

/**
 * MessageBox
 */
export interface InMessageBox extends Record<string, MessageBoxFn> {
  (option: Option, type?: string): Promise<string | undefined>
  alert: MessageBoxFn
  confirm: MessageBoxFn
  prompt: MessageBoxFn
  custom: MessageBoxFn
}

/**
 * emits
 */
export interface Emits {
  (event: 'action', eventName: string, value?: string): void
}

/**
 * props
 */
export interface Props {
  /**
   * 提示标题
   */
  tips?: string
  /**
   * 弹出框类型
   */
  type?: OptionType
  /**
   * 警告语
   */
  message?: string
  /**
   * 自定义 HTML
   */
  html?: string
  /**
   * 取消按钮内容
   */
  cancelButtonText?: string
  /**
   * 确认按钮内容
   */
  confirmButtonText?: string
  /**
   * 点击确定函数
   */
  onOk?: OnOk
  /**
   * 点击取消函数
   */
  onOff?: OnOff
}
