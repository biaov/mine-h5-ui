import { ref, computed, watch, nextTick, ComponentPublicInstance } from 'vue'
import { Throttle } from '../MeAPI/function'
import { Props, Emits } from './types'

// 操作
export const useHandler = (props: Readonly<Props>, emit: Emits) => {
  const scrollBarHeight = ref(0) // 滚动高度
  const scrollTranslateY = ref(0) // 纵向滚动
  const listData = ref<Record<string, any>[]>([]) // 列表数据
  const startIndex = ref(0) // 开始数据索引
  const endIndex = ref(0) // 结束数据索引
  const nodes: HTMLLIElement[] = [] // 节点
  const prevScreen = computed(() => props.remain * props.screen[0]) // 前屏总显示数
  const nextScreen = computed(() => props.remain * props.screen[1]) // 后屏总显示数
  const prevCount = computed(() => Math.min(startIndex.value, prevScreen.value)) // 前屏总数
  const nextCount = computed(() => Math.min(props.list.length - endIndex.value, nextScreen.value)) // 后屏总数
  const renderData = computed(() => listData.value.slice(startIndex.value - prevCount.value, endIndex.value + nextCount.value)) // 渲染数据

  // 更新高度
  const updateHeight = () => {
    nextTick(() => {
      if (props.itemHeight === 0) {
        nodes.forEach(node => {
          const { height } = node.getBoundingClientRect()
          const index = +node.dataset.index!
          const oldHeight = listData.value[index].height
          height && oldHeight !== height && (listData.value[index].height = height)
        })
      }

      scrollBarHeight.value = listData.value.reduce((prev, item) => prev + item.height, 0)
    })
  }

  let onScroll = (e: Event) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement

    if (props.itemHeight) {
      startIndex.value = ~~(scrollTop / props.itemHeight)
      endIndex.value = startIndex.value + props.remain
      scrollTranslateY.value = (startIndex.value - prevCount.value) * props.itemHeight
    } else {
      let prevSum = 0

      const index = listData.value.findIndex(item => {
        prevSum += item.height
        return prevSum > scrollTop
      })

      startIndex.value = index
      endIndex.value = startIndex.value + props.remain
      let curPrevSum = 0
      const maxindex = startIndex.value - prevCount.value

      listData.value.find((item, i) => {
        if (i >= maxindex) {
          return true
        }
        curPrevSum += item.height
        return false
      })

      scrollTranslateY.value = curPrevSum
      updateHeight()
    }

    nextTick(() => {
      scrollTop + clientHeight >= scrollHeight - props.distance && emit('load-more')
    })
  }

  onScroll = Throttle(onScroll, props.interval) // 节流

  // 设置 ref
  const setItemRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    el && (nodes[index] = el as HTMLLIElement)
  }

  // watch props list
  watch(
    () => props.list,
    value => {
      const height = props.itemHeight || 100
      listData.value = value.map((item, virtualId) => ({ ...item, virtualId, height }))
      updateHeight()
    },
    { deep: true, immediate: true }
  )

  return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef }
}
