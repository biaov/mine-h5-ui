/* eslint-disable no-unused-vars */
// emits
export interface Emits {
  (event: 'on-click', index: number): void
  (event: 'on-click:preappend', e: MouseEvent): void
  (event: 'on-click:append', e: MouseEvent): void
}

// props
export interface Props {
  list: string | string[]
  scroll: string
  loop: boolean
  delay: number
  preappendIcon: string
  preappendColor: string
  appendIcon: string
  appendColor: string
  height: number
  radius: string | number
  background: string
  color: string
}
