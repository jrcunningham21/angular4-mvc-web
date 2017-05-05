/// <binding />
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

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task('scriptsNStyles', function () {
    gulp.src([
        'core-js/client/*.js',
        'systemjs/dist/*.js',
        'reflect-metadata/*.js',
        'rxjs/**',
        'zone.js/dist/*.js',
        '@angular/**/bundles/*.js',
        'bootstrap/dist/js/*.js',
        'primeng/**'
    ], {
            cwd: 'node_modules/**'
        })
        .pipe(gulp.dest('./libs'));
});

var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
        "tsScripts/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/*.ts', ['ts']);
});

//// Task: Bundle Scripts
//gulp.task('concatScripts', function (){
//    gulp.src(paths.js)
//        .pipe(concat(concatJsFileName))
//        .pipe(gulp.dest(paths.concatjs));

//    console.log('CONCAT SCRIPTS COMPLETED');
//});

//// Task: Minify Scripts
//gulp.task('minifyScripts', function () {
//    // Minify
//    gulp.src('Scripts/concatjs/*js')
//        .pipe(uglify())
//        .pipe(gulp.dest(paths.minjs));

//    console.log('MINIFY SCRIPTS COMPLETED');
//});

//// Task: Change JS Extensions
//gulp.task('changeJsExtensions', function () {
//    // Change Ext   
//    gulp.src('Scripts/minjs/app.js')
//        .pipe(ext_replace('.min.js'))
//        .pipe(gulp.dest('Scripts/minjs'));

//    console.log('EXTENSION CHANGE ON SCRIPTS COMPLETED');
//});

gulp.task('default', [/*'scriptsNStyles', */'watch']);

//gulp.task('default', function () {
//    // place code for your default task here
//});