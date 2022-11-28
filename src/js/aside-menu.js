window.addEventListener('DOMContentLoaded', () => {
  const asideMenu = document.querySelector('.aside-menu')
  const buttonMenuOpen = document.querySelector('.button__menu')
  const buttonMenuClose = document.querySelector('.button__menu-close')
  const buttonCall = asideMenu.querySelector('.button__call')
  const buttonChat = asideMenu.querySelector('.button__chat')

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
    if (window.screen.width < 1440) {
      asideMenu.classList.toggle('aside-menu--open')
      asideMenu.classList.toggle('aside-menu--close')
    }
  })
  buttonChat.addEventListener('click', function () {
    if (window.screen.width < 1440) {
      asideMenu.classList.toggle('aside-menu--open')
      asideMenu.classList.toggle('aside-menu--close')
    }
  })
})
