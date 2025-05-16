import { ref } from 'vue'
import initData, { getInitData, resultList } from './data'
import type { ListDataItem } from './types'

/**
 * 页面数据
 * 以下的请求，只为模拟，不做实际请求
 * 如果是真实的，请使用 API 请求
 */
export const useWebData = () => {
  // 发送获取请求
  const listData = ref<ListDataItem[]>(initData)

  const onShowCaptcha = (item: ListDataItem) => {
    item.visible = true
  }

  let checkCount = 0

  const onCheck = ([x, y]: number[], item: ListDataItem) => {
    // 发送校验请求
    checkCount++
    const [rx, ry] = resultList.find(it => it.id === item.item.id)!.result
    const range = 10
    if (Math.abs(x - rx) < range && Math.abs(y - ry) < range) {
      item.statusCode = 1
    } else {
      item.statusCode = 2
      if (checkCount > 2) {
        item.statusCode = 3
        checkCount = 0
      }
    }
  }

  const onRefresh = (item: ListDataItem) => {
    // 发送刷新请求
    item.item = getInitData(item.item.id)
  }

  return { listData, onShowCaptcha, onCheck, onRefresh }
}
