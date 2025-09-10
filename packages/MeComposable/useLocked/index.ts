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

  const onSubmit = useLocked(async () => {
    // 业务操作
    // ...
  }, async () => {
    // 验证操作
    // ...
  })
 * ```
 */
export const useLocked = (handler: USELocked.Option, validHandler?: () => Promise<boolean | undefined>): USELocked.Option => {
  let locked = false
  return async function (this: unknown, ...args) {
    if (validHandler && !(await validHandler())) return
    if (locked) return
    locked = true
    try {
      await handler.apply(this, args)
    } finally {
      locked = false
    }
  }
}
