var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require('gulp-sass-glob');
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");
var webserver = require('gulp-webserver');

// 監視
gulp.task( "default", function(){
  gulp.watch("sass/**/*.scss", gulp.series("sass")); // sassディレクトリ以下の.scssファイルの更新を監視
  gulp.watch("ejs/**/*.ejs", gulp.series("ejs")); // ejsディレクトリ以下の.ejsファイルの更新を監視
  gulp.src('dist/')
    .pipe(webserver({
      port: 9000
    }));
});

// Sass
gulp.task( "sass", function() {
  return gulp
    .src('sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// EJS
gulp.task("ejs", (done) => {
  gulp
    .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html"}))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
    .pipe(gulp.dest("dist"));
  done();
});
