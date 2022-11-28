window.addEventListener('DOMContentLoaded', () => {
  const asideCall = document.querySelector('.aside-call')
  const buttonCallOpen = document.querySelectorAll('.button__call')
  const buttonCallClose = document.querySelector('.aside-call__close-btn')

  buttonCallOpen.forEach(function (buttonCallOpen) {
    buttonCallOpen.addEventListener('click', function () {
      asideCall.classList.toggle('aside-call--open')
      asideCall.classList.toggle('aside-call--close')
    })
  })
  buttonCallClose.addEventListener('click', function () {
    asideCall.classList.toggle('aside-call--close')
    asideCall.classList.toggle('aside-call--open')
  })
  document.addEventListener('click', function (e) {
    if (e.target === asideCall) {
      asideCall.classList.toggle('aside-call--close')
      asideCall.classList.toggle('aside-call--open')
    }
  })
})
