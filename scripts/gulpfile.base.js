import gulp from 'gulp'
import gulpCssmin from 'gulp-cssmin'
import gulpClean from 'gulp-clean'

/**
 * 打包配置
 */
export const config = {
  input: '../packages/styles/',
  output: '../dist/packages/styles'
}

/**
 * 复制字体
 */
export const copyfont = () => gulp.src([`${config.input}fonts/*`, `!${config.input}fonts/*.css`]).pipe(gulp.dest(`${config.output}/fonts`))

/**
 * 压缩 `font` 里的 CSS
 */
export const minifontCss = () =>
  gulp
    .src(`${config.input}fonts/*.css`)
    .pipe(gulpCssmin())
    .pipe(gulp.dest(`${config.output}/fonts`))

/**
 * 删除之前 CSS 打包文件
 */
export const clean = () => gulp.src(config.output, { allowEmpty: true }).pipe(gulpClean({ force: true }))
