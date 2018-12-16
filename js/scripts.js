//Business logic
function pigDice() {
    var die1 = document.getElementById("#die1")
    var die2 = document.getElementById("#die2");
    var points =  document.getElementById("#points");
    var r1 = Math.floor(Math.random() * 6) + 1;
    
    var r2 = Math.floor(Math.random()* 6) + 1;
    
    var diceTotal = r1 + r2;

    die1.innerHTML = r1;
    
    die2.innerHTML= r2;
    points.innerHTML = "You just rolled" + diceTotal + "!!"
    if (r1 == 1 || r2 == 1) {
        diceTotal = 0;
        points.innerHTML = "Your total" + diceTotal + "!!" + "Your turn is over"
    } else if (diceTotal = "100") {
         points.innerHTML="You total" +diceTotal + "!!"+"You won"
    }
}
// User-interface logic
$(document).ready(function () {
    $("#start-btn").click(function () {
        $(".intro").hide();
        $(".player1").show();
        
        $("#hold").click(function () {
            $(".player1").hide();
            $(".player2").show();
        })
    })
  
});