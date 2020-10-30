const { src, dest, series } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("autoprefixer");
const cssmin = require("gulp-cssmin");
const postcss = require("gulp-postcss");
const pxtorem = require("postcss-pxtorem");
const { clean, copyfont, minifontCss } = require("./gulpfile.base"); // 基础方法
/**
 * 编译less
 * @param {Void}
 * @returns {Void}
 */
const compile = () =>
  src("../src/*.less")
    .pipe(less())
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ["ie > 9", "last 2 versions"]
        }),
        pxtorem({
          replace: true
        })
      ])
    )
    .pipe(cssmin())
    .pipe(dest("../lib"));

exports.build = series(clean, parallel(compile, copyfont, minifontCss));
