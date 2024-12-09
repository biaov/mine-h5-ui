import type { StorageType } from './types'
import { storageInstance } from './enums'

/**
 * 缓存
 * @example
 * ```ts
 * import { useStorage } from 'mine-h5-ui'
 *
 * const { setStorage, getStorage, removeStorage } = useStorage()
 * setStorage('name', 'mineh5ui') // 设置缓存
 * console.log(getStorage('name')) // 获取缓存，输出: mineh5ui
 * removeStorage('name') // 移除缓存
 * console.log(getStorage('name')) // 输出: null
 * ```
 */
export const useStorage = () => {
  const getKey = (key: string) => `$me-${key}`
  const getStorageInstance = (type?: StorageType) => (type ? storageInstance[`${type}Storage`] : localStorage)

  const setStorage = (key: string, value: unknown, type?: StorageType) => {
    getStorageInstance(type).setItem(getKey(key), JSON.stringify({ value }))
  }

  const getStorage = (key: string, type?: StorageType) => {
    const value = getStorageInstance(type).getItem(getKey(key))
    return value && JSON.parse(value).value
  }

  const removeStorage = (key: string, type?: StorageType) => {
    getStorageInstance(type).removeItem(getKey(key))
  }

  return { setStorage, getStorage, removeStorage }
}
