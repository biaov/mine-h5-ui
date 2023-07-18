export default {
  /**
   * 验证手机号码
   */
  validPhone: /^1[3456789]\d{9}$/,
  /**
   * 验证密码 6-12 位数字 + 字母组合
   */
  validPwd: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
  /**
   * 只允许英文字母、数字、下划线、英文句号、以及中划线组成
   */
  validEmail: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
  /**
   * 验证身份证号
   */
  validIdcard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
  /**
   * 验证图片格式
   */
  validImgs: /\.(svg|gif|png|jpe?g)$/i,
  /**
   * 千位符
   */
  validThousand: /(\d)(?=(\d{3})+$)/g,
  /**
   * 小数千位符
   */
  validThousandFloat: /(\d)(?=(\d{3})+\.)/g
}
