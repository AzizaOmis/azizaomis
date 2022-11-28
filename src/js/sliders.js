window.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.swiper-container');
    let swiper = undefined;
    const mediaQuery = '(min-width: 768px)';
    const mediaQueryList = window.matchMedia(mediaQuery);

    for (let i = 0; i < sliders.length; i++) {
        let init_slider = (sliders[i]);
        swiper = new Swiper(init_slider, {
            slidesPerView: 1.2,
            spaceBetween: 16,
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',

            clickable: true,
            }
        })
        if(mediaQueryList.matches){
            swiper.destroy();
        }
    }
})
