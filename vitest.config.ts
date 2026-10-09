import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

/**
 * 单元测试配置信息
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ['tests/**/*.spec.ts'],
      environment: 'jsdom',
      setupFiles: ['vi-canvas-mock', './tests/setup.ts']
    }
  })
)
