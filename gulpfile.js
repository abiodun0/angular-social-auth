var gulp = require('gulp'),
 concat = require('gulp-concat'),
 uglify = require('gulp-uglify'),
 rename = require('gulp-rename'),
 source = require('vinyl-source-stream'),
 browserify = require('browserify'),
 babelify = require('babelify')


 path = {
    dist: {
        js:'./dist/js'

        },
    src: {
        mainJs: './src/app.js',
        prodJs: './src/app-production.js'
    }
 };

 gulp.task('script-dev', function(){
    browserify({
    entries: path.src.mainJs,
    debug: true,
    })
      .transform(babelify, { presets: ['es2015'] })
      .bundle()
      .pipe(source('social_auth.js'))
      .pipe(gulp.dest(path.dist.js))
});

gulp.task('script-prod', function(){
    browserify({
    entries: path.src.prodJs,
    debug: true,
    })
      .transform(babelify, { presets: ['es2015'] })
      .bundle()
      .pipe(source('social_auth.js'))
      .pipe(gulp.dest(path.dist.js))
});