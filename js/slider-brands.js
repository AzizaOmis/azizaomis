import './sliders'
window.addEventListener('DOMContentLoaded', () => {
    const brandsMore = document.querySelector('.brands-cards__button-more')
    const brandsMoreImg = brandsMore.querySelector('.brands-cards__more-img')
    const brandsMoreText = brandsMore.querySelector('.brands-cards__more-text')
    const brandsCards = document.querySelector('.slider-brands__cards')

    brandsMore.addEventListener('click', function(){
        if (brandsMore.classList.contains('brands-cards__button-more--open')) {
            brandsMoreText.innerHTML = 'Скрыть';
            brandsMoreImg.classList.toggle('brands-cards__more-img--open');
            brandsMoreImg.classList.toggle('brands-cards__more-img--close');
            brandsMore.classList.toggle('brands-cards__button-more--open');
            brandsMore.classList.toggle('brands-cards__button-more--close');
            brandsCards.classList.toggle('slider-brands__cards--open');
            brandsCards.classList.toggle('slider-brands__cards--close');
          } else {
            brandsMoreText.innerHTML = 'Показать все';
            brandsMoreImg.classList.toggle('brands-cards__more-img--open');
            brandsMoreImg.classList.toggle('brands-cards__more-img--close');
            brandsMore.classList.toggle('brands-cards__button-more--open');
            brandsMore.classList.toggle('brands-cards__button-more--close');
            brandsCards.classList.toggle('slider-brands__cards--open');
            brandsCards.classList.toggle('slider-brands__cards--close');
          }
    })
})