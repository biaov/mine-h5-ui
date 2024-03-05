# 组合式 API `v2.4.0`

## useValidator 校验器

```js
import { useValidator } from 'mine-h5-ui'

const {
  /**
   * 校验手机号码
   */
  phone,
  /**
   * 校验密码 6 - 12 位数字 + 字母组合
   */
  password,
  /**
   * 只允许英文字母、数字、下划线、英文句号、以及中划线组成
   */
  email,
  /**
   * 校验身份证号
   */
  idCard,
  /**
   * 校验图片格式
   */
  imgs,
  /**
   * 千位符
   */
  thousand,
  /**
   * 小数千位符
   */
  thousandFloat
} = useValidator()
// phone.test('') // 输出: false
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
  /**
   * 变量类型判断
   */
  varType,
  /**
   * 深拷贝变量-递归算法(recursive algorithm)
   */
  cloneDeep,
  /**
   * 判断是否是闰年
   */
  isLeapyear,
  /**
   * 时间转换
   */
  formatTime,
  /**
   * 倒计时
   */
  countDown,
  /**
   * 节流
   */
  throttle,
  /**
   * 防抖
   */
  debounce,
  /**
   * 格式化千位符
   */
  formatThousand,
  /**
   * 锁定
   */
  locked,
  /**
   * 加 0 补位
   */
  addZero,
  /**
   * 加减乘除运算
   */
  calculation,
  /**
   * 生成随机数
   */
  generateRandom,
  /**
   * 延迟器
   */
  retarder
} = useUtils()
```

## useVisible 显示隐藏

```js
import { useVisible } from 'mine-h5-ui'

const [visible, setVisible] = useVisible()
```

## useStorage 本地存储 `v2.7.3`

```js
import { useStorage } from 'mine-h5-ui'

const { setStorage, getStorage, removeStorage } = useStorage()

// setStorage('name', 'mine-ui') // 存储
// getStorage('name') // 获取
// removeStorage('name') // 移除
```

## useScroll 本地存储 `v2.8.0`

```js
import { useScroll } from 'mine-h5-ui'

const { scrollTo } = useScroll()

scrollTo(document.body, 0) // 返回顶部

/**
 * 自定义节点
 */
const customDomNode = document.querySelector('.customDomNode')
scrollTo(customDomNode, 0) // 滚动到指定位置
```
