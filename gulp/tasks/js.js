import webpack from 'webpack-stream';

const js = () => global.app.gulp.src(global.app.path.src.js, { sourcemaps: true })
  .pipe(global.app.plugins.plumber(
    global.app.plugins.notify.onError({
      title: 'JS',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'app.min.js',
    },
  }))
  .pipe(global.app.gulp.dest(global.app.path.build.js))
  .pipe(global.app.plugins.browserSync.stream());

export default js;
