import { ref, watch } from 'vue'
import type { USEHandler } from './types'

/**
 * 操作
 */
export const useHandler = ({ props, emit, modelValue }: USEHandler.Option) => {
  /**
   * 当前 value 值
   */
  const currentValue = ref(100)
  /**
   * 开始 X 坐标
   */
  let startX = 0
  /**
   * 触摸开始时的 value
   */
  let changeValue = 0
  /**
   * 整个屏幕的 width
   */
  let screenW = 0

  /**
   * 处理 currentValue
   */
  const handleCurrent = () => {
    /**
     * 设置当前偏移 value 值
     */
    currentValue.value = 100 + props.min - modelValue.value
  }

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent) => {
    /**
     * 获取初始位置
     */
    startX = e.changedTouches[0].clientX
    /**
     * 保存第一次的 value 参数值
     */
    changeValue = modelValue.value
    /**
     * 获取元素整体宽度
     */
    screenW = document.body.offsetWidth
    emit('start', e)
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
    const diffX = Math.ceil(((currentX - startX) * 100) / screenW)
    /**
     * 改变后的值
     */
    let afterVal = changeValue + diffX
    /**
     * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
     */
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    modelValue.value = afterVal
    emit('move', e)
  }

  /**
   * 触摸结束
   */
  const onTouchend = (e: TouchEvent) => {
    emit('end', e)
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousemove = (e: MouseEvent) => {
    /**
     *  获取当前移动的 x 坐标
     */
    const currentX = e.clientX
    /**
     * 移动位置
     */
    const diffX = Math.ceil(((currentX - startX) * 100) / screenW)
    /**
     * 改变后的值
     */
    let afterVal = changeValue + diffX
    /**
     * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
     */
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    modelValue.value = afterVal
    emit('move', e)
  }

  /**
   * PC 端鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    /**
     * 清理上次的移动事件
     */
    document.onmousemove = null
    /**
     * 清理上次的抬起事件
     */
    document.onmouseup = null
    emit('end', e)
  }

  /**
   * PC 端鼠标按下
   */
  const onMousedown = (e: MouseEvent) => {
    /**
     * 获取 x 初始位置
     */
    startX = e.clientX
    /**
     * 保存第一次的 value 参数值
     */
    changeValue = modelValue.value
    /**
     * 获取元素整体宽度
     */
    screenW = document.body.offsetWidth
    /**
     * 表达式声明移动事件
     */
    document.onmousemove = onMousemove
    /**
     * 表达式声明抬起事件
     */
    document.onmouseup = onMouseup
    emit('start', e)
  }

  watch(modelValue, () => {
    !props.disabled && handleCurrent()
  })

  handleCurrent()

  return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
