import type { App } from 'vue'

/**
 * 安装方法
 */
export interface InstallRecord {
  install: (app: App) => void
}

/**
 * 组件名称
 */
export interface NameRecord {
  name: string
}

/**
 * 组件自定义名称
 */
export interface ComponentNameRecord {
  componentName: string
}

/**
 * 增加组件名称
 */
export type AddNameRecord<T> = T & NameRecord

/**
 * 增加组件自定义名称
 */
export type AddComponentNameRecord<T> = T & ComponentNameRecord

/**
 * 默认插槽参数
 */
export type DefaultSlotProp = (props: Record<string, any>) => any

/**
 * 默认插槽类型
 */
export interface DefaultSlots {
  default: DefaultSlotProp
  icon?: DefaultSlotProp
}

/**
 * 合并类型为交叉类型
 */
export type Merge<T, R> = {
  [K in keyof T]: T[K]
} & {
  [K in keyof R]: R[K]
}

/**
 * 合并交叉类型
 */
type MergeIntersection<T> = Pick<T, keyof T>

/**
 * 提取必传属性
 */
export type PickRequiredUnion<P, U extends keyof P> = MergeIntersection<Merge<Required<Pick<P, U>>, Omit<P, U>>>

/**
 * 除了提取的属性，其他都是必传属性
 */
export type PickNotRequiredUnion<P, U extends keyof P> = MergeIntersection<Merge<Pick<P, U>, Required<Omit<P, U>>>>

type NativeType = null | number | string | boolean | symbol | Function

type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never)

export type InferDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>
}
