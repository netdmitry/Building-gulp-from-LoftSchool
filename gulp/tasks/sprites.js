"use strict";

module.exports = function() {
  $.gulp.task('sprites', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        imgPath: '../img/sprite.png',
        cssName: 'sprite.scss',
        padding: 20
      }));
    spriteData.img.pipe($.gulp.dest('./sourse/images'));
    spriteData.css.pipe($.gulp.dest('./sourse/style/common'));

    return spriteData;
  });
};