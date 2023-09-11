import { ref, watch } from 'vue'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
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
    currentValue.value = 100 + props.min - props.modelValue // 设置当前偏移 value 值
  }

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent) => {
    startX = e.changedTouches[0].clientX // 获取初始位置
    changeValue = props.modelValue // 保存第一次的 value 参数值
    screenW = document.body.offsetWidth // 获取元素整体宽度
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
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    emit('update:modelValue', afterVal)
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
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    emit('update:modelValue', afterVal)
    emit('move', e)
  }

  /**
   * PC 端鼠标抬起
   */
  const onMouseup = (e: MouseEvent) => {
    document.onmousemove = null // 清理上次的移动事件
    document.onmouseup = null // 清理上次的抬起事件
    emit('end', e)
  }

  /**
   * PC 端鼠标按下
   */
  const onMousedown = (e: MouseEvent) => {
    startX = e.clientX // 获取x初始位置
    changeValue = props.modelValue // 保存第一次的value参数值
    screenW = document.body.offsetWidth // 获取元素整体宽度
    document.onmousemove = onMousemove // 表达式声明移动事件
    document.onmouseup = onMouseup // 表达式声明抬起事件
    emit('start', e)
  }

  watch(
    () => props.modelValue,
    () => {
      !props.disabled && handleCurrent()
    }
  )

  handleCurrent()

  return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
