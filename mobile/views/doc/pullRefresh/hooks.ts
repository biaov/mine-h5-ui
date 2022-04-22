import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 刷新
export const useRefresh = () => {
  const active = ref(1) // 活动索引
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 刷新
  const onRefresh = (item: ListDataItem) => {
    setTimeout(() => {
      item.count++
      item.loading = false
    }, 3000)
  }
  return { active, listData, onRefresh }
}
