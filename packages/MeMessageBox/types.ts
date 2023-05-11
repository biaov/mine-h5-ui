export type OnOk = (value?: string) => void // onOk 函数
export type OnOff = () => void // onOff 函数
export type HookFn = OnOk | OnOff // onOk 函数 | onOff 函数

// 传参
export interface Option extends Record<string, string | HookFn | undefined> {
  tips?: string
  type?: string
  message?: string
  html?: string
  cancelButtonText?: string
  confirmButtonText?: string
  onOff?: OnOff
  onOk?: OnOk
}

// alert, confirm, prompt, custom
export type MessageBoxFn = (option: string | Option) => Promise<string | undefined>

// curOption
export type CurOption = Option & {
  onAction?: (arg: string) => void
}

// MessageBox
export interface InMessageBox extends Record<string, MessageBoxFn> {
  (option: Option, type?: string): Promise<string | undefined>
  alert: MessageBoxFn
  confirm: MessageBoxFn
  prompt: MessageBoxFn
  custom: MessageBoxFn
}

// emits
export interface Emits {
  (event: 'action', eventName: string, value?: string): void
}

// props
export interface Props {
  tips: string
  type: string
  message: string
  html: string
  cancelButtonText: string
  confirmButtonText: string
  onOk: OnOk
  onOff: OnOff
}
