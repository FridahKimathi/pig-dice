//Business logic
$(document).ready(function(){
function player(name,roll,points){
    this.name;
    this.roll=0;
    this.points=0;
}
player.prototype.Roll=function(){
    var die1=$("#die1").get();
    var die2=$("#die2").get();
    var points=$("#points").get();
    function rollDice(r1,r2){
    var r1=new rollDice (math.floor(math.random()*6)+1);
    var r2=new rollDice (math.floor(math.random()*6)+1);
    rollDice.prototype.diceTotal=function(){var diceTotal=r1+r2;
    }
}
   $ (die1).html()=r1;
    $(die2).html()=r2;
    $(points).html()="You just rolled" +diceTotal+"!!"
        if(r1==1 || r2==1){
            diceTotal=0;
            $(points).html()= "Your total" +diceTotal+"!!"+"You turn is over"
        }else if("diceTotal ==100"){
            $(points).html()="this.name"+"You win!!"
        }
    }


});

 // User-interface logic
 $(document).ready(function(){
    $("#start-btn").click(function(){
        $(".intro").hide();
        $(".player1",).show();
        var firstPlayerName=$("#player1").val();
        var secondPlayerName=$("#player2").val();
        if(firstPlayerName.length==0 || secondPlayerName.length ==0){
            $("no-player").show();
        }else{
            $("no-player").hide();
        }
        })

        $(".roll").click(function(){
            player.Roll=rollDice();
            
        })


    });



































































   
   
















