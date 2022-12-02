import './sliders'
window.addEventListener('DOMContentLoaded', () => {
  const techniqueMore = document.querySelector('.technique-cards__button-more')
  const techniqueMoreImg = techniqueMore.querySelector(
    '.technique-cards__more-img'
  )
  const techniqueMoreText = techniqueMore.querySelector(
    '.technique-cards__more-text'
  )
  const techniqueCards = document.querySelector('.slider-technique__cards')

  techniqueMore.addEventListener('click', function () {
    if (
      techniqueMore.classList.contains('technique-cards__button-more--open')
    ) {
      techniqueMoreText.textContent = 'Скрыть'
      techniqueMoreImg.classList.toggle('technique-cards__more-img--open')
      techniqueMoreImg.classList.toggle('technique-cards__more-img--close')
      techniqueMore.classList.toggle('technique-cards__button-more--open')
      techniqueMore.classList.toggle('technique-cards__button-more--close')
      techniqueCards.classList.toggle('slider-technique__cards--open')
      techniqueCards.classList.toggle('slider-technique__cards--close')
    } else {
      techniqueMoreText.textContent = 'Показать все'
      techniqueMoreImg.classList.toggle('technique-cards__more-img--open')
      techniqueMoreImg.classList.toggle('technique-cards__more-img--close')
      techniqueMore.classList.toggle('technique-cards__button-more--open')
      techniqueMore.classList.toggle('technique-cards__button-more--close')
      techniqueCards.classList.toggle('slider-technique__cards--open')
      techniqueCards.classList.toggle('slider-technique__cards--close')
    }
  })
})
