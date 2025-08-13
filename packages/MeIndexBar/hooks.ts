import { ref, onMounted, onUnmounted, useTemplateRef, computed } from 'vue'
import type { Props, CityItem, Emits, ListItem } from './types'

/**
 * 初始化数据
 */
export const useScroll = (props: Required<Props>) => {
  const indexBarRef = useTemplateRef<HTMLElement>('indexBarNode')
  /**
   * 当前字母
   */
  const curLetter = ref(props.list[0].name)
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
  const onScroll = (e: Event) => {
    const { scrollTop } = e.target as HTMLDivElement
    const first = arrLi[0] as HTMLDivElement
    /**
     * 是否滚动
     */
    if (scrollTop >= first.offsetTop) {
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
        if (el.nodeName === 'LI' && scrollTop > first.offsetTop && scrollTop < el.offsetTop) {
          /**
           * 设置当前字母
           */
          curLetter.value = arrLi[i - 1].children[0].children[0].innerHTML
          break
        }
      }
    } else {
      curLetter.value = props.list[0].name
    }
  }

  const filterShow = computed(() => (index: number) => {
    const curIndex = props.list.findIndex(item => item.name === curLetter.value)
    if (curIndex < 0) return false
    const range = props.range
    const middle = ~~(range / 2) + 1
    if (curIndex < middle) {
      return index < range
    } else if (curIndex > props.list.length - (middle + 1)) {
      return index > props.list.length - (range + 1)
    } else {
      return index < curIndex + middle && index > curIndex - middle
    }
  })
  onMounted(() => {
    arrLi = listCont.value!.children
    indexBarRef.value && indexBarRef.value.addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    // 路由切换过快会导致 indexBarRef.value 不存在
    indexBarRef.value && indexBarRef.value.removeEventListener('scroll', onScroll)
  })

  const onClickBadge = (item: ListItem, index: number) => {
    const { offsetTop } = arrLi[index] as HTMLDivElement
    curLetter.value = item.name
    indexBarRef.value!.scrollTo({ top: offsetTop })
  }

  return { curLetter, listCont, filterShow, onClickBadge }
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
