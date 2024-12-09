/**
 * useMoveHandle
 */
export namespace USEMoveHandle {
  export type OptionEvent = Pick<MouseEvent, 'x' | 'y' | 'type'>
  export interface Option {
    start(e: OptionEvent): void | unknown
    move(e: OptionEvent): void | unknown
    end(e: OptionEvent): void | unknown
  }
}
