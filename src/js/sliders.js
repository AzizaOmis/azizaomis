window.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.swiper-container')
  let swiper = undefined
  const mediaQuery = '(min-width: 768px)'
  const mediaQueryList = window.matchMedia(mediaQuery)

  for (let slider of sliders) {
    swiper = new Swiper(slider, {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',

        clickable: true
      }
    })
    if (mediaQueryList.matches) {
      swiper.destroy()
    }
  }
})
