/// <binding AfterBuild='default' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

//Using package to concat files 
//var concat = require("gulp-concat");
////Using package to minifying files 
//var uglify = require("gulp-uglify");
////Using package to minifying files 
//var ext_replace = require("gulp-ext-replace");

//var destPath = './libs/';

// Delete the dist directory
//gulp.task('clean', function () {
//    return gulp.src(destPath)
//        .pipe(clean());
//});

//gulp.task('scriptsNStyles', function () {
//    gulp.src([
//        //'core-js/client/*.js',
//        //'systemjs/dist/*.js',
//        //'rxjs/**',
//        //'zone.js/dist/*.js',
//        //'@angular/**/bundles/*.js',
//        //'bootstrap/dist/js/*.js',
//        //'primeng/**',
//        'angular2-spotify/**'
//    ], {
//            cwd: 'node_modules/**'
//        })
//        .pipe(gulp.dest('./libs'));
//});

var tsProject = ts.createProject('Scripts/app/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    var tsResult = gulp.src([
        "Scripts/app/*.ts"
    ])
    .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('Scripts/app/*.ts', ['ts']);
});

gulp.task('default', ['ts']);