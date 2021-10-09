/* eslint-disable no-unused-vars */
// 防抖节流回调函数
export type DTCallback = (e: Event) => void;
// 加锁回调函数
export type LockedCallBack = (e?: Event, fn?: (value: boolean) => void) => void;
