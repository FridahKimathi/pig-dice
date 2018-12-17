//Business logic
var rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
}

function player(name, roll, turn, diceTotal, tempValue) {
    this.name = name;
    this.roll = 0;
    this.turn = turn;
    this.diceTotal = 0; 
    this.tempValue = 0; 
}
player.prototype.hold = function () {
    this.tempValue += this.diceTotal;

}
player.prototype.roll1 = function () {
    if (this.roll == 1) {
        this.tempValue == 0;
        alert("You just rolled a one!!!Your turn is OVER!!")
    } else {
        this.tempValue == this.roll;
    }
}
player.prototype.winnerFind = function () {
    if (this.diceTotal >= 100) {
        alert("You won!!")
    }
}
player.prototype.changeturn = function () {
    if (this.roll == 1) {
        this.turn = false;
    } else {
        this.turn = true;
    }
}




// User-interface logic

$(document).ready(function () {
    $("#start-btn").click(function () {


        var playernames = ["playerone", "playertwo"]
        playernames.forEach(function (playername) {
            var playerInput = $("input#" + playername).val();
            $("." + playername).text(playerInput);

            $(".player1").show();
            $(".intro").hide();
        });
    });

    $(".player1 #player1roll").click(function () {
        var diceValue1 = rollDice();
        if (diceValue1 == 1) {
            player1.tempValue = 0;
            alert("You rolled a one!!Your turn is over");
        } else {
            player1.tempValue += diceValue1;
        }
        $(".points").html(player1.tempValue);
    })

    $(".player2 #player2roll").click(function () {
        var diceValue2 = rollDice();
        if (diceValue2 == 1) {
            player2.tempValue = 0;
            alert("You rolled a one!!Your turn is over");
        } else {
            player2.tempValue += diceValue2;
        }
        $(".points").html(player2.tempValue);
    })
    $(".hold").click(function () {
        $(".player1").hide();
        $(".player2").show();
        player1.hold();
        player1.diceTotal = player1.tempValue;
        $(".points").html(player1.diceTotal)
        player1.winnerFind();
    })

    $(".hold").click(function () {
        player2.hold();
        player1.diceTotal = player1.tempValue;
        $(".points").html(player2.diceTotal);
        player2.winnerFind();
    })
    $("#play-again").click(function () {
        event.preventDefault();
        location.reload();
    })
});