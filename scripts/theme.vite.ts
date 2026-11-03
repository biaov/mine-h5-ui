import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import pxToViewport from 'postcss-px-to-viewport-8-plugin'
import autoprefixer from 'autoprefixer'
import type { AcceptedPlugin } from 'postcss'

/**
 * 入口文件
 */
const input = resolve(import.meta.dirname, '../packages/styles')

/**
 * 忽略的目录
 */
const ignoreDirs = ['fonts', 'common']

/**
 * 入口集合
 */
const entry = readdirSync(input)
  .filter(name => !ignoreDirs.includes(name))
  .map(name => resolve(input, name))

/**
 * 配置信息
 */
export default defineConfig(({ mode }) => {
  /**
   * 是否为 vw 产物
   */
  const isVw = mode === 'vw'

  /**
   * 输出文件
   */
  let outDir = resolve(import.meta.dirname, '../dist/packages/styles')

  const cssPlugins: AcceptedPlugin[] = []

  if (isVw) {
    outDir = resolve(import.meta.dirname, '../dist/packages/vw')
    cssPlugins.push(
      pxToViewport({
        /**
         * 设计稿宽度
         */
        viewportWidth: 375,
        /**
         * 单位转换后保留的精度
         */
        unitPrecision: 5,
        /**
         * 需要转换的属性
         */
        propList: ['*'],
        /**
         * 视口单位
         */
        viewportUnit: 'vw',
        /**
         * 字体单位
         */
        fontViewportUnit: 'vw',
        /**
         * 小于等于 1px 不转换，保证 1px 边框清晰
         */
        minPixelValue: 1,
        /**
         * 转换媒体查询与 @keyframes 内的单位
         * 注意：设为 false 时插件会连带跳过 @keyframes，导致动画位移不缩放
         */
        mediaQuery: true,
        /**
         * 直接替换属性值
         */
        replace: true
      })
    )
  }

  return {
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
      cssCodeSplit: true,
      /**
       * 关闭插件耗时警告
       */
      rolldownOptions: {
        checks: {
          bundlerTimings: false
        }
      }
    }
  }
})
