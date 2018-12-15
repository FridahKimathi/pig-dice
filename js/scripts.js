
$(document).ready(function () {
    
    var r1 = Math.floor(Math.random() * 6) + 1;
    var r2 = Math.floor(Math.random()* 6) + 1;
    var diceTotal = r1 + r2;

    $("#die1").innerHTML = r1;
    $("#die2").innerHTML= r2;
    $("points").innerHTML = "You just rolled" + diceTotal + "!!"
    if (r1 == 1 || r2 == 1) {
        diceTotal = 0;
        $("#points").innerHTML = "Your total" + diceTotal + "!!" + "Your turn is over"
    } else if ("#points".innerHTML = "100") {
         alert("GameOver!You won!")
    }
});
    $(document).ready(function(){
        var firstName=$(player1).val();
        var secondName=$("player2").val();;
        if(firstName ==0 || secondName ==0 ){
            $(".noplayer").show();
        }
        $("#start-btn").click(function(){
            $(".intro").hide();
            $(".player1").show();


        })








    })