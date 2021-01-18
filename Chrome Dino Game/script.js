const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const gameScoreLabel = document.getElementById("gameScore");
let nOfEvents = 0;
let isJumping = false;
let position = 0;
let speedOfCactus = 5;
var gameScore = 0;


setInterval(() => {
    gameScore += 1;
    console.log(gameScore);
    if (gameScore % 100 === 0) {
        speedOfCactus += 10;
        console.log('speed cacto' + speedOfCactus);
    }
}, 100);


function handleKeyDown(event){
    if (event.keyCode === 32) {
        nOfEvents++;
        if (nOfEvents <= 1) {
            if (!isJumping) {
                jump(1);
                nOfEvents = 0;
            }
        } else if(nOfEvents >= 2) {
            if (!isJumping) {
                jump(2);
                nOfEvents = 0;
            }
        }
    }
}


function jump(value){    
    
    isJumping = true;
    if (value === 1) {
        //pulo menor
        let upInterval = setInterval(() => {
            if (position >= 80) {
                //descendo
                clearInterval(upInterval);
                let downInterval = setInterval(() =>{
                    position -= 10;
                    dino.style.bottom = position + 'px';
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                }, 50);
            } else {
                //subindo
                position += 10;
                dino.style.bottom = position + 'px';
            }
        }, 30);
    } else if(value === 2) {
        //pulo maior
        let upInterval = setInterval(() => {
            if (position >= 150) {
                //descendo
                clearInterval(upInterval);
                let downInterval = setInterval(() =>{
                    position -= 10;
                    dino.style.bottom = position + 'px';
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                }, 50);
            } else {
                //subindo
                position += 10;
                dino.style.bottom = position + 'px';
            }
        }, 30);
    }
}

function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = screen.availWidth - 10;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInverval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

        if (cactusPosition < -60) {
            clearInterval(leftInverval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //game over
            clearInterval(leftInverval);
            document.body.innerHTML = '<img class="game-over" src="game-over.png"></img>'
        } else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 50);

    setTimeout(createCactus, randomTime);
}

createCactus();
//gameScoreCounter();
document.addEventListener('keydown', handleKeyDown);