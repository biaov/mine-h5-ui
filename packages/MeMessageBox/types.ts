/* eslint-disable no-unused-vars */
import { PublicProps } from '../types'
import { Option, Props as DefaultProps } from './interfaces'

export type OnOk = (arg?: string) => void // onOk 函数
export type OnOff = () => void // onOff 函数
export type HookFn = OnOk | OnOff // onOk 函数 | onOff 函数
export type Props = PublicProps<DefaultProps> // 当前 vue props

// curOption
export type CurOption = Option & {
  onAction?: (arg: string) => void
}

// alert, confirm, prompt, custom
export type MessageBoxFn = (option: Option) => Promise<string | undefined>
