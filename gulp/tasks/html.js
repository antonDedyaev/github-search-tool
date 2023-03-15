import fileinclude from 'gulp-file-include';

const html = () => global.app.gulp.src(global.app.path.src.html)
  .pipe(global.app.plugins.plumber(
    global.app.plugins.notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(fileinclude())
  .pipe(global.app.gulp.dest(global.app.path.build.html))
  .pipe(global.app.plugins.browserSync.stream());

export default html;
