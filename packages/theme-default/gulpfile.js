const { series, src, dest, parallel } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const del = require("del");
/**
 * 编译less
 * @param {Void}
 * @returns {Void}
 */
const compile = () =>
  src("./src/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["ie > 9", "last 2 versions"]
      })
    )
    .pipe(cssmin())
    .pipe(dest("./lib"));
/**
 * 复制字体
 * @param {Void}
 * @returns {Void}
 */
const copyfont = () =>
  src(["./src/fonts/*", "!./src/fonts/*.css"]).pipe(dest("./lib/fonts"));
/**
 * 压缩font 里的 CSS
 * @param {Void}
 * @returns {Void}
 */
const minifontCss = () =>
  src("./src/fonts/*.css")
    .pipe(cssmin())
    .pipe(dest("./lib/fonts"));
/**
 * 删除之前文件
 * @param {Void}
 * @returns {Void}
 */
const clean = () => del(["./lib"], { force: true });

exports.build = series(clean, parallel(compile, copyfont, minifontCss));
