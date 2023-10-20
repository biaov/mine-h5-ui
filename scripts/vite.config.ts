import { defineConfig, UserConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import license from 'rollup-plugin-license'
import pkg from '../package.json'
import { eslintConfig } from '../config/plugins'

/**
 * 入口文件
 */
const input = resolve(__dirname, '../packages')

/**
 * 输出文件
 */
const outDir = resolve(__dirname, '../dist/packages/es')

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
      outDir: outDir,
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
        /**
         * 添加头部注释
         */
        license({
          banner: `
          /*!
          * ${pkg.name} v${pkg.version}
          * Copyright (c) ${new Date().getFullYear()} ${pkg.author.name}
          * @license MIT
          */
        `
        }) as unknown as Plugin
      ]
    },
    lib: {
      entry: `${input}/index.ts`,
      formats: ['es']
    }
  }
}

export default defineConfig(config)
