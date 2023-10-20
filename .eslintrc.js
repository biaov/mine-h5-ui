/**
 * eslint-plugin-vue:https://eslint.vuejs.org/
 */

/**
 * 开发环境关闭，生产环境开启
 */
const developmentOff = process.env.NODE_ENV === 'development' ? 'off' : 'error'

/**
 * 配置信息
 */
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  globals: {
    NodeListOf: 'readonly',
    EventListenerOrEventListenerObject: 'readonly',
    NodeJS: 'readonly',
    defineSlots: 'readonly',
    defineOptions: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly'
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {},
  overrides: [
    {
      files: ['**/components/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'error'
      }
    },
    {
      files: ['./mobile/**/*.ts', './tests/**/*.ts'],
      rules: {
        /**
         * 禁止 console
         */
        'no-console': 'off'
      }
    },
    {
      files: ['**/*.vue', '**/types.ts'],
      rules: {
        /**
         * 禁止未使用的变量, ts 变量
         */
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    /**
     * 禁止未使用的变量
     */
    'no-unused-vars': developmentOff,

    /**
     * 禁止 console
     */
    'no-console': developmentOff,

    /**
     * 禁止未使用的表达式
     */
    'no-unused-expressions': [
      'error',
      {
        /**
         * 允许短路逻辑
         */
        allowShortCircuit: true,

        /**
         * 允许三目运算
         */
        allowTernary: true
      }
    ],

    /**
     * 如果只有一个值，要用 default 导出
     */
    'import/prefer-default-export': 'off',

    /**
     * import 识别路径，因为 alias 设置
     */
    'import/no-unresolved': 'off',

    /**
     * 扩展简写
     */
    'import/extensions': 'off',

    /**
     * 函数参数修改
     */
    'no-param-reassign': 'off',

    /**
     * 一元操作符
     */
    'no-plusplus': 'off',

    /**
     * 禁用嵌套的三元表达式
     */
    'no-nested-ternary': 'off',

    /**
     * 禁用按位运算符
     */
    'no-bitwise': 'off',

    /**
     * 禁止连续赋值
     */
    'no-multi-assign': 'off',

    /**
     * 禁止默认导出
     */
    'no-restricted-exports': 'off',

    /**
     * 禁止多个单词名称
     */
    'vue/multi-word-component-names': 'off'
  }
}

module.exports = config
