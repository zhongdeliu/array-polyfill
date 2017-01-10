var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var pump = require('pump');

gulp.task('js', function (cb) {
	pump([
			gulp.src('src/*.js'),
			concat('array-polyfill.js'),
			uglify({}),
			header('/*!\n * <%= pkg.description %>\n * Version: <%= pkg.version %>\n * Copyright (c) <2014> <%= pkg.author %>\n * License: <%= pkg.license %>\n*/\n', {
				pkg: require('./package.json')
			}),
			gulp.dest('./')
		],
		cb
	);
});
