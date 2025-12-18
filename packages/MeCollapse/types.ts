import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'change', value: string | number): void
}

/**
 * props
 */
export interface Props {}

/**
 * useInitSlots
 */
export namespace USEInitSlots {
  export interface Option {
    emit: Emits
    currentValue: ModelRef<string | number | undefined>
  }
}
