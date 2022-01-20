/* eslint-disable no-unused-vars */

// listItem
export interface ListItem {
  [key: string]: any
}

// emits
export interface Emits {
  (event: 'on-load-more'): void
}
