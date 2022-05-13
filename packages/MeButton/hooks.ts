import { Emits } from './interfaces'

// 操作
export const useHandler = (emit: Emits) => {
  // 点击事件
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  return { onClick }
}
