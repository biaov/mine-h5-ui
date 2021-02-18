# Password 密码输入框/短信输入框

----

## 按需引入

:::demo

```JavaScript
import Vue from "vue";
import { MePassword } from "mine-h5-ui";

Vue.use(MePassword);
```

:::

## 复制

* 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

* 通过 `v-model` 指令来设置输入框的值，一般配合数字键盘输入。

:::demo

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-password v-model="value" @on-focus="onFocus" @on-blur="onBlur"></me-password>
    <me-keyboard v-model="keyboardValue" @on-click="handleNum" @on-delete="onDelete" @on-complate="onComplate"></me-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "", // 当前输入框值
      keyboardValue: false // 数字键盘显示状态
    };
  },
  methods: {
    // 密码输入框聚焦
    onFocus() {
      this.keyboardValue = true;
    },
    // 密码输入框失焦
    onBlur() {
      this.keyboardValue = false;
    },
    // 点击密码输入框数字按钮
    handleNum(e) {
      this.value += String(e);
    },
    // 点击密码输入框删除按钮
    onDelete() {
      const { value } = this;
      // 判断是否为空
      if (!!value) {
        this.value = value
          .split("")
          .slice(0, -1)
          .join("");
      }
    },
    // 点击密码输入框完成按钮
    onComplate() {
      this.keyboardValue = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {

}
</style>
```

:::

### 选择主题样式

* 通过 `skin-type` 属性来设置输入框的主题样式，默认值为 white。

:::demo

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-password v-model="value" @on-focus="onFocus" @on-blur="onBlur" skin-type="dark"></me-password>
    <me-keyboard v-model="keyboardValue" @on-click="handleNum" @on-delete="onDelete" @on-complate="onComplate"></me-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "", // 当前输入框值
      keyboardValue: false // 数字键盘显示状态
    };
  },
  methods: {
    // 密码输入框聚焦
    onFocus() {
      this.keyboardValue = true;
    },
    // 密码输入框失焦
    onBlur() {
      this.keyboardValue = false;
    },
    // 点击密码输入框数字按钮
    handleNum(e) {
      this.value += String(e);
    },
    // 点击密码输入框删除按钮
    onDelete() {
      const { value } = this;
      // 判断是否为空
      if (!!value) {
        this.value = value
          .split("")
          .slice(0, -1)
          .join("");
      }
    },
    // 点击密码输入框完成按钮
    onComplate() {
      this.keyboardValue = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {

}
</style>
```

:::

### 自定义输入框数量

* 通过 `num` 属性来设置输入框的数量，默认值为 6。

:::demo

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-password v-model="value" @on-focus="onFocus" @on-blur="onBlur" :num="4"></me-password>
    <me-keyboard v-model="keyboardValue" @on-click="handleNum" @on-delete="onDelete" @on-complate="onComplate"></me-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "", // 当前输入框值
      keyboardValue: false // 数字键盘显示状态
    };
  },
  methods: {
    // 密码输入框聚焦
    onFocus() {
      this.keyboardValue = true;
    },
    // 密码输入框失焦
    onBlur() {
      this.keyboardValue = false;
    },
    // 点击密码输入框数字按钮
    handleNum(e) {
      this.value += String(e);
    },
    // 点击密码输入框删除按钮
    onDelete() {
      const { value } = this;
      // 判断是否为空
      if (!!value) {
        this.value = value
          .split("")
          .slice(0, -1)
          .join("");
      }
    },
    // 点击密码输入框完成按钮
    onComplate() {
      this.keyboardValue = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
  
}
</style>
```

:::

### 选择输入框模式

* 通过 `type` 属性来设置输入框的模式，默认值为 password。

:::demo

```HTML
<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-password v-model="value" @on-focus="onFocus" @on-blur="onBlur" type="number"></me-password>
    <me-keyboard v-model="keyboardValue" @on-click="handleNum" @on-delete="onDelete" @on-complate="onComplate"></me-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "", // 当前输入框值
      keyboardValue: false // 数字键盘显示状态
    };
  },
  methods: {
    // 密码输入框聚焦
    onFocus() {
      this.keyboardValue = true;
    },
    // 密码输入框失焦
    onBlur() {
      this.keyboardValue = false;
    },
    // 点击密码输入框数字按钮
    handleNum(e) {
      this.value += String(e);
    },
    // 点击密码输入框删除按钮
    onDelete() {
      const { value } = this;
      // 判断是否为空
      if (!!value) {
        this.value = value
          .split("")
          .slice(0, -1)
          .join("");
      }
    },
    // 点击密码输入框完成按钮
    onComplate() {
      this.keyboardValue = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
  
}
</style>
```

:::

## API

### 参数

| 参数      | 说明               | 类型   | 可选值            | 默认值   |
|-----------|--------------------|--------|-------------------|----------|
| v-model   | 双向绑定输入框的值 | String | --                | --       |
| type      | 输入框模式         | String | password / number | password |
| num       | 自定义输入框数量   | Number | --                | 6        |
| skin-type | 主题样式           | String | white / dark      | white    |

### 方法

| 方法名   | 说明                       | 回调参数 |
|----------|----------------------------|----------|
| on-focus | 输入框聚焦时触发的事件     | --       |
| on-blur  | 输入框失去焦点时触发的事件 | --       |
