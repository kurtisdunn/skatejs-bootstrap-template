var build = require('./build');
var gulp = require('gulp');

var gulpBabel = require('gulp-babel');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var clear = require('clear');


require("babel-core/register")({
  presets: ['es2015']
});
require.extensions['.scss'] = () => {
  return;
};


gulp.task('buildTests', function () {
  return gulp.src('./tests/*.js')
  .pipe(shell('printf "\033c"'))
  .pipe(gulpBabel())
  .pipe(gulp.dest('built-tests'));
});

gulp.task('mocha', function(){
  return gulp.src('./built-tests/unit.js', { read:false })
  .pipe(mocha({ ui:'bdd' }))
  .on('error', function(e){ console.log(e); })
});

gulp.task('watch', function(){
  return gulp.watch(['./tests/*.js', 'src/**']).on('change', gulp.series('buildTests', 'mocha'));
});

module.exports = gulp.series('buildTests', 'mocha', 'watch');
