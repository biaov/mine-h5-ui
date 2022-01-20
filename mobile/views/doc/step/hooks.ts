import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击下一步
  const onClickNext = (item: ListDataItem) => {
    const child = item.children
    if (item.active.length < child.length) {
      const last = item.active.at(-1)
      const index = child.findIndex(el => el.name === last)
      item.active.push(child[index + 1].name)
    } else {
      item.active = [child[0].name]
    }
  }
  return { listData, onClickNext }
}
