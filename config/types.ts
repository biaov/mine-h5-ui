import type MarkdownIt from 'markdown-it'
import type { Options } from 'markdown-it'

/**
 * markdown vite 配置
 */
export interface MarkdownViteOptions {
  markdownItOptions?: Options
  markdownItSetup?: (mdIt: MarkdownIt) => void | Promise<void>
  wrapperClasses?: string | string[] | undefined | null | ((id: string, code: string) => string | string[] | undefined | null)
}

/**
 * tokens item
 */
export interface TokenItem {
  nesting: number
}
