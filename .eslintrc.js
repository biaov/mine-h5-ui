// eslint-plugin-vue:https://eslint.vuejs.org/

const developmentOff = process.env.NODE_ENV === 'development' ? 'off' : 'error'
// 配置信息
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
    defineOptions: 'readonly'
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
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
      files: ['./mobile/**/*.ts'],
      rules: {
        'no-console': 'off' // 禁止 console
      }
    },
    {
      files: ['**/*.vue', '**/types.ts'],
      rules: {
        'no-unused-vars': 'off' // 禁止未使用的变量, ts 变量
      }
    }
  ],
  rules: {
    'no-unused-vars': developmentOff, // 禁止未使用的变量
    'no-console': developmentOff, // 禁止 console
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // 允许短路逻辑
        allowTernary: true // 允许三目运算
      }
    ],
    'import/prefer-default-export': 'off', // 如果只有一个值，要用 default 导出
    'import/no-unresolved': 'off', // import 识别路径，因为 alias 设置
    'import/extensions': 'off', // 扩展简写
    'no-param-reassign': 'off', // 函数参数修改
    'no-plusplus': 'off', // 一元操作符
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'no-bitwise': 'off', // 禁用按位运算符
    'no-multi-assign': 'off', // 禁止连续赋值
    'no-restricted-exports': 'off', // 禁止默认导出
    'vue/multi-word-component-names': 'off' // 禁止多个单词名称
  }
}

module.exports = config
