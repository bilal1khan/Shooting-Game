//players health variable initialization
//player 1 = You
//player 2 = computer

var player_1_Health=100;
var player_2_Health =100;

//variable for counting round
let roundCounter=0;

let lastname;
console.log(localStorage.getItem("lastname"));

//variable for counting player score
let player_1_Score=0;
let player_2_Score=0;


//shooting button function
function shootBtn(){

    //assigning random numbers between 0-5 using random function
    var player_1_Fire =   Math.floor(Math.random() * 5);
    var player_2_Fire =  Math.floor(Math.random() * 5);

    console.log("Player 1 Fire : " +player_1_Fire);
    console.log("Player 2 Fire : "+ player_2_Fire);

    document.getElementById("p1FireScore").innerHTML=player_1_Fire;
    localStorage.setItem("player_1_Score","p1FireScore");
    document.getElementById("p2FireScore").innerHTML=player_2_Fire;

    //updating players health score
    player_1_Health = player_1_Health-player_2_Fire;
    player_2_Health= player_2_Health-player_1_Fire;

    console.log("Player 1 Health : "+player_1_Health);
    console.log("Player 2 Health : "+player_2_Health);

    roundCounter++;
    console.log(roundCounter);

    //checking players health if its zero.
    if(player_1_Health==0){
        document.getElementById("grid-item-9").innerHTML = "Player 2 Won!";

    }
    if(player_2_Health==0){
      document.getElementById("grid-item-9").innerHTML = "Player 1 Won!";
    }

    //checking number of rounds, if its 5 then disabled the shoot button.
    if(roundCounter==5){
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML="Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
    }

    if(player_1_Fire>player_2_Fire){
        player_1_Score = player_1_Score+1;

    }

    if(player_2_Fire>player_1_Fire){
        player_2_Score=player_2_Score+1;

    }

    localStorage.setItem("lastname",player_1_Score);

    console.warn("Player 1 Win :" + player_1_Score);
    console.warn("Player 2 Win :" + player_2_Score);

    document.getElementById("grid-item-4").innerHTML=player_1_Score;
    document.getElementById("grid-item-8").innerHTML=player_2_Score;

    //checking if anyone of the player score 3.
    if(player_1_Score==3){
        gameOver("You Won!")

    }

    if(player_2_Score==3){
        gameOver("Computer Won!")
    }


    //After 5 rounds checking the winner of the game.
    if(roundCounter==5){
        if(player_1_Score>player_2_Score){
          
            gameOver("You won!")
            
        }
        
        if(player_2_Score>player_1_Score){
            gameOver("Computer Won!")
        }

        if(player_2_Score==player_1_Score){
            gameOver("Match Draw")
            
         }
    }

    console.log("");
}

//function to show the result and disabled the shoot button.
function gameOver(playercomment){
    document.getElementById("grid-item-9").innerHTML = playercomment;
    document.getElementById("ShootBtn").disabled = true;
    document.getElementById("ShootBtn").innerHTML="Game Over";
    document.getElementById("ShootBtn").style.backgroundColor = "grey";
}

//function to reset the game.
function resetBtn(){
    location.reload();
    localStorage.clear();
}