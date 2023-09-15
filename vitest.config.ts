import { defineConfig, mergeConfig } from 'vitest/config'
import { resolve } from 'path'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ['tests/**/*.spec.ts'],
      environment: 'jsdom'
    }
  })
)
