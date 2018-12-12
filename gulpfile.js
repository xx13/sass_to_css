var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nano = require('gulp-cssnano');


var input = '*.sass';
var output = './css/';

gulp.task('sass', function(){
    return gulp.src(input)
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 4 versions'],
        grid: ['autoplace']
    }))
    .pipe(nano())
    .pipe(gulp.dest(output))
});