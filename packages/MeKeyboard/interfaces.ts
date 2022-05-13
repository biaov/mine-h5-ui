// props SkinStyleValue
export interface SkinStyleValue {
  bgc: string
  textBgc: string
  color: string
}

// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'click', num: number): void
  (event: 'delete', e: MouseEvent): void
  (event: 'complate', e: MouseEvent): void
}

// props
export interface Props {
  visible: boolean
  skinType: string
  skinStyle: SkinStyleValue
  isPadding: boolean
}
