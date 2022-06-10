document.querySelector('.cutaway__menu_burger').addEventListener('click', (event) => {
  if (!event.target.closest('.cutaway__menu_burger')) return

  event.target.closest('.cutaway__menu_burger').classList.toggle('active')
  document.querySelector('.cutaway__menu_navigator').classList.toggle('active')
  document.body.classList.toggle('lock')
})

document.querySelector('.cutaway__menu_navigator').addEventListener('click', (event) => {

  if (!event.target.closest('a')) return

  document.querySelector('.cutaway__menu_burger').classList.toggle('active')
  document.querySelector('.cutaway__menu_navigator').classList.toggle('active')
  document.body.classList.toggle('lock')
})