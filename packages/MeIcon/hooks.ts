import { Emits } from './types'

// 点击 hook
export const useClick = (emit: Emits) => {
  // 点击按钮
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  return { onClick }
}
