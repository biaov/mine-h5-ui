
import { Ref } from 'vue'

// 父组件参数
export interface AccordionContext {
  name: string
  currentValue: Ref<string | number>
  onChange: (name: string | number) => void
}

// emits
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

// props
export interface Props {
  label: string
  name: string | number
  borderColor: string
}
