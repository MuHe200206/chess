// Course: SENG 513 
// Date: OCT 23, 2023 
// Assignment 2 
// Name: Mu He
// UCID: 30117178
// to the game page
function gamePage(){
    window.location.href = "gamePage.html";
}

// to the home page
function homePage(){
    window.location.href = "a2.html"
}

// rule and logic of chess game
let currentPlayer = 0;

// function trace moveing
function movePiece(){
    // check moving piece and update location
    // switch the player
}

// main loop for game
while(true){
    movePiece();
    // check whether the game is over
    // if(current player win){
    //     break;
    // }
    if(currentPlayer==0)
        currentPlayer = 1;
    else
        currentPlayer = 0
}