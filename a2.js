// Course: SENG 513 
// Date: OCT 23, 2023 
// Assignment 2 
// Name: Mu He
// UCID: 30117178
// to the game page

let letterArray = ["a","b","c","d","e","f","g"];

function gamePage(){
    window.location.href = "gamePage.html";
}

// to the home page
function homePage(){
    window.location.href = "a2.html"
}

let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let a7;
let a8;

let b1;
let b2;
let b3;
let b4;
let b5;
let b6;
let b7;
let b8;

let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;

let d1;
let d2;
let d3;
let d4;
let d5;
let d6;
let d7;
let d8;

let e1;
let e2;
let e3;
let e4;
let e5;
let e6;
let e7;
let e8;

let f1;
let f2;
let f3;
let f4;
let f5;
let f6;
let f7;
let f8;

let g1;
let g2;
let g3;
let g4;
let g5;
let g6;
let g7;
let g8;

let h1;
let h2;
let h3;
let h4;
let h5;
let h6;
let h7;
let h8;

// rule and logic of chess game
let currentPlayer = 0;
let chosenItem = false;
let chosenId;
let currentPlayerColor = "black";
let chessBoardColor;
let availibleMovePosition;


document.addEventListener("DOMContentLoaded", function () {

    // Get all the cells by their IDs
    a1 = document.getElementById("a1");
    a2 = document.getElementById("a2");
    a3 = document.getElementById("a3");
    a4 = document.getElementById("a4");
    a5 = document.getElementById("a5");
    a6 = document.getElementById("a6");
    a7 = document.getElementById("a7");
    a8 = document.getElementById("a8");

    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    b5 = document.getElementById("b5");
    b6 = document.getElementById("b6");
    b7 = document.getElementById("b7");
    b8 = document.getElementById("b8");

    c1 = document.getElementById("c1");
    c2 = document.getElementById("c2");
    c3 = document.getElementById("c3");
    c4 = document.getElementById("c4");
    c5 = document.getElementById("c5");
    c6 = document.getElementById("c6");
    c7 = document.getElementById("c7");
    c8 = document.getElementById("c8");

    d1 = document.getElementById("d1");
    d2 = document.getElementById("d2");
    d3 = document.getElementById("d3");
    d4 = document.getElementById("d4");
    d5 = document.getElementById("d5");
    d6 = document.getElementById("d6");
    d7 = document.getElementById("d7");
    d8 = document.getElementById("d8");

    e1 = document.getElementById("e1");
    e2 = document.getElementById("e2");
    e3 = document.getElementById("e3");
    e4 = document.getElementById("e4");
    e5 = document.getElementById("e5");
    e6 = document.getElementById("e6");
    e7 = document.getElementById("e7");
    e8 = document.getElementById("e8");

    f1 = document.getElementById("f1");
    f2 = document.getElementById("f2");
    f3 = document.getElementById("f3");
    f4 = document.getElementById("f4");
    f5 = document.getElementById("f5");
    f6 = document.getElementById("f6");
    f7 = document.getElementById("f7");
    f8 = document.getElementById("f8");

    g1 = document.getElementById("g1");
    g2 = document.getElementById("g2");
    g3 = document.getElementById("g3");
    g4 = document.getElementById("g4");
    g5 = document.getElementById("g5");
    g6 = document.getElementById("g6");
    g7 = document.getElementById("g7");
    g8 = document.getElementById("g8");

    h1 = document.getElementById("h1");
    h2 = document.getElementById("h2");
    h3 = document.getElementById("h3");
    h4 = document.getElementById("h4");
    h5 = document.getElementById("h5");
    h6 = document.getElementById("h6");
    h7 = document.getElementById("h7");
    h8 = document.getElementById("h8");

    addEvents(a1);
    addEvents(a2);
    addEvents(a3);
    addEvents(a4);
    addEvents(a5);
    addEvents(a6);
    addEvents(a7);
    addEvents(a8);

    addEvents(b1);
    addEvents(b2);
    addEvents(b3);
    addEvents(b4);
    addEvents(b5);
    addEvents(b6);
    addEvents(b7);
    addEvents(b8);

    addEvents(c1);
    addEvents(c2);
    addEvents(c3);
    addEvents(c4);
    addEvents(c5);
    addEvents(c6);
    addEvents(c7);
    addEvents(c8);

    addEvents(d1);
    addEvents(d2);
    addEvents(d3);
    addEvents(d4);
    addEvents(d5);
    addEvents(d6);
    addEvents(d7);
    addEvents(d8);

    addEvents(e1);
    addEvents(e2);
    addEvents(e3);
    addEvents(e4);
    addEvents(e5);
    addEvents(e6);
    addEvents(e7);
    addEvents(e8);

    addEvents(f1);
    addEvents(f2);
    addEvents(f3);
    addEvents(f4);
    addEvents(f5);
    addEvents(f6);
    addEvents(f7);
    addEvents(f8);

    addEvents(g1);
    addEvents(g2);
    addEvents(g3);
    addEvents(g4);
    addEvents(g5);
    addEvents(g6);
    addEvents(g7);
    addEvents(g8);

    addEvents(h1);
    addEvents(h2);
    addEvents(h3);
    addEvents(h4);
    addEvents(h5);
    addEvents(h6);
    addEvents(h7);
    addEvents(h8);
    
});


function addEvents(position){
    position.addEventListener("click", function () {
        console.log(position.classList)
        if(!chosenItem && checkSameColorPiece(position)){
            changeBackgroundColor(position);
            if(position.classList.contains("black-king") || position.classList.contains("white-king"))
                availibleMovePosition = kingRule(position);
            else if(position.classList.contains("black-queen") || position.classList.contains("white-queen"))
                availibleMovePosition = queenRule(position);
            else if(position.classList.contains("black-bishop") || position.classList.contains("white-bishop"))
                availibleMovePosition = bishopRule(position);
            else if(position.classList.contains("black-knight") || position.classList.contains("white-knight"))
                availibleMovePosition = knightRule(position);
            else if(position.classList.contains("black-rook") || position.classList.contains("white-rook"))
                availibleMovePosition = rookRule(position);
            else if(position.classList.contains("black-pawn") || position.classList.contains("white-pawn"))
                availibleMovePosition = pawnRule(position);
            else
                console.log("piece not be found");
            chosenId = position;
            chosenItem = true;
        }
        else if(chosenItem && availibleMovePosition.includes(position)){
            move(chosenId, position);
            changePlayer();
            let returnMSG = checkWinner();
            console.log(returnMSG);
            if (returnMSG === "White win!" || returnMSG === "Black win!")
                displayWinnerPopup(returnMSG);
            chosenItem = false;  
        }
        else if(chosenItem && checkSameColorPiece(position)){
            backNormalColor(chosenId);
            changeBackgroundColor(position);
            if(position.classList.contains("black-king") || position.classList.contains("white-king"))
                availibleMovePosition = kingRule(position);
            else if(position.classList.contains("black-queen") || position.classList.contains("white-queen"))
                availibleMovePosition = queenRule(position);
            else if(position.classList.contains("black-bishop") || position.classList.contains("white-bishop"))
                availibleMovePosition = bishopRule(position);
            else if(position.classList.contains("black-knight") || position.classList.contains("white-knight"))
                availibleMovePosition = knightRule(position);
            else if(position.classList.contains("black-rook") || position.classList.contains("white-rook"))
                availibleMovePosition = rookRule(position);
            else if(position.classList.contains("black-pawn") || position.classList.contains("white-pawn"))
                availibleMovePosition = pawnRule(position);
            else
                console.log("piece not be found");
            chosenId = position;
            chosenItem = true;
        }
        else
            console.log("do nothing");

        
    });
}

function changeBackgroundColor(position) {

    let classesArray = Array.from(position.classList);
    //console.log(classesArray);
    chessBoardColor = classesArray[1];
    let newClass = classesArray[0] + " lightblue " + classesArray[2]; 
    //console.log(newClass);
    position.setAttribute("class", newClass);
}

function knightRule(position){
    let idString = position.id;
    let availibleMoveId = [];
    let splitArray = idString.split("");
    let tempUnitName;
    let tempUnitId;
    console.log(splitArray);
    if(nextLetter(splitArray[0]) !== " "){
        if(nextNumber(nextNumber(splitArray[1])) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + nextNumber(nextNumber(splitArray[1]));
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(previousNumber(previousNumber(splitArray[1])) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + previousNumber(previousNumber(splitArray[1]));
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }

    if(nextLetter(nextLetter(splitArray[0])) !== " "){
        if(nextNumber(splitArray[1]) !== " "){
            tempUnitName = nextLetter(nextLetter(splitArray[0])) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(previousNumber(splitArray[1]) !== " "){
            tempUnitName = nextLetter(nextLetter(splitArray[0])) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }

    if(previousLetter(splitArray[0]) !== " "){
        if(nextNumber(nextNumber(splitArray[1])) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + nextNumber(nextNumber(splitArray[1]));
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(previousNumber(previousNumber(splitArray[1])) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + previousNumber(previousNumber(splitArray[1]));
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }

    if(previousLetter(previousLetter(splitArray[0])) !== " "){
        if(nextNumber(splitArray[1]) !== " "){
            tempUnitName = previousLetter(previousLetter(splitArray[0])) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(previousNumber(splitArray[1]) !== " "){
            tempUnitName = previousLetter(previousLetter(splitArray[0])) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            //console.log(tempUnitId);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }
    console.log(availibleMoveId);
    return availibleMoveId;
}

function pawnRule(position){
    let idString = position.id;
    let availibleMoveId = [];
    let splitArray = idString.split("");
    let tempUnitName;
    let tempUnitId;
    if(currentPlayerColor == "black" && nextNumber(splitArray[1]) !== " "){
        tempUnitName = splitArray[0] + nextNumber(splitArray[1]);
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
        if(previousLetter(splitArray[0]) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(nextLetter(splitArray[0]) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }
    else if(currentPlayerColor == "white" && previousNumber(splitArray[1]) !== " "){
        tempUnitName = splitArray[0] + previousNumber(splitArray[1]);
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
        if(previousLetter(splitArray[0]) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(nextLetter(splitArray[0]) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }
    console.log(availibleMoveId);
    return availibleMoveId;
}

function rookRule(position){
    let idString = position.id;
    let availibleMoveId = [];
    let splitArray = idString.split("");
    let letterPosition = splitArray[0];
    let numberPosition = splitArray[1];
    let tempUnitName;
    let tempUnitId;
    while(nextNumber(numberPosition) !== " "){
        tempUnitName = splitArray[0] + nextNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        numberPosition = nextNumber(numberPosition);
    }

    numberPosition = splitArray[1];
    
    while(previousNumber(numberPosition) !== " "){
        tempUnitName = splitArray[0] + previousNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        numberPosition = previousNumber(numberPosition);
    }

    while(nextLetter(letterPosition) !== " "){
        tempUnitName = nextLetter(letterPosition) + splitArray[1];
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        letterPosition = nextLetter(letterPosition);
    }

    letterPosition = splitArray[0];
    while(previousLetter(letterPosition) !== " "){
        tempUnitName = previousLetter(letterPosition) + splitArray[1];
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        letterPosition = previousLetter(letterPosition);
    }
    console.log(availibleMoveId);
    return availibleMoveId;
}

function bishopRule(position){
    let idString = position.id;
    let availibleMoveId = [];
    let splitArray = idString.split("");
    let letterPosition = splitArray[0];
    let numberPosition = splitArray[1];
    let tempUnitName;
    let tempUnitId;
    while(nextNumber(numberPosition) !== " " && nextLetter(letterPosition) !== " "){
        tempUnitName = nextLetter(letterPosition) + nextNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        numberPosition = nextNumber(numberPosition);
        letterPosition = nextLetter(letterPosition);
    }

    letterPosition = splitArray[0];
    numberPosition = splitArray[1];
    while(previousNumber(numberPosition) !== " " && nextLetter(letterPosition) !== " "){
        tempUnitName = nextLetter(letterPosition) + previousNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        numberPosition = previousNumber(numberPosition);
        letterPosition = nextLetter(letterPosition);
    }

    letterPosition = splitArray[0];
    numberPosition = splitArray[1];
    while(nextNumber(numberPosition) !== " " && previousLetter(letterPosition) !== " "){
        tempUnitName = previousLetter(letterPosition) + nextNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        letterPosition = previousLetter(letterPosition);
        numberPosition = nextNumber(numberPosition);
    }

    letterPosition = splitArray[0];
    numberPosition = splitArray[1];
    while(previousNumber(numberPosition) !== " " && previousLetter(letterPosition) !== " "){
        tempUnitName = previousLetter(letterPosition) + previousNumber(numberPosition);
        tempUnitId = document.getElementById(tempUnitName);
        //console.log(tempUnitId);
        if (!checkBlackPiece(tempUnitId) && !checkWhitePiece(tempUnitId))
            availibleMoveId.push(tempUnitId);
        else{
            if (!checkSameColorPiece(tempUnitId))
                availibleMoveId.push(tempUnitId);
            break;
        }
        letterPosition = previousLetter(letterPosition);
        numberPosition = previousNumber(numberPosition);
    }
    console.log(availibleMoveId);
    return availibleMoveId;
}

function queenRule(position){
    console.log([...rookRule(position), ...bishopRule(position)])
    return [...rookRule(position), ...bishopRule(position)];
}

function kingRule(position){
    let idString = position.id;
    let availibleMoveId = [];
    let splitArray = idString.split("");
    let tempUnitName;
    let tempUnitId;
    if(nextNumber(splitArray[1]) !== " "){
        tempUnitName = splitArray[0] + nextNumber(splitArray[1]);
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
        if(previousLetter(splitArray[0]) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(nextLetter(splitArray[0]) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + nextNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }

    if(previousNumber(splitArray[1]) !== " "){
        tempUnitName = splitArray[0] + previousNumber(splitArray[1]);
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
        if(previousLetter(splitArray[0]) !== " "){
            tempUnitName = previousLetter(splitArray[0]) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
        if(nextLetter(splitArray[0]) !== " "){
            tempUnitName = nextLetter(splitArray[0]) + previousNumber(splitArray[1]);
            tempUnitId = document.getElementById(tempUnitName);
            if(!checkSameColorPiece(tempUnitId)){
                availibleMoveId.push(tempUnitId);
            }
        }
    }

    if(previousLetter(splitArray[0]) !== " "){
        tempUnitName = previousLetter(splitArray[0]) + splitArray[1];
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
    }

    if(nextLetter(splitArray[0]) !== " "){
        tempUnitName = nextLetter(splitArray[0]) + splitArray[1];
        tempUnitId = document.getElementById(tempUnitName);
        if(!checkSameColorPiece(tempUnitId)){
            availibleMoveId.push(tempUnitId);
        }
    }
    console.log(availibleMoveId);
    return availibleMoveId;
}

function checkSameColorPiece(position){
    if(currentPlayerColor === "black")
        return checkBlackPiece(position);
    if(currentPlayerColor === "white")
        return checkWhitePiece(position);
}

function checkWhitePiece(position){
    return position.classList.contains("white-king") || position.classList.contains("white-queen") || 
    position.classList.contains("white-rook") || position.classList.contains("white-knight") ||
    position.classList.contains("white-bishop") || position.classList.contains("white-pawn")
} 

function checkBlackPiece(position){
    return position.classList.contains("black-king") || position.classList.contains("black-queen") || 
    position.classList.contains("black-rook") || position.classList.contains("black-knight") ||
    position.classList.contains("black-bishop") || position.classList.contains("black-pawn")
}

function nextLetter(letter){
    switch(letter){
        case "a":
            return "b";
        case "b":
            return "c";
        case "c":
            return "d";
        case "d":
            return "e";
        case "e":
            return "f";
        case "f":
            return "g";
        case "g":
            return "h";
        case "h":
            return " ";
        default:
            return " ";
    }
}

function previousLetter(letter){
    switch(letter){
        case "c":
            return "b";
        case "d":
            return "c";
        case "e":
            return "d";
        case "f":
            return "e";
        case "g":
            return "f";
        case "h":
            return "g";
        case "b":
            return "a";
        case "a":
            return " ";
        default:
            return " ";
    }
}

function nextNumber(letter){
    switch(letter){
        case "1":
            return "2";
        case "2":
            return "3";
        case "3":
            return "4";
        case "4":
            return "5";
        case "5":
            return "6";
        case "6":
            return "7";
        case "7":
            return "8";
        case "8":
            return " ";
        default:
            return " ";
    }
}

function previousNumber(letter){
    switch(letter){
        case "2":
            return "1";
        case "3":
            return "2";
        case "4":
            return "3";
        case "5":
            return "4";
        case "6":
            return "5";
        case "7":
            return "6";
        case "8":
            return "7";
        case "1":
            return " ";
        default:
            return " ";
    }
}

// start: init id
// dest: final id
function move(start, dest) {
    let startArray = Array.from(start.classList);
    let destArray = Array.from(dest.classList);
    console.log(startArray);
    console.log(destArray);
    let newdest = destArray[0] + " " + destArray[1] + " " + startArray[2]; 
    console.log(newdest);
    dest.setAttribute("class", newdest);
    start.setAttribute("class", startArray[0] + " " + chessBoardColor);
}

function changePlayer(){
    if(currentPlayerColor === "black")
        currentPlayerColor = "white";
    else
        currentPlayerColor = "black";
}

function backNormalColor(position){
    let classesArray = Array.from(position.classList);
    let newClass = classesArray[0] + " " + chessBoardColor + " " + classesArray[2]; 
    //console.log(newClass);
    position.setAttribute("class", newClass);
}

function checkWinner(){
    if(checkBlackKing() && checkWhiteKing())
        return "Continue";
    else if(checkBlackKing() && !checkWhiteKing())
        return "Black win!";
    else if(!checkBlackKing() && checkWhiteKing())
        return "White win!";
    else 
        console.log("check winner error");
        console.log(checkBlackKing());
        console.log(checkWhiteKing());
}

function checkBlackKing(){
    return a1.classList.contains("black-king") || a2.classList.contains("black-king") || 
    a3.classList.contains("black-king") || a4.classList.contains("black-king") || 
    a5.classList.contains("black-king") || a6.classList.contains("black-king") || 
    a7.classList.contains("black-king") || a8.classList.contains("black-king") || 
    b1.classList.contains("black-king") || b2.classList.contains("black-king") || 
    b3.classList.contains("black-king") || b4.classList.contains("black-king") || 
    b5.classList.contains("black-king") || b6.classList.contains("black-king") || 
    b7.classList.contains("black-king") || b8.classList.contains("black-king") ||
    c1.classList.contains("black-king") || c2.classList.contains("black-king") || 
    c3.classList.contains("black-king") || c4.classList.contains("black-king") || 
    c5.classList.contains("black-king") || c6.classList.contains("black-king") || 
    c7.classList.contains("black-king") || c8.classList.contains("black-king") ||
    d1.classList.contains("black-king") || d2.classList.contains("black-king") || 
    d3.classList.contains("black-king") || d4.classList.contains("black-king") || 
    d5.classList.contains("black-king") || d6.classList.contains("black-king") || 
    d7.classList.contains("black-king") || d8.classList.contains("black-king") ||
    e1.classList.contains("black-king") || e2.classList.contains("black-king") || 
    e3.classList.contains("black-king") || e4.classList.contains("black-king") || 
    e5.classList.contains("black-king") || e6.classList.contains("black-king") || 
    e7.classList.contains("black-king") || e8.classList.contains("black-king") || 
    f1.classList.contains("black-king") || f2.classList.contains("black-king") || 
    f3.classList.contains("black-king") || f4.classList.contains("black-king") || 
    f5.classList.contains("black-king") || f6.classList.contains("black-king") || 
    f7.classList.contains("black-king") || f8.classList.contains("black-king") ||
    e1.classList.contains("black-king") || e2.classList.contains("black-king") || 
    e3.classList.contains("black-king") || e4.classList.contains("black-king") || 
    e5.classList.contains("black-king") || e6.classList.contains("black-king") || 
    e7.classList.contains("black-king") || e8.classList.contains("black-king") ||
    f1.classList.contains("black-king") || f2.classList.contains("black-king") || 
    f3.classList.contains("black-king") || f4.classList.contains("black-king") || 
    f5.classList.contains("black-king") || f6.classList.contains("black-king") || 
    f7.classList.contains("black-king") || f8.classList.contains("black-king") ||
    g1.classList.contains("black-king") || g2.classList.contains("black-king") || 
    g3.classList.contains("black-king") || g4.classList.contains("black-king") || 
    g5.classList.contains("black-king") || g6.classList.contains("black-king") || 
    g7.classList.contains("black-king") || g8.classList.contains("black-king") ||
    h1.classList.contains("black-king") || h2.classList.contains("black-king") || 
    h3.classList.contains("black-king") || h4.classList.contains("black-king") || 
    h5.classList.contains("black-king") || h6.classList.contains("black-king") || 
    h7.classList.contains("black-king") || h8.classList.contains("black-king")
}

function checkWhiteKing(){
    return a1.classList.contains("white-king") || a2.classList.contains("white-king") || 
    a3.classList.contains("white-king") || a4.classList.contains("white-king") || 
    a5.classList.contains("white-king") || a6.classList.contains("white-king") || 
    a7.classList.contains("white-king") || a8.classList.contains("white-king") || 
    b1.classList.contains("white-king") || b2.classList.contains("white-king") || 
    b3.classList.contains("white-king") || b4.classList.contains("white-king") || 
    b5.classList.contains("white-king") || b6.classList.contains("white-king") || 
    b7.classList.contains("white-king") || b8.classList.contains("white-king") ||
    c1.classList.contains("white-king") || c2.classList.contains("white-king") || 
    c3.classList.contains("white-king") || c4.classList.contains("white-king") || 
    c5.classList.contains("white-king") || c6.classList.contains("white-king") || 
    c7.classList.contains("white-king") || c8.classList.contains("white-king") ||
    d1.classList.contains("white-king") || d2.classList.contains("white-king") || 
    d3.classList.contains("white-king") || d4.classList.contains("white-king") || 
    d5.classList.contains("white-king") || d6.classList.contains("white-king") || 
    d7.classList.contains("white-king") || d8.classList.contains("white-king") ||
    e1.classList.contains("white-king") || e2.classList.contains("white-king") || 
    e3.classList.contains("white-king") || e4.classList.contains("white-king") || 
    e5.classList.contains("white-king") || e6.classList.contains("white-king") || 
    e7.classList.contains("white-king") || e8.classList.contains("white-king") || 
    f1.classList.contains("white-king") || f2.classList.contains("white-king") || 
    f3.classList.contains("white-king") || f4.classList.contains("white-king") || 
    f5.classList.contains("white-king") || f6.classList.contains("white-king") || 
    f7.classList.contains("white-king") || f8.classList.contains("white-king") ||
    e1.classList.contains("white-king") || e2.classList.contains("white-king") || 
    e3.classList.contains("white-king") || e4.classList.contains("white-king") || 
    e5.classList.contains("white-king") || e6.classList.contains("white-king") || 
    e7.classList.contains("white-king") || e8.classList.contains("white-king") ||
    f1.classList.contains("white-king") || f2.classList.contains("white-king") || 
    f3.classList.contains("white-king") || f4.classList.contains("white-king") || 
    f5.classList.contains("white-king") || f6.classList.contains("white-king") || 
    f7.classList.contains("white-king") || f8.classList.contains("white-king") ||
    g1.classList.contains("white-king") || g2.classList.contains("white-king") || 
    g3.classList.contains("white-king") || g4.classList.contains("white-king") || 
    g5.classList.contains("white-king") || g6.classList.contains("white-king") || 
    g7.classList.contains("white-king") || g8.classList.contains("white-king") ||
    h1.classList.contains("white-king") || h2.classList.contains("white-king") || 
    h3.classList.contains("white-king") || h4.classList.contains("white-king") || 
    h5.classList.contains("white-king") || h6.classList.contains("white-king") || 
    h7.classList.contains("white-king") || h8.classList.contains("white-king")
}

// Function to display the winner pop-up
function displayWinnerPopup(winner) {
    var winnerPopup = document.getElementById("winner-popup");
    var winnerMessage = document.getElementById("winner-message");
    winnerMessage.textContent = winner + " is the winner!";
    winnerPopup.style.display = "block";
}

