import { ref } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import { IsType, DeepCopyRA, IsLeapyear, FormatTime, CountDown, Throttle, Debounce, FormatThousand, Locked, AddZero, Calculation, GenerateRandom, Retarder } from '../MeAPI/function'
import { storageInstance, colorMode } from './enums.ts'
import type { StorageType, ScrollAnimationOption, USELocked, USEColorTransform, USMoveHandle } from './types'
import type { Mutable } from '../types'

/**
 * 校验
 * @example
 * ```ts
 * import { useValidator } from 'mine-h5-ui'
 *
 * const { phone, password, email, idCard, imgs, thousand, thousandFloat } = useValidator()
 * console.log(phone.test('')) // 输出: false
 * ```
 */
export const useValidator = () => ({
  phone: /^1[3456789]\d{9}$/,
  password: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
  email: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
  idCard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
  imgs: /\.(svg|gif|png|jpe?g)$/i,
  thousand: /(\d)(?=(\d{3})+$)/g,
  thousandFloat: /(\d)(?=(\d{3})+\.)/g
})

/**
 * 事件绑定
 * @example
 * ```ts
 * import { useBind } from 'mine-h5-ui'
 *
 * const { addBind, removeBind } = useBind()
 * const fn = (): void => {}
 * addBind(document, 'click', fn)
 * removeBind(document, 'click', fn)
 * ```
 */
export const useBind = () => {
  const addBind = Bind
  const removeBind = Unbind

  return {
    addBind,
    removeBind
  }
}

/**
 * 工具函数
 * @example
 * ```ts
 * import { useUtils } from 'mine-h5-ui'
 *
 * const { varType, cloneDeep, isLeapyear, formatTime, countDown, throttle, debounce, formatThousand, locked, addZero, calculation, generateRandom, retarder } = useUtils()
 * console.log(varType.isString('')) // 输出: true
 * ```
 */
export const useUtils = () => ({
  /**
   * 变量类型判断
   */
  varType: IsType,
  /**
   * 深拷贝变量 - 递归算法(recursive algorithm)
   */
  cloneDeep: DeepCopyRA,
  /**
   * 判断是否是闰年
   */
  isLeapyear: IsLeapyear,
  /**
   * 时间转换
   */
  formatTime: FormatTime,
  /**
   * 倒计时
   */
  countDown: CountDown,
  /**
   * 节流
   */
  throttle: Throttle,
  /**
   * 防抖
   */
  debounce: Debounce,
  /**
   * 格式化千位符
   */
  formatThousand: FormatThousand,
  /**
   * 锁定
   */
  locked: Locked,
  /**
   * 加 0 补位
   */
  addZero: AddZero,
  /**
   * 加减乘除运算
   */
  calculation: Calculation,
  /**
   * 生成随机数
   */
  generateRandom: GenerateRandom,
  /**
   * 延迟器
   */
  retarder: Retarder
})

/**
 * 显示隐藏
 * @example
 * ```ts
 * import { useVisible } from 'mine-h5-ui'
 *
 * const [visible, setVisible] = useVisible()
 * ```
 */
export const useVisible = (initVisible = false) => {
  const visible = ref(initVisible)

  const setVisible = (value: boolean) => {
    visible.value = value
  }

  return [visible, setVisible] as const
}

/**
 * 缓存
 * @example
 * ```ts
 * import { useStorage } from 'mine-h5-ui'
 *
 * const { setStorage, getStorage, removeStorage } = useStorage()
 * setStorage('name', 'mineh5ui') // 设置缓存
 * console.log(getStorage('name')) // 获取缓存，输出: mineh5ui
 * removeStorage('name') // 移除缓存
 * console.log(getStorage('name')) // 输出: null
 * ```
 */
export const useStorage = () => {
  const getKey = (key: string) => `$me-${key}`
  const getStorageInstance = (type?: StorageType) => (type ? storageInstance[`${type}Storage`] : localStorage)

  const setStorage = (key: string, value: unknown, type?: StorageType) => {
    getStorageInstance(type).setItem(getKey(key), JSON.stringify({ value }))
  }

  const getStorage = (key: string, type?: StorageType) => {
    const value = getStorageInstance(type).getItem(getKey(key))
    return value && JSON.parse(value).value
  }

  const removeStorage = (key: string, type?: StorageType) => {
    getStorageInstance(type).removeItem(getKey(key))
  }

  return { setStorage, getStorage, removeStorage }
}

/**
 * 滚动动画
 * @example
 * ```ts
 * import { useScroll } from 'mine-h5-ui'

 * const { scrollTo } = useScroll()
 * scrollTo(document.body, 0) // 返回顶部
 * const customDomNode = document.querySelector('.customDomNode') // 自定义节点
 * scrollTo(customDomNode, 0) // 滚动到指定位置
 * ```
 */
export const useScroll = ({ duration = 300 }: ScrollAnimationOption = {}) => {
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const scrollTo = (node: Element, to: number) => {
    const start = node.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment
      node.scrollTop = easeInOutQuad(currentTime, start, change, duration)
      currentTime < duration && requestAnimationFrame(animateScroll)
    }

    animateScroll()
  }

  return { scrollTo }
}

/**
 * 重复点击锁
 * @example
 * ```js
  import { useLocked } from 'mine-h5-ui'

  const onClick = useLocked(async () => {
    // 业务操作
    // ...
  })
 * ```
 */
export const useLocked = (handler: USELocked.Option): USELocked.Option => {
  let locked = false
  return async function (this: unknown, ...args) {
    if (locked) return
    locked = true
    try {
      await handler.apply(this, args)
    } finally {
      locked = false
    }
  }
}

/**
 * 随机 Id
 * @param binary 进制
 * @example
 * ```ts
 * import { useId } from 'mine-h5-ui'
 *
 * console.log(useId()) // 1726733454868gl3vkrbuf9
 * ```
 */
export const useId = (binary = 32) => +new Date() + Math.random().toString(binary).slice(2)

const hsbToRgb = ([h, s, v]: number[]) => {
  h = (h / 360) * 6
  s = s / 100
  v = v / 100

  const i = Math.floor(h)
  const f = h - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6
  const r = [v, q, p, p, t, v][mod]
  const g = [t, v, v, q, p, p][mod]
  const b = [p, p, t, v, v, q][mod]

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

const rgbToHsb = ([r, g, b]: (string | number)[]) => {
  r = +r / 255
  g = +g / 255
  b = +b / 255
  let h
  let s: number
  let v: number
  const min = Math.min(r, g, b)
  v = Math.max(r, g, b)
  const max = v
  const difference = max - min

  if (max == min) {
    h = 0
  } else {
    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0)
        break
      case g:
        h = 2 + (b - r) / difference
        break
      case b:
        h = 4 + (r - g) / difference
        break
    }
    h = Math.round((h as number) * 60)
  }
  if (max == 0) {
    s = 0
  } else {
    s = 1 - min / max
  }
  s = Math.round(s * 100)
  v = Math.round(v * 100)
  return [h, s, v]
}

const hexToRgb = (hex: string) =>
  hex
    .slice(1)
    .match(/../g)!
    .map(hex => parseInt(hex, 16))

const rgbToHex = (rgb: number[]) => `${rgb.reduce((prev, item) => prev + item.toString(16).padStart(2, '0'), '#')}`

/**
 * 颜色值互转
 * @example
 * ```ts
 * import { useColorTransform } from 'mine-h5-ui'
 *
 * const rgb = useColorTransform('#ff6600', ['hex', 'rgb'])
 * console.log(rgb) // rgb(255, 102, 0)
 * ```
 */
export const useColorTransform = <T = string | (string | number)[]>(value: T, [sourceType, targetType]: USEColorTransform.Option['type']): T => {
  if (!(sourceType && targetType)) return value
  if (sourceType === targetType) return value
  let result: string | (string | number)[]
  let rgbBefore: number[]

  switch (sourceType) {
    case colorMode.hex:
      if (!/^#[0-9a-zA-Z]{6}$/.test(`${value}`)) throw new Error(`${value} 颜色值错误或不全`)
      rgbBefore = hexToRgb(value as string)
      break
    case colorMode.rgb:
      rgbBefore = value as number[]
      break
    case colorMode.hsb:
      const hsb = (value as string).match(/\d+/g)
      if (!hsb) throw new Error(`${value} 不是一个 hsb 格式`)
      rgbBefore = hsbToRgb(hsb.map(Number))
      break
    default:
      throw new Error(`${sourceType} 色彩模式错误`)
  }

  switch (targetType) {
    case colorMode.hex:
      result = rgbToHex(rgbBefore)
      break
    case colorMode.rgb:
      result = `rgb(${rgbBefore.join()})`
      break
    case colorMode.hsb:
      result = `hsb(${rgbToHsb(rgbBefore).join()})`
      break
    default:
      throw new Error(`${targetType} 色彩模式错误`)
  }

  return result as T
}

/**
 * 移动操作处理
 * 鼠标按下, 移动, 抬起
 * 触摸开始, 移动, 结束
 * @example
 * ```ts
 * import { useMoveHandle } from 'mine-h5-ui'
 * const nodeRef = useTemplateRef('demo')
 *
 * interface OptionEvent {
 *    x: number
 *    y: number
 *    type: string
 * }
 *
 * const option = {
 *    start(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchstart' }
 *    },
 *    move(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchdown' }
 *    },
 *    end(e: OptionEvent){
 *      console.log(e) // { x: 0, y: 0, type: 'touchend' }
 *    }
 * }
 *
 * useMoveHandle(nodeRef.value, option)
 * ```
 */
export const useMoveHandle = (nodeRef: HTMLElement, option: Partial<USMoveHandle.Option>) => {
  let isStart = false
  /**
   * 获取位置
   */

  const getPosition = (e: TouchEvent | MouseEvent) => {
    let x: number
    let y: number
    const type = e.type
    if (type === 'touchend') {
      x = (e as TouchEvent).changedTouches[0].clientX
      y = (e as TouchEvent).changedTouches[0].clientY
    } else if (type.startsWith('touch')) {
      x = (e as TouchEvent).touches[0].clientX
      y = (e as TouchEvent).touches[0].clientY
    } else {
      x = (e as MouseEvent).clientX
      y = (e as MouseEvent).clientY
    }

    return { x, y, type }
  }
  /**
   * 移动处理
   */
  const moveHandle = (e: TouchEvent | MouseEvent) => {
    option.move?.(getPosition(e))
  }

  /**
   * 结束处理
   */
  const endHandle = (e: TouchEvent | MouseEvent) => {
    document.removeEventListener('mousemove', moveHandle)
    document.removeEventListener('mouseup', endHandle)
    document.removeEventListener('touchmove', moveHandle)
    document.removeEventListener('touchend', endHandle)

    isStart = false

    option.end?.(getPosition(e))
  }

  /**
   * 开始处理
   */
  const startHandle = (e: TouchEvent | MouseEvent) => {
    if (isStart) return
    e.preventDefault()
    document.addEventListener('mousemove', moveHandle)
    document.addEventListener('mouseup', endHandle)
    document.addEventListener('touchmove', moveHandle)
    document.addEventListener('touchend', endHandle)

    isStart = true

    option.start?.(getPosition(e))
  }

  nodeRef.addEventListener('mousedown', startHandle, { passive: false })
  nodeRef.addEventListener('touchstart', startHandle, { passive: false })
}
