import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import pxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
import type { AcceptedPlugin } from 'postcss'

/**
 * 入口文件
 */
const input = resolve(import.meta.dirname, '../packages/styles')

/**
 * 输出文件
 */
let outDir = resolve(import.meta.dirname, '../dist/packages/styles')
const ignoreDirs = ['fonts', 'common']
const entry = readdirSync(input)
  .filter(name => !ignoreDirs.includes(name))
  .map(name => resolve(input, name))

const cssPlugins: AcceptedPlugin[] = []
if (process.env.rem) {
  outDir = resolve(outDir, '../rem')
  cssPlugins.push(
    pxtorem({
      replace: true,
      propList: ['*']
    })
  )
}

/**
 * 配置信息
 */
export default defineConfig({
  publicDir: false,
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions']
        }),
        ...cssPlugins
      ]
    }
  },
  build: {
    outDir,
    lib: { entry },
    cssCodeSplit: true
  }
})
