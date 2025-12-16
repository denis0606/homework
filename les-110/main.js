const btn = document.querySelector('.btn')
const text = document.querySelector('.text')


btn.addEventListener('click', () => {
    text.classList.toggle('move')
    text.classList.add('red')
    if (text.classList.contains('move')) {
        text.textContent = 'я двигаюсь'
    } else {
        text.innerText = 'Текст'
    }
})

