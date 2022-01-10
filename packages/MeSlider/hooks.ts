import { ref, watch } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 操作
export const useHandler = (props: Props, emit: Emits) => {
  const currentValue = ref(100) // 当前 value 值
  let startX = 0 // 开始X坐标
  let changeValue = 0 // 触摸开始时的value
  let screenW = 0 // 整个屏幕的width
  // 处理currentValue
  const handleCurrent = () => {
    currentValue.value = 100 + props.min - props.modelValue // 设置当前偏移value值
  }
  // 触摸开始
  const onTouchstart = (e: TouchEvent) => {
    startX = e.changedTouches[0].clientX // 获取初始位置
    changeValue = props.modelValue // 保存第一次的value参数值
    screenW = document.body.offsetWidth // 获取元素整体宽度
    emit('on-start', e)
  }
  // 接触点改变，滑动时
  const onTouchmove = (e: TouchEvent) => {
    const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
    const diffX = Math.ceil(((currentX - startX) * 100) / screenW) // 移动位置
    let afterVal = changeValue + diffX // 改变后的值
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    emit('update:modelValue', afterVal)
    emit('on-move', e)
  }
  // 触摸结束
  const onTouchend = (e: TouchEvent) => {
    emit('on-end', e)
  }
  // pc端鼠标按下移动
  const onMousemove = (e: MouseEvent) => {
    const currentX = e.clientX // 获取当前移动的x坐标
    const diffX = Math.ceil(((currentX - startX) * 100) / screenW) // 移动位置
    let afterVal = changeValue + diffX // 改变后的值
    // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal
    emit('update:modelValue', afterVal)
    emit('on-move', e)
  }
  // pc端鼠标抬起
  const onMouseup = (e: MouseEvent) => {
    document.onmousemove = null // 清理上次的移动事件
    document.onmouseup = null // 清理上次的抬起事件
    emit('on-end', e)
  }
  // pc端鼠标按下
  const onMousedown = (e: MouseEvent) => {
    startX = e.clientX // 获取x初始位置
    changeValue = props.modelValue // 保存第一次的value参数值
    screenW = document.body.offsetWidth // 获取元素整体宽度
    document.onmousemove = onMousemove // 表达式声明移动事件
    document.onmouseup = onMouseup // 表达式声明抬起事件
    emit('on-start', e)
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
