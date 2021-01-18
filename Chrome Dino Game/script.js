const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const gameScoreLabel = document.getElementById("gameScore");
let nOfEvents = 0;
let isJumping = false;
let position = 0;
let speedOfCactus = 5;
let gameScore = 0;


function gameScoreCounter() {
    setInterval(() => {
        gameScore += 10;
        gameScore.innerHTML = gameScore;
    }, 10);
    console.log(gameScore);
}

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
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!</h1>'
        } else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 50);

    setTimeout(createCactus, randomTime);
}

//make a ding and increase speed a little bit every 100th point
//make animations that make the dino look like he is walking
//make a score counter and make speed increase based on it
//make the dino be able to crouch to avoid flying dinos
//make a cool looking game over text and button
//make it in the middle of the screen
//make cactus appear more often
//make it less in the left-edge
//make beep sound when jump
//save a highest score
//change the spacebar behavior to press instead of release - OK
//make height of the jump change according to how long the button was pressed - OK
//change the spacebar behavior to detect when i'm holding and jump indefinitely based on that - OK

createCactus();
document.addEventListener('keydown', handleKeyDown);
gameScoreCounter();