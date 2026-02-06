import { getSingletonHighlighter, bundledLanguages } from 'shiki'
import MarkdownItContainer from 'markdown-it-container'
import type { MarkdownItAsync, PluginWithParams } from 'markdown-it-async'
import { VitePWAOptions } from 'vite-plugin-pwa'
import { resolve } from 'path'
import type { ESLintPluginUserOptions } from 'vite-plugin-eslint2'
import type { MarkdownViteOptions, TokenItem } from './types'

/**
 * Vite 插件配置
 */
export const markdownViteConfig: MarkdownViteOptions = {
  wrapperClasses: 'md-wrap',
  markdownItSetup: async (md: MarkdownItAsync) => {
    /**
     * 时间线
     */
    md.use(MarkdownItContainer as unknown as PluginWithParams, 'TimeLine', {
      validate: (params: string): RegExpMatchArray | null => params.trim().match(/^TimeLine\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<time-line>` : `</time-line>\n`)
    })

    /**
     * 复制
     */
    md.use(MarkdownItContainer as unknown as PluginWithParams, 'CopyCode', {
      validate: (params: string): RegExpMatchArray | null => params.trim().match(/^CopyCode\s*(.*)$/),
      render: (tokens: TokenItem[], i: number): string => (tokens[i].nesting === 1 ? `<copy-code>` : `</copy-code>\n`)
    })

    /**
     * 代码高亮
     */
    // const themes = ['github-light', 'github-dark', 'dark-plus', 'light-plus']
    const theme = 'github-light'
    const highlighter = await getSingletonHighlighter({ themes: [theme], langs: Object.keys(bundledLanguages) })
    md.set({
      highlight: (code: string, lang: string) => highlighter.codeToHtml(code, { lang, theme })
    })
  }
}

/**
 * Pwa 配置
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
    globDirectory: resolve(import.meta.dirname, '../dist/docs'),
    skipWaiting: true,
    clientsClaim: true
  }
}

/**
 * eslint 配置
 */
export const eslintConfig: ESLintPluginUserOptions = {
  dev: true,
  build: true,
  exclude: ['node_modules', 'dist', 'fonts']
}
