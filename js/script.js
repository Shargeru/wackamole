const dirt = document.querySelectorAll ('.dirt');
const mole = document.querySelectorAll ('.mole');
const scoreboard = document.querySelector ('.scoreboard')

let dirtHistory;
let finish;
let score;

function randomDirtIndex(dirt) {
    const count = Math.floor(Math.random() * dirt.length);
    const random = dirt[count]
    if (random == count) {
        randomDirtIndex(dirt)
    }
    dirtHistory = random;
    return random;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showMole() {
    const random = randomDirtIndex(dirt)
    random.classList.add('show')
    const waktu = randomTime(500,1000);
    setTimeout(() => {
        random.classList.remove('show')
        if (!finish) {
            showMole();
        }
    }, waktu);
}

function startGame() {
    finish = false;
    score = 0;
    scoreboard.textContent = 0;
    showMole();
    setTimeout(() => {
        finish = true;
    }, 10000)
}

function hit() {
    score++;
    this.parentNode.classList.remove('show')
    scoreboard.textContent = score;  
}

mole.forEach(x => {
    x.addEventListener('click', hit);
});