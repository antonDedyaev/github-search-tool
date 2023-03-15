import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

const scss = () => global.app.gulp.src(global.app.path.src.scss, { sourcemaps: true })
  .pipe(global.app.plugins.plumber(
    global.app.plugins.notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(sass({
    outputStyle: 'expanded',
  }))
  .pipe(groupCssMediaQueries())
  .pipe(autoPrefixer({
    grid: true,
    overrideBrowserlist: ['last 3 versions'],
    cascade: true,
  }))
  // .pipe(global.app.gulp.dest(global.app.path.build.css))
  .pipe(GulpCleanCss())
  .pipe(rename({
    extname: '.min.css',
  }))
  .pipe(global.app.gulp.dest(global.app.path.build.css))
  .pipe(global.app.plugins.browserSync.stream());

export default scss;
