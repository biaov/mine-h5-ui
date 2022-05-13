import { Options } from '@vitejs/plugin-vue'
import { vueDocFiles as include } from 'vite-plugin-vuedoc'
import { VueDocPluginOptions } from 'vite-plugin-vuedoc/dist/plugin'
import MarkdownItContainer from 'markdown-it-container'

// vite 插件配置
export const vitePluginVuedocConfig: Partial<VueDocPluginOptions> = {
  wrapperClass: 'md-demo',
  highlight: {
    theme: 'one-light' // one-dark|one-light
  },
  markdownIt: {
    // 插件配置
    plugins: [
      [
        MarkdownItContainer,
        'TimeLine',
        {
          validate: params => params.trim().match(/^TimeLine\s*(.*)$/),
          render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<time-line>` : `</time-line>\n`)
        }
      ],
      [
        MarkdownItContainer,
        'CopyCode',
        {
          validate: params => params.trim().match(/^CopyCode\s*(.*)$/),
          render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<copy-code>` : `</copy-code>\n`)
        }
      ]
    ]
  }
}

// vue 插件配置
export const vueConfig: Options = {
  include,
  reactivityTransform: true
}
