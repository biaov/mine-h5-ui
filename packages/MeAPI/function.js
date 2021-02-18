/**
 * 变量类型判断
 * @param {String} type - 需要判断的类型
 * @param {Any} value - 需要判断的值
 * @returns {Boolean} - 是否该类型
 */
const IsType = (type, value) =>
  Object.prototype.toString.call(value).slice(8, -1) === type;

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param {Any} arg - 需要深拷贝的变量
 * @returns {Any} - 拷贝完成的值
 */
const DeepCopyRA = arg => {
  const newValue = IsType("Object", arg) // 判断是否是对象
    ? {}
    : IsType("Array", arg) // 判断是否是数组
    ? []
    : IsType("Date", arg) // 判断是否是日期对象
    ? new arg.constructor(+arg)
    : IsType("RegExp", arg) || IsType("Error", arg) // 判断是否是正则对象或错误对象
    ? new arg.constructor(arg)
    : arg;
  // 判断是否是数组或对象
  if (IsType("Object", arg) || IsType("Array", arg)) {
    // 循环遍历
    for (const key in arg) {
      // 防止原型链的值
      Object.prototype.hasOwnProperty.call(arg, key) &&
        (newValue[key] = DeepCopyRA(arg[key]));
    }
  }
  return newValue;
};

/**
 * 判断是否是闰年
 * @param {Number} year - 能被4整除,不能被100整除,能被400整除;优先级:400>100>4
 * @returns {Boolean} - true:是闰年,false:不是闰年
 */
const IsLeapyear = num => {
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
const FormateTime = (arg = new Date()) => {
  // 非空判断
  if (arg.trim() === "") throw new Error(`${arg} is not null`);
  const str =
    IsType("Number", arg) && String(arg).length < 13 ? arg * 1000 : arg; // 转化成ms
  IsType("string", arg) && str.replace(/-/g, "/"); // 为了支持 IOS
  const O = new Date(str); // 时间 Date 对象
  const doubleDigit = num => (num < 10 ? "0" + num : String(num)); // 加 0
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
const CountDown = (num, format = "hh:mm:ss") => {
  if (!IsType("Number", num)) throw new Error(`${num} is not number`); // 是否是数字
  if (!"DD:hh:mm:ss:ms".includes(format)) {
    throw new Error(`${format} form error`); // 格式是否正确
  }
  // 假设格式都存在
  const DD = parseInt(num / (1000 * 60 * 60 * 24)); // 天
  let hh = parseInt((num / (1000 * 60 * 60)) % 24); // 时
  let mm = parseInt((num / (1000 * 60)) % 60); // 分
  let ss = parseInt((num / 1000) % 60); // 秒
  let ms = parseInt(num % 1000); // 毫秒
  const formatData = {}; // 需要返回的格式化数据
  const doubleDigit = num => (num < 10 ? `0${num}` : String(num)); // 加 0
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
 * @param {Function} fn - 回调业务处理函数
 * @param {Number} [time=1000] - 定时器时间
 */
const Throttle = (fn, time = 1000) => {
  let timer = null; // 定时器
  return e => {
    !timer &&
      (timer = setTimeout(() => {
        fn(); // 第一次之后，延迟时间到达就会触发一次，然后再从新开始
        timer = null; // 清理定时器
      }, time));
  };
};
/**
 * 防抖
 * @param {Function} fn - 回调业务处理函数
 * @param {Number} [time=300] - 定时器时间
 */
const Debounce = (fn, time = 300) => {
  let timer = null; // 定时器
  return e => {
    if (timer !== undefined) clearTimeout(timer); // 清理之前的操作
    timer = setTimeout(() => {
      fn(e); // 最后一次触发，延迟时间过后执行业务处理函数
    }, time);
  };
};
export default {
  IsType, // 变量类型判断
  DeepCopyRA, // 深拷贝变量-递归算法(recursive algorithm)
  IsLeapyear, // 判断是否是闰年
  FormateTime, // 时间转换
  CountDown, // 倒计时
  Throttle, // 节流
  Debounce // 防抖
};
