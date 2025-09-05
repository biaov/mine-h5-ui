import type { DTCallback, LockedCallback, ThrottleBack, DebounceBack, LockedBack, FormatData, IsLocked, FormatTimeBack, CalculationBack } from './types'

/**
 * 变量类型判断
 * @param { string } type - 需要判断的类型
 * @param { any } value - 需要判断的值
 * @returns { boolean } - 是否该类型
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.IsType('string', '123')) // 输出: true
 */
export const IsType = (type: string, value: unknown): boolean => Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type.toLowerCase()

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param { any } arg - 需要深拷贝的变量
 * @returns { any } - 拷贝完成的值
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.DeepCopyRA({ a: 1 })) // 输入: { a: 1 }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeepCopyRA = (arg: any) => {
  /**
   * 判断是否是对象
   * 判断是否是数组
   * 判断是否是日期对象
   * 判断是否是正则对象或错误对象
   */
  const newValue = IsType('Object', arg)
    ? {}
    : IsType('Array', arg)
      ? []
      : IsType('Date', arg)
        ? new arg.constructor(+arg)
        : IsType('RegExp', arg) || IsType('Error', arg)
          ? new arg.constructor(arg)
          : arg

  /**
   * 判断是否是数组或对象, 循环遍历
   */
  if (IsType('Object', arg) || IsType('Array', arg)) {
    Object.keys(arg).forEach(key => {
      newValue[key] = DeepCopyRA(arg[key])
    })
  }

  return newValue
}

/**
 * 判断是否是闰年
 * @param { number } year - 能被4整除,不能被100整除,能被400整除;优先级:400>100>4
 * @returns { boolean } - true:是闰年,false:不是闰年
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * cosnole.log(MeAPI.IsLeapyear(2020)) // 输出: true
 */
export const IsLeapyear = (num: number): boolean => {
  /**
   * 判断是否是数值
   */
  if (!IsType('number', num)) throw new Error(`${num} is not number`)

  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0
}

/**
 * 时间转换
 * @param { string | Number | Date} [arg=new Date()] - 需要转换的时间
 * @returns { FormatTimeBack } - 转换后的时间数据对象
 * @returns { string } FormatTimeBack.Y - 年
 * @returns { string } FormatTimeBack.M - 月
 * @returns { string } FormatTimeBack.D - 日
 * @returns { string } FormatTimeBack.w - 星期
 * @returns { string } FormatTimeBack.h - 时
 * @returns { string } FormatTimeBack.m - 分
 * @returns { string } FormatTimeBack.s - 秒
 * @returns { string } FormatTimeBack.date - 日期
 * @returns { string } FormatTimeBack.time - 时间
 * @returns { string } FormatTimeBack.datetime - 日期时间
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.FormatTime()) // 输出: { Y: '2021', M: '01', D: '01', w: '星期五', h: '00', m: '00', s: '00', date: '2021-01-01', time: '00:00:00', datetime: '2021-01-01 00:00:00' }
 */
export const FormatTime = (arg: string | number | Date = new Date()): FormatTimeBack => {
  /**
   * 非空判断
   */
  if ((arg as string).trim() === '') throw new Error(`${arg} is not null`)

  /**
   * 转化成ms
   */
  const str = IsType('number', arg) && String(arg).length < 13 ? (arg as number) * 1000 : arg

  /**
   * 为了支持 IOS
   */
  IsType('string', arg) && (str as string).replace(/-/g, '/')

  /**
   * 时间 Date 对象
   */
  const O = new Date(str)

  /**
   * 加 0 补位
   */
  const doubleDigit = (num: number): string => (num < 10 ? `0${num}` : String(num))

  /**
   * 日期
   */
  const weeks = ['日', '一', '二', '三', '四', '五', '六']

  /**
   * 年、月、日、星、期、时、分、秒
   */
  const [Y, M, D, w, h, m, s] = [
    String(O.getFullYear()),
    doubleDigit(O.getMonth() + 1),
    doubleDigit(O.getDate()),
    `星期${weeks[O.getDay()]}`,
    doubleDigit(O.getHours()),
    doubleDigit(O.getMinutes()),
    doubleDigit(O.getSeconds())
  ]

  /**
   * 日期
   */
  const date = `${Y}-${M}-${D}`

  /**
   * 时间
   */
  const time = `${h}:${m}:${s}`

  /**
   * 日期时间
   */
  const datetime = `${date} ${time}`

  return { Y, M, D, w, h, m, s, date, time, datetime }
}

/**
 * 倒时间计算
 * @param { number } num - 需要转化的时间, ms
 * @param { string } [format="hh:mm:ss"] - 需要转化的时间, ms
 * @returns { FormatData } - 转换后的时间数据对象
 * @returns { string } FormatData.DD - 日
 * @returns { string } FormatData.hh - 时
 * @returns { string } FormatData.mm - 分
 * @returns { string } FormatData.ss - 秒
 * @returns { string } FormatData.ms - 毫秒
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.CountDown(1000)) // 输出: { DD: '00', hh: '00', mm: '00', ss: '01', ms: '000' }
 */
export const CountDown = (num: number, format = 'hh:mm:ss'): Partial<FormatData> => {
  /**
   * 是否是数字
   */
  if (!IsType('number', num)) throw new Error(`${num} is not number`)

  /**
   * 格式是否正确
   */
  if (!'DD:hh:mm:ss:ms'.includes(format)) throw new Error(`${format} form error`)

  /**
   * 假设格式都存在
   * 天
   */
  const DD = ~~(num / (1000 * 60 * 60 * 24))

  /**
   * 时
   */
  let hh = ~~((num / (1000 * 60 * 60)) % 24)

  /**
   * 分
   */
  let mm = ~~((num / (1000 * 60)) % 60)

  /**
   * 秒
   */
  let ss = ~~((num / 1000) % 60)

  /**
   * 毫秒
   */
  let ms = ~~(num % 1000)

  /**
   * 需要返回的格式化数据
   */
  const formatData: Partial<FormatData> = {}
  /**
   * 加 0 补位
   */
  const doubleDigit = (digit: number) => (digit < 10 ? `0${digit}` : String(digit))

  /**
   * 天
   */
  format.includes('DD') ? (formatData.DD = doubleDigit(DD)) : (hh += DD * 24)

  /**
   * 时
   */
  format.includes('hh') ? (formatData.hh = doubleDigit(hh)) : (mm += hh * 60)

  /**
   * 分
   */
  format.includes('mm') ? (formatData.mm = doubleDigit(mm)) : (ss += mm * 60)

  /**
   * 秒
   */
  format.includes('ss') ? (formatData.ss = doubleDigit(ss)) : (ms += ss * 1000)

  if (format.includes('ms')) {
    /**
     * 毫秒
     */
    const curMs = format.includes('mm') ? doubleDigit(ms) : num
    formatData.ms = +String(curMs).slice(0, 2)
  }

  return formatData
}

/**
 * 节流
 * @param { DTCallback } fn - 回调业务处理函数
 * @param { number } [time=1000] - 定时器时间
 * @returns { ThrottleBack } - 返回的 event 函数
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * const fn = () => console.log('节流') // 1s 后才会触发
 * const throttle = MeAPI.Throttle(fn)
 * throttle()
 */
export const Throttle = (fn: DTCallback, time = 1000): ThrottleBack => {
  /**
   * 定时器
   */
  let timer: NodeJS.Timeout | null = null

  return (e?: Event) => {
    !timer &&
      (timer = setTimeout(() => {
        /**
         * 第一次之后, 延迟时间到达就会触发一次, 然后再从新开始
         */
        fn(e)

        /**
         * 清理定时器
         */
        timer = null
      }, time))
  }
}

/**
 * 防抖
 * @param { DTCallback } fn - 回调业务处理函数
 * @param { number } [time=300] - 定时器时间
 * @returns { DebounceBack } - 返回的 event 函数
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * const fn = () => console.log('防抖') // 300ms 后才会触发
 * const debounce = MeAPI.Debounce(fn)
 * debounce()
 */
export const Debounce = (fn: DTCallback, time = 300): DebounceBack => {
  /**
   * 定时器
   */
  let timer: NodeJS.Timeout | undefined

  return (e?: Event) => {
    /**
     * 清理之前的操作
     */
    if (timer !== undefined) clearTimeout(timer)
    timer = setTimeout(() => {
      /**
       * 最后一次触发, 延迟时间过后执行业务处理函数
       */
      fn(e)
    }, time)
  }
}

/**
 * 锁定
 * @param { LockedCallback } fn - 回调函数
 * @param { number } [time=5000] - 超时自动关闭
 * @returns { LockedBack } 返回函数
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * MeAPI.Locked(() => console.log('锁定')) // 5s 后才会触发
 */
export const Locked = (fn: LockedCallback, time = 5000): LockedBack => {
  /**
   * 定时器
   */
  let timer: NodeJS.Timeout | null = null
  const isLocked = { value: false }

  /**
   * 监听锁状态的改变
   */
  const isLockedProxy: IsLocked = new Proxy(isLocked, {
    get(obj: IsLocked, prop: string) {
      return obj[prop]
    },
    set(obj: IsLocked, prop: string, value: boolean) {
      obj[prop] = value

      if (value) {
        timer = setTimeout(() => {
          obj[prop] = false
        }, time)
      } else {
        clearInterval(timer as NodeJS.Timeout)
      }

      return true
    }
  })

  return (e?: Event) => {
    /**
     * 执行业务函数
     */
    !isLockedProxy.value &&
      fn(e, (value: boolean) => {
        isLockedProxy.value = value
      })
  }
}

/**
 * 加 0 补位
 * @param { string } str - 原来拼接值
 * @param { number } float1 - 第一个小数位数
 * @param { number } float2 - 第二个小数位数
 * @returns { string } - 加 0 补位之后的值
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.AddZero('1', 2, 3)) // 输出: 1.00
 */
export const AddZero = (str: string, float1: number, float2: number): string => str + new Array(Math.abs(float1 - float2) + 1).join('0')

/**
 * 加减乘除运算
 * 使用方法：Calculation(0.1, 0.2).add();
 * @param { number } num1 - 运算值 1
 * @param { number } num2 - 运算值 2
 * @returns { CalculationBack } - 运算方法 add subtract multiply divide
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.Calculation(0.1, 0.2).add()) // 输出: 0.3
 */
export const Calculation = (num1: number, num2: number): CalculationBack => {
  /**
   * 数字
   */
  if (!IsType('number', num1) || !IsType('number', num2)) throw new Error(`${num1} or ${num2} is not number`)

  /**
   * 转列表
   */
  const list1 = String(num1).split('.')
  const list2 = String(num2).split('.')
  /**
   * 小数位数
   */
  const float1 = list1[1]?.length ?? 0
  /**
   * 小数位
   */
  const float2 = list2[1]?.length ?? 0
  /**
   * 补位
   */
  float1 < float2 && (list1[1] = AddZero(list1[1], float1, float2))
  float1 > float2 && (list2[1] = AddZero(list2[1], float1, float2))
  /**
   * 新整数
   */
  const newNum1 = +list1.join('')
  const newNum2 = +list2.join('')
  /**
   * 取大值
   */
  const maxFloat = Math.max(float1, float2)
  /**
   * 加
   */
  const add = () => (newNum1 + newNum2) / 10 ** maxFloat
  /**
   * 减
   */
  const subtract = () => (newNum1 - newNum2) / 10 ** maxFloat
  /**
   * 乘
   */
  const multiply = () => (newNum1 * newNum2) / 10 ** (maxFloat * 2)
  /**
   * 除
   */
  const divide = () => newNum1 / newNum2

  return { add, subtract, multiply, divide }
}

/**
 * 生成随机数
 * @param { void }
 * @returns { string } 生成的随机数
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * console.log(MeAPI.GenerateRandom()) // 输出: 1612345678901
 */
export const GenerateRandom = (): string => +new Date() + String.prototype.slice.call(Math.random(), 2, 7)

/**
 * 延迟器
 * @param { number } [time=500] 延迟时间
 * @returns { Promise<boolean> } Promise
 * @example
 * import { MeAPI } from 'mine-h5-ui'
 *
 * await MeAPI.Retarder()
 * console.log('延迟 500ms 后执行')
 */
export const Retarder = (time = 500): Promise<boolean> =>
  new Promise<boolean>(resolve => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

export default {
  /**
   * 变量类型判断
   */
  IsType,
  /**
   * 深拷贝变量 - 递归算法(recursive algorithm)
   */
  DeepCopyRA,
  /**
   * 判断是否是闰年
   */
  IsLeapyear,
  /**
   * 时间转换
   */
  FormatTime,
  /**
   * 倒计时
   */
  CountDown,
  /**
   * 节流
   */
  Throttle,
  /**
   * 防抖
   */
  Debounce,
  /**
   * 锁定
   */
  Locked,
  /**
   * 加 0 补位
   */
  AddZero,
  /**
   * 加减乘除运算
   */
  Calculation,
  /**
   * 生成随机数
   */
  GenerateRandom,
  /**
   * 延迟器
   */
  Retarder
}
