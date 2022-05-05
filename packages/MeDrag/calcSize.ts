import { Point, Rect, Option, ResizeGroup } from './interfaces'
import { CalcSizeName } from './types'

/**
 * 获取对称点坐标
 * @param { T } curPoint 当前点的坐标
 * @param { T } center 中心点的坐标
 * @returns { Point } { x, y } 对称点的坐标
 */
export const getSymmPoint = <T extends Point>(curPoint: T, center: T): Point => {
  const x = center.x * 2 - curPoint.x
  const y = center.y * 2 - curPoint.y

  return { x, y }
}

/**
 * 获取中心点坐标
 * @param { T } curPoint 当前点的坐标
 * @param { T } center 中心点的坐标
 * @returns { Point } { x, y } 对称点的坐标
 */
export const getCenterPoint = <T extends Point>(curPoint: T, symmPoint: T): Point => {
  const x = (curPoint.x + symmPoint.x) / 2
  const y = (curPoint.y + symmPoint.y) / 2

  return { x, y }
}

/**
 * 角度和弧度互转
 ** Math.PI 弧度 = 180 度
 * @param { number } value 角度/弧度的值
 * @param { number } [type=angle] 第一个参数 value 的类型, angle:角度, radian:弧度
 * @returns { number } 转换之后角度/弧度的值
 */
export const angleMutualRadian = (value: number, type = 'angle'): number => {
  const ratio = Math.PI / 180 // 比例

  return type === 'angle' ? value * ratio : value / ratio
}

/**
 * 获取旋转之后的坐标
 * @param { Point } point 需要旋转的点
 * @param { Point } center 旋转的中心点
 * @param { number } angle 旋转角度
 * @returns { Point } { x, y } 旋转之后的点
 */
export const getRotatePoint = (point: Point, center: Point, angle: number): Point => {
  const radian = angleMutualRadian(angle) // 弧度
  const sin = Math.sin(radian) // sin
  const cos = Math.cos(radian) // cos

  const relativeX = point.x - center.x // 相对横坐标
  const relativeY = point.y - center.y // 相对纵坐标
  const x = relativeX * cos - relativeY * sin + center.x
  const y = relativeX * sin + relativeY * cos + center.y

  return { x, y }
}

/**
 * 左上(西北)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const northWestResize = ({ symmPoint, curPoint, rect }: Option): Rect => {
  const newCenter = getCenterPoint(curPoint, symmPoint) // 新的中心点坐标
  const newPoint = getRotatePoint(curPoint, newCenter, -rect.r) // 新的坐标点
  const newSymmPoint = getSymmPoint(newPoint, newCenter) // 新的对称点

  const newW = newSymmPoint.x - newPoint.x // 新的宽度
  const newH = newSymmPoint.y - newPoint.y // 新的高度

  if (newW > 0 && newH > 0) {
    rect.w = Math.round(newW)
    rect.h = Math.round(newH)
    rect.x = Math.round(newPoint.x)
    rect.y = Math.round(newPoint.y)
  }

  return rect
}

/**
 * 上(北)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const northResize = ({ startPoint, symmPoint, curPoint, rect }: Option): Rect => {
  const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r)
  const centerTop = getRotatePoint(
    {
      x: startPoint.x,
      y: rotatePoint.y
    },
    startPoint,
    rect.r
  )

  const newH = Math.sqrt((centerTop.x - symmPoint.x) ** 2 + (centerTop.y - symmPoint.y) ** 2)

  if (newH > 0) {
    const newCenter = {
      x: (centerTop.x + symmPoint.x) / 2,
      y: (centerTop.y + symmPoint.y) / 2
    }
    rect.h = Math.round(newH)
    rect.x = Math.round(newCenter.x - rect.w / 2)
    rect.y = Math.round(newCenter.y - newH / 2)
  }

  return rect
}

/**
 * 右上(东北)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const northEastResize = ({ symmPoint, curPoint, rect }: Option): Rect => {
  const newCenter = getCenterPoint(curPoint, symmPoint)
  const newPoint = getRotatePoint(curPoint, newCenter, -rect.r)
  const newSymmPoint = getSymmPoint(newPoint, newCenter)

  const newW = newPoint.x - newSymmPoint.x
  const newH = newSymmPoint.y - newPoint.y

  if (newW > 0 && newH > 0) {
    rect.w = Math.round(newW)
    rect.h = Math.round(newH)
    rect.x = Math.round(newSymmPoint.x)
    rect.y = Math.round(newPoint.y)
  }

  return rect
}

/**
 * 右(东)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const eastResize = ({ startPoint, symmPoint, curPoint, rect }: Option): Rect => {
  const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r)
  const rightCenter = getRotatePoint(
    {
      x: rotatePoint.x,
      y: startPoint.y
    },
    startPoint,
    rect.r
  )

  const newW = Math.sqrt((rightCenter.x - symmPoint.x) ** 2 + (rightCenter.y - symmPoint.y) ** 2)

  if (newW > 0) {
    const newCenter = {
      x: (rightCenter.x + symmPoint.x) / 2,
      y: (rightCenter.y + symmPoint.y) / 2
    }
    rect.w = Math.round(newW)
    rect.x = Math.round(newCenter.x - newW / 2)
    rect.y = Math.round(newCenter.y - rect.h / 2)
  }

  return rect
}

/**
 * 右下(东南)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const southEastResize = ({ symmPoint, curPoint, rect }: Option): Rect => {
  const newCenter = getCenterPoint(curPoint, symmPoint)
  const newPoint = getRotatePoint(curPoint, newCenter, -rect.r)
  const newSymmPoint = getSymmPoint(newPoint, newCenter)

  const newW = newPoint.x - newSymmPoint.x
  const newH = newPoint.y - newSymmPoint.y

  if (newW > 0 && newH > 0) {
    rect.w = Math.round(newW)
    rect.h = Math.round(newH)
    rect.x = Math.round(newSymmPoint.x)
    rect.y = Math.round(newSymmPoint.y)
  }

  return rect
}

/**
 * 下(南)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const southResize = ({ startPoint, symmPoint, curPoint, rect }: Option): Rect => {
  const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r)
  const centerBottom = getRotatePoint(
    {
      x: startPoint.x,
      y: rotatePoint.y
    },
    startPoint,
    rect.r
  )

  const newH = Math.sqrt((centerBottom.x - symmPoint.x) ** 2 + (centerBottom.y - symmPoint.y) ** 2)

  if (newH > 0) {
    const newCenter = {
      x: (centerBottom.x + symmPoint.x) / 2,
      y: (centerBottom.y + symmPoint.y) / 2
    }
    rect.h = Math.round(newH)
    rect.x = Math.round(newCenter.x - rect.w / 2)
    rect.y = Math.round(newCenter.y - newH / 2)
  }

  return rect
}

/**
 * 左下(西南)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const southWestResize = ({ symmPoint, curPoint, rect }: Option): Rect => {
  const newCenter = getCenterPoint(curPoint, symmPoint)
  const newPoint = getRotatePoint(curPoint, newCenter, -rect.r)
  const newSymmPoint = getSymmPoint(newPoint, newCenter)

  const newW = newSymmPoint.x - newPoint.x
  const newH = newPoint.y - newSymmPoint.y

  if (newW > 0 && newH > 0) {
    rect.w = Math.round(newW)
    rect.h = Math.round(newH)
    rect.x = Math.round(newPoint.x)
    rect.y = Math.round(newSymmPoint.y)
  }

  return rect
}

/**
 * 左(西)方向
 * @param { Option } param - 计算参数
 * @returns { Rect } 计算之后的大小
 */
const westResize = ({ startPoint, symmPoint, curPoint, rect }: Option): Rect => {
  const rotatePoint = getRotatePoint(curPoint, startPoint, -rect.r)
  const leftCenter = getRotatePoint({ x: rotatePoint.x, y: startPoint.y }, startPoint, rect.r)

  const newW = Math.sqrt((leftCenter.x - symmPoint.x) ** 2 + (leftCenter.y - symmPoint.y) ** 2)

  if (newW > 0) {
    const newCenter = {
      x: (leftCenter.x + symmPoint.x) / 2,
      y: (leftCenter.y + symmPoint.y) / 2
    }
    rect.w = Math.round(newW)
    rect.y = Math.round(newCenter.y - rect.h / 2)
    rect.x = Math.round(newCenter.x - newW / 2)
  }

  return rect
}

// 调整大下集合,左西右东,上北下南
const resizeGroup: ResizeGroup = {
  nw: northWestResize,
  n: northResize,
  ne: northEastResize,
  e: eastResize,
  se: southEastResize,
  s: southResize,
  sw: southWestResize,
  w: westResize
}

/**
 * 计算大小
 * @param { string } name 计算名称
 * @param { Object } option 计算参数
 * @returns { Object } 计算之后的大小
 */
const calcSize = (name: CalcSizeName, option: Option) => {
  return resizeGroup[name](JSON.parse(JSON.stringify(option)))
}

export default calcSize
