import { FormatData } from '../MeAPI/types'
import type { DefaultSlotProp } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'end'): void
  (event: 'progress', time: number): void
}

/**
 * props
 */
export interface Props {
  /**
   * 需要倒计的时间
   */
  time?: number
  /**
   * 时间格式化, DD:hh:mm:ss:ms
   */
  format?: string
  /**
   * 是否开始
   */
  isStart?: boolean
  /**
   * 是否暂停
   */
  isSuspend?: boolean
  /**
   * 是否重置
   */
  isReset?: boolean
}

/**
 * slots
 */
export interface Slots {
  default: (props: Partial<FormatData>) => ReturnType<DefaultSlotProp>
}
