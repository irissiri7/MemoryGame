let bricks = document.querySelectorAll('.brick');
let hasFlipped = false;
let firstCard, secondCard;
let pairsFound = 0;
let lockGame = false;

function flipCard(){
    if(lockGame) return;
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

bricks.forEach(brick => brick.addEventListener('click', flipCard));