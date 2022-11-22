window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.swiper-container');
  const mediaQuery = '(max-width: 767.9px)';
  const mediaQueryList = window.matchMedia(mediaQuery);
  let swiper = undefined;
  const buttonMore = document.querySelector('.cards__button-more');
  const brandsCards = document.querySelector('.brands__cards');
  const buttonIcon = buttonMore.querySelector('.more__icon');
  const buttonText = buttonMore.querySelector('.more__text');

  buttonMore.addEventListener('click', function () {
    if (buttonMore.classList.contains('cards__button-more--open')) {
      buttonText.textContent = 'Скрыть';
      buttonIcon.classList.toggle('more__icon--rotate');
      buttonMore.classList.toggle('cards__button-more--open');
      buttonMore.classList.toggle('cards__button-more--close');
      brandsCards.classList.toggle('brands__cards--close');
      brandsCards.classList.toggle('brands__cards--open');
    } else {
      buttonText.textContent = 'Показать все';
      buttonIcon.classList.toggle('more__icon--rotate');
      buttonMore.classList.toggle('cards__button-more--close');
      buttonMore.classList.toggle('cards__button-more--open');
      brandsCards.classList.toggle('brands__cards--open');
      brandsCards.classList.toggle('brands__cards--close');
    }
  });
  function swiperInit() {
    if (mediaQueryList.matches) {
      swiper = new Swiper(slider, {
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',

          clickable: true,
        },
      });
    } else {
      swiper.destroy();
      swiper = undefined;
    }
  }
  swiperInit();
});
