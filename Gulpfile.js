var gulp = require('gulp'), 
				gutil = require('gulp-util'),
				sass = require('gulp-sass'), 
				csso = require('gulp-csso'), 
				uglify = require('gulp-uglify'), 
				concat = require('gulp-concat'), 
				livereload = require('gulp-livereload'), 
				tinylr = require('tiny-lr'),
				path = require('path'),
				neat = require('node-neat').includePaths,
				browserSync = require('browser-sync'),
				jade = require('gulp-jade'), 
				server = tinylr();

var paths = {
	scss: 'assets/scss/*.scss'	, 
	js: 'assets/js/*.js', 
	jade: 'assets/templates/*.jade', 
	cssdist: 'dist/css', 
	jsdist: 'dist/js', 
	root: 'dist/'
};

//SCSS / CSS
gulp.task('styles',function(){
	return gulp.src(paths.scss)
		.pipe(sass({
			includePaths: ['styles'].concat(neat), 
			errLogToConsole: true
		}))
		.pipe( csso() )
		.pipe( gulp.dest(paths.cssdist) )
		.pipe( livereload(server) );
});

//Uglify JS
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe( uglify() )
    .pipe( concat('all.min.js') )
    .pipe( gulp.dest(paths.jsdist) )
    .pipe( livereload(server) );
});

//Jade HTML
gulp.task('jadetemplates', function(){
	return gulp.src(paths.jade)
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist'))
		.pipe( livereload(server) );
});

//Browser Sync
gulp.task('browser-sync',function(){
	browserSync.init(["dist/css/*.css", "dist/js/*.js", "dist/*.html"], {
		server: {
			baseDir: "./dist/"
		}
	});
});

//Gulp Watch, init browser sync and scss->css
gulp.task('watch', ['styles', 'scripts', 'jadetemplates', 'browser-sync'], function(){
	gulp.watch([paths.scss, "assets/scss/base/*.scss", "assets/scss/sections/*.scss", "assets/scss/style/*.scss"], ['styles']);
	gulp.watch([paths.js],['scripts']);
	gulp.watch([paths.jade],['jadetemplates']);
});
