// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    var $player1 = $('#player1');
    var $player2 = $('#player2');
    var moveRight = 0;
    var moveLeft = 0;

    $('body').keydown(function(e) {
        if (e.which === 39) {
            e.preventDefault();
            moveRight += 50;
            $player1.css('margin-left', '+=50');
        }
        if (e.which === 37) {
            e.preventDefault();
            moveLeft += 50
            $player2.css('margin-left', '+=50');
        }

    });
})

var winner = (function() {
    if ($player1.css 'margin-left' === 1250) {
        console.log("Player 1 wins!");

        else if ($player2 'margin-left' === 1250) {
            console.log("Player 2 wins!");
        }
    }
});

// if $player1.css('margin-left' === 1250) {
// console.log("Player 1 wins!");
