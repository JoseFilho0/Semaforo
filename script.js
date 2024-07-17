const imgSemaforo = document.querySelector('div img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalId = null;
const luzSemaforo = (event) => {
    stopAutomatic();
    alterarSemaforo[event.target.id]();
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++;
    } else {
        colorIndex = 0
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    alterarSemaforo[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId)
} 

const alterarSemaforo = {
    'red': () => img.src = './images/vermelho.png',
    'yellow': () => img.src = './images/amarelo.png',
    'green': () => img.src = './images/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 500)
}

buttons.addEventListener('click', luzSemaforo);