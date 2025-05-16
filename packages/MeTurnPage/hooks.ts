import { ref, computed, useTemplateRef, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { Props, Point, USEComputeStyle, AnimateFrameOption, AnimateDataType, RectType } from './types'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'

/**
 * 二维点
 */
const point2D = (x: number, y: number): Point => ({ x, y })

/**
 * 贝塞尔
 */
const bezier = (p1: Point, p2: Point, p3: Point, p4: Point, t: number) => {
  const mum1 = 1 - t
  const mum12 = mum1 ** 2
  const mum13 = mum1 ** 3
  const mu3 = t ** 3
  const t2 = t ** 2
  const pt1m2 = 3 * t * mum12
  const pt2m1 = 3 * t2 * mum1

  return point2D(Math.round(mum13 * p1.x + pt1m2 * p2.x + pt2m1 * p3.x + mu3 * p4.x), Math.round(mum13 * p1.y + pt1m2 * p2.y + pt2m1 * p3.y + mu3 * p4.y))
}

/**
 * 边维最大值
 */
const initCorner = (corner: string, { width, height }: RectType) =>
  ({ tl: point2D(width * 2, 0), tr: point2D(-width, 0), bl: point2D(width * 2, height), br: point2D(-width, height) })[corner] as Point

/**
 * 计算样式
 */
export const useComputeStyle = ({ point, width, height }: USEComputeStyle.Option) => {
  let wrapStyle: Record<string, string> = {}
  let fwrapStyle: Record<string, string> = {}
  let itemStyle: Record<string, string> = {}
  let shadowStyle: Record<string, string> = {}
  let turnItemStyle: Record<string, string> = {}
  let turnShadowStyle: Record<string, string> = {}

  /**
   * 渐变拼接
   */
  const gradient = (p0: Point, p1: Point, colors: (string | number)[][], numColors: number) => {
    const cols = Array.from({ length: numColors }, (_, i) => {
      const [start, end] = colors[i]
      return `color-stop(${start}, ${end})`
    })

    return { 'background-image': `-webkit-gradient(linear, ${p0.x}% ${p0.y}%,  ${p1.x}% ${p1.y}%, ${cols.join(',')} )` }
  }

  /**
   * 弧度转角度
   */
  const deg = (radian: number) => (radian / Math.PI) * 180

  /**
   * 初始化起始点
   */
  const initData = (corner: string, opts = 0) =>
    ({ tl: point2D(opts, opts), tr: point2D(width - opts, opts), bl: point2D(opts, height - opts), br: point2D(width - opts, height - opts) })[corner] as Point

  /**
   * CSS 位移
   */
  const translate = (x: number, y: number) => ` translate(${x}px, ${y}px) `

  let a = 0 // 旋转角度
  let alpha = 0 // 旋转弧度
  let px: number
  let gradientEndPointA: Point // 渐变结束点
  let gradientEndPointB: Point // 渐变结束点
  let gradientStartV: number // 渐变起始点
  let gradientSize: number // 渐变大小
  let gradientOpacity: number // 渐变透明度
  let mv = point2D(0, 0)
  let df = point2D(0, 0)
  let tr = point2D(0, 0)
  const oblique = Math.round(Math.sqrt(width ** 2 + height ** 2)) // 斜边
  const o = initData(point.corner) // 起始点
  const top = point.corner[0] === 't' // 是否上边
  const left = point.corner[1] === 'l' // 是否左边
  const PI = Math.PI // π
  const A90 = PI / 2 // 90 度的弧度值

  const rotate = (degrees: number) => ` rotate(${degrees}deg) `

  const toTransform = (transform: string, transformOrigin: string) => ({
    transform,
    transformOrigin
  })

  /**
   * 计算
   */
  const compute = (): boolean => {
    // 相对区域点, relative
    const rel = point2D(o.x ? o.x - point.x : point.x, o.y ? o.y - point.y : point.y)
    // 从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)
    const tan = Math.atan2(rel.y, rel.x)

    alpha = A90 - tan // 90 度 - tan = 旋转弧度

    a = deg(alpha) // 旋转弧度 -> 旋转角度

    // 中心点的距离，半径
    const middle = point2D(left ? width - rel.x / 2 : point.x + rel.x / 2, rel.y / 2)

    // 旋转弧度 - 中心点的弧度
    const gamma = alpha - Math.atan2(middle.y, middle.x)

    // 半径，斜边
    const distance = Math.max(0, Math.sin(gamma) * Math.sqrt(middle.x ** 2 + middle.y ** 2))

    // 位移点
    tr = point2D(distance * Math.sin(alpha), distance * Math.cos(alpha))

    // 旋转角度大于 90 度
    if (alpha > A90) {
      tr.x += Math.abs(tr.y * Math.tan(tan))
      tr.y = 0

      if (Math.round(tr.x * Math.tan(PI - alpha)) < height) {
        point.y = Math.sqrt(height ** 2 + 2 * middle.x * rel.x)
        top && (point.y = height - point.y)
        return compute()
      }

      // 获取小于 90 度的角度
      const beta = PI - alpha
      const dd = oblique - height / Math.sin(beta)
      mv = point2D(Math.round(dd * Math.cos(beta)), Math.round(dd * Math.sin(beta)))
      left && (mv.x = -mv.x)
      top && (mv.y = -mv.y)
    }

    px = Math.round(tr.y / Math.tan(alpha) + tr.x)

    const side = width - px
    const sideX = side * Math.cos(alpha * 2)
    const sideY = side * Math.sin(alpha * 2)

    df = point2D(Math.round(left ? side - sideX : px + sideX), Math.round(top ? sideY : height - sideY))

    gradientSize = side * Math.sin(alpha)

    /**
     * 结束点
     */
    const endingPoint = initCorner(point.corner, { width, height })

    /**
     * 斜边
     */
    const far = Math.sqrt((endingPoint.x - point.x) ** 2 + (endingPoint.y - point.y) ** 2)

    /**
     * 渐变透明度
     */
    gradientOpacity = far < width ? far / width : 1

    /**
     * 渐变起始点
     */
    gradientStartV = gradientSize > 100 ? (gradientSize - 100) / gradientSize : 0

    /**
     * 线性渐变结束点
     */
    gradientEndPointA = point2D(((gradientSize * Math.sin(A90 - alpha)) / height) * 100, ((gradientSize * Math.cos(A90 - alpha)) / width) * 100)

    top && (gradientEndPointA.y = 100 - gradientEndPointA.y)
    left && (gradientEndPointA.x = 100 - gradientEndPointA.x)

    /**
     * 阴影渐变结束点
     */
    gradientEndPointB = point2D(((gradientSize * Math.sin(alpha)) / width) * 100, ((gradientSize * Math.cos(alpha)) / height) * 100)

    !left && (gradientEndPointB.x = 100 - gradientEndPointB.x)
    !top && (gradientEndPointB.y = 100 - gradientEndPointB.y)

    tr.x = Math.round(tr.x)
    tr.y = Math.round(tr.y)

    return true
  }
  const addPx = (w: number, h: number) => ({
    width: `${w}px`,
    height: `${h}px`
  })

  const transform = (tr: Point, inset: string, [ox, oy]: number[], a: number) => {
    const mvW = ((width - oblique) * ox) / 100

    const mvH = ((height - oblique) * oy) / 100

    const aliasingFk = a !== 90 && a !== -90 ? (left ? -1 : 1) : 0

    /**
     * transform-origin
     */
    const origin = `${ox}% ${oy}%`

    // 文本内容
    itemStyle = {
      ...toTransform(rotate(a) + translate(tr.x + aliasingFk, tr.y), origin),
      ...addPx(width, height),
      inset
    }
    // 旋转容器
    wrapStyle = {
      ...toTransform(translate(-tr.x + mvW - aliasingFk, -tr.y + mvH) + rotate(-a), origin),
      ...addPx(oblique, oblique)
    }

    // 翻页旋转容器
    fwrapStyle = {
      ...toTransform(translate(-tr.x + mv.x + mvW, -tr.y + mv.y + mvH) + rotate(-a), origin),
      ...addPx(oblique, oblique)
    }

    // 渐变旋转容器
    turnItemStyle = {
      ...toTransform(rotate(a) + translate(tr.x + df.x - mv.x, tr.y + df.y - mv.y), origin),
      ...addPx(width, height),
      inset
    }

    // 渐变内容
    turnShadowStyle = gradient(
      point2D(left ? 100 : 0, top ? 100 : 0),
      point2D(gradientEndPointA.x, gradientEndPointA.y),
      [
        [gradientStartV, 'transparent'],
        [(1 - gradientStartV) * 0.8 + gradientStartV, `rgba(0,0,0,${0.2 * gradientOpacity})`],
        [1, `rgba(255,255,255,${0.2 * gradientOpacity})`]
      ],
      3
    )
    // 阴影线
    shadowStyle = gradient(
      point2D(left ? 0 : 100, top ? 0 : 100),
      point2D(gradientEndPointB.x, gradientEndPointB.y),
      [
        [0.8, 'transparent'],
        [1, `rgba(0,0,0,${0.3 * gradientOpacity})`],
        [1, 'transparent']
      ],
      3
    )
  }
  let tempTurnShadowStyle = null
  switch (point.corner) {
    // 上左
    case 'tl':
      point.x = Math.max(point.x, 1)
      compute()
      transform(tr, '0 0 auto auto', [100, 0], a)
      tempTurnShadowStyle = toTransform(translate(-height, -width) + rotate(90 - a * 2), '100% 100%')
      break
    // 上右
    case 'tr':
      point.x = Math.min(point.x, width - 1)
      compute()
      transform(point2D(-tr.x, tr.y), '0 0 auto 0', [0, 0], -a)
      tempTurnShadowStyle = toTransform(translate(0, -width) + rotate(-90 + a * 2), '0% 100%')
      break
    // 下左
    case 'bl':
      point.x = Math.max(point.x, 1)
      compute()
      transform(point2D(tr.x, -tr.y), 'auto 0 0 auto', [100, 100], -a)
      tempTurnShadowStyle = toTransform(translate(-height, 0) + rotate(-90 + a * 2), '100% 0%')
      break
    // 下右
    case 'br':
      point.x = Math.min(point.x, width - 1)
      compute()
      transform(point2D(-tr.x, -tr.y), 'auto auto 0 0', [0, 100], a)
      tempTurnShadowStyle = toTransform(rotate(90 - a * 2), '0% 0%')
      break
  }

  // 渐变内容阴影
  turnShadowStyle = {
    ...(turnShadowStyle || {}),
    ...tempTurnShadowStyle,
    width: `${height}px`,
    height: `${width}px`
  }

  return { wrapStyle, fwrapStyle, itemStyle, shadowStyle, turnItemStyle, turnShadowStyle }
}

/**
 * 动画
 */
const useAnimateFrame = () => {
  const animateData: AnimateDataType = {}

  const animateFrame = (option: AnimateFrameOption) => {
    if (!option) return
    clearInterval(animateData.effect)
    !option.easing && (option.easing = (t, b, c, dr) => c * Math.sqrt(1 - (t / dr - 1) ** 2) + b)

    const diff = option.to - option.from
    const fps = option.fps || 30
    let time = -fps
    const handle = () => {
      time = Math.min(option.duration, time + fps)

      const currentTime = option.easing!(time, option.from, diff, option.duration)
      option.frame(currentTime)
      if (time !== option.duration) return
      clearInterval(animateData.effect)
      option.complete && option.complete()
    }

    handle()
    animateData.effect = setInterval(handle, fps)
  }

  return { animateFrame }
}

/**
 * 倒计时
 */
export const useTurnPage = (props: Readonly<Required<Props>>, current: Ref<number>) => {
  /**
   * 容器样式
   */
  const wrapStyle = ref<Record<string, string>>({})

  /**
   * 翻页容器样式
   */
  const fwrapStyle = ref<Record<string, string>>({})

  /**
   * 列表项样式
   */
  const itemStyle = ref<Record<string, string>>({})
  /**
   * 列表项内部的阴影样式
   */
  const shadowStyle = ref<Record<string, string>>({})
  /**
   * 旋转样式
   */
  const turnItemStyle = ref<Record<string, string>>({})
  /**
   * 旋转阴影样式
   */
  const turnShadowStyle = ref<Record<string, string>>({})

  /**
   * 显示当前内容
   */
  const showValue = (index: number, style: Record<string, string>) => (index === current.value ? style : '')

  /**
   * turnPage 节点
   */
  const turnPageRef = useTemplateRef<HTMLElement>('turnPage')

  /**
   * turnPage 容器尺寸
   */
  const turnPageRect = computed(() => {
    const domRect = turnPageRef.value?.getBoundingClientRect?.()
    if (!domRect) return
    const { x, y, width, height } = domRect
    const cw = width / 2
    const ch = height / 2
    const cx = x + cw
    const cy = y + ch
    const ex = x + width
    const ey = y + height
    const tl = {
      corner: 'tl',
      start: [x, y],
      end: [cx, cy]
    }
    const tr = {
      corner: 'tr',
      start: [cx, y],
      end: [ex, cy]
    }
    const bl = {
      corner: 'bl',
      start: [x, cy],
      end: [cx, ey]
    }
    const br = {
      corner: 'br',
      start: [cx, cy],
      end: [ex, ey]
    }

    return {
      hot: [tl, tr, bl, br],
      size: {
        width,
        height
      },
      point: {
        x,
        y
      }
    }
  })

  const hideTurnPage = () => {
    wrapStyle.value = {}
    itemStyle.value = {}
    shadowStyle.value = {}
    turnItemStyle.value = {}
    turnShadowStyle.value = {}
  }
  let corner: string | undefined

  /**
   * 计算相对点
   */
  const calcRelativePoint = <T extends Point>({ x, y }: T) => {
    if (!turnPageRect.value) throw new Error('turnPageRect is required')
    const { point } = turnPageRect.value
    x -= point.x
    y -= point.y

    return { x, y }
  }

  const validCorner = (corner: string) => {
    if (corner.includes('l') && !current.value) return false
    if (!corner.includes('l') && current.value >= props.list.length - 1) return false
    return true
  }
  /**
   * 禁止状态
   */
  const disabled = ref(false)
  const moveOption = {
    start({ x, y }: USEMoveHandle.OptionEvent, isMove = false) {
      if (disabled.value) return
      if (!turnPageRect.value) return
      const { size, hot } = turnPageRect.value
      if (!isMove) {
        corner = hot.find(item => {
          const [sx, sy] = item.start
          const [ex, ey] = item.end
          return x >= sx && x <= ex && y >= sy && y <= ey
        })?.corner
      }
      if (!corner) return
      if (!validCorner(corner)) return
      const rePoint = calcRelativePoint({ x, y })

      const resultStyle = useComputeStyle({
        ...size,
        point: { ...rePoint, corner }
      })
      wrapStyle.value = resultStyle.wrapStyle
      fwrapStyle.value = resultStyle.fwrapStyle
      itemStyle.value = resultStyle.itemStyle
      shadowStyle.value = resultStyle.shadowStyle
      turnItemStyle.value = resultStyle.turnItemStyle
      turnShadowStyle.value = resultStyle.turnShadowStyle
    },
    move(e: USEMoveHandle.OptionEvent) {
      this.start(e, true)
    },
    end(e: USEMoveHandle.OptionEvent) {
      if (!corner) return
      if (!turnPageRect.value) return
      if (disabled.value) return
      if (!validCorner(corner)) return
      disabled.value = true
      const { size } = turnPageRect.value
      const animateEndPoint = initCorner(corner, size)
      const { animateFrame } = useAnimateFrame()
      const point = { ...calcRelativePoint(e), corner: corner }
      animateFrame({
        from: 0,
        to: 1,
        frame: (value: number) => {
          const np = bezier(point, point, animateEndPoint, animateEndPoint, value)
          point.x = np.x
          point.y = np.y
          const result = useComputeStyle({ point, ...size })
          wrapStyle.value = result.wrapStyle
          fwrapStyle.value = result.fwrapStyle
          itemStyle.value = result.itemStyle
          shadowStyle.value = result.shadowStyle
          turnItemStyle.value = result.turnItemStyle
          turnShadowStyle.value = result.turnShadowStyle
        },
        complete: () => {
          current.value += corner!.includes('l') ? -1 : 1
          hideTurnPage()
          disabled.value = false
          corner = ''
        },
        duration: Math.abs(animateEndPoint.x)
      })
    }
  }

  onMounted(() => {
    useMoveHandle(turnPageRef.value!, moveOption)
  })

  /**
   * 列表项样式
   */
  const getItemStyle = computed(() => (index: number) => {
    if (!corner) return {}

    const zIndex = +(index === current.value + (corner.includes('l') ? -1 : 1))

    return { zIndex }
  })

  return { getItemStyle, wrapStyle, fwrapStyle, itemStyle, shadowStyle, turnItemStyle, turnShadowStyle, current, showValue }
}

/**
 * 初始化样式
 */
export const useStyle = (props: Readonly<Required<Props>>) => {
  /**
   * 添加单位
   */
  const addUnit = (value: string | number) => (`${+value}` === `${value}` ? `${value}px` : value)

  const getStyle = computed(() => ({
    width: addUnit(props.width),
    height: addUnit(props.height),
    '--max-z-index': props.list.length + 1
  }))

  return { getStyle }
}
