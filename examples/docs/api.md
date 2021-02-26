[Bind]:https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/event.js

# API 方法

----

## 全局引入

:::demo

```JavaScript
import Vue from "vue";
import MINEH5UI from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/index.css";

Vue.use(MINEH5UI);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 源码

* 源码地址：[API 方法](https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/function.js)
* 注意：该 API 方法基于 ES6+，如果只想使用单个方法，复制代码后自行使用 [babel](https://www.babeljs.cn/) 转换。

## API 方法名称

| 函数名     | 说明                | 函数名         | 说明           |
|------------|---------------------|----------------|----------------|
| [Bind]     | 绑定事件            | IsLeapyear     | 判断是否是闰年 |
| FormatTime | 时间转换            | IsType         | 变量类型判断   |
| DeepCopyRA | 深拷贝变量-递归算法 | Throttle       | 节流           |
| Debounce   | 防抖                | FormatThousand | 格式化千位符   |
| Locked     | 锁定                | --             | --             |

## 代码演示

### 判断是否是闰年

```JavaScript
const IsLeapyear = this.$IsLeapyear; // 获取规则
console.log(IsLeapyear(2020)); // true
console.log(IsLeapyear(2000)); // true
console.log(IsLeapyear(1900)); // false
```
