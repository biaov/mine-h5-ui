import { ref, onMounted, onUnmounted } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import type { CityItem, Emits } from './types'

/**
 * 初始化数据
 */
export const useScroll = () => {
  /**
   * 当前字母
   */
  const curLetter = ref('')
  /**
   * listCont 节点
   */
  const listCont = ref<HTMLDivElement>()
  /**
   * 子节点
   */
  let arrLi: HTMLCollection

  /**
   * 滚动条
   */
  const onScroll = () => {
    const { scrollTop } = document.documentElement

    /**
     * 是否滚动
     */
    if (scrollTop >= (arrLi[0] as HTMLDivElement).offsetTop) {
      /**
       * 遍历节点数组
       */
      for (let i = 0; i < arrLi.length; i++) {
        /**
         * 当前节点
         */
        const el = arrLi[i] as HTMLDivElement
        /**
         * 判断是否可显示
         */
        if (el.nodeName === 'LI' && scrollTop > (arrLi[0] as HTMLDivElement).offsetTop && scrollTop < el.offsetTop) {
          /**
           * 设置当前字母
           */
          curLetter.value = arrLi[i - 1].children[0].children[0].innerHTML
          break
        }
      }
    } else {
      curLetter.value = ''
    }
  }

  onMounted(() => {
    arrLi = listCont.value!.children
    Bind(document, 'scroll', onScroll)
  })

  onUnmounted(() => {
    Unbind(document, 'scroll', onScroll)
  })

  return { curLetter, listCont }
}

/**
 * 按钮
 */
export const useBtns = (emit: Emits) => {
  /**
   * 点击内容列表
   */
  const handleLi = (item: CityItem) => {
    emit('click', { ...item })
  }

  return { handleLi }
}
