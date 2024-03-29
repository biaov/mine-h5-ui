import { ref } from 'vue'
import { Random } from 'mockjs'
import { RandomNum, RgbToHex } from '@/utils/functions'
import initData from './data'
import type { ListItem } from './types'

/**
 * 操作
 */
export const useWebData = () => {
  /**
   * 模态框显示状态
   */
  const isShowMask = ref(true)
  const labels = ['基础用法', '自定义大小', '填充模式', '倒角']
  /**
   * 列表数据
   */
  const list: ListItem[] = initData

  list.forEach((item, index) => {
    item.id = index + 1
    item.label = labels[index]
    item.list.forEach((it, i) => {
      it.id = i + 1
      const background = RgbToHex(`rgb(${0},${RandomNum(100, 215)},${RandomNum(100, 215)})`)
      it.src = Random.image('45x45', background, '#fff', 'png', 'M')
    })
  })

  /**
   * 列表数据
   */
  const listData = Object.freeze(list)
  const listLen = listData.reduce((prev, item) => prev + (item.list[0] && item.list[0].fill ? 0 : item.list.length), 0)
  let imgCount = 0

  /**
   * 结果处理
   */
  const resultHandler = () => {
    listLen === imgCount &&
      setTimeout(() => {
        /**
         * 关闭状态栏
         */
        isShowMask.value = false
      }, 500)
  }

  /**
   * 加载完图
   */
  const onLoad = () => {
    imgCount++
    resultHandler()
  }

  /**
   * 图片加载错误
   */
  const onError = () => {
    imgCount++
    resultHandler()
  }

  return { isShowMask, listData, onLoad, onError }
}
