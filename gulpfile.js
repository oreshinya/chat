var gulp       = require('gulp');
var browserify = require('browserify');
var partialify = require('partialify');
var source     = require('vinyl-source-stream');
var glob       = require('glob');

gulp.task('build', function(){
  //var files = glob.sync('./frontend/**/*.js');
  //return browserify(files).transform(partialify)
  return browserify('./frontend/index.js').transform(partialify)
                          .bundle()
                          .pipe(source('browserified.js'))
                          .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('watch', ["build"], function(){
  gulp.watch(['gulpfile.js', './frontend/**/*.js', './frontend/**/*.html'], ['build']);
});
