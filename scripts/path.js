import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * 当前文件所在目录
 */
export const dirName = dirname(fileURLToPath(import.meta.url))

/**
 * 重置路径, @ 表示根目录
 */
export const resetPath = (filePath, defaultPrefix = '../') => {
  const prefix = filePath.slice(0, 1) === '@' ? defaultPrefix : ''
  return resolve(dirName, prefix + filePath.slice(1))
}
