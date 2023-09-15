import { Options } from '@vitejs/plugin-vue'
import hljs from 'highlight.js'
import MarkdownItContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import { VitePWAOptions } from 'vite-plugin-pwa'
import type { VitePluginMdOptions, TokenItem } from './types'
import { resolve } from 'path'

/**
 * Vite 插件配置
 */
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
      validate: (params: string): RegExpMatchArray | null => params.trim().match(/^TimeLine\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<time-line>` : `</time-line>\n`)
    })

    // 复制
    md.use(MarkdownItContainer, 'CopyCode', {
      validate: (params: string): RegExpMatchArray | null => params.trim().match(/^CopyCode\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<copy-code>` : `</copy-code>\n`)
    })
  }
}

/**
 * Vue 插件配置
 */
export const vueConfig: Options = {
  include: [/\.vue$/, /\.md$/]
}

/**
 * PWA 配置
 */
export const vitePwaConfig: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['logo.svg', 'loading.gif'],
  manifest: {
    id: '/v2/',
    name: 'mine-h5-ui',
    short_name: 'PWA for mine-h5-ui',
    description: '关于 mine-h5-ui 的 PWA',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/v2/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/v2/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/v2/pwa-156x156.svg',
        sizes: '156x156',
        type: 'image/svg',
        purpose: 'any'
      }
    ]
  },
  workbox: {
    globDirectory: resolve(__dirname, '../dist'),
    skipWaiting: true,
    clientsClaim: true
  }
}

/**
 * eslint 配置
 */
export const eslintConfig = {
  exclude: ['node_modules']
}
