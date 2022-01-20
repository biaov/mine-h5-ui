import { Emits } from './interfaces'

// 操作
export const useHandler = (emit: Emits) => {
  // 点击关闭按钮
  const onClose = (e: MouseEvent) => {
    emit('on-close', e)
  }
  return { onClose }
}
