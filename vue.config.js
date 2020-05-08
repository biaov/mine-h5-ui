const { resolve } = require("path");
const { vueMarkdown, addStyleResource } = require("./build");

module.exports = {
  lintOnSave: true,
  devServer: {
    // 配置eslint的warning and error
    overlay: {
      warnings: false,
      error: false
    }
  },
  productionSourceMap: false, // 去掉map
  // 修改默认的入口
  pages: {
    index: {
      entry: "examples/main.js", // page 的入口
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      title: "MINE-H5-UI" // 页面title内容
    },
    mobile: {
      entry: "mobile/main.js", // page 的入口
      template: "public/mobile.html", // 模板来源
      filename: "mobile.html", // 在 dist/index.html 的输出
      title: "MINE-H5-UI" // 页面title内容
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    // stylus修改成less
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
    // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("~", resolve("packages"))
      .set("^", resolve("mobile"));
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options(vueMarkdown);
  }
};
