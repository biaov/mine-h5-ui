/**
 * 第二帧执行回调
 * @example
 * ```ts
 * import { useNextFrame } from 'mine-h5-ui'
 *
 * useNextFrame(() => {
 *   console.log('next frame')
 * })
 * ```
 */
export const useNextFrame = (cb: () => void) => {
  if (requestAnimationFrame) {
    requestAnimationFrame(() => requestAnimationFrame(cb))
    return
  }

  setTimeout(() => setTimeout(cb))
}
