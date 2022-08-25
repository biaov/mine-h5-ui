import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 初始化页面
export const useWebData = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 手动控制值
  const manual = ref({
    thousand: true,
    endValue: 6666.66,
    value: true
  })

  return { listData, manual }
}
