import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击选项
  const onClickItem = ({ id }: ListDataItem) => {
    listData.value.forEach(elem => {
      elem.visible = elem.id === id
    })
  }

  // 点击确定按钮
  const onSure = (item: ListDataItem) => {
    item.title = item.value
    item.visible = false
  }

  return { listData, onSure, onClickItem }
}
