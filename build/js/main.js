/** Порядок подключения JS-модулей */

'use strict';

var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

[].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
  new IMask(input, maskOptions);
});

'use strict';
(function () {
  var MOBILE_WIDTH = 767;
  var KeyCode = {
    ESC: 27
  };

  var body = document.querySelector('body');
  var menu = document.querySelector('.main-nav');
  var burger = menu.querySelector('.main-nav__burger');
  var menuWrapper = menu.querySelector('.main-nav__wrapper');
  var menuList = menu.querySelector('.main-nav__list');
  var closeButton = menu.querySelector('.main-nav__close-btn');

  body.classList.remove('no-js');

  var showMenu = function () {
    body.classList.remove('closed-menu');
    body.classList.add('opened-menu');
    menuWrapper.classList.remove('visually-hidden');
    menuList.classList.remove('visually-hidden');
  };

  var hideMenu = function () {
    body.classList.remove('opened-menu');
    body.classList.add('closed-menu');
    menuWrapper.classList.add('visually-hidden');
    menuList.classList.add('visually-hidden');
  };

  var onEscKeyDown = function (evt) {
    if (evt.keyCode === KeyCode.ESC) {
      hideMenu();
      document.removeEventListener('keydown', function (e) {
        onEscKeyDown(e);
      });
    }
  };

  var onWindowChange = function () {
    if (document.body.offsetWidth <= MOBILE_WIDTH || document.documentElement.offsetWidth <= MOBILE_WIDTH) {
      hideMenu();
    } else {
      showMenu();
    }
  };

  document.addEventListener('DOMContentLoaded', onWindowChange);
  window.addEventListener('resize', onWindowChange);

  burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    showMenu();
    document.addEventListener('keydown', function (e) {
      onEscKeyDown(e);
    });
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    hideMenu();
  });

  window.mainNav = {
    hideMenu: hideMenu,
    showMenu: showMenu,
    tabletWidth: MOBILE_WIDTH
  };

})();

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

