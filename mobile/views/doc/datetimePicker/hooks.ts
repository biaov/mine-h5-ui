import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击确定按钮
  const onSure = (item: ListDataItem) => {
    item.title = item.value
    item.visible = false
  }
  return { listData, onSure }
}
