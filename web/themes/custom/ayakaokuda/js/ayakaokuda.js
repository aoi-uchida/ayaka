(function ($, Drupal) {

  Drupal.behaviors.ayakaokuda = {
    attach: function (context, settings) {
      // global variant
      var scrT;
      var $navi = $('.nav.top', context);
      var naviT = $navi.offset().top;
      // 1. Smooth Scroll
      $(window).load(function () {
        $('a[href*="#"]', context).click(function () {
          var speed = 400;
          var href = $(this).attr('href');
          var target = $(href === '#' || href === '' ? 'html' : href);
          var position = target.offset().top;
          $('body, html', context).animate({scrollTop: position}, speed, 'swing');
          return false;
        });
      });
      // 2. global-navigation
      function naviPosition() {
        scrT = $(window).scrollTop();
        if (scrT > naviT) {
          $navi.addClass('navi-position');
        }
        else {
          $navi.removeClass('navi-position');
        }
      }
      $(window).on('scroll', naviPosition);

      // 3. mfp - pop up google maps]
      $(function(){
        $('.popup-image').magnificPopup({
          type: 'image'
        });
      });
      $('a.g-maps').on('mouseover', function(){
        $(this).magnificPopup({
          items: { src: $(this).parent().siblings('.mfp-hide') },
          type: 'inline',
          closeBtnInside: false
        });
      });
    }
  };
})(jQuery, Drupal);
