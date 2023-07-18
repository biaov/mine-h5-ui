module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  plugins: ['vue'],
  rules: {
    /**
     * 强制 generator 函数中 * 号周围使用一致的空格
     */
    'generator-star-spacing': 'off',
    /**
     * 不允许 debugger
     */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 关闭单双引号
     */
    quotes: 'off',
    /**
     * 使用未声明的变量
     */
    'no-undef': 'off',
    /**
     * 禁止 console
     */
    'no-console': 'off',
    /**
     * 要求或禁止文件末尾存在空行
     */
    'eol-last': 'off',
    /**
     * 强制在 function 的左括号之前使用一致的空格
     */
    'space-before-function-paren': 'off',
    /**
     * 要求或禁止使用分号代替 ASI
     */
    semi: 'off',
    /**
     * 要求使用 === 和 !==
     */
    eqeqeq: 'off',
    /**
     * 要求在同一个元素上不弄同时使用 v-if 和 v-for
     */
    'vue/no-use-v-if-with-v-for': 'off',
    /**
     * 禁止使用 new 以避免产生副作用
     */
    'no-new': 'off',
    /**
     * 禁止不必要的 Boolean 值转换
     */
    'no-extra-boolean-cast': 'off',
    /**
     * 类换行要空一行
     */
    'lines-between-class-members': 'off',
    /**
     * if 的 () 后必须接 {}
     */
    curly: 'off',
    /**
     * 缩进位数
     */
    indent: 'off',
    /**
     * 三目运算
     */
    'no-unneeded-ternary': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
