const { src, dest } = require("gulp");
const cssmin = require("gulp-cssmin");
const del = require("del");

/**
 * 复制字体
 * @param {Void}
 * @returns {Void}
 */
exports.copyfont = () =>
  src(["../src/fonts/*", "!../src/fonts/*.css"]).pipe(dest("../lib/fonts"));
/**
 * 压缩font 里的 CSS
 * @param {Void}
 * @returns {Void}
 */
exports.minifontCss = () =>
  src("../src/fonts/*.css")
    .pipe(cssmin())
    .pipe(dest("../lib/fonts"));
/**
 * 删除之前文件
 * @param {Void}
 * @returns {Void}
 */
exports.clean = () => del(["../lib"], { force: true });
