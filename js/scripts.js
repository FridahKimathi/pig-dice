//Business logic
function pigDice(){
    var die1=$("#die1").get();
    var die2=$("#die2").get();
    var points=("#points").get();
    var r1=math.floor(math.random()*6)+1;
    var r2=math.floor(math.random()*6)+1;
    var diceTotal=r1+r2;
    die1.innerHTML=r1;
    die2.innerHTML=r2;
    points.innerHTML="You just rolled" +diceTotal+"!!"
        if(r1==1 || r2==1){
            diceTotal=0;
            points.innerHTML= "Your total" +diceTotal+"!!"
        }
    }
    // User-interface logic
    $(document).ready(function(){
        $("#start-btn").click(function(){
            $(".intro").hide();
            $(".names").show
            var firstPlayerName=$("#player1").val();
            var secondPlayerName=$("#player2").val();
            if(firstPlayerName.length==0 || secondPlayerName.length ==0){
                $("no-player").show();
            }else(){
              $("names").hide();
              $(".firstplayer").show();
            }

        })
        




















    })