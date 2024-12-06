import type { Emits } from './types'

/**
 * 组件选择器，组件名称
 */
export const wrapCls = 'me-text-animation'

/**
 * 操作
 */
export const useHandler = (emit: Emits) => {
  /**
   * 点击事件
   */
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  return { onClick }
}
