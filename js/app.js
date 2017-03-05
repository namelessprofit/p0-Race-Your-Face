// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    var $player1 = $('#player1');
    var $player2 = $('#player2');
    var moveRight = 0;
    var moveLeft = 0;
//fucntion to move player 1 right
    $('body').keydown(function(e) {
        if (e.which === 39) {
            e.preventDefault();
            moveRight += 50;
            $player1.css('margin-left', '+=50');
        }
//conditional statement to move player 2 right
        if (e.which === 37) {
            e.preventDefault();
            moveLeft += 50
            $player2.css('margin-left', '+=50');
        }
    })
//fucntion to declare winner
var winner = function() {
    if ($player1.css.marginleft === 1200) {
    console.log("Player 1 wins!");
} else if ($player1.css.marginleft === 1200) {
    console.log("Player 2 wins!");
}
}
function resetGame() {
document.getElementById('reload');
console.log("new game!");
}
//function to reset game
// function resetGame() {
// document.getElementById('reload');
// // $('#reload').click(function() {
// //     location.reload();
// console.log("new game!");
// }
});
