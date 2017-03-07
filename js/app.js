// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    //good variable naming conventions
    var $player1 = $('#player1');
    var $player2 = $('#player2');
    var moveRight = 0;
    var moveLeft = 0;

    //thanks for adding comments to say what you're doing!
    //function to move player 1 & 2 right
    $('body').keydown(function(e) {
        //conditional statement to move player 1 right
        if (e.which === 39) {
            e.preventDefault();
            moveRight += 50;
            $player1.css('margin-left', '+=50');
            //conditional statement to call the helper function
            if ($player1.css('margin-left') == '1200px') {
                winner($player1);
            }
        }
        //conditional statement to move player 2 right
        if (e.which === 37) {
            e.preventDefault();
            moveLeft += 50;
            $player2.css('margin-left', '+=50');
            //conditional statement to call the helper function
            if ($player2.css('margin-left') == '1200px') {
                winner($player2);
            }
        }
    });
    //helper function to declare winner
    var winner = function(player) {
        if (player == $player1) {
            alert("Player 1 Wins! ");
        } else if (player == $player1 && $player2) {
            alert("It's A Draw!")
        } else {
            alert("Player 2 Wins!");
        }
    }
    //function to reset game
    //good feature
    $('#reload').click(function() {
        location.reload();
    });
});

//super clear, clean logic - thank you!!
