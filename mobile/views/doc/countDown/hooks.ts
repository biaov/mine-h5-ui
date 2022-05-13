import { ref } from 'vue'
import { BtnListItem, WebStatus } from './interfaces'
import initData from './data'

// 操作
export const useHandle = () => {
  const time = Object.freeze(2 * 60 * 60 * 1000) // 时间
  const btnList = Object.freeze(initData) // 按钮列表

  // 状态
  const handleStatus = ref<WebStatus>({
    isStart: false,
    isSuspend: false,
    isReset: false
  })

  // 当标签栏改变时
  const onClick = ({ type }: BtnListItem) => {
    Object.keys(handleStatus.value).forEach(key => {
      handleStatus.value[key] = type === key
    })
  }

  return { time, btnList, handleStatus, onClick }
}
