import { ref, nextTick } from 'vue'
import { Props, Emits, XPoint, ShareData, ImgRect } from './types'

// 图片区域
export const useImgRect = (props: Readonly<Props>) => {
  const jigsawImgRef = ref<HTMLDivElement>() // 图片节点
  const dragPoint = ref<XPoint>({ x: 10 }) // 拖拽点
  const missingPoint = ref<XPoint>({ x: 200 }) // 缺失点
  const crossPoint = ref({ y: 20, width: 50, height: 50 }) // 拖拽点和缺失点相同信息
  const imgRect = ref<ImgRect>({ width: 0, height: 0 }) // 图片容器

  nextTick(() => {
    const { width, height } = jigsawImgRef.value!.getBoundingClientRect()
    imgRect.value = { width, height }
    const split = width / 2 // 分割值
    const cw = crossPoint.value.width
    const ch = crossPoint.value.height

    if (props.random) {
      crossPoint.value.y = ~~(Math.random() * (height - ch))
      dragPoint.value.x = ~~(Math.random() * (split - cw))
      missingPoint.value.x = ~~(Math.random() * (width - cw - split)) + split
    } else {
      crossPoint.value.y = (height - ch) / 2
      missingPoint.value.x = width - cw - 10
    }
  })

  return { jigsawImgRef, dragPoint, missingPoint, crossPoint, imgRect }
}

// 滑块
export const useSlider = (props: Readonly<Props>, emit: Emits, { dragPoint, missingPoint }: ShareData) => {
  let startX = 0 // 横向开始点
  const openAnimation = ref(false) // 动画开关
  const moveX = ref(0) // 移动距离

  // 操作开始
  const handleStart = <T extends Touch | MouseEvent>({ clientX }: T) => {
    openAnimation.value = false
    startX = clientX
  }

  // 操作移动
  const handleMove = <T extends Touch | MouseEvent>({ clientX }: T) => {
    moveX.value = clientX - startX
  }

  // 操作结束
  const handleEnd = <T extends Touch | MouseEvent>({ clientX }: T) => {
    const dx = dragPoint.value.x // 拖拽点 x
    const mx = missingPoint.value.x // 缺失点 x
    const curX = clientX - startX // 当前位移
    const resultBool = Math.abs(dx + curX - mx) < props.range // 验证结果

    if (resultBool) {
      moveX.value = mx - dx
    } else {
      moveX.value = 0
      openAnimation.value = true
    }

    emit('change', resultBool)
  }

  // 手指触摸开始
  const onTouchstart = (e: TouchEvent) => {
    handleStart(e.changedTouches[0])
  }

  // 手指触摸移动
  const onTouchmove = (e: TouchEvent) => {
    handleMove(e.changedTouches[0])
  }

  // 手指触摸离开
  const onTouchend = (e: TouchEvent) => {
    handleEnd(e.changedTouches[0])
  }

  // 点击滑块
  const onMousedown = (e: MouseEvent) => {
    handleStart(e)
    document.onmousemove = handleMove
    document.onmouseup = ev => {
      handleEnd(ev)
      document.onmousemove = document.onmouseup = null
    }
  }

  // 动画结束
  const onAnimationend = () => {
    openAnimation.value = false
  }

  return { openAnimation, moveX, onTouchstart, onTouchmove, onTouchend, onMousedown, onAnimationend }
}
