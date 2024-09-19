import { ref } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import { IsType, DeepCopyRA, IsLeapyear, FormatTime, CountDown, Throttle, Debounce, FormatThousand, Locked, AddZero, Calculation, GenerateRandom, Retarder } from '../MeAPI/function'
import { storageInstance } from './enums.ts'
import type { StorageType, ScrollAnimationOption, USELocked } from './types'
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
  return async (...args) => {
    if (locked) return
    locked = true
    try {
      await handler(...args)
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
