/**
 * PostMessage Return
 */
export type PostMessageReturn = {
  send: (data: string) => void
}

/**
 * MessageEventListener Callback
 */
export type MessageCallback = (data: string) => void

export type ImageConstructor = new (width?: number | undefined, height?: number | undefined) => HTMLImageElement
