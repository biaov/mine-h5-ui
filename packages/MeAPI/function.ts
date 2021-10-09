import Validator from "./validator";
import { DTCallback, LockedCallBack } from "./types";
import { FormatData, IsLocked } from "./interfaces";

const { validThousand, validThousandFloat } = Validator;
/**
 * 变量类型判断
 * @param {String} type - 需要判断的类型
 * @param {Any} value - 需要判断的值
 * @returns {Boolean} - 是否该类型
 */
export const IsType = (type: string, value: any) => Object.prototype.toString.call(value).slice(8, -1) === type;

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param {Any} arg - 需要深拷贝的变量
 * @returns {Any} - 拷贝完成的值
 */
export const DeepCopyRA = (arg: any) => {
  const newValue = IsType("Object", arg) // 判断是否是对象
    ? {}
    : IsType("Array", arg) // 判断是否是数组
    ? []
    : IsType("Date", arg) // 判断是否是日期对象
    ? new arg.constructor(+arg)
    : IsType("RegExp", arg) || IsType("Error", arg) // 判断是否是正则对象或错误对象
    ? new arg.constructor(arg)
    : arg;
  // 判断是否是数组或对象,循环遍历
  IsType("Object", arg) ||
    (IsType("Array", arg) &&
      Object.keys(arg).forEach(key => {
        newValue[key] = DeepCopyRA(arg[key]);
      }));
  return newValue;
};

/**
 * 判断是否是闰年
 * @param {Number} year - 能被4整除,不能被100整除,能被400整除;优先级:400>100>4
 * @returns {Boolean} - true:是闰年,false:不是闰年
 */
export const IsLeapyear = (num: number) => {
  // 判断是否是数值
  if (!IsType("Number", num)) {
    throw new Error(`${num} is not number`);
  }
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};

/**
 * 时间转换
 * @param {String|Number|Date} [arg=new Date()] - 需要转换的时间
 * @returns {Object} - 转换后的时间数据对象
 * @returns {String} {Object}.Y - 年
 * @returns {String} {Object}.M - 月
 * @returns {String} {Object}.D - 日
 * @returns {String} {Object}.w - 星期
 * @returns {String} {Object}.h - 时
 * @returns {String} {Object}.m - 分
 * @returns {String} {Object}.s - 秒
 * @returns {String} {Object}.date - 日期
 * @returns {String} {Object}.time - 时间
 * @returns {String} {Object}.datetime - 日期时间
 */
export const FormatTime = (arg: string | number | Date = new Date()) => {
  // 非空判断
  if ((arg as string).trim() === "") throw new Error(`${arg} is not null`);
  const str = IsType("Number", arg) && String(arg).length < 13 ? (arg as number) * 1000 : arg; // 转化成ms
  IsType("string", arg) && (str as string).replace(/-/g, "/"); // 为了支持 IOS
  const O = new Date(str); // 时间 Date 对象
  const doubleDigit = (num: number) => (num < 10 ? `0${num}` : String(num)); // 加 0
  const weeks = ["日", "一", "二", "三", "四", "五", "六"]; // 日期
  // 年、月、日、星、期、时、分、秒
  const [Y, M, D, w, h, m, s] = [
    String(O.getFullYear()),
    doubleDigit(O.getMonth() + 1),
    doubleDigit(O.getDate()),
    `星期${weeks[O.getDay()]}`,
    doubleDigit(O.getHours()),
    doubleDigit(O.getMinutes()),
    doubleDigit(O.getSeconds())
  ];
  const date = `${Y}-${M}-${D}`; // 日期
  const time = `${h}:${m}:${s}`; // 时间
  const datetime = `${date} ${time}`; // 日期时间
  return { Y, M, D, w, h, m, s, date, time, datetime };
};
/**
 * 倒时间计算
 * @param {Number} num - 需要转化的时间，ms
 * @param {String} [format="hh:mm:ss"] - 需要转化的时间，ms
 * @returns {Object} - 转换后的时间数据对象
 * @returns {String} {Object}.DD - 日
 * @returns {String} {Object}.hh - 时
 * @returns {String} {Object}.mm - 分
 * @returns {String} {Object}.ss - 秒
 * @returns {String} {Object}.ms - 毫秒
 */
export const CountDown = (num: number, format = "hh:mm:ss") => {
  if (!IsType("Number", num)) throw new Error(`${num} is not number`); // 是否是数字
  if (!"DD:hh:mm:ss:ms".includes(format)) {
    throw new Error(`${format} form error`); // 格式是否正确
  }
  // 假设格式都存在
  const DD = ~~(num / (1000 * 60 * 60 * 24)); // 天
  let hh = ~~((num / (1000 * 60 * 60)) % 24); // 时
  let mm = ~~((num / (1000 * 60)) % 60); // 分
  let ss = ~~((num / 1000) % 60); // 秒
  let ms = ~~(num % 1000); // 毫秒
  const formatData: FormatData = {}; // 需要返回的格式化数据
  const doubleDigit = (digit: number) => (digit < 10 ? `0${digit}` : String(digit)); // 加 0
  format.includes("DD") ? (formatData.DD = doubleDigit(DD)) : (hh += DD * 24); // 天
  format.includes("hh") ? (formatData.hh = doubleDigit(hh)) : (mm += hh * 60); // 时
  format.includes("mm") ? (formatData.mm = doubleDigit(mm)) : (ss += mm * 60); // 分
  format.includes("ss") ? (formatData.ss = doubleDigit(ss)) : (ms += ss * 1000); // 秒
  if (format.includes("ms")) {
    const curMs = format.includes("mm") ? doubleDigit(ms) : num; // 毫秒
    formatData.ms = +String(curMs).slice(0, 2);
  }
  return formatData;
};
/**
 * 节流
 * @param {DTCallback} fn - 回调业务处理函数
 * @param {Number} [time=1000] - 定时器时间
 * @returns {Function} - 返回的 event 函数
 */
export const Throttle = (fn: DTCallback, time = 1000) => {
  let timer: number | null = null; // 定时器
  return (e: Event) => {
    !timer &&
      (timer = setTimeout(() => {
        fn(e); // 第一次之后，延迟时间到达就会触发一次，然后再从新开始
        timer = null; // 清理定时器
      }, time));
  };
};
/**
 * 防抖
 * @param {DTCallback} fn - 回调业务处理函数
 * @param {Number} [time=300] - 定时器时间
 * @returns {Function} - 返回的 event 函数
 */

export const Debounce = (fn: DTCallback, time = 300) => {
  let timer: number | undefined; // 定时器
  return (e: Event) => {
    if (timer !== undefined) clearTimeout(timer); // 清理之前的操作
    timer = setTimeout(() => {
      fn(e); // 最后一次触发，延迟时间过后执行业务处理函数
    }, time);
  };
};
/**
 * 格式化千位符
 * @param {Number} num - 需要转换的数字
 * @returns {String} - 转换后的字符串
 */
export const FormatThousand = (num: number) => {
  if (!IsType("Number", num)) throw new Error(`${num} is not number`); // 数字校验
  const numStr = String(num); // 数字转字符串
  // 返回替换值
  return numStr.replace(numStr.includes(".") ? validThousandFloat : validThousand, "$1,");
};
/**
 * 锁定
 * @param {LockedCallBack} fn - 回调函数
 * @param {Number} [time=5000] - 超时自动关闭
 * @returns {(e?: Event) => void} 返回函数
 */
export const Locked = (fn: LockedCallBack, time = 5000) => {
  let timer: number | null = null; // 定时器
  const isLocked = { value: false };
  // 监听锁状态的改变
  const isLockedProxy: IsLocked = new Proxy(isLocked, {
    get(obj: IsLocked, prop: string) {
      return obj[prop];
    },
    set(obj: IsLocked, prop: string, value: boolean) {
      obj[prop] = value;
      if (value) {
        timer = setTimeout(() => {
          obj[prop] = false;
        }, time);
      } else {
        clearInterval(timer as number);
      }
      return true;
    }
  });
  return (e?: Event) => {
    // 执行业务函数
    !isLockedProxy.value &&
      fn(e, (value: boolean) => {
        isLockedProxy.value = value;
      });
  };
};
/**
 * 加 0 补位
 * @param {String} str - 原来拼接值
 * @param {Number} float1 - 第一个小数位数
 * @param {Number} float2 - 第二个小数位数
 * @returns {String} - 加 0 补位之后的值
 */
export const AddZero = (str = "", float1: number, float2: number) => str + new Array(Math.abs(float1 - float2) + 1).join("0");
/**
 * 加减乘除运算
 * 使用方法：Calculation(0.1, 0.2).add();
 * @param {Number} num1 - 运算值 1
 * @param {Number} num2 - 运算值 2
 * @returns {Object} - 运算方法 add subtract multiply divide
 */
export const Calculation = (num1: number, num2: number) => {
  // 数字
  if (!IsType("Number", num1) || !IsType("Number", num2)) {
    throw new Error(`${num1} or ${num2} is not number`);
  }
  // 转列表
  const list1 = String(num1).split(".");
  const list2 = String(num2).split(".");
  const float1 = list1[1]?.length ?? 0; // 小数位数
  const float2 = list2[1]?.length ?? 0; // 小数位
  // 补位
  float1 < float2 && (list1[1] = AddZero(list1[1], float1, float2));
  float1 > float2 && (list2[1] = AddZero(list2[1], float1, float2));
  // 新整数
  const newNum1 = +list1.join("");
  const newNum2 = +list2.join("");
  const maxFloat = Math.max(float1, float2); // 取大值
  const add = () => (newNum1 + newNum2) / 10 ** maxFloat; // 加
  const subtract = () => (newNum1 - newNum2) / 10 ** maxFloat; // 减
  const multiply = () => (newNum1 * newNum2) / 10 ** (maxFloat * 2); // 乘
  const divide = () => newNum1 / newNum2; // 除
  return { add, subtract, multiply, divide };
};
export default {
  IsType, // 变量类型判断
  DeepCopyRA, // 深拷贝变量-递归算法(recursive algorithm)
  IsLeapyear, // 判断是否是闰年
  FormatTime, // 时间转换
  CountDown, // 倒计时
  Throttle, // 节流
  Debounce, // 防抖
  FormatThousand, // 格式化千位符
  Locked, // 锁定
  AddZero, // 加 0 补位
  Calculation // 加减乘除运算
};
