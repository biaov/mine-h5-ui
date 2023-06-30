import type { ListItem, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (emit: Emits) => {
  /**
   * 点击列表项
   */
  const onClick = (item: ListItem) => {
    !item.state && emit('change', { ...item })
  }

  return { onClick }
}
