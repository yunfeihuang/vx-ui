'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var fs = require('fs')
var path = require('path')

gulp.task('compile', function() {
  return gulp.src('./src/theme/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      //browsers: ['ie > 9', 'last 2 versions'],
      overrideBrowserslist: ['> 0.15% in CN'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('../../../lib/style/theme'));
});
gulp.task('copythemesrc', function() {
  return gulp.src('./src/**')
    .pipe(gulp.dest('../../../lib/style/src'));
});
/*
gulp.task('copyfont', function() {
  return gulp.src('./src/iconfont/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../../lib/style/iconfont'));
});
*/
gulp.task('build', gulp.series('compile', 'copythemesrc', done => done()))
/*
gulp.task('build', ['compile', 'copythemesrc'], function () {
  let dir = '../../../lib/style/src/theme'
  fs.readdir(dir, function (err,files) {
    files.forEach(function(filename){
      var fileDir = path.join(dir, filename);
      var content = fs.readFileSync(fileDir, 'utf-8');
      fs.writeFileSync(fileDir, content.replace("@import '../variable.scss';", '').replace("@import '../mixins.scss';", ''))
    });
  });
});
*/