const gulp = require('gulp')
const gulpCssmin = require('gulp-cssmin')
const gulpClean = require('gulp-clean')

// 打包配置
const config = {
  input: '../packages/theme-default/',
  output: '../dist/packages/lib/theme-default'
}

exports.config = config // 导出配置项

exports.copyfont = () => gulp.src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`]).pipe(gulp.dest(`${config.output}/fonts`)) // 复制字体

// 压缩font 里的 CSS
exports.minifontCss = () =>
  gulp
    .src(`${config.input}fonts/*.css`)
    .pipe(gulpCssmin())
    .pipe(gulp.dest(`${config.output}/fonts`))

// 删除之前css打包文件
exports.clean = () => gulp.src(config.output, { allowEmpty: true }).pipe(gulpClean({ force: true }))
