var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnested = require('postcss-nested')
var browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

// Tarea para post-procesar el CSS y sincroniza el navegador
gulp.task('css', function () {


  // Utiliza los autoprefixers de los navegadores con mas de 5% de uso
  // y de internet explorer 8 en adelante
  var processors = [
    autoprefixer({ browsers: ['> 5%', 'ie 8'] }),
    cssnested
  ]

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios que ocurran en el CSS y el HTML
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

// Unificando la ejecucion de las tareas definidas arriba
gulp.task('default', ['watch', 'serve'])