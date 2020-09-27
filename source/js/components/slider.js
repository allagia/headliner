'use strict';

(function () {

  var swiper = new Swiper('.slider__container', {
    // autoHeight: true,
    spaceBetween: '50%',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    // breakpoints: {
    //   1281: {
    //     spaceBetween: 140
    //   },

    //   768: {
    //     spaceBetween: 125
    //   },

    //   320: {
    //     spaceBetween: 40
    //   }
    // }
  });
})();
