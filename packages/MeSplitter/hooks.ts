import { ref, computed, onMounted, useTemplateRef } from 'vue'
import { useImgInfo } from '../MeComposable'
import type { Props, Emits, TempData, DrawImgData, DrawCircleOpton, CircleLineOption, Base64DataItem } from './types'
import animationNames from './animationNames'

export const useHandle = (props: Readonly<Props>, emit: Emits) => {
  /**
   * canvas 节点元素
   */
  const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')
  /**
   * 碎片最小尺寸
   */
  const minSize = props.minSize as number
  /**
   * 获取随机数
   */
  const randomNum = (max: number = 1) => Math.round(Math.random() * max)

  /**
   * 随机获取数组中的一个值
   */
  const randomKey = (filters: string[]) => filters[randomNum(filters.length - 1)]

  /**
   * 画四边角圆
   */
  const circleLine = ({ ctx, cx, cy, r, x, y, tx, ty }: CircleLineOption, type: string, circle?: [string, number]) => {
    const isLine = circle?.[0] === type
    const inside = !circle?.[1]
    switch (type) {
      case 'top':
        if (isLine) {
          ctx.lineTo(cx - r, y)
          ctx.arc(cx, y, r, Math.PI, 0, inside)
        }
        ctx.lineTo(tx, y)
        break
      case 'right':
        if (isLine) {
          ctx.lineTo(tx, cy - r)
          ctx.arc(tx, cy, r, 1.5 * Math.PI, 0.5 * Math.PI, inside)
        }
        ctx.lineTo(tx, ty)
        break
      case 'bottom':
        if (isLine) {
          ctx.lineTo(cx + r, ty)
          ctx.arc(cx, ty, r, 0, Math.PI, inside)
        }
        ctx.lineTo(x, ty)
        break
      case 'left':
        if (isLine) {
          ctx.lineTo(x, cy + r)
          ctx.arc(x, cy, r, 0.5 * Math.PI, 1.5 * Math.PI, inside)
        }
        ctx.lineTo(x, y)
        break
    }
  }

  /**
   * 画圆
   */
  const drawCircle = ({ ctx, canvas, w, h, x, y }: DrawCircleOpton, [circle1, circle2]: [string, number][]) => {
    const [direction, outside] = circle1
    ctx.lineWidth = props.lineWidth as number
    ctx.strokeStyle = props.lineColor as string
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(x, y)
    const r = Math.round(w / 3 / 2)
    const tx = x + w
    const ty = y + h
    const cx = x + w / 2
    const cy = y + h / 2
    const option = { ctx, r, tx, ty, x, y, cx, cy }
    switch (direction) {
      case 'top':
        circleLine(option, 'top', ['top', outside])
        circleLine(option, 'right', circle2)
        circleLine(option, 'bottom', circle2)
        circleLine(option, 'left', circle2)
        break
      case 'right':
        ctx.lineTo(tx, y)
        circleLine(option, 'right', ['right', outside])
        circleLine(option, 'bottom', circle2)
        circleLine(option, 'left', circle2)
        break
      case 'bottom':
        ctx.lineTo(tx, y)
        ctx.lineTo(tx, ty)
        circleLine(option, 'bottom', ['bottom', outside])
        circleLine(option, 'left', circle2)
        break
      case 'left':
        ctx.lineTo(tx, y)
        ctx.lineTo(tx, ty)
        ctx.lineTo(x, ty)
        circleLine(option, 'left', ['left', outside])
        break
      case 'no':
        ctx.lineTo(tx, y)
        ctx.lineTo(tx, ty)
        ctx.lineTo(x, ty)
        ctx.lineTo(x, y)
        break
    }
    ctx.clip()
    ctx.closePath()
    ctx.drawImage(imageIn, 0, 0, imageIn.width, imageIn.height)
    ctx.stroke()
  }

  /**
   * 按照上右下左的顺序返回索引
   */
  const getIndex = (type: string) => ['top', 'right', 'bottom', 'left'].findIndex(key => key === type)

  /**
   * 画图
   */
  const onDrawImg = (item: DrawImgData, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const { circle1, circle2, w, h, x, y } = item
    let circles: [string, number][]
    if (circle2) {
      const index1 = getIndex(circle1[0])
      const index2 = getIndex(circle2[0])
      circles = [circle1, circle2]
      index1 > index2 && circles.reverse()
    } else {
      circles = [circle1]
    }
    ctx.save()
    drawCircle({ canvas, ctx, w, h, x, y }, circles)
    ctx.restore()
    return canvas.toDataURL('image/png', 1)
  }

  const tempData: TempData[] = []
  const base64Data = ref<Base64DataItem[]>([])
  /**
   * 保存临时数据
   */
  const saveTempData = (data: TempData) => {
    const item = tempData.find(item => item.id === data.id)
    if (item) {
      item.circle2 = data.circle1
    } else {
      tempData.push(data)
    }
  }
  let imageIn: HTMLImageElement
  onMounted(async () => {
    if (!canvasRef.value) return
    const canvas = canvasRef.value!
    const { width, height, image } = await useImgInfo(props.url)
    if (width < minSize * 2 || height < minSize * 2) throw new Error(`图片尺寸不能小于${minSize * 2}x${minSize * 2}`)
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')!
    imageIn = image
    // ctx.drawImage(image, 0, 0, image.width, image.height)
    let [row, cols] = props.gutter || []
    row ??= ~~(height / minSize)
    cols ??= ~~(width / minSize)
    const uw = width / cols
    const uh = height / row
    const unitRect = { w: ~~uw, h: ~~uh }
    base64Data.value = Array.from({ length: row * cols }, (_, i) => {
      let t1: string
      let t2: string | null = null
      let r1 = randomNum()
      let r2 = randomNum()
      const rowRes = i / cols
      const colRes = i % cols
      // 第一行
      if (rowRes < 1) {
        // 第一列
        if (colRes < 1) {
          t1 = 'right'
          t2 = 'bottom'
          saveTempData({
            id: i + 1,
            circle1: ['left', +!r1]
          })
          saveTempData({
            id: i + cols,
            circle1: ['top', +!r2]
          })
        } else if (colRes >= cols - 1) {
          // 最后一列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            t2 = 'bottom'
            tempData.splice(index, 1)
            saveTempData({
              id: i + cols,
              circle1: ['top', +!r2]
            })
          } else {
            t1 = 'bottom'
            saveTempData({
              id: i + cols,
              circle1: ['top', +!r1]
            })
          }
        } else {
          // 中间列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
          } else {
            t1 = randomKey(['right', 'bottom'])
            switch (t1) {
              case 'right':
                saveTempData({
                  id: i + 1,
                  circle1: ['left', +!r1]
                })
                break
              case 'bottom':
                saveTempData({
                  id: i + cols,
                  circle1: ['top', +!r1]
                })
            }
          }

          t2 = randomKey(['right', 'bottom'].filter(key => key !== t1))

          switch (t2) {
            case 'right':
              saveTempData({
                id: i + 1,
                circle1: ['left', +!r2]
              })
              break
            case 'bottom':
              saveTempData({
                id: i + cols,
                circle1: ['top', +!r2]
              })
              break
          }
        }
      } else if (rowRes >= row - 1) {
        // 最后一行
        // 第一列
        if (colRes < 1) {
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            t2 = 'right'
            saveTempData({
              id: i + 1,
              circle1: ['left', +!r2]
            })
          } else {
            t1 = 'right'
            saveTempData({
              id: i + 1,
              circle1: ['left', +!r1]
            })
          }
        } else if (colRes >= cols - 1) {
          // 最后一列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            if (item.circle2) {
              t2 = item.circle2[0]
              r2 = item.circle2[1]
            }
          } else {
            t1 = 'no' // randomKey(['right', 'bottom'])
          }
        } else {
          // 中间列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            if (item.circle2) {
              t2 = item.circle2[0]
              r2 = item.circle2[1]
            } else {
              t2 = 'right'
              saveTempData({
                id: i + 1,
                circle1: ['left', +!r2]
              })
            }
          } else {
            t1 = 'right'
            saveTempData({
              id: i + 1,
              circle1: ['left', +!r1]
            })
          }
        }
      } else {
        // 中间行
        // 第一列
        if (colRes < 1) {
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            if (item.circle2) {
              t2 = item.circle2[0]
              r2 = item.circle2[1]
            } else {
              t2 = randomKey(['right', 'bottom'].filter(key => key !== t1))

              switch (t2) {
                case 'right':
                  saveTempData({
                    id: i + 1,
                    circle1: ['left', +!r2]
                  })
                  break
                case 'bottom':
                  saveTempData({
                    id: i + cols,
                    circle1: ['top', +!r2]
                  })
                  break
              }
            }
          } else {
            t1 = randomKey(['right', 'bottom'])

            switch (t1) {
              case 'right':
                saveTempData({
                  id: i + 1,
                  circle1: ['left', +!r1]
                })
                break
              case 'bottom':
                saveTempData({
                  id: i + cols,
                  circle1: ['top', +!r1]
                })
                break
            }

            t2 = randomKey(['right', 'bottom'].filter(key => key !== t1))

            switch (t2) {
              case 'right':
                saveTempData({
                  id: i + 1,
                  circle1: ['left', +!r2]
                })
                break
              case 'bottom':
                saveTempData({
                  id: i + cols,
                  circle1: ['top', +!r2]
                })
                break
            }
          }
        } else if (colRes >= cols - 1) {
          // 最后一列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            if (item.circle2) {
              t2 = item.circle2[0]
              r2 = item.circle2[1]
            } else {
              t2 = 'bottom'
              saveTempData({
                id: i + cols,
                circle1: ['top', +!r2]
              })
            }
          } else {
            t1 = 'bottom'
            saveTempData({
              id: i + cols,
              circle1: ['top', +!r1]
            })
          }
        } else {
          // 中间列
          const index = tempData.findIndex(item => item.id === i)
          if (index >= 0) {
            const item = tempData[index]
            t1 = item.circle1[0]
            r1 = item.circle1[1]
            tempData.splice(index, 1)
            if (item.circle2) {
              t2 = item.circle2[0]
              r2 = item.circle2[1]
            } else {
              t2 = randomKey(['right', 'bottom'].filter(key => key !== t1))

              switch (t2) {
                case 'right':
                  saveTempData({
                    id: i + 1,
                    circle1: ['left', +!r2]
                  })
                  break
                case 'bottom':
                  saveTempData({
                    id: i + cols,
                    circle1: ['top', +!r2]
                  })
              }
            }
          } else {
            t1 = randomKey(['right', 'bottom'])

            switch (t1) {
              case 'right':
                saveTempData({
                  id: i + 1,
                  circle1: ['left', +!r1]
                })
                break
              case 'bottom':
                saveTempData({
                  id: i + cols,
                  circle1: ['top', +!r1]
                })
            }
            t2 = randomKey(['right', 'bottom'].filter(key => key !== t1))

            switch (t2) {
              case 'right':
                saveTempData({
                  id: i + 1,
                  circle1: ['left', +!r2]
                })
                break
              case 'bottom':
                saveTempData({
                  id: i + cols,
                  circle1: ['top', +!r2]
                })
                break
            }
          }
        }
      }

      const result = {
        ...unitRect,
        x: colRes * uw,
        y: ~~rowRes * uh,
        circle1: [t1, r1] as [string, number],
        circle2: t2 ? ([t2, r2] as [string, number]) : undefined
      }

      const base64 = onDrawImg(result, canvas, ctx)

      return {
        // ...result,
        base64,
        animation: randomKey(animationNames)
      }
    })
    emit('load', base64Data.value)
  })

  return { base64Data }
}

/**
 * 样式
 */
export const useStyle = (props: Readonly<Props>) => {
  const addUnit = (val: string | number) => (`${+val}` === `${val}` ? `${val}px` : val)
  const getStyle = computed(() => ({
    width: addUnit(props.width!),
    height: addUnit(props.height!)
  }))

  return { getStyle }
}
