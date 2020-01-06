let bricks = document.querySelectorAll('.brick');
let hasFlipped = false;
let firstCard, secondCard;
let pairsFound = 0;
let lockGame = false;
let clicks = 0;

function flipCard(){
    if(lockGame) return;
    clicks++;
    updateClicks();
    if(!hasFlipped){
        firstCard = this;
        firstCard.classList.add('flip');
        firstCard.removeEventListener('click', flipCard);
        hasFlipped = true;
    }
    else{
        secondCard = this;
        secondCard.classList.add('flip');
        secondCard.removeEventListener('click', flipCard);
        lockGame = true;
        checkMatch();
    }
}
function checkMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        pairsFound++;
        hasFlipped = false;
        lockGame = false;
        if(pairsFound == 6){
            setTimeout(()=>{
                document.getElementById('win-container').style.visibility = 'visible';
            },1000)
        }
    }
    else{
        setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard.addEventListener('click', flipCard);
            secondCard.addEventListener('click', flipCard);
            hasFlipped = false;
            lockGame = false;
        }, 1500)
    }
}

function resetGame(){
    bricks.forEach(brick => brick.classList.remove('flip'));
    bricks.forEach(brick => brick.addEventListener('click', flipCard));
    shuffleBricks();
    pairsFound = 0;
    clicks = 0;
    updateClicks();
    document.getElementById('win-container').style.visibility = 'hidden';
}

function shuffleBricks(){
    bricks.forEach(brick => {
        let randomNum = Math.floor(Math.random() * 12);
        console.log(randomNum);
        brick.style.order = randomNum;
    });
}

function updateClicks(){
    var clicksContainer = document.getElementById("clicks");
    clicksContainer.innerText = 'Clicks used:  ' + clicks;
}

updateClicks();
shuffleBricks();
bricks.forEach(brick => brick.addEventListener('click', flipCard));
document.getElementById('play-again-btn').addEventListener('click', resetGame);