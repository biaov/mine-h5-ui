import type { PostMessageReturn, MessageCallback } from './types'

/**
 * 监听消息
 */
export const MessageEventListener = (callback: MessageCallback, customizeCheck = false) => {
  const localOrigin = window.location.origin
  window.addEventListener(
    'message',
    ({ origin, data }: MessageEvent) => {
      if (origin !== localOrigin || (!customizeCheck && !data.includes('/doc'))) return
      callback(data)
    },
    false
  )
}

/**
 * 发送消息
 * @param { Window } otherWindow 需要向该窗口发送消息
 * @param { string } origin 源地址
 * @returns { PostMessageReturn } 返回信息
 */
export const PostMessage = (otherWindow: Window, origin = window.location.origin): PostMessageReturn => {
  /**
   * 发送数据
   */
  const send = (data: string) => {
    otherWindow.postMessage(data, origin)
  }

  return { send }
}

/**
 * 颜色 rgb 转十六进制
 * @param { string } rgb
 * @returns
 */
export const RgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.match(/\d+/g)!
  const hex = `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).substring(1)}`

  return hex
}

/**
 * 随机数
 * @param { number } [min=0] 最小值
 * @param { number } [max=255] 最大值
 * @returns { number } 生成的随机数
 */
export const RandomNum = (min = 0, max = 255) => ~~(Math.random() * (max - min + 1) + min)

/**
 * 延迟器
 * @param { number } [time=500] 延迟时间
 * @returns { Promise<boolean> } Promise
 */
export const Retarder = (time = 500) =>
  new Promise<boolean>(resolve => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

export default {
  MessageEventListener, // 监听消息
  PostMessage, // 发送消息
  RgbToHex, // 颜色 rgb 转十六进制
  RandomNum, // 随机数
  Retarder // 延迟器
}
