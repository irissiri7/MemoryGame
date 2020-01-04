let bricks = document.querySelectorAll('.brick');
let hasFlipped = false;
let firstCard, secondCard;

function flipCard(){
    if(!hasFlipped){
        firstCard = this;
        hasFlipped = true;
        firstCard.removeEventListener('click', flipCard);
    }
    else{
        secondCard = this;
    }
    console.log(firstCard);
    console.log(secondCard);
}

bricks.forEach(brick => brick.addEventListener('click', flipCard));