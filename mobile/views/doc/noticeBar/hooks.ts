import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem, EventMsg } from './interfaces'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  // 事件提示语
  const eventMsg = Object.freeze<EventMsg>({
    preappend: '你点击了前面的图标',
    append: '你点击了后面的图标'
  })
  const listData = Object.freeze<ListDataItem>(initData) // 列表数据

  // 当标签栏改变时
  const onClick = (type: string, index: number) => {
    // 提示语
    const msg = type === 'notice' ? `你点击了第 ${index + 1} 个公告` : eventMsg[type]
    $MeToast(msg)
  }

  return { listData, onClick }
}
