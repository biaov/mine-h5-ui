import type MarkdownIt from 'markdown-it'

// vite-plugin-md 配置
export interface VitePluginMdOptions {
  markdownItOptions?: MarkdownIt.Options
  markdownItSetup?: (MarkdownIt: MarkdownIt) => void
  wrapperClasses?: string | string[]
}

// tokens item
export interface TokenItem {
  nesting: number
}
