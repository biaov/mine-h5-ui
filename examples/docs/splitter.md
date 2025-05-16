# Splitter 图片分割器 `v2.15.0`

---

## 按需引入

::: CopyCode

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { MeSplitter } from 'mine-h5-ui'
import 'mine-h5-ui/styles/MeSplitter.css'

createApp(App).use(MeSplitter).mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `url` 来设置组件的图片地址。

::: CopyCode

```html
<me-splitter url="https://dummyimage.com/400x400/f60" />
```

:::

### 开启动画

- 通过属性 `open-animation` 来设置组件的动画是否开启，默认为 `false`。

::: CopyCode

```html
<me-splitter url="https://dummyimage.com/400x400/f60" open-animation />
```

:::

### 自定义区域大小

- 通过属性 `width` 来设置容器的宽度，默认为 `100%`。
- 通过属性 `height` 来设置容器的高度，默认为 `auto`。

::: CopyCode

```html
<me-splitter url="https://dummyimage.com/400x400/f60" :width="300" :height="264" />
```

:::

### 自定义切割排列

- 通过属性 `gutter` 来设置切割排列，[行数, 列数]，默认为自适应，根据最小块为 60px 计算。

::: CopyCode

```html
<me-splitter url="https://dummyimage.com/400x400/f60" :gutter="[6, 6]" />
```

:::

### 自定义边框

- 通过属性 `lineColor` 来设置线条颜色，默认为 `#fff`。
- 通过属性 `lineWidth` 来设置线条宽度，等同于 `CanvasRenderingContext2D.lineWidth`，默认为 `1`。
- 通过属性 `minSize` 来设置碎片大小，如果设置属性 `gutter`, 则此属性不生效，默认为 `100`。

::: CopyCode

```html
<me-splitter url="https://dummyimage.com/400x400/f60" line-color="#f60" :min-size="200" :line-width="4" />
```

:::

## API

### 参数

| 参数           | 说明                   | 类型            | 可选值       | 默认值 | 版本    |
| -------------- | ---------------------- | --------------- | ------------ | ------ | ------- |
| url            | 图片地址               | string          | --           | --     | v2.15.0 |
| open-animation | 动画开启状态           | boolean         | true / false | false  | v2.15.0 |
| width          | 容器宽度               | string / number | --           | 100%   | v2.15.0 |
| height         | 容器高度               | string          | --           | --     | v2.15.0 |
| gutter         | 切割排列, [行数, 列数] | number[]        | --           | --     | v2.15.0 |
| lineColor      | 边框颜色               | string          | --           | #fff   | v2.15.0 |
| minSize        | 最小碎片尺寸           | number          | --           | 100    | v2.15.0 |
| lineWidth      | 边框大小               | number          | --           | 1      | v2.15.0 |

### 方法

| 方法名 | 说明           | 回调参数                | 版本    |
| ------ | -------------- | ----------------------- | ------- |
| load   | 数据加载完触发 | value: Base64DataItem[] | v2.15.0 |

```ts
interface Base64DataItem {
  base64: string
  animation: string
}
```
