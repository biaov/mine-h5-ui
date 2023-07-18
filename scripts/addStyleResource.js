const path = require('path')
const addStyleResource = rule => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        /**
         * 路径为你的文件路径
         */
        path.resolve(__dirname, '../examples/styles/variable.less')
      ]
    })
}
module.exports = addStyleResource
