import type MarkdownIt from 'markdown-it'

/**
 * markdown vite 配置
 */
export interface MarkdownViteOptions {
  markdownItOptions?: MarkdownIt.Options
  markdownItSetup?: (MarkdownIt: MarkdownIt) => void | Promise<void>
  wrapperClasses?: string | string[] | undefined | null | ((id: string, code: string) => string | string[] | undefined | null)
}

/**
 * tokens item
 */
export interface TokenItem {
  nesting: number
}
