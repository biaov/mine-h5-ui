import { IsType, DeepCopyRA, IsLeapyear, FormatTime, CountDown, Throttle, Debounce, FormatThousand, Locked, AddZero, Calculation, GenerateRandom, Retarder } from '../../MeAPI/function'

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
