var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'), //minify css
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  del = require('del'),
  concat = require('gulp-concat'),
  merge = require('merge-stream');

var sourceFolder = 'src/';
var nodeModulesFolder = 'node_modules/';
var targetFolder = 'static/';
var cssTargetFolder = targetFolder + 'css/';

var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('createCss', function () {
  var sassStream = gulp.src(sourceFolder + 'sass/*.scss')
    .pipe(plumber(plumberErrorHandler))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(gulp.dest(cssTargetFolder))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS());

  var additionalCssFiles = gulp.src([
    nodeModulesFolder + 'bootstrap/dist/css/bootstrap.min.css',
    nodeModulesFolder + 'font-awesome/css/font-awesome.min.css'
  ]);

  //bootstrap needs to be before edinburgh, because edinburgh overrides bootstrap's styles.
  //But merge-streams doesn't allow to define the order.
  //Fortunately, the order is correct. But keep an eye on it.
  merge(additionalCssFiles, sassStream)
    .pipe(concat('mergedStyles.min.css'))
    .pipe(gulp.dest(cssTargetFolder));
});

gulp.task('clean', function () {
  return del([targetFolder]);
});

gulp.task('concatJs', function () {
  // npm's highlightjs contains ALL languages. Result: 464 KB!
  // Instead, use my customized package having 42 KB.
  return gulp.src([
    nodeModulesFolder + 'jquery/dist/jquery.min.js', //first jquery, then bootstrap
    nodeModulesFolder + 'bootstrap/dist/js/bootstrap.min.js',
    sourceFolder + 'dep/highlight.pack.min.js'
  ])
    .pipe(concat('mergedScripts.min.js'))
    .pipe(gulp.dest(targetFolder + "js"));
});

gulp.task('copyFonts', function () {
  return gulp.src([
    nodeModulesFolder + 'bootstrap/dist/fonts/*',
    nodeModulesFolder + 'font-awesome/fonts/*'
  ])
    .pipe(gulp.dest(targetFolder + "/fonts"));
});

gulp.task('copyImages', function () {
  return gulp.src(sourceFolder + 'img/*')
    .pipe(gulp.dest(targetFolder + "/img"));
});

gulp.task('copyFavicon', function () {
  return gulp.src(sourceFolder + 'favicon.ico')
    .pipe(gulp.dest(targetFolder));
});

gulp.task('watch', ['build'], function () {
  gulp.watch(sourceFolder + 'sass/*.scss', ['createCss']);
});

gulp.task('build', ['createCss', 'concatJs', 'copyFonts', 'copyImages', 'copyFavicon']);
