const { series, src, dest } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
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
  src("./src/fonts/**")
    .pipe(cssmin())
    .pipe(dest("./lib/fonts"));

exports.build = series(compile, copyfont);
