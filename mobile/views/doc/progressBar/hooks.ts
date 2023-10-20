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
    /**
     * 是否已到终点
     */
    if (item.value === 100) {
      item.value = 0
      item.start = undefined
    }
    /**
     * 开始动画 API
     */
    const startAnimate = (timestamp: number) => {
      /**
       * 设置开始
       */
      item.start === undefined && (item.start = timestamp)

      /**
       * 当前距离开始时间
       */
      const elapsed = timestamp - item.start

      /**
       * 当前进度
       */
      item.value = Math.round(Math.min(elapsed * 0.05, 100))

      /**
       * 2s 之内完结
       */
      elapsed < 2000 && window.requestAnimationFrame(startAnimate)
    }
    /**
     * 开启帧动画
     */
    window.requestAnimationFrame(startAnimate)
  }

  return { listData, onStart }
}
