# 正则验证

---

## 按需引入

::: CopyCode

```JavaScript
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

- 源码地址：[正则验证](https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/validator.js)

## 正则内容

- 通过 this.$Validator 加上变量名称获取验证正则规则。

| 变量名称           | 说明                                                            | 版本 |
| ------------------ | --------------------------------------------------------------- | ---- |
| validPhone         | 验证-手机号码                                                   | --   |
| validPwd           | 验证密码-6-12 位数字+字母组合                                   |
| validEmail         | 验证邮箱-只允许英文字母、数字、下划线、英文句号、以及中划线组成 | --   |
| validIdcard        | 验证身份证号                                                    | --   |
| validImgs          | 验证图片格式                                                    | --   |
| validThousand      | 验证整数千位符                                                  | --   |
| validThousandFloat | 验证浮点数千位符                                                | --   |

## 代码演示

### 验证-手机号码

::: CopyCode

```Vue
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { $Validator } = getCurrentInstance().appContext.config.globalProperties
const valid = $Validator.validPhone // 获取规则
console.log(valid) // /^1[3456789]\d{9}$/
console.log(valid.test(18888888888)) // true
console.log(valid.test(12888888888)) // false
</script>
```

:::
