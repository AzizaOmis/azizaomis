window.addEventListener('DOMContentLoaded', () => {
  const mainMore = document.querySelector('.main__read-more')
  const mainMoreImg = mainMore.querySelector('.main__more-icon')
  const mainMoreText = mainMore.querySelector('.main__more-text')
  const mainText = document.querySelector('.main__text')

  mainMore.addEventListener('click', function () {
    if(window.screen.width < 915){
      if (mainMore.classList.contains('main__read-more--open')) {
        mainMoreText.innerHTML = 'Скрыть';
        mainMoreImg.classList.toggle('main__more-icon--open');
        mainMoreImg.classList.toggle('main__more-icon--close');
        mainMore.classList.toggle('main__read-more--open');
        mainMore.classList.toggle('main__read-more--close');    
        mainText.classList.toggle('main__text--close')
        mainText.classList.toggle('main__text--open')
      } else {
        mainMoreText.innerHTML = 'Читать далее';
        mainMoreImg.classList.toggle('main__more-icon--open');
        mainMoreImg.classList.toggle('main__more-icon--close');
        mainMore.classList.toggle('main__read-more--open');
        mainMore.classList.toggle('main__read-more--close');
        mainText.classList.toggle('main__text--close')
        mainText.classList.toggle('main__text--open')
      }      
    }
  })
})
