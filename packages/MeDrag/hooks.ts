import { ref, computed, watch } from 'vue'
import { Props, CalcSizeName, ListDataItem, AngleToCursorItem, Emits, Point, Distance, Rect, MoveShare, ResizeShare, RotateShare, ScaleShare } from './types'
import calcSize, { getSymmPoint } from './calcSize'
import { DeepCopyRA } from '../MeAPI/function'

// 操作
export const useHandler = (props: Readonly<Props>, emit: Emits) => {
  const listData = ref<ListDataItem[]>([]) // 列表数据
  // 每个范围的角度对应的光标
  const angleToCursor = Object.freeze<AngleToCursorItem[]>([
    { start: 338, end: 23, cursor: 'nw' },
    { start: 23, end: 68, cursor: 'n' },
    { start: 68, end: 113, cursor: 'ne' },
    { start: 113, end: 158, cursor: 'e' },
    { start: 158, end: 203, cursor: 'se' },
    { start: 203, end: 248, cursor: 's' },
    { start: 248, end: 293, cursor: 'sw' },
    { start: 293, end: 338, cursor: 'w' }
  ])

  const getCurItem = computed(() => listData.value[props.current]?.rect ?? {}) // 获取当前 item

  // 获取当前 cursor
  const getCursor = computed(() => (i: number) => {
    const { r } = getCurItem.value || {}
    if (!r) return ''

    const len = angleToCursor.length
    const index = angleToCursor.findIndex(({ start, end }, j) => (j ? r > start && r < end : r < end || r > start))

    // 新的索引
    let newI = index + i
    newI >= len && (newI -= len)

    return `new-${angleToCursor[newI].cursor}`
  })

  // 自定义事件
  const onEmitChange = (type: string) => {
    emit('change', listData.value, type)
  }

  // 更新 list
  const onUpdate = () => {
    emit('update:list', listData.value)
  }

  // 点击删除按钮
  const onDelete = () => {
    listData.value.splice(props.current, 1)
    onUpdate()
    onEmitChange('delete')
  }

  // 点击选中项
  const onClick = (index: number) => {
    emit('update:current', index)
  }

  watch(
    () => props.list,
    (value: ListDataItem[]) => {
      listData.value = DeepCopyRA(value)
    },
    { deep: true, immediate: true }
  )

  return {
    listData,
    angleToCursor,
    getCursor,
    onDelete,
    onClick,
    getCurItem,
    onEmitChange,
    onUpdate
  }
}

// 移动
export const useMove = (props: Readonly<Props>, share: MoveShare) => {
  const { listData, getCurItem, onEmitChange, onUpdate } = share

  let startPoint: Point // 开始坐标
  let startRect: Rect // 开始矩形区域

  // 获取实际位移的距离
  const getDistance = (point: Point): Distance => {
    const diffX = point.x - startPoint.x // 手指横向移动距离
    const diffY = point.y - startPoint.y // 手指纵向移动距离
    const distX = startRect.x + diffX // 矩形移动的距离
    const distY = startRect.y + diffY // 矩形移动的距离
    return { distX, distY }
  }

  // 触摸开始
  const onTouchstart = (e: TouchEvent) => {
    const { clientX, clientY } = e.changedTouches[0]
    startPoint = { x: clientX, y: clientY }
    startRect = { ...getCurItem.value }
  }

  // 接触点改变,滑动时
  const onTouchmove = (e: TouchEvent) => {
    const { clientX, clientY } = e.changedTouches[0]
    const { distX, distY } = getDistance({ x: clientX, y: clientY })
    listData.value[props.current].rect.x = distX // 矩形移动的距离
    listData.value[props.current].rect.y = distY // 矩形移动的距离
    onEmitChange('translate')
    onUpdate()
  }

  // pc 端鼠标按下移动
  const onMousedown = (e: MouseEvent) => {
    const { clientX, clientY } = e
    startPoint = { x: clientX, y: clientY }
    startRect = { ...getCurItem.value }

    // 表达式声明移动事件
    document.onmousemove = (ev: MouseEvent) => {
      const { distX, distY } = getDistance({ x: ev.clientX, y: ev.clientY })
      listData.value[props.current].rect.x = distX // 矩形移动的距离
      listData.value[props.current].rect.y = distY // 矩形移动的距离
      onEmitChange('translate')
      onUpdate()
    }

    // 表达式声明抬起事件
    document.onmouseup = () => {
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  }

  return { onTouchstart, onTouchmove, onMousedown }
}

// 调整大下
export const useResize = (props: Readonly<Props>, share: ResizeShare) => {
  const { listData, getCurItem, onEmitChange, onUpdate } = share

  let startPoint: Point // 开始坐标
  let centerPoint: Point // 中心点
  let symmPoint: Point // 对称点
  const dragRef = ref<HTMLDivElement>() // ref 节点
  const getDragRect = computed(() => dragRef.value?.getBoundingClientRect()) // 获取容器 rect

  // 获取中心点坐标
  const getCenterPoint = (): Point => {
    const { x: px, y: py } = getDragRect.value!
    const { w, h, x: ex, y: ey } = getCurItem.value
    const x = w / 2 + ex + px // 横坐标
    const y = h / 2 + ey + py // 纵坐标

    return { x, y }
  }

  // 触摸 resize 元素开始
  const onResizeTouchstart = (e: TouchEvent) => {
    const { clientX, clientY } = e.changedTouches[0]

    startPoint = { x: clientX, y: clientY }
    centerPoint = getCenterPoint()
    symmPoint = getSymmPoint(startPoint, centerPoint)
  }

  // 触摸 resize 元素接触点改变,滑动时
  const onResizeTouchmove = (e: TouchEvent, item: AngleToCursorItem) => {
    const { clientX, clientY } = e.changedTouches[0]
    const curPoint = { x: clientX, y: clientY } // 当前触摸点坐标
    const resultRect = calcSize(item.cursor as CalcSizeName, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem.value })
    const { x, y } = getDragRect.value!
    resultRect.x -= x
    resultRect.y -= y
    listData.value[props.current].rect = resultRect

    onUpdate()
    onEmitChange('resize')
  }

  // resize 元素 pc 端鼠标按下移动
  const onResizeMousedown = (e: MouseEvent, item: AngleToCursorItem) => {
    const { clientX, clientY } = e

    startPoint = { x: clientX, y: clientY }
    centerPoint = getCenterPoint()
    symmPoint = getSymmPoint(startPoint, centerPoint)

    // 表达式声明移动事件
    document.onmousemove = (ev: MouseEvent) => {
      const curPoint = { x: ev.clientX, y: ev.clientY } // 当前触摸点坐标
      const resultRect = calcSize(item.cursor as CalcSizeName, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem.value })
      const { x, y } = getDragRect.value!
      resultRect.x -= x
      resultRect.y -= y
      Object.assign(listData.value[props.current].rect, resultRect)
      onUpdate()
      onEmitChange('resize')
    }

    // 表达式声明抬起事件
    document.onmouseup = () => {
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  }

  return { dragRef, onResizeTouchstart, onResizeTouchmove, onResizeMousedown, getCenterPoint }
}

// 旋转
export const useRotate = (props: Readonly<Props>, share: RotateShare) => {
  const { getCurItem, getCenterPoint, onUpdate, onEmitChange } = share

  // 角度对正
  const getAngleAlign = (angle: number): number => [0, 90, 180, 270, 360, angle].find(deg => Math.abs(angle - deg) < props.angleRange)!

  // 获取旋转角度
  const getRotate = (point: Point): number => {
    const center = getCenterPoint()

    if (point.x === center.x) {
      return point.y >= center.y ? 0 : 180
    }
    if (point.y === center.y) {
      return point.x < center.x ? 90 : 270
    }

    const x = point.x - center.x
    const y = point.y - center.y
    let angle = (Math.atan(Math.abs(x / y)) / Math.PI) * 180

    // 默认从第三象限(x<0 && y>0)开始为正
    if (x < 0 && y < 0) {
      // 第二象限
      angle = 180 - angle
    } else if (x > 0 && y < 0) {
      // 第一象限
      angle += 180
    } else if (x > 0 && y > 0) {
      // 第四象限
      angle = 360 - angle
    }

    return getAngleAlign(angle)
  }

  // 触摸 rotate 元素接触点改变,滑动时
  const onRotateTouchmove = (e: TouchEvent) => {
    const { clientX, clientY } = e.changedTouches[0]
    getCurItem.value.r = getRotate({ x: clientX, y: clientY })
    onUpdate()
    onEmitChange('rotate')
  }

  // rotate 元素 pc 端鼠标按下移动
  const onRotateMousedown = () => {
    // 表达式声明移动事件
    document.onmousemove = e => {
      const { clientX, clientY } = e
      getCurItem.value.r = getRotate({ x: clientX, y: clientY })
      onUpdate()
      onEmitChange('rotate')
    }

    // 表达式声明抬起事件
    document.onmouseup = () => {
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  }

  return { onRotateTouchmove, onRotateMousedown }
}

// 双指缩放
export const useScale = (props: Readonly<Props>, share: ScaleShare) => {
  const { listData, getCurItem, onEmitChange, onUpdate } = share
  let startTouchDist: number // 开始两指距离
  let startRect: Rect // 开始矩形区域

  // 计算距离
  const calcDistance = (list: TouchList): number => {
    const first = list[0]
    const last = list[1]
    const distX = Math.abs(first.clientX - last.clientX)
    const distY = Math.abs(first.clientY - last.clientY)

    return Math.sqrt(distX ** 2 + distY ** 2)
  }

  // 触摸开始
  const onTouchstartWrap = (e: TouchEvent) => {
    if (e.touches.length !== 2 || !props.scale || !Object.keys(getCurItem.value).length) return

    startTouchDist = calcDistance(e.touches)
    startRect = { ...getCurItem.value }
  }

  // 触摸移动
  const onTouchmoveWrap = (e: TouchEvent) => {
    if (e.touches.length !== 2 || !props.scale || !Object.keys(getCurItem.value).length) return

    const { x, y, w, h } = startRect
    const scale = (calcDistance(e.touches) - startTouchDist) / props.scale + 1
    const tempW = w * scale
    const tempH = h * scale
    listData.value[props.current].rect.x = x + (w - tempW) / 2
    listData.value[props.current].rect.y = y + (h - tempH) / 2
    listData.value[props.current].rect.w = tempW
    listData.value[props.current].rect.h = tempH
    onEmitChange('scale')
    onUpdate()
  }

  return { onTouchstartWrap, onTouchmoveWrap }
}
