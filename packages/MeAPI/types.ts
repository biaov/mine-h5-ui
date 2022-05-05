/* eslint-disable no-unused-vars */
export type DTCallback = (e: Event) => void // 防抖节流回调函数
export type LockedCallback = (e?: Event, fn?: (value: boolean) => void) => void // 加锁回调函数
export type ThrottleBack = (e: Event) => void // 节流返回值
export type DebounceBack = (e: Event) => void // 防抖返回值
export type LockedBack = (e?: Event) => void // 加锁返回值
