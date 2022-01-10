import { ListItem, Emits } from './interfaces'

// 操作
export const useHandler = (emit: Emits) => {
  // 点击列表项
  const onClick = (item: ListItem) => {
    !item.state && emit('on-change', { ...item })
  }
  return { onClick }
}
