import { ref } from 'vue'
import initData from './data'
import type { BtnListItem, WebStatus } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 时间
   */
  const time = Object.freeze(2 * 60 * 60 * 1000)
  /**
   * 按钮列表
   */
  const btnList = Object.freeze(initData)

  /**
   * 状态
   */
  const handleStatus = ref<WebStatus>({
    isStart: false,
    isSuspend: false,
    isReset: false
  })

  /**
   * 当标签栏改变时
   */
  const onClick = ({ type }: BtnListItem) => {
    Object.keys(handleStatus.value).forEach(key => {
      handleStatus.value[key] = type === key
    })
  }

  return { time, btnList, handleStatus, onClick }
}
