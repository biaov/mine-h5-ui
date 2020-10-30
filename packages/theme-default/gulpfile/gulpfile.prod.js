const { src, dest, series, parallel } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
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
      autoprefixer({
        overrideBrowserslist: ["ie > 9", "last 2 versions"]
      })
    )
    .pipe(cssmin())
    .pipe(dest("../lib"));
exports.build = series(clean, parallel(compile, copyfont, minifontCss));
