import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import pkg from '../package.json'
import { eslintConfig } from '../config/plugins'

const { dirname } = import.meta

/**
 * 入口文件
 */
const input = resolve(dirname, '../packages')

/**
 * 输出文件
 */
const outDir = resolve(dirname, '../dist/packages/es')

/**
 * 配置信息
 */
const config: UserConfig = {
  publicDir: false,
  plugins: [
    eslint(eslintConfig),
    vue(),
    dts({
      entryRoot: input,
      outDir,
      copyDtsFiles: true,
      staticImport: true,
      insertTypesEntry: false,
      cleanVueFileName: false,
      compilerOptions: {
        removeComments: false
      },
      include: ['packages/**/*'],
      exclude: ['node_modules', 'examples', 'mobile', 'dist', 'tests', 'scripts', 'styles']
    })
  ],
  build: {
    outDir,
    /**
     * 多页面
     */
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'packages',
        entryFileNames: '[name].js'
      },
      plugins: [
        {
          name: 'rollup-plugin-banner',
          banner: `/*!
          * ${pkg.name} v${pkg.version}
          * Copyright (c) ${new Date().getFullYear()} ${pkg.author.name}
          * @license MIT
          */`
        }
      ]
    },
    lib: {
      entry: `${input}/index.ts`,
      formats: ['es']
    }
  }
}

export default defineConfig(config)
