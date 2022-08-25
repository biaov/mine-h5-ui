import { ref, getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击
  const onClick = (index: number) => {
    $MeToast(`你点击了第${index + 1}项`)
  }

  return { listData, onClick }
}
