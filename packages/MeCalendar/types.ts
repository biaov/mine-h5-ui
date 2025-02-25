import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'change', value: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * 主题颜色
   */
  themeColor?: string
  /**
   * 可关闭
   */
  closable?: boolean
  /**
   * 样式
   */
  style?: CSSStyleRule | string
}

/**
 * useHandle
 */
export namespace USEHandle {
  export interface Option {
    props: Props
    emit: Emits
    modelValue: ModelRef<string | number>
    visible: ModelRef<boolean>
  }
}

/**
 * useShow
 */
export namespace USEShow {
  export interface Option {
    visible: ModelRef<boolean>
  }
}

export interface DayItem {
  value: string
  y: number
  m: number
  d: number
  disabled?: boolean
  today?: boolean
  selected?: boolean
}
