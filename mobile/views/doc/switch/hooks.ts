import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击 Switch 开关
   */
  const onClick = ({ async, value }: ListDataItem) => {
    // 判断是否为异步
    if (async) {
      $MeToast('当前为异步状态，可自行控制开关的打开和关闭')
    } else {
      $MeToast(value ? '打开' : '关闭')
    }
  }

  return { listData, onClick }
}
