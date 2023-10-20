const gulp = require('gulp')
const gulpCssmin = require('gulp-cssmin')
const gulpClean = require('gulp-clean')

/**
 * 打包配置
 */
const config = {
  input: '../packages/styles/',
  output: '../dist/packages/styles'
}

/**
 * 导出配置项
 */
exports.config = config

/**
 * 复制字体
 */
exports.copyfont = () => gulp.src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`]).pipe(gulp.dest(`${config.output}/fonts`))

/**
 * 压缩 `font` 里的 CSS
 */
exports.minifontCss = () =>
  gulp
    .src(`${config.input}fonts/*.css`)
    .pipe(gulpCssmin())
    .pipe(gulp.dest(`${config.output}/fonts`))

/**
 * 删除之前 CSS 打包文件
 */
exports.clean = () => gulp.src(config.output, { allowEmpty: true }).pipe(gulpClean({ force: true }))
