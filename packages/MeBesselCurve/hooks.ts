import { ref, onMounted, watch, computed, nextTick, toRaw } from 'vue'
import { useUtils } from '../MeComposable'
import type { InferDefaults } from '../types'
import type { Props, ListItem, Direction, CalcTargetRef } from './types'

const { generateRandom } = useUtils()

/**
 * props 的默认值
 */
export const defaultProps: Readonly<InferDefaults<Props>> = {
  list: () => [],
  direction: 'horizontal',
  color: '#d9d9d9', // '#409eff'
  strokeWidth: 1,
  arrow: true
}

/**
 * 操作项
 */
export const useHandler = (props: Required<Props>) => {
  const lines = ref<string[]>([])
  const lineSize = props.arrow ? 10 : 0
  const besselCurveRef = ref<HTMLDivElement>()

  /**
   * 随机值
   */
  let containterRect: Partial<DOMRect> = {}

  /**
   * 计算大小
   */
  const calcSize = ({ sx, sy, sw, sh, ex, ey, ew, eh }: ListItem, direction: Direction, type: unknown) => {
    let cx
    let cy
    let text
    if (direction === defaultProps.direction) {
      ey += sh / 2
      sy += sh / 2
      if (sx < ex) {
        sx += sw
        ex -= lineSize
      } else {
        ex += lineSize + ew
      }
      cx = sx + (ex - sx) / 2
      text = type ? `${cx},${ey}` : `${cx},${sy}`
    } else {
      ex += sw / 2
      sx += sw / 2
      if (sy < ey) {
        sy += sh
        ey -= lineSize
      } else {
        ey += lineSize + eh
      }
      cy = sy + (ey - sy) / 2
      text = type ? `${ex},${cy}` : `${sx},${cy}`
    }
    return { sx, sy, ex, ey, text }
  }

  const directions = computed(() => {
    const [startDirection = defaultProps.direction, endDirection = defaultProps.direction] = Array.isArray(props.direction) ? props.direction : [props.direction, props.direction]
    return [startDirection, endDirection] as Direction[]
  })

  /**
   * 计算曲线路径
   */
  const calcBesselCurve = () => {
    const list = structuredClone(props.list.map(toRaw))
    if (!list.length) {
      lines.value = []
      return
    }
    if (!besselCurveRef.value) return
    const { x, y, width } = containterRect as DOMRect
    if (width === undefined) return
    const newLines: string[] = []
    list.forEach(rect => {
      rect.sx -= x
      rect.sy -= y
      rect.ex -= x
      rect.ey -= y
      const [{ sx, sy, text: prefix }, { ex, ey, text: suffix }] = directions.value.map((direction, index) => calcSize(rect, direction, index))
      newLines.push(`M ${sx},${sy} C ${prefix} ${suffix} ${ex},${ey}`)
    })
    lines.value = newLines
  }

  onMounted(() => {
    containterRect = besselCurveRef.value!.getBoundingClientRect()
    calcBesselCurve()
  })

  watch(() => props.list, calcBesselCurve, { deep: true, immediate: true })

  return { lines, besselCurveRef }
}

/**
 * marker 属性值
 */
export const useMarker = (props: Required<Props>) => {
  const defaultMarker = () => ({ markerWidth: 10, markerHeight: 8, refY: 4 })

  const marker = computed(() => {
    const attr = defaultMarker()

    const attrs = Object.keys(attr) as (keyof typeof attr)[]
    attrs.forEach(key => {
      attr[key] /= props.strokeWidth
    })

    return attr
  })

  const triangleId = generateRandom()

  return { marker, triangleId }
}

/**
 * 组合式 API
 */
export const useMeBesselCurve = () => {
  /**
   * 查找滚动条的高度
   */
  const findScroll = (target: Element) => {
    const point = { x: 0, y: 0 }
    let parent = target.parentNode as Element

    while (parent !== document.body) {
      // 滚动条叠加
      point.y += parent.scrollTop
      point.x += parent.scrollLeft
      parent = parent.parentNode as Element
    }

    return point
  }

  const renderBesselCurve = ref<ListItem[]>([])
  /**
   * 线数据集合
   */
  const pairs: Partial<ListItem & { id: string | number }>[] = []

  /**
   * 设置线渲染列表
   */
  const setRenderList = () => {
    const lines: ListItem[] = []
    pairs.forEach(({ sx, sy, sw, sh, ex, ey, ew, eh, group }) => {
      const line = { sx, sy, sw, sh, ex, ey, ew, eh, group } as ListItem
      !Object.values(line).some(value => !value) && lines.push(line)
    })
    renderBesselCurve.value.length = 0
    renderBesselCurve.value.push(...lines)
  }

  /**
   * 计算标签坐标
   */
  const calcTargetRef: CalcTargetRef = (e, { type, group }) => {
    return new Promise(resolve => {
      if (!e) {
        resolve(true)
        return
      }
      nextTick(() => {
        const { x, y, width, height } = e.getBoundingClientRect()
        if (!(width && height)) {
          resolve(true)
          return
        }

        const scroll = findScroll(e)

        const nx = x + scroll.x
        const ny = y + scroll.y
        const item = pairs.find(pair => pair.group === group)
        let newPoint
        if (type === 'start') {
          newPoint = { sx: nx, sy: ny, sw: width, sh: height }
        } else {
          newPoint = { ex: nx, ey: ny, ew: width, eh: height }
        }
        const newItem = Object.assign(item ?? {}, newPoint, { group })
        !item && pairs.push(newItem)
        setRenderList()
        resolve(true)
      })
    })
  }

  return { renderBesselCurve, calcTargetRef }
}
