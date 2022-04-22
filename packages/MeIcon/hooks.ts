import { Emits } from './interfaces'

// 点击 hook
export const useClick = (emit: Emits) => {
  // 点击按钮
  const onClick = (e: MouseEvent) => {
    emit('on-click', e)
  }
  return { onClick }
}
