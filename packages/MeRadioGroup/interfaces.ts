/* eslint-disable no-unused-vars */

// emits
export interface Emits {
  (event: 'update:modelValue', name: string | number): void
  (event: 'on-change', name: string | number): void
}
