/**
 * 移除缓存
 * @param { string } key 获取缓存的 key
 * @param { unknown } value 缓存的值
 */
export const setStorage = (key: string, value: unknown) => {
  uni.setStorageSync(`$-${key}`, JSON.stringify({ value }))
}

/**
 * 移除缓存
 * @param { string } key 获取缓存的 key
 * @returns { unknown } 缓存值
 */
export const getStorage = (key: string): unknown => {
  const storage = uni.getStorageSync(`$-${key}`)
  return storage ? JSON.parse(storage).value : ''
}

/**
 * 移除缓存
 * @param { string } key 移除缓存的 key
 */
export const removeStorage = (key: string) => {
  uni.removeStorageSync(`$-${key}`)
}
