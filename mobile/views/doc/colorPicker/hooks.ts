import { ref } from 'vue'
import { useColorTransform } from '@/plugins'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 页面数据
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  const filterColor = (item: ListDataItem) => {
    if (!item.customShow) return
    if (!item.props.value) return '#409eff'
    return useColorTransform(item.props.value.value, [item.props.value.type, 'rgb'])
  }

  return { listData, filterColor }
}
