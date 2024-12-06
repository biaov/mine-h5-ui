import type { ModelRef } from 'vue'
import type { ExtractEnums } from '../types'
import { colorType } from './enums'

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
 * defineModel 类型
 */
export namespace DefineModelOption {
  export interface ModelValue {
    type: ColorTypePropertyKey
    value: string
    alpha: number
  }
}

/**
 * hsbToRect
 */
export namespace HSBToRect {
  export interface Option {
    type: string
    value: number
    reverse?: boolean
  }
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
   * 标签
   */
  label?: string

  /**
   * 大小
   */
  size?: 'default' | 'large' | 'small'
}

export interface ModelValueOption {
  modelValue: ModelRef<DefineModelOption.ModelValue>
}

/**
 * useRender
 */
export namespace USERender {
  export interface Option extends ModelValueOption {}
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option extends ModelValueOption {}
}

/**
 * dropdown
 */
export namespace DropDown {
  export interface Emits {
    (event: 'change', bool: boolean): void
  }
  export interface Props {
    duration?: number
    rect?: {
      width: number
      height: number
      x: number
      y: number
    }
  }
}

/**
 * slide
 */
export namespace Slide {
  export interface Emits {}
  export interface Props {
    opacity?: boolean
    background?: string
    color?: string
  }
  export interface SetPointOption {
    sx: number
    ex: number
    iw: number
    width: number
  }
}

/**
 * input
 */
export namespace InputComp {
  export interface Emits {}
  export interface Props {
    prefix?: string
    suffix?: string
    range?: number[]
  }
}

/**
 * 属性 key
 */
export type ColorTypePropertyKey = ExtractEnums<typeof colorType>

/**
 * 枚举 options
 */
export interface ColorTypeOptionItem {
  value: ColorTypePropertyKey
}

/**
 * color-panel 组件
 */
export namespace ColorPanel {
  export interface Props {
    background?: string
  }
  export interface SetPointOption {
    sx: number
    sy: number
    ex: number
    ey: number
    width: number
    height: number
    iw: number
    ih: number
  }
  export interface ModelValue {
    x: number
    y: number
  }
}
