/**
 * 校验
 * @example
 * ```ts
 * import { useValidator } from 'mine-h5-ui'
 *
 * const { phone, password, email, idCard, imgs, thousand, thousandFloat } = useValidator()
 * console.log(phone.test('')) // 输出: false
 * ```
 */
export const useValidator = () => ({
  phone: /^1[3456789]\d{9}$/,
  password: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
  email: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
  idCard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
  imgs: /\.(svg|gif|png|jpe?g)$/i,
  thousand: /(\d)(?=(\d{3})+$)/g,
  thousandFloat: /(\d)(?=(\d{3})+\.)/g
})
