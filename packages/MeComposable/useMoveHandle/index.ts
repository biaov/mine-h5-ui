import type { USEMoveHandle } from './types'
export * from './types'

/**
 * 移动操作处理
 * 鼠标按下, 移动, 抬起
 * 触摸开始, 移动, 结束
 * @example
 * ```ts
 * import { useTemplateRef } from 'vue'
 * import { useMoveHandle } from 'mine-h5-ui'
 * const nodeRef = useTemplateRef('demo')
 *
 * interface OptionEvent {
 *    x: number
 *    y: number
 *    type: string
 * }
 *
 * const option = {
 *    start(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchstart' }
 *    },
 *    move(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchdown' }
 *    },
 *    end(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchend' }
 *    }
 * }
 *
 * useMoveHandle(nodeRef.value, option)
 * ```
 */
export const useMoveHandle = (nodeRef: HTMLElement, option: Partial<USEMoveHandle.Option>) => {
  let isStart = false
  /**
   * 获取位置
   */

  const getPosition = (e: TouchEvent | MouseEvent) => {
    let x: number
    let y: number
    const type = e.type
    if (type === 'touchend') {
      x = (e as TouchEvent).changedTouches[0].clientX
      y = (e as TouchEvent).changedTouches[0].clientY
    } else if (type.startsWith('touch')) {
      x = (e as TouchEvent).touches[0].clientX
      y = (e as TouchEvent).touches[0].clientY
    } else {
      x = (e as MouseEvent).clientX
      y = (e as MouseEvent).clientY
    }

    return { x, y, type }
  }
  /**
   * 移动处理
   */
  const moveHandle = (e: TouchEvent | MouseEvent) => {
    option.move?.(getPosition(e))
  }

  /**
   * 结束处理
   */
  const endHandle = (e: TouchEvent | MouseEvent) => {
    document.removeEventListener('mousemove', moveHandle)
    document.removeEventListener('mouseup', endHandle)
    document.removeEventListener('touchmove', moveHandle)
    document.removeEventListener('touchend', endHandle)

    isStart = false

    option.end?.(getPosition(e))
  }

  /**
   * 开始处理
   */
  const startHandle = (e: TouchEvent | MouseEvent) => {
    if (isStart) return
    e.preventDefault()
    document.addEventListener('mousemove', moveHandle)
    document.addEventListener('mouseup', endHandle)
    document.addEventListener('touchmove', moveHandle)
    document.addEventListener('touchend', endHandle)

    isStart = true

    option.start?.(getPosition(e))
  }

  nodeRef.addEventListener('mousedown', startHandle, { passive: false })
  nodeRef.addEventListener('touchstart', startHandle, { passive: false })
}
