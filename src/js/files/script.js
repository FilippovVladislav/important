// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";

if (document.querySelector('.product-event__add')) {
    document.querySelectorAll('.product-event__add .button-orange-light').forEach((item) => {
        item.addEventListener('click', function () {
            item.closest('.product-event__add').classList.add('active');
            editCountProduct(item.closest('.product-event__add'));
        })
    })
}

function editCountProduct(container) {
    container.querySelector('.product-event__count-size span').innerHTML = Number(1)
    container.querySelector('.product-event__sign-minus').onclick = function (){
        container.querySelector('.product-event__count-size span').innerHTML = Number(container.querySelector('.product-event__count-size span').innerHTML) - 1
        if (container.querySelector('.product-event__count-size span').innerHTML <= 0) {
            container.classList.remove('active')
            container.querySelector('.product-event__count-size span').innerHTML = Number(0);
        }
    }
    container.querySelector('.product-event__sign-plus').onclick = function (){
        container.querySelector('.product-event__count-size span').innerHTML = Number(container.querySelector('.product-event__count-size span').innerHTML) + 1;

    }
}

if(document.querySelector('.button-catalog')){
    document.querySelector('.button-catalog').addEventListener('click', function (){
        if( !document.body.classList.contains('catalog-menu-active')){
            document.body.classList.add('catalog-menu-active')
            document.addEventListener( 'click', (e) => {
                const div = document.querySelector('.header-catalog-menu')
                const withinBoundaries = e.composedPath().includes(div);
                if ( ! withinBoundaries && ! e.target.closest('.button-catalog')) {
                    document.body.classList.remove('catalog-menu-active')
                }
            })
        }else{
            document.body.classList.remove('catalog-menu-active')
        }
    })
}

let lastScrollTop = 0;

window.addEventListener('scroll', function (e){
    let currentLastScrollTop = getBodyScrollTop();
    if (currentLastScrollTop > lastScrollTop){
        document.body.classList.remove('scroll-top')
        document.body.classList.add('scroll-down')
    } else {
        document.body.classList.add('scroll-top')
        document.body.classList.remove('scroll-down')
    }
    lastScrollTop = currentLastScrollTop;
})

function getBodyScrollTop()
{
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}