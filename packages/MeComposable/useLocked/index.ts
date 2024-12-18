import type { USELocked } from './types'

/**
 * 重复点击锁
 * @example
 * ```js
  import { useLocked } from 'mine-h5-ui'

  const onClick = useLocked(async () => {
    // 业务操作
    // ...
  })
 * ```
 */
export const useLocked = (handler: USELocked.Option): USELocked.Option => {
  let locked = false
  return async function (this: unknown, ...args) {
    if (locked) return
    locked = true
    try {
      await handler.apply(this, args)
    } finally {
      locked = false
    }
  }
}
