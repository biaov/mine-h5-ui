const path = require("path");
const addStyleResource = rule => {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "../examples/utils/styles/variable.less") // 路径为你的文件路径
      ]
    });
};
module.exports = addStyleResource;
