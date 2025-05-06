/**
 * 获取图片信息
 * @example
 * ```ts
 * import { useImgInfo } from 'mine-h5-ui'
 *
 * const { width, height } = useImgInfo('https://图片地址')
 * ```
 */
export const useImgInfo = (
  url: string
): Promise<{
  width: number
  height: number
  image: HTMLImageElement
}> => {
  if (!url) throw new Error('URL 必传')
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onerror = reject
    image.onload = () => {
      resolve({
        image,
        width: image.width,
        height: image.height
      })
    }
  })
}
