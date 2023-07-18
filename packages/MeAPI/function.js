import Validator from './validator'

const { validThousand, validThousandFloat } = Validator

/**
 * 变量类型判断
 * @param { string } type - 需要判断的类型
 * @param { any } value - 需要判断的值
 * @returns { boolean } - 是否该类型
 */
export const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param { any } arg - 需要深拷贝的变量
 * @returns { any } - 拷贝完成的值
 */
export const DeepCopyRA = arg => {
  /**
   * 判断是否是对象
   */
  const newValue = IsType('Object', arg)
    ? {}
    : IsType('Array', arg) // 判断是否是数组
    ? []
    : IsType('Date', arg) // 判断是否是日期对象
    ? new arg.constructor(+arg)
    : IsType('RegExp', arg) || IsType('Error', arg) // 判断是否是正则对象或错误对象
    ? new arg.constructor(arg)
    : arg
  /**
   * 判断是否是数组或对象
   */
  if (IsType('Object', arg) || IsType('Array', arg)) {
    // 循环遍历
    for (const key in arg) {
      /**
       * 防止原型链的值
       */
      Object.prototype.hasOwnProperty.call(arg, key) && (newValue[key] = DeepCopyRA(arg[key]))
    }
  }
  return newValue
}

/**
 * 判断是否是闰年
 * @param { number } year - 能被4整除,不能被100整除,能被400整除;优先级:400>100>4
 * @returns { boolean } - true: 是闰年, false: 不是闰年
 */
export const IsLeapyear = num => {
  /**
   * 判断是否是数值
   */
  if (!IsType('Number', num)) throw new Error(`${num} is not number`)
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0
}

/**
 * 时间转换
 * @param {String|Number|Date} [arg=new Date()] - 需要转换的时间
 * @returns { Object } - 转换后的时间数据对象
 * @returns { string } { Object }.Y - 年
 * @returns { string } { Object }.M - 月
 * @returns { string } { Object }.D - 日
 * @returns { string } { Object }.w - 星期
 * @returns { string } { Object }.h - 时
 * @returns { string } { Object }.m - 分
 * @returns { string } { Object }.s - 秒
 * @returns { string } { Object }.date - 日期
 * @returns { string } { Object }.time - 时间
 * @returns { string } { Object }.datetime - 日期时间
 */
export const FormatTime = (arg = new Date()) => {
  /**
   * 非空判断
   */
  if (arg.trim() === '') throw new Error(`${arg} is not null`)
  /**
   * 转化成 ms
   */
  const str = IsType('Number', arg) && String(arg).length < 13 ? arg * 1000 : arg
  /**
   * 为了支持 IOS
   */
  IsType('string', arg) && str.replace(/-/g, '/')
  /**
   * 时间 Date 对象
   */
  const O = new Date(str)
  /**
   * 加 0
   */
  const doubleDigit = num => (num < 10 ? '0' + num : String(num)) //
  /**
   * 日期
   */
  const weeks = ['日', '一', '二', '三', '四', '五', '六']
  /**
   * 年、月、日、星、期、时、分、秒
   */
  const [Y, M, D, w, h, m, s] = [String(O.getFullYear()), doubleDigit(O.getMonth() + 1), doubleDigit(O.getDate()), `星期${weeks[O.getDay()]}`, doubleDigit(O.getHours()), doubleDigit(O.getMinutes()), doubleDigit(O.getSeconds())]
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
 * @param { number } num - 需要转化的时间，ms
 * @param { string } [format="hh:mm:ss"] - 需要转化的时间，ms
 * @returns { Object } - 转换后的时间数据对象
 * @returns { string } { Object }.DD - 日
 * @returns { string } { Object }.hh - 时
 * @returns { string } { Object }.mm - 分
 * @returns { string } { Object }.ss - 秒
 * @returns { string } { Object }.ms - 毫秒
 */
export const CountDown = (num, format = 'hh:mm:ss') => {
  /**
   * 是否是数字
   */
  if (!IsType('Number', num)) throw new Error(`${num} is not number`)
  /**
   * 格式是否正确
   */
  if (!'DD:hh:mm:ss:ms'.includes(format)) throw new Error(`${format} form error`)
  /**
   * 假设格式都存在
   * 天
   */
  const DD = parseInt(num / (1000 * 60 * 60 * 24))
  /**
   * 时
   */
  let hh = parseInt((num / (1000 * 60 * 60)) % 24)
  /**
   * 分
   */
  let mm = parseInt((num / (1000 * 60)) % 60)
  /**
   * 秒
   */
  let ss = parseInt((num / 1000) % 60)
  /**
   * 毫秒
   */
  let ms = parseInt(num % 1000)
  /**
   * 需要返回的格式化数据
   */
  const formatData = {}
  /**
   * 加 0
   */
  const doubleDigit = num => (num < 10 ? `0${num}` : String(num))
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
 * @param { Function } fn - 回调业务处理函数
 * @param { number } [time=1000] - 定时器时间
 * @returns { Function } - 返回的 event 函数
 */
export const Throttle = (fn, time = 1000) => {
  /**
   * 定时器
   */
  let timer = null
  return e => {
    !timer &&
      (timer = setTimeout(() => {
        /**
         * 第一次之后，延迟时间到达就会触发一次，然后再从新开始
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
 * @param { Function } fn - 回调业务处理函数
 * @param { number } [time=300] - 定时器时间
 * @returns { Function } - 返回的 event 函数
 */
export const Debounce = (fn, time = 300) => {
  /**
   * 定时器
   */
  let timer
  return e => {
    /**
     * 清理之前的操作
     */
    if (timer !== undefined) clearTimeout(timer)
    timer = setTimeout(() => {
      /**
       * 最后一次触发，延迟时间过后执行业务处理函数
       */
      fn(e)
    }, time)
  }
}

/**
 * 格式化千位符
 * @param { number } num - 需要转换的数字
 * @returns { string } - 转换后的字符串
 */
export const FormatThousand = num => {
  /**
   * 数字校验
   */
  if (!IsType('Number', num)) throw new Error(`${num} is not number`)
  /**
   * 数字转字符串
   */
  const numStr = String(num)
  /**
   * 返回替换值
   */
  return numStr.replace(numStr.includes('.') ? validThousandFloat : validThousand, '$1,')
}

/**
 * 锁定
 * @param { Function } fn - 回调函数
 * @param { number } [time=5000] - 超时自动关闭
 * @returns { void }
 */
export const Locked = (fn, time = 5000) => {
  /**
   * 锁状态值
   */
  const isLocked = { _value: false }
  /**
   * 定时器
   */
  let timer = null
  /**
   * 监听锁状态的改变
   */
  Object.defineProperty(isLocked, 'value', {
    get() {
      return this._value
    },
    set(newValue) {
      this._value = newValue
      if (newValue) {
        timer = setTimeout(() => {
          this._value = false
        }, time)
      } else {
        clearInterval(timer)
      }
    },
    enumerable: true,
    configurable: false
  })
  /**
   * 执行业务函数
   */
  fn(isLocked.value, value => {
    isLocked.value = value
  })
}

/**
 * 加 0 补位
 * @param { string } str - 原来拼接值
 * @param { number } float1 - 第一个小数位数
 * @param { number } float2 - 第二个小数位数
 * @returns { string } - 加 0 补位之后的值
 */
export const AddZero = (str = '', float1, float2) => str + new Array(Math.abs(float1 - float2) + 1).join('0')

/**
 * 加减乘除运算
 * 使用方法：Calculation(0.1, 0.2).add();
 * @param { number } num1 - 运算值 1
 * @param { number } num2 - 运算值 2
 * @returns { Object } - 运算方法 add subtract multiply divide
 */
export const Calculation = (num1, num2) => {
  /**
   * 数字
   */
  if (!IsType('Number', num1) || !IsType('Number', num2)) throw new Error(`${num1} or ${num2} is not number`)
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
  this.add = () => (newNum1 + newNum2) / Math.pow(10, maxFloat)
  /**
   * 减
   */
  this.subtract = () => (newNum1 - newNum2) / Math.pow(10, maxFloat)
  /**
   * 乘
   */
  this.multiply = () => (newNum1 * newNum2) / Math.pow(10, maxFloat * 2)
  /**
   * 除
   */
  this.divide = () => newNum1 / newNum2

  return this
}

/**
 * 生成随机数
 * @param { void }
 * @returns { string } 生成的随机数
 */
export const GenerateRandom = () => +new Date() + String.prototype.slice.call(Math.random(), 2, 7)

/**
 * 延迟器
 * @param { number } [time=500] 延迟时间
 * @returns { Promise<boolean> } Promise
 */
export const Retarder = (time = 500) =>
  new Promise(resolve => {
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
   * 深拷贝变量-递归算法(recursive algorithm)
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
   * 格式化千位符
   */
  FormatThousand,
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
