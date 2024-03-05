[bind]: https://github.com/biaov/mine-h5-ui/blob/main/packages/MeAPI/event.js

# API 方法

---

## 全局引入

::: CopyCode

```js
import { createApp } from 'vue'
import App from './App.vue'
import { MeAPI } from 'mine-h5-ui'

const app = createApp(App)
app.mount('#app')
// ctx 里插入 API
Object.keys(MeAPI).forEach(key => {
  app.config.globalProperties[`$${key}`] = (API as any)[key]
})
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 源码

- 源码地址：[API 方法](https://github.com/biaov/mine-h5-ui/blob/main/packages/MeAPI/function.js)
- 注意：该 API 方法基于 ES6+，如果只想使用单个方法，复制代码后自行使用 [babel](https://www.babeljs.cn/) 转换。

## API 方法名称

| 函数名         | 说明                | 版本   |
| -------------- | ------------------- | ------ |
| [Bind]         | 绑定事件            | v2.0.0 |
| Unbind         | 移除绑定事件        | v2.0.0 |
| FormatTime     | 时间转换            | v2.0.0 |
| IsType         | 变量类型判断        | v2.0.0 |
| DeepCopyRA     | 深拷贝变量-递归算法 | v2.0.0 |
| Throttle       | 节流                | v2.0.0 |
| Debounce       | 防抖                | v2.0.0 |
| FormatThousand | 格式化千位符        | v2.0.0 |
| Locked         | 锁定                | v2.0.0 |
| AddZero        | 加 0 补位           | v2.0.0 |
| Calculation    | 加减乘除运算        | v2.0.0 |
| IsLeapyear     | 判断是否是闰年      | v2.0.0 |
| GenerateRandom | 生成随机数          | v2.0.0 |
| Retarder       | 延迟器              | v2.0.0 |

## 代码演示

### 判断是否是闰年

```vue
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { $IsLeapyear } = getCurrentInstance().appContext.config.globalProperties
console.log($IsLeapyear(2020)) // 输出: true
console.log($IsLeapyear(2000)) // 输出: true
console.log($IsLeapyear(1900)) // 输出: false
</script>
```
