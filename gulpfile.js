var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port: 8888,
        root: ['bower_components', 'public'],
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./public/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);