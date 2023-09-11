# 组合式 API

---

> 版本：v2.4.0

## useValidator 校验器

```js
import { useValidator } from 'mine-h5-ui'

const {
  phone, // 校验手机号码
  password, // 校验密码6-12位数字+字母组合
  email, // 只允许英文字母、数字、下划线、英文句号、以及中划线组成
  idCard, // 校验身份证号
  imgs, // 校验图片格式
  thousand, // 千位符
  thousandFloat // 小数千位符
} = useValidator()
// phone.test('') // false
```

## useBind 事件绑定

```js
import { useBind } from 'mine-h5-ui'

const { addBind, removeBind } = useBind()
const fn = () => {}
addBind(document, 'click', fn)
removeBind(document, 'click', fn)
```

## useUtils 工具函数

```js
import { useUtils } from 'mine-h5-ui'

const {
  varType, // 变量类型判断
  cloneDeep, // 深拷贝变量-递归算法(recursive algorithm)
  isLeapyear, // 判断是否是闰年
  formatTime, // 时间转换
  countDown, // 倒计时
  throttle, // 节流
  debounce, // 防抖
  formatThousand, // 格式化千位符
  locked, // 锁定
  addZero, // 加 0 补位
  calculation, // 加减乘除运算
  generateRandom, // 生成随机数
  retarder // 延迟器
} = useUtils()
```

## useVisible 显示隐藏

```js
import { useVisible } from 'mine-h5-ui'

const { visible, setVisible } = useVisible()
```
