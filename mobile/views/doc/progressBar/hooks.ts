import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击开始按钮
   */
  const onStart = (item: ListDataItem) => {
    // 是否已到终点
    if (item.value === 100) {
      item.value = 0
      item.start = undefined
    }
    /**
     * 开始动画 API
     */
    const startAnimate = (timestamp: number) => {
      item.start === undefined && (item.start = timestamp) // 设置开始
      /**
       * 当前距离开始时间
       */
      const elapsed = timestamp - item.start
      item.value = Math.round(Math.min(elapsed * 0.05, 100)) // 当前进度
      elapsed < 2000 && window.requestAnimationFrame(startAnimate) // 2s 之内完结
    }
    window.requestAnimationFrame(startAnimate) // 开启帧动画
  }

  return { listData, onStart }
}
