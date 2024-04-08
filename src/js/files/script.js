// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";
import * as noUiSlider from 'nouislider/dist/nouislider.js';
import {Fancybox} from "@fancyapps/ui";

//header

let lastScrollTop = 0;
window.addEventListener('scroll', function (e) {
    let currentLastScrollTop = getBodyScrollTop();
    if (currentLastScrollTop > lastScrollTop) {
        document.body.classList.remove('scroll-top')
        document.body.classList.add('scroll-down')
    } else {
        document.body.classList.add('scroll-top')
        document.body.classList.remove('scroll-down')
    }
    lastScrollTop = currentLastScrollTop;
})

//filter and sort
if (document.querySelector('.sidebar-filter')) {

    //button all categories
    document.querySelectorAll('.filter-all-show').forEach((item) => {
        item.addEventListener('click', function () {
            if (item.closest('.filter-item').classList.contains('active')) {
                item.closest('.filter-item').classList.remove('active');
                item.innerHTML = 'Показать больше';
            } else {
                item.closest('.filter-item').classList.add('active');
                item.innerHTML = 'Скрыть';
            }
        })
    })

    //input checkbox clock
    document.addEventListener('click', function (e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox') {
            let positionElement = e.target.getBoundingClientRect(),
                elementWidth = e.target.closest('.filter-item').clientWidth,
                positionLeft = positionElement.left + elementWidth,
                positionTop = positionElement.top;

            document.querySelector('.sidebar-btn-apply').classList.add('active');
            document.querySelector('.sidebar-btn-apply').style.top = positionTop + 'px';
            document.querySelector('.sidebar-btn-apply').style.left = positionLeft + 'px';
        }
    })

    //noUiSlider Price
    let slider = document.getElementById('slider'),
        sliderInputStart = document.getElementById('slider-input-start'),
        sliderInputEnd = document.getElementById('slider-input-end'),
        sliderInputStartValue = Number(sliderInputStart.getAttribute('data-price-min')),
        sliderInputEndValue = Number(sliderInputEnd.getAttribute('data-price-max'));

    noUiSlider.create(slider, {
        start: [sliderInputStartValue, sliderInputEndValue],
        connect: true,
        step: 1,
        range: {
            'min': sliderInputStartValue,
            'max': sliderInputEndValue
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {
        sliderInputStart.value = 'от ' + Math.ceil(values[0]) + `₽`;
        sliderInputEnd.value = 'до ' + Math.ceil(values[1]) + `₽`;
    });

    sliderInputStart.addEventListener('focus', () => {
        sliderInputStart.value = sliderInputStart.value.replace(/[^+\d]/g, '')
    })

    sliderInputEnd.addEventListener('focus', () => {
        sliderInputEnd.value = sliderInputEnd.value.replace(/[^+\d]/g, '')
    })

    sliderInputStart.addEventListener('change', function () {
        slider.noUiSlider.set([this.value, null]);
    });

    sliderInputEnd.addEventListener('change', function () {
        slider.noUiSlider.set([null, this.value]);
    });

    //filter mobile
    document.querySelector('.filter-button-mobile').addEventListener('click', function () {
        document.body.classList.add('filter-active')
    })

    document.querySelector('.filter-close-btn-mobile').addEventListener('click', function () {
        document.body.classList.remove('filter-active')
    })

}

//product

if (document.querySelector('.product-event__add')) {
    document.querySelectorAll('.product-event__add .button-orange-light, .product-event__add .button-orange').forEach((item) => {
        item.addEventListener('click', function () {
            if(item.closest('.product-main-event__button')){
                document.querySelectorAll('.product-main-event__button .product-event__add').forEach((element) => {
                    element.closest('.product-event__add').classList.add('active');
                    editCountProduct(element.closest('.product-event__add'));
                })
            }else{
                item.closest('.product-event__add').classList.add('active');
                editCountProduct(item.closest('.product-event__add'));
            }

        })
    })
}

//добавляем счетчик на кнопке корзина
function editCountProduct(container) {
    let indexProduct = 1;
    container.querySelector('.product-event__count-size span').innerHTML = Number(1)
    container.querySelector('.product-event__sign-minus').onclick = function () {
        if(container.closest('.product-main-event__button') !== null){
            indexProduct = indexProduct - 1
            document.querySelectorAll('.product-main-event__button .product-event__add').forEach((element) => {
                element.querySelector('.product-event__count-size span').innerHTML = indexProduct;
                if (container.querySelector('.product-event__count-size span').innerHTML <= 0) {
                    element.classList.remove('active')
                    element.querySelector('.product-event__count-size span').innerHTML = Number(0);
                }
            })
        }else {
            container.querySelector('.product-event__count-size span').innerHTML = Number(container.querySelector('.product-event__count-size span').innerHTML) - 1
            if (container.querySelector('.product-event__count-size span').innerHTML <= 0) {
                container.classList.remove('active')
                container.querySelector('.product-event__count-size span').innerHTML = Number(0);
            }
        }
    }
    container.querySelector('.product-event__sign-plus').onclick = function () {

        if(container.closest('.product-main-event__button') !== null){
            indexProduct = indexProduct + 1
            document.querySelectorAll('.product-main-event__button .product-event__add').forEach((element) => {
                element.querySelector('.product-event__count-size span').innerHTML = indexProduct;
            })
        }else{
            container.querySelector('.product-event__count-size span').innerHTML = Number(container.querySelector('.product-event__count-size span').innerHTML) + 1;
        }
    }
}

//проверяем, что на странице карточки товара
if (document.querySelector('.product-main-event')) {
    document.body.classList.add('product-page')
}

//выбор товара (если нет в наличие меняем кнопку)
if (document.querySelector('.product-option__item')) {
    document.querySelectorAll('.product-option__item input').forEach((item) => {
        item.addEventListener('change', function () {
            if (item.classList.contains('disabled')) {
                document.body.classList.add('not-product')
            } else {
                document.body.classList.remove('not-product')
            }
        })
    })
}

//header

//кнопка каталог в шапке
if (document.querySelector('.button-catalog')) {
    document.querySelector('.button-catalog').addEventListener('click', function () {
        if (!document.body.classList.contains('catalog-menu-active')) {
            document.body.classList.add('catalog-menu-active')
            clickOutsideContainer('.header-catalog-menu', '.button-catalog', document.body, 'catalog-menu-active')
        } else {
            document.body.classList.remove('catalog-menu-active')
        }
    })
}

//general
function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function clickOutsideContainer(element, trigger, container, className) {
    const div = document.querySelector(element);
    document.addEventListener('mouseup', (e) => {
        const withinBoundaries = e.composedPath().includes(div);
        if (!withinBoundaries && !e.target.closest(trigger)) {
            if (container.tagName === 'BODY') {
                document.body.classList.remove(className)
            } else {
                document.querySelector(container).classList.remove(className)
            }
        }
    })
}

//fancybox init
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//select default
if (document.querySelector('.select-element')) {
    document.querySelector('.select-element__default').addEventListener('click', function () {
        if (document.querySelector('.select-element').classList.contains('active')) {
            document.querySelector('.select-element').classList.remove('active')
        } else {
            document.querySelector('.select-element').classList.add('active');
            clickOutsideContainer('.select-element__items', '.select-element__default', '.select-element', 'active')
        }
        document.querySelector('.select-element').querySelectorAll('input').forEach((item) => {
            item.addEventListener('change', function () {
                let itemId = item.getAttribute('id');
                document.querySelector('.select-element__default').innerHTML = document.querySelector(`[for=${itemId}]`).querySelector('.sort-text').innerHTML
                document.querySelector('.select-element').classList.remove('active')
            })
        })
    })
}

/*
 * Constants
 */

const Default = {
    initialZoom: 3,
    minZoom: 1.25,
    maxZoom: 4,
    zoomSpeed: 0.01
};

/*
 * Class definition
 */

class Zoomable {
    constructor(element, config) {
        this.element = element;
        this.config = this._mergeConfig(config);

        const { initialZoom, minZoom, maxZoom } = this.config;

        this.zoomed = false;
        this.initialZoom = Math.max(Math.min(initialZoom, maxZoom), minZoom);
        this.zoom = this.initialZoom;

        this.img = element.querySelector(".zoomable__img");
        this.img.draggable = false;
        this.element.style.setProperty("--zoom", this.initialZoom);

        this._addEventListeners();
    }

    static get Default() {
        return Default;
    }

    _addEventListeners() {
        this.element.addEventListener("mouseover", () =>
            this._handleMouseover()
        );
        this.element.addEventListener("mousemove", (evt) =>
            this._handleMousemove(evt)
        );
        this.element.addEventListener("mouseout", () => this._handleMouseout());
        this.element.addEventListener("wheel", (evt) => this._handleWheel(evt));

        this.element.addEventListener("touchstart", (evt) =>
            this._handleTouchstart(evt)
        );
        this.element.addEventListener("touchmove", (evt) =>
            this._handleTouchmove(evt)
        );
        this.element.addEventListener("touchend", () => this._handleTouchend());
    }

    _handleMouseover() {
        if (this.zoomed) {
            return;
        }

        this.element.classList.add("zoomable--zoomed");

        this.zoomed = true;
    }

    _handleMousemove(evt) {
        if (!this.zoomed) {
            return;
        }

        const elPos = this.element.getBoundingClientRect();

        const percentageX = `${
            ((evt.clientX - elPos.left) * 100) / elPos.width
        }%`;
        const percentageY = `${
            ((evt.clientY - elPos.top) * 100) / elPos.height
        }%`;

        this.element.style.setProperty("--zoom-pos-x", percentageX);
        this.element.style.setProperty("--zoom-pos-y", percentageY);
    }

    _handleMouseout() {
        if (!this.zoomed) {
            return;
        }

        this.element.style.setProperty("--zoom", this.initialZoom);
        this.element.classList.remove("zoomable--zoomed");

        this.zoomed = false;
    }

    _handleWheel(evt) {
        if (!this.zoomed) {
            return;
        }

        evt.preventDefault();

        const newZoom = this.zoom + evt.deltaY * (this.config.zoomSpeed * -1);
        const { minZoom, maxZoom } = this.config;

        this.zoom = Math.max(Math.min(newZoom, maxZoom), minZoom);
        this.element.style.setProperty("--zoom", this.zoom);
    }

    _handleTouchstart(evt) {
        evt.preventDefault();

        this._handleMouseover();
    }

    _handleTouchmove(evt) {
        if (!this.zoomed) {
            return;
        }

        const elPos = this.element.getBoundingClientRect();

        let percentageX =
            ((evt.touches[0].clientX - elPos.left) * 100) / elPos.width;
        let percentageY =
            ((evt.touches[0].clientY - elPos.top) * 100) / elPos.height;

        percentageX = Math.max(Math.min(percentageX, 100), 0);
        percentageY = Math.max(Math.min(percentageY, 100), 0);

        this.element.style.setProperty("--zoom-pos-x", `${percentageX}%`);
        this.element.style.setProperty("--zoom-pos-y", `${percentageY}%`);
    }

    _handleTouchend(evt) {
        this._handleMouseout();
    }

    _mergeConfig(config) {
        return {
            ...this.constructor.Default,
            ...(typeof config === "object" ? config : {})
        };
    }
}

/*
 * Implementation
 */

const zoomables = document.querySelectorAll(".zoomable");

for (const el of zoomables) {
    new Zoomable(el);
}

//'элемент не в зоне видимости
const options = {
    rootMargin: "0px",
    threshold: 0.5,
}

const observer = new IntersectionObserver(callback, options);
var target = document.querySelector(".product-block-start");
observer.observe(target);

function callback (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.product-modal').classList.remove('active')
        }else{
            document.querySelector('.product-modal').classList.add('active')
        }

    });
};