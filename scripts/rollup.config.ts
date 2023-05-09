import nodeResolve from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue' // 处理vue文件
import { resolve } from 'path'
// import { RollupOptions } from 'rollup'

const input = resolve(__dirname, '../packages') // 入口文件
const output = resolve(__dirname, '../dist/packages') // 输出文件

const config = [
  {
    input: `${input}/index.ts`,
    treeshake: true,
    external: ['vue'],
    plugins: [
      nodeResolve(),
      vue(),
      typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          compilerOptions: {
            removeComments: false
          },
          include: ['packages/**/*'],
          exclude: ['node_modules', 'examples', 'mobile', 'dist', 'tests', 'scripts']
        },
        abortOnError: false,
        clean: true
      })
    ],
    output: {
      dir: `${output}/es`,
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'packages'
    }
  }
]

export default config
