/* eslint-disable no-unused-vars */

import { Ref } from 'vue'

// 矩形区域
export interface Rect {
  w: number
  h: number
  x: number
  y: number
  r: number
}

// 列表项
export interface ListDataItem {
  rect: Rect
}

// 角度和 cursor的列表项
export interface AngleToCursorItem {
  start: number
  end: number
  cursor: string
}

// 坐标
export interface Point {
  x: number
  y: number
}

// 距离
export interface Distance {
  distX: number
  distY: number
}

// 共享数据和方法
export interface Share {
  getCurItem: Ref<Rect>
  onEmitChange: (type: string) => void
  onUpdate: () => void
}

// useMove 共享数据和方法
export interface MoveShare extends Share {
  listData: Ref<ListDataItem[]>
}

// useMove 共享数据和方法
export interface ResizeShare extends Share {
  listData: Ref<ListDataItem[]>
}

// useRotate 共享数据和方法
export interface RotateShare extends Share {
  getCenterPoint: () => Point
}

// northResize 方法参数
export interface Option {
  startPoint: Point
  centerPoint: Point
  symmPoint: Point
  curPoint: Point
  rect: Rect
}

// resizeGroup
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

// ScaleShare 共享数据和方法
export interface ScaleShare extends Share {
  listData: Ref<ListDataItem[]>
}

// emits
export interface Emits {
  (event: 'on-change', list: ListDataItem[], type: string): void
  (event: 'update:list', list: ListDataItem[]): void
  (event: 'update:current', index: number): void
}

// props
export interface Props {
  current: number
  list: ListDataItem[]
  width: string
  height: string
  theme: string
  themeText: string
  angleRange: number
  scale: number
}
