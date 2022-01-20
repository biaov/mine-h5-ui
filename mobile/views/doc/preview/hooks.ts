import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作项
export const useHandler = () => {
  const { $MePreview } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击图片预览
  const onPreview = (item: ListDataItem) => {
    $MePreview(item)
  }
  return { listData, onPreview }
}
