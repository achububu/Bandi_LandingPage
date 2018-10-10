var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// multiple file js into single file
gulp.task('pack-js', function () {
  return gulp.src(['app/js/main.js', 'app/js/module-*.js'])
      .pipe(concat('bundle.js'))
      .pipe(minify())
      .pipe(gulp.dest('dist/js'));
});

// multiple file css into single file
gulp.task('pack-css', function () {
  return gulp.src(['app/css/main.css', 'app/css/custom.css'])
      .pipe(concat('stylesheet.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);