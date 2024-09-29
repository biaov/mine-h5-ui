import type { ModelRef } from 'vue'

/**
 * prop styles
 */
export type PropStyles = {
  /**
   * 大小
   */
  height: string
  /**
   * 倒角
   */
  radius: string
  /**
   * 线背景色
   */
  lineBgc: string
}

/**
 * emits
 */
export interface Emits {}

/**
 * props
 */
export interface Props {
  /**
   * 大小
   */
  label?: string

  /**
   * 大小
   */
  size?: 'default' | 'large' | 'small'
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    modelValue: ModelRef<string>
  }
}

/**
 * dropdown
 */
export namespace DropDown {
  export interface Props {
    rect?: {
      width: number
      height: number
      x: number
      y: number
    }
  }
}
