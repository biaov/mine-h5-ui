import { ref } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import { IsType, DeepCopyRA, IsLeapyear, FormatTime, CountDown, Throttle, Debounce, FormatThousand, Locked, AddZero, Calculation, GenerateRandom, Retarder } from '../MeAPI/function'

/**
 * 校验
 * @example
 * ```ts
 * import { useValidator } from 'mine-h5-ui'
 *
 * const {
 *   phone, // 校验手机号码
 *   password, // 校验密码6-12位数字+字母组合
 *   email, // 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 *   idCard, // 校验身份证号
 *   imgs, // 校验图片格式
 *   thousand, // 千位符
 *   thousandFloat // 小数千位符
 * } = useValidator()
 * // phone.test('') // false
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
 * const {
 *   varType, // 变量类型判断
 *   cloneDeep, // 深拷贝变量-递归算法(recursive algorithm)
 *   isLeapyear, // 判断是否是闰年
 *   formatTime, // 时间转换
 *   countDown, // 倒计时
 *   throttle, // 节流
 *   debounce, // 防抖
 *   formatThousand, // 格式化千位符
 *   locked, // 锁定
 *   addZero, // 加 0 补位
 *   calculation, // 加减乘除运算
 *   generateRandom, // 生成随机数
 *   retarder // 延迟器
 * } = useUtils()
 * ```
 */
export const useUtils = () => ({
  varType: IsType, // 变量类型判断
  cloneDeep: DeepCopyRA, // 深拷贝变量-递归算法(recursive algorithm)
  isLeapyear: IsLeapyear, // 判断是否是闰年
  formatTime: FormatTime, // 时间转换
  countDown: CountDown, // 倒计时
  throttle: Throttle, // 节流
  debounce: Debounce, // 防抖
  formatThousand: FormatThousand, // 格式化千位符
  locked: Locked, // 锁定
  addZero: AddZero, // 加 0 补位
  calculation: Calculation, // 加减乘除运算
  generateRandom: GenerateRandom, // 生成随机数
  retarder: Retarder // 延迟器
})

/**
 * 显示隐藏
 * @example
 * ```ts
 * import { useVisible } from 'mine-h5-ui'
 *
 * const { visible, setVisible } = useVisible()
 * ```
 */
export const useVisible = () => {
  const visible = ref(false)

  const setVisible = (value: boolean) => {
    visible.value = value
  }

  return {
    visible,
    setVisible
  }
}
