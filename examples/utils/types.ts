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
