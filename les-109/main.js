const button = document.querySelector('.btn')
let btnIsRed = false

button.addEventListener('click', () => {
    if (btnIsRed) {
        button.style.backgroundColor = 'yellow'
        btnIsRed = false
    } else {
        button.style.backgroundColor = 'red'
        btnIsRed = true
    }
})

function scrolling() {
    console.log('scroll')
}

document.addEventListener('scroll', () => {
    console.log('scroll')
})