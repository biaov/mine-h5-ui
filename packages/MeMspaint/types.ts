// emits
export interface Emits {
  (event: 'update:modelValue', node: HTMLCanvasElement): void
}

// props
export interface Props {
  modelValue?: HTMLCanvasElement
  width: string
  height: string
  background: string
  borderStyle: string | boolean
  strokeStyle: string
  lineWidth: number
  visible: boolean
}
