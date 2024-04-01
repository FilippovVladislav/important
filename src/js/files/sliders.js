/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Navigation, Pagination, A11y, EffectFade, Autoplay, Thumbs} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

import "../../scss/base/swiper.scss";

//слайдер главной галлереи
if(document.querySelector('.swiper-index')){
  const sliderIndex = new Swiper('.swiper-index', {
    modules: [EffectFade, Navigation, Pagination, A11y, Autoplay],
    a11y: true,
    autoHeight: true,
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

//слайдер для карточке в ряд по 3 - 4 - 5
if(document.querySelector('.product-swiper')){

  document.querySelectorAll('.product-swiper').forEach((item) => {
    if(item.classList.contains('product-swiper-neighbour')){
      sliderThreeElementDesktop(item)
    } else if(item.classList.contains('product-swiper-five')){
      sliderFiveElementDesktop(item)
    }else{
      sliderFourElementDesktop(item);
    }
  })
}

function sliderThreeElementDesktop(item){

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
        slidesPerView: 4,
        spaceBetween: 16,
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      }
    }
  })
}
function sliderFourElementDesktop(item){
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
      },

    }
  })
}
function sliderFiveElementDesktop(item){
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
        slidesPerView: 4,
        spaceBetween: 16,
      },
      950: {
        slidesPerView: 5,
        spaceBetween: 16,
      }
    }
  })
}

//слайдер карточки товара с миниатюрами
if(document.querySelector('.product-gallery')){
  const swiperSmall = new Swiper('.gallery-small', {
    modules: [A11y, Navigation],
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    navigation: {
      nextEl: '.product-gallery .swiper-next'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      410: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      750: {
        spaceBetween: 10,
        slidesPerView: 4
      },
      950: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 10,
        slidesPerView: 4
      }
    }
  })
  const swiperBig = new Swiper('.gallery-big', {
    modules: [Thumbs],
    thumbs: {
      swiper: swiperSmall,
    },
  })
}