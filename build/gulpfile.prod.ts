const { src, dest, series, parallel } = require('gulp')
const gulpLess = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

const {
  clean,
  copyfont,
  minifontCss,
  config: { input, output }
} = require('./gulpfile.base.ts') // 基础方法
// 编译 LESS
const compile = () =>
  src([`${input}*.less`, ...['base', 'variable'].map(name => `!${input}${name}.less`)])
    .pipe(gulpLess())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions']
      })
    )
    .pipe(cssmin())
    .pipe(dest(output))
exports.build = series(clean, parallel(compile, copyfont, minifontCss))
