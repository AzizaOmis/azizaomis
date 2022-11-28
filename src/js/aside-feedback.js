window.addEventListener('DOMContentLoaded', () => {
  const asideFeedback = document.querySelector('.aside-feedback')
  const buttonFeedbackOpen = document.querySelectorAll('.button__chat')
  const buttonFeedbackClose = document.querySelector(
    '.aside-feedback__close-btn'
  )

  buttonFeedbackOpen.forEach(function (buttonFeedbackOpen) {
    buttonFeedbackOpen.addEventListener('click', function () {
      asideFeedback.classList.toggle('aside-feedback--open')
      asideFeedback.classList.toggle('aside-feedback--close')
    })
  })
  buttonFeedbackClose.addEventListener('click', function () {
    asideFeedback.classList.toggle('aside-feedback--close')
    asideFeedback.classList.toggle('aside-feedback--open')
  })
  document.addEventListener('click', function (e) {
    if (e.target === asideFeedback) {
      asideFeedback.classList.toggle('aside-feedback--close')
      asideFeedback.classList.toggle('aside-feedback--open')
    }
  })
})
