/* eslint-disable no-unused-vars */

// emits
export interface Emits {
  (event: 'on-click', index: number): void
  (event: 'on-click:preappend', e: MouseEvent): void
  (event: 'on-click:append', e: MouseEvent): void
}
