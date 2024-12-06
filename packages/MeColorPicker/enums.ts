/**
 * 颜色类型
 */
export const colorType = {
  hex: 'hex' as 'hex',
  rgb: 'rgb' as 'rgb',
  hsb: 'hsb' as 'hsb',
  options() {
    return [
      {
        value: this.hex
      },
      {
        value: this.rgb
      },
      {
        value: this.hsb
      }
    ]
  }
}

/**
 * hsb 的 key 值
 */
export enum hsbKey {
  h = 'hue',
  s = 'saturation',
  b = 'brightness'
}
