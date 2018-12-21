var fileinclude = require('gulp-file-include'),
	gulp = require('gulp');


gulp.task('fileinclude', function () {
	gulp.src(['*.html', '!_*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./build'));
});



gulp.task('watch', function () {
	gulp.watch('*.html', [fileinclude])

})