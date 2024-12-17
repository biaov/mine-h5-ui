/**
 * 颜色类型
 */
export const colorType = {
  hex: 'hex' as const,
  rgb: 'rgb' as const,
  hsb: 'hsb' as const,
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
