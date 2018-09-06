var gulp = require('gulp')
var postcss = require('gulp-postcss')
var px2rem = require('postcss-px2rem')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
  
gulp.task('default', function(){
  var processors = [
    px2rem({remUnit: 75}),
    autoprefixer(),
    cssnano()
  ];
  return gulp.src('./src/css/mobile.css')    //输入路径
    .pipe( postcss(processors) )  //转换
    .pipe( gulp.dest('./dist/css') )   //输出路径
})