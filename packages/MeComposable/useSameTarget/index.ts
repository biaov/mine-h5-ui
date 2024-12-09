import type { HandleClick } from './types'

/**
 * 相同的目标节点
 * @example
 * ```ts
 * import { useSameTarget } from 'mine-h5-ui'
 *
 * const { onClick, onMousedown, onMouseup } = useSameTarget((e: PointerEvent) => {
 *   console.log(e) // PointerEvent {isTrusted: true, _vts: 1733714310245, pointerId: 1, width: 1, height: 1, …}
 * })
 * ```
 */
export const useSameTarget = (handleClick: HandleClick) => {
  let targetMousedown = false
  let targetMouseup = false
  /**
   * 鼠标按下
   */
  const onMousedown = (e: MouseEvent) => {
    targetMousedown = e.target === e.currentTarget
  }
  /**
   * 鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    targetMouseup = e.target === e.currentTarget
  }
  /**
   * 鼠标点击
   */
  const onClick = (e: Event) => {
    if (!(targetMousedown && targetMouseup)) return
    handleClick(e as PointerEvent)
  }

  return { onMousedown, onMouseup, onClick }
}
