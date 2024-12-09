/**
 * 随机 Id
 * @param binary 进制
 * @example
 * ```ts
 * import { useId } from 'mine-h5-ui'
 *
 * console.log(useId()) // 1726733454868gl3vkrbuf9
 * ```
 */
export const useId = (binary = 32) => +new Date() + Math.random().toString(binary).slice(2)
