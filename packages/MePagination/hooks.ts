import { computed, ModelRef } from 'vue'
import type { Props } from './types'

/**
 * 分页器
 */
export const usePagination = (props: Required<Props>, current: ModelRef<number>) => {
  const maxShowCount = 5
  const totalSize = computed(() => Math.ceil(props.total / props.pageSize))
  const filterItems = computed(() => {
    let tempCurrent = current.value
    const currentMax = totalSize.value - maxShowCount / 2 // 临时最大值
    current.value > currentMax && (tempCurrent = Math.ceil(currentMax))

    const showCount = Math.min(maxShowCount, totalSize.value) // 显示数量
    let start = Math.ceil(tempCurrent - 2.5) // 开始索引
    start < 1 && (start = 1) // 开始索引最少为 1
    // 生成列表项
    const items = Array.from({ length: showCount }, (_, i) => {
      const index = i + start
      if (props.ellipsis && Math.abs(current.value - index) > 1 && (!i || i === showCount - 1)) return '···'
      return index
    })
    return items
  })

  /**
   * 点击项
   */
  const onClickItem = (item: number | string, index?: number) => {
    let newCurrent = current.value
    switch (item) {
      case 'prev':
        newCurrent--
        break
      case 'next':
        newCurrent++
        break
      case '···':
        newCurrent += index ? 2 : -2
        break
      default:
        if (item === current.value) return
        newCurrent = item as number
        break
    }
    newCurrent <= 0 && (newCurrent = 1)
    newCurrent > totalSize.value && (newCurrent = totalSize.value)
    current.value = newCurrent
  }

  return {
    totalSize,
    filterItems,
    onClickItem
  }
}
