// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 关闭单双引号
    quotes: "off",
    // 使用未声明的变量
    "no-undef": "off",
    // 禁止console
    "no-console": "off",
    // 要求或禁止文件末尾存在空行
    "eol-last": "off",
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": "off",
    // 要求或禁止使用分号代替 ASI
    semi: "off",
    // 要求使用 === 和 !==
    eqeqeq: "off",
    // 要求在同一个元素上不弄同时使用v-if和v-for
    "vue/no-use-v-if-with-v-for": "off",
    // 禁止使用 new 以避免产生副作用
    "no-new": "off",
    // 禁止不必要的Boolean值转换
    "no-extra-boolean-cast": "off"
  }
};
