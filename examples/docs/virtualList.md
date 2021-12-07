# MeVirtualList 虚拟列表

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import { MeVirtualList } from "mine-h5-ui";
import "mine-h5-ui/lib/theme-default/MeVirtualList.css";

const app = createApp(App);
app.use(MeVirtualList);
app.mount("#app");
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `list` 来设置虚拟列表的数据。
- 通过属性 `height` 来设置虚拟列表的高度。
- 通过属性 `itemHeight` 来设置虚拟列表列表项的固定高度。

::: CopyCode

```Vue
<template>
  <!-- 演示 demo -->
  <div class="m-demo">
    <me-virtual-list height="300px" :list="listData" :itemHeight="50">
      <template #default="{item}">
        <div class="item">
          <p><span><template v-text="`#${item.virtualId}.`"></template></span> <template v-text="item.text"></template></p>
        </div>
      </template>
    </me-virtual-list>
  </div>
</template>
<script>
import { Random } from "mockjs";

export default {
  data() {
    return {
      // 列表数据
      listData: Array.from({ length: 100 }, () => ({ text: Random.cword(6, 14) }))
    };
  }
};
</script>
<style lang="less" scoped>
.m-demo {
  .item {
    width: 100%;
    height: 50px;
    border-bottom: 1px dotted #ececec;
    p {
      width: 100%;
      height: 100%;
      line-height: 48px;
      padding: 0 15px;
      background: #fff;
      color: #949494;
      font-size: 14px;
      span {
        color: #f56c6c;
      }
    }
  }
}
</style>
```

:::

### 加载更多

- 通过自定义事件 `on-load-more` 来设置虚拟列表的数据加载更多。

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-virtual-list height="300px" :list="listData" :itemHeight="50" @on-load-more="onLoadMore(list)">
      <template #default="{item}">
        <div class="item">
          <p><span><template v-text="`#${item.virtualId}.`"></template></span> <template v-text="item.text"></template></p>
        </div>
      </template>
      <template #more>
        <div class="u-more" v-text="loadMoreText[list.loadStatus]"></div>
      </template>
    </me-virtual-list>
  </div>
</template>
<script>
import { Random } from "mockjs";

export default {
  data() {
    const listData = this.createArr();
    return {
      listData, // 列表数据
      // 状态文本
      loadMoreText: {
        nomore: "没有更多数据了",
        more: "加载更多",
        loading: "正在加载中..."
      }
    };
  },
  methods: {
    // 生成数组
    createArr(min = 6, max = 14) {
      return Array.from({ length: 100 }, () => ({ text: Random.cword(min, max) }));
    },
    // 加载更多
    onLoadMore(item) {
      if (item.loadStatus !== "more") return;
      item.loadStatus = "loading";
      setTimeout(() => {
        item.list.push(...this.createArr(item.list.length));
        item.loadStatus = "nomore";
      }, 1500);
    }
  }
};
</script>
<style lang="less" scoped>
.m-demo {
  .item {
    width: 100%;
    height: 50px;
    border-bottom: 1px dotted #ececec;
    p {
      width: 100%;
      height: 100%;
      line-height: 48px;
      padding: 0 15px;
      background: #fff;
      color: #949494;
      font-size: 14px;
      span {
        color: #f56c6c;
      }
    }
  }
  .u-more {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #949494;
    font-size: 12px;
  }
}
</style>
```

:::

### 自适应高度

- 通过属性 `item-height` 的值为 0 时表示自适应高度。

::: CopyCode

```Vue
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-virtual-list height="300px" :list="listData" @on-load-more="onLoadMore(list)">
      <template #default="{item}">
        <div class="item">
          <p><span><template v-text="`#${item.virtualId}.`"></template></span> <template v-text="item.text"></template></p>
        </div>
      </template>
      <template #more>
        <div class="u-more" v-text="loadMoreText[list.loadStatus]"></div>
      </template>
    </me-virtual-list>
  </div>
</template>
<script>
import { Random } from "mockjs";

export default {
  data() {
    return {
      listData: Array.from({ length: 100 }, () => ({ text: Random.cword(14, 50) })) // 列表数据
    };
  }
};
</script>
<style lang="less" scoped>
.m-demo {
  .item {
    width: 100%;
    min-height: 50px;
    border-bottom: 1px dotted #ececec;
    p {
      width: 100%;
      height: 100%;
      line-height: 30px;
      padding: 0 15px;
      background: #fff;
      color: #949494;
      font-size: 14px;
      span {
        color: #f56c6c;
      }
    }
  }
}
</style>
```

:::

## API

### 参数

| 参数        | 说明               | 类型   | 可选值 | 默认值 |
| ----------- | ------------------ | ------ | ------ | ------ |
| list        | 列表数据           | Array  | --     | []     |
| interval    | 节流时间           | Number | --     | 100    |
| height      | 虚拟列表高度       | Array  | --     | 100%   |
| item-height | 固定选项高度       | Number | --     | 0      |
| distance    | 距离底部的距离     | Number | --     | 50     |
| screen      | 前后各渲染几屏     | Array  | --     | [1, 1] |
| remain      | 每屏可见的数据条数 | Array  | Number | 8      |

### 方法

| 方法名       | 说明                 | 回调参数 |
| ------------ | -------------------- | -------- |
| on-load-more | 当需要加载更多时触发 | --       |
