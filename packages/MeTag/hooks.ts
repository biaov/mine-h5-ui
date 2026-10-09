import type { Emits } from './types'

/**
 * 操作
 */
export const useHandler = (emit: Emits) => {
  /**
   * 点击关闭按钮
   */
  const onClose = (e: MouseEvent) => {
    emit('close', e)
  }

  return { onClose }
}
