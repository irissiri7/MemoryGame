var brickImages = ['blossom.jpg', 'cat.jpg', 'catNdog.jpg', 'horses.jpg', 'kitty.jpg', 'sea.jpg', 'blossom.jpg', 'cat.jpg', 'catNdog.jpg', 'horses.jpg', 'kitty.jpg', 'sea.jpg'];
brickImages.sort(() => Math.random() - 0.5);

var bricksOpened = [];
var count = 0;

$('.brick').on('click', function(event) {
    bricksOpened.push($(this));
    var newSrc = 'brickImages' + '\\' + brickImages[Number($(this).attr('id'))]
    $(this).attr('src', newSrc);
    
    setTimeout(function () {
        if(bricksOpened.length === 2){
            if(bricksOpened[0].attr('src') == bricksOpened[1].attr('src')){
                bricksOpened[0].css('visibility', 'hidden');
                bricksOpened[1].css('visibility', 'hidden');
                bricksOpened = [];
                count++;
            }
            else {
                bricksOpened[0].attr('src','brickImages\\default.jfif');
                bricksOpened[1].attr('src','brickImages\\default.jfif'); 
                bricksOpened = [];
            }
        }
    }, 2500)
})