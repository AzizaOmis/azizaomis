window.addEventListener('DOMContentLoaded', () => {
  const asideMenu = document.querySelector('.aside-menu')
  const buttonMenuOpen = document.querySelector('.button__menu')
  const buttonMenuClose = document.querySelector('.button__menu-close')
  const buttonCall = asideMenu.querySelector('.button__call')
  const buttonChat = asideMenu.querySelector('.button__chat')
  const menuMainTexts = document.querySelectorAll('.menu-main__text')
  const mediaQuery = '(min-width: 1366px)'
  const mediaQueryList = window.matchMedia(mediaQuery)

  for (let menuMainText of menuMainTexts) {
    menuMainText.addEventListener('click', function () {
      let activeText = document.querySelector('.menu-main__text--active')
      activeText.classList.remove('menu-main__text--active')
      this.classList.add('menu-main__text--active')
    })
  }
  buttonMenuOpen.addEventListener('click', function () {
    asideMenu.classList.toggle('aside-menu--open')
    asideMenu.classList.toggle('aside-menu--close')
  })
  buttonMenuClose.addEventListener('click', function () {
    asideMenu.classList.toggle('aside-menu--close')
    asideMenu.classList.toggle('aside-menu--open')
  })
  document.addEventListener('click', function (e) {
    if (e.target === asideMenu) {
      asideMenu.classList.toggle('aside-menu--close')
      asideMenu.classList.toggle('aside-menu--open')
    }
  })
  buttonCall.addEventListener('click', function () {
    if (!mediaQueryList.matches) {
      asideMenu.classList.toggle('aside-menu--open')
      asideMenu.classList.toggle('aside-menu--close')
    }
  })
  buttonChat.addEventListener('click', function () {
    if (!mediaQueryList.matches) {
      asideMenu.classList.toggle('aside-menu--open')
      asideMenu.classList.toggle('aside-menu--close')
    }
  })
})
