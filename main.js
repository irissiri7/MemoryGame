var brickImages = ['blossom.jpg', 'cat.jpg', 'catNdog.jpg', 'horses.jpg', 'kitty.jpg', 'sea.jpg', 'blossom.jpg', 'cat.jpg', 'catNdog.jpg', 'horses.jpg', 'kitty.jpg', 'sea.jpg'];
brickImages.sort(() => Math.random() - 0.5);

var bricksOpened = [];
var count = 0;

var allBricks = document.getElementsByClassName('brick');

for(let brick of allBricks){
    brick.addEventListener('click', checkImage);
}

function checkImage(event){
    var currentBrick = event.target;
    var newSrc = 'brickImages' + '\\' + brickImages[Number(currentBrick.getAttribute('id'))]
    bricksOpened.push(currentBrick);
    currentBrick.setAttribute('src', newSrc);
    currentBrick.removeEventListener('click', checkImage);
    if(bricksOpened.length == 2){
        checkIfBricksAreTheSame();
    }
}

function checkIfBricksAreTheSame(){
    setTimeout(function(){
        if(bricksOpened[0].getAttribute('src') == bricksOpened[1].getAttribute('src')){
            bricksOpened[0].style.visibility = 'hidden';
            bricksOpened[1].style.visibility = 'hidden';
            bricksOpened = [];
        } 
        else{
            bricksOpened[0].setAttribute('src', 'brickImages\\default.jfif');
            bricksOpened[1].setAttribute('src', 'brickImages\\default.jfif');
            bricksOpened[0].addEventListener('click', checkImage);
            bricksOpened[1].addEventListener('click', checkImage);
            bricksOpened = [];
        }
    }, 1000)
}
