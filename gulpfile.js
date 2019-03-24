var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

//Generar los archivos .css en la carpeta 'public/stylesheets'
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
});

//Generar un archivo .css con todas las reglas definidas en la carpeta 'public/stylesheets'
gulp.task('style', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('mrtraner_style.css'))
        .pipe(gulp.dest('public/stylesheets'))
});

//Generar un archivo minificado .css con todas las reglas definidas en la carpeta 'public/stylesheets'
gulp.task('style_min', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('mrtraner_style.min.css'))
        .pipe(gulp.dest('public/stylesheets'))
});

//Ejecutar tarea 'style_min' si existen cambios en los archivos .scss de la carpeta 'scss'
gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss',
    gulp.series('style_min'));
});
