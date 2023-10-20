import { ref, watch } from 'vue'
import type { Props, Emits } from './types'

/**
 * 移动列
 */
export const useHandMove = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 加载状态
   */
  const activeState = ref(0)
  /**
   * 垂直多少像素
   */
  const transY = ref(0)
  /**
   * 放大倍数
   */
  const scale = ref(0)
  /**
   * 显示值
   */
  const showValue = ref(50)
  /**
   * 过渡时间
   */
  const duration = ref(0)
  /**
   * 开始位置
   */
  let startY = 0
  /**
   * 步进器
   */
  let step = 0

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    /**
     * 获取初始位置
     */
    startY = e.changedTouches[0].clientY
    /**
     * 初始化步进器
     */
    step = 0
    /**
     * 关闭过渡器
     */
    duration.value = 0
  }

  /**
   * 接触点改变，滑动时
   */
  const onTouchmove = (e: TouchEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    /**
     * 计算位置
     */
    const distY = e.changedTouches[0].clientY - startY

    /**
     * 是否超过显示值
     */
    if (distY > showValue.value) {
      activeState.value = 1
      step += 0.09
      transY.value = showValue.value + (distY - showValue.value) / step
      scale.value = 1
    } else {
      transY.value = distY
      scale.value = distY / showValue.value
      activeState.value = 0
    }
  }

  /**
   * 触摸结束
   */
  const onTouchend = (e: TouchEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    const distY = e.changedTouches[0].clientY - startY
    /**
     * 打开过渡器
     */
    duration.value = 400

    /**
     * 是否超过显示值
     */
    if (distY > showValue.value) {
      activeState.value = 2
      transY.value = showValue.value
      scale.value = 1
      emit('update:modelValue', true)
      emit('refresh')
    } else {
      activeState.value = 0
      transY.value = 0
      scale.value = 0
    }
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousemove = (e: MouseEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    /**
     * 计算位置
     */
    const distY = e.clientY - startY

    /**
     * 是否超过显示值
     */
    if (distY > showValue.value) {
      activeState.value = 1
      step += 0.09
      transY.value = showValue.value + (distY - showValue.value) / step
      scale.value = 1
    } else {
      transY.value = distY
      scale.value = distY / showValue.value
      activeState.value = 0
    }
  }

  /**
   * PC 端鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    const distY = e.clientY - startY
    /**
     * 打开过渡器
     */
    duration.value = 400

    /**
     * 是否超过显示值
     */
    if (distY > showValue.value) {
      activeState.value = 2
      transY.value = showValue.value
      scale.value = 1
      emit('update:modelValue', true)
      emit('refresh')
    } else {
      activeState.value = 0
      transY.value = 0
      scale.value = 0
    }

    /**
     * 清理上次的移动事件
     */
    document.onmousemove = null
    /**
     * 清理上次的抬起事件
     */
    document.onmouseup = null
  }

  /**
   * PC 端鼠标按下
   */
  const onMousedown = (e: MouseEvent) => {
    /**
     * 是否可触发
     */
    if (props.modelValue) return

    /**
     * 获取初始位置
     */
    startY = e.clientY
    /**
     * 初始化步进器
     */
    step = 0
    /**
     * 关闭过渡器
     */
    duration.value = 0
    /**
     * 表达式声明移动事件
     */
    document.onmousemove = onMousemove
    /**
     * 表达式声明抬起事件
     */
    document.onmouseup = onMouseup
  }

  /**
   * 监听 value 变化
   */
  watch(
    () => props.modelValue,
    value => {
      /**
       * 是否可滑动
       */
      if (!value) {
        activeState.value = 3
        /**
         * 延迟关闭
         */
        setTimeout(() => {
          transY.value = 0
          scale.value = 0
        }, 600)
      }
    }
  )
  return { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
