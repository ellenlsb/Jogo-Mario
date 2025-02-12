const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')

const jump = ()=> {
    mario.classList.add('pular')

    setTimeout(() => {
        mario.classList.remove('pular')
    }, 500);
}

const loop = setInterval(() => {
    const posicaoCano = tubo.offsetLeft
    const posicaoMario = window.getComputedStyle(mario).bottom.replace('px', '')

    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 70) {
        tubo.style.animation = 'none'
        tubo.style.left = `${posicaoCano}px`

        mario.src = './img/game-over.png'
        mario.style.width = '100px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
