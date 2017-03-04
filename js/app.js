// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    var $player1 = $('#player1');
    var $player2 = $('#player2');
    var moveRight = 0;
    var moveLeft = 0;

    $('body').keydown(function(e) {
        e.preventDefault();
        if (e.which === 39) {
            console.log("in key code 39");
            moveRight += 50;
            console.log(moveRight.toString());
            $player1.css('margin-left', '+=50');
        } else if (e.which === 37) {
            console.log("in key code 37");
            moveLeft += 50
            console.log(moveLeft.toString());
            $player2.css('margin-left', '+=50');
        }
    });

})
