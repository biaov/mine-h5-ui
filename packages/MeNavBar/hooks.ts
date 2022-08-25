import { Emits } from './types'

// 操作
export const useHandler = (emit: Emits) => {
  // 点击左侧按钮
  const onClickLeft = (e: MouseEvent) => {
    emit('click-left', e)
  }

  // 点击右侧按钮
  const onClickRight = (e: MouseEvent) => {
    emit('click-right', e)
  }

  return { onClickLeft, onClickRight }
}
