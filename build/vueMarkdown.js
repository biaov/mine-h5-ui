const MarkdownItContainer = require("markdown-it-container");
const MarkdownItCheckBox = require("markdown-it-task-checkbox");
const MarkdownItDec = require("markdown-it-decorate");
const utils = require("./utils");
const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function() {
      return `<table class="table">`
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function(...args) {
      args[0][args[1]].attrJoin("class", "code_inline")
      return codeInline(...args)
    }
    return source;
  },
  use: [
    [
      MarkdownItContainer,
      "demo",
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `<demo-block><div slot="highlight">`
          }
          return "</div></demo-block>\n"
        }
      }
    ],
    [
      MarkdownItCheckBox,
      {
        disabled: true
      }
    ],
    [MarkdownItDec]
  ]
}
module.exports = vueMarkdown;
