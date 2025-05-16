import { beforeAll } from 'vitest'

beforeAll(() => {
  /**
   * 深度克隆
   */
  global.structuredClone = value => JSON.parse(JSON.stringify({ value })).value

  /**
   * 模拟图片加载
   */
  global.Image = class extends Image {
    onload: () => void
    width: number
    height: number

    constructor(option = { w: 500, h: 500 }) {
      super()
      this.width = option.w
      this.height = option.h
      this.onload = () => {}
      setTimeout(() => {
        this.onload()
      }, 50)
    }
  } as unknown as new (width?: number | undefined, height?: number | undefined) => HTMLImageElement
})
