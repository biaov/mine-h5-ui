import { Bind, Unbind } from '../../MeAPI/event'

/**
 * 事件绑定
 * @example
 * ```ts
 * import { useBind } from 'mine-h5-ui'
 *
 * const { addBind, removeBind } = useBind()
 * const fn = (): void => {}
 * addBind(document, 'click', fn)
 * removeBind(document, 'click', fn)
 * ```
 */
export const useBind = () => {
  const addBind = Bind
  const removeBind = Unbind

  return {
    addBind,
    removeBind
  }
}
