import type { MarkdownItAsync } from 'markdown-it-async'

/**
 * markdown vite 配置
 */
export interface MarkdownViteOptions {
  markdownItSetup?: (MarkdownIt: MarkdownItAsync) => void | Promise<void>
  wrapperClasses?: string | string[] | undefined | null | ((id: string, code: string) => string | string[] | undefined | null)
}

/**
 * tokens item
 */
export interface TokenItem {
  nesting: number
}
