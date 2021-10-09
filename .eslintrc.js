// 配置信息
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/essential", "airbnb-base", "plugin:prettier/recommended", "plugin:jest/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  settings: {},
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 禁止console
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true, // 允许短路逻辑
        allowTernary: true // 允许三目运算
      }
    ],
    "import/prefer-default-export": "off", // 如果只有一个值，要用 default 导出
    "import/no-unresolved": "off", // import识别路径，因为alias设置
    "import/extensions": "off", // 扩展简写
    "no-param-reassign": "off", // 函数参数修改
    "no-plusplus": "off", // 一元操作符
    "no-nested-ternary": "off", // 禁用嵌套的三元表达式
    "no-bitwise": "off", // 禁用按位运算符
    "no-multi-assign": "off", // 禁止连续赋值
    "vue/no-v-model-argument": "off", // v-model 带参数
    "vue/no-multiple-template-root": "off" // 根元素只有一个
  }
};
module.exports = config;
