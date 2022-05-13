import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useHandle = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击开始按钮
  const onStart = (item: ListDataItem) => {
    // 是否已到终点
    if (item.value === 100) {
      item.value = 0
      item.start = undefined
    }
    // 开始动画API
    const startAnimate = (timestamp: number) => {
      item.start === undefined && (item.start = timestamp) // 设置开始
      const elapsed = timestamp - item.start // 当前距离开始时间
      item.value = Math.round(Math.min(elapsed * 0.05, 100)) // 当前进度
      elapsed < 2000 && window.requestAnimationFrame(startAnimate) // 2s之内完结
    }
    window.requestAnimationFrame(startAnimate) // 开启帧动画
  }

  return { listData, onStart }
}
