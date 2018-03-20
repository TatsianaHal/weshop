'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
			notify = require("gulp-notify"),
			plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      svgSprite = require('gulp-svg-sprite'),
      concat = require('gulp-concat');

			gulp.task('sass', function() {
          return gulp.src('src/scss/*.scss') // Берем источник
          .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
          .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 3 versions', "> 2%"],
            cascade: false
          }))
          .pipe(gulp.dest('src/css'))
          .pipe(notify('Sass is compile!'));
      });

      gulp.task('pug', function() {
        return gulp.src('src/pug/*.pug')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    		.pipe(pug({pretty: '\t'}))
    		.pipe(gulp.dest("./"))
    		.pipe(notify('Pug is compile!'));
      });

      gulp.task('scripts', function() {
        return gulp.src('src/js/*.js')
    		.pipe(concat(all.js))
    		.pipe(gulp.dest("./"));
      });

			gulp.task('watch', function(){
				gulp.watch('src/scss/*.scss', ['sass']);
        gulp.watch('src/pug/*.pug', ['pug']);
      });
      
      gulp.task('svg-sprite', function(){
        return gulp.src('src/svg/*.svg')
				.pipe(svgSprite(config))
    		.pipe(gulp.dest("src"));
			});

      gulp.task('default', ['sass', 'pug', 'watch']);