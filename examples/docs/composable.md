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

## useLocked 重复点击锁 `v2.11.0`

- useLocked 传入函数必须是一个异步函数
- 同步函数不用加锁

```js
import { useLocked } from 'mine-h5-ui'

const onClick = useLocked(async () => {
  // 业务操作
  // ...
})
```

## useId 随机 ID `v2.11.0`

- 可选参数进制

```ts
import { useId } from 'mine-h5-ui'

console.log(useId()) // 1726733454868gl3vkrbuf9
console.log(useId(16)) // 17267336100211ca549007f31
```

## useColorTransform 颜色转换 `v2.12.0`

- 颜色转换
- 第一个参数是需要转换的值，第二个参数是数组，由什么转化成什么

```ts
import { useColorTransform } from 'mine-h5-ui'

const rgb = useColorTransform('#ff6600', ['hex', 'rgb'])
console.log(rgb) // [255, 102, 0]
```

## useMoveHandle 移动操作处理 `v2.12.0`

```ts
import { useTemplateRef } from 'vue'
import { useMoveHandle } from 'mine-h5-ui'
const nodeRef = useTemplateRef('demo')

interface OptionEvent {
  x: number
  y: number
  type: string
}

const option = {
  start(e: OptionEvent) {
    console.log(e) // { x: 0, y: 0, type: 'touchstart' }
  },
  move(e: OptionEvent) {
    console.log(e) // { x: 0, y: 0, type: 'touchdown' }
  },
  end(e: OptionEvent) {
    console.log(e) // { x: 0, y: 0, type: 'touchend' }
  }
}

useMoveHandle(nodeRef.value, option)
```

## useSameTarget 相同的目标节点 `v2.12.0`

```ts
import { useSameTarget } from 'mine-h5-ui'

const { onClick, onMousedown, onMouseup } = useSameTarget((e: PointerEvent) => {
  console.log(e) // PointerEvent {isTrusted: true, _vts: 1733714310245, pointerId: 1, width: 1, height: 1, …}
})
```

## useCssVar 对象转 CSS 变量 `v2.12.0`

```ts
import { useCssVar } from 'mine-h5-ui'

console.log(useCssVar({ width: '100px' })) // { --width: '100px' }
console.log(useCssVar({ fontSize: '100px' })) // { --font-size: '100px' }
```

## useImgInfo 获取图片信息 `v2.15.0`

```ts
import { useImgInfo } from 'mine-h5-ui'

const { width, height } = useImgInfo('https://图片地址')
console.log(width, height) // 100 100
```
