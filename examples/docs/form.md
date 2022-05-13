# From 表单

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeForm } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeForm.css'

const app = createApp(App)
app.use(MeForm)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `model` 属性来设置需要校验的内容，通过 `rules` 属性来设置匹配的规则，[rules 详情](#rules)。
- 注意：只有当你同时设置 model 和 rules 属性时，校验才能生效。

::: CopyCode

```Vue
<template>
  <me-form :model="form" :rules="rules" @submit="onSubmit">
    <me-input v-model="form.username" placeholder="请输入用户名" label-width="70px" label="用户名"></me-input>
    <me-input v-model="form.password" :password="true" placeholder="请输入6-12位数字+字母组合" label-width="70px" label="密码"></me-input>
    <me-input v-model="form.sms" placeholder="请输入短信验证码" sms-msg="短信验证码" :sms-is="false"></me-input>
    <me-button type="primary" native-type="submit" width="100%">提交</me-button>
  </me-form>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { $Validator } = getCurrentInstance().appContext.config.globalProperties
// 表单数据
const form = $ref({
  username: '', // 用户名
  password: '', // 密码
  sms: '' // 短信验证码
})
// 规则
const rules = Object.freeze([
  {
    type: 'username',
    required: true,
    message: '用户名不能为空'
  },
  {
    type: 'password',
    pattern: $Validator.validPwd,
    message: '密码必须为6-12位数字+字母组合'
  },
  {
    type: 'sms',
    validator: value => /^\d{4}$/.test(value),
    message: '短信验证码只能是4位纯数字'
  }
])
// 点击提交按钮
const onSubmit = ({ valid, message, value }) => {
  // 判断是否通过校验
  if (valid) {
    console.log(value) // 通过校验的值
  }
}
</script>
```

:::

## API

### 参数

| 参数  | 说明                                         | 类型   | 可选值 | 默认值 | 版本 |
| ----- | -------------------------------------------- | ------ | ------ | ------ | ---- |
| model | 需要校验的表单对象                           | Object | --     | {}     | --   |
| rules | 校验规则，为对象数组，[对象属性详情](#rules) | Array  | --     | []     | --   |

<h3 id="rules">rules</h3>

| 参数      | 说明                                                      | 类型                        | 可选值       | 默认值 | 版本 |
| --------- | --------------------------------------------------------- | --------------------------- | ------------ | ------ | ---- |
| type      | 需要校验的属性名，注意：要和 model 里的 form 表单保持一致 | string                      | --           | --     | --   |
| required  | 是否必须                                                  | boolean                     | true / false | false  | --   |
| message   | 错误提示内容，如果不传或者传空则不弹出提示信息框          | string                      | --           | --     | --   |
| pattern   | 通过正则表达式进行校验                                    | RegExp                      | --           | --     | --   |
| validator | 通过函数进行校验，返回 boolean 值表示是否通过             | Function : value => boolean | --           | --     | --   |

### 方法

| 方法名 | 说明                                                                           | 回调参数                         | 版本  |
| ------ | ------------------------------------------------------------------------------ | -------------------------------- | ----- |
| submit | 表单提交时触发的事件，注意：只有表单里的按钮原始类型设置为 submit 时，才起作用 | Object:[回调数据](#callbackData) | 2.3.5 |

<h3 id="callbackData">Object : 回调数据</h3>

| 参数    | 说明                                     | 类型    | 可选值       | 默认值 | 版本 |
| ------- | ---------------------------------------- | ------- | ------------ | ------ | ---- |
| valid   | 校验状态，是否全部通过校验               | boolean | true / false | --     | --   |
| type    | 未通过的属性名，如果全部通过则为空       | string  | --           | --     | --   |
| value   | 需要校验的表单数据                       | Object  | --           | --     | --   |
| message | 返回规则里的 message，如果全部通过则为空 | string  | --           | --     | --   |
