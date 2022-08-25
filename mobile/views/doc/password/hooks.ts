import { ref } from 'vue'
import initData from './data'
import { ListDataItem, ChildListItem } from './types'

// 操作
export const useHandle = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击数字
  const handleNum = (e: number, item: ChildListItem) => {
    item.value.length < (item?.num ?? 6) && (item.value += String(e))
  }

  // 点击删除按钮
  const onDelete = (item: ChildListItem) => {
    item.value && (item.value = item.value.split('').slice(0, -1).join('')) // 判断是否为空
  }

  // 点击完成
  const onComplate = (item: ChildListItem) => {
    item.isFocus = false
  }

  // 聚焦输入框
  const onFocus = (item: ChildListItem) => {
    item.isFocus = true
    item.keyboardValue = true
  }

  // 失焦输入框
  const onBlur = (item: ChildListItem) => {
    item.keyboardValue = false
  }

  return { listData, handleNum, onDelete, onComplate, onFocus, onBlur }
}
