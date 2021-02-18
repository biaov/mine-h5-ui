# 正则验证

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

* 源码地址：[正则验证](https://github.com/biaov/MINE-H5-UI/blob/master/packages/MeAPI/validator.js)

## 正则内容

* 通过 this.$Validator 加上变量名称获取验证正则规则。

| 变量名称   | 说明                                                            | 变量名称    | 说明                         |
|------------|-----------------------------------------------------------------|-------------|------------------------------|
| validPhone | 验证-手机号码                                                   | validPwd    | 验证密码-6-12位数字+字母组合 |
| validEmail | 验证邮箱-只允许英文字母、数字、下划线、英文句号、以及中划线组成 | validIdcard | 验证身份证号                 |
| validImgs  | 验证图片格式                                                    | --          | --                           |

## 代码演示

### 验证-手机号码

```JavaScript
const valid = this.$Validator.validPhone; // 获取规则
console.log(valid); // /^1[3456789]\d{9}$/
console.log(valid.test(18888888888)); // true
console.log(valid.test(12888888888)); // false
```
