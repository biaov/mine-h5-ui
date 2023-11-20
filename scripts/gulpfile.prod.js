import gulp from 'gulp'
import gulpLess from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import cssmin from 'gulp-cssmin'
import { clean, copyfont, minifontCss, config } from './gulpfile.base.js'

const { src, dest, series, parallel } = gulp
const { input, output } = config

/**
 * 编译 LESS
 */
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

/**
 * 打包
 */
export const build = series(clean, parallel(compile, copyfont, minifontCss))
