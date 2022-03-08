var Validator = {
    validPhone: /^1[3456789]\d{9}$/,
    validPwd: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
    validEmail: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
    validIdcard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
    validImgs: /\.(svg|gif|png|jpe?g)$/i,
    validThousand: /(\d)(?=(\d{3})+$)/g,
    validThousandFloat: /(\d)(?=(\d{3})+\.)/g
};

const { validThousand, validThousandFloat } = Validator;
const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const DeepCopyRA = (arg) => {
    const newValue = IsType('Object', arg)
        ? {}
        : IsType('Array', arg)
            ? []
            : IsType('Date', arg)
                ? new arg.constructor(+arg)
                : IsType('RegExp', arg) || IsType('Error', arg)
                    ? new arg.constructor(arg)
                    : arg;
    if (IsType('Object', arg) || IsType('Array', arg)) {
        Object.keys(arg).forEach(key => {
            newValue[key] = DeepCopyRA(arg[key]);
        });
    }
    return newValue;
};
const IsLeapyear = (num) => {
    if (!IsType('Number', num)) {
        throw new Error(`${num} is not number`);
    }
    return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};
const FormatTime = (arg = new Date()) => {
    if (arg.trim() === '')
        throw new Error(`${arg} is not null`);
    const str = IsType('Number', arg) && String(arg).length < 13 ? arg * 1000 : arg;
    IsType('string', arg) && str.replace(/-/g, '/');
    const O = new Date(str);
    const doubleDigit = (num) => (num < 10 ? `0${num}` : String(num));
    const weeks = ['日', '一', '二', '三', '四', '五', '六'];
    const [Y, M, D, w, h, m, s] = [
        String(O.getFullYear()),
        doubleDigit(O.getMonth() + 1),
        doubleDigit(O.getDate()),
        `星期${weeks[O.getDay()]}`,
        doubleDigit(O.getHours()),
        doubleDigit(O.getMinutes()),
        doubleDigit(O.getSeconds())
    ];
    const date = `${Y}-${M}-${D}`;
    const time = `${h}:${m}:${s}`;
    const datetime = `${date} ${time}`;
    return { Y, M, D, w, h, m, s, date, time, datetime };
};
const CountDown = (num, format = 'hh:mm:ss') => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    if (!'DD:hh:mm:ss:ms'.includes(format)) {
        throw new Error(`${format} form error`);
    }
    const DD = ~~(num / (1000 * 60 * 60 * 24));
    let hh = ~~((num / (1000 * 60 * 60)) % 24);
    let mm = ~~((num / (1000 * 60)) % 60);
    let ss = ~~((num / 1000) % 60);
    let ms = ~~(num % 1000);
    const formatData = {};
    const doubleDigit = (digit) => (digit < 10 ? `0${digit}` : String(digit));
    format.includes('DD') ? (formatData.DD = doubleDigit(DD)) : (hh += DD * 24);
    format.includes('hh') ? (formatData.hh = doubleDigit(hh)) : (mm += hh * 60);
    format.includes('mm') ? (formatData.mm = doubleDigit(mm)) : (ss += mm * 60);
    format.includes('ss') ? (formatData.ss = doubleDigit(ss)) : (ms += ss * 1000);
    if (format.includes('ms')) {
        const curMs = format.includes('mm') ? doubleDigit(ms) : num;
        formatData.ms = +String(curMs).slice(0, 2);
    }
    return formatData;
};
const Throttle = (fn, time = 1000) => {
    let timer = null;
    return (e) => {
        !timer &&
            (timer = setTimeout(() => {
                fn(e);
                timer = null;
            }, time));
    };
};
const Debounce = (fn, time = 300) => {
    let timer;
    return (e) => {
        if (timer !== undefined)
            clearTimeout(timer);
        timer = setTimeout(() => {
            fn(e);
        }, time);
    };
};
const FormatThousand = (num) => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    const numStr = String(num);
    return numStr.replace(numStr.includes('.') ? validThousandFloat : validThousand, '$1,');
};
const Locked = (fn, time = 5000) => {
    let timer = null;
    const isLocked = { value: false };
    const isLockedProxy = new Proxy(isLocked, {
        get(obj, prop) {
            return obj[prop];
        },
        set(obj, prop, value) {
            obj[prop] = value;
            if (value) {
                timer = setTimeout(() => {
                    obj[prop] = false;
                }, time);
            }
            else {
                clearInterval(timer);
            }
            return true;
        }
    });
    return (e) => {
        !isLockedProxy.value &&
            fn(e, (value) => {
                isLockedProxy.value = value;
            });
    };
};
const AddZero = (str, float1, float2) => str + new Array(Math.abs(float1 - float2) + 1).join('0');
const Calculation = (num1, num2) => {
    if (!IsType('Number', num1) || !IsType('Number', num2)) {
        throw new Error(`${num1} or ${num2} is not number`);
    }
    const list1 = String(num1).split('.');
    const list2 = String(num2).split('.');
    const float1 = list1[1]?.length ?? 0;
    const float2 = list2[1]?.length ?? 0;
    float1 < float2 && (list1[1] = AddZero(list1[1], float1, float2));
    float1 > float2 && (list2[1] = AddZero(list2[1], float1, float2));
    const newNum1 = +list1.join('');
    const newNum2 = +list2.join('');
    const maxFloat = Math.max(float1, float2);
    const add = () => (newNum1 + newNum2) / 10 ** maxFloat;
    const subtract = () => (newNum1 - newNum2) / 10 ** maxFloat;
    const multiply = () => (newNum1 * newNum2) / 10 ** (maxFloat * 2);
    const divide = () => newNum1 / newNum2;
    return { add, subtract, multiply, divide };
};
const GenerateRandom = () => +new Date() + String.prototype.slice.call(Math.random(), 2, 7);
const Retarder = (time = 500) => new Promise(resolve => {
    setTimeout(() => {
        resolve(true);
    }, time);
});
var API = {
    IsType,
    DeepCopyRA,
    IsLeapyear,
    FormatTime,
    CountDown,
    Throttle,
    Debounce,
    FormatThousand,
    Locked,
    AddZero,
    Calculation,
    GenerateRandom,
    Retarder
};

const Bind = (dom, event, fn, flag = false) => {
    dom.addEventListener(event, fn, flag);
    return dom;
};
const Unbind = (dom, event, fn, flag = false) => {
    dom.removeEventListener(event, fn, flag);
    return dom;
};
var BindEvent = {
    Bind,
    Unbind
};

var index = { ...API, ...BindEvent, Validator };

export { index as default };
