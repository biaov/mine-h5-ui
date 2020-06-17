/**
 * 判断是否是闰年
 * @param {Number} year - 能被4整除,不能被100整除,能被400整除;优先级:400>100>4
 * @returns {Boolean} - true:是闰年,false:不是闰年
 */
const IsLeapyear = num => {
  // 判断是否是数值
  if (Object.prototype.toString.call(num) !== "[object Number]") {
    throw new Error(`${num} is not number`);
  }
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};

/**
 * 时间转换
 * @param {String|Number|Date} arg - 需要转换的时间
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
const FormateTime = arg => {
  if (arg === undefined) {
    throw new Error(
      "FormateTime function must pass a time parameter to be converted. The parameter types can be String, Number, or Date"
    );
  }
  const datatype = Object.prototype.toString.call(arg); // 参数数据类型
  const str =
    datatype === "[object Number]" && String(datatype).length < 13
      ? datatype * 1000
      : datatype; // 转化成ms
  datatype === "[object String]" && str.replace(/-/g, "/"); // 为了支持 IOS
  const O = new Date(str); // 时间 Date 对象
  const doubleDigit = num => (num < 10 ? "0" + num : String(num)); // 加 0
  /**
   * 星期转换
   * @param {Number} num - getDay值
   * @returns {String} - 中文：一、二、三、四、五、六、日
   */
  // 星期转换
  const getWeek = num => {
    if (Object.prototype.toString.call(num) !== "[object Number]") {
      throw new Error(`${num} is not a number!`);
    }
    switch (num) {
      case 0:
        return "日";
      case 1:
        return "一";
      case 2:
        return "二";
      case 3:
        return "三";
      case 4:
        return "四";
      case 5:
        return "五";
      case 6:
        return "六";
    }
  };
  // 年、月、日、星、期、时、分、秒
  const [Y, M, D, w, h, m, s] = [
    String(O.getFullYear()),
    doubleDigit(O.getMonth() + 1),
    doubleDigit(O.getDate()),
    `星期${getWeek(O.getDay())}`,
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
 * 变量类型判断
 * @param {String} type - 需要判断的类型
 * @param {Any} value - 需要判断的值
 * @returns {Boolean} - 是否该类型
 */
const IsType = (type, value) =>
  Object.prototype.toString.call(value) === `[object ${type}]`;

/**
 * 深拷贝变量-递归算法(recursive algorithm)
 * 支持 String,Number,Boolean,null,undefined,Object,Array,Date,RegExp,Error 类型
 * @param {Any} arg - 需要深拷贝的变量
 * @returns {Any} - 拷贝完成的值
 */
const DeepCopyRA = arg => {
  const newValue = isType("Object", arg) // 判断是否是对象
    ? {}
    : isType("Array", arg) // 判断是否是数组
      ? []
      : isType("Date", arg) // 判断是否是日期对象
        ? new arg.constructor(+arg)
        : isType("RegExp", arg) || isType("Error", arg) // 判断是否是正则对象或错误对象
          ? new arg.constructor(arg)
          : arg;
  // 判断是否是数组或对象
  if (isType("Object", arg) || isType("Array", arg)) {
    // 循环遍历
    for (const key in arg) {
      // 防止原型链的值
      Object.prototype.hasOwnProperty.call(arg, key) &&
        (newValue[key] = DeepCopy(arg[key]));
    }
  }
  return newValue;
};

export default {
  IsLeapyear, // 判断是否是闰年
  FormateTime, // 时间转换
  IsType, // 变量类型判断
  DeepCopyRA // 深拷贝变量-递归算法(recursive algorithm)
};
