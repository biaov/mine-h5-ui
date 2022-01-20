import { ref, onMounted } from 'vue'

// 移动列
export const useHandMove = () => {
  const hidden = ref<HTMLDivElement>() // hidden节点
  const maxDistance = ref(0) // 最大滑动距离
  const currentValue = ref(0) // 当前 value 值
  const isActive = ref(false) // 是否过渡
  let initialValue = 0 // 初始值
  let startX = 0 // 开始 X 坐标
  let minDistance = 0 // 滑动超过多少算滑动过
  // 触摸开始
  const onTouchstart = (e: TouchEvent) => {
    initialValue = currentValue.value
    isActive.value = false
    startX = e.changedTouches[0].clientX // 获取初始位置
  }
  // 接触点改变，滑动时
  const onTouchmove = (e: TouchEvent) => {
    const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
    const diffX = initialValue + currentX - startX // 移动位置
    currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
  }
  // 触摸结束
  const onTouchend = (e: TouchEvent) => {
    isActive.value = true
    const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
    const diffX = currentX - startX // 移动位置
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
    if (diffX > 0) {
      currentValue.value = diffX > minDistance ? 0 : -maxDistance.value
    } else if (diffX < 0) {
      currentValue.value = diffX < -minDistance ? -maxDistance.value : 0
    }
  }
  // pc端鼠标按下移动
  const onMousemove = (e: MouseEvent) => {
    isActive.value = false
    const currentX = e.clientX // 获取当前移动的x坐标
    const diffX = initialValue + currentX - startX // 移动位置
    currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
  }
  // pc 端鼠标抬起
  const onMouseup = (e: MouseEvent) => {
    const currentX = e.clientX // 获取当前移动的X坐标
    const diffX = currentX - startX // 移动位置
    isActive.value = true
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
    if (diffX > 0) {
      currentValue.value = diffX > minDistance ? 0 : -maxDistance.value
    } else if (diffX < 0) {
      currentValue.value = diffX < -minDistance ? -maxDistance.value : 0
    }
    document.onmousemove = null // 清理上次的移动事件
    document.onmouseup = null // 清理上次的抬起事件
  }
  // pc端鼠标按下
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
