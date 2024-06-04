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
    if (document.querySelector('.basket-item-event')) {
        document.querySelectorAll('.basket-item-event').forEach((item) => {
            editCountProduct(item);
        })
    }
}else{
    if (document.querySelector('.basket-item-event')) {
        document.querySelectorAll('.basket-item-event').forEach((item) => {
            console.log(item)
            editCountProduct(item);
        })
    }
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


window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('input[type=tel]'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});

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
if(target){
    observer.observe(target);
}
function callback (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.product-modal').classList.remove('active')
        }else{
            document.querySelector('.product-modal').classList.add('active')
        }
    });
};

const observer2 = new IntersectionObserver(callback2, options);
var target2 = document.querySelector(".sidebar-formalization");
if(target2){
    observer2.observe(target2);
}
function callback2 (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.basket-mobile').classList.remove('active')
        }else{
            document.querySelector('.basket-mobile').classList.add('active')
        }
    });
};


if(document.querySelector('.bagel')){
  /*  function SVGRoad(elem) {
        this.pathLength = elem.getTotalLength();
        this.setStrokeDasharrayInPercent = function() {
            var strokeDasharray = "";
            for (let i = 0; i < arguments.length; i++) {
                strokeDasharray += arguments[i] / 100 * this.pathLength + " ";
            }
            elem.style.strokeDasharray = strokeDasharray;
        };

        this.setStrokeDashoffsetInPercent = function(strokeDashoffset) {

            elem.style.strokeDashoffset = strokeDashoffset / 100 * this.pathLength;
        };
    }

    var pathElem = document.querySelector(".bagel-svg circle");
    var SVGRoadInstance = new SVGRoad(pathElem);

//change the following values
    SVGRoadInstance.setStrokeDasharrayInPercent(document.querySelector(".bagel-svg").getAttribute('data-attr'));
    SVGRoadInstance.setStrokeDashoffsetInPercent(0);*/
    let circle = document.querySelector('#bar');
    let val = document.querySelector('.bagel-svg').getAttribute('data-attr');
    let r = circle.getAttribute('r');
    let c = Math.PI*(r*2);
    let pct = ((100-val)/100)*c;
    circle.style.strokeDashoffset = pct + 'px';
}

const anchors = document.querySelectorAll('.anchor')
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchors[i].getAttribute('href').substr(1);
        let idS = document.getElementById(blockID)
        const yOffset = -180;
        const y = idS.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    })
}

if(document.querySelector('.sidebar-basket-final-profit')){
    document.querySelector('.sidebar-basket-final-profit-default').addEventListener('click', function (){
        const hiddenContainer = document.querySelector('.sidebar-basket-final-profit-hidden'),
              hiddenContainerHeight = document.querySelector('.sidebar-basket-final-profit-hidden-container').clientHeight;

        if(document.querySelector('.sidebar-basket-final-profit').classList.contains('active')){
            document.querySelector('.sidebar-basket-final-profit').classList.remove('active');
            hiddenContainer.style.height = 0
        }else{
            document.querySelector('.sidebar-basket-final-profit').classList.add('active');
            hiddenContainer.style.height = hiddenContainerHeight + 'px'
        }
    })
}

if(document.querySelector('.delivery-page-item')){
    document.querySelectorAll('[name="delivery"]').forEach((item) => {
        item.addEventListener('click', function (){
            const idInput = item.getAttribute('id')
            if(document.querySelector('.product-block-address').classList.contains('active')){
                document.querySelector('.product-block-address').classList.remove('active')
            }
            if(document.querySelector(`[data-id=${idInput}]`)){
                document.querySelector(`[data-id=${idInput}]`).classList.add('active')
            }
        })
    })
}

if(document.querySelector('.form-input__code')){
    var otp_inputs = document.querySelectorAll(".otp__digit")
    var mykey = "0123456789".split("")
    otp_inputs.forEach((_)=>{
        _.addEventListener("keyup", handle_next_input)
    })
    function handle_next_input(event){
        let current = event.target
        let index = parseInt(current.classList[1].split("__")[2])
        current.value = event.key
        if(event.keyCode == 8 && index > 1){
            current.previousElementSibling.focus()
        }
        if(index < 4 && mykey.indexOf(""+event.key+"") != -1){
            var next = current.nextElementSibling;
            next.focus()
        }
        var _finalKey = ""
        for(let {value} of otp_inputs){
            _finalKey += value
        }
        if(_finalKey.length == 4){
            document.querySelector("#_otp").classList.replace("_notok", "_ok")
            document.querySelector("#_otp").innerText = _finalKey
        }else{
            document.querySelector("#_otp").classList.replace("_ok", "_notok")
            document.querySelector("#_otp").innerText = _finalKey
        }
    }
}