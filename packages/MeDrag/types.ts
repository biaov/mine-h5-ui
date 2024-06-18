import type { Ref, ModelRef } from 'vue'
import type { DefaultSlotProp } from '../types'

/**
 * calcSize name
 */
export type CalcSizeName = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'

/**
 * 矩形区域
 */
export interface Rect {
  w: number
  h: number
  x: number
  y: number
  r: number
}

/**
 * 列表项
 */
export interface ListDataItem {
  rect: Rect
  url: string
}

/**
 * 角度和 cursor 的列表项
 */
export interface AngleToCursorItem {
  start: number
  end: number
  cursor: string
}

/**
 * 坐标
 */
export interface Point {
  x: number
  y: number
}

/**
 * 距离
 */
export interface Distance {
  distX: number
  distY: number
}

/**
 * 共享数据和方法
 */
export interface Share {
  getCurItem: Ref<Rect>
  onEmitChange: (type: string) => void
  onUpdate: () => void
}

/**
 * useMove 共享数据和方法
 */
export interface MoveShare extends Share {
  listData: Ref<ListDataItem[]>
}

/**
 * useMove 共享数据和方法
 */
export interface ResizeShare extends Share {
  listData: Ref<ListDataItem[]>
}

/**
 * useRotate 共享数据和方法
 */
export interface RotateShare extends Share {
  getCenterPoint: () => Point
}

/**
 * northResize 方法参数
 */
export interface Option {
  startPoint: Point
  centerPoint: Point
  symmPoint: Point
  curPoint: Point
  rect: Rect
}

/**
 * resizeGroup
 */
export interface ResizeGroup {
  nw: (option: Option) => Rect
  n: (option: Option) => Rect
  ne: (option: Option) => Rect
  e: (option: Option) => Rect
  se: (option: Option) => Rect
  s: (option: Option) => Rect
  sw: (option: Option) => Rect
  w: (option: Option) => Rect
}

/**
 * ScaleShare 共享数据和方法
 */
export interface ScaleShare extends Share {
  listData: Ref<ListDataItem[]>
}

/**
 * emits
 */
export interface Emits {
  (event: 'change', list: ListDataItem[], type: string): void
}

/**
 * props
 */
export interface Props {
  /**
   * 容器宽度
   */
  width?: string
  /**
   * 容器高度
   */
  height?: string
  /**
   * 选中主题色
   */
  theme?: string
  /**
   * 选中主题文本色
   */
  themeText?: string
  /**
   * 对正角度范围
   */
  angleRange?: number
  /**
   * 双指缩放一倍的像素
   */
  scale?: number
}

/**
 * defineSlots
 */
export interface Slots {
  default: (props: { item: ListDataItem; index: number }) => ReturnType<DefaultSlotProp>
}

/**
 * 基础配置
 */
interface BaseOption {
  props: Readonly<Required<Props>>
  emit: Emits
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option extends Pick<BaseOption, 'emit'> {
    listModel: ModelRef<ListDataItem[]>
    currentModel: ModelRef<number>
  }
}

/**
 * useMove
 */
export namespace USEMove {
  export interface Option extends MoveShare {
    currentModel: ModelRef<number>
  }
}

/**
 * useResize
 */
export namespace USEResize {
  export interface Option extends ResizeShare {
    currentModel: ModelRef<number>
  }
}

/**
 * useScale
 */
export namespace USEScale {
  export interface Option extends ScaleShare, Pick<BaseOption, 'props'> {
    currentModel: ModelRef<number>
  }
}
