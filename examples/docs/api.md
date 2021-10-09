[Bind]: https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/event.js
[Unbind]: https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/event.js

# API 方法

---

## 全局引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeAPI } from "mine-h5-ui";

const app = createApp(App);
app.mount("#app");
// ctx 里插入 API
Object.keys(MeAPI).forEach(key => {
  app.config.globalProperties[`$${key}`] = (API as any)[key];
});
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 源码

- 源码地址：[API 方法](https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/function.js)
- 注意：该 API 方法基于 ES6+，如果只想使用单个方法，复制代码后自行使用 [babel](https://www.babeljs.cn/) 转换。

## API 方法名称

| 函数名      | 说明                | 函数名         | 说明           |
|-------------|---------------------|----------------|----------------|
| [Bind]      | 绑定事件            | Unbind         | 移除绑定事件   |
| FormatTime  | 时间转换            | IsType         | 变量类型判断   |
| DeepCopyRA  | 深拷贝变量-递归算法 | Throttle       | 节流           |
| Debounce    | 防抖                | FormatThousand | 格式化千位符   |
| Locked      | 锁定                | AddZero        | 加 0 补位      |
| Calculation | 加减乘除运算        | IsLeapyear     | 判断是否是闰年 |

## 代码演示

### 判断是否是闰年

```JavaScript
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const { $IsLeapyear } = getCurrentInstance().appContext.config.globalProperties;
    console.log($IsLeapyear(2020)); // true
    console.log($IsLeapyear(2000)); // true
    console.log($IsLeapyear(1900)); // false
    return {};
  }
});
```

:::
