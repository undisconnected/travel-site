var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("this is my first gulp task!");
})

gulp.task('html', function(){
  console.log("Add something cool in HTML!");
})

gulp.task('styles', function(){
  console.log("T'a le styles bébé!");
})

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  })

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })

})
