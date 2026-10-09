import type { Emits } from './types'

/**
 * 点击 hook
 */
export const useImgEvent = (emit: Emits) => {
  /**
   * 点击按钮
   */
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  /**
   * 加载完成
   */
  const onLoad = (e: Event) => {
    emit('load', e)
  }

  /**
   * 加载失败
   */
  const onError = (e: Event) => {
    emit('error', e)
  }

  return { onClick, onLoad, onError }
}
