import { ref } from 'vue'
import initData from './data'
import { createArr } from './function'
import { ListDataItem, LoadMoreText } from './interfaces'
// 操作
export const useHandler = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 状态文本
  const loadMoreText = ref<LoadMoreText>({
    nomore: '没有更多数据了',
    more: '加载更多',
    loading: '正在加载中...'
  })
  // 加载更多
  const onLoadMore = (item: ListDataItem) => {
    if (item.loadStatus !== 'more') return
    item.loadStatus = 'loading'
    setTimeout(() => {
      item.list.push(...createArr())
      item.loadStatus = 'nomore'
    }, 1500)
  }
  return { listData, loadMoreText, onLoadMore }
}
