import { ref, onMounted } from 'vue'

/**
 * 移动列
 */
export const useHandMove = () => {
  /**
   * hidden 节点
   */
  const hidden = ref<HTMLDivElement>()
  /**
   * 最大滑动距离
   */
  const maxDistance = ref(0)
  /**
   * 当前 value 值
   */
  const currentValue = ref(0)
  /**
   * 是否过渡
   */
  const isActive = ref(false)
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
     * 获取当前移动的 X 坐标
     */
    const currentX = e.changedTouches[0].clientX
    /**
     * 移动位置
     */
    const diffX = initialValue + currentX - startX
    currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX // 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
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

    // 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽，等于 0 不滑动
    if (diffX > 0) {
      currentValue.value = diffX > minDistance ? 0 : -maxDistance.value
    } else if (diffX < 0) {
      currentValue.value = diffX < -minDistance ? -maxDistance.value : 0
    }
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousemove = (e: MouseEvent) => {
    isActive.value = false
    /**
     * 获取当前移动的 x 坐标
     */
    const currentX = e.clientX
    /**
     * 移动位置
     */
    const diffX = initialValue + currentX - startX
    currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
  }

  /**
   * PC 端鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    /**
     * 获取当前移动的 X 坐标
     */
    const currentX = e.clientX
    /**
     * 移动位置
     */
    const diffX = currentX - startX
    isActive.value = true

    // 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽, 等于 0 不滑动
    if (diffX > 0) {
      currentValue.value = diffX > minDistance ? 0 : -maxDistance.value
    } else if (diffX < 0) {
      currentValue.value = diffX < -minDistance ? -maxDistance.value : 0
    }
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

  onMounted(() => {
    const { offsetWidth } = hidden.value! // 设置最大滑动距离
    maxDistance.value = offsetWidth
    minDistance = offsetWidth / 4
  })

  return { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
