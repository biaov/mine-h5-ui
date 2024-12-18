import { computed } from 'vue'
import { mergeDefaultWithProps, viewBoxSize } from './config'
import type { Props } from './types'

export const useHandle = (props: Props) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const calcViewBox = ({ text, size, family }: { text: string; size: number; family: string }) => {
    ctx.font = `${size}px ${family}`
    const textRect = ctx.measureText(text)
    const width = textRect.width + 10
    const height = textRect.fontBoundingBoxAscent + textRect.fontBoundingBoxDescent

    return { width, height }
  }

  const rect = computed(() => {
    const mergeRect = mergeDefaultWithProps(props)
    const containerRect = calcViewBox({ text: mergeRect.text, size: mergeRect.size, family: mergeRect.family })
    return { ...mergeRect, ...containerRect, viewBoxSize: `${viewBoxSize}px` }
  })

  const viewBox = computed(() => calcViewBox({ text: props.text, size: viewBoxSize, family: rect.value.family }))

  return { rect, viewBox }
}
