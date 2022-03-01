const MarkdownItContainer = require('markdown-it-container')
const utils = require('./utils')
const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = () => `<table class="table">`
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    // 给```Vue 给这种样式加个class hljs
    MarkdownIt.renderer.rules.Vue = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = (...args) => {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [
      MarkdownItContainer,
      'CopyCode',
      {
        validate: params => params.trim().match(/^CopyCode\s*(.*)$/),
        render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<copy-code><div slot="highlight">` : `</div></copy-code>\n`)
      }
    ],
    [
      MarkdownItContainer,
      'TimeLine',
      {
        validate: params => params.trim().match(/^TimeLine\s*(.*)$/),
        render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<time-line><div slot="timeline">` : `</div></time-line>\n`)
      }
    ]
  ]
}
module.exports = vueMarkdown
