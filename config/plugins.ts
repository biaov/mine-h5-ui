import { Options } from '@vitejs/plugin-vue'
import hljs from 'highlight.js'
import MarkdownItContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import { VitePluginMdOptions, TokenItem } from './interfaces'

// Vite 插件配置
export const vitePluginMdConfig: VitePluginMdOptions = {
  wrapperClasses: 'md-demo',
  markdownItOptions: {
    highlight: (str: string, lang: string): string => {
      if (lang) {
        const formtatLang = lang.toLowerCase().replace('vue', 'html')
        if (hljs.getLanguage(formtatLang)) return hljs.highlight(str, { language: formtatLang }).value
      }

      return str
    }
  },
  markdownItSetup: (md: MarkdownIt) => {
    // 时间线
    md.use(MarkdownItContainer, 'TimeLine', {
      validate: (params: string): string[] => params.trim().match(/^TimeLine\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<time-line>` : `</time-line>\n`)
    })

    // 复制
    md.use(MarkdownItContainer, 'CopyCode', {
      validate: (params: string): string[] => params.trim().match(/^CopyCode\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<copy-code>` : `</copy-code>\n`)
    })
  }
}

// Vue 插件配置
export const vueConfig: Options = {
  include: [/\.vue$/, /\.md$/],
  reactivityTransform: true
}
