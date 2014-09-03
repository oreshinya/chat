var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var brfs       = require("brfs");

gulp.task('build', function(){
  return browserify('./frontend/index.js')
  .transform(brfs)
  .bundle()
  .pipe(source('browserified.js'))
  .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('watch', ["build"], function(){
  gulp.watch(['gulpfile.js', './frontend/**/*.js', './frontend/**/*.html'], ['build']);
});
