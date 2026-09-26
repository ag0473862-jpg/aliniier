import './style.css'

const dialog = document.querySelector('#questionDialog')
const title = document.querySelector('#dialogQuestion')
const answer = document.querySelector('#dialogAnswer')
const toast = document.querySelector('#toast')
let addedThemes = 0

document.querySelectorAll('.question.filled').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.question
    answer.textContent = button.dataset.answer
    dialog.showModal()
  })
})
document.querySelector('#closeDialog').addEventListener('click', () => dialog.close())
document.querySelector('.dialog-button').addEventListener('click', () => dialog.close())
document.querySelector('#publishButton').addEventListener('click', () => {
  toast.classList.add('visible')
  setTimeout(() => toast.classList.remove('visible'), 3200)
})
document.querySelector('#previewButton').addEventListener('click', () => {
  document.body.classList.toggle('presentation')
  document.querySelector('#previewButton').innerHTML = document.body.classList.contains('presentation') ? '◧&nbsp; Выйти из просмотра' : '▻&nbsp; Предпросмотр'
})

function addTheme() {
  addedThemes += 1
  const card = document.createElement('article')
  card.className = 'theme-card mint new-card'
  card.innerHTML = `<div class="theme-top"><div class="theme-icon">🥂</div><button class="more">•••</button></div><h3>Новая тема ${addedThemes}</h3><p>Добавьте свой праздничный сюжет</p><div class="questions"><button class="question empty">＋</button><button class="question empty">＋</button><button class="question empty">＋</button><button class="question empty">＋</button></div>`
  document.querySelector('#gameBoard').insertBefore(card, document.querySelector('#addThemeCard'))
}
document.querySelector('#addTheme').addEventListener('click', addTheme)
document.querySelector('#addThemeCard').addEventListener('click', addTheme)
