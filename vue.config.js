const { resolve } = require('path')
const { vueMarkdown, addStyleResource } = require('./scripts')

module.exports = {
  lintOnSave: true,
  outputDir: './dist/docs',
  parallel: false,
  devServer: {
    port: 8888,
    /**
     * 配置 eslint 的warning and error
     */
    overlay: {
      warnings: false,
      error: false
    }
  },
  /**
   * 去掉 map
   */
  productionSourceMap: false,
  /**
   * 修改默认的入口
   */
  pages: {
    index: {
      /**
       * page 的入口
       */
      entry: 'examples/main.js',
      /**
       * 模板来源
       */
      template: 'public/index.html',
      /**
       * 在 dist/index.html 的输出
       */
      filename: 'index.html',
      /**
       * 页面title内容
       */
      title: 'MINE-H5-UI'
    },
    mobile: {
      /**
       * page 的入口
       */
      entry: 'mobile/main.js',
      /**
       * 模板来源
       */
      template: 'public/mobile.html',
      /**
       * 在 dist/index.html 的输出
       */
      filename: 'mobile.html',
      /**
       * 页面 title 内容
       */
      title: 'MINE-H5-UI'
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    /**
     * stylus 修改成 less
     */
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    /**
     * vue 默认 @ 指向 src 目录，这里要修正为 examples，另外新增一个 ~ 指向 packages
     */
    config.resolve.alias.set('@', resolve('examples')).set('~', resolve('packages')).set('^', resolve('mobile'))
    config.module.rule('md').test(/\.md/).use('vue-loader').loader('vue-loader').end().use('vue-markdown-loader').loader('vue-markdown-loader/lib/markdown-compiler').options(vueMarkdown)
  }
}
