window.addEventListener('DOMContentLoaded', () => {
  const mainMore = document.querySelector('.main__read-more')
  const mainMoreImg = mainMore.querySelector('.main__more-icon')
  const mainMoreText = mainMore.querySelector('.main__more-text')
  const mainText = document.querySelector('.main__text')
  const mediaQuery = '(max-width: 915px)'
  const mediaQueryList = window.matchMedia(mediaQuery)

  mainMore.addEventListener('click', function () {
    if (mediaQueryList.matches) {
      if (mainMore.classList.contains('main__read-more--open')) {
        mainMoreText.textContent = 'Скрыть'

        mainMoreImg.classList.toggle('main__more-icon--open')
        mainMoreImg.classList.toggle('main__more-icon--close')

        mainMore.classList.toggle('main__read-more--open')
        mainMore.classList.toggle('main__read-more--close')

        mainText.classList.toggle('main__text--close')
        mainText.classList.toggle('main__text--open')
      } else {
        mainMoreText.textContent = 'Читать далее'

        mainMoreImg.classList.toggle('main__more-icon--open')
        mainMoreImg.classList.toggle('main__more-icon--close')

        mainMore.classList.toggle('main__read-more--open')
        mainMore.classList.toggle('main__read-more--close')

        mainText.classList.toggle('main__text--close')
        mainText.classList.toggle('main__text--open')
      }
    }
  })
})
