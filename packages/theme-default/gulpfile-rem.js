"use strict";

const { series, src, dest } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("autoprefixer");
const cssmin = require("gulp-cssmin");
const postcss = require("gulp-postcss");
const pxtorem = require("postcss-pxtorem");
function compile() {
  let processors = [
    autoprefixer({
      overrideBrowserslist: ["ie > 9", "last 2 versions"]
    }),
    pxtorem({
      replace: true
    })
  ];
  return src("./src/*.less")
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(dest("./lib"));
}

function copyfont() {
  return src("./src/fonts/**")
    .pipe(cssmin())
    .pipe(dest("./lib/fonts"));
}

exports.build = series(compile, copyfont);
