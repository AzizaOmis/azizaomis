const pageWidth = document.documentElement.scrollWidth;
let oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;
        location.reload();
    }
};


if (pageWidth < 768){
    const slider = document.querySelector('.swiper-container');

    let swiper = new Swiper(slider, {
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
    });
};


function readMore(){
    let brandsCards = document.querySelector('.brands__cards');
    let cardsButton = document.querySelector('.cards__button-more');
    let buttonIcon = document.querySelector('.more__icon');
    let buttonText = document.querySelector('.more__text');

    if (cardsButton.classList.contains('cards__button-more--open')){
        buttonText.textContent = 'Скрыть';
        buttonIcon.classList.add('more__icon--rotate');
        cardsButton.classList.remove('cards__button-more--open');
        cardsButton.classList.add('cards__button-more--close');
        brandsCards.classList.remove('brands__cards--close');
        brandsCards.classList.add('brands__cards--open');
    } else {
        buttonText.textContent = 'Показать все';
        buttonIcon.classList.remove('more__icon--rotate');
        cardsButton.classList.remove('cards__button-more--close');
        cardsButton.classList.add('cards__button-more--open');      
        brandsCards.classList.remove('brands__cards--open');
        brandsCards.classList.add('brands__cards--close');
    };    
};
    



