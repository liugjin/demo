// 加载插件
var gulp = require('gulp'),
	//压缩css
	minifycss = require('gulp-minify-css'),
	//压缩js
	uglify = require('gulp-uglify'),
	//压缩图片
	imagemin = require('gulp-imagemin'),
	//文件改名
	rename = require('gulp-rename'),
	//多个文件合并
	concat = require('gulp-concat'),
	//自动刷新浏览器
	livereload = require('gulp-livereload');

// css
gulp.task('css', function () {
	return gulp.src('src/css/**/*.css')
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('dist'))
});
// script
gulp.task('script', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
});
// images
gulp.task('img', function () {
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
});
// 默认任务
gulp.task('default', function () {
	gulp.start('css', 'script', 'img', 'watch');
});

// 监视
gulp.task('watch', function () {
	// 监视css文件的改动
	gulp.watch('src/css/**/*.css', ['css']);
	// 监视js文件的改动
	gulp.watch('src/js/**/*.js', ['script']);
	// 监视images文件的改动
	gulp.watch('src/images/*', ['images']);
	// 创建浏览器自动刷新服务器
	livereload.listen();
	// dist目录下文件有改动就会浏览器刷新
	gulp.watch(['dist/**/*.*']).on('change', livereload.changed);
});