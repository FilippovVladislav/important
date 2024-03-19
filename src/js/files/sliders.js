/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Navigation, Pagination, A11y, EffectFade, Autoplay} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов

if(document.querySelector('.swiper-index')){
  const sliderIndex = new Swiper('.swiper-index', {
    modules: [EffectFade, Navigation, Pagination, A11y, Autoplay],
    a11y: true,
    autoplay: {
      delay: 10000
    },
    effect: "fade",
    loop: true,
    fadeEffect: true,
    navigation: {
      nextEl: ".swiper-navigation-index .swiper-navigation-next",
      prevEl: ".swiper-navigation-index .swiper-navigation-prev",
    },
    pagination: {
      el: ".swiper-index .swiper-pagination",
      clickable: true,
    },
  })
}

if(document.querySelector('.product-swiper')){
  document.querySelectorAll('.product-swiper').forEach((item) => {
    let sliderProduct = new Swiper(item, {
      modules: [Navigation, Pagination, A11y],
      a11y: true,
      loop: true,
      navigation: {
        nextEl: item.closest('.product-block-slider').querySelector('.swiper-navigation-next'),
        prevEl: item.closest('.product-block-slider').querySelector('.swiper-navigation-prev'),
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        950: {
          slidesPerView: 4,
          spaceBetween: 16,
        }
      }
    })
  })
}