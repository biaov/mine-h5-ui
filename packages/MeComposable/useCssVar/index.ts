type Option = Record<string, string | number>

/**
 * 短横线
 */
const kebabCase = (key: string) =>
  key.replace(/[A-Z]/g, value => {
    if (!value) return value
    return `-${value.toLowerCase()}`
  })

/**
 * css 变量
 * @example
 * ```ts
 * import { useCssVar } from 'mine-h5-ui'
 *
 * console.log(useCssVar({ width: '100px' })) // { --width: '100px' }
 * console.log(useCssVar({ fontSize: '100px' })) // { --font-size: '100px' }
 * ```
 */
export const useCssVar = (option: Record<string, string | number> = {}) => {
  const cssVar = Object.entries(option).reduce((prev, [key, value]) => {
    prev[`--${kebabCase(key)}`] = value
    return prev
  }, {} as Option)
  return cssVar
}
