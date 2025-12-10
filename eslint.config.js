import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

const developmentOff = process.env.NODE_ENV === 'development' ? 'off' : 'error'

export default [
  {
    ignores: ['node_modules', 'dist', '**/fonts/**']
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: {
      prettier
    }
  },
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        NodeListOf: 'readonly',
        EventListenerOrEventListenerObject: 'readonly',
        NodeJS: 'readonly',
        defineSlots: 'readonly',
        defineOptions: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly'
      },
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    rules: {
      /**
       * 禁止未使用的变量
       */
      'no-unused-vars': 'off',
      /**
       * 禁止未使用的变量
       */
      '@typescript-eslint/no-unused-vars': developmentOff,

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
      'vue/multi-word-component-names': 'off',

      /**
       * 禁止包 dependencies
       */
      'import/no-extraneous-dependencies': 'off',

      /**
       * 属性名
       */
      'vue/valid-attribute-name': 'off',
      /**
       * 短路逻辑运算
       */
      '@typescript-eslint/no-unused-expressions': 'off',
      /**
       * 允许不是具体的函数内容
       */
      '@typescript-eslint/no-unsafe-function-type': 'off',
      /**
       * 不允许命名空间
       */
      '@typescript-eslint/no-namespace': 'off',
      /**
       * 不能为空对象
       */
      '@typescript-eslint/no-empty-object-type': 'off',
      /**
       * 强类型
       */
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      /**
       * 不必要的和可能令人困惑的 <template>
       */
      'vue/no-lone-template': 'off',
      /**
       * 禁止使用 v-html
       */
      'vue/no-v-html': 'off',
      /**
       * 属性连字符
       */
      'vue/attribute-hyphenation': [
        'error',
        'always',
        {
          ignoreTags: ['slot']
        }
      ]
    }
  },
  {
    files: ['**/components/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  },
  {
    files: ['./mobile/**/*.ts', './tests/**/*.ts'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['**/types.ts', '**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['mobile/**/*.ts', 'mobile/**/*.vue', 'tests/**/*.ts'],
    rules: {
      'no-console': 'off'
    }
  }
]
