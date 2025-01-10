import type { Config } from 'tailwindcss'

/**
 * 间距大小
 */
const spacing = {}

/**
 * 层级大小
 */
const zIndex = {}

// 添加大小
for (let i = 0; i < 1000; i++) {
  spacing[i] = `${i}px`
  i < 10 && (zIndex[i] = i)
}

export default {
  content: ['./examples/**/*.vue', './mobile/**/*.vue'],
  theme: {
    spacing,
    extend: {
      fontSize: ({ theme }) => theme('spacing'),
      zIndex
    }
  }
} satisfies Config
