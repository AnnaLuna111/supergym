// Swiper 7.4.1
import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

const teamSlider = new Swiper('.team__swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.team__next-btn',
    prevEl: '.team__prev-btn',
  },

  maxBackfaceHiddenSlides: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
  },
});

const feadbackSlider = new Swiper('.feadback__swiper', {
  cssMode: true,
  direction: 'horizontal',

  navigation: {
    nextEl: '.feadback__next-btn',
    prevEl: '.feadback__prev-btn',
  },
});

teamSlider.init();
feadbackSlider.init();
