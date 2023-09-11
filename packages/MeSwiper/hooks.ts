import { ref, provide, watch, onMounted, onUnmounted } from 'vue'
import { MeSwiperKey } from './token'
import type { PropsHookParam, Emits } from './types'

/**
 * 移动列
 */
export const useHandMove = (props: Readonly<PropsHookParam>, emit: Emits) => {
  /**
   * swiper节点
   */
  const swiperDom = ref<HTMLDivElement>()
  /**
   * 指示点的数量
   */
  const dots = ref(1)
  /**
   * 指示点索引
   */
  const dotIndex = ref(0)
  /**
   * 当前 value 值
   */
  const currentValue = ref(0)
  /**
   * 是否过渡
   */
  const isActive = ref(false)
  /**
   * 最大滑动距离
   */
  let maxDistance = 0
  /**
   * 初始值
   */
  let initialValue = 0
  /**
   * 开始 X 坐标
   */
  let startX = 0
  /**
   * 滑动超过多少算滑动过
   */
  let minDistance = 0
  /**
   * 定时器
   */
  let timer: NodeJS.Timeout | undefined
  /**
   * 子组件 name
   */
  const names: (string | number)[] = []

  /**
   * 开始动画
   */
  const startAnimate = () => {
    // 开启定时器
    timer = setInterval(() => {
      dotIndex.value = dotIndex.value < dots.value - 1 ? dotIndex.value + 1 : 0 // 设置指示点
      isActive.value = true
      currentValue.value = -dotIndex.value * maxDistance
    }, props.delay)
  }

  /**
   * 关闭动画
   */
  const closeAnimate = () => {
    clearInterval(timer as NodeJS.Timeout) // 关闭动画
  }

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent) => {
    initialValue = currentValue.value
    isActive.value = false
    startX = e.changedTouches[0].clientX // 获取初始位置
  }

  /**
   * 接触点改变，滑动时
   */
  const onTouchmove = (e: TouchEvent) => {
    /**
     * 获取当前移动的X坐标
     */
    const currentX = e.changedTouches[0].clientX
    /**
     * 移动位置
     */
    const diffX = currentX - startX
    /**
     * diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽
     */
    const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
    currentValue.value = distanceX + initialValue
  }

  /**
   * 触摸结束
   */
  const onTouchend = (e: TouchEvent) => {
    isActive.value = true
    /**
     * 获取当前移动的X坐标
     */
    const currentX = e.changedTouches[0].clientX
    /**
     * 移动位置
     */
    const diffX = currentX - startX

    // diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽, 等于 0 不滑动
    if (diffX > 0) {
      /**
       * 拖动距离
       */
      const distanceX = diffX > minDistance ? maxDistance : 0
      /**
       * 理想位移
       */
      const idealX = initialValue + distanceX
      currentValue.value = idealX > 0 ? 0 : idealX // 实际位移，0: 最小位移
    } else if (diffX < 0) {
      /**
       * 拖动距离
       */
      const distanceX = diffX < -minDistance ? -maxDistance : 0
      /**
       * 理想位移
       */
      const idealX = initialValue + distanceX
      /**
       * 最大位移
       */
      const maxDistanceX = (1 - dots.value) * maxDistance
      currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX // 实际位移
    }
    dotIndex.value = -currentValue.value / maxDistance
    emit('change', names[dotIndex.value - 1])
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousemove = (e: MouseEvent) => {
    isActive.value = false
    /**
     * 获取当前移动的x坐标
     */
    const currentX = e.clientX
    /**
     * 移动位置
     */
    const diffX = currentX - startX
    /**
     * diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽
     */
    const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
    currentValue.value = distanceX + initialValue
  }

  /**
   * PC 端鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    isActive.value = true
    /**
     * 获取当前移动的X坐标
     */
    const currentX = e.clientX
    /**
     * 移动位置
     */
    const diffX = currentX - startX

    // diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽, 等于 0 不滑动
    if (diffX > 0) {
      /**
       * 拖动距离
       */
      const distanceX = diffX > minDistance ? maxDistance : 0
      /**
       * 理想位移
       */
      const idealX = initialValue + distanceX
      currentValue.value = idealX > 0 ? 0 : idealX // 实际位移, 0: 最小位移
    } else if (diffX < 0) {
      /**
       * 拖动距离
       */
      const distanceX = diffX < -minDistance ? -maxDistance : 0
      /**
       * 理想位移
       */
      const idealX = initialValue + distanceX
      /**
       * 最大位移
       */
      const maxDistanceX = (1 - dots.value) * maxDistance
      currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX // 实际位移
    }

    dotIndex.value = -currentValue.value / maxDistance
    emit('change', names[dotIndex.value - 1])
    document.onmousemove = null // 清理上次的移动事件
    document.onmouseup = null // 清理上次的抬起事件
  }

  /**
   * PC 端鼠标按下
   */
  const onMousedown = (e: MouseEvent) => {
    initialValue = currentValue.value
    startX = e.clientX // 获取x初始位置
    document.onmousemove = onMousemove // 表达式声明移动事件
    document.onmouseup = onMouseup // 表达式声明抬起事件
  }

  /**
   * 更新子组件的状态
   */
  const updateValue = () => {
    /**
     * 设置最大滑动距离
     */
    const { offsetWidth } = swiperDom.value!
    maxDistance = offsetWidth
    minDistance = offsetWidth / 4
    props.loop && startAnimate()
    dots.value = names.length // 设置指示点的数量
  }

  // 监听动画
  watch(
    () => props.loop,
    value => {
      // 是否开启动画
      value ? startAnimate() : closeAnimate()
    }
  )

  /**
   * 获取 name
   */
  const getName = (name: string | number) => {
    names.push(name)
  }

  provide(MeSwiperKey, { name: MeSwiperKey, getName })
  onMounted(updateValue)
  onUnmounted(closeAnimate)

  return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
