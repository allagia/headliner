'use strict';

(function () {

  var swiper = new Swiper('.slider__container', {
    spaceBetween: '50%',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
})();
